const registerValidator = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}) => {
  let returnValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  }
  if (firstName === "") {
    returnValues.firstName = "First name cannot be empty!"
  }
  if (lastName === "") {
    returnValues.lastName = "Last name cannot be empty!"
  }
  if (email === "") {
    returnValues.email = "Email cannot be empty!"
  }
  if (password === "") {
    returnValues.password = "Password cannot be empty!"
  }
  if (confirmPassword === "") {
    returnValues.confirmPassword = "Confirm password cannot be empty!"
  }
  if (email !== "") {
    const regExEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!regExEmail.test(email)) {
      returnValues.email = "Email is Invalid!"
    }
  }
  if (password !== "") {
    const regExPassAlphabet = /[a-zA-Z]/g
    const regExPassNumbers = /\d/g
    const regExPassHasSpaces = /\s/g
    if (password.length <= 6) {
      returnValues.password = "Password must be greater than six characters"
    }
    if (regExPassHasSpaces.test(password)) {
      returnValues.password = "Password must not contain any spaces"
    }
    if (!regExPassNumbers.test(password)) {
      returnValues.password = "Password must contain a number"
    }
    if (!regExPassAlphabet.test(password)) {
      returnValues.password = "Password must contain an alphabet"
    }
  }
  if (password !== confirmPassword) {
    returnValues.confirmPassword = "Confirm password not equal to password"
  }
  return returnValues
}

export default registerValidator
