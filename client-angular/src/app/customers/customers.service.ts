import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class CustomersService {

  constructor(private http: Http) { }

  getAll() {
    return this.http.get('http://localhost:3030/api/customers')
      .map(resp => resp.json())
      .catch(this.handleError);
  }

  get(id: string) {
    return this.http.get(`http://localhost:3030/api/customers/${id}`)
      .map(resp => resp.json())
      .catch(this.handleError);
  }

  loadMock() {
    return this.http.get('http://localhost:3030/api/loadMockCustomers')
      .map(resp => resp.json())
      .catch(this.handleError);
  }

  clearAll() {
    return this.http.get('http://localhost:3030/api/clearAllCustomers')
      .map(resp => resp.json())
      .catch(this.handleError);
  }


  private handleError = (error: any): Promise<any> => {
    console.log(error);
    return Promise.reject(error);
  }

}
