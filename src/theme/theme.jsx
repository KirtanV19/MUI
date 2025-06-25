import { createTheme } from "@mui/material/styles";
import { COLORS } from "../utils/colors";

const theme = createTheme({
    palette: {
        primary: COLORS.PRIMARY,
        secondary: COLORS.SECONDARY,
        error: COLORS.ERROR,
        warning: COLORS.WARNING,
        neutral: COLORS.NEUTRAL,
        accent: COLORS.ACCENT,
    },
    direction: "ltr",
    breakpoints: {
        values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    },
    zIndex: {
        drawer: 1300,   // raise drawer
        appBar: 1400,   // raise app bar above it
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: "contained",
                size: "medium",
                disableElevation: true,
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 600,
                    textTransform: "none",
                    padding: "8px 4px",
                    fontSize: "0.9rem",
                    boxShadow: "none",
                },
                text: {
                    color: COLORS.PRIMARY.main,
                    fontWeight: 400,
                    fontSize: "0.875rem",
                },
                outlined: {
                    border: `1px solid ${COLORS.NEUTRAL.main}`,
                    backgroundColor: "transparent",
                    "&:hover": {
                        backgroundColor: COLORS.NEUTRAL.light,
                    },
                },
                sizeSmall: {
                    fontSize: "0.8rem",
                    padding: "4px 8px",
                    minHeight: "32px",
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: "outlined",
                fullWidth: true,
                size: "small",
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: COLORS.PRIMARY.main,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: COLORS.PRIMARY.light,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "black",
                    },
                },
                input: {
                    padding: "10px 12px",
                },
            },
        },
    },
});

export default theme;
