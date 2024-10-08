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
import axios from 'axios'
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
        async login(){
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            if(result.status==200 && result.data.length>0){
                
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({name:'HomeView'})
            }
            console.warn(result)
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