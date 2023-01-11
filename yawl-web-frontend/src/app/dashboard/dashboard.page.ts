import {Component, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {PopupMenuService} from '../util/popup-menu.service';

import {NotifierService} from 'angular-notifier';

import {DashboardService} from './dashboard.service';

import {FixedColumnLayoutComponent} from './layout/fixed-column-layout.component';
import {faBars, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'dashboard-page',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['../../style/components/dashboard.scss']
})
export class DashboardPage {
  faBars = faBars
  @ViewChild(FixedColumnLayoutComponent)
    // @ts-ignore
  fixedColumnLayoutComponent: FixedColumnLayoutComponent

  dashboardData: any;

  isLoading = false;

  constructor(
    private dashboardService: DashboardService,
    private popupMenuService: PopupMenuService,
    private notifierService: NotifierService,
    private route: ActivatedRoute,
    private router: Router) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.isLoading = true;

      if (!params['id']) {
        this.dashboardService.getDashboardsOfUser().subscribe((result) => {
            this.dashboardData = result.dashboards[0];
          },
          (error) => {
            this.notifierService.notify("error", "Could not load dashboard!");
          },
          () => {
            this.isLoading = false;
          });
      } else {
        this.dashboardService.getDashboardById(params['id']).subscribe((result) => {
            this.dashboardData = result;
          },
          (error) => {
            this.notifierService.notify("error", "Could not load dashboard!");
          },
          () => {
            this.isLoading = false;
          });
      }
    });
  }


  navigateToSettings() {
    if (!this.dashboardData) {
      return;
    }
    let url = '/dashboard/' + this.dashboardData.id + '/settings';
    this.router.navigate([url]);
  }

  navigateToDashboardList() {
    let url = '/manage/dashboards';
    this.router.navigate([url]);
  }

}
