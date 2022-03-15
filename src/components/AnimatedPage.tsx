import React from 'react';
import {motion} from 'framer-motion';

interface IAnimatedPageProps {

}

const AnimatedPage: React.FunctionComponent<IAnimatedPageProps> = () => {

  return (
    <motion.div
      exit={{opacity: 0}}
      transition={{duration: 1}}
    >

    </motion.div>
  )
}

export default AnimatedPage;