import React from "react";
import { Button } from "./common/Button";
import { Switch } from "./common/Switch";

const staysList = ["Kitchen", "Living room", "Bedrooms", "Bath", "Garden"];

const RightContent: React.FC = () => {
  return (
    <div className="text-white p-6 bg-inherit h-full rounded-xl shadow-lg">
      <h1 className="text-lg font-bold mb-4">General commands</h1>
      <hr className="h-px my-4 bg-gray-600 border-0" />

      {/* THERMOSTAT */}
      <div className="mb-6">
        <div className="font-semibold text-sm mb-2 text-gray-300">
          THERMOSTAT
        </div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="border border-gray-700 rounded-lg p-4 bg-[#1F2D45] text-center min-w-[80px]">
            <div className="text-2xl font-semibold">25 ºC</div>
            <div className="text-sm text-gray-400">19 ºC</div>
          </div>
          <div className="flex space-x-2">
            <Button size="sm" variant="ghost" className="border">
              +
            </Button>
            <Button size="sm" variant="ghost" className="border">
              -
            </Button>
          </div>
          <div></div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <Switch defaultChecked />
          <label className="text-sm text-gray-400">Automatic regulation</label>
        </div>
      </div>

      {/* ENERGY */}
      <div className="mb-6">
        <div className="font-semibold text-sm mb-2 text-gray-300">ENERGY</div>
        <div className="text-sm text-gray-400 mb-3">
          CURRENT CONSUMPTION - 12.4 kWh
        </div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm text-gray-200">Solar panels</label>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-200">Power reserve</label>
          <Switch />
        </div>
      </div>

      {/* STAYS */}
      <div>
        <div className="font-semibold text-sm mb-2 text-gray-300">STAYS</div>
        <div className="text-sm text-gray-300">
          {staysList.map((stay, index) => (
            <div key={stay}>
              <div className="flex justify-between items-center py-2 cursor-pointer">
                {stay}
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {index !== staysList.length - 1 && (
                <hr className="h-px bg-gray-700 border-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightContent;
