import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import Header from "./Header";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a Header component", () => {
  test("When it is rendered, it should show a h1 tag with the title `GitHub Glorified List`", () => {
    renderWithProviders(<Header />);

    const renderedText = "GitHub Glorified List";

    const expectedResult = screen.getByText(renderedText);

    expect(expectedResult).toBeInTheDocument();
  });
});
