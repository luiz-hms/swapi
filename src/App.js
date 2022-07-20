import { Header } from "../src/components/Header";
import { RouteList } from "../src/routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <RouteList />
      <GlobalStyle />
    </>
  );
}

export default App;
