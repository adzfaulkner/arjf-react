import moment from 'moment';

class Post {
    constructor(id, title, publishedDate, content, excerpt, slug, categories) {
        this.id = id;
        this.title = title;
        this.publishedDate = publishedDate;
        this.content = content;
        this.excerpt = excerpt;
        this.slug = slug;
        this.categories = categories;
    }

    getId() {
       return this.id;
    }

    getTitle() {
        return this.title;
    }

    getPublishedDate() {
        return moment(this.publishedDate);
    }

    getContent() {
        return this.content;
    }

    getExcerpt() {
        return this.excerpt;
    }

    getSlug() {
        return this.slug;
    }

    getCategories() {
        return this.categories;
    }
}

export default raw => {
    let { id, title, date_gmt, content, excerpt, slug, categories } = raw;

    return new Post(
      id,
      title.rendered,
      date_gmt,
      content.rendered,
      excerpt.rendered,
      slug,
      categories
    );
};