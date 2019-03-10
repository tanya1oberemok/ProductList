import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modules/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 getAll() {
        return this.http.get<User[]>(`/api`);
    }

    getById(id: number) {
        return this.http.get(`/api/${id}`);
    }

    register(user: User) {
        return this.http.post(`api/register`, user);
    }

  constructor(private http: HttpClient) { }

 
}
