class Article {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    static compareId(a, b) {
        const id1 = a.id;
        const id2 = b.id;

        return id1 > id2;
    }
}

const art1 = new Article(1, 'Konstruktor w ES6');
const art2 = new Article(2, 'Klasy w JS');

console.log(Article.compareId(art1, art2));
