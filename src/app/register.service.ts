import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { RegisterStatus } from './register-status';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url="http://localhost:8082/register.api"
  constructor( private http:HttpClient) { }


  register(customer:Customer):Observable<RegisterStatus>{

    console.log(customer)

    return this.http.post<RegisterStatus>(`${this.url}`,customer)


  }
}
