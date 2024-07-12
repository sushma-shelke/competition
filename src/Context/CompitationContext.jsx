import React, { createContext, useContext, useEffect, useState } from "react";
import { ListAllApi } from "../Api/ListAllApi";
import { ShowByIdApi } from "../Api/ShowByIdApi";
import { CreateApi } from "../Api/CreateApi";
import { useForm } from "react-hook-form";

const CompitationContext = createContext(null);
export const CompitationContextProvider = ({ children }) => {
  const [faq, setFaq] = useState([]);

  //  FAQ List All
  useEffect(() => {
    (async () => {
      const { result } = await ListAllApi.getFAQ();
      setFaq(result);
    })();
  }, []);

  // Register user
  const { control: userControl, handleSubmit: userHandleSubmit } = useForm();
  const registerUser = async (formData) => {
    const jsonData = { ...formData };
    const { result } = await CreateApi.RegisterApi(jsonData);
  };

  const value = {
    faq,
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
