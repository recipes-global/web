export class Comment {
    public description: string;
    public timestamp: Date;

    constructor(description: string, timestamp: Date) {
        this.description = description;
        this.timestamp = timestamp;
    }
}