//Authentication
export const signupUser = (newUser) => {
    return { type: 'SIGNUP_SAGA', payload: newUser }
}