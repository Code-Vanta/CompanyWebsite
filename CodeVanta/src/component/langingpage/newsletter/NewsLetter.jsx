import React, { useState, useEffect } from "react";

const NewsLetter = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const popupTimeout = setTimeout(() => {
      setIsPopupOpen(true);
    }, 60000);

    return () => {
      clearTimeout(popupTimeout);
    };
  }, []);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              Close
            </button>
            <iframe
              title="Popup Form"
              width="540"
              height="305"
              src="https://d66ed512.sibforms.com/serve/MUIFAHPpt9Jutjfr_5anpboNtDELSwQU2vr274aWVuOmpqY_52ipok5pFBVU9jBQYhrXg9wU-HCgpAguYwiwqzvUMMN3rB7OBPTkPsXDKEl-LTA_CZFXeMqQepWbw04LW1xdQX7j3ea6BdRL4tArcbUK7Gmsr8EUNvpHLLAerqETO1x7bMCzqnUPQcb1eLH3qJoUOr7VnFw_wZIi"
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "100%",
              }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsLetter;
