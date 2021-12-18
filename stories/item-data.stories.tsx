import { ComponentMeta } from "@storybook/react";
import WithItemData from "../components/item-data";

export default {
  title: "ItemData",
  component: WithItemData,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof WithItemData>;

export const ItemData = () => <WithItemData />;
