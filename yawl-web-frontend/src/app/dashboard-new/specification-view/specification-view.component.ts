import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {faPencil, faArrowsToEye} from '@fortawesome/free-solid-svg-icons';
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatTableDataSource} from "@angular/material/table";
import {env} from "../../../environments/environment";
import {SpecificationDataService} from "../../yawl/resources/services/specification-data.service";
import {SpecificationDataContainer} from "../../yawl/resources/dto/specification-data-container.entity";
import {ExtensionSpecificationService} from "../../yawl/resources/services/extension-specification.service";

/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-specification-view',
  templateUrl: './specification-view.component.html',
  styleUrls: ['./specification-view.component.css']
})
export class SpecificationViewComponent implements OnInit, AfterViewInit {
  faPencil = faPencil
  faArrowsToEye = faArrowsToEye
  specificationsURL = env.remoteUIUrl;

  // @ts-ignore
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['uri', 'specversion', 'documentation', 'activeCasesCount', 'core', 'actions'];
  dataSource: MatTableDataSource<SpecificationDataContainer> = new MatTableDataSource<SpecificationDataContainer>();

  specificationDataContainer: SpecificationDataContainer[] | undefined = undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer,
              private specificationDataService: SpecificationDataService,
              private extensionSpecificationService: ExtensionSpecificationService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.specificationDataService.getSpecificationsData().subscribe(specificationDataContainers => {
      this.dataSource.data = specificationDataContainers;
      this.specificationDataContainer = specificationDataContainers;
      this.dataSource.sort = this.sort;
      this.dataSource.sortingDataAccessor = (row, key) => {
        switch (key) {
          case 'uri':
            return row.specificationInformation.uri;
          case 'specversion':
            return row.specificationInformation.specversion;
          case 'documentation':
            return row.specificationInformation.description;
          case 'activeCaseCount':
            return row.specificationInformation.activeCasesCount;
          case 'core':
            return row.extensionSpecification.core;
          default:
            return row.specificationInformation.specversion;
        }
      };
    });
  }


  checkCore(specification: SpecificationDataContainer): void {
    let willBeCoreSpecification = false;
    // @ts-ignore
    if (specification.extensionSpecification.core === false) {
      willBeCoreSpecification = true;
    }
    // @ts-ignore
    specification.extensionSpecification.core = <number>willBeCoreSpecification;
    let id = specification.specificationInformation.id;
    let uri = specification.specificationInformation.uri;
    let version = specification.specificationInformation.specversion;
    // @ts-ignore
    this.extensionSpecificationService.setCoreAttribute(id, version, uri, <number>willBeCoreSpecification).subscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sort: Sort) {
    const isAsc = sort.direction === 'asc';
    if (sort.direction === '') {
      this.dataSource?.data.sort((a: SpecificationDataContainer, b: SpecificationDataContainer) =>
        this.compare(a.specificationInformation.specversion, b.specificationInformation.specversion, false));
    }
    return;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }


}
