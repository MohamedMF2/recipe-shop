import { Ingredient } from "src/app/shared/ingredient.model";

export interface IRecipe {
    name: string;
    description: string;
    imagePath: string;
    ingredients: Ingredient[]
}