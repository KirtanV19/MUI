//  Clipped drawer
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    useTheme,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
} from "@mui/material";
import { navItems } from "../utils/helper";
import { Link, useLocation, Outlet } from "react-router";

const drawerWidth = 200;

const NewNavbar = () => {
    const theme = useTheme();
    const { pathname } = useLocation();

    return (
        <Box sx={{ display: "flex" }}>
            {/* Navbar */}
            <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography component="div" variant="h5">
                        TaskMaster
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Sidebar Drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
            >
                <Toolbar /> {/* spacer so list starts below AppBar */}
                <List>
                    {/* Instead of entire item, destructure the property of it and use, as <icon/> is not acceptable so we rename from icon to Icon */}
                    {navItems.map(({ id, label, icon: Icon }, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                component={Link}
                                to={`/${id}`}
                                selected={pathname === `${id}`}
                            >
                                {Icon && (
                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                        <Icon />
                                    </ListItemIcon>
                                )}
                                <ListItemText primary={label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {/* Main Content Placeholder */}
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, ml: { sm: `${drawerWidth}px` } }}
            >
                <Toolbar /> {/* pushes below AppBar */}
                <Outlet /> {/* ← child routes render here */}
            </Box>
        </Box>
    );
};

export default NewNavbar;
