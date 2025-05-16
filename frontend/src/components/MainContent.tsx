import React from "react";
import { Camera, DoorOpen, Sun, Lightbulb, ShieldOff } from "lucide-react";
import { Card } from "./common/Card";
import { CardContent } from "./common/CardContent";

const MainContent: React.FC = () => {
  return (
    <>
      <Card className="bg-[#1e293b] border-cyan-400  text-white">
        <CardContent className="p-4 flex flex-col items-center text-center">
          <Camera className="w-6 h-6 mb-2" />
          Entrance camera
          <br />
          <span className="text-green-400">Active</span>
        </CardContent>
      </Card>

      <Card className="bg-[#1e293b] text-white">
        <CardContent className="p-4 flex flex-col items-center text-center">
          <Camera className="w-6 h-6 mb-2" />
          Stairs camera
          <br />
          <span className="text-gray-400">Deactivated at 22:47</span>
        </CardContent>
      </Card>

      <Card className="bg-[#1e293b] text-white">
        <CardContent className="p-4 flex flex-col items-center text-center">
          <ShieldOff className="w-6 h-6 mb-2" />
          Canopies
          <br />
          <span className="text-gray-400">Deactivated at 21:00</span>
        </CardContent>
      </Card>

      <Card className="bg-[#1e293b] border-cyan-400 text-white">
        <CardContent className="p-4 flex flex-col items-center text-center">
          <DoorOpen className="w-6 h-6 mb-2" />
          Garage door
          <br />
          <span className="text-gray-400">Deactivated at 23:51</span>
        </CardContent>
      </Card>

      <Card className="bg-[#1e293b] text-white">
        <CardContent className="p-4 flex flex-col items-center text-center">
          <Sun className="w-6 h-6 mb-2" />
          Parasols
          <br />
          <span className="text-gray-400">Deactivated at 21:00</span>
        </CardContent>
      </Card>

      <Card className="bg-[#1e293b] border-cyan-400 text-white">
        <CardContent className="p-4 flex flex-col items-center text-center">
          <Lightbulb className="w-6 h-6 mb-2" />
          Garden lights
          <br />
          <span className="text-green-400">Active</span>
        </CardContent>
      </Card>
    </>
  );
};

export default MainContent;
