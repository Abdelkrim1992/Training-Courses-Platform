<script setup>

import Header from '../backend/Header.vue';
import Sidebar from '../backend/Sidebar.vue';
import "../../../../public/backend/css/style.css";


</script>



<template>

        <Header/>
                
		<Sidebar/>
				
	    <main>
		    <slot/>

		</main>

</template>