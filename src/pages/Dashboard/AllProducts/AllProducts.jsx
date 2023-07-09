import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import { FaEye } from "react-icons/fa";

const AllProducts = () => {
  const [products] = useProducts();
  return (
    <div>
      <div className="flex items-center justify-between my-14">
        <h2 className="font-bold text-2xl ">All Products: {products.length}</h2>
        <Link className="btn bg-[#9336B4] text-white">Add New Product</Link>
      </div>

      <div>
        <table className="table">
          {/* Table head */}
          <thead className="font-bold text-base text-center">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Case Size</th>
              <th>Case Material</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {products.map((productInfo, index) => (
              <tr key={productInfo._id}>
                <th>
                  <h2>{index + 1}</h2>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar ">
                      <div className="mask mask-squircle w-12 h-12 ">
                        <img
                          className="text-center"
                          src={productInfo.image}
                          alt="Classes Image"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{productInfo.name}</div>
                  </div>
                </td>
                <td>{productInfo.price}</td>
                <td>{productInfo.caseSize}</td>
                <td>{productInfo.caseMaterial}</td>
                <td>
                  <button>
                    <Link
                      // to={`/dashboard/update-classes/${productInfo._id}`}
                      className="btn btn-sm bg-blue-600 text-white"
                    >
                      <FaEye></FaEye>
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
