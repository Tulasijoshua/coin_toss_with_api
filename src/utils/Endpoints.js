import { BASE_URL } from "./config"

export const endpoint = {
    login: BASE_URL + 'api/auth/login/',
    updateBalance: (id) => BASE_URL + `api/user-profiles/${id}/update_balance/`,
    getUserBalance: BASE_URL + 'api/user-profiles/balance/',
    getUser: (id) => BASE_URL + `api/user-profiles/${id}/`,
    predictSide: BASE_URL + 'api/coin-toss/predict/',
}