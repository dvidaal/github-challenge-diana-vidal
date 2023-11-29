import { getUserResponseMock } from "../../mocks/getUserResponseMock";
import { UserData } from "../../types/types";
import { userMock } from "../../mocks/userMock";
import useUser from "./useUser";
import { renderHook } from "@testing-library/react";

describe("Given a getUser custom hook", () => {
  test("When called with the existing user 'dvidaal', then it should show the user with a list of repositories", async () => {
    const username: string = userMock.login;

    const expectedResult = getUserResponseMock;

    const {
      result: {
        current: { getUser },
      },
    } = renderHook(() => useUser());

    const response: UserData = await getUser(username);

    expect(response.login).toStrictEqual(expectedResult.login);
  });
});
