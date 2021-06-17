import React from "react"
import { useHistory } from "react-router-dom"
import Layout from "../containers/Layout"
import styles from "./styles/Register.module.scss"
import PlaceholderText from "../components/PlaceholderText"
import InputField from "../components/InputField"
import useForm from "../utils/useForm"
import registerValidator from "../utils/registerValidator"

const Register = () => {
  document.title = "Register | Shopping Cart"
  const history = useHistory()
  const { inputs, errors, handleChange, resetForm, setErrors } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = registerValidator(inputs)
    if (
      result.email === "" &&
      result.password === "" &&
      result.firstName === "" &&
      result.lastName === "" &&
      result.confirmPassword === ""
    ) {
      resetForm()
      history.push("/")
    } else {
      setErrors(result)
    }
  }

  return (
    <Layout>
      <div className={styles.register}>
        <PlaceholderText type="register" />
        <div className={styles.mid_flexer}></div>
        <form
          className={styles.register_form}
          onSubmit={(e) => handleSubmit(e)}
          method="post"
        >
          <InputField
            type="text"
            name="firstName"
            label="First Name"
            values={inputs}
            errors={errors}
            handleChange={handleChange}
          />
          <InputField
            type="text"
            name="lastName"
            label="Last Name"
            values={inputs}
            errors={errors}
            handleChange={handleChange}
          />
          <InputField
            name="email"
            label="Email"
            values={inputs}
            errors={errors}
            handleChange={handleChange}
          />
          <InputField
            name="password"
            label="Password"
            values={inputs}
            errors={errors}
            handleChange={handleChange}
          />
          <InputField
            type="text"
            name="confirmPassword"
            label="Confirm Password"
            values={inputs}
            errors={errors}
            handleChange={handleChange}
          />
          <input type="submit" value="Signup" formNoValidate />
        </form>
      </div>
    </Layout>
  )
}

export default Register
