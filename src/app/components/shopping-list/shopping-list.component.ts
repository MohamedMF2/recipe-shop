import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  igChangedSub !: Subscription;
  constructor(private slService: ShoppingListService) { }

  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }


  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangedSub = this.slService.ingredientsChanged.subscribe(
      {
        next: (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      })
  }
  ngOnDestroy(): void {
    this.igChangedSub.unsubscribe();
  }
}
