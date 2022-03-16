
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

     customerId=0;
     message="";


  constructor(private service:RegisterService) { }

   customer:Customer=new Customer();




  ngOnInit(): void {

  }

  processRegistration(){

    this.service.register(this.customer).subscribe(
      res=>{
      if(res.status==true){

        this.customerId=res.registeredCustomerId;
      }else{
        this.message=res.messageIfAny;
      }
    }

    )

  }



}
