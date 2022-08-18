import { ButtonType } from "lib/types";

type Props = {
    buttonType?: ButtonType;
    onButtonClick?: Function;
    children?: React.ReactNode;
};

export const Button: React.FC<Props> = ({
    buttonType,
    onButtonClick,
    children
}) => {
    return (
        <button
            aria-label="button"
            type="button"
            className={`w-full rounded-full py-3 px-2 md:inline-flex md:w-auto md:px-12 ${
                buttonType === ButtonType.PRIMARY
                    ? "bg-midnight text-white dark:bg-gray-200 dark:text-midnight"
                    : buttonType === ButtonType.SECONDARY
                    ? "bg-gray-200 text-midnight dark:bg-midnight dark:text-white"
                    : null
            } general-ring-state items-center justify-center font-medium`}
            onClick={() => onButtonClick()}
        >
            {children}
        </button>
    );
};
