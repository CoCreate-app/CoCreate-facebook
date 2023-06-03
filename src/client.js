import api from '@cocreate/api'

const CoCreateFacebook = {
	name: 'facebook',
	endPoints: {
		getUserFeed: {},
		getUserProfile: {}
	}
};

api.init(CoCreateFacebook);

export default CoCreateFacebook;