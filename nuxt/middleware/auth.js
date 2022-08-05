export default (context) => {
    console.log('auth middleware');
    console.log(context)
    const loggedIn = false;
    if(!loggedIn) {
        return context.redirect('/');
    }
 }

