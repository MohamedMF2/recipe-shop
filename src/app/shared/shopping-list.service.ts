import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [];
    constructor() { }

    getIngredients() {
        return [...this.ingredients];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        console.log(this.ingredients);
        this.ingredientsChanged.emit([...this.ingredients]);
    }


    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit([...this.ingredients]);
    }
}