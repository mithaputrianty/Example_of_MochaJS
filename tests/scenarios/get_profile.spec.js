
const auth = require('../apis/auth.api')
const profile = require('../apis/profile.api')
const expect = require('chai').expect

describe('Profile', () => {
    let token = ''
    before(async () => {
        const response = await new auth().login({
            "email": "fashion@mail.com",
            "password": "password"
        })

        token = response.body.token
    })

    it('User successful retrieve profile', async () => {
        const response = await new profile().get(token)

        //assertions
        expect(response.statusCode).to.be.equal(200)
    })
})