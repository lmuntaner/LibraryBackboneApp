Library.Views.NewBook = Backbone.View.extend({
	template: JST["books/new_book"],
	
	events: {
		"submit form": "createBook"
	},
	
	createBook: function (event) {
		event.preventDefault();
		// var title = $("#book-title").val();
		// var author = $("#book-author").val();
		// var description = $("#book-description").val();
		var bookParams = $("form").serializeJSON().book;
		var book = new Library.Models.Book(bookParams);
		var view = this;
		book.save({}, {
			success: function (book) {
				view.collection.add(book);
				Backbone.history.navigate("", {trigger: true});
			}
		});
	},
	
	render: function () {
		var renderedContent = this.template();
		
		this.$el.html(renderedContent);
		
		return this;
	}
})