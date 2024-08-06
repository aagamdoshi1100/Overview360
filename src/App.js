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
        <TopBar />
        <div className="flex flex-col w-[100vw] sm:w-[calc(100vw-60px)] sm:ml-20 gap-3 sm:gap-5 mb-3">
          <div className="flex flex-col ml-5 sm:ml-0 sm:flex-row  gap-3 sm:gap-5 mt-16 sm:mt-20">
            <p className="heading font-bold text-[24px] sm:text-[30px] text-white">
              Dashboard
            </p>
          </div>
          <div className="flex flex-col items-center sm:flex-row  gap-3 sm:gap-5">
            <KeyMetrics />
            <NetProfit />
          </div>
          <div className="flex flex-col md:flex-row items-center sm:items-start sm:mt-3   gap-3 sm:gap-5">
            <Activity />
            <HighlightsSection />
          </div>

          <div className="flex flex-col md:flex-row items-center sm:items-start sm:my-3   gap-3 sm:gap-5">
            <RecentOrders />
            <CustomerFeedback />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
