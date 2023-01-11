import {Component, ElementRef, ViewChild} from '@angular/core';

import {Modal} from '../../../util/modal/modal.decorator';

import {UserService} from '../services/user.service';
import {User} from '../entities/user.entity';


@Component({
  selector: "user-select-dialog.component",
  templateUrl: 'user-select-dialog.component.html'
})
@Modal()
export class UserSelectDialogComponent {

  @ViewChild('searchBox')
  searchBox: ElementRef | undefined;

  ignore: string[] = [];

  // @ts-ignore
  onSelected: Function;

  title: string = "Select user";

  showNoSelectionButton = false;

  public searchQuery = '';

  public users = [];

  // @ts-ignore
  closeModal: Function;
// @ts-ignore
  filter: Function;

  constructor(
    private userService: UserService) {
  }

  ngAfterViewInit() {
    if(this.searchBox != null){
      this.searchBox.nativeElement.focus();
    }
  }


  select(user: any): void {
    this.closeModal();
    this.onSelected(user);
  }


  ngOnInit() {
    this.userService.findAll().subscribe((users: User[]) => {
        // @ts-ignore
        this.users = users.filter((el: User) => {
          // @ts-ignore
          return this.ignore.indexOf(el.id) == -1;
        });
      },
      () => {
        console.log("Could not load users!");
      });
  }

}


