import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from "rxjs/operators";

@Injectable()
export class DataStorageService{

	constructor(private http:Http,private recipeService: RecipeService){}

	storeRecipes(){
		 return this.http.put('https://ng-recipe-book-bf550.firebaseio.com/recipes.json',this.recipeService.getRecipes());
	}

	getRecipes(){
		 this.http.get('https://ng-recipe-book-bf550.firebaseio.com/recipes.json').pipe(map(
		 	(response: Response) =>
		 	{
		 		console.log('Response='+response.json());
		 		const recipes: Recipe[]= response.json();
		 		for(let recipe of recipes){
		 			if (!recipe['ingredients']){
		 				recipe['ingredients']= [];
		 			}
		 		}
		 		return recipes;
		 	}
		 )).subscribe(
		 	(recipes: Recipe[])=>{
		 		//const recipes: Recipe[]= response.json();
		 		//console.log(recipes);
		 		this.recipeService.setRecipes(recipes);
		 	}
		 );
	}
	
}