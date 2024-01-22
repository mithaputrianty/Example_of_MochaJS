const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

class profile {
    constructor() {
        this.host = 'https://thinking-tester-contact-list.herokuapp.com'
    }

    async get(token) {
        const response = await chai.request(this.host).get('/users/me').set('Authorization', token)
        return response
    }
}

module.exports = profile