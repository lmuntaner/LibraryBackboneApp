Library.Views.BooksIndex = Backbone.View.extend({
	template: JST["books/index"],
	
	initialize: function (options) {
		this.listenTo(this.collection, "sync add", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({
			books: this.collection
		});		
		this.$el.html(renderedContent);
		
		return this;
	}
})