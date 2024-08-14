import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    state: {
      options: ["black-stroke", "fill-small", "white-stroke", "fill", "small-stroke", "stroke-small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    buttonText: "Label",
    state: "black-stroke",
    icon: true,
    className: {},
    divClassName: {},
  },
};
