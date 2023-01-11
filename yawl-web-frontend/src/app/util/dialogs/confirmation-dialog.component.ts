import {Component} from '@angular/core';

import {Modal} from '../modal/modal.decorator';


@Component({
  selector: "confirmation-dialog",
  templateUrl: 'confirmation-dialog.component.html'
})
@Modal()
export class ConfirmationDialogComponent {

  // @ts-ignore
  title: string;
  // @ts-ignore
  message: string;

  // @ts-ignore
  onOk: Function
  // @ts-ignore
  closeModal: Function;

  yes(): void {
    this.closeModal();

    if (this.onOk) {
      this.onOk();
    }
  }

}


