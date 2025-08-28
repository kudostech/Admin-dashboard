import ChartCard from "../components/ChartCard";
import UserTable from "../components/UserTable";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {/* Dashboard Cards */}
      <div id="dashboard-cards" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-3xl font-bold mt-2">1,234</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="text-lg font-semibold">Revenue</h3>
          <p className="text-3xl font-bold mt-2">£12,345</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="text-lg font-semibold">Active Projects</h3>
          <p className="text-3xl font-bold mt-2">27</p>
        </div>
      </div>

      {/* Chart Section */}
      <div id="chart-section">
        <ChartCard />
      </div>

      {/* Users Table */}
      <div id="users-table">
        <UserTable />
      </div>
    </div>
  );
}
