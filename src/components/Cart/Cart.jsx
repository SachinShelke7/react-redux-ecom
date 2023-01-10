import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Product 1",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique rerum obcaecati eum voluptate quibusdam earum quasi nesciunt ab vitae, sunt quo hic eius nihil magni dicta, animi explicabo a.",
      isNew: true,
      oldPrice: 999,
      price: 799,
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Product 1",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique rerum obcaecati eum voluptate quibusdam earum quasi nesciunt ab vitae, sunt quo hic eius nihil magni dicta, animi explicabo a.",
      isNew: true,
      oldPrice: 999,
      price: 799,
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Product 1",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique rerum obcaecati eum voluptate quibusdam earum quasi nesciunt ab vitae, sunt quo hic eius nihil magni dicta, animi explicabo a.",
      isNew: true,
      oldPrice: 999,
      price: 799,
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Product 1",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique rerum obcaecati eum voluptate quibusdam earum quasi nesciunt ab vitae, sunt quo hic eius nihil magni dicta, animi explicabo a.",
      isNew: true,
      oldPrice: 999,
      price: 799,
    },
  ];
  return (
    <div className="absolute top-16 right-5 shadow-lg bg-white max-w-[450px] p-3 border z-[999]">
      <h1 className="border-b mb-2 font-medium">Products In Your Cart</h1>
      <div className="flex flex-col gap-5 max-h-[250px] overflow-y-scroll scrollbar-hide">
        {data?.map((item) => {
          return (
            <div key={item.id} className="flex gap-2">
              <img src={item.img} alt="" className="w-20 h-24 object-cover" />
              <div className="flex flex-col justify-between">
                <h1 className="font-bold">{item.title}</h1>
                <p className="text-sm">{item.desc.substring(0, 80)}...</p>
                <div className="font-medium">1 x {item.price}</div>
              </div>
              <MdDeleteOutline className="text-red-700 w-10 h-10 cursor-pointer" />
            </div>
          );
        })}
      </div>
      <div className="text-sm font-bold flex justify-between py-2">
        <span>SUBTOTAL</span>
        <span>123</span>
      </div>
      <button className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-700 text-gray-200 hover:text-white transform transition-all duration-[300ms] my-3 flex items-center gap-1 text-sm">
        PROCEED TO CHECKOUT
      </button>
      <span className="text-red-500 text-xs font-medium cursor-pointer">
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
