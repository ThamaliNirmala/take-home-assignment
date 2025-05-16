import React from "react";
import { Search, Settings, Lock, Grid } from "lucide-react";
import SidebarComponent from "./components/SidebarContent";
import MainContent from "./components/MainContent";
import RightContent from "./components/RightContent";
import { Button } from "./components/common/Button";

export default function SmartHomeDashboard() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#ff6f7d_0%,_#ff6f7d_70%,_#b5ecff_70%)] py-2 px-4 sm:px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto rounded-2xl overflow-hidden shadow-lg">
        {/* Layout wrapper */}
        <div className="flex flex-col">
          {/* Navbar */}
          <div className="flex items-center justify-between bg-[#0f172a] text-white p-4 border-b border-gray-700">
            <div className="flex items-center gap-4 w-full max-w-sm">
              <div className="text-xl font-bold whitespace-nowrap">
                <span className="text-cyan-400">G</span>S
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-[#1e293b] text-white px-3 py-1 pr-8 rounded-md w-full"
                />
                <Search className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
              <img
                src="https://randomuser.me/api/portraits/women/75.jpg"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main area: Sidebar + Content */}
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar vertical */}
            <div className="flex flex-row md:flex-col justify-start items-center w-full sm:w-16 md:w-[60px] bg-[#1e293b] p-2 py-4 gap-6 border-r border-gray-700">
              <div className="bg-cyan-400 rounded p-1 cursor-pointer">
                <Grid className="text-black w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <Lock className="text-white w-5 sm:w-6 h-5 sm:h-6 cursor-pointer" />
              <Settings className="text-white w-5 sm:w-6 h-5 sm:h-6 cursor-pointer" />
            </div>

            {/* Content area */}
            <div className="flex-1 flex flex-col lg:flex-row">
              {/* Sidebar Content */}
              <div className="w-full lg:w-3/4 bg-[#1e293b] p-4 border-r border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center  gap-4">
                  <h1 className="text-xl text-white">Domotic Assistant</h1>
                  <Button className="h-8 pt-1 bg-cyan-400  rounded-sm w-max">
                    <span className="text-black text-sm"> + Add Device</span>
                  </Button>
                </div>

                <div className="flex flex-col xl:flex-row gap-4 mt-6">
                  <div className="w-full xl:w-1/3 bg-gray-700 rounded-md">
                    <SidebarComponent />
                  </div>

                  <div className="w-full xl:w-2/3 text-center">
                    <div className="border p-6 border-gray-700">
                      <h1 className="uppercase text-white pb-4 text-left">
                        House Exterior Devices
                      </h1>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                        <MainContent />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div className="w-full lg:w-1/4 bg-[#1e293b] p-4 text-white">
                <RightContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
