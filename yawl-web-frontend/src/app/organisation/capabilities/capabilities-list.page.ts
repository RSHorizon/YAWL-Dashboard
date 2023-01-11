import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {NotifierService} from 'angular-notifier';

import {DialogsService} from '../../util/dialogs/dialogs.service'

import {CapabilityService} from '../../yawl/resources/services/capability.service';


@Component({
  templateUrl: 'capabilities-list.page.html'
})
export class CapabilitiesListPage {


  @ViewChild('searchBox')
    // @ts-ignore
  searchBox: ElementRef;

  public capabilities = [];

  public isLoading = false;

  public searchQuery = '';


  constructor(
    private router: Router,
    private notifierService: NotifierService,
    private dialogsService: DialogsService,
    private capabilityService: CapabilityService) {
  }

  ngOnInit() {
    this.reload();
  }

  ngAfterViewInit() {
    this.searchBox.nativeElement.focus();
  }


  reload() {
    this.isLoading = true;

    this.capabilityService.findAll().subscribe((loadedCapabilities) => {
        // @ts-ignore
        this.capabilities = loadedCapabilities;
      },
      (error) => {
        this.notifierService.notify("error", "Could not load capabilities! " + error);
      },
      () => {
        this.isLoading = false;
      });

  }


  openFormForNew() {
    let url = '/capability/new';
    this.router.navigate([url]);
  }


  gotoDetailsPage(item: { id: any; }) {
    this.router.navigate(['capability', item.id]);
  }

}
