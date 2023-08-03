'use strict'
const api = require('@cocreate/api');

const { Facebook, FacebookApiException } = require("fb");

const APPID = "";
const appSecret = "";
const FB = new Facebook();

class CoCreateDataFacebook {
    constructor(wsManager) {
        this.wsManager = wsManager;
        this.name = "facebook";
        this.init();
    }

    init() {
        if (this.wsManager) {
            this.wsManager.on(this.name, (socket, data) => this.sendFacebook(socket, data));
        }
    }

    async sendFacebook(socket, data) {
        let params = data['data'];
        let action = data['action'];
        let environment;

        let org = await api.getOrg(data, this.name);
        if (params.environment) {
            environment = params['environment'];
            delete params['environment'];
        } else {
            environment = org.apis[this.name].environment;
        }

        const { accessToken } = org.apis[this.name][environment].accessToken
        FB.setAccessToken(accessToken);

        let response;
        try {
            switch (action) {
                case 'getUserProfile':
                    response = await FB.api("me", {
                        fields: ["id", "name", "email", "about", "address", "birthday", "gender", "location"]
                    });
                    break;

                case 'getUserFeed':
                    response = await FB.api("/me/feed");
                    break;

                case 'postFeed':
                    resonseData = await FB.api('me/feed', 'post', { message: params.message })
                    break;

                case 'deletePost':
                    response = await FB.api(params.postId, 'delete', { message: params['message'] })
                    break;
            }
            this.wsManager.send(socket, { method: this.name, action, response })

        } catch (error) {
            this.handleError(socket, action, error)
        }
    }

    handleError(socket, action, error) {
        const response = {
            'object': 'error',
            'data': error || error.response || error.response.data || error.response.body || error.message || error,
        };
        this.wsManager.send(socket, { method: this.name, action, response })
    }
}

module.exports = CoCreateDataFacebook;
