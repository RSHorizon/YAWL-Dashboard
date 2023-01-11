import { Component } from '@angular/core';

/**
 * This is the root component.
 * The app starts with this component.
 *
 * @author Philipp Thomas
 */
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>\n\
				<context-menu></context-menu>\n\
				<popup-menu></popup-menu>\n\n\
				<modal-placeholder></modal-placeholder>
        <notifier-container></notifier-container>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {

  ngOnInit() {
    document.body.classList.remove("loading");
  }
}
