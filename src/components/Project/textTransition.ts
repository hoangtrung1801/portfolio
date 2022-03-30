import { Variants } from "framer-motion";

const textTransition: Variants = {
  rest: {
    y: -40,
    opacity: 0
  },
  hover: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3
    }
  }
}

export default textTransition;