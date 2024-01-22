const expect = require('chai').expect
const fakestoreProducts = require('../apis/fakestoreProducts.api')
const addNewUsersData = require('../datas/addNewUsers.data')
const updateUsersData = require('../datas/updateUsers.data')
const deleteUsersData = require('../datas/deleteUsers.data')

describe('Add new user', () => {
    addNewUsersData.forEach(data => {
        it(data.case.title, async () => {
            const response = await new fakestoreProducts().addNewUsers_Func(data.payload)
            expect(response.statusCode).to.be.equal(data.case.status)
            expect(response.body).to.have.property('id')
        })
    })
})

describe('Update user', () => {
    updateUsersData.forEach(data => {
        it(data.case.title, async () => {
          const response = await new fakestoreProducts().updateUsers_Func(data.case.id, data.payload)
          expect(response.statusCode).to.be.equal(data.case.status)
          expect(response.body).to.have.property('name')
          expect(response.body.phone).to.be.equal(data.payload.phone)
        })
    })
})


describe('Delete product', () => {
    deleteUsersData.forEach(data => {
        it(data.case.title, async () => {
            const response = await new fakestoreProducts().deleteUsers_Func(data.case.id)
            expect(response.statusCode).to.be.equal(data.case.status)
            expect(response.body).to.have.property('id')
        })
    })
})
