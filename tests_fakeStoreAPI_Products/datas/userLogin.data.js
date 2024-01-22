const userLoginData = [
    {
        case: {
            title: 'user success login',
            status: 200
        },
        payload: {
            'username' : 'mor_2314',
            'password' : '83r5^_'
        }
    },
    {
        case: {
            title: 'user failed login',
            status: 401
        },
        payload: {
            'username' : 'mithap',
            'password' : 'password'
        }
    }
]

module.exports = userLoginData