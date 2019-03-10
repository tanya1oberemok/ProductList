import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class ListsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('/assets/list.json')
  }

  getId(id: number) {
    return  of( this.getProducts().find(list => list.id === id));
  }
}
