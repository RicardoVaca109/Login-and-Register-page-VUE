<template>
<img class = "logo" src="../assets/restaurantlogo.png" />
<h1>Ya esta registrado?</h1>
<div class="login">
    <input type = "text" v-model="email"  placeholder="Ingresa Email"/>
    <input type = "password" v-model="password" placeholder="Ingresa Contraseña"/>
    <button v-on:click = "login">Login</button>
    <p>
    <router-link to = "/sign-up">Registrarse</router-link>
    </p>

</div>
</template>
<script>
export default{
    name:'LoginView',
    data()
    {
        return{
        email: '',
        password: ''
        }
    },
    methods:{
        login(){
            console.warn(this.email,this.password)
        }
    }
}
</script>