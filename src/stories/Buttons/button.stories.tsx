import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "~/components/Buttons";

const meta: Meta<typeof Button> = {
  title: "Components/ButtonComponents/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "medium", "large"]
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "destructive"]
    },
    disabled: {
      control: "boolean"
    },
    children: {
      control: "text"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: "New template",
    size: "medium",
    variant: "primary",
    disabled: false
  }
};

// export const Showcase: Story = {
//   render: () => {
//     return <Button>New template</Button>;
//   }
// };
