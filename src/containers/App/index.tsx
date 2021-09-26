import { Layout, Providers } from "..";

import "./style.css";

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
