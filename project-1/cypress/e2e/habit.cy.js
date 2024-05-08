/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe("habit dashboard", () => {
  beforeEach(() => {
    cy.visit("/habits")
  })

  it("should display modal when add button is clicked", () => {
    cy.contains("button", "Add").click()
    cy.contains("Add a new habit").should("be.visible")
  })

  it("should display habit card when new habit is added", () => {
    cy.get("#habit-add-btn").click()
    cy.get("input[placeholder='Habit']").type("Drink a cup of water")
    cy.contains("Save Changes").click()
    cy.contains("Drink a cup of water")
      .should("be.visible")
      .and("have.class", "HabitCard__habit-container")
  })

  it("should toggle icon when habit card is clicked", () => {
    cy.get("#habit-add-btn").click()
    cy.get("input[placeholder='Habit']").type("Drink a cup of water")
    cy.contains("Save Changes").click()
    cy.get("[src='/src/svg/close.svg']").should("be.visible")
    cy.contains("Drink a cup of water").click()
    cy.get("[src='/src/svg/check.svg']").should("be.visible")
  })

  it("should nothing changes if don't put any text in the input field", () => {
    cy.contains("button", "Add").click()
    cy.contains("Save Changes").click()
    cy.contains("Add a new habit").should("be.visible")
  })

  it("should close the modal when click on close button", () => {
    cy.contains("button", "Add").click()
    cy.contains("button", "Close").click()
  })
})
