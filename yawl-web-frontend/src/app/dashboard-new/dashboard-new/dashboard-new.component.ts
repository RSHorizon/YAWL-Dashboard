import { Component, OnInit } from '@angular/core';
import { faFilePen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-new',
  templateUrl: './dashboard-new.component.html',
  styleUrls: ['./dashboard-new.component.css']
})
export class DashboardNewComponent implements OnInit {

  faFilePen=faFilePen

  constructor() { }
  // @ts-ignore
  viewType: number = '0';

  ngOnInit(): void {
  }

  isOperationalView(): boolean{
    return this.viewType == ViewType.operational;
  }

  isStrategicalView(): boolean{
    return this.viewType == ViewType.strategical;
  }
}

enum ViewType {
  operational,
  strategical
}
