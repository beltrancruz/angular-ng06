import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  favorite: string;

}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {
  constructor() { }

  person: Person = {
    name: 'Kat',
    favorites: [
      { id: Date.now(), favorite: 'Cuarteto de Nos' },
      { id: Date.now()+1, favorite: 'Paprika' },
      { id: Date.now()+2, favorite: 'Shrek' }
    ]
  }

  newFav:string = '';

  addFavorite(){
    const favorite: Favorite = {
      id: Date.now(),
      favorite: this.newFav
    };

    this.person.favorites.unshift({...favorite});
  }

  save(){
    console.log("Log posted");
    
  }

  delete(index:number){
    this.person.favorites.splice(index,1);
  }

  ngOnInit(): void {
  }

}
