import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { CustomAuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  providers: [NgbDropdownConfig]
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(config: NgbDropdownConfig, 
              private customAuthService: CustomAuthService) { 
    config.placement = 'right-top';
  }

  ngOnInit() {
  }

  isAuthorized() {
    return this.customAuthService.getAuthorization();
  }

}
