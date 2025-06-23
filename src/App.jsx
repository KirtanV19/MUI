import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import NewNavbar from "./components/NewNavbar";
import { Routes, Route } from "react-router";
import Users from "./components/Users";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NewNavbar />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/users" element={<Users />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
