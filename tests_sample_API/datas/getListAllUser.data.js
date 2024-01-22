const getListAllUser = [
    {
        case: {
            title:'success',
            status: 200
        },
        parameters: {
            "since": "2000",
            "password": "Password123"
        }
    },
    {
        case: {
            title: 'failed username',
            status: 401
        },
        payload: {
            "email": "test.register.626",
            "password": "Password123"
        }
    },
    {
        case: {
            title: 'failed password',
            status: 401
        },
        payload: {
            "email": "test.register.626@gmail.com",
            "password": "Password123456"
        }
    }
]

module.exports = getListAllUser