import { BASE_URL } from "./config"

export const endpoint = {
    login: BASE_URL + 'api/login/',
    confirm: BASE_URL + 'api/verify-email/',
    // updateBalance: (id) => BASE_URL + `api/user-profiles/${id}/update_balance/`,
    updateBalance: (id) => BASE_URL + `api/update-balance/`,
    getUserBalance: BASE_URL + 'api/user-profiles/balance/',
    getUser: (id) => BASE_URL + `api/user-profiles/${id}/`,
    // predictSide: BASE_URL + 'api/coin-toss/predict/',
    predictSide: BASE_URL + 'api/coin-toss/ ',
    profile: BASE_URL + 'api/profile/',
}