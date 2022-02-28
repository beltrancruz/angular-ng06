import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      ...this.person,
      terms: false
    })

    this.myForm.valueChanges.subscribe(formValue=>{
      console.log(formValue);
      
    })

    this.myForm.get('terms')?.valueChanges.subscribe(newValue => {
      console.log("Terms",newValue);
      
    })
  }

  myForm: FormGroup = this._formBuilder.group({
    gender: [
      'M',
      Validators.required
    ],
    notification: [
      true,
      Validators.required
    ],
    terms: [
      false,
      Validators.requiredTrue
    ]
  })

  person = {
    gender: 'F',
    notification: true
  }

  save(){
    const formValue = {...this.myForm.value}
    // formValue values...

    // const { terms, ...rest } = formValue;
    // console.log("S Terms: ",terms);
    // console.log("S Rest: ",rest);

    const { terms, ...a } = formValue;
    console.log("S Terms: ",terms);
    console.log("S Rest(a): ",a);
    this.person = a;
    
  }
}
