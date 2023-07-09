
import { Link } from "react-router-dom";
import { FaClock, FaEnvelope, FaHome, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <div>
          <h2 className="uppercase text-2xl font-bold text-center text-[#9336B4] my-14">
            Share Your Thought & Suggections With Us
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-md ">Your Name</span>
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Enter Your Name..."
                className="input input-bordered border-[#9336B4] w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-md ">Your Email</span>
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Enter Your Email..."
                className="input input-bordered border-[#9336B4] w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered border-[#9336B4]  h-24"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <button className="btn bg-[#9336B4] text-white border-none w-full my-5">
              Send Message
            </button>
          </div>
          <div className="space-y-8 p-10">
            <h4 className="text-xl text-[#9336B4] font-bold">
              Our Contact Information
            </h4>
            <Link className="link link-hover flex items-center gap-2">
              <FaHome></FaHome> 321/A, New York, USA.{" "}
            </Link>
            <Link className="link link-hover flex items-center gap-2">
              <FaPhone></FaPhone> +0125632552{" "}
            </Link>
            <Link className="link link-hover flex items-center gap-2">
              <FaEnvelope></FaEnvelope>contact@ourmail.com
            </Link>
            <Link className="link link-hover flex items-center gap-2">
              <FaClock></FaClock>10:00AM - 5:00PM
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
