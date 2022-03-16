import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url="http://localhost:8082/register.api"
  constructor( private http:HttpClient) { }


  register(customer:Customer):Observable<object>{

    console.log(customer)

    return this.http.post(`${this.url}`,customer)


  }
}
