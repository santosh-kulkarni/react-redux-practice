import axios from "axios";

export const increase = () => {
    return {
        type: "INCREASE"
    }
}

export const decrease = () => {
    return {
        type: "DECREASE"
    }
}

export const reset = () => {
    return {
        type: "RESET"
    }
}

const storeAxios = (data) => {
    return {
        type: "AXIOS",
        payload: data
    }
}

export const axiosDispatch = () => {
    return function(dispatch) {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                dispatch(storeAxios(res.data[Math.floor(Math.random() * (100 - 1) + 1)].title))
            })
            .catch((err) => {
                dispatch(storeAxios([]))
            })
    }
}