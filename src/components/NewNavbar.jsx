//  Clipped drawer
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Drawer,
    useTheme,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Divider,
} from "@mui/material";
import { navItems } from "../utils/helper";
import Users from "./Users";
import Tasks from "./Tasks";
import Logout from "./Logout";
const drawerWidth = 200;

const NewNavbar = () => {
    const theme = useTheme();

    return (
        <Box sx={{ display: "flex" }}>
            {/* Navbar */}
            <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1, }}>
                <Toolbar>
                    <Typography component="div" variant="h5">
                        TaskMaster
                    </Typography>
                    {/* <Box>
                        <Button>Login</Button>
                        <Button>Regsiter</Button>
                    </Box> */}
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
                    {navItems.map(({ label, icon: Icon }, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{Icon && <Icon />}</ListItemIcon>
                                <ListItemText primary={label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Drawer >

            {/* Main Content Placeholder */}
            <Box component="main" sx={{ flexGrow: 1, p: 3, ml: { sm: `${drawerWidth}px` } }}>
                <Toolbar /> {/* pushes text below AppBar */}
                <Typography variant="body1">Your content goes here</Typography>
            </Box >
        </Box >
    );
};

export default NewNavbar;
