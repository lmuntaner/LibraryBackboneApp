window.Library = {
	Models: {},
	Collections: {},
	Views: {},
	initialize: function () {
		var booksCollection = new Library.Collections.Books();
		var indexView = new Library.Views.BooksIndex({
			books: booksCollection
		});
		booksCollection.fetch({
			success: function () {
				$("div.backbone-container").append(indexView.render().$el);				
			}
		})
	}
};

$(Library.initialize);