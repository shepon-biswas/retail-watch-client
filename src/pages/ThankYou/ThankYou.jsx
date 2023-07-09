
import { FaCheckCircle } from "react-icons/fa";

const ThankYou = () => {
  return (
    <>
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="flex flex-col gap-10 items-center justify-center my-14">
          <FaCheckCircle className="w-48 h-48 text-green-600"></FaCheckCircle>
          <h2 className="text-2xl font-bold">Thank You For Your Order</h2>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
