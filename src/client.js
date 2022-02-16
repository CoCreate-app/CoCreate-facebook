import api from '@cocreate/api'

const CoCreateFacebook = {
	name: 'facebook',
	actions: {
		getUserFeed: {},
		getUserProfile: {}
	}
};

api.init({
	name: CoCreateFacebook.name, 
	module:	CoCreateFacebook,
});

export default CoCreateFacebook;