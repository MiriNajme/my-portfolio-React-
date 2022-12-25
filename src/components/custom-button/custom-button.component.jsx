import React from "react";

import { BrandingButton, InvertedBrandingButton } from "./custom-button.styles";

export const BUTTON_TYPE_CLASSES = {
    branding: "branding",
    inverted: "inverted"
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.branding) => (
    {
        [BUTTON_TYPE_CLASSES.branding]: BrandingButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedBrandingButton

    }[buttonType]
);

const CustomButton = ({ children, buttonType, ...otherProps }) => {
    const Button = getButton(buttonType);

    return (
        <Button {...otherProps}>
            {children}
        </Button >
    )
}
export default CustomButton;