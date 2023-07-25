import { useState } from "react"

const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial)
  const [errors, setErrors] = useState(initial)

  const handleChange = (e) => {
    let { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
    setErrors({
      ...errors,
      [name]: "",
    })
  }

  const resetForm = () => {
    setInputs(initial)
    setErrors(initial)
  }

  return {
    inputs,
    errors,
    handleChange,
    resetForm,
    setErrors,
  }
}

export default useForm
