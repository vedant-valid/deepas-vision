"use client";
import { useEffect } from "react";

const Booking = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <section id="contact" className="relative w-full h-screen overflow-hidden text-white">
        {/* Top Half */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white flex items-center justify-start px-8 md:px-20 z-0">
          <h2 className="text-4xl absolute bottom-0 md:text-[6.6vw] font-bold text-red-800">Let’s</h2>
        </div>

        {/* Bottom Half */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-red-300/40 to-white flex items-end justify-end px-8 md:px-20 pb-10 z-0">
        <p className="text-4xl absolute top-0 md:text-[6.6vw] font-bold text-red-800">Talk.</p>
        </div>

        {/* Calendly Widget Centered */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] z-10">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/vedant-work6/session-strategy-direction-chaos-doubts"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Booking;
