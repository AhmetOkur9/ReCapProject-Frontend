import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars:CarDetail[] = [ ];
  dataLoaded = false;

  baseUrl:string="https://localhost:7061/files/"

  
  constructor(private carService:CarService , private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const brandId = params["brandId"];
      const colorId = params["colorId"];
  
      if (brandId && colorId) {
        this.getCarsByBrandAndColor(brandId, colorId);
      } else if (colorId) {
        this.getCarsByColor(colorId);
      } else if (brandId) {
        this.getCarsByBrand(brandId);
      } else {
        this.getCars();
      }
    });
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true
    });
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe((response)=>{
      this.cars = response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe((response)=>{
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarsByBrandAndColor(brandId:number,colorId:number){
    this.carService.getCarsByBrandAndColor(colorId,brandId).subscribe((response)=>{
    this.cars = response.data
    this.dataLoaded=true
    })
  }

  getCarImageUrl(imagePath:string):string{
    if(imagePath !== null){
      return "https://localhost:7061/files/default.jpg" //this.baseUrl + imagePath;
    }
    return "https://localhost:7061/files/default.jpg"
  }
}
