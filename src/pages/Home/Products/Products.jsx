import useProducts from "../../../hooks/useProducts";
import ProductCard from "./ProductCard";

const Products = () => {

    const [products] = useProducts();
    // console.log(products)
    return (
        <>
         <div className="w-11/12 md:w-10/12 mx-auto my-14">
            <h2 className="uppercase text-4xl font-bold text-center underline underline-offset-8">Explore <span className="text-[#9336B4]">New Collections</span></h2>
            {/* Products Collections */}
            <div className="grid md:grid-cols-3 gap-10 my-14">
                {
                    products.map(productInfo => <ProductCard
                    key={productInfo._id}
                    productInfo={productInfo}
                    ></ProductCard>)
                }
            </div>
            </div> 
        </>
    );
};

export default Products;