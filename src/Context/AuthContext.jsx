import React, { createContext, useContext, useReducer, useState } from "react";
import { CreateApi } from "../Api/CreateApi";
import { useNavigate } from "react-router-dom";

// Define the initial state for the context
const initialState = {
  user: null, // User data when logged in
  error: null, // Error message if login fails
  isLoading: false, // Loading state
};

// Create the context
const AuthContext = createContext(initialState);

// Define action types
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const LOGOUT = "LOGOUT";

// Define the reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        isLoading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
        isLoading: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        error: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Get user data from sessionStorage, if it exists
  const initialUserData = sessionStorage.getItem("userdata")
    ? JSON.parse(sessionStorage.getItem("userdata"))
    : null;

  const [userdata, setUserData] = useState(initialUserData);

  const navigate = useNavigate();

  // Login function
  const login = async (userData) => {
    try {
      const response = await CreateApi.LoginApi(userData);
      console.log(response?.result?.status, "ressss");
      if (response) {
        if (response?.result?.status === 200) {
          navigate("/");
          dispatch({ type: LOGIN_SUCCESS, payload: response.result });
        } else {
          alert("Please enter the correct ID and password.");
          dispatch({ type: LOGIN_FAILURE, payload: "Login failed" });
        }

        if (response.result) {
          sessionStorage.setItem(
            "userdata",
            JSON.stringify(response.result.data)
          );
        }
      } else {
        dispatch({ type: LOGIN_FAILURE, payload: "Login failed" });
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: "An error occurred" });
    }
  };

  // const login = async (userData) => {
  //   try {
  //     const response = await CreateApi.LoginApi(userData);

  //     if (response.status === 200) {
  //       setUserData(response?.result?.data);

  //       sessionStorage.setItem(
  //         "userdata",
  //         JSON.stringify(response?.result?.data)
  //       );
  //       dispatch({ type: LOGIN_SUCCESS, payload: response.result });
  //       navigate("/");
  //     } else if (response.status === 404) {
  //       // Show an alert for incorrect ID and password
  //       alert("Please enter the correct ID and password.");
  //     } else {
  //       // Handle other status codes or errors
  //       dispatch({
  //         type: LOGIN_FAILURE,
  //         payload: response.err || "An error occurred",
  //       });
  //     }
  //   } catch (error) {
  //     // Handle any other errors
  //     dispatch({ type: LOGIN_FAILURE, payload: "An error occurred" });
  //   }
  // };

  console.log(userdata, "userdata HERE AT AUTHCONTEXT");

  const logout = () => {
    // Clear the user data from sessionStorage and state
    sessionStorage.removeItem("userdata");
    setUserData(null);
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, userdata }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook for using the context
export const useAuth = () => {
  return useContext(AuthContext);
};
