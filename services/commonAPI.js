import axios from "axios"; // uesd import becoz es6


//export this structure to  use in other files.

export const commonAPI = async (httpMethod,url,reqBody)=>{
    let reqConfig = {
        method:httpMethod,
        url,
        headers:{
            "Content-Type":"application/json"
        },
        data:reqBody
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch(err=>{
        return err});
}