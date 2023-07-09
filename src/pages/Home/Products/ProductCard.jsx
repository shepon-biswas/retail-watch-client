import { Link } from "react-router-dom";

const ProductCard = ({ productInfo }) => {
  console.log(productInfo);
  const { _id, name, image, price, model } = productInfo;
  return (
    <>
      <div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Product Image" />
          </figure>
          <div className="card-body space-y-2">
            <h2 className="card-title">{name}</h2>
            <div>
              <span className="px-3 py-1 bg-[#9336B4] text-white rounded"> Price: ৳ {price}</span>
            </div>
            <div>
              <span className="px-3 py-1 bg-[#9336B4] text-white rounded"> Model:  {model}</span>
            </div>
            <div className="card-actions justify-end">
              <Link to={`/product-details/${_id}`} className="btn btn-block bg-[#9336B4] hover:bg-[#d25bfd] text-white">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
