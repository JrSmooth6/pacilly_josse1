<template>
<div class="todo">
    <h1> Todo</h1>
    <h2> Taches à effectuer : {{compteur()}} </h2>
    <ul class="liste" >
        <li  v-for="item in lists" :key="item.id">
            <p>{{item.name}}
            <input type="checkbox" id="checkbox" v-model="item.completed" v-on:change="changementEtat(item)">

            <button v-on:click="remove(item)"> X </button>
            </p>
        </li>
        <li>
            <p>Nouvelle Todo
                <input type="text" placeholder="Nouvelle Todo" v-model="newtodo" v-on:keyup.enter="add">
                <button v-on:click="add">Ajouter Todo</button>
            </p>
        </li>
    </ul>
    <div id="#bouton">
        <button id="#true" v-on:click="trueE">Faite</button>
        <button id="#false" v-on:click="falseE">A faire</button>
        <button id="#none" v-on:click="noFilter">Pas de filtre</button>
    </div>
</div>
</template>
<script>
export default{
      name: 'App',
      components: {
      },
      data() {
        return {
          lists:[
              {id: 0, name: 'vas en enfer', completed: false},
              {id: 1, name: 'Faire à manger', completed: true},
              {id: 2, name: 'Nourrir le chien', completed: false},
              {id: 3, name: 'Laver la voiture', completed: false},
              {id: 4, name: 'Ranger la maison ', completed: false},
              {id: 5, name: 'Dormir', completed: false},
              
          ],
          showList:[

          ],
        }
      },
      methods:{
          
          remove : function(text){
            let index = this.lists.indexOf(text);
            this.lists.splice(index,1);
              return this.lists;
          },
          add : function(){
              this.lists.push({
                  id:12,
                  name:this.newtodo,
                  completed:false
              })
              this.newtodo="";
              return this.lists;    
          },
          changementEtat : function(item){
              if (item.completed===true){
                  item.completed===false;
              }else{
                  item.completed===true;
              }
          },
          compteur :function(){
              let compteur=0;
              for(let i = 0;i<this.lists.length;i++){
                  if (this.lists[i].completed ===false){
                      compteur+=1
                  }
              }
              return compteur;     
          },
          trueE :function(){
              if(this.showList.length===0){
              for (let i= 0;i<this.lists.length;i++){
                  while (this.lists[i].completed === false){
                      this.showList.push(this.lists[i])
                      this.lists.splice(i,1);
                      console.log(i);
                  }    
              }
              return this.lists;
          }
              return this.lists;
          },
          falseE: function(){
              if(this.showList.length===0){
              for (let i= 0;i<this.lists.length;i++){
                  while (this.lists[i].completed === true){
                      this.showList.push(this.lists[i])
                      this.lists.splice(i,1);
                      console.log(i);
                  }    
              }
              return this.lists;
          }
              return this.lists;
          },
          noFilter: function(){
              
              for(let i = 0;i<this.showList.length;i++){
                  this.lists.push(this.showList[i]);
              }
              this.showList=[];
              return this.lists
          }    
      }
}
</script>
