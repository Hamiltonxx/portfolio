import { motion } from "framer-motion";

const StairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
}

const Stairs = () => {
  return (
    <div>Stairs</div>
  )
}

export default Stairs;
