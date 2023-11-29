import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/testUtils";
import UserProfile from "./UserProfile";
import { userMock } from "../../mocks/userMock";
import { screen } from "@testing-library/react";

const user = userMock;

describe("Given a UserProfile component", () => {
  test("When rendred then it should show a user name", () => {
    const expectedUserName = user.login;

    renderWithProviders(
      <UserProfile
        user={user}
        repositories={[]}
        onUpdateFilteredRepositories={() => {}}
      />
    );

    const userLogin = screen.getByText(expectedUserName);

    expect(userLogin).toBeInTheDocument();
  });
});
