import {Component, OnInit} from '@angular/core';
import {faFilePen} from '@fortawesome/free-solid-svg-icons';

/**
 * @author Robin Steinwarz
 */
@Component({
  selector: 'app-dashboard-new',
  templateUrl: './dashboard-new.component.html',
  styleUrls: ['./dashboard-new.component.css']
})
export class DashboardNewComponent implements OnInit {
  faFilePen = faFilePen

  constructor() {
  }
  ngOnInit(): void {
  }
}
