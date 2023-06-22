import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../components/recipes/recipe.model';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Chicken Curry',
            'A spicy and flavorful chicken curry made with coconut milk and Indian spices.',
            'https://placehold.co/250x250',
            [
                new Ingredient("chicken", 2),
                new Ingredient("coconut milk", 2),
            ]
        ),
        new Recipe(
            'Veggie Stir Fry',
            'A colorful and healthy stir fry made with a variety of fresh vegetables and a tasty sauce.',
            'https://placehold.co/250x250', [
            new Ingredient("chicken", 2),
            new Ingredient("coconut milk", 2),
        ]
        ),
        new Recipe(
            'Grilled Salmon',
            'A simple but flavorful grilled salmon recipe with lemon and herbs.',
            'https://placehold.co/250x250'
            , [
                new Ingredient("Salmon", 2),
                new Ingredient("lemon", 2),
                new Ingredient("herbs", 2),
            ]),
        new Recipe(
            'Beef Tacos',
            'A Tex-Mex favorite with seasoned ground beef, fresh toppings, and crispy taco shells.',
            'https://placehold.co/250x250'
            , [
                new Ingredient("beef", 2),
                new Ingredient("taco", 2),
            ]),
        new Recipe(
            'Roasted Chicken',
            'A classic roasted chicken recipe with crispy skin and juicy meat.',
            'https://placehold.co/250x250'
            , [
                new Ingredient("chicken", 2),
            ]),
        new Recipe(
            'Pesto Pasta',
            'A delicious pasta dish with homemade pesto sauce, cherry tomatoes, and parmesan cheese.',
            'https://placehold.co/250x250'
            , [
                new Ingredient("tomatoes", 2),
                new Ingredient("cheese", 2),
            ]),
        new Recipe(
            'Tomato Soup',
            'A comforting and creamy tomato soup recipe, perfect for chilly days.',
            'https://placehold.co/250x250'
            , [
                new Ingredient("Tomato", 2),
                new Ingredient("chilly", 2),
            ]),
        new Recipe(
            'Beef and Broccoli',
            'A Chinese-inspired stir fry with tender beef, broccoli, and a savory sauce.',
            'https://placehold.co/250x250'
            , [
                new Ingredient("beef", 2),
                new Ingredient("savory sauce", 2),
            ]),
    ];

    constructor(private slService:ShoppingListService ) { }

    getRecipes() {
        return [...this.recipes];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients)
    }
}
