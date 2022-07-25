import NextNProgress from "nextjs-progressbar";
import { theme } from "tailwind.config";

const CustomNProgress = () => {
    return <NextNProgress color={theme.extend.colors.teal[500]} />;
};

export default CustomNProgress;
