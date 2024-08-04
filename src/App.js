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
    <div className="App bg-[#141416]">
      <div className="flex">
        <SideBar />
        <div className="flex flex-col">
          <TopBar />
          <div className="flex flex-col w-[100vw] items-center mt-16 sm:flex-row">
            <KeyMetrics />
            <NetProfit />
          </div>
          <div className="flex flex-col md:flex-row w-[100vw] items-center">
            <Activity />
            <HighlightsSection />
          </div>

          <div className="flex flex-col w-[100vw] md:flex-row items-center">
            <RecentOrders />
            <CustomerFeedback />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
