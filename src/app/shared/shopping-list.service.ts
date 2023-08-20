import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>()
    ingredients: Ingredient[] = [{ name: 'apple', amount: 5 }, { name: 'Tomato', amount: 11 },];
    constructor() { }

    getIngredients() {
        return [...this.ingredients];
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        console.log(this.ingredients);
        this.ingredientsChanged.next([...this.ingredients]);
    }


    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next([...this.ingredients]);
    }

    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        console.log(this.ingredients);
        this.ingredientsChanged.next(this.ingredients.slice())
    }
}