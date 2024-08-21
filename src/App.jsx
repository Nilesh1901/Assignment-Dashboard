import Dashboard from "./components/Dashboard";
import { DashboardProvider } from "./store/DashboardContext";

function App() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
}

export default App;
