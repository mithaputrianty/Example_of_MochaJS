const expect = require('chai').expect
const fakestoreProducts = require('../apis/fakestoreProducts.api')
const userLoginData = require('../datas/userLogin.data')

describe('User success Login', () => {
    userLoginData.forEach(data => {
        it(data.case.title, async () => {
            const response = await new fakestoreProducts().userLogin_Func(data.payload)
            expect(response.statusCode).to.be.equal(data.case.status)
            if(data.case.status == 200){
                expect(response.body).to.have.property('token')
            }
        })
    })
})

//masih gagal untuk data valid