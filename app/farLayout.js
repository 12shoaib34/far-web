import { ThemeProvider } from "next-themes";
import React from "react";

const FarLayout = (props) => {
  const { children } = props;
  return (
    <main>
      <ThemeProvider>
        <>{children}</>
      </ThemeProvider>
    </main>
  );
};

export default FarLayout;
