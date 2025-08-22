import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromeCart } from "../../store/slice/create-slice";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  //   const {cart}  = useSelector((state) => state);
  const cart = useSelector((state) => state.cart);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    // console.log("Removed");
    dispatch(removeFromeCart(product.id));
  }

  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="">
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold">
            {product?.title}
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="bg-red-950 p-4 rounded-lg text-white font-bold border-2"
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove Frome cart"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
