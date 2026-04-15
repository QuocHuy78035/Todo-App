import { EllipsisOutlined } from "@ant-design/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "~/components/Buttons";

const meta: Meta<typeof IconButton> = {
  title: "Components/ButtonComponents/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "medium", "large"]
    },
    variant: {
      control: "select",
      options: ["primary", "secondary"]
    },
    disabled: {
      control: "boolean"
    },
    icon: {}
  }
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Playground: Story = {
  args: {
    size: "medium",
    variant: "primary",
    disabled: false,
    icon: <EllipsisOutlined style={{ color: "black" }} />
  }
};

// export const Showcase: Story = {
//   render: () => {
//     return <IconButton icon={<EllipsisOutlined style={{ color: "black" }} />} />;
//   }
// };
