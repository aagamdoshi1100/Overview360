import "./App.css";
import Activity from "./components/Activity";
import CustomerFeedback from "./components/CustomerFeedback";
import HighlightsSection from "./components/HighlightsSection";
import KeyMetrics from "./components/KeyMetrics";
import NetProfit from "./components/NetProfit";
import RecentOrders from "./components/RecentOrders";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <SideBar />
        <div className="flex flex-col">
          <TopBar />
          <div className="flex  mt-20">
            <KeyMetrics />
            <NetProfit />
          </div>
          <div className="flex">
            <Activity />
            <HighlightsSection />
          </div>

          <div className="flex">
            <RecentOrders />
            <CustomerFeedback />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
