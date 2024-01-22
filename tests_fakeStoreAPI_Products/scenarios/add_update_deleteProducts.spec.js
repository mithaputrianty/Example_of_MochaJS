const expect = require('chai').expect
const fakestoreProducts = require('../apis/fakestoreProducts.api')
const addNewProductsData = require('../datas/addNewProducts.data')
const updateProductsData = require('../datas/updateProducts.data')
const deleteProductsData = require('../datas/deleteProducts.data')

describe('Add new product', () => {
    addNewProductsData.forEach(data => {
        it(data.case.title, async () => {
            const response = await new fakestoreProducts().createNewProducts_Func(data.payload)
            expect(response.statusCode).to.be.equal(data.case.status)
            expect(response.body).to.have.property('id')
            //expect(response.body).to.be.jsonSchema()
        })
    })
})

describe('Update product', () => {
    updateProductsData.forEach(data => {
        it(data.case.title, async () => {
            const response = await new fakestoreProducts().updateProducts_Func(data.case.id, data.payload)
            expect(response.statusCode).to.be.equal(data.case.status)
            expect(response.body).to.have.property('id')
            expect(response.body.title).to.be.equal(data.payload.title)
        })
    })
})

describe('Delete product', () => {
    deleteProductsData.forEach(data => {
        it(data.case.title, async () => {
            const response = await new fakestoreProducts().deleteProducts_Func(data.case.id)
            expect(response.statusCode).to.be.equal(data.case.status)
            expect(response.body).to.have.property('id')
        })
    })
})