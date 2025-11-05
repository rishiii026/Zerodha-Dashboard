import React, { useState, useCallback } from "react";
import OrderActionWindow from "./OrderActionWindow";

const GeneralContext = React.createContext({
  openOrderWindow: (uid, mode) => {},
  closeBuyWindow: () => {},
  triggerRefresh: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isOrderWindowOpen, setIsOrderWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [orderMode, setOrderMode] = useState("BUY");
  const [refreshToggle, setRefreshToggle] = useState(false);

  const openOrderWindow = (uid, mode = "BUY") => {
    setSelectedStockUID(uid);
    setOrderMode(mode);
    setIsOrderWindowOpen(true);
  };

  const closeBuyWindow = () => {
    setIsOrderWindowOpen(false);
    setSelectedStockUID("");
    setOrderMode("BUY");
  };

  const triggerRefresh = useCallback(() => {
    setRefreshToggle((prev) => !prev);
  }, []);

  return (
    <GeneralContext.Provider
      value={{ openOrderWindow, closeBuyWindow, triggerRefresh, refreshToggle }}
    >
      {props.children}
      {isOrderWindowOpen && (
        <OrderActionWindow uid={selectedStockUID} mode={orderMode} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;