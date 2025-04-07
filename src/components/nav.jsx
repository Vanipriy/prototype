import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, Bell, ExternalLink, Menu, X, ChevronDown } from 'lucide-react';
import { FaStar, FaFire, FaGem } from 'react-icons/fa';
import { FiExternalLink } from "react-icons/fi";

const HeaderComponent = () => {
  const [showDropdown, setShowDropdown] = useState(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const navItems = [
    {
      name: 'MEN',
      submenu: [
        {
          title: "MEN'S CLOTHES",
          items: ['Shop All Men’s', 'Jeans', 'Shirts & T-Shirts', 'Pants & Chinos', 'Jeans Jackets & Outwear', 'Sweaters & Sweatshirts', 'Shorts', 'Underwear & Socks', 'Jackets', 'Accessories', 'Big and Tall', 'Sale']
        },
        {
          title: "MEN'S JEANS BY STYLE",
          items: ['511 Slim Jeans', '501® Original Jeans', '505® Regular Straight Jeans', '541 Athletic Taper Jeans', '568 Stay Loose Jeans']
        },
        {
          title: "",
          items: ['SECONDHAND', 'BLOG: OFF THE CUFF']
        }
      ]
    },
    {
      name: 'WOMEN',
      submenu: []
    },
    { name: 'KIDS', submenu: [] },
    { name: 'SALE', submenu: [] },
    { name: '501® 150TH', isSale: true, submenu: [] }

  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className="w-screen bg-white top-0 z-50">
      <div className="hidden md:flex w-full h-10 bg-white border-t border-b border-gray-200">
        <div className="flex items-center justify-between px-4 h-full max-w-screen-2xl mx-auto text-xs text-gray-600 w-full">
          <div className="flex gap-8">
            <span className="hover:underline cursor-pointer underline">Track Order</span>
            <span className="hover:underline cursor-pointer underline">Find A Store</span>
          </div>
          <div className="font-bold flex items-center justify-center">
            <span>&lt;</span>
            <span className="mx-38"></span>
            <span>&gt;</span>
          </div>

          <div className="flex gap-8">
            <span className="hover:underline cursor-pointer">Red Tab™ Program</span>
            <span className="hover:underline cursor-pointer">Log In/Sign Up</span>
            <span>Australia</span>
          </div>
        </div>
      </div>

      <nav className="w-full h-25 bg-white">
        <div className="flex items-center justify-between px-4 md:px-10 h-full max-w-screen-2xl mx-auto">
          <button
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center md:gap-6">
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z_EBfSZdLdeJvvEF/levis-lo.png"
              alt="Levis Logo"
              className="w-[88px] h-10 mx-auto md:mx-0"
            />

            <div className="hidden md:flex items-center gap-2 text-sm uppercase">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    className={`${item.isSale ? 'text-red-600' : ''} hover:text-gray-600 hover:underline hover:decoration-red-600 hover:underline-offset-4 transition`}
                    onMouseEnter={() => setShowDropdown(item.name)}
                    onMouseLeave={() => setShowDropdown(null)}
                  >
                    {item.name}
                  </button>

                  {showDropdown === item.name && item.name === 'MEN' && (
                    <div className="absolute left-0 top-full bg-white border shadow-xl w-[1000px] text-sm z-50">

                      <div className="flex gap-16 items-center px-6 py-4 border-b">
                        <div className="flex items-center gap-2 cursor-pointer hover:underline">
                          <FaStar className="text-gray-500" />
                          <span>Men’s New Arrivals</span>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer hover:underline">
                          <FaFire className="text-gray-500" />
                          <span>Men’s Bestsellers</span>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer hover:underline">
                          <FaGem className="text-gray-500" />
                          <span>Collections & Collabs</span>
                        </div>
                      </div>
                      <div className="flex gap-12 px-6 py-6">
                        {item.submenu.map((section, i) => (
                          <div key={i} className="min-w-[180px]">
                            <h3 className="font-bold mb-2">{section.title}</h3>
                            <ul className="space-y-1">
                              {section.items.map((subItem, j) => {
                                const isExternal = subItem === "SECONDHAND" || subItem === "BLOG: OFF THE CUFF";

                                return (
                                  <li key={j} className="hover:underline cursor-pointer flex items-center">
                                    <span className={isExternal ? "font-bold text-black" : ""}>
                                      {subItem}
                                    </span>
                                    {isExternal && (
                                      <FiExternalLink
                                        className="inline text-black w-4 h-4 ml-1"
                                        title="Opens in a new tab"
                                      />
                                    )}
                                  </li>
                                );
                              })}
                            </ul>

                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden md:flex relative w-[200px]">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full h-10 pl-10 text-sm border-b border-gray-200 focus:outline-none focus:border-black"
              />
            </div>
            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 text-gray-600 md:hidden" />
              <Bell className="w-5 h-5 text-gray-600 hidden md:block" />
              <Heart className="w-5 h-5 text-gray-600 hidden md:block" />
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-black" />
                <div className="absolute -top-2 -right-2 bg-red-600 rounded-full w-4 h-4 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-16 overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full h-12 pl-10 pr-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.name} className="border-b">
                  <button
                    className={`w-full py-4 flex justify-between items-center ${item.isSale ? 'text-red-600' : ''}`}
                    onClick={() => setMobileSubmenu(mobileSubmenu === item.name ? null : item.name)}
                  >
                    <span>{item.name}</span>
                    {item.submenu.length > 0 && (
                      <ChevronDown className={`transition-transform ${mobileSubmenu === item.name ? 'rotate-180' : ''}`} />
                    )}
                  </button>

                  {mobileSubmenu === item.name && item.submenu.length > 0 && (
                    <div className="pl-4 pb-3 space-y-3">
                      {item.submenu.map((section, i) => (
                        <div key={i}>
                          <h3 className="font-bold mb-2 text-sm">{section.title}</h3>
                          <ul className="space-y-2 pl-2">
                            {section.items.map((subItem, j) => (
                              <li key={j} className="py-1 text-sm hover:underline cursor-pointer">
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-4">
              <div className="py-2 font-medium">Track Order</div>
              <div className="py-2">Find A Store</div>
              <div className="py-2">Log In / Sign Up</div>
              <div className="py-2">Red Tab™ Program</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;