import React from "react";

export default function Deals() {
  return (
    <>
      <div className="mx-auto max-w-6xl">
        <div className="text-2xl md:text-4xl  font-normal md:font-light mt-20 mb-10">
          Related deals you might like for
        </div>
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-4">
          {/* Card 1 */}
          <div className="border p-4 rounded-md md:mb-20">
            <img
              src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
              alt="Product"
              className="w-full p-14  object-cover mb-4 rounded-md"
            />
            <div className="flex flex-row gap-x-2 mb-2">
              <div className="text-blue-800 inline-block bg-gray-200 rounded-md px-2 py-1 text-sm">
                20% off
              </div>
              <div className="text-blue-800 inline-block bg-gray-200 rounded-md px-2 py-1 text-sm">
                Limited Time{" "}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 text-center">Webbuilder 1</h3>
            <p className="text-gray-600 mb-2 text-center">
              Computer Modern clasic with wix support
            </p>
            <p className="text-gray-800 text-xl mb-4">
              $39.96 <sub className="text-gray-500 text-sm">$49.96</sub>{" "}
              <sub className="text-sm text-red-500">(20% Off)</sub>
            </p>
            <button className="bg-blue-500 text-white rounded-lg py-3 w-full">
              View Deal
            </button>
          </div>
          {/* Card 2 */}
          <div className="border p-4 rounded-md md:mb-20">
            <img
              src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
              alt="Product"
              className="w-full p-14 object-cover mb-4 rounded-md"
            />
            <div className="flex flex-row gap-x-2 mb-2">
              <div className="text-blue-800 inline-block bg-gray-200 rounded-md px-2 py-1 text-sm">
                20% off
              </div>
              <div className="text-blue-800 inline-block bg-gray-200 rounded-md px-2 py-1 text-sm">
                Limited Time{" "}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 text-center">Webbuilder 1</h3>
            <p className="text-gray-600 mb-2 text-center">
              Computer Modern clasic with wix support
            </p>
            <p className="text-gray-800 text-xl mb-4">
              $39.96 <sub className="text-gray-500 text-sm">$49.96</sub>{" "}
              <sub className="text-sm text-red-500">(20% Off)</sub>
            </p>
            <button className="bg-blue-500 text-white rounded-lg py-3 w-full">
              View Deal
            </button>
          </div>
          {/* Card 3 */}
          <div className="border p-4 rounded-md  mb-20 ">
            <img
              src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
              alt="Product"
              className="w-full p-14 object-cover mb-4 rounded-md"
            />
            <div className="flex flex-row gap-x-2 mb-2">
              <div className="text-blue-800 inline-block bg-gray-200 rounded-md px-2 py-1 text-sm">
                20% off
              </div>
              <div className="text-blue-800 inline-block bg-gray-200 rounded-md px-2 py-1 text-sm">
                Limited Time{" "}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 text-center">Webbuilder 1</h3>
            <p className="text-gray-600 mb-2 text-center">
              Computer Modern clasic with wix support
            </p>
            <p className="text-gray-800 text-xl mb-4">
              $39.96 <sub className="text-gray-500 text-sm">$49.96</sub>{" "}
              <sub className="text-sm text-red-500">(20% Off)</sub>
            </p>
            <button className="bg-blue-500 text-white rounded-lg py-3 w-full">
              View Deal
            </button>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="text-md  font-normal md:text-5xl  md:font-light ">
            Sign up and get exclusive special deals
          </div>
          <div className="flex flex-row gap-x-2 ml-auto">
            <button className="bg-blue-500 text-white rounded-lg px-4  md:px-8 text-md md:text-xl">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
