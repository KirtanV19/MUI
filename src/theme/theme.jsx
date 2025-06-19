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
    breakpoints: {
        values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
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
                    padding: "8px 20px",
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
            },
        },

        MuiTextField: {
            defaultProps: {
                variant: "outlined",
                size: "small",
                fullWidth: true,
                InputProps: {
                    style: {
                        borderRadius: 8,
                        padding: "4px 8px",
                        height: "40px",
                    },
                },
            },
        },
    },
});

export default theme;
