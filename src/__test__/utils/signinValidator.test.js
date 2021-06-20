import signInValidator from "../../utils/signinValidator"

describe("testing signin validation process", () => {
  test("when form has empty values", () => {
    const values = {
      email: "",
      password: "",
    }

    expect(signInValidator(values)).toEqual({
      email: "Email cannot be empty!",
      password: "Password cannot be empty!",
    })
  })

  test("when email is invalid", () => {
    const values = {
      email: "test@",
      password: "test123#",
    }

    expect(signInValidator(values)).toEqual({
      email: "Email is Invalid!",
      password: "",
    })
  })

  test("when password is Invalid", () => {
    const values = {
      email: "test@example.com",
      password: "test",
    }

    expect(signInValidator(values)).toEqual({
      email: "",
      password: "Password is invalid!",
    })
  })

  test("when both values are match the standard", () => {
    const values = {
      email: "test@example.com",
      password: "test123#",
    }

    expect(signInValidator(values)).toEqual({
      email: "",
      password: "",
    })
  })
})
