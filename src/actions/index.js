import axios from 'axios'

export const signup = (formData) => dispatch => {
    axios.post(
        '/api/v1/submit-form',
        formData
    )
}