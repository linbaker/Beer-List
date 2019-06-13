import { Component, Output, EventEmitter } from '@angular/core';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css']
})
export class NewBeerComponent {

  @Output() sendBeer = new EventEmitter();

  submitForm(brand: string, name: string, price: string, abv: string, flavorNotes: string) {
    let newBeer: Beer = new Beer(brand, name, parseFloat(price), parseFloat(abv), flavorNotes);
    this.sendBeer.emit(newBeer);
  }
}
