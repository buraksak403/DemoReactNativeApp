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

export interface UserState {
    users: UserData[];
}