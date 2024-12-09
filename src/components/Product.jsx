import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CasrtSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("ietm Added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("item Removed from Cart");
  };
  return (
    <div className=" flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 ml-4 rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 ">
          {post.title}
        </p>
      </div>
      <div>
        <p className=" w-40 text-gray-400 font-normal text-[10px]text-left ">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        {/* <img src={`${post.image}`}/> */}
        <img src={post.image} className="h-full w-full" />
      </div>

      <div className=" flex justify-between gap-12 mt-5 mb-4">  
        <div>
          <p className="text-green-600 font-semibold items-center w-full  ">${post.price}</p>
        </div>
        <div>
          {
            //pass kele;i post cart madhe ahe ki nhi
            cart.some((p) => p.id === post.id) ? 
             (
              <button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3  uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
              onClick={removeFromCart}>Remove Item</button>
            ) : 
            (
              <button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3  uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
               onClick={addToCart}>Add to Cart</button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Product;
