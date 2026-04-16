import { BellOutlined, CalendarOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar } from "~/components/Avatar";
import { cn } from "~/utils";

export const HeaderAction = () => {
  return (
    <div className={cn("flex gap-6 items-center")}>
      <SearchOutlined />
      <BellOutlined />
      <div>
        <CalendarOutlined />
        <span className={cn("text-textSecondary font-medium ml-2 text-[14px]")}>19 May 2022</span>
      </div>
      <Avatar src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg" />
    </div>
  );
};
