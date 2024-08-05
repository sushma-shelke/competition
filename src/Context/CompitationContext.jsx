import React, { createContext, useContext, useEffect, useState } from "react";
import { ListAllApi } from "../Api/ListAllApi";
import { CreateApi } from "../Api/CreateApi";

const CompitationContext = createContext(null);
export const CompitationContextProvider = ({ children }) => {

  const [products, setProducts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [pid, setPid] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [category, setCategory] = useState([]);
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [users, setUsers] = useState([]);
  const [votes, setVotes] = useState([]);
  const [topVoted, setTopVoted] = useState([]);
  const [categoryWiseTopProducts, setCategoryWiseTopProducts] = useState([]);
  const [categoryWiseWinner, setCategoryWiseWinner] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );



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
  // Product List All pgination
  useEffect(() => {
    (async () => {
      try {
        const response = await ListAllApi.getProductPagination(currentPage, 12);
        setProducts(response?.result?.data?.data || []);
        setTotalPages(response?.result?.data?.totalPages || 1);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, [currentPage]);

  // category product list with pagination
  useEffect(() => {
    if (pid) {
      (async () => {
        try {
          const response = await ListAllApi.getCategoryPagination(
            pid,
            currentPage,
            12
          );
          setCategoryProduct(response?.result?.data?.data || []);
          setTotalPages(response?.result?.data?.totalPages || 1);
        } catch (error) {
          console.error("Error fetching category products:", error);
        }
      })();
    }
  }, [pid, currentPage]);
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
      console.log("Product added successfully:", response);
      return response;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  };

  // users list all
  useEffect(() => {
    (async () => {
      try {
        const response = await ListAllApi.getUsers();
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
        setVotes(response?.result?.data || []);
      } catch (error) {
        console.error("Error fetching votes:", error);
      }
    })();
  }, []);

  // give vote
  const giveVote = async (votedata) => {
    try {
      const response = await CreateApi.GiveVote(votedata);
      if (response?.result?.status === 200) {
        alert("Congratulation You Have Nice Choice");
        return response;
      }
      if (response?.result?.status === 204) {
        alert("You Alrady Voted one Product in This Category");
      }
    } catch (error) {
      console.error("Error adding vote:", error);
      throw error;
    }
  };
  // category wise top voted products
  const categoryWiseTopVotedProducts = async (id) => {
    try {
      const response = await ListAllApi.getCategoryWiseTopVotedProduct(id);
      console.log("getCategoryWiseTopVotedProduct", response?.result?.data);
      setCategoryWiseTopProducts(response?.result?.data);
      // return response;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  };
  // category wise top voted products
  const categoryWiseWinnerProducts = async () => {
    try {
      const response = await ListAllApi.CategorywiseWinner();
      console.log("categoryWiseWinnerProducts===", response);
      categoryWiseWinner(response);

      // return response;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await ListAllApi.CategorywiseWinner();
        // console.log(response?.result?.data, "setCategoryWiseWinner===--");

        setCategoryWiseWinner(response?.result?.data || []);
      } catch (error) {
        console.error("Error fetching votes:", error);
      }
    })();
  }, []);

  const logoutUser = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
  };

  const value = {
       products,
    currentPage,
    setCurrentPage,
    totalPages,
    category,
    users,
    votes,
    topVoted,
    getProductById,
    getProductByCayegoryId,
     isLoggedIn,
    registerOrLoginUser,
    addProduct,
    giveVote,
    categoryProduct,
    pid,
    setPid,
    logoutUser,
    categoryWiseTopProducts,
    categoryWiseTopVotedProducts,
    categoryWiseWinner,
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
