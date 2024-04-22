const chakram = require('chakram'),
    expect = chakram.expect;

describe("User Tests", function () {

    it("GET /v2/user/{userName}", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/testqa1234");
        expect(response).to.have.status(200);
        return chakram.wait();
        
        
    });

    it("GET /v2/user/logout", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/logout");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("GET /v2/user/login", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/login?username=test&password=123");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("POST /v2/user userCreate", function () {
        const data = {
            "id": 123,
            "username": "ahmet123",
            "firstName": "ahmet",
            "lastName": "karci",
            "email": "karci@otlook.com",
            "password": "as21",
            "phone": "529131231",
            "userStatus": 0
          };

          const resData = {
            "code": 200,
            "type": "unknown",
            "message": "1111111"
          };

        const response = chakram.post("https://petstore.swagger.io/v2/user", data);
        
        return response.then(function (res){
            // console.log(res.body);
            expect(res).to.have.status(200);
            expect(res).to.have.json(resData);
        })
    });

    it("PUT /v2/user userUpdate", function () {
        const data = {
            "id": 123123123,
            "username": "krc",
            "firstName": "ahmet",
            "lastName": "karci",
            "email": "kkarci@ottllk.com",
            "password": "1111",
            "phone": "5933222232",
            "userStatus": 0
          };

        const response = chakram.put("https://petstore.swagger.io/v2/user/testcan123", data);
        
        return response.then(function (res){
            // console.log(res.body);
            expect(res).to.have.status(200);
        })
    });

    it("DELETE /v2/user/{username}", function () {
        const response = chakram.delete("https://petstore.swagger.io/v2/user/testcan123");
        expect(response).to.have.status(200);
        return chakram.wait();
    });


});