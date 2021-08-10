import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  Recipes: Recipe[] = [
    new Recipe("A test recipe","this is simply a test",
    "https://www.simplyrecipes.com/thmb/9xzBbXAtiPFFcIeBWS6DCM3AOv0=/1067x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__06__tandoori-chicken-horiz-a-1600-a92053df1c764ee1beaa91ae6383dcfd.jpg"),
    new Recipe("Another test recipe","this is simply a test",
    "https://www.simplyrecipes.com/thmb/9xzBbXAtiPFFcIeBWS6DCM3AOv0=/1067x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__06__tandoori-chicken-horiz-a-1600-a92053df1c764ee1beaa91ae6383dcfd.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

    onRecipeSelected(recipe: Recipe)
    {
      this.recipeWasSelected.emit(recipe);
    }
}
