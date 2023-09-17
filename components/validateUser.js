const validateUser = (users, userName, password) => users.find((user) => user.userName === userName && user.password === password)


const changePassword = (user, newPassword) => {
    user.password = newPassword
    return user
}