import { ComponentMeta } from "@storybook/react";
import GridWithAutoResize from "../components/auto-resize";

export default {
  title: "Auto Resize",
  component: GridWithAutoResize,
} as ComponentMeta<typeof GridWithAutoResize>;

export const BasicGrid = () => <GridWithAutoResize />;
