Library.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "index",
		"books/new": "newBook",
		"books/:id": "showBook"
	},
	
	initialize: function () {
		this.collection = new Library.Collections.Books();
		this.collection.fetch();
	},
	
	index: function () {
		var indexView = new Library.Views.BooksIndex({
			collection: this.collection
		});
		$("div.backbone-container").html(indexView.render().$el);
	},
	
	newBook: function () {
		var newBookView = new Library.Views.NewBook({
			collection: this.collection
		});
		$('div.backbone-container').html(newBookView.render().$el);
	},
	
	showBook: function (bookId) {
		var book = this.collection.get(bookId);
		var showBookView = new Library.Views.ShowBook({
			book: book
		});
		$("div.backbone-container").html(showBookView.render().$el);
	},
})