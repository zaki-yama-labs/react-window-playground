import { ComponentMeta } from "@storybook/react";
import GridWithRowHover from "../components/row-hover";

export default {
  title: "Row Hover",
  component: GridWithRowHover,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GridWithRowHover>;

export const BasicGrid = () => <GridWithRowHover />;
