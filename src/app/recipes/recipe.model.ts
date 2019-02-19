import { Ingredient } from '../shared/ingredient.model';
import { Comment } from '../comments/comment.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];
    public comments: Comment[];

    constructor(name: string, desc: string, imagePath: string, 
                ingredients: Ingredient[], comments: Comment[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
        this.comments = comments;
    }
}