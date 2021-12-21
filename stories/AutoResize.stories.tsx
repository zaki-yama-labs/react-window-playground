import { ComponentMeta } from "@storybook/react";
import { GridWithAutoResize } from "../components/AutoResize";

export default {
  title: "Auto Resize",
  component: GridWithAutoResize,
} as ComponentMeta<typeof GridWithAutoResize>;

export const Default = () => <GridWithAutoResize />;
