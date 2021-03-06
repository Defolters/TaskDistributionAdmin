const authProvider = {
    login: ({ email, password }) => {
        const request = new Request('http://localhost:8080/v1/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            credentials: 'include',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            
        });
        console.log(request.stringify);
        return fetch(request)
            .then(response => {
                console.log(response.status)
                if (response.status < 200 || response.status >= 300) {
                    console.log("throw")
                    throw new Error(response.statusText);
                }
                return response.text();
            })
            .then(( token ) => {
                console.log("token" + token)
                localStorage.setItem('token', token);
            });
    },
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => localStorage.getItem('token')
        ? Promise.resolve()
        : Promise.reject({ redirectTo: '/no-access' }),
    getPermissions: params => Promise.resolve(),
};

export default authProvider;