<script setup>

import Header from '../backend/Header.vue';
import Sidebar from '../backend/Sidebar.vue';

import "@/assets/backend/css/style.css"
// Backend JS assets (order matters)
import "@/assets/backend/js/plugins/popper.min.js"
import "@/assets/backend/js/plugins/bootstrap.min.js"
import "@/assets/backend/js/plugins/simplebar.min.js"
import "@/assets/backend/js/plugins/feather.min.js"
import "@/assets/backend/js/plugins/datepicker-full.min.js"
import "@/assets/backend/js/fonts/custom-font.js"


</script>



<template>

        <Header/>
                
		<Sidebar/>
				
	    <main>
		    <slot/>

		</main>

</template>