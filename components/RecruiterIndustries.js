"use client";

import React, { useEffect, useRef, useState } from "react";

const RecruiterIndustries = (props) => {
  const { industries = [] } = props;

  const rootRef = useRef(null);
  const industriesWrapperRef = useRef(null);
  const industriesRef = useRef([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [rootHeight, setRootHeight] = useState(66);

  useEffect(() => {
    const calculateVisibleNodes = () => {
      if (rootRef.current && industriesWrapperRef.current) {
        const rootRect = rootRef.current.getBoundingClientRect();
        const industryNodes = industriesRef.current;

        let count = 0;

        industryNodes.forEach((node) => {
          if (!node) return; // Skip if the node is null or undefined
          const nodeRect = node.getBoundingClientRect();

          // Check if the node is within the bounds of rootRef
          if (
            nodeRect.left >= rootRect.left &&
            nodeRect.right <= rootRect.right &&
            nodeRect.top >= rootRect.top &&
            nodeRect.bottom <= rootRect.bottom
          ) {
            count++;
          }
        });

        setVisibleCount(count);
      }
    };

    // Initial calculation
    calculateVisibleNodes();

    // Recalculate on window resize
    window.addEventListener("resize", calculateVisibleNodes);
    return () => {
      window.removeEventListener("resize", calculateVisibleNodes);
    };
  }, [industries, rootHeight]);

  return (
    <>
      <div style={{ height: rootHeight }} ref={rootRef} className="flex overflow-hidden">
        <div ref={industriesWrapperRef} className="flex items-center h-fit flex-wrap gap-3">
          {industries?.map((item, index) => (
            <div
              ref={(industryRef) => (industriesRef.current[index] = industryRef)}
              key={index}
              className="flex items-center bg-tertiary rounded-full px-4 py-1 font-medium text-xs text-primary"
            >
              {item?.IndustrySpecialisation?.name}
            </div>
          ))}
        </div>
      </div>
      {industries?.length - visibleCount > 0 && (
        <div
          onClick={() => {
            setRootHeight("auto");
          }}
          className="flex items-center bg-tertiary rounded-full px-4 py-1 font-medium text-xs text-primary w-max"
        >
          +{industries?.length - visibleCount} More
        </div>
      )}
    </>
  );
};

export default RecruiterIndustries;
