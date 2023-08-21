"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Donate from "./donate";

const Navbar = () => {
  const [donate, setDonate] = useState(false);
  return (
    <nav>
      <div className="flex gap-6 relative">
        <Image
          src="/faveicon.png"
          width={35}
          height={35}
          alt="datalytics logo"
        />
        <h2 className="text-black font-bold text-2xl ">Datalytics</h2>
      </div>
      <div>
        <button
          onClick={() => setDonate(true)}
          className="px-4 py-1 bg-orange-500 hover:bg-orange-700 rounded-lg text-white font-bold duration-500"
        >
          donate
        </button>
      </div>
      {donate && (
        <div className="donate">
          <Donate setDonate={setDonate} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
