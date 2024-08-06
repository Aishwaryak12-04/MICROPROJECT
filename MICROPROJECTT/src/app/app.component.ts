import { Component } from '@angular/core';
import { Recipe } from './model/recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='MICROPROJECTT';
  recipe: Recipe;
  result: string;
  recipeArr: Recipe[];
  flag: boolean;

  constructor(private service: RecipeService) {
    this.recipe = new Recipe();
    this.result = "";
    this.recipeArr = [];
    this.flag = false;
  }

  insertRecipe(data: any) {
    this.recipe.id = data.id;
    this.recipe.name = data.name;
    this.recipe.description = data.description;
    this.result = this.service.insertRecipe(this.recipe);
  }

  updateRecipe(data: any) {
    this.recipe.id = data.id;
    this.recipe.name = data.name;
    this.recipe.description = data.description;
    this.result = this.service.updateRecipe(this.recipe);
  }

  deleteRecipe(id: number) {
    this.result = this.service.deleteRecipe(id);
  }

  findAllRecipes() {
    this.service.findAllRecipes();
    setTimeout(() => {
      this.recipeArr = this.service.getRecipeArr();
      this.flag = true;
    }, 1000);
  }

  findRecipeById(id: number) {
    this.service.findRecipeById(id);
    setTimeout(() => {
      this.recipeArr = this.service.getRecipeArr();
      this.flag = true;
    }, 1000);
  }
}
