import { useDispatch } from "react-redux";
import { removeFromeCart } from "../../store/slice/create-slice";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromeCart(cartItem.id));
  }
  return (
    <>
      <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className="h-28 rounded-lg"
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{cartItem?.title}</h1>
            <p className="text-white font-extrabold">{cartItem?.price}</p>
          </div>
        </div>
        <div className="">
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-950 p-4 rounded-lg text-white font-bold border-2"
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </>
  );
}
