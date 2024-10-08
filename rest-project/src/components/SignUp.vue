<template>
<img class = "logo" src="../assets/restaurantlogo.png" />
<h1>Registrarse</h1>
<div class="register">
    <input type = "text" v-model="name" placeholder="Ingresa Nombre"/>
    <input type = "text" v-model="email"  placeholder="Ingresa Email"/>
    <input type = "password" v-model="password" placeholder="Ingresa Contraseña"/>
    <button v-on:click="signUp" >Registrarse</button>
    <p>
    <router-link to = "/login">Login</router-link>
    </p>

</div>
</template>
<script>

import axios from 'axios'

export default {
    name:'SignUp',
    data() {
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods: {
        async signUp()
        {
            let result = await axios.post("http://localhost:3000/users",{
                name:this.name,
                password: this.password,
                email: this.email
            });

            console.warn(result);
            if(result.status==201){
                
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name:'HomeView'})
            }
        }
    },
    mounted() 
    {
        let user = localStorage.getItem('user-info');   
        if(user)
        {
            this.$router.push({name:'HomeView'})
        }
    }
    
}
</script>
<style>



</style>