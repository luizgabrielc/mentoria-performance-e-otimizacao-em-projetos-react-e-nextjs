import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("../../../components/Dashboard"));
const Profile = lazy(() => import("../../../components/Profile"));

const WithCodeSplitting = () => {
  return (
    <div
      className="w-full flex flex-col gap-y-2
      items-center justify-center"
    >
      <Suspense fallback={<p>Carregando página...</p>}>
        <Dashboard />
        <Profile />
      </Suspense>
    </div>
  );
};

export default WithCodeSplitting;
