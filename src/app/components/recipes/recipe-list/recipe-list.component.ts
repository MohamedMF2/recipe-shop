import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Curry', 'A spicy and flavorful chicken curry made with coconut milk and Indian spices.', 'https://placehold.co/250x250'),
    new Recipe('Veggie Stir Fry', 'A colorful and healthy stir fry made with a variety of fresh vegetables and a tasty sauce.', 'https://placehold.co/250x250'),
    new Recipe('Grilled Salmon', 'A simple but flavorful grilled salmon recipe with lemon and herbs.', 'https://placehold.co/250x250'),
    new Recipe('Beef Tacos', 'A Tex-Mex favorite with seasoned ground beef, fresh toppings, and crispy taco shells.',  'https://placehold.co/250x250'),
    new Recipe('Roasted Chicken', 'A classic roasted chicken recipe with crispy skin and juicy meat.', 'https://placehold.co/250x250'),
    new Recipe('Pesto Pasta', 'A delicious pasta dish with homemade pesto sauce, cherry tomatoes, and parmesan cheese.', 'https://placehold.co/250x250'),
    new Recipe('Tomato Soup', 'A comforting and creamy tomato soup recipe, perfect for chilly days.', 'https://placehold.co/250x250'),
    new Recipe('Beef and Broccoli', 'A Chinese-inspired stir fry with tender beef, broccoli, and a savory sauce.', 'https://placehold.co/250x250'),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
