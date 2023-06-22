import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from '../../recipe.interface';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }
  onSelected() {
    console.log('clicked')
    this.recipeService.recipeSelected.emit(this.recipe);
    console.log(this.recipe)

  }
}
