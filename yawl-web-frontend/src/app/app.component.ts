import {Component} from '@angular/core';

/**
 * This is the root component.
 * The app starts with this component.
 *
 * @author Philipp Thomas
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  ngOnInit() {
    document.body.classList.remove("loading");
  }
}
