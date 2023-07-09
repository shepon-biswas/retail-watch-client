

const AdminHome = () => {
  return (
    <>
      <div>
        <h2 className="text-xl font-bold">Hello, Welcome Back! </h2>
        <div className="grid md:grid-cols-3 gap-10 my-14 ">
          <div className="bg-[#e59ffe] px-10 py-14 rounded-md">
            <h4 className="text-xl font-semibold">Total Orders</h4>
            <p className="text-center font-semibold text-3xl">20</p>
          </div>
          <div className="bg-[#e59ffe] px-10 py-14 rounded-md">
            <h4 className="text-xl font-semibold">Total Products</h4>
            <p className="text-center font-semibold text-3xl">1023</p>
          </div>
          <div className="bg-[#e59ffe] px-10 py-14 rounded-md">
            <h4 className="text-xl font-semibold">Total Customers</h4>
            <p className="text-center font-semibold text-3xl">66853</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
