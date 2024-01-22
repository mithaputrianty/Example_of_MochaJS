const expect = require('chai').expect
const fakestoreProducts = require('../apis/fakestoreProducts.api')
const getAllProductsData = require('../datas/getAllProducts.data')
const getSingleProductsData = require('../datas/getSingleProducts.data')

describe('Get all products', () => {
    getAllProductsData.forEach(data => {
        it(data.case.title, async () => {
            const response = await new fakestoreProducts().getAllProducts_Func()
            expect(response.statusCode).to.be.equal(data.case.status)
            //expect(response.body).to.have.property('id')
            //expect(response.body).to.be.jsonSchema()
        })
    })
})

describe('Get a single products', () => {
    getSingleProductsData.forEach(data => {
        it(data.case.title, async () => {
            const response = await new fakestoreProducts().getSingleProducts_Func(data.case.id)
            expect(response.statusCode).to.be.equal(data.case.status)
            expect(response.body).to.haveOwnProperty('id')
            console.log(response)
        })
    })
})