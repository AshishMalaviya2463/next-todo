export const authorizationHeaderToken = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
}