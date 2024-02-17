import { BASE_URL } from "./config"

export const endpoint = {
    login: BASE_URL + 'api/auth/login/',
    updateBalance: (id) => BASE_URL + `api/user-profiles/${id}/update_balance/`,
    getUser: (id) => BASE_URL + `api/user-profiles/${id}/`
}