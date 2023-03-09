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
    console.log("res", res);
    if (res.success) {
      localStorage.setItem("role", res?.data[0]?.role);
      dispatch(resetForm());
      localStorage.setItem("token", JSON.stringify(res?.data[1]?.Token));
      localStorage.setItem("Login", true);
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
export const addManeger = (navigate) => {
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
          role: "MANAGER",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: JSON.parse(token),
          },
        }
      )
      .then((res) => {
        console.log("res --", res);
        if (res.status === 200) {
          toast.success(res.data.message);
          dispatch(resetForm());
          navigate("/showmaneger");
        } else {
          toast.error(res.data.message);
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
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((res) => {
        console.log("res", res);
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

export const deleteManeger = (deleteid) => async (dispatch, getState) => {
  const token = localStorage.getItem("token");
  console.log(" JSON.parse(token),", `Bearer ${JSON.parse(token)}`);
  await axios
    .delete("http://localhost:8080/admin/deleteManager", {
      data: { id: deleteid },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    })
    .then((res) => {
      console.log("res", res);
      if (res.status === 200) {
        dispatch(getManegers());
        toast.success(res.data.message);
      } else {
        toast.error(res.message);
      }
    });
};

export const getSingleManeger = (key) => {
  return async (dispatch, getState) => {
    console.log("key", key);
    const state = getState();
    const token = localStorage.getItem("token");
    await axios
      .get(
        `http://localhost:8080/admin/getManager?column=id&searchKey=${key}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: JSON.parse(token),
          },
        }
      )
      .then((res) => {
        dispatch({
          type: "GET_SINGLE_MANEGER",
          payload: res?.data?.data,
        });
      });
  };
};

export const getSingleEmployee = (key) => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log("key", key);
    const token = localStorage.getItem("token");
    await axios
      .get(
        `http://localhost:8080/admin/getEmployee?column=id&searchKey=${key}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: JSON.parse(token),
          },
        }
      )
      .then((res) => {
        console.log("res", res);
        dispatch({
          type: "GET_SINGLE_EMPLOYEE",
          payload: res?.data?.data,
        });
      });
  };
};

export const addEmployee = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = localStorage.getItem("token");
    await axios
      .post(
        "http://localhost:8080/admin/addEmployee",
        {
          name: state.LoginEx.input.name,
          email: state.LoginEx.input.email,
          mobile: state.LoginEx.input.mobile,
          address: state.LoginEx.input.address,
          password: state.LoginEx.input.password,
          birth_date: state.LoginEx.input.birth_date,
          salary: state.LoginEx.input.salary,
          role: state.LoginEx.input.role,
          gender: state.LoginEx.input.gender,
          language: state.LoginEx.input.langauge,
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

export const getEmployees = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = localStorage.getItem("token");
    await axios
      .get("http://localhost:8080/admin/getEmployee", {
        headers: {
          "Content-Type": "application/json",
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "GET_EMPLOYEE",
            payload: res?.data?.data,
          });
        } else {
          toast.error(res.message);
        }
      });
  };
};

export const deleteEmployee = (deleteid) => async (dispatch, getState) => {
  const token = localStorage.getItem("token");
  await axios
    .delete("http://localhost:8080/admin/removeEmployee", {
      data: { id: deleteid },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    })
    .then((res) => {
      console.log("res", res);
      if (res.status === 200) {
        dispatch(getEmployees());
        toast.success(res.data.message);
      } else {
        toast.error(res.message);
      }
    });
};

export const addClient = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = localStorage.getItem("token");
    await axios
      .post(
        "http://localhost:8080/admin/addClient",
        {
          client_name: state.LoginEx.input.name,
          client_email: state.LoginEx.input.email,
          client_mobile: state.LoginEx.input.mobile,
          client_address: state.LoginEx.input.address,
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
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
};

export const addProject = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = localStorage.getItem("token");
    console.log("state.LoginEx.input.file", state.LoginEx.input.file);
    await axios
      .post(
        "http://localhost:8080/admin/addProject",
        {
          project_image: state.LoginEx.input.file,
          project_name: state.LoginEx.input.project_name,
          client_name: state.LoginEx.input.client_name,
          from_date: state.LoginEx.input.from_date,
          to_date: state.LoginEx.input.to_date,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(token)}`,
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

export const getProject = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = localStorage.getItem("token");
    await axios
      .get("http://localhost:8080/admin/getProject", {
        headers: {
          "Content-Type": "application/json",
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "GET_PROJECT",
            payload: res?.data?.data,
          });
        } else {
          toast.error(res.message);
        }
      });
  };
};

export const addHr = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = localStorage.getItem("token");
    await axios
      .post(
        "http://localhost:8080/admin/addHr",
        {
          name: state.LoginEx.input.name,
          email: state.LoginEx.input.email,
          mobile: state.LoginEx.input.mobile,
          address: state.LoginEx.input.address,
          password: state.LoginEx.input.password,
          birth_date: state.LoginEx.input.birth_date,
          role: "HR",
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

export const getLeave = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = localStorage.getItem("token");
    await axios
      .get("http://localhost:8080/admin/getLeave", {
        headers: {
          "Content-Type": "application/json",
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "GET_LEAVE",
            payload: res?.data?.data,
          });
        } else {
          toast.error(res.message);
        }
      });
  };
};

export const getHrDetail = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = localStorage.getItem("token");
    await axios
      .get("http://localhost:8080/admin/getHr", {
        headers: {
          "Content-Type": "application/json",
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "GET_HR",
            payload: res?.data?.data,
          });
        } else {
          toast.error(res.message);
        }
      });
  };
};

export const getProjectDetail = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = localStorage.getItem("token");
    await axios
      .get("http://localhost:8080/admin/getProject", {
        headers: {
          "Content-Type": "application/json",
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "GET_PROJECT_DETAIL",
            payload: res?.data?.data,
          });
        } else {
          toast.error(res.message);
        }
      });
  };
};

export const giveTask = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = localStorage.getItem("token");
    console.log("state.LoginEx.input.file", state.LoginEx.input.file);
    await axios
      .post(
        "http://localhost:8080/admin/giveTask",
        {
          name: state.LoginEx.input.name,
          description: state.LoginEx.input.description,
          from_date: state.LoginEx.input.from_date,
          to_date: state.LoginEx.input.to_date,
          title: state.LoginEx.input.title,
          role: state.LoginEx.input.role,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(token)}`,
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

export const getTaskHr = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = localStorage.getItem("token");
    await axios
      .get("http://localhost:8080/hr/getHrTask", {
        headers: {
          "Content-Type": "application/json",
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "GET_TASK_DETAIL",
            payload: res?.data?.data,
          });
        } else {
          toast.error(res.message);
        }
      });
  };
};

export const acceptLeaveDetail = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = localStorage.getItem("token");
    await axios
      .put(
        "http://localhost:8080/admin/updateLeave",
        {
          id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
          dispatch(resetForm());
          dispatch(getLeave());
          // navigate("/");
        } else {
          toast.error(res.message);
        }
      });
  };
};

export const declineLeaveDetail = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = localStorage.getItem("token");
    await axios
      .put(
        "http://localhost:8080/admin/declineHMLeave",
        {
          id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
          dispatch(resetForm());
          dispatch(getLeave());
          // navigate("/");
        } else {
          toast.error(res.message);
        }
      });
  };
};

export const deletehr = (deleteid) => async (dispatch, getState) => {
  const token = localStorage.getItem("token");
  await axios
    .delete("http://localhost:8080/admin/removeHr", {
      data: { id: deleteid },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    })
    .then((res) => {
      console.log("res", res);
      if (res.status === 200) {
        dispatch(getHrDetail());
        toast.success(res.data.message);
      } else {
        toast.error(res.message);
      }
    });
};
