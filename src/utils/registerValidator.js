const registerValidator = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}) => {
  if (
    email === "" &&
    password === "" &&
    firstName === "" &&
    lastName === "" &&
    confirmPassword === ""
  ) {
    return {
      firstName: "First name cannot be empty!",
      lastName: "Last name cannot be empty!",
      email: "Email cannot be empty!",
      password: "Password cannot be empty!",
      confirmPassword: "Confirm password cannot be empty!",
    }
  }
  if (firstName === "") {
    return {
      firstName: "First name cannot be empty!",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  }
  if (lastName === "") {
    return {
      firstName: "",
      lastName: "Last name cannot be empty!",
      email: "",
      password: "",
      confirmPassword: "",
    }
  }
  if (email === "") {
    return {
      firstName: "",
      lastName: "",
      email: "Email cannot be empty!",
      password: "",
      confirmPassword: "",
    }
  }
  if (password === "") {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "Password cannot be empty!",
      confirmPassword: "",
    }
  }
  if (confirmPassword === "") {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "Confirm password cannot be empty!",
    }
  }
  if (
    email !== "" &&
    password !== "" &&
    firstName !== "" &&
    lastName !== "" &&
    confirmPassword !== ""
  ) {
    const regExEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const regExPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if (!regExEmail.test(email)) {
      return {
        firstName: "",
        lastName: "",
        email: "Email is Invalid!",
        password: "",
        confirmPassword: "",
      }
    }

    if (!regExPass.test(password)) {
      return {
        firstName: "",
        lastName: "",
        email: "",
        password:
          "Password must contain an alphabet, number, special character",
        confirmPassword: "",
      }
    }

    if (password !== confirmPassword) {
      return {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "Confirm password not equal to password",
      }
    }
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  }
}

export default registerValidator
