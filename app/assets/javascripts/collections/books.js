Library.Collections.Books = Backbone.Collection.extend({
	url: "/api/books",
	model: Library.Models.Book,
	
	initialize: function () {
		debugger;
	}
});