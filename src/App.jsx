import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import NewNavbar from "./components/NewNavbar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NewNavbar />
    </ThemeProvider>
  );
};

export default App;
