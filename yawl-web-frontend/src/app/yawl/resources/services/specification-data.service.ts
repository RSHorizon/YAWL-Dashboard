import {ApplicationRef, ChangeDetectorRef, EventEmitter, Injectable, NgZone} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NotifierService} from "angular-notifier";
import {SpecificationService} from "./specification.service";
import {ExtensionSpecificationService} from "./extension-specification.service";
import {SpecificationDataContainer} from "../dto/specification-data-container.entity";
import {StatisticService} from "./statistic.service";
import {AsyncSubject, forkJoin} from "rxjs";
import {ExtensionSpecification} from "../dto/extension-specification.entity";
import {ParticipantService} from "./participant.service";
import {ColorUtils} from "../../../util/color-util";
import {StatisticUtils} from "../../../util/statistic-utils";

@Injectable({
  providedIn: 'root'
})
export class SpecificationDataService {

  constructor(private http: HttpClient,
              private notifierService: NotifierService,
              private specificationService: SpecificationService,
              private statisticService: StatisticService,
              private participantService: ParticipantService,
              private extensionSpecificationService: ExtensionSpecificationService) {
  }

  private dataHasBeenLoaded = false;
  // @ts-ignore
  private specificationDataContainers: SpecificationDataContainer[];
  private loading: AsyncSubject<SpecificationDataContainer[]>| undefined = undefined;

  public getSpecificationsData(): AsyncSubject<SpecificationDataContainer[]> {
    if (!this.dataHasBeenLoaded) {
      if(this.loading !== undefined){
        return this.loading;
      }else{
        return this.refreshSpecificationsData();
      }
    }
    let subject = new AsyncSubject<SpecificationDataContainer[]>();
    subject.next(this.specificationDataContainers);
    subject.complete();
    return subject;
  }

  private refreshSpecificationsData(): AsyncSubject<SpecificationDataContainer[]> {
    this.specificationDataContainers = [];
    let subject = new AsyncSubject<SpecificationDataContainer[]>();
    this.loading = subject;
    this.specificationService.findAll().subscribe(specifications => {
      this.extensionSpecificationService.getExtensionSpecifications().subscribe(extensionSpecifications => {
        // if no extension specification exists for one specification,
        // inform the backend
        let observables: any[] = [];
        specifications.forEach((specification, key) => {
          // @ts-ignore
          let specificationDataContainer: SpecificationDataContainer = {};
          specificationDataContainer.specificationInformation = specification;
          let extensionSpecification = extensionSpecifications.filter(extensionSpecification =>
            extensionSpecification.specificationId === specification.id
            && extensionSpecification.specversion === specification.specversion
            && extensionSpecification.uri === specification.uri);

          if (extensionSpecification.length === 0) {
            let extensionSpecificationObservable = this.extensionSpecificationService
              .getExtensionSpecification(specification.id, specification.specversion, specification.uri);
            observables.push(extensionSpecificationObservable);
            extensionSpecificationObservable.subscribe((extensionSpecification: ExtensionSpecification) => {
                specificationDataContainer.extensionSpecification = extensionSpecification;
              });
          } else {
            specificationDataContainer.extensionSpecification = extensionSpecification[0];
          }

          let statisticObservable = this.statisticService
            .getSpecificationStatistic(specification.id, specification.specversion, specification.uri);
          observables.push(statisticObservable);
          statisticObservable.subscribe(specificationStatistic => {
              specificationDataContainer.specificationStatistic = specificationStatistic;
              specificationDataContainer.specificationStatistic.color = ColorUtils.getColorMix();
              specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
                caseStatistic.color = ColorUtils.getColorMix();
              })
              specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
                taskStatistic.color = ColorUtils.getColorMix();
              })
            })

          let participantObservable = this.participantService.findAll();
          observables.push(participantObservable);
          participantObservable.subscribe(participants => {
            specificationDataContainer.participants = participants;
          })

          this.specificationDataContainers!.push(specificationDataContainer);

          if(key === specifications.length - 1){
            forkJoin(observables).subscribe(() => {
              this.loading = undefined;
              this.dataHasBeenLoaded = true;
              subject.next(this.specificationDataContainers.sort((a: SpecificationDataContainer, b: SpecificationDataContainer) => {
                return a.specificationInformation.uri.localeCompare(b.specificationInformation.uri)
              }));
              subject.complete();
            })
          }
        });
      })
    });
    return subject;
  }
}
