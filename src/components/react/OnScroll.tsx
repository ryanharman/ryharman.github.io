import { motion, Variants } from 'framer-motion';

interface OnScrollProps {
  children: React.ReactNode;
  variants?: Variants;
}

const defaultVariants: Variants = {
  offscreen: {
    opacity: 0,
    transform: "translateY(10px)",
    transition: {
      delay: 0.1,
      duration: 1,
    },
  },
  onscreen: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: {
      delay: 0.1,
      duration: 1,
    },
  },
};

export default function OnScroll({ children, variants }: OnScrollProps) {
  const variantsInUse = variants || defaultVariants;
  return (
    <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
      <motion.div variants={variantsInUse}>{children}</motion.div>
    </motion.div>
  );
}
