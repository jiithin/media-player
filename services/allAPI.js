import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverurl"


// upload new video
export const uploadVideoAPI = async (video)=>{
    return await commonAPI("POST", `${SERVER_URL}/allvideos`,video)
}


// view uploaded videos using get  request 
export const getAllUploadedVideoAPI = async (video)=>{
    return await commonAPI("GET", `${SERVER_URL}/allvideos`,"")
}


//get a video
 export const getVideoAPI = async (id)=>{
    return await commonAPI("GET", `${SERVER_URL}/allvideos/${id}`,"")
}


//add video to history
export const addVideoHistoryAPI = async (video)=>{
    return await commonAPI("POST", `${SERVER_URL}/history/`,video)
}


//get video from history
export const getHistoryAPI = async ()=>{
    return await commonAPI("GET", `${SERVER_URL}/history/`,"")
}


//delete video from history
export const deleteHistoryAPI = async (id)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/history/${id}`,{})
}


//delete video from all videos
export const deleteVideoAPI = async (id)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/allvideos/${id}`,{})
}


// add videos to catgory
export const addCategoryAPI = async (category)=>{
    return await commonAPI("POST", `${SERVER_URL}/category/`,category)
}


//get category
export const getAllCategoryAPI = async ()=>{
    return await commonAPI("GET", `${SERVER_URL}/category/`,"")
}


//delete category
export const deleteCategoryAPI = async (id)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/category/${id}`,{})
}


//upadte video to category
export const updateCategoryAPI = async (id,categoryDetails)=>{
    return await commonAPI("PUT", `${SERVER_URL}/category/${id}`,categoryDetails)
}


