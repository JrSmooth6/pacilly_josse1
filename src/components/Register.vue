<template>
    <div class>
        <br>
        <label> Prénom : <input type="text" placeholder="Prénom" name= "name" v-model="name"></label>
        <br>
        <label> Mail : <input type="email" placeholder="example@gmail.com" name= "mail" v-model="mail"></label>
        <br>
        <label> Mot de passe : <input type="password" placeholder="Mot de passe" name= "password" v-model="password"></label>
    <br>
        <button @click="inscription({name,mail,password})">Inscription</button>
    </div>
</template>