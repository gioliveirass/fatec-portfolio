import chakraTheme from "./assets/themes/chakra.theme";

import Routes from "./routes";
import Header from "./components/header";
import Footer from "./components/footer";

import { ChakraBaseProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraBaseProvider theme={chakraTheme}>
      <Header />
      <Routes />
      <Footer />
    </ChakraBaseProvider>
  );
}
