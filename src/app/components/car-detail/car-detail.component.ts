import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { Rental } from 'src/app/models/rental';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { RentalService } from 'src/app/services/rental.service';




@Component ({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  cars: CarDetail[] = [];
  rentals: Rental[] = [];
  images: string[] = [];
  currentImage: string;
  currentCar:CarDetail;


  currentCarId:CarDetail | null;
  baseUrl:string="https://localhost:7061/files/";
  apiUrl="https://localhost:7061/api/"

  constructor(private carDetailService:CarDetailService , private activatedRoute:ActivatedRoute , private rentalService:RentalService) {
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      const carId = params["carId"];

      if(carId){
        this.getCarDetailById(carId);
      }
    })
    
  }
  

  getCarDetailById(carId:number){
    this.carDetailService.getCarDetailById(carId).subscribe((response)=>{
      this.cars = response.data
    })
  }



  selectRentalCar(carId:number){
    
  }

  getTheSelectCar(car:CarDetail){
    this.currentCar = car;

  }

  

  

  

  

  

  

  


  



  

}
