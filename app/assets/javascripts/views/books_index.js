Library.Views.BooksIndex = Backbone.View.extend({
	
	initialize: function (options) {
		this.books = options.books;
	},
	
	render: function () {
		var $ul = $("<ul>");
		
		this.books.each(function (book) {
			var $li = $("<li>");
			$li.text(book.get("title"));
			
			$ul.append($li);
		});
		
		this.$el.html($ul);
		
		return this;
	}
})