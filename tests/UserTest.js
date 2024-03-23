const chakram = require('chakram'), expect = chakram.expect;

describe("TC0001 /v2/user", function() {

     it("GET /user/{username}", function () {

       const response =  chakram.post("https://petstore.swagger.io/v2/user/testQa1234");
       expect(response).to.have.status(200);
     
     });
    
});