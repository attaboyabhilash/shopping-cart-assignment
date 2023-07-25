const signInValidator = ({ email, password }) => {
  let returnValues = {
    email: "",
    password: "",
  }
  if (email === "") {
    returnValues.email = "Email cannot be empty!"
  }
  if (password === "") {
    returnValues.password = "Password cannot be empty!"
  }
  if (email !== "" && password !== "") {
    const regExEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const regExPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if (!regExEmail.test(email)) {
      returnValues.email = "Email is Invalid!"
    }

    if (!regExPass.test(password)) {
      returnValues.password = "Password is invalid!"
    }
  }
  return returnValues
}

export default signInValidator
