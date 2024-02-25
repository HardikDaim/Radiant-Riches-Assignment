import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white p-4 mt-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-3 gap-x-10">
            <div>
              <h3 className="text-xl  mb-2">CATEGORIES</h3>
              <ul className="text-sm text-gray-200 ">
                <li className="py-3">Contact</li>
                <li className="py-3">Web Builder</li>
                <li className="py-3">Hosting</li>
                <li className="py-3">Robotic-Automation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl  mb-2">CONTACT</h3>
              <ul className="text-sm text-gray-200 ">
                <li className="py-3">Contact</li>
                <li className="py-3">Privacy Policy</li>
                <li className="py-3">Data Center</li>
                <li className="py-3">Terms Of Service</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-row gap-x-2 items-center">
                <div className="text-sm text-gray-200">United States </div>
                <span>
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_601_377)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.96967 0.98383C1.26256 0.690937 1.73744 0.690937 2.03033 0.98383L7.5 6.4535L12.9697 0.98383C13.2626 0.690937 13.7374 0.690937 14.0303 0.98383C14.3232 1.27672 14.3232 1.7516 14.0303 2.04449L8.03033 8.04449C7.73744 8.33738 7.26256 8.33738 6.96967 8.04449L0.96967 2.04449C0.676777 1.7516 0.676777 1.27672 0.96967 0.98383Z"
                        fill="#E1E4E6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_601_377">
                        <rect width="15" height="9" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
