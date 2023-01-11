import {Component, Injector, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

import {ModalService} from './modal.service';


@Component({
  selector: "modal-placeholder",
  template: `
    <div #placeholder></div>`
})
export class ModalPlaceholderComponent implements OnInit {


  @ViewChild("placeholder", {read: ViewContainerRef})
    // @ts-ignore
  viewContainerRef: ViewContainerRef;

  constructor(
    private injector: Injector,
    private modalService: ModalService) {
  }


  ngOnInit(): void {
    this.modalService.registerViewContainerRef(this.viewContainerRef);
    this.modalService.registerInjector(this.injector);
  }
}


