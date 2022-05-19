import { config } from "dotenv";

import { MainRoutes } from "./routes/MainRoutes";

config();
function App() {

  return (
    <div className="app_container">
      <MainRoutes/>
    </div>
  )
}

export default App;
