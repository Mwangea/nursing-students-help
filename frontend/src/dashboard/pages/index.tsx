import { AssignmentForm } from "../assignment/AssignmentForm";
import { RecentActivity } from "../dashboard/RecentActivity";
import { UserOverview } from "../dashboard/UserOverview";
import { DashboardLayout } from "../layout/DashBoardLayout";
import { PricingInfo } from "../pricing/PricingInfo";

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, John!</h1>
          <p className="text-gray-500">Here's what's happening with your assignments.</p>
        </div>

        <UserOverview />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AssignmentForm />
          <div className="space-y-6">
            <RecentActivity />
            <PricingInfo />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}