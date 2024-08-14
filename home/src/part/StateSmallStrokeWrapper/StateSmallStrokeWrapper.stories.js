import { StateSmallStrokeWrapper } from ".";

export default {
  title: "Components/StateSmallStrokeWrapper",
  component: StateSmallStrokeWrapper,
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
