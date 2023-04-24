// import Cookie from 'js-cookie';
import Cookie from '@/services/cookie';
export default {
    redirectionIfnotAuthenticated(to, from, next){
        // const token = Cookie.get('admin_token');
        const token = Cookie.getToken();

        if(!token){
            next('/entrar');
        }

        next();
    },

    auth(to, from, next){
        //console.log('Middleware='+to, from, next);
        // const token = Cookie.get('admin_token');
        const token = Cookie.getToken();
     
        // console.log(token);
        // let _next;
        
        // if(!token) {
        //     next('/entrar');
        // }
        if (token){
            next('/');
        }
        

        next();
    },
}