import {render, screen} from "@testing-library/react";
import Tag from "./Tag";

describe("Layout", () => {
  it("Should be a tag with passed tagContent props", () => {
    render(<Tag tagContent="PHP" />);
    const button = screen.getByRole("button", {name: "PHP"});
    expect(button).toBeInTheDocument();
  });
});
