import React, { createContext } from 'react'
import AxiosInstance from '../../axiosClient/AxiosInstance';


export const NewsContext = createContext();

export const NewsProvider = (props) => {
    const { children } = props;

    // lấy danh sách bài viết
    const getNews = async () => {
        try {
            const response = await AxiosInstance().get('/product/get-all');
            //console.log(response.data);
            return response.data;
        } catch (error) {
            console.log('getNews Error: ', error);
        }
        return [];
    }

    // lấy thông tin chi tiết 1 bài viết
    const getDetail = async (id) => {
        try {
            const response = await AxiosInstance().get(`/product/article/${id}/detail`);
            return response.data[0];
        
        } catch (error) {
            console.log('Get Detail error: ', error);
        }
        return null;
    }

    // upload hình ảnh lên server
    const uploadImage = async(formData) =>{
        try {
            const response = await AxiosInstance('multipart/form-data')
                            .post(`product/upload-image`, formData);
            return response.data;
        } catch (error) {
            console.log("Up load error:", error);
            
        }
        return null;
    }

    // lưu bài viết
    const saveNews = async (name, price, image)=>{
        try {
            const body = {
               name,
               price,
               quantity: "",
               image,
               category: "",
            };
            console.log(body);
            await AxiosInstance().post('/product/new', body);
            return true;
        } catch (error) {
            console.log('save news error: ', error);
        }
        return false;
    }

    return (
        <NewsContext.Provider value={{ getNews, getDetail, uploadImage, saveNews }}>
            {children}
        </NewsContext.Provider>
    )
}






// import { formToJSON } from "axios";
// import React, { createContext, useState } from "react";
// import AxiosInstance from "../../axiosClient/AxiosInstance";

// export const NewsContext = createContext();

// export const NewsProvider = (props) => {
//   const { children } = props;

//   //Lấy danh sách bài viết
//   const getNews = async () => {
//     try {
//       const response = await AxiosInstance().get('/articles');
//       return response.data;
//     } catch (error) {
//       console.log('getNews error:', error);
//     }
//     return [];
//   }
//   //Lấy thông tin chi tiết 1 bài viết
//   const getDetail = async (id) => {
//     try{
//       const response = await AxiosInstance().get(`/articles/${id}/detail`);
//       return response.data[0];
//     }catch(error){
//       console.log('get detail error: ', error);
//     }
//     return null;
//   }

// //Up load hinh anh len server
// const uploadImage = async (formData) => {
//   try{
//     const response = await AxiosInstance('multipart/form-data')
//     .post(`media/upload`, formData);
//     return response.data;
//   }catch(error){
//     console.log('upload error: ', error);
//   }
//   return null;
// }

//   return (
//     <NewsContext.Provider value={{ getNews, getDetail, uploadImage}}>{children}</NewsContext.Provider>
//   );
// };
