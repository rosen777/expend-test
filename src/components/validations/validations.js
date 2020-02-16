const regName = /^[a-zA-Z]{3,40}(?:\s[A-Z])?\s[a-zA-Z]{2,40}$/
const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const regPhone = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/

export const validateName = value => value && !regName.test(value) ? "First and last name must be at least two characters separated by a space" : undefined


const validateLength = min => value =>
  value && value.length < min ? `Must be at least ${min} characters` : undefined

export const validateLength1 = validateLength(1)

export const validateEmail = value =>
  value && !regEmail.test(value) ? "Invalid email address" : undefined

export const validatePhone = value =>
    value && !regPhone.test(value) ? "Invalid phone number" : undefined
