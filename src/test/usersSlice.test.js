import { usersReducer, addUser } from "../store/usersSlice";

describe("Users Slice", () => {
  it("should return the initial state", () => {
    expect(usersReducer(undefined, { type: undefined })).toEqual([]);
  });

  it("should add user to empty state when addUser action is invoked", () => {
    const newUser = {
      id: "testId",
      name: "John Doe",
    };

    const action = addUser(newUser);
    const reducer = usersReducer([], action);

    expect(reducer).toEqual([newUser]);
    expect(reducer.length).toBe(1);
  });

  it("should add new user to existing user list when addUser action is invoked", () => {
    const mockPreviousState = [
      {
        id: "123",
        name: "Peter",
      },
      {
        id: "567",
        name: "Cleo",
      },
    ];

    const newUser = {
      id: "testId",
      name: "John Doe",
    };

    const action = addUser(newUser);
    const reducer = usersReducer(mockPreviousState, action);

    expect(reducer).toEqual([...mockPreviousState, newUser]);
    expect(reducer.length).toBe(3);
  });
});
