import { ComponentMeta } from "@storybook/react";
import { GridWithRowHover } from "../components/RowHover";

export default {
  title: "Row Hover",
  component: GridWithRowHover,
} as ComponentMeta<typeof GridWithRowHover>;

export const Default = () => <GridWithRowHover />;
