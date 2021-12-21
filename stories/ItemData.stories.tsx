import { ComponentMeta } from "@storybook/react";
import { GridWithItemData } from "../components/ItemData";

export default {
  title: "with itemData",
  component: GridWithItemData,
} as ComponentMeta<typeof GridWithItemData>;

export const Default = () => <GridWithItemData />;
