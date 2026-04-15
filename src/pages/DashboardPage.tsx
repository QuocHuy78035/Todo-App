import { DashboardHeader, DashboardToolbar } from "~/features/dashboard/components";
import { cn } from "~/utils";

export const DashboardPage = () => {
  return (
    <div className={cn("p-4")}>
      {/* Nav */}
      <DashboardHeader />

      {/* Toolbar */}
      <DashboardToolbar />
    </div>
  );
};
