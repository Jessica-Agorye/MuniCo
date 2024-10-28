import Menubar from "../menubar/Menubar";

const CheckoutPage = () => {
  return (
    <div>
      <Menubar />

      <div className=" grid grid-cols-2 gap-4 mx-10">
        <div className=" border border-gray-300 pl-10 pb-10 pt-10 ">
          <p className=" font-bold text-2xl">Payment Infomation</p>

          <div className="">
            <form className="mt-6 leading-10 ">
              <label htmlFor="username"> Name: </label>
              <input
                className="border border-gray-300 mb-2 text-center"
                type="text"
                name="usename"
                placeholder=" Enter Username"
              />
              <label htmlFor="password" className="ml-6 ">
                {" "}
                Email:{" "}
              </label>
              <input
                className="border border-gray-300 mb-4 text-center  "
                type="password"
                placeholder="Enter Address"
              />
              <br></br>
              <label htmlFor="password"> Shipping Address: </label>
              <input
                className="border mb-4 border-gray-300 text-center w-96"
                type="password"
                placeholder="Enter Address"
              />
              <br></br>
              <label htmlFor="password"> Phone Number: </label>
              <input
                className="border mb-4 border-gray-300 text-center "
                type="password"
                placeholder="Enter Address"
              />
              <br></br>
              <div className="">
                <label className="font-bold">Payment Options.</label>
                <br></br>
                <input type="checkbox" className="" /> Pay with Card
                <br></br>
                <input type="checkbox" /> Pay with Bank Transfer
                <br></br>
                <input type="checkbox" /> Pay with Cash
              </div>
              <br></br>
              <button type="submit" className="px-6 mt-10 bg-black text-white">
                <span>Save & Continue</span>
              </button>
            </form>
          </div>
        </div>
        <div className=" border border-gray-300">Your Items</div>
      </div>
    </div>
  );
};

export default CheckoutPage;
