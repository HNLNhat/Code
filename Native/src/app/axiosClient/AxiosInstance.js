import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        //baseURL: 'https://fpoly-hcm.herokuapp.com/api/'
        baseURL: 'http://192.168.171.58:3000/api/'
     
    });

    //GỬI ĐI
    axiosInstance.interceptors.request.use(
        async (config) => {
            const token = await AsyncStorage.getItem('token');
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;