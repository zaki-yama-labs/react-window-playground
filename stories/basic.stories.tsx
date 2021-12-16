import { ComponentMeta } from "@storybook/react";
import Basic from "../pages/basic";

export default {
  title: "Basic",
  component: Basic,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Basic>;

export const BasicGrid = () => <Basic />;
