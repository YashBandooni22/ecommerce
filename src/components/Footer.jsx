import React from "react";

const Footer = ({ theme = "green" }) => {
  // Define theme-specific colors
  const isGreen = theme === "green";
  const bgColor = isGreen ? "bg-green-100" : "bg-black";
  const textColor = isGreen ? "text-green-900" : "text-cyan-300";
  const borderColor = isGreen ? "border-green-300" : "border-cyan-500";
  const hoverColor = isGreen ? "hover:text-green-700" : "hover:text-cyan-200";

  return (
    <footer className={`${bgColor} py-10 w-full mt-10`}>
      {/* Main Content */}
      <div className="w-full px-6 lg:px-12">
        {/* Animated Title */}
        <div
          className={`text-center text-3xl font-bold ${textColor} mb-8 animate-bounce`}
        >
          Let’s Build Something Extraordinary!
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${textColor}`}>About Us</h3>
            <p className="text-sm">
              We bring you the best products with style and quality. Make every
              shopping experience unique and unforgettable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${textColor}`}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/shop" className={`transition ${hoverColor}`}>
                  Shop
                </a>
              </li>
              <li>
                <a href="/blog" className={`transition ${hoverColor}`}>
                  Blog
                </a>
              </li>
              <li>
                <a href="/about" className={`transition ${hoverColor}`}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className={`transition ${hoverColor}`}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${textColor}`}>Newsletter</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-2 rounded-md border ${borderColor} focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              <button
                type="submit"
                className={`w-full mt-3 px-4 py-2 rounded-md ${bgColor} border ${borderColor} ${textColor} hover:bg-opacity-75 transition`}
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${textColor}`}>
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className={`text-2xl transition ${hoverColor}`}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                className={`text-2xl transition ${hoverColor}`}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                className={`text-2xl transition ${hoverColor}`}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                className={`text-2xl transition ${hoverColor}`}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-8 pt-6 w-full px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className={`text-sm ${textColor}`}>
            &copy; {new Date().getFullYear()} Your Brand. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="/privacy" className={`text-sm ${hoverColor}`}>
              Privacy Policy
            </a>
            <a href="/terms" className={`text-sm ${hoverColor}`}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
