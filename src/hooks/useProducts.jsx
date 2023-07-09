import { useQuery } from "react-query";


const useProducts = () => {
    const {data: products = [], isLoading: productsLoading, refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/products');
            return res.json();
        }
    })

    return [products, productsLoading, refetch]
};

export default useProducts;