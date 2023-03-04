const data = {
  email: "",
  password: "",
  name: "",
  address: "",
  mobile: "",
  birth_date: "",
  role: "",
};

const initialData = {
  isLogin: true,
  input: { ...data },
  LoginInputData: [],
  data: [],
  getManeger: [],
  loading: true,
  singleUser: [],
};
const LoginEx = (state = initialData, action) => {
  switch (action.type) {
    case "TEXT":
      const { name, value } = action.payload;
      return {
        ...state,
        input: {
          ...state.input,
          [name]: value,
        },
      };
    case "SUBMIT":
      return {
        ...state,
        data: action.payload,
        LoginInputData: [...state.LoginInputData, state.input],
      };
    case "RESET":
      return {
        ...state,
        input: { ...data },
      };
    case "GET_MANEGER":
      return {
        ...state,
        getManeger: action.payload,
        loading: false,
      };
    case "GET_SINGLE_MANEGER":
      return {
        ...state,
        singleUser: action.payload,
      };
    default:
      return state;
  }
};

export default LoginEx;
