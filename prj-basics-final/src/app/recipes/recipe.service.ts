import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
	
 private recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is simply a test1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [new Ingredient('Ingredient1',1),
     new Ingredient('Ingredient2',2)]),
    new Recipe('A Test Recipe2', 'This is simply a test2', 'https://www.swatifood.com/wp-content/uploads/2018/01/how-to-make-chicken-biryani.jpg',
    [new Ingredient('Chicken',1),
     new Ingredient('Rice',2)]),
    new Recipe('Lemon Rice','Lemon Rice/Chitrannam', 'https://diethood.com/wp-content/uploads/2016/09/Lemon-Rice.jpg'
    ,[new Ingredient('Lemon',4),
     new Ingredient('Rice',3)])
  ];

  constructor(private shoppingListService: ShoppingListService){}

	getRecipes(){
		return this.recipes.slice();
	}

    getRecipe(index: number){
        return this.recipes[index];
    }

	addIngredientsToShoppingList(ingredients: Ingredient[]){
		this.shoppingListService.addIngredients(ingredients);
	}
}