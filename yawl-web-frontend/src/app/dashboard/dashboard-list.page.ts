import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {NotifierService} from 'angular-notifier';

import {DashboardService} from './dashboard.service';
import {faEye, faPencil, faArrowUp, faArrowDown, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: 'dashboard-list.page.html',
  styleUrls: ['../../style/components/dashboard.scss']
})
export class DashboardListPage {
  faEye=faEye
  faPencil=faPencil
  faArrowUp=faArrowUp
  faArrowDown=faArrowDown
  faTrash=faTrash
  faPlus=faPlus
  dashboards: any = [];

  isLoading = false;

  showDashboardForm = false;
  dashboard: any = {};
  dashboardFormMode = 'new';
  showNewDashboardForm = true;


  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private notifierService: NotifierService) {
  }

  ngOnInit() {
    this.reload();
  }


  reload() {
    this.isLoading = true;

    this.dashboardService.getDashboardsOfUser().subscribe((result) => {
        this.dashboards = result.dashboards;
      },
      (error) => {
      },
      () => {
        this.isLoading = false;
      });
  }


  saveNewDashboard() {
    let title = this.dashboard.title;

    if (!title || title.trim() == "") {
      return;
    }

    this.isLoading = true;
    if (this.dashboardFormMode == 'new') {
      this.dashboardService.addDashboard(title.trim()).subscribe((result) => {
          this.reload();
          this.showDashboardForm = false;
          this.notifierService.notify("success", "You successfully created a new dashboard");
        },
        (error) => {
          this.notifierService.notify("error", error);
        },
        () => {
          this.isLoading = false;
        });
    } else {
      this.dashboardService.renameDashboard(this.dashboard.id, title.trim()).subscribe((result) => {
          this.reload();
          this.showDashboardForm = false;
          this.notifierService.notify("success", "You successfully renamed the dashboard");
        },
        (error) => {
          this.notifierService.notify("error", error);
        },
        () => {
          this.isLoading = false;
        });
    }
  }


  gotoDashboard(item: { id: string; }) {
    let url = '/dashboard/' + item.id;
    this.router.navigate([url]);
  }


  editDashboard(item: object | null) {
    this.dashboard = Object.create(item);
    this.showDashboardForm = true;
    this.dashboardFormMode = 'edit';
  }


  moveUp(item: any) {
    this.moveTo(item, -1);
  }


  moveDown(item: any) {
    this.moveTo(item, 1);
  }


  moveTo(item: { id: string; orderNo: number; }, direction: number) {
    this.dashboardService.changeOrderNo(item.id, item.orderNo + direction).subscribe((result) => {
        this.reload();
        this.showDashboardForm = false;
        this.notifierService.notify("success", "You successfully moved the dashboard in the list");
      },
      (error) => {
        this.notifierService.notify("error", error);
      },
      () => {
        this.isLoading = false;
      });
  }


  getMaxOrderNo(): number {
    let max = 0;
    for (let entry of this.dashboards) {
      // @ts-ignore
      if (max < entry.orderNo) {
        // @ts-ignore
        max = entry.orderNo;
      }
    }
    return max;
  }


  openDashboardFormForNew() {
    this.dashboard = {};
    this.showDashboardForm = true;
    this.dashboardFormMode = 'new';
  }

  closeDashboardForm() {
    this.showDashboardForm = false;
  }


  gotoDashboardSettings(item: { id: string; }) {
    let url = '/dashboard/' + item.id + '/settings';
    this.router.navigate([url]);
  }


  removeDashboard(item: { id: string; }) {
    this.isLoading = true;
    this.dashboardService.removeDashboard(item.id).subscribe((result) => {
        this.reload();
        this.notifierService.notify("success", "You successfully deleted a dashboard");
      },
      (error) => {
        this.notifierService.notify("error", error);
      },
      () => {
        this.isLoading = false;
      });
  }

}
