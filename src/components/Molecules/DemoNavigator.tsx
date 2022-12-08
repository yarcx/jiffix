import React from "react";
import { Link } from "react-router-dom";

const DemoNavigator = () => {
  return (
    <div className="flex mx-auto justify-center gap-x-5 my-4">
      <Link to="/login">
        <button className="bg-orange-400 hover:bg-orange-700 p-4 rounded-lg text-white">
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button className="bg-orange-500 hover:bg-orange-700 p-4 rounded-lg text-white">
          SIgnup
        </button>
      </Link>
    </div>
  );
};

export default DemoNavigator;
