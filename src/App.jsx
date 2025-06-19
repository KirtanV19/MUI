import Register from "./components/Register";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import Demo from "./components/Demo";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Register />
      <Demo />
    </ThemeProvider>
  );
};

export default App;
