
const CoCreateFacebook = {
	id: 'facebook',
	actions: [
		'getUserFeed',
		'getUserProfile'
	],
	
	// action_getFacebook: function(element, data) {
	//     console.log('action gertFacebook');
	//     let container = document;	
	// 	let form_data = CoCreate.api.getFormData('facebook', 'getFacebook',  container);
	// 	CoCreate.api.send('facebook', 'getFacebook', form_data);
	// },
	
	render_getUserProfile: function(data) {
		console.log(data)
	},
	
	render_getUserFeed: function(data) {
		console.log(data)
	}
};

CoCreate.api.init({
	name: CoCreateFacebook.id, 
	module:	CoCreateFacebook,
});