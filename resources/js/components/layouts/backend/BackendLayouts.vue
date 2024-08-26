<script >

import Header from '../backend/Header.vue';
import Sidebar from '../backend/Sidebar.vue';

export default{
	name : 'BackendLayouts',
	components:{
		Header,
		Sidebar,
	}
};

</script>



<template>
	   
	<!-- [ Pre-loader ] start -->
<div class="loader-bg">
  <div class="loader-track">
    <div class="loader-fill"></div>
  </div>
</div>
    <!-- [ Pre-loader ] End -->

        <Header/>
                
		<Sidebar/>
				
	    <main>
		    <slot/>

		</main>

</template>