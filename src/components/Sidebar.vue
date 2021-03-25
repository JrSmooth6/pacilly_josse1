<template>
<div class="todolist">
    <h1>TodoList</h1>
    <ul class="liste " v-if="lists.length>0" >
        <li  v-for="item in lists" :key="item.id">
            <p>{{item.name}}
            <button v-on:click="show(item.task)">Voir</button>
            <button v-on:click="remove(item)">Supprimer</button>
            <ul v-if="etat && (selectedList = item)">
                <li v-if="item.task.length>0"><p> Taches restantes : {{compteur(item.task)}} </p></li>
                <li v-else><p>Aucun Todo</p></li>
                <li v-for="tache in item.task" :key="tache">
                    <p v-if="tache.completed"><strike>{{tache.name}}</strike> <button v-on:click="supprTache(item.task,tache)">X</button><input type="checkbox" id="checkbox" v-model="tache.completed" v-on:change="changementEtat(item.task)"></p>
                    <p v-else>{{tache.name}} <button v-on:click="supprTache(item.task,tache)">X</button><input type="checkbox" id="checkbox" v-model="tache.completed" v-on:change="changementEtat(item.task)"></p>
                </li>
                <li>
                    <p> 
                        <input type="text" placeholder="Nouvelle Tache" name="newTask" v-model="newTask" v-on:keyup.enter="ajoutTache(item.task,newTask)">
                        <button v-on:click="ajoutTache(item.task,newTask)">Ajout Tache</button>
                    </p>
                </li>
            </ul>
            </p>
        </li>
    </ul>
    <p v-else>Aucune liste enregistrée</p>
    <ul>
        <li><p> <input type="text" placeholder="Nouvelle Liste" name="newList" v-model="newList" v-on:keyup.enter="ajout(newList)">
        <button v-on:click="ajout(newList)"> Créer TodoList</button>
        </p></li>
    </ul>
</div>
    
</template>

<script>
export default{
      name: 'App',
      components: {
      },
      data() {
        return {
          lists:[],
          etat:false,
          selectedList:[]

        }
      },
      methods:{
          ajout : function(nom){
                this.lists.push({
                  name:nom,
                  task:[],
              })
              this.newList="";
              console.log(this.lists.length)
                return this.lists;      
               },
          show: function(item){
              if (this.etat===true){
                  this.etat =false;
                  this.selectedList=[];
                  return this.selectedList;

              }else{
              this.etat=true;
              this.selectedList = item;
              console.log(this.selectedList[0]);
              return this.selectedList;
              }
              
              
          },
          remove : function(text){
            let index = this.lists.indexOf(text);
            this.lists.splice(index,1);
              return this.lists;
          },
          affichage: function(item){
              return item
              
          },
          ajoutTache:function(item,text){
              item.push({name:text,completed :false});
              this.newTask="";
              return item;
          },
          supprTache:function(item,text){
              item.splice(item.indexOf(text),1);
              return item;  
          },
          changementEtat:function(item){
              if(item.completed===true){
                  item.completed=false;
              }else{item.completed=true}
          },
         compteur :function(item){
              let compteur=0;
              
              for(let i = 0;i<item.length;i++){
                  if (item[i].completed ===false){
                      compteur+=1
                  }
              }
              return compteur;  
      }
    }
}


</script>

<style scoped>
.todolist{
    display: grid;
}
ul{
    list-style: none;
}
</style>