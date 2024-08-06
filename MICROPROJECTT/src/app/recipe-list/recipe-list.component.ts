import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service'; 
import { Recipe } from '../model/recipe'; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  errorMessage: string = '';

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes(): void {
    this.recipeService.findAllRecipes();
    this.recipes = this.recipeService.getRecipeArr();
  }

  deleteRecipe(id: number): void {
    this.recipeService.deleteRecipe(id);
    this.loadRecipes(); 
  }
}
