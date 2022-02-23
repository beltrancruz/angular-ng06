import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  constructor() { }

  @ViewChild('myForm')
  myForm!: NgForm;

  initForm = {
    product: 'RTX',
    price: 0,
    stock: 0
  };

  ngOnInit(): void {
  }


  validNameProduct(){
    return this.myForm?.controls.product?.invalid && this.myForm?.controls.product?.touched;
  }

  validPriceProduct(){
    return (this.myForm?.controls.price?.invalid && this.myForm?.controls.price?.touched) || this.myForm?.controls.price?.value < 0;
  }

  //save(myForm:NgForm){
  save(){

    console.log(this.myForm);
    //this.myForm.resetForm();
    // Default values in the form
    this.myForm.resetForm({ price: 0, stock: 0 });

  }
}
