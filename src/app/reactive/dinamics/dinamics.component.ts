import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  myForm: FormGroup = this._formBuilder.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    favorites: this._formBuilder.array(
      [
        ['Cuarteto de nos',Validators.required],
        ['Paprika',Validators.required],
        ['Shrek',Validators.required]
      ],
      Validators.required
    )

  })

  newFavorite: FormControl = this._formBuilder.control('',Validators.required)

  get favoritesElements(){
    return (this.myForm.get('favorites') as FormArray);
  }

  verifyFieldValidation(field:string): boolean{
    return this.myForm.controls[field].invalid && this.myForm.controls[field].touched;
  }

  save(){
    this.myForm.markAllAsTouched();
    if(this.myForm.invalid){
      return;
    }

    this.myForm.reset();

  }

  addFavorite(){
    if(this.newFavorite.invalid){
      return;
    }

    // this.favoritesElements.push(
    //   new FormControl(this.newFavorite.value,Validators.required)
    // );

    this.favoritesElements.push(
      this._formBuilder.control(this.newFavorite.value,Validators.required)
    );

    this.newFavorite.reset();

  }

  deleteFavorite(i:number){
    this.favoritesElements.controls.splice(i,1);
  }

}
