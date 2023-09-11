import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {NotifierService} from 'angular-notifier';
import {SessionService} from '../session/session.service';
import {Subscription} from "rxjs";

/**
 * @author Philipp R. Thomas
 * @editedBy Robin Steinwarz
 */

@Component({
  selector: 'default-page',
  templateUrl: 'default-page.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DefaultPageComponent implements OnInit {
  dashboards: any = [];

  private subscription: Subscription = Subscription.EMPTY;

  withDashboardService = true;
  organisationToggledOn = false;

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private notifierService: NotifierService) {
  }


  ngOnInit() {
    /*if(this.withDashboardService) {
        this.subscription = this.dashboardService.dashboardChanged.subscribe(() => {
            this.reload()
        });

        this.reload();
    }*/
  }


  ngOnDestroy() {
    if (this.subscription) {
      // @ts-ignore
      this.subscription.unsubscribe();
    }
  }


  reload() {
    /*this.dashboardService.getDashboardsOfUser().subscribe((result: { dashboards: any; }) => {
        this.dashboards = result.dashboards;
      },
      (error: string) => {
        this.notifierService.notify("Error", "Could not load dashboards. "+error)
      },
      () => {});*/
  }

  toggleOrganisation(event: MouseEvent) {
    this.organisationToggledOn = !this.organisationToggledOn;
  }

  onLogoutButton() {
    this.sessionService.logout().subscribe(() => {
        this.notifierService.notify("success", "You have been successfully logged out");
        this.router.navigate(['/login']);
      },
      () => {
        this.notifierService.notify("error", "An error occured while logging out");
      });
  }

  getUsername(): string {
    return this.sessionService.getUsername();
  }

}
