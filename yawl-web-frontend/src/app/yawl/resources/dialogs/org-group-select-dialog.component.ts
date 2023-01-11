import {Component, ElementRef, ViewChild} from '@angular/core';

import {Modal} from '../../../util/modal/modal.decorator';

import {OrgGroupService} from '../services/org-group.service';
import {OrgGroup} from '../entities/org-group.entity';


@Component({
  selector: "org-group-select-dialog.component",
  templateUrl: 'org-group-select-dialog.component.html'
})
@Modal()
export class OrgGroupSelectDialogComponent {

  @ViewChild('searchBox')
    // @ts-ignore
  searchBox: ElementRef;

  ignore: string[] = [];
// @ts-ignore
  onSelected: Function;

  title: string = "Select group";

  showNoSelectionButton = false;

  public searchQuery = '';
  public selectableOrgGroups = [];

  public allOrgGroups = [];

  // @ts-ignore
  closeModal: Function;


  constructor(
    private orgGroupService: OrgGroupService) {
  }

  ngAfterViewInit() {
    this.searchBox.nativeElement.focus();
  }


  select(orgGroup: any): void {
    this.closeModal();
    this.onSelected(orgGroup);
  }


  ngOnInit() {
    this.orgGroupService.findAll().subscribe((orgGroups: OrgGroup[]) => {
        // @ts-ignore
        this.allOrgGroups = orgGroups.sort((n1, n2) => {
          if (n1.name > n2.name) {
            return 1;
          }
          if (n1.name < n2.name) {
            return -1;
          }
          return 0;
        });
        this.filter();
      },
      () => {
        console.log("Could not load groups!");
      });
  }


  filter() {
    if (this.searchQuery !== "") {
      this.selectableOrgGroups = this.allOrgGroups
        .filter((el: OrgGroup) => {
          return (el.name).toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
            || (el.description && el.description.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1)
            || (el.notes && el.notes.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1);
        })
        .filter((el: OrgGroup) => {
          return this.ignore.indexOf(el.id) == -1;
        });
    } else {
      this.selectableOrgGroups = this.allOrgGroups
        .filter((el: OrgGroup) => {
          return this.ignore.indexOf(el.id) == -1;
        });
    }
  }

}


