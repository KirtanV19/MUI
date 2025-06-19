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
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    fontWeight: 800,
                    backgroundColor: COLORS.PRIMARY.main,
                    color: 'white',
                    textTransform: "none",
                    padding: "8px 20px",
                    fontSize: "0.9rem",
                    boxShadow: "none",
                    "&:hover": {
                        backgroundColor: COLORS.PRIMARY.dark,
                        boxShadow: "none",
                    },
                },
                containedPrimary: {
                    backgroundColor: COLORS.PRIMARY.main,
                    color: COLORS.SECONDARY,
                    "&:hover": {
                        backgroundColor: COLORS.PRIMARY.dark,
                        color: 'black'
                    },
                },
                containedSecondary: {
                    backgroundColor: COLORS.SECONDARY.main,
                    color: COLORS.PRIMARY,
                },
            },
            defaultProps: {
                disableElevation: true,
                variant: "contained",
            },
        },
    },
});

export default theme;
