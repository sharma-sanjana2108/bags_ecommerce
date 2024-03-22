import axios from "axios";
export const fetchData = async () => {
  try {
    const response = await axios.get("https://bags-ecommerce.onrender.com/api/products");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//*******registration*******//
export const registerData = async (userData) => {
  try {
    const response = await axios.post(
      "https://bags-ecommerce.onrender.com/api/products/register",
      userData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred while registering user");
    }
  }
};

//******userLogin*****//
export const loginData = async (userData) => {
  try {
    const response = await axios.post(
      "https://bags-ecommerce.onrender.com/api/products/login",
      userData,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred while registering user");
    }
  }
};

//*******updatepassword*******//

export const updatePassword = async (userData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "https://bags-ecommerce.onrender.com/api/products/changepassword",
      userData,
      {
        headers: { authoraization: token },
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred while registering user");
    }
  }
};
