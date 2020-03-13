import { Recipe } from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService{
      recipesChanged = new Subject<Recipe[]>();
  

  private  recipes: Recipe[] =[
        new Recipe(' 1 Recipe ',
        'This the best dinner',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vegetarian-recipe-spinach-pita-pizza-1567097013.jpg?crop=1.00xw:0.334xh;0,0.305xh&resize=980:*',
        [
          new Ingredient('meat',1),
          new Ingredient('French Fries', 20)
        ]),
        
        new Recipe(' 2 Recipe ',
        'This the best breakfast',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vegetarian-recipe-spinach-pita-pizza-1567097013.jpg?crop=1.00xw:0.334xh;0,0.305xh&resize=980:*',
        [
          new Ingredient('Buns',2),
          new Ingredient('meat',1)
        ])
      ];
constructor(private slService: ShoppingListService){}

getRecipes() {
    return this.recipes.slice();
}

addIngredientsToShoppingList(ingredients: Ingredient[]){
  this.slService.addIngredients(ingredients);
}

getRecipe(index: number){
  return this.recipes[index];
}


addRecipe(recipe: Recipe){
  this.recipes.push(recipe);
  this.recipesChanged.next(this.recipes.slice());
}

updateRecipe(index: number, newRecipe: Recipe){
  this.recipes[index] = newRecipe;
  this.recipesChanged.next(this.recipes.slice());
}


deleteRecipe(index: number){
  this.recipes.splice(index,1);
  this.recipesChanged.next(this.recipes.slice());

}



}