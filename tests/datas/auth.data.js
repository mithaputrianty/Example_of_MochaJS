export const login = [
    {
        case: {
            title: 'success',
            status: 200
        },
        payload: {
            "email": "fashion@gmail.com",
            "password": "password"
        },
    },
    {
        case: {
            title: 'failed',
            status: 401
        },
        payload: {
            "email": "fashion@gmail.com",
            "password": ""
        },
    }
]