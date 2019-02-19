import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'recipes', component: RecipesComponent},
  { path: 'recipes/:id', component: RecipeDetailComponent},
  { path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
