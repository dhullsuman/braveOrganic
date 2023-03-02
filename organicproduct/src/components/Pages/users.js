import axios from "axios";
import { handleTotalItems, handleTotalWishtlist } from "../../Redux/cart/action";
import { handleLoginAgain, handleLoginFailure, handleLoginRequest } from "../../Redux/Register/action"

export const LoginUser = async(dispatch,userId) => {
    dispatch(handleLoginRequest());
    try {
        if (userId) {
            const user = await axios(`http://localhost:8080/user/${userId}`);
            dispatch(handleTotalItems(user.data))
            dispatch(handleTotalWishtlist(user.data))
          dispatch(handleLoginAgain({ user: user.data.user, isLogin: true }));

            localStorage.setItem("user", JSON.stringify(user.data.user))
            localStorage.setItem("isLogin", true)
        }

     } catch (err) {
        dispatch(handleLoginFailure());
    }
}

export async function AddToFavourites(id,data,setWisht,toast,isLogin,dispatch) {
    if (!isLogin) {
      toast({
        title: "Please Login.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setWisht(true);
      await axios.post(`http://localhost:8080/wishlist/add/${id}`, data);
      LoginUser(dispatch,id)
      toast({
        title: "Added Successfully",
      description:"In Wishlist",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  }

  export const RemoveWishlistItem = async (id, products,setWisht,toast,dispatch) => {
    setWisht(false);
    await axios.post(`http://localhost:8080/wishlist/delete/${id}`, products);
    LoginUser(dispatch,id)
    toast({
      title: "Remove Successfully",
      description:"From Wishlist",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
export async function AddToCart(id,data,setCart,toast,isLogin,dispatch) {
    if (!isLogin) {
      toast({
        title: "Please Login.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setCart(true);
      await axios.post(`http://localhost:8080/cart/add/${id}`, data);
    LoginUser(dispatch,id)
      toast({
        title: "Added Successfully",
      description:"In Cart",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  }

  export const RemoveCart = async (id, products,setCart,toast) => {
    setCart(false);
    await axios.post(`http://localhost:8080/cart/delete/${id}`, products);
    toast({
      title: "Remove Successfully",
      description:"From Cart",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

export const ChangeQuentity = async(id,product,setQuty,quty,a,dispatch) => {
  product={...product,qty:quty+a}
    setQuty(quty+a);
  const data=await axios.post(`http://localhost:8080/cart/edit/${id}`,product)
  dispatch(handleTotalItems(data.data))
  LoginUser(dispatch,id);
  }