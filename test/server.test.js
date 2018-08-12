const expect = require("expect");
const request = require("supertest");
const app = require("../server");

const api = request(app);

describe("Examiner Server", () => {

  context('the root route', function () {
    it("should return welcome message", (done) => {
      api.get("/").expect(200).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).toBeDefined();
        expect(res.body.success).toBe('Welcome to our home page!');
        done();
      });
    });
  });

  context('invalid routes', function () {
    it("should return welcome message", (done) => {
      api.get("/someo/invalid/routes").expect(404).end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).toBeDefined();
        expect(res.body.error).toBe('There is nothing on this route.');
        done();
      });
    });
  });
});
