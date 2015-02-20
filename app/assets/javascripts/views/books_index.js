Library.Views.BooksIndex = Backbone.View.extend({
	template: JST["books/index"],
	
	events: {
		"click button": "doIt"
	},
	
	initialize: function (options) {
		this.books = options.books;
		this.listenTo(this.books, "sync", this.render);
	},
	
	doIt: function () {
		$("button").addClass("btn-danger");
	},
	
	render: function () {
		var renderedContent = this.template({
			books: this.books
		});		
		this.$el.html(renderedContent);
		
		return this;
	}
})