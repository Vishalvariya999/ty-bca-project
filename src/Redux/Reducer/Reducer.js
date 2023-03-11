const data = {
  email: "",
  password: "",
  name: "",
  address: "",
  mobile: "",
  birth_date: "",
  role: "",
  salary: "",
  gender: "",
  langauge: "",
  file: "",
  project_name: "",
  client_name: "",
  from_date: "",
  to_date: "",
  title: "",
  description: "",
  reason: "",
};

const initialData = {
  isLogin: true,
  input: { ...data },
  LoginInputData: [],
  data: [],
  getManeger: [],
  getEmployee: [],
  loading: true,
  singleUser: [],
  singleEmployee: [],
  getProjects: [],
  leaveDetail: [],
  hrDetail: [],
  projectDetail: [],
  taskDetail: [],
  managerTask: [],
  getAllLeave: [],
  getClent: [],
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
    case "GET_CLIENT":
      return {
        ...state,
        getClent: action.payload,
        loading: false,
      };
    case "GET_SINGLE_MANEGER":
      return {
        ...state,
        singleUser: action.payload,
      };
    case "GET_EMPLOYEE":
      return {
        ...state,
        getEmployee: action.payload,
        loading: false,
      };
    case "GET_SINGLE_EMPLOYEE":
      return {
        ...state,
        singleEmployee: action.payload,
      };
    case "GET_PROJECT":
      return {
        ...state,
        getProjects: action.payload,
        loading: false,
      };
    case "GET_LEAVE":
      const login = localStorage.getItem("loginname");
      const loginname = state?.input?.name;
      return {
        ...state,
        leaveDetail: action.payload,
        input: {
          name: login,
        },
        loading: false,
      };
    case "GET_HR":
      return {
        ...state,
        hrDetail: action.payload,
        loading: false,
      };
    case "GET_PROJECT_DETAIL":
      return {
        ...state,
        projectDetail: action.payload,
        loading: false,
      };
    case "GET_ALL_LEAVE":
      return {
        ...state,
        getAllLeave: action.payload,
        loading: false,
      };
    case "GET_TASK_DETAIL":
      return {
        ...state,
        taskDetail: action.payload,
        loading: false,
      };
    case "GET_TASK_MANAGER":
      return {
        ...state,
        managerTask: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default LoginEx;
