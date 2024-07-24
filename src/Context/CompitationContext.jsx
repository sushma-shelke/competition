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
  const [users, setUsers] = useState([]);
  const [votes, setVotes] = useState([]);
  const [topVoted, setTopVoted] = useState([]);

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

  //  Top Voted Product
  useEffect(() => {
    (async () => {
      try {
        const response = await ListAllApi.getTopVotedProduct();
        console.log(response?.result?.data, "TOP VOTED PRODUCT");
        setTopVoted(response?.result?.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, []);

  // Login and Register User
  const registerOrLoginUser = async (mobileNumber) => {
    try {
      const jsonData = { mobileNumber };
      const response = await ListAllApi.RegisterApi(jsonData);
      if (response && response?.result) {
        const userData = response?.result?.data;
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(userData));
        alert("Login successful !!");

        return userData;
      } else {
        console.error("Unexpected response format", response);
        return null;
      }
    } catch (error) {
      console.error("Error during registration or login:", error);
      return null;
    }
  };

  // Function to add a product
  const addProduct = async (productData) => {
    try {
      const response = await CreateApi.AddProduct(productData);
      // Handle the response as needed
      console.log("Product added successfully:", response);
      return response;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error; // Optionally rethrow the error for further handling
    }
  };

  // users list all
  useEffect(() => {
    (async () => {
      try {
        const response = await ListAllApi.getUsers();
        console.log("users response", response);
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
        console.log("vote response", response);
        setVotes(response?.result?.data || []);
      } catch (error) {
        console.error("Error fetching votes:", error);
      }
    })();
  }, []);

  // }

  const value = {
    faq,
    products,
    category,
    users,
    votes,
    topVoted,
    getProductById,
    getProductByCayegoryId,
    getProductById,
    isLoggedIn,
    registerOrLoginUser,
    addProduct,
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
