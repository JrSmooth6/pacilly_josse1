export function createListe({commit},name){
    console.log(name);
    commit("create",name);
}
//Création d'une nouvelle liste
export function deleteListe({commit},id){
    console.log(id);
    commit("delete",id);
}