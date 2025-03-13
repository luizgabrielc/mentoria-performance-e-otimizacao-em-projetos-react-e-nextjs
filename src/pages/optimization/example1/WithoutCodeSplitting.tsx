import Dashboard from "../../../components/Dashboard";
import Profile from "../../../components/Profile";

const WithoutCodeSplitting = () => {
  return (
    <div
      className="w-full flex flex-col gap-y-2
      items-center justify-center"
    >
      <Dashboard />
      <Profile />
    </div>
  );
};

export default WithoutCodeSplitting;