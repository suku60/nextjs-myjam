import { useState, useEffect } from "react";
import { useWindowSize } from "./useWindowSize";

export const useIsMobile = (width: number = 1240) => {

    const windowSize = useWindowSize();
  
    return  windowSize.width && width > windowSize.width ? true : false;
  };