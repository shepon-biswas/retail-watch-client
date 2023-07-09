import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { FaPenSquare, FaTrash } from "react-icons/fa";

const CartPage = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((sum, item)=> item.price + sum, 0)

  return (
    <>
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div>
            <h2 className="text-2xl font-bold text-center my-14">Your Cart Summary</h2>
        </div>
        <div className="grid md:grid-cols-6 gap-5">
          <div className="col-span-4"><table className="table">
            {/* head */}
            <thead className="font-bold text-base text-center">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {cart.map((cartInfo, index) => (
                <tr key={cartInfo._id}>
                  <th>
                    <h2>{index + 1}</h2>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar ">
                        <div className="mask mask-squircle w-12 h-12 ">
                          <img
                          className="text-center"
                            src={cartInfo.image}
                            alt="Classes Image"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">
                        {cartInfo.name}
                      </div>
                    </div>
                  </td>
                  <td>{cartInfo.price}</td>
                  <td>
                    <button>
                      <Link
                        to={`/dashboard/update-classes/${cartInfo._id}`}
                        className="btn btn-sm bg-red-600 text-white"
                      >
                        <FaTrash></FaTrash>
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>
          <div className="col-span-2 p-3 rounded-md text-center bg-[#f5d9ff] flex flex-col ">
            <h2 className="text-xl font-bold">Total Quantity: {cart.length}</h2>
            <h2 className="text-xl font-bold">Total Price: ৳{totalPrice}</h2>
            <Link to={"/thank-you"} className="btn btn-block self-end bg-[#9336B4] text-white mt-12">Place Order</Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
