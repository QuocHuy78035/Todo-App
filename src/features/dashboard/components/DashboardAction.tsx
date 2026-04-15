import { Button } from "~/components/Buttons";

export const DashboardAction = () => {
  return (
    <div className="flex items-center gap-4">
      <p className="font-medium">Filter</p>
      <p className="font-medium">Sort</p>
      <Button className="font-medium">New Todo</Button>
    </div>
  );
};
