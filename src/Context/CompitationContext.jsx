import React, { createContext, useContext, useEffect, useState } from "react";
import { ListAllApi } from "../Api/ListAllApi";
import { ShowByIdApi } from "../Api/ShowByIdApi";
import { CreateApi } from "../Api/CreateApi";
import { useForm } from "react-hook-form";

const CompitationContext = createContext(null);
export const CompitationContextProvider = ({ children }) => {

  const [faq, setFaq] = useState([]);
  const [products, setProducts] = useState();
  const [category, setCategory] = useState([]);
  const [users , setUsers]= useState([]);
  const [votes, setVotes]= useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  //  FAQ List All
  // useEffect(() => {
  //   (async () => {
  //     const { result } = await ListAllApi.getFAQ();
  //     setFaq(result);
  //   })();
  // }, []);

  // Product List All
  useEffect(() => {
    (async () => {
      try {
        const response = await ListAllApi.getProduct();
        setProducts(response?.result?.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, []);

  // Function to fetch product by ID
  const getProductById = async (id) => {
    try {
      const response = await ListAllApi.getProductById(id);
      return response?.result;
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      return null;
    }
  };


 
    
     // Category List All
    useEffect(() => {
      (async () => {
        try {
          const response = await ListAllApi.getCategory();
          setCategory(response?.result?.data || []);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      })();
    }, []);
// Category wise product
    const getProductByCayegoryId = async (id) => {
      try {
        const response = await ListAllApi.getProductListByCategoryId(id);
        return response?.result;
      } catch (error) {
        console.error("Error fetching product by ID:", error);
        return null;
      }
    };
    // Register user
  // const { control: userControl, handleSubmit: userHandleSubmit } = useForm();
  // const registerUser = async (formData) => {
  //   const jsonData = { ...formData };
  //   const { result } = await CreateApi.RegisterApi(jsonData);

  const registerOrLoginUser = async (mobileNumber) => {
    console.log("LOGIN ATTEMPT");
    try {
      const jsonData = { mobileNumber };
      const response = await ListAllApi.RegisterApi(jsonData);

      // Check if the response is as expected
      console.log(response);

      // Assuming response structure: { data: { ... }, status: "200" }
      if (response && response.data) {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        return response.data;
      } else {
        console.error("Unexpected response format", response);
        return null;
      }
    } catch (error) {
      console.error("Error during registration or login:", error);
      return null;
    }
  };
// }

// users list all
useEffect(() => {
  (async () => {
    try {
      const response = await ListAllApi.getUsers();
      console.log("users response",response)
      setUsers(response?.result?.data || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  })();
}, []);

// votes list all
useEffect(() => {
  (async () => {
    try {
      const response = await ListAllApi.getvotes();
      console.log("vote response",response)
      setVotes(response?.result?.data || []);
    } catch (error) {
      console.error("Error fetching votes:", error);
    }
  })();
}, []);

  const value = {
    faq,
    products,
    category,
    users,
    votes,
    getProductById,
    getProductByCayegoryId,
    getProductById,
    isLoggedIn,
    registerOrLoginUser,

  };
  return (
    <CompitationContext.Provider value={value}>
      {children}
    </CompitationContext.Provider>
  );
};

export const useCompitationContext = () => {
  const context = useContext(CompitationContext);
  if (!context) {
    throw new Error(
      "useCompitationContext must be used within a CompitationContextProvider component"
    );
  }
  return context;
};
