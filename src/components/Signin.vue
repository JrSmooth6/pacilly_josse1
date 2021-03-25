<template>
    <div>
        <h2>Connexion</h2>
        <label>Email : <input type="email" placeholder="example@gmail.com" name="mail" v-model="mail"></label><br>
        <label>Mot de passe : <input type="password" placeholder="Mot de passe" name="password" v-model="password"></label><br>
        <button @click="login({mail,password})">Se connecter</button>
    </div>
</template>