import Button from "./Button";
import { render } from "@testing-library/react";
import { test } from "@jest/globals";

test("Testing Button Component", () => {
  render(<Button testIdPrefix={""} theme={"primary"} />);
});
