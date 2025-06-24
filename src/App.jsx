import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router";
import Users from "./components/Users";
import Tasks from "./components/Tasks";
import NewNavbar from "./components/NewNavbar";
import Logout from "./components/Logout";
import { BrowserRouter } from "react-router";
import store from "./redux/store";
import { Provider } from "react-redux";
import Register from "./components/Register";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<NewNavbar />}>
              <Route path="users" element={<Users />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="logout" element={<Logout />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<ForgotPassword />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
