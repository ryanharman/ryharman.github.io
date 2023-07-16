import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Arrow() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isInView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isInView]);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 800"
    >
      <g
        strokeWidth="3"
        stroke=" #22c55e"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="matrix(0.1391731009600657,0.9902680687415703,-0.9902680687415703,0.1391731009600657,740.4379871126018,-94.77646788065442)"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          transition={{
            delay: 0.25,
            duration: 1,
          }}
          animate={hasLoaded ? { pathLength: 1 } : { pathLength: 0 }}
          d="M250 330.31373596191406Q399 -53.68626403808594 400 480.31373596191406Q405 619.3137359619141 550 630.3137359619141 "
          markerEnd="url(#SvgjsMarker2661)"
        ></motion.path>
      </g>
      <defs>
        <marker
          markerWidth="5"
          markerHeight="5"
          refX="2.5"
          refY="2.5"
          viewBox="0 0 5 5"
          orient="auto"
          id="SvgjsMarker2661"
        >
          <motion.polygon
            initial={{ opacity: 0 }}
            animate={hasLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              delay: 1.25,
            }}
            points="0,5 0,0 5,2.5"
            fill="#22c55e"
          ></motion.polygon>
        </marker>
      </defs>
    </svg>
  );
}
