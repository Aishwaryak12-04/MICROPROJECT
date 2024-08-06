import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private url = "http://localhost:3005/recipes"; 
  private recipeArr: Recipe[] = [];

  constructor(private http: HttpClient) {}

  insertRecipe(recipe: Recipe): string {
    this.http.post<Recipe>(this.url, recipe).subscribe();
    return "Recipe Details Added";
  }

  updateRecipe(recipe: Recipe): string {
    this.http.put<Recipe>(`${this.url}/${recipe.id}`, recipe).subscribe();
    return "Recipe Details Updated";
  }

  deleteRecipe(id: number): string {
    this.http.delete<void>(`${this.url}/${id}`).subscribe();
    return "Recipe Details Deleted";
  }

  findAllRecipes(): void {
    this.http.get<Recipe[]>(this.url).subscribe(data => {
      this.recipeArr = data;
    });
  }

  findRecipeById(id: number): void {
    this.http.get<Recipe>(`${this.url}/${id}`).subscribe(data => {
      this.recipeArr = [data];
    });
  }

  getRecipeArr(): Recipe[] {
    return this.recipeArr;
  }
}
