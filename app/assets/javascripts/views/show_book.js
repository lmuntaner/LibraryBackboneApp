Library.Views.ShowBook = Backbone.View.extend({
	template: JST["books/show"],
	
	initialize: function (options) {
		this.book = options.book;
	},
	
	render: function () {
		var renderedContent = this.template({
			book: this.book
		});
		
		this.$el.html(renderedContent);
		
		return this;
	}
})