import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  paymentAddForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder , private paymentService:PaymentService , private toastrService:ToastrService) {}

  ngOnInit(): void {}

  createPaymentAddForm(){
    this.paymentAddForm = this.formBuilder.group({
      customerId:["",Validators.required],
      fullName:["",Validators.required],
      cvv:["",Validators.required],
      expiryDate:["",Validators.required],
      cardNumber:["",Validators.required]
    })
  }

  add(){
    if(this.paymentAddForm.valid){
      let paymentModel = Object.assign({},this.paymentAddForm.value)
      this.paymentService.add(paymentModel).subscribe(response=>{
        console.log(response);
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        console.log(responseError.error);
      })
    }else{
      this.toastrService.error("Formunu< eksik", "Dikkat")
    }
  }
}
