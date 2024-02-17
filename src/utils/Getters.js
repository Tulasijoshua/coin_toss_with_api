export const Getter = () => {
    return {
        isLogin: Boolean(localStorage.getItem('isLogin')),
        token: JSON.parse(localStorage.getItem('token')??"{}"),
        user: JSON.parse(localStorage.getItem('user')??"{}"),
        headers: {
            "headers": {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
}
