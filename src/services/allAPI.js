import commonAPI from "./commonApi"
import SERVERURL from "./serverURL"

export const saveMovieDetails = async (movieDetails)=>{
    return await commonAPI(`POST`,`${SERVERURL}/uploadMovieDetails`,movieDetails)
}

export const getMovieDetailsAPI = async ()=>{
    return await commonAPI(`GET`,`${SERVERURL}/uploadMovieDetails`,"")
}

export const deleteMovieDetailsAPI = async (id)=>{
    return await commonAPI(`DELETE`,`${SERVERURL}/uploadMovieDetails/${id}`, {})
}

export const likeCountAPI = async (id, like)=>{
    return await commonAPI(`PATCH`,`${SERVERURL}/uploadMovieDetails/${id}`, {like})
}