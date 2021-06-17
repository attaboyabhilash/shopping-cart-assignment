const signInValidator = ({ email, password }) => {
  if (email === "" && password === "") {
    return {
      email: "Email cannot be empty!",
      password: "Password cannot be empty!",
    }
  }
  if (email === "") {
    return {
      email: "Email cannot be empty!",
      password: "",
    }
  }
  if (password === "") {
    return {
      email: "",
      password: "Password cannot be empty!",
    }
  }
  if (email !== "" && password !== "") {
    const regExEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const regExPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if (!regExEmail.test(email)) {
      return {
        email: "Email is Invalid!",
        password: "",
      }
    }

    if (!regExPass.test(password)) {
      return {
        email: "",
        password: "Password is invalid!",
      }
    }

    return {
      email: "",
      password: "",
    }
  }
}

export default signInValidator
