export default (context, inject) => {
    inject('namePlugin', 'Jon'),
    inject('nomePlugin', (name) => `Olá ${name}`);
    //console.log(context)
}