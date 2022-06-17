import App from "./App";
import {render, screen} from "@testing-library/react";

describe("App", () => {
  describe("Layout", () => {
    it("has header", () => {
      render(<App />);
      const header = screen.getByRole("heading", {name: "hello"});
      expect(header).toBeInTheDocument();
    });
  });
});
