import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "./theme";

// Why cookie, how cookie, refer https://medium.com/@rossbulat/using-cookies-in-react-redux-and-react-router-4-f5f6079905dc
import { CookiesProvider } from "react-cookie";

import AppRouter from "./router/AppRouter";

ReactDOM.render(
  <MuiThemeProvider theme={defaultTheme}>
    <CookiesProvider>
      <AppRouter />
    </CookiesProvider>
  </MuiThemeProvider>,
  document.getElementById("root"));