import { cn } from "~/utils";
import { WelcomeMessage } from "./WelcomeMessage";
import { HeaderAction } from "./HeaderAction";

export const DashboardHeader = () => {
  return (
    <div className={cn("flex justify-between")}>
      <WelcomeMessage userName={"Vincent"} />
      <HeaderAction />
    </div>
  );
};
