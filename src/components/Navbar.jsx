import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Box,
    useTheme,
    Drawer,
    styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { navItems } from "../utils/helper";

const Navbar = () => {
    const theme = useTheme();

    const [openDrawer, setOpenDrawer] = useState(false);

    const handleOpenDrawer = () => setOpenDrawer(!openDrawer);

    const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        justifyContent: "flex-end",
    }));

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <IconButton
                        onClick={handleOpenDrawer}
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        {navItems.map((item) => (
                            <Button key={item.id} color="inherit">
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={openDrawer} onClose={handleOpenDrawer}>
                <DrawerHeader>
                    <IconButton onClick={handleOpenDrawer}>
                        {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </DrawerHeader>
                <Box
                    sx={{
                        width: 250,
                        padding: 2,
                        backgroundColor: theme.palette.primary.main,
                    }}
                    role="presentation"
                    onClick={handleOpenDrawer}
                    onKeyDown={handleOpenDrawer}
                >
                    {navItems.map((item) => (
                        <Button
                            key={item.id}
                            fullWidth
                            color="inherit"
                            sx={{
                                justifyContent: "flex-start",
                                textTransform: "none",
                                gap: 1,
                            }}
                            startIcon={item.icon ? <item.icon /> : null}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
