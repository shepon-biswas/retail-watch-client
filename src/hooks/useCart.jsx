import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../providers/AuthProvider";

const useCart = () => {
    const {user} = useContext(AuthContext);

    const {data: cart = [], isLoading: cartLoading, refetch} = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async() => {
            const res = await fetch(`https://retail-watch-server.vercel.app/carts?email=${user?.email}`);
            return res.json();
        }
    })

    return [cart, cartLoading, refetch]
};

export default useCart;