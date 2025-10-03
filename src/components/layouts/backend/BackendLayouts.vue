<script setup>

import Header from '../backend/Header.vue';
import Sidebar from '../backend/Sidebar.vue';



</script>



<template>

        <Header/>
                
		<Sidebar/>
				
	    <main>
		    <slot/>

		</main>

</template>