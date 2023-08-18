import "../styles/globals.css";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="dark">
      <main className={`${manrope.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
