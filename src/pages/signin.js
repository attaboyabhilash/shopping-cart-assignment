import React from "react"
import { useHistory } from "react-router-dom"
import Layout from "../containers/Layout"
import styles from "./styles/Signin.module.scss"
import PlaceholderText from "../components/PlaceholderText"
import InputField from "../components/InputField"
import useForm from "../utils/useForm"
import signInValidator from "../utils/signinValidator"

const Signin = () => {
  document.title = "SignIn | Shopping Cart"
  const history = useHistory()
  const { inputs, errors, handleChange, resetForm, setErrors } = useForm({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = signInValidator(inputs)
    if (result.email === "" && result.password === "") {
      resetForm()
      history.push("/")
    } else {
      setErrors(result)
    }
  }

  return (
    <Layout>
      <div className={styles.signin}>
        <PlaceholderText type="signin" />
        <div className={styles.mid_flexer}></div>
        <form
          className={styles.signin_form}
          onSubmit={(e) => handleSubmit(e)}
          method="post"
        >
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
          <input type="submit" value="Login" formNoValidate />
        </form>
      </div>
    </Layout>
  )
}

export default Signin
