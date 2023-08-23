import React, { useState, createContext } from "react";
import AxiosInstance from "../../axiosClient/AxiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const { children } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = async (email, password) => {
    try {
      const body = {
        email: email,
        password: password,
      }
      //http://localhost:3000/api/user/login
      const response = await AxiosInstance().post("/user/login", body);
      //Đọc token
      const {token} = response.data;
      //Lưu token vào bộ nhó
      await AsyncStorage.setItem("token", token); //Lưu lại token
      //Cập nhật state
      setIsLoggedIn(true); //Chuyển trạng thái login
      return true;
    } catch (error) {
      console.log("login error:", error);
    }
    return false;
  };

  const register = async (email, password, name) => {
    try {
      await AxiosInstance().post("/user/register", {
        email: email,
        password: password,
        name: name,
      });
      if(result){
        await AxiosInstance().post('/user/sendemail', {
          to: email,
          subject: "Đăng ký thành công",
          name: name,
        })
      }
      return true;
    } catch (error) {
      console.log("register error:", error);
    }
    return false;
  };
  return (
    <UserContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, login, register }}
    >
      {children}
    </UserContext.Provider>
  );
};
