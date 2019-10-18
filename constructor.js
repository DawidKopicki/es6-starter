class Article {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}

const art = new Article(1, 'Konstruktor w ES6');
console.log(art.id + '. ' + art.title);
