const supertest = require('supertest');
const should = require('should');

let api = supertest.agent('http://localhost:3000');

describe('UserController Unit Testing', () => {

    it('should return response status 201, message success and password must not be equal to the one passed', (done) => {
        //EXEMPLO
        api.post('/users')
            .send({
                name:"Enrico Alvarenga", 
                email: "teste2222222@gmail.com", 
                nickname: "teste2222222", 
                password:"12345t",
                picture: "xyz", 
                dateOfBirth: "10-21-1996"
            })
            .expect("Content-type",/json/)
            .expect(201)
            .end((err,res) => {
                res.status.should.equal(201);
                res.body.message.should.equal("Success");
                res.body.data.password.should.not.equal("12345t");
                done();
            });
    })
    

})