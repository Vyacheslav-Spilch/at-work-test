import { instance } from "../../../store/api/api"

export const apiUsers = {
    getUsers: () => {
        return instance.get("/users?_limit=6")
    }
}