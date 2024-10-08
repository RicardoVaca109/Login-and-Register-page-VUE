<template>

<h1>Hola Usuario bienvenido a la página de Inicio</h1>

</template>
<script>
export default{
    name:'HomeView',
    mounted() 
    {
        let user = localStorage.getItem('user-info');   
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
    }

}
</script>