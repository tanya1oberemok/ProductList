import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/modules/list';
import { ListsService } from 'src/app/services/lists.service';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists: List[];

  constructor(
    private listsService: ListsService
    ) { }

  ngOnInit() {
    this.listsService.getProducts().subscribe(data => this.lists=data["productList"]);
    this.getProguct();
  }

  getProguct(): void {
    this.listsService.getProducts()
    .subscribe(lists => this.lists == lists);
  }

}


 




