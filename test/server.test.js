const expect = require("expect");
const request = require("supertest");

const app = require("../server");

const api = request(app);
describe("Server JS", () => {
  it("should return true", done => {
    api
      .get("/")
      .expect(200)
      .end(done);
  });
});
