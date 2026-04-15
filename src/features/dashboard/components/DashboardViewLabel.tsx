import { SwitcherOutlined } from "@ant-design/icons";
import { cn } from "~/utils";

export const DashboardViewLabel = () => {
  return (
    <div className={cn("flex items-center ml-3")}>
      <SwitcherOutlined />
      <p className={cn("font-medium ml-2")}>Board view</p>
    </div>
  );
};
