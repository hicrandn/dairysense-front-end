import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <Rightbar />
    </div>
  );
}
