import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { useState, useEffect } from "react";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);
  if (!isDesktop) {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center border border-gray-200">
        <h1 className="text-2xl font-bold mb-4 text-black">
          This website can only be used on a desktop device.
        </h1>
        <p className="text-base text-gray-700">
          Please access this site on a larger screen.
        </p>
      </div>
    </div>
    );
  }
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
