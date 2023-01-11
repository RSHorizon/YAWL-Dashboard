import {Component, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {NotifierService} from 'angular-notifier';

import {forkJoin} from 'rxjs';

import {DialogsService} from '../../util/dialogs/dialogs.service'

import {AssetService} from '../../yawl/resources/services/asset.service';
import {AssetCategoryService} from '../../yawl/resources/services/asset-category.service';


@Component({
  templateUrl: 'assets-list.page.html'
})
export class AssetsListPage {

  @ViewChild('searchBox')
  private searchBox: ElementRef | undefined;

  private assets = [];
  private assetCategories = [];

  public displayedItems = [];

  public selectedCategoryId: string | null = null;
  public selectedSubCategoryId: number | null = null;

  public isLoading = false;

  public searchQuery = '';


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private notifierService: NotifierService,
    private dialogsService: DialogsService,
    private assetService: AssetService,
    private assetCategoryService: AssetCategoryService) {

    this.route.queryParams.subscribe(params => {
      this.selectedCategoryId = params['catId'];
      this.selectedSubCategoryId = params['subCatId'];

      this.prepareDisplayedItems();
    });
  }

  ngOnInit() {
    this.reload();
  }

  ngAfterViewInit() {
    this.searchBox!.nativeElement.focus();
  }


  reload() {
    this.isLoading = true;

    forkJoin([this.assetService.findAll(),
      this.assetCategoryService.findAll()]
    ).subscribe((data: any[]) => {
        this.assets = data[0].sort((t1: { name: string; }, t2: { name: any; }) => t1.name.localeCompare(t2.name))
          .map((element: { type: string; }) => {
            element.type = 'asset';
            return element;
          });
        this.assetCategories = data[1].sort((t1: { name: string; }, t2: { name: any; }) => t1.name.localeCompare(t2.name))
          .map((element: { type: string; }) => {
            element.type = 'category';
            return element;
          });
        this.prepareDisplayedItems();
      },
      (error) => {
        this.notifierService.notify("error", "Could not load assets! " + error);
      },
      () => {
        this.isLoading = false;
      });


  }


  prepareDisplayedItems() {
    this.displayedItems = [];

    if (this.selectedCategoryId) {
      // @ts-ignore
      let category = this.assetCategories.find((element) => element.id == this.selectedCategoryId);
      if (category) {
        if (!this.selectedSubCategoryId) {
          // @ts-ignore
          let noneSubCategory = category.subCategories.find((element) => element.name == "None");

          // Show all subcategories without None
          // @ts-ignore
          this.displayedItems = this.displayedItems.concat(category.subCategories.filter((element) => element.name != "None"));

          // Show all assets in this category
          // @ts-ignore
          let assetsOfCategory = this.assets.filter((element) => element.categoryId == this.selectedCategoryId
            // @ts-ignore
            && element.subCategoryId == noneSubCategory.id);
          this.displayedItems = this.displayedItems.concat(assetsOfCategory);
          return;
        } else {
          // @ts-ignore
          let assetsOfCategory = this.assets.filter((element) => element.categoryId == this.selectedCategoryId
            // @ts-ignore
            && element.subCategoryId == this.selectedSubCategoryId);
          this.displayedItems = this.displayedItems.concat(assetsOfCategory);
          return;
        }
      }
    }

    this.displayedItems = this.displayedItems.concat(this.assetCategories);
  }


  openFormForNewAsset() {
    let url = '/asset/new';
    let subCategoryId = this.selectedSubCategoryId;
    if (!subCategoryId) {
      // @ts-ignore
      let category = this.assetCategories.find((element) => element.id == this.selectedCategoryId);
      if (category) {
        // @ts-ignore
        let subCategory = category.subCategories.find((element) => element.name == "None");
        if (subCategory) {
          subCategoryId = subCategory.id;
        }
      }
    }

    let queryParams = {
      'catId': this.selectedCategoryId,
      'subCatId': subCategoryId
    };
    this.router.navigate([url], {queryParams});
  }


  openFormForNewCategory() {
    let url = '/asset/category/new';
    this.router.navigate([url]);
  }


  openFormForNewSubCategory() {
    let url = '/asset/subcategory/new';
    let queryParams = {
      'catId': this.selectedCategoryId
    };
    this.router.navigate([url], {queryParams});
  }


  goBack() {
    let url = '/assets';
    let queryParams = {};

    if (this.selectedSubCategoryId) {
      queryParams = {
        'catId': this.selectedCategoryId
      };
    }

    this.router.navigate([url], {queryParams});
    this.searchQuery = '';
  }


  gotoDetailsPage(item: { type: string; id: any; }) {
    this.searchQuery = '';

    if (item.type == 'asset') {
      //this.router.navigate(['asset', item.id]);
    } else if (item.type == 'category') {
      let queryParams = {
        'catId': item.id
      };
      this.router.navigate(['assets'], {queryParams});
    } else {
      let queryParams = {
        'catId': this.selectedCategoryId,
        'subCatId': item.id
      };
      this.router.navigate(['assets'], {queryParams});
    }

  }


  gotoEditPage(item: any) {
  }


  intendRemove(item: { type: string; name: string; id: string; }) {
    if (item.type == 'asset') {
      let title = "Delete asset";
      let message = "Are you sure you want to delete the asset \"" + item.name + "\"?";
      this.dialogsService.openConfirmationDialog(title, message, () => {
        this.assetService.remove(item.id).subscribe(() => {
          this.reload();
        });
      });
    } else if (item.type == 'category') {
      let title = "Delete category";
      let message = "Are you sure you want to delete the category \"" + item.name + "\"?";
      this.dialogsService.openConfirmationDialog(title, message, () => {
        this.assetCategoryService.remove(item.id).subscribe(() => {
          this.reload();
        });
      });
    } else {
      let title = "Delete sub category";
      let message = "Are you sure you want to delete the sub category \"" + item.name + "\"?";
      this.dialogsService.openConfirmationDialog(title, message, () => {
        this.assetCategoryService.removeSubCategory(this.selectedCategoryId!, item.id).subscribe(() => {
          this.reload();
        });
      });
    }

  }
}
