import { render, screen } from "@testing-library/vue";
import ActionButton from "@/components/ActionButton.vue";

describe("ActionButton", () => {
  it("renders text", () => {
    render(ActionButton, {
      props: {
        text: "Click me",
        type: "primary",
      },
    });
    const button = screen.getByRole("button", {
      name: /click me/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("applies one text", () => {
    render(ActionButton, {
      props: {
        text: "Click me",
        type: "primary",
      },
    });
    const button = screen.getByRole("button", {
      name: /click me/i,
    });
    expect(button).toBeInTheDocument();
  });
});
