import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Comment } from '../comments/comment.model';

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Pierogi ruskie',
            'Bardzo smaczne pierozki, polecam. Farsz nalezy przygotować ścierając ziemniaki na tarce, dodatkowo trzeba to samo zrobić z cebulą. Do tego dodajemy twarożek i przyprawiamy pieprzem i solą. itd.',
            'https://static.smaker.pl/photos/9/a/8/9a86d15c128477393b29edb36364752c_367977_5b752f9f7afad_wm.jpg',
            [
                new Ingredient('ziemniaki', 5, 'szt'),
                new Ingredient('cebula', 2, 'szt')
            ],
            [
                new Comment('Pychotka', new Date())
            ]),
        new Recipe(
            'Bigos',
            'Tradycyjny polski bigos',
            'https://static.smaker.pl/photos/f/2/2/f2252a561765fb92d6cc02c3f3d26e6a_362397_5a2fa220ca2cb_wm.jpg',
            [
                new Ingredient('ziemniaki', 5, 'szt'),
                new Ingredient('cebula', 2, 'szt')
            ],
            [
                new Comment('Pychotka', new Date())
            ])
    ]

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }
}