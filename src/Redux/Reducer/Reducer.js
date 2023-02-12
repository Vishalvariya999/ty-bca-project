const initialData = {
    isLogin: true,
    input: {
        email: "",
        password: ""
    },
    LoginInputData: [],
    data: []
}
const LoginEx = (state = initialData, action) => {
    switch (action.type) {
        case "TEXT":
            const { name, value } = action.payload
            return {
                ...state,
                input: {
                    ...state.input,
                    [name]: value
                },
            }
        case "SUBMIT":
            return {
                ...state,
                data: action.payload,
                LoginInputData: [...state.LoginInputData, state.input]
            }
        default: return state
    }
}

export default LoginEx