import axios from 'axios';

const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create ({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "content-type": "application/json"
    }
})

axiosInstance.interceptors.request.use(
    function(config) {
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response) {
        // Stop global loader here
        return processResponse(response);
    },
    function (error) {
        // Stop global loader here
        return Promise.reject(processError(error));
    }
)

/////////////
// If success -> return { isSuccess: true, data: Object }
// If fail -> return { isFailure: true, status: String, msg: String, code: int }
/////////////
const processResponse = (response) => {
    if(response?.status === 200) {
        return { isSuccess: true, data: response.data }
    } 
    else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}

const processError = (error) => {
    if(error.response) {

    }
    else if (error.request) {

    }
    else {
        
    }
}