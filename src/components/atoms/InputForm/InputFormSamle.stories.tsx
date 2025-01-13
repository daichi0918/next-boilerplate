import { JSX } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { InputForm } from ".";

type Props = {
  additionalStyle?: React.CSSProperties;
} & JSX.IntrinsicElements["input"];

export default {
  title: "Atoms/InputFormSample",
  component: InputForm,
  tags: ["autodocs"],
  args: {} as Props,
  // Add your own control here
} as Meta;

type Story = StoryObj<typeof InputForm>;

export const NewTitleInputForm: Story = {
  args: {
    placeholder: "New Title",
    value: "Todo 3",
    readOnly: false,
    onChange: fn(),
    // additionalStyle: { border: "2px solid red" },
  },
};

export const SearchTodoInputForm: Story = {
  args: {
    placeholder: "New Title",
    value: "Todo",
    readOnly: false,
    onChange: fn(),
  },
};
