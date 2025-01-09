import type { Meta, StoryObj } from "@storybook/react";

import { InputForm } from "./index";

const meta: Meta<typeof InputForm> = {
  title: "Atoms/InputForm",
  component: InputForm,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
    onKeyDown: { action: "key pressed" },
    readOnly: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof InputForm>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    value: "",
    readOnly: false,
  },
};

export const WithInitialValue: Story = {
  args: {
    placeholder: "Enter text...",
    value: "Initial value",
    readOnly: false,
  },
};

export const ReadOnly: Story = {
  args: {
    placeholder: "Read-only input",
    value: "Read-only value",
    readOnly: true,
  },
};

// export const Controlled: Story = () => {
//   const [value, setValue] = useState("Controlled input");
//   return (
//     <InputForm
//       placeholder="Type something..."
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//       onKeyDown={(e) => console.log(`Key pressed: ${e.key}`)}
//     />
//   );
// };
