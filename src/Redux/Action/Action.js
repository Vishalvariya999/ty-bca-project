import swal from "sweetalert"
import { toast } from 'react-toastify';
export const LoginData = (name, value, navigate) => {
    return async (dispatch, getState) => {
        const data = await fetch('http://localhost:8080/admin/login', {
            method: "POST",
            body: JSON.stringify({
                email: name,
                password: value
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        const res = await data.json()
        if (res.success) {
            toast.success(res.message)
            navigate("/")
        } else {
            toast.error(res.message)
        }
        dispatch({
            type: "SUBMIT",
            payload: res.data
        })
    }
}
export const InputData = (name, value) => {
    return {
        type: "TEXT",
        payload: {
            name: name,
            value: value
        }
    }
}