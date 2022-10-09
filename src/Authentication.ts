import Axios, {AxiosRequestConfig} from "axios";

export interface Credentials {
    email: string;
    password: string;
};

export async function onLogin(data: Credentials) {
    
    try {
        const checkLoginInfo = await fetch('http://http://localhost:3001/show_me_users',{
            
        })
    } catch (err) {
        if (err instanceof Error){
            console.error(err.message);
        } else {
            console.log('Unexpected Error...', err);
        }
    }
    /*
    const requestConfig: AxiosRequestConfig = {
        method: "post",
        url: 'http://http://localhost:3001/show_me_users',
        data
    }
    try {
        const {data: response} = await Axios.request(requestConfig);
    } catch (e) {
        console.error(e);
        return {error: e}
    }
    */

    
    //console.log(response);
}