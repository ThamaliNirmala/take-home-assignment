import React from "react";
import {
  Home,
  Lightbulb,
  Camera,
  Router as RouterIcon,
  Refrigerator,
  Snowflake,
} from "lucide-react";
import { Button } from "./common/Button";

const SidebarComponent: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="uppercase text-white">Devices</h1>

      {/* Selected Button */}
      <Button
        className="flex items-center justify-start w-full text-black bg-cyan-400  border-white rounded-md"
        style={{ color: "black" }}
      >
        <Home className="mr-2 h-4 w-4" />
        House exterior
      </Button>

      <Button
        variant="ghost"
        className="flex items-center justify-start w-full text-white border border-white rounded-md"
      >
        <Lightbulb className="mr-2 h-4 w-4" />
        Lights
      </Button>

      <Button
        variant="ghost"
        className="flex items-center justify-start w-full text-white border border-white rounded-md"
      >
        <Camera className="mr-2 h-4 w-4" />
        Cams
      </Button>

      <Button
        variant="ghost"
        className="flex items-center justify-start w-full text-white border border-white rounded-md"
      >
        <RouterIcon className="mr-2 h-4 w-4" />
        Router
      </Button>

      <Button
        variant="ghost"
        className="flex items-center justify-start w-full text-white border border-white rounded-md"
      >
        <Refrigerator className="mr-2 h-4 w-4" />
        Home appliances
      </Button>

      <Button
        variant="ghost"
        className="flex items-center justify-start w-full text-white border border-white rounded-md"
      >
        <Snowflake className="mr-2 h-4 w-4" />
        Air conditioning
      </Button>
    </div>
  );
};

export default SidebarComponent;
