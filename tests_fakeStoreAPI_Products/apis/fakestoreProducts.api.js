const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

class fakestoreProducts {
    constructor () {
        //URL
        this.url = 'https://fakestoreapi.com'
    }

    //FUNCTION
    //PRODUCTS
    async userLogin_Func(payload) {
        const response = await chai.request(this.url)
        .post('/auth/login')
        .send(payload)
        return response
    }
    
    async getAllProducts_Func() {
        const response = await chai.request(this.url).get('/products')
        return response
    }
    
    async getSingleProducts_Func(id) {
        const response = await chai.request(this.url).get('/products/'+id)
        return response
    }

    async createNewProducts_Func(payload) {
        const response = await chai.request(this.url)
        .post('/products')
        .send(payload)
        return response
    }

    async updateProducts_Func(id, payload) {
        const response = await chai.request(this.url)
        .patch('/products/'+id)
        .send(payload)
        return response
    }

    async deleteProducts_Func(id) {
        const response = await chai.request(this.url)
        .delete('/products/'+id)
        return response
    }
    
    //USERS
    async getAllUsers_Func() {
        const response = await chai.request(this.url).get('/users')
        return response
    }

    async getSingleUsers_Func(id) {
        const response = await chai.request(this.url).get('/users'+id)
        return response
    }

    async addNewUsers_Func(payload) {
        const response = await chai.request(this.url)
        .post('/users')
        .send(payload)
        return response
    }

    async updateUsers_Func(id, payload) {
        const response = await chai.request(this.url)
        .patch('/users/'+id)
        .send(payload)
        return response
    }

    async deleteUsers_Func(id) {
        const response = await chai.request(this.url)
        .delete('/users/'+id)
        return response
    }
}
module.exports = fakestoreProducts