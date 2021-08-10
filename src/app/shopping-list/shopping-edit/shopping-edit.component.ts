import { Component, ElementRef, EventEmitter, OnInit, ViewChild, Output} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

   @ViewChild('inputName',{static: true}) nameInput: ElementRef;
   @ViewChild('inputAmount',{static: true}) amountInput: ElementRef;
   @Output() NewIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem()
  {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    this.NewIngredient.emit(new Ingredient(ingName,ingAmount));
  }

}
