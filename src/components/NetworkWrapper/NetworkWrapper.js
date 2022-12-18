import React, { useEffect } from "react";
import { toast } from "react-toastify";

 function NetWorkWrapper({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window &&
        window.addEventListener(
          "your offline, please check your internet connection",
          function (e) {
            toast.error("You are offline", {
              toastId: "offline-id",
            });
          }
        );

      window &&
        window.addEventListener("online", function (e) {
          toast.success("You are back online", {
            toastId: "online-id",
          });
        });
    }
    return () => {
      if (typeof window !== "undefined") {
        window &&
          window.removeEventListener(
            "your offline, please check your internet connection",
            function (e) {
              toast.error("You are offline", {
                toastId: "offline-id",
              });
            }
          );

        window &&
          window.removeEventListener("online", function (e) {
            toast.success("You are back online", {
              toastId: "online-id",
            });
          });
      }
    };
  }, []);
  return <div>{children}</div>;
}

export default NetWorkWrapper
