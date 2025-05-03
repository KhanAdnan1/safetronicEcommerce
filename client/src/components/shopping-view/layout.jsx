// import { Outlet } from "react-router-dom";
// import ShoppingHeader from "./header";

// function ShoppingLayout() {
//   return (
//     <div className="flex flex-col bg-white overflow-hidden">
//       {/* common header */}
//       <ShoppingHeader />
//       <main className="flex flex-col w-full">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// export default ShoppingLayout;


import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

function ShoppingLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      {/* Common header */}
      <ShoppingHeader />

      {/* Main content and footer wrapper */}
      <main className="flex-1 flex flex-col w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-white py-4 bg-black">
      <div className="mb-2 space-x-6">
    <a href="https://safetronic.onrender.com/" className="hover:underline text-gray-300" target="_blank" rel="noopener noreferrer">Blog</a>
    <a href="https://safetronic.onrender.com/about" className="hover:underline text-gray-300" target="_blank" rel="noopener noreferrer">About</a>
    <a href="https://safetronic.onrender.com/contact" className="hover:underline text-gray-300" target="_blank" rel="noopener noreferrer">Contact Us</a>
    <a href="https://safetronic.onrender.com/services" className="hover:underline text-gray-300" target="_blank" rel="noopener noreferrer">Our Services</a>
  </div>
        &copy; 2024 Safetronic. All rights reserved 
      </footer>
    </div>
  );
}

export default ShoppingLayout;
