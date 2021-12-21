import { ComponentMeta } from "@storybook/react";
import { BasicGrid } from "../components/Basic";

export default {
  title: "Basic",
  component: BasicGrid,
} as ComponentMeta<typeof BasicGrid>;

export const Default = () => <BasicGrid />;
