import { RefObject, useState, useEffect } from 'react';

  export default function useScroll(ref: RefObject<HTMLElement>): boolean {

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
   
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return isScrolled;
};


