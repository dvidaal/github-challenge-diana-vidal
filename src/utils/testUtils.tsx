import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";

export const renderWithProviders = (ui: React.ReactElement) => {
  const Wrapper: React.FC = ({ children }: PropsWithChildren) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );

  return render(ui, { wrapper: Wrapper });
};
