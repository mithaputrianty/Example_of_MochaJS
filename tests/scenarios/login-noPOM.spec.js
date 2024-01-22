const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = require('chai').expect
chai.use(chaiHttp)
const chaiSchema = require('chai-json-schema')
chai.use(chaiSchema)



describe('Authentication', () => {
    it('User successful login with valid data', async () => {
        const response = await chai.request('https://thinking-tester-contact-list.herokuapp.com').post('/users/login').send({
            "email": "fashion@mail.com",
            "password": "password"
        })

        //console.log(response);

        //assertions
        expect(response.statusCode).to.be.equal(200)
        expect(response.body).to.haveOwnProperty('token')
        expect(response.body).to.be.jsonSchema()
    })

    //negative scenarios
    it('User unsuccessful login without password', async () => {
        const response = await chai.request('https://thinking-tester-contact-list.herokuapp.com').post('/users/login').send({
            "email": "fashion@mail.com",
            "password": ""
        })

        //console.log(response);

        //assertions
        expect(response.statusCode).to.be.equal(401)
    })
})