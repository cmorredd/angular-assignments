import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from "rxjs/operators";
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService{

constructor(private httpClient:HttpClient,private recipeService: RecipeService
	,private authService: AuthService){}

	storeRecipes(){
		 //const token=this.authService.getToken();
		 /*return this.httpClient.put('https://ng-recipe-book-bf550.firebaseio.com/recipes.json',this.recipeService.getRecipes(),{
		 	observe: 'body',
		 	params: new HttpParams().set('auth',token);
		 });*/
    const request=new HttpRequest('PUT', 'https://ng-recipe-book-bf550.firebaseio.com/recipes.json',this.recipeService.getRecipes()
    ,{reportProgress: true});
    return this.httpClient.request(request);
	}

	getRecipes(){
		 //const token=this.authService.getToken();

		 this.httpClient.get<Recipe[]>('https://ng-recipe-book-bf550.firebaseio.com/recipes.json',{
		    observe: 'body',
		    responseType: 'json'
		 }
		 ).pipe(map(
		 	(recipes: Recipe[]) =>
		 	{
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
