window.Library = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function () {
		new Library.Routers.AppRouter();
		Backbone.history.start();
	}
};

$(Library.initialize);