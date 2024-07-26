"use client";

import { useEffect } from "react";

const AppleMap = () => {
  useEffect(() => {
    // Ensure the mapkit script is loaded
    const script = document.createElement("script");
    script.src = "https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js";
    script.async = true;
    script.onload = () => {
      if (typeof window !== "undefined" && window.mapkit) {
        // Initialize the map
        const MarkerAnnotation = window.mapkit.MarkerAnnotation;
        let clickAnnotation: any;

        const sfo = new window.mapkit.Coordinate(37.616934, -122.38379);
        const work = new window.mapkit.Coordinate(37.3349, -122.0090201);

        window.mapkit.init({
          authorizationCallback: function (done: any) {
            fetch("/services/jwt")
              .then((response) => response.text())
              .then((token) => done(token));
          },
        });

        const map = new window.mapkit.Map("map");

        // Setting properties on creation
        const sfoAnnotation = new MarkerAnnotation(sfo, {
          color: "#f4a56d",
          title: "SFO",
          glyphText: "✈️",
        });

        // Setting properties after creation
        const workAnnotation = new MarkerAnnotation(work);
        workAnnotation.color = "#969696";
        workAnnotation.title = "Work";
        workAnnotation.subtitle = "Apple Park";
        workAnnotation.selected = true;
        workAnnotation.glyphText = "";

        // Add and show both annotations on the map
        map.showItems([sfoAnnotation, workAnnotation]);

        // Drop an annotation where a Shift-click is detected
        map.element.addEventListener("click", (event: any) => {
          if (!event.shiftKey) {
            return;
          }

          if (clickAnnotation) {
            map.removeAnnotation(clickAnnotation);
          }

          const coordinate = map.convertPointOnPageToCoordinate(
            new DOMPoint(event.pageX, event.pageY)
          );
          clickAnnotation = new MarkerAnnotation(coordinate, {
            title: "Click!",
            color: "#c969e0",
          });
          map.addAnnotation(clickAnnotation);
        });
      }
    };

    document.head.appendChild(script);
  }, []);

  return <div id="map" style={{ height: "600px" }}></div>;
};

export default AppleMap;
