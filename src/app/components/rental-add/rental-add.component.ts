import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit{

  rentalAddForm:FormGroup
  sendRental:boolean = true

  minRentalDate: string;
  minReturnDate: string;

  constructor(private formBuilder:FormBuilder , private rentalService:RentalService , private toastrService:ToastrService) {}


  ngOnInit(): void {
    this.createRentalAddForm()
    this.dateDaySelect()
  }


  //Kiralama gün ayarları
  dateDaySelect(){
    const today = new Date();
    this.minRentalDate = today.toISOString().split('T')[0]; // Bugünün tarihi

    this.rentalAddForm.get('rentDate').valueChanges.subscribe((selectedDate) => {
      const nextDay = new Date(selectedDate);
      nextDay.setDate(nextDay.getDate() + 1);
      this.minReturnDate = nextDay.toISOString().split('T')[0];
    });
  }

  createRentalAddForm(){
    this.rentalAddForm = this.formBuilder.group({
      carId:["",Validators.required],
      customerId:["",Validators.required],
      rentDate:["",Validators.required],
      returnDate:["",Validators.required]
    })
  }

  add(){
    if(this.rentalAddForm.valid){
      let rentalModel = Object.assign({}, this.rentalAddForm.value)
      this.rentalService.add(rentalModel).subscribe(response=>{
        this.sendRental = true
        console.log(response);
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        console.log(responseError.error);
      })
    }else{
      this.toastrService.error("Formunuz Eksik", "Dikkat")
    }
  }

}
