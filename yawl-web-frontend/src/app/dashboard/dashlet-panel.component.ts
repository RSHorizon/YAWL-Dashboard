import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input, OnChanges, OnInit,
  QueryList,
  ViewChild, ViewChildren,
  ViewContainerRef
} from '@angular/core';

import {DashletTypeService} from './dashlet-type.service';

@Component({
  selector: 'dashlet-panel',
  template: '<div #child></div>'
})
export class DashletPanelComponent implements AfterViewInit {

  @Input("dashlet-id") dashletId: String | undefined;
  @Input("dashlet-type") dashletType: String | undefined;
  @ViewChild('child', {read: ViewContainerRef}) child!: ViewContainerRef;
  private initizalized = false;

  // @ts-ignore
  private componentRef: ComponentRef<any>

  constructor(
    private dashletTypeService: DashletTypeService,
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
    this.initizalized = true;

    // @ts-ignore
    let componentType = this.dashletTypeService.getDashletComponent(this.dashletType);
    let component = this.componentFactoryResolver.resolveComponentFactory(componentType);

    // @ts-ignore
    this.componentRef = this.child.createComponent(component);
    this.componentRef.instance.dashletId = this.dashletId;
    if (this.componentRef.instance.onDashletCreated) {
      this.componentRef.instance.onDashletCreated();
    }
  }

  reload() {
    if(!this.initizalized){
      return;
    }
    this.componentRef.instance.reload();
  }

  isLoading() {
    if(!this.initizalized){
      return;
    }
    return this.componentRef.instance.isLoading;
  }
}
