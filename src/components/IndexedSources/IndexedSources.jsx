import React, { useEffect, useContext, useRef, useCallback } from "react";
import Typography from "@mui/material/Typography";

import NewsContext from "../../context/NewsContext";
import Countries from "./Countries";
import Publishers from "./Publishers";
import Categories from "./Categories";
import Topics from "./Topics";

const IndexedSources = () => {
  const { sourcesData } = useContext(NewsContext);
  const sourcesRef = useRef([]);
  const location = window.location;

  useEffect(() => {
    if (Object.keys(Object(sourcesData)).length && location.hash) {
      const { element: itemOfInterest } = sourcesRef.current.find(
        (ref) => ref.name === location?.hash
      );
      console.log({ itemOfInterest });
      itemOfInterest &&
        itemOfInterest.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [sourcesData]);

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener(
      "hashchange",
      function () {
        const { element } = sourcesRef.current.find(
          (ref) => ref.name === location?.hash
        );
        element?.scrollIntoView({ block: "start", behavior: "smooth" });
      },
      {
        signal: controller?.signal,
      }
    );

    return () => controller?.abort();
  }, []);

  /**
   * Stores references to HTML elements
   * @param {object} refObject - Object with name and element pair
   * @param {string} refObject.name - id of element with a leading hash
   * @param {HTMLElement} refObject.element - The DOM Element
   * @example
   * addRef({
   *    name: "#info",
   *    element: <div id="info">...</div>
   * })
   * @returns {void}
   */
  const addRef = useCallback(function (refObject) {
    // console.log("refObject:: ", refObject);
    if (refObject) {
      sourcesRef.current.push(refObject);
    }
  }, []);

  return Object.keys(Object(sourcesData)).length ? (
    <>
      <Countries data={sourcesData?.countries} addRef={addRef} />
      <Publishers data={sourcesData?.publishers} addRef={addRef} />
      <Categories data={sourcesData?.categories} addRef={addRef} />
      <Topics data={sourcesData?.topics} addRef={addRef} />
    </>
  ) : (
    <div>
      <Typography variant="h5" fontWeight={"bold"}>
        No list(s) to show yet :(
      </Typography>
      <br />
      <Typography variant="body1" sx={{ color: "text.hint" }}>
        Open Microphone and say{" "}
        <span style={{ fontStyle: "italic" }}>"show me a list of sources"</span>
      </Typography>
    </div>
  );
};

export default IndexedSources;
