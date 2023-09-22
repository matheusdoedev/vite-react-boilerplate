import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { queryProvider } from "@/providers";
import { router } from "@/routes";

import { Reset, theme } from "@/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />

      <QueryClientProvider client={queryProvider}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
