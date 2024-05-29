function add(a,b){
    return a+b;
}
//or export.add = (a,b) => a+b;

function sub(a,b){
    return a-b;
}
//or export.sub = (a,b) => a-b;


module.exports = {
    add,
    sub,
};