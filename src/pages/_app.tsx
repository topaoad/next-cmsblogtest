import { NotificationsProvider } from "@mantine/notifications";
import type { CustomAppPage } from "next/app";
import { AppMantineProvider, GlobalStyleProvider } from "src/lib/mantine";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <ThemeProvider attribute="class"  defaultTheme="light">
      <GlobalStyleProvider>
        <AppMantineProvider>
          <NotificationsProvider>
            {getLayout(<Component {...pageProps} />)}
          </NotificationsProvider>
        </AppMantineProvider>
      </GlobalStyleProvider>
    </ThemeProvider>
  );
};

export default App;
