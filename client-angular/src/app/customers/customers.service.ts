import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class CustomersService {

  constructor(private http: Http) { }

  getAll() {
    return this.http.get('http://localhost:3000/api/customers')
      .map(resp => resp.json())
      .catch(this.handleError);
  }

  private handleError = (error: any): Promise<any> => {
    console.log('hmmmmmmm')
    console.log(error);
    return Promise.reject(error);
  }

}
