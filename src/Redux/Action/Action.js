import swal from "sweetalert";
import { toast } from "react-toastify";
import axios from "axios";
export const LoginData = (name, value, navigate) => {
  return async (dispatch, getState) => {
    const data = await fetch("http://localhost:8080/admin/login", {
      method: "POST",
      body: JSON.stringify({
        email: name,
        password: value,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const res = await data.json();

    if (res.success) {
      localStorage.setItem("token", JSON.stringify(res?.data[1]?.Token));
      toast.success(res.message);
      navigate("/");
    } else {
      toast.error(res.message);
    }
    dispatch({
      type: "SUBMIT",
      payload: res.data,
    });
  };
};
export const InputData = (name, value) => {
  return {
    type: "TEXT",
    payload: {
      name: name,
      value: value,
    },
  };
};
export const addManeger = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = localStorage.getItem("token");
    await axios
      .post(
        "http://localhost:8080/admin/addManager",
        {
          name: state.LoginEx.input.name,
          email: state.LoginEx.input.email,
          mobile: state.LoginEx.input.mobile,
          address: state.LoginEx.input.address,
          password: state.LoginEx.input.password,
          birth_date: state.LoginEx.input.birth_date,
          role: state.LoginEx.input.role,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: JSON.parse(token),
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
          dispatch(resetForm());
          // navigate("/");
        } else {
          toast.error(res.message);
        }
      });
  };
};
export const resetForm = () => {
  return {
    type: "RESET",
  };
};
export const getManegers = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = localStorage.getItem("token");
    await axios
      .get("http://localhost:8080/admin/getManager", {
        headers: {
          "Content-Type": "application/json",
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "GET_MANEGER",
            payload: res?.data?.data,
          });
        } else {
          toast.error(res.message);
        }
      });
  };
};

// export const deleteManeger = (deleteid) => {
//   return async (dispatch, getState) => {
//     const token = localStorage.getItem("token");
//     console.log(" JSON.parse(token),", JSON.parse(token));
//     await axios
//       .delete(
//         "http://localhost:8080/admin/deleteManager",
//         {
//           id: deleteid,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: {
//               Token:
//                 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2Nzc3NzM3ODEsImV4cCI6MTY3NzgwMzc4MX0.dEiqdI9WhHntqq5x8mP398FRcdgJ7tXUZCBwhawk2QQ",
//             },
//           },
//         }
//       )
//       .then((res) => {
//         console.log("res", res);
//         if (res.status === 200) {
//           toast.success(res.data.message);
//         } else {
//           toast.error(res.message);
//         }
//       });
//   };
// };

export const editManeger = (key) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/admin/getManager?searchKey=${key}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
          dispatch({
            type: "GET_SINGLE_MANEGER",
            payload: res?.data?.data,
          });
        } else {
          toast.error(res.message);
        }
      });
  };
};
