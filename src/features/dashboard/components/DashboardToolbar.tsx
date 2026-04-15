import { DashboardAction } from "./index";
import { DashboardViewLabel } from "./DashboardViewLabel";
import { cn } from "~/utils";
import { Divider } from "./Divider";

export const DashboardToolbar = () => {
  return (
    <>
      <div className={cn("flex justify-between")}>
        <DashboardViewLabel />
        <DashboardAction />
      </div>
      <Divider />
    </>
  );
};
