import registerValidator from "../../utils/registerValidator"

describe("testing register validation process", () => {
  test("when form has empty values", () => {
    const values = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }

    expect(registerValidator(values)).toEqual({
      firstName: "First name cannot be empty!",
      lastName: "Last name cannot be empty!",
      email: "Email cannot be empty!",
      password: "Password cannot be empty!",
      confirmPassword: "Confirm password cannot be empty!",
    })
  })

  test("when email is invalid", () => {
    const values = {
      firstName: "John",
      lastName: "Doe",
      email: "test@",
      password: "test123#",
      confirmPassword: "test123#",
    }

    expect(registerValidator(values)).toEqual({
      firstName: "",
      lastName: "",
      email: "Email is Invalid!",
      password: "",
      confirmPassword: "",
    })
  })

  test("when password does not contain alphabets", () => {
    const values = {
      firstName: "John",
      lastName: "Doe",
      email: "test@example.com",
      password: "3609123#",
      confirmPassword: "3609123#",
    }

    expect(registerValidator(values)).toEqual({
      firstName: "",
      lastName: "",
      email: "",
      password: "Password must contain an alphabet",
      confirmPassword: "",
    })
  })

  test("when password does not contain numbers", () => {
    const values = {
      firstName: "John",
      lastName: "Doe",
      email: "test@example.com",
      password: "testabc#",
      confirmPassword: "testabc#",
    }

    expect(registerValidator(values)).toEqual({
      firstName: "",
      lastName: "",
      email: "",
      password: "Password must contain a number",
      confirmPassword: "",
    })
  })

  test("when password contain spaces", () => {
    const values = {
      firstName: "John",
      lastName: "Doe",
      email: "test@example.com",
      password: "test123# ",
      confirmPassword: "test123# ",
    }

    expect(registerValidator(values)).toEqual({
      firstName: "",
      lastName: "",
      email: "",
      password: "Password must not contain any spaces",
      confirmPassword: "",
    })
  })

  test("when password is not greater than 6 characters", () => {
    const values = {
      firstName: "John",
      lastName: "Doe",
      email: "test@example.com",
      password: "test12",
      confirmPassword: "test12",
    }

    expect(registerValidator(values)).toEqual({
      firstName: "",
      lastName: "",
      email: "",
      password: "Password must be greater than six characters",
      confirmPassword: "",
    })
  })

  test("when confirm password is not equal to password", () => {
    const values = {
      firstName: "John",
      lastName: "Doe",
      email: "test@example.com",
      password: "test123#",
      confirmPassword: "test1234#",
    }

    expect(registerValidator(values)).toEqual({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "Confirm password not equal to password",
    })
  })
})
