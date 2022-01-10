const request = require("supertest");
const app = require("../../app");

it("Can send email with valid inputs", async () => {
  return request(app)
    .post("/api/mail")
    .send({
      to: "hernandw@gmail.com",
      subject: "mensaje de prueba",
      text: "Hola este es un mensaje de prueba",
      html: "<p>Hola mensaje</p>"
    })
   
});