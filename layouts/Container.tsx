import Footer from "components/Footer";
import NavMenu from "components/NavMenu";
import React from "react";

interface ContainerProps {
    children?: any;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <>
            <NavMenu />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Container;
