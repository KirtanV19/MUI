import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router";
import Users from "./components/Users";
import Tasks from "./components/Tasks";
import NewNavbar from "./components/NewNavbar";
import Logout from "./components/Logout";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<NewNavbar />}>
          {/* <Route index element={<h2>Home</h2>} /> */}
          <Route path="users" element={<Users />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
