import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']

})
export class RecipesComponent implements OnInit {
   passedRecipe!: Recipe;

    constructor() {

    }
    ngOnInit(): void {

    }

    passRecipe(recipe: Recipe) {
        console.log(recipe);
        this.passedRecipe = recipe;
    }
}