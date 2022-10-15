
export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  age: number
  image: string
  company: UserCompany
}

interface UserCompany {
  address: UserCompanyAddress
  department: string
  name: string
  title: string
}

interface UserCompanyAddress {
  address: string
  city: string
  postalCode: string
  state: string
}

interface GetDummyUserJsonResult {
  users: UserData[];
}

const getDummyUsers = async (): Promise<UserData[]> => {
    const url = "https://dummyjson.com/users"
    const fetchResult = await fetch(url);
    const jsonResult: GetDummyUserJsonResult = await fetchResult.json();
    // if (jsonResult.cod) {
    //   throw Error(jsonResult.message);
    // }  
    return jsonResult.users;
  };
  
  export const userService = {getDummyUsers};