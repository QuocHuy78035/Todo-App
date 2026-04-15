import { cn } from "~/utils";

interface WelcomeMessageProps {
  userName: string;
}

export const WelcomeMessage = ({ userName }: WelcomeMessageProps) => {
  return <p className={cn("font-bold")}>Welcome back, {userName}👋</p>;
};
