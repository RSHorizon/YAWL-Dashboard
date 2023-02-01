import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {faPencil, faArrowsToEye} from '@fortawesome/free-solid-svg-icons';
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {SpecificationService} from '../../yawl/resources/services/specification.service';
import {Specification} from "../../yawl/resources/entities/specification.entity";
import {MatTableDataSource} from "@angular/material/table";
import {ExtensionSpecificationService} from "../services/extension-specification.service";
import {ExtensionSpecification} from "../../yawl/resources/dto/extension-specification.entity";
import {CaseStatistic} from "../../yawl/resources/dto/case-statistic.entity";
import {FormatUtils} from "../../util/format-util";

/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-specification-view',
  templateUrl: './specification-view.component.html',
  styleUrls: ['./specification-view.component.css']
})
export class SpecificationViewComponent implements OnInit {
  faPencil = faPencil
  faArrowsToEye = faArrowsToEye
  specificationsURL = "http://localhost:8080/resourceService/faces/caseMgt.jsp"

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['uri', 'specversion', 'documentation', 'activeCasesCount', 'core', 'actions'];
  // @ts-ignore
  dataSource: MatTableDataSource | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer, private specificationService: SpecificationService, private extensionSpecificationService: ExtensionSpecificationService) {
  }

  extensionSpecification: ExtensionSpecification[] | undefined = undefined;

  ngOnInit(): void {
    this.specificationService.findAll().subscribe(specifications => {
      this.dataSource = new MatTableDataSource(specifications);
      this.dataSource.sort = this.sort;

      this.extensionSpecificationService.getExtensionSpecifications().subscribe(extensionSpecifications => {
        this.extensionSpecification = extensionSpecifications;
        // if no extension specification exists for one specification,
        // inform the backend
        specifications.forEach(specification => {
          if (extensionSpecifications.filter(extensionSpecification =>
            extensionSpecification.specificationId === specification.id).length === 0) {
            this.extensionSpecificationService.getExtensionSpecification(specification.id, specification.specversion, specification.uri)
              // @ts-ignore
              .subscribe(extensionSpecification => this.extensionSpecification.push(extensionSpecification));
          }
        })

        // add core values to specification for sorting
        specifications.forEach(specification => {
          specification.core = this.isCoreChecked(specification);
        })

      })
    });
  }

  isCoreChecked(specification: Specification): boolean {
    if (this.extensionSpecification === undefined) {
      return false;
    }
    let ext = this.extensionSpecification?.find((extensionSpecification) =>
      extensionSpecification.specificationId === specification.id
      && extensionSpecification.specversion === specification.specversion
      && extensionSpecification.uri === specification.uri);
    if (ext == null) {
      return false;
    }
    // @ts-ignore
    return <int>ext.core;
  }

  checkCore(specification: Specification): void {

    if (this.extensionSpecification === undefined) {
      return;
    }
    let ext = this.extensionSpecification?.find((extensionSpecification) =>
      extensionSpecification.specificationId === specification.id
      && extensionSpecification.specversion === specification.specversion
      && extensionSpecification.uri === specification.uri
    );

    if (ext == null) {
      return;
    }
    let willBeCoreSpecification = false;
    if (ext.core == "0") {
      willBeCoreSpecification = true;
    }
    // @ts-ignore
    ext.core = <number>willBeCoreSpecification;
    // @ts-ignore
    this.extensionSpecificationService.setCoreAttribute(specification.id, specification.specversion, specification.uri, <number>willBeCoreSpecification).subscribe();
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sort: Sort) {
    const isAsc = sort.direction === 'asc';
    if (sort.direction === '') {
      this.dataSource?.data.sort((a: Specification, b: Specification) => this.compare(a.specversion, b.specversion, false));
    }
    return;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }


}
