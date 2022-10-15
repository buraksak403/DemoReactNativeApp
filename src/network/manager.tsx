import { UserData } from "../store/user/models";

interface GetDummyUserJsonResult {
  users: UserData[];
}

const getDummyUsers = async (): Promise<UserData[]> => {
  const url = "https://dummyjson.com/users"
  const fetchResult = await fetch(url);
  const jsonResult: GetDummyUserJsonResult = await fetchResult.json();
  return jsonResult.users;
};

export const userService = { getDummyUsers };