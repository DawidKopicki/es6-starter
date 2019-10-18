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

class BlogArticle extends Article {
    constructor(id, title, category) {
        super(id, title);
        this.category = category;
    }
    getCategory() {
        return this.category;
    }
}

let art1 = new BlogArticle(1, 'Testowanie w Karma', 'TDD');
console.log(art1.getId() + ". " + art1.getTitle() + " - " + art1.getCategory());
