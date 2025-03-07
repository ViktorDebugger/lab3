import { useEffect } from "react";

export const useBackgroundColor = (color) => {
  useEffect(() => {
    const colors = ["bg-pink-500", "bg-yellow-500", "bg-green-500"];
    document.body.classList.remove(...colors);
    document.body.classList.add(color);

    return () => {
        document.body.classList.remove(color);
    };
  }, [color]);
};