import axios from "axios";

const  axiosConfig= async(method,url,reqbody)=>{
   let  objconfig={
 method:method,
url:url,
data:reqbody
     }
   return await  axios (objconfig).then((res)=>{
        return res
     }).catch((err)=>{
        return err
     })
}
export default axiosConfig