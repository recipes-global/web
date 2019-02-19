import { Recipe } from '../recipes/recipe.model';

export class User {
    public nickname: string;
    public name: string;
    public surname: string;
    public email: string;
    public avatarPath: string;
    public recipes: Recipe[];

    constructor(nickname: string, name: string, surname: string, 
                email: string, avatarPath: string, recipes: Recipe[]) {
        this.nickname = nickname;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.avatarPath = avatarPath;
        this.recipes = recipes;
    }
}