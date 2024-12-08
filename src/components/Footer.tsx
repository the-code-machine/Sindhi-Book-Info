"use client";
import React, { useState } from "react";
import Link from "next/link";

function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (language: string) => {
    // console.log(`Selected language: ${language}`);
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="flex mt-20 w-full bg-primary ">
      <div className="flex flex-col flex-1 bg-primary">
        <div className="bg-white mt-7 ml-5 w-1/4 rounded-2xl px-2 py-3">
          <img src="/logo/navLogo.svg" alt="Logo" />
        </div>

        <div className="ml-5 mt-7">
          <p className="text-paragraphLight ">
            Sindhi Books Info is dedicated to preserving and celebrating <br />{" "}
            the vibrant literary heritage of Sindhi culture.
          </p>

          <p className="mt-7 text-white text-sm">Language</p>
          <div className="relative inline-block ">
            {/* Button */}
            <button
              onClick={toggleDropdown}
              className="mt-1 px-4 py-1 bg-white text-gray-500 rounded-lg flex items-center justify-between w-full"
            >
              <span className="-ml-1">{selectedLanguage}</span>
              <span className="ml-6 text-sm">▼</span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute mt-2 w-full bg-white border rounded-md shadow-lg">
                <ul>
                  <li
                    className="px-4 py-1 text-gray-500 hover:bg-gray-100 cursor-pointer"
                    onClick={() => selectLanguage("English")}
                  >
                    English
                  </li>

                  <li
                    className="px-4 py-1 text-gray-500 hover:bg-gray-100 cursor-pointer"
                    onClick={() => selectLanguage("Hindi")}
                  >
                    Hindi
                  </li>
                </ul>
              </div>
            )}
          </div>

          <p className="mt-7 text-paragraphLight underline underline-offset-4 decoration-1">
            Terms And Conditions
          </p>
          <p className="text-white mb-1">
            © 2024 Sindhi Books Info. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Div  */}

      <div className="flex w-1/2">
        <div className="flex justify-between w-[30%] mt-16 ">
          <div className="">
            <Link href="/home">
              <p className="text-paragraphLight font-normal hover:underline">
                Home
              </p>
            </Link>
            <Link href="/gallery">
              <p className="text-paragraphLight font-normal hover:underline">
                Gallery
              </p>
            </Link>
            <Link href="/libraries">
              <p className="text-paragraphLight font-normal hover:underline">
                Libraries
              </p>
            </Link>
            <Link href="/books">
              <p className="text-paragraphLight font-normal hover:underline">
                Books
              </p>
            </Link>
          </div>

          <div className="">
            <Link href="/about">
              <p className="text-paragraphLight font-normal hover:underline">
                About
              </p>
            </Link>

            <Link href="/faq">
              <p className="text-paragraphLight font-normal hover:underline">
                FAQ
              </p>
            </Link>

            <Link href="/contact">
              <p className="text-paragraphLight font-normal hover:underline">
                Contact Us
              </p>
            </Link>
          </div>
        </div>

        <div className=" w-[70%] mt-16 flex flex-col justify-between">
          <div className="">
            <p className="text-paragraphLight text-sm pl-80">
              Follow us on Social Media.
            </p>

            {/* Add Icons for social media links */}
          </div>
          <img src="" alt="" />
          <div>
            <div className="flex items-center justify-between mb-1">
              <div>
                <Link href="/privacy-policy">
                  <p className="text-paragraphLight text-sm font-normal underline pl-80 ">
                    Privacy Ploicy
                  </p>
                </Link>
              </div>

              <div>
                <Link href="/help">
                  <p className="mr-7 font-normal text-sm text-paragraphLight  underline">Help</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
