import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const ProductDetails = () => {
  const productDetails = useLoaderData();
  // console.log(productDetails);
  const { user } = useContext(AuthContext);
  const [ , refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    _id,
    name,
    image,
    model,
    price,
    caseSize,
    caseShape,
    caseMaterial,
    warranty,
  } = productDetails;

  const handleAddtoCart = (product) => {
    // console.log(product)

    if (user) {
        const cartItem = {productID: _id, name, image, price, email: user?.email}
      fetch("https://retail-watch-server.vercel.app/carts", {
        method:"POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch;
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Product Added Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the product",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "LOGIN NOW",
      }).then((result) => {
        if (result.isConfirmed) {
            navigate("/login", {state: {from: location}})
        }
      });
    }
  };

  return (
    <>
      <div className="w-11/12 md:w-10/12 mx-auto my-14">
        <div className="grid md:grid-cols-2 gap-5 md:gap-20 items-center">
          <div className="shadow-lg rounded-lg">
            <img
              className="w-full h-[450px] object-fill"
              src={image}
              alt="product image"
            />
          </div>
          <div>
            <h2 className="font-bold text-3xl mb-5">{name}</h2>
            <div className="space-y-2 font-semibold">
              <p>Model: {model}</p>
              <p>Case Size: {caseSize}</p>
              <p>Case Shape: {caseShape}</p>
              <p>Case Material: {caseMaterial}</p>
              <p>Warranty: {warranty}</p>
              <p className="text-xl"> Price: ৳ {price}</p>
            </div>
            <div className="my-4">
              <button
                onClick={() => handleAddtoCart(productDetails)}
                className="btn bg-[#9336B4] hover:bg-[#d25bfd] text-white "
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="my-10">
          <hr />
          <h2 className="font-bold text-xl">Product Description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos
            delectus saepe, explicabo molestias rem dolor quisquam nostrum quos
            amet nemo voluptatum, commodi itaque autem provident, odit vero
            voluptatem deleniti quaerat! Quas nulla molestias necessitatibus
            deleniti quam odit autem voluptatum laboriosam dignissimos!
            Doloribus minus odit fuga dolores soluta alias optio?
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
