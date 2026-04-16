import { DashboardAction } from "./index";
import { DashboardViewLabel } from "./DashboardViewLabel";
import { cn } from "~/utils";
import { Divider } from "~/components/Divider/Divider";

export const DashboardToolbar = () => {
  return (
    <>
      <div className={cn("flex justify-between")}>
        <DashboardViewLabel />
        <DashboardAction />
      </div>
      <div className="flex mt-2">
        <Divider bg="borderPrimary" width={144} />
        <Divider bg="borderSecondary" />
      </div>
    </>
  );
};
