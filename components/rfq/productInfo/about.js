import { useStore } from "@/useStore/details";
import React from "react";
import { useState } from "react";

const About = () => {
  const [
    updateAboutProduct,
    updateIncreaseProgress,
    updateDecreaseProgress,
    aboutProduct,
    scoreProduct,
    updateProgress
  ] = useStore((store) => [
    store.updateAboutProduct,
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,
    store.aboutProduct,
    store.scoreProduct,
    store.updateProgress
  ]);
  const [i, setI] = useState(1);

  const [about, setAbout] = useState(aboutProduct);

  return (
    <div className="flex flex-col space-y-1">
      <label className="leading-7 text-base font-semibold text-gray-800">
        About the Product<span className="text-red-600 text-lg">*</span>
      </label>
      <textarea
        type="text"
        value={about}
        id="aboutProduct"
        onChange={(e) => {
          setAbout(e.target.value);
        }}
        rows={5}
        onBlur={() => {
          updateAboutProduct(about);
          about?.length > 0
            ? (scoreProduct[2].score = true)
            : (scoreProduct[2].score = false);
          if (scoreProduct[2].score && i == 1) {
            updateIncreaseProgress(42);
            setI(2);
          }
          if (!scoreProduct[2].score && i==2 ) {
            updateDecreaseProgress(42);
            setI(1);
          }
        }}
        name="aboutProduct"
        placeholder="Please indicate more about product details"
        className="w-full md:w-3/5 bg-white placeholder:leading-6  rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-800 py-2 px-5 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
};

export default About;
