import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from '../../recipe.interface';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Recipe } from '../../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {

  
  }

}
