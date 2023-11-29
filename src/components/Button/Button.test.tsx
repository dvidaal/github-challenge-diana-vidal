import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  test("When it rendered then it should show and image and the text 'arrow' on ti", () => {
    renderWithProviders(<Button />);

    const expectedResult = screen.getByRole("img");

    expect(expectedResult).toBeInTheDocument();
  });

  test("When it rendered it should show a button", () => {
    renderWithProviders(<Button />);

    const expectedbutton = screen.getByRole("button");

    expect(expectedbutton).toBeInTheDocument();
  });
});
