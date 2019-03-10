import { Component, OnInit } from '@angular/core';
import { ListsService } from 'src/app/services/lists.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  


  constructor(
    private listsService: ListsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    
    this.getId();
  }

  getId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.listsService.getId(id)
    .subscribe(list => list.id === id);
  }

}
