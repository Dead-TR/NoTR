import { Layout, Providers } from "..";

import "./style.scss";

function App() {
  return (
    <div className="App">
      <Providers>
        <Layout />
      </Providers>
    </div>
  );
}

export default App;
