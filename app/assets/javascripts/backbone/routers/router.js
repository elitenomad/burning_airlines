/**
 * Created by pranavaswaroop on 12/03/2014.
 */

App.AirplaneRouter = Backbone.Router.extend({
    routes: {
        "": 'home',
        "new": 'editairplane',
        "edit/:id": 'editairplane',
        "delete/:id": 'deleteairplane',
        "flight": "flightshome",
        "new-flight": 'editflight',
        "edit-flight/:id": 'editflight',
        "delete-flight/:id": 'deleteflight',
        "show-flight/:id": 'showflight',
        "search-flight": 'searchflight'
    }
});



