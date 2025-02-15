
export type UserReturnData = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: any
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export type IUser = Omit<UserReturnData, "address" | "website" | "company"> & { archive: boolean, company: string, city: string }

