import { NotificationsProvider } from "@mantine/notifications";
import { AppMantineProvider, GlobalStyleProvider } from "src/lib/mantine";
import  { CustomAppPage } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from 'next-themes';

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ||
    ((page:any) => {
      return page;
    });

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <GlobalStyleProvider>
        <AppMantineProvider>
          <NotificationsProvider>
            {getLayout(<Component {...pageProps} />)}
          </NotificationsProvider>
        </AppMantineProvider>
      </GlobalStyleProvider>
    </ThemeProvider>
  );
}

export default App;
