import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  providers: [NgbDropdownConfig]
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(config: NgbDropdownConfig) { 
    config.placement = 'right-top';
  }

  ngOnInit() {
  }

}
