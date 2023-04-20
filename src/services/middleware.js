import Cookie from 'js-cookie';
export default {
    auth(to, from, next){
        //console.log('Middleware='+to, from, next);
        const token = Cookie.get('token_user');
        console.log(token);

        if(!token) {
            next('/entrar');
        }

        next();
    },
}