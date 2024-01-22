const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

class auth {
    constructor() {
        this.host = 'https://thinking-tester-contact-list.herokuapp.com'
    }

    async login(payload) {
        const response = await chai.request(this.host).post('/users/login').send(payload)
        return response
    }
}

module.exports = auth