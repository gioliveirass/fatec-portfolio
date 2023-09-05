import Routes from "./routes";
import chakraTheme from "./assets/themes/chakra.theme";

import { ChakraBaseProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraBaseProvider theme={chakraTheme}>
      <Routes />
    </ChakraBaseProvider>
  );
}
