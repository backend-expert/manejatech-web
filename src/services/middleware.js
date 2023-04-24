import Cookie from 'js-cookie';
export default {
    auth(to, from, next){
        //console.log('Middleware='+to, from, next);
        const token = Cookie.get('admin_token');
     
        // console.log(token);
        let _next;

        
        // if(!token) {
        //     next('/entrar');
        // }
        if (token){
            _next='about';
        }

        next(_next);
    },
}