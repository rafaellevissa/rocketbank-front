import { Provider as ReduxProvider } from "react-redux";
import store from './states/store';
import AppRoutes from './routes';
import { CssBaseline } from "@mui/material";
import Theme from "./Theme";

export default function App() {
  return (
    <ReduxProvider store={store} >
      <Theme>
        <CssBaseline />
        <AppRoutes />
      </Theme>
    </ReduxProvider>
  );
}