/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe("Accomplishments Dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments")
  })

  it("should display inappropriate content error when text or accomplish includes giraffe", () => {
    cy.get("[placeholder='Title']").type("This is my accomplishment")
    cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe")
    cy.get("[type='checkbox']").click()
    cy.contains("button", "Submit Accomplishment").click()
    cy.contains("Your content is not appropriate").should("be.visible")
  })

  it("should display inappropriate content error when text or accomplish includes giraffe with mock", () => {
    cy.intercept("POST", "http://localhost:4000", (req) => {
      req.reply((res) => {
        res.send({
          msg: "Your content is not appropriate",
        })
      })
    })

    cy.get("[placeholder='Title']").type("This is my accomplishment")
    cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe")
    cy.get("[type='checkbox']").click()
    cy.contains("button", "Submit Accomplishment").click()
    cy.contains("Your content is not appropriate").should("be.visible")
  })
})
