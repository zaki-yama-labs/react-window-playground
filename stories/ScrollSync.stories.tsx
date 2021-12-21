import { ComponentMeta } from "@storybook/react";
import { GridWithScrollSync } from "../components/ScrollSync";

export default {
  title: "Scroll Sync",
  component: GridWithScrollSync,
} as ComponentMeta<typeof GridWithScrollSync>;

export const Default = () => <GridWithScrollSync />;
