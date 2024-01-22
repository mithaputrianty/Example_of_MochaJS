import { expect } from "chai"
import auth from "../apis/auth.api.js"
import { login } from "../datas/auth.data.js"


describe('Authentication', () => {
    login.forEach(item => {
        it(item.case.title, async () => {
            const response = await new auth().login(item.payload)
            expect(response.status).to.be.equal(item.case.status)
        })
    })
})