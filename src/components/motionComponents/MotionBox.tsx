import {motion} from 'framer-motion';
import {BoxProps, Box} from '@chakra-ui/react';

const MotionBox = motion<Omit<BoxProps, "transition">>(Box);

export default MotionBox;