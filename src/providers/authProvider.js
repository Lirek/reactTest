import { loginURL } from "../api/api"

const authProvider = {
      
    login : ({username,password})=>{
            console.log(username);
            console.log(password);
          const request = new Request(loginURL,
          {
              method:'POST',
              body: JSON.stringify({correo:username,password}),
              headers: new Headers({'Content-Type':'application/json'})
          });
          
          return fetch(request)
            .then(response=>{
                if (response.status < 200 || response.status >=300){
                    console.log(response.status);
                    throw new Error(response.statusText)
                }
                //console.log(response)
                return response.json();
            }).then(auth => {
                console.log(auth);
                    localStorage.setItem('x-token', JSON.stringify(auth.token));
                    localStorage.setItem('user', JSON.stringify(auth.usuario));
                    console.log(localStorage.getItem('user'));
                })
                .catch((error) => {
                    console.log(error);
                    throw new Error('Network error')
                }
            );
      },      

    checkAuth: () => localStorage.getItem('x-token')
                        ? Promise.resolve()
                        : Promise.reject({ redirectTo: '/no-access' }),

    checkError: (error) => {
            const status = error.status;
            if (status === 401 || status === 403) {
                localStorage.removeItem('x-token');
                return Promise.reject({ message: false });
            }
            // other error code (404, 500, etc): no need to log out
            return Promise.resolve();
        },    
    logout: () => {
        localStorage.removeItem('x-token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    getPermissions: () => {
        const role = localStorage.getItem('rol');
        return role ? Promise.resolve(role) : Promise.reject();
    },
    getIdentity: () => {
        try {
            const { uid, nombre, correo,tipo_cedula,cedula} = JSON.parse(localStorage.getItem('user'));
            return Promise.resolve({ uid, nombre, correo,tipo_cedula,cedula});
        } catch (error) {
            return Promise.reject(error);
        }
    }
      
}
export default authProvider;