import { useState } from "react";
import "./styles.css";

export default function App() {
  const [tab, setTab] = useState("sltp");

  const dummyTrades = [
    {
      symbol: "NIFTY24OCTFUT",
      type: "futures",
      pos: "short",
      qty: 25,
      price: 24706.95,
    },
    {
      symbol: "RELIANCE24OCTFUT",
      type: "futures",
      pos: "long",
      qty: 250,
      price: 2696.8,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex gap-6">
      {/* Sidebar */}
      <aside className="w-60 bg-white p-4 rounded-2xl shadow-md">
        <h2 className="text-lg font-bold mb-4">Monitor</h2>
        <div className="space-y-2">
          <div className="sidebar-link">Main</div>
          <div className="sidebar-link">History</div>
        </div>

        <h2 className="text-lg font-bold mt-6 mb-2">Info</h2>
        <div className="sidebar-link">Logs</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <h1 className="text-2xl font-bold text-center mb-6">
          Zerodha TPSL and MT Copy Bot
        </h1>

        {/* Input Panel */}
        <div className="bg-white rounded-2xl p-6 shadow-md card-smooth mb-6">
          <div className="text-xl font-semibold mb-4">Inputs</div>

          <div className="grid grid-cols-3 gap-6">
            {/* Spot */}
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <div className="text-lg font-semibold mb-2">Spot</div>
              <div className="space-y-3">
                <InputBox label="Profit 1 %" defaultValue="1.2" />
                <InputBox label="Profit 2 %" defaultValue="8" />
                <InputBox label="Profit 3 %" defaultValue="12" />
                <InputBox label="Stop Loss %" defaultValue="12" />
              </div>
            </div>

            {/* Futures */}
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <div className="text-lg font-semibold mb-2">Futures</div>
              <div className="space-y-3">
                <InputBox label="Profit 1 %" defaultValue="5.2" />
                <InputBox label="Profit 2 %" defaultValue="10" />
                <InputBox label="Profit 3 %" defaultValue="15" />
                <InputBox label="Stop Loss %" defaultValue="10" />
              </div>
            </div>

            {/* Options */}
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <div className="text-lg font-semibold mb-2">Options</div>
              <div className="space-y-3">
                <InputBox label="Profit 1 %" defaultValue="7.5" />
                <InputBox label="Profit 2 %" defaultValue="17" />
                <InputBox label="Profit 3 %" defaultValue="27" />
                <InputBox label="Stop Loss %" defaultValue="30" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button className="px-6 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition">
              Save
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-white rounded-2xl shadow-md mb-4 overflow-hidden">
          <div
            className={`flex-1 text-center py-2 cursor-pointer ${
              tab === "sltp" ? "tab-active" : ""
            }`}
            onClick={() => setTab("sltp")}
          >
            SLTP Trades
          </div>

          <div
            className={`flex-1 text-center py-2 cursor-pointer ${
              tab === "mt" ? "tab-active" : ""
            }`}
            onClick={() => setTab("mt")}
          >
            MT Copy Trades
          </div>
        </div>

        {/* Table */}
        <div className="bg-white p-6 rounded-2xl shadow-md card-smooth">
          <div className="text-lg font-bold mb-4">
            {tab === "sltp" ? "SLTP Trades History" : "MT Copy Trades History"}
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2">Symbol</th>
                <th className="p-2">InstrType</th>
                <th className="p-2">Position</th>
                <th className="p-2">Qty</th>
                <th className="p-2">AvgPrice</th>
              </tr>
            </thead>

            <tbody>
              {dummyTrades.map((row, index) => (
                <tr key={index} className="border-b table-row-hover">
                  <td className="p-2">{row.symbol}</td>
                  <td className="p-2">{row.type}</td>
                  <td className="p-2">{row.pos}</td>
                  <td className="p-2">{row.qty}</td>
                  <td className="p-2">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

// Reusable input component
function InputBox({ label, defaultValue }) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <div className="flex items-center gap-2">
        <input
          defaultValue={defaultValue}
          className="input-box"
          type="number"
        />
        <span>%</span>
      </div>
    </div>
  );
}
