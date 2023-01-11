import {Component, ElementRef, ViewChild} from '@angular/core';

import {Modal} from '../../../util/modal/modal.decorator';

import {CapabilityService} from '../services/capability.service';
import {Capability} from '../entities/capability.entity';


@Component({
  selector: "capability-select-dialog.component",
  templateUrl: 'capability-select-dialog.component.html'
})
@Modal()
export class CapabilitySelectDialogComponent {

  @ViewChild('searchBox')
    // @ts-ignore
  searchBox: ElementRef;

  ignore: string[] = [];

  // @ts-ignore
  onSelected: Function;

  title: string = "Select capability";

  showNoSelectionButton = false;

  public searchQuery = '';
  public selectableCapabilities = [];

  public allCapabilities = [];

  // @ts-ignore
  closeModal: Function;


  constructor(
    private capabilityService: CapabilityService) {
  }

  ngAfterViewInit() {
    this.searchBox.nativeElement.focus();
  }


  select(capability: any): void {
    this.closeModal();
    this.onSelected(capability);
  }


  ngOnInit() {
    this.capabilityService.findAll().subscribe((capabilities: Capability[]) => {
        // @ts-ignore
        this.allCapabilities = capabilities.sort((n1, n2) => {
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
        console.log("Could not load capabilities!");
      });
  }


  filter() {
    if (this.searchQuery !== "") {
      this.selectableCapabilities = this.allCapabilities
        .filter((el: Capability) => {
          return (el.name).toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
            || (el.description && el.description.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1)
            || (el.notes && el.notes.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1);
        })
        .filter((el: Capability) => {
          return this.ignore.indexOf(el.id) == -1;
        });
    } else {
      this.selectableCapabilities = this.allCapabilities
        .filter((el: Capability) => {
          return this.ignore.indexOf(el.id) == -1;
        });
    }
  }

}


