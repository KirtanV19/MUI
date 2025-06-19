import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Box,
    useTheme,
    Drawer,
    styled
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Navbar = () => {
    const theme = useTheme();

    const navItems = ["Home", "About", "Contact"];

    const [openDrawer, setOpenDrawer] = useState(false);

    const handleOpenDrawer = () => setOpenDrawer(!openDrawer);

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        justifyContent: 'flex-end',
    }));
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={handleOpenDrawer} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        {navItems.map((item) => (
                            <Button key={item} color="inherit">
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={handleOpenDrawer}
            >
                <DrawerHeader>
                    <IconButton onClick={handleOpenDrawer}>
                        {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </DrawerHeader>
                <Box
                    sx={{
                        width: 250,
                        padding: 2,
                        backgroundColor: theme.palette.background.default,
                    }}
                    role="presentation"
                    onClick={handleOpenDrawer}
                    onKeyDown={handleOpenDrawer}
                >
                    {navItems.map((item) => (
                        <Button
                            key={item}
                            fullWidth
                        >
                            {item}
                        </Button>
                    ))}
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
