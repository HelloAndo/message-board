export default {

	fetch: function(key){
		return JSON.parse( localStorage.getItem(key) );
	},

	save: function(key, value){
		localStorage.setItem( key, JSON.stringify(value) );
	},

	del: function(key){
		localStorage.removeItem( key );
	},

}