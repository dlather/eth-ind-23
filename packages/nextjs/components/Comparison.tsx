import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { comparisonTableTitle, compoarisonContent } from "./constants";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const Comparison: React.FC = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <ScrollAnimationWrapper childrens={undefined} className={undefined}>
      <motion.div className="pt-16 pb-16 flex items-center justify-center bg-base-200" variants={scrollAnimation}>
        <table className="max-w-screen-md shadow-xl bg-base-200">
          <caption className="text-xl font-bold mb-4 text-base-content">How do we compare?</caption>
          <thead>
            <tr className="bg-base-200 p-4">
              <th className="p-4  bg-base-100 border-base-300 shadow-xl text-center text-base-content">
                {comparisonTableTitle.us}
              </th>
              <th className="p-4 border-base-300 text-center text-base-content">{comparisonTableTitle.them}</th>
            </tr>
          </thead>
          <tbody>
            {compoarisonContent.map((item, index) => {
              return (
                <tr key={"comparison_item_" + index}>
                  <td
                    key={"col_1_" + index}
                    className="p-4 border-b border-dotted border-gray-300 text-center bg-base-100 shadow-xl text-base-content"
                  >
                    <div className="py-2">{item.us}</div>
                  </td>
                  <td
                    key={"col_2_" + index}
                    className="p-4 border-b border-dotted border-gray-300 text-center text-base-content"
                  >
                    <div className="py-2">{item.them}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default Comparison;
