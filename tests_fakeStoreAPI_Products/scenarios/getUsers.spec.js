const expect = require('chai').expect
const fakestoreProducts = require('../apis/fakestoreProducts.api')
const getAllUsersData =  require('../datas/getAllUsers.data')

describe('Get all users',() => {
    getAllUsersData.forEach(data => {
        it(data.case.title, async () => {
            const response = await new fakestoreProducts().getAllUsers_Func()
            expect(response.statusCode).to.be.equal(data.case.status)
            console.log(response)
        })
    })
})