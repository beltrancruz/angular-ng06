import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {
  constructor(
    private _formBulder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.myForm.setValue({
      name: 'RTX',
      price: 0,
      stock: 0
    })
  }

  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('RTX'),
  //   price: new FormControl(0),
  //   stock: new FormControl(0)
  // })

  myForm: FormGroup = this._formBulder.group({
    name: [
      /*'RTX'*/,
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    price: [
      /*0*/,
      [
        Validators.required,
        Validators.min(0)
      ]
    ],
    stock: [
      /*0*/,
      [
        Validators.required,
        Validators.min(0)
      ]
    ]
  })

  verifyFieldValidation(field: string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  save(){
    console.log(this.myForm);
    
    this.myForm.markAllAsTouched();
    if(this.myForm.valid){
      console.log("OK");
      this.myForm.reset();
    }else{
      console.log("NOT OK");
    }
    
    
  }
}
