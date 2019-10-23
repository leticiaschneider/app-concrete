import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private user: string ;
  constructor() { }

  setUser(user: string ) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
}
