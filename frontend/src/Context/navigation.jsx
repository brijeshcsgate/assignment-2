import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const [path, setPath] = useState(window.location.pathname);

  // const [productId, setProductId] = useState();
  // const [productData, setProductData] = useState([]);

  const [productPageLocation, setProductPageLocation] = useState("");

  const [blogPageLocation, setBlogPageLocation] = useState();

  const [blogId, setBlogId] = useState();

  const [cartValue, setCartValue] = useState(1);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider
      value={{
        navigate,
        currentPath,
        productPageLocation,
        setProductPageLocation,
        blogPageLocation,
        setBlogPageLocation,
        blogId,
        setBlogId,
        cartValue,
        setCartValue,
        path,
        setPath,
      }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
