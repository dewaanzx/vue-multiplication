<script>
import { useUserStore } from '@/stores/user.js'

export default {
  data() {
    return { 
      userStore: useUserStore(),
      angka1: 0,
      angka2: 0
    }
  },

  methods: {
    ubahAngka() {
      this.userStore.ubahHasilPerkalian(this.angka1, this.angka2);
    }
  },
}
</script>

<template>
	<div class="split-background min-h-screen flex flex-col items-center justify-center">
		<!-- Bagian atas dengan warna #EE9D0F -->
		<div class="h-1/2 flex items-center justify-center">
		</div>

		<div class="h-[50vh] bg-[#EE9D0F]">
			<img src="@/assets/background.png" alt="" class="w-full h-[50vh] object-cover absolute inset-0" />
		</div>
		<div class="absolute inset-0 bottom-0 left-0 flex justify-center items-center h-screen">
			<div class="w-[40%] rounded overflow-hidden shadow-lg bg-white">
				<div
					style="display: flex; justify-content: center; align-items: center; margin-top: 10%;">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
						<path
							d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"
							fill="rgba(238,157,15,1)"></path>
					</svg> <br> <br> <br>
				</div>
				<h2 class="text-2xl font-bold mb-4 text-center">Verification Berhasil</h2>

				<!-- Inputan pertama -->
				<div class="w-40 mx-auto">
					<input v-model.number="angka1" type="number" placeholder="Angka 1"
						class="w-full text-center bg-[#EE9D0F] text-white border-none rounded-lg p-1 text-lg">
				</div>

				<!-- Inputan kedua -->
				<div class="w-40 mx-auto mt-4">
					<input v-model.number="angka2" type="number" placeholder="Angka 2"
						class="w-full text-center bg-[#EE9D0F] text-white border-none rounded-lg p-1 text-lg">
				</div>

				<p class="mt-4 text-lg font-light text-center"> Hasilnya Adalah: {{ userStore.hasilPerkalian }} </p> <br>

				<div class="text-center">
					<button @click="ubahAngka" class="bg-primary text-white py-1 px-4 rounded-md">
						Kalikan Angka
					</button>
				</div>
				<br> <br>
			</div>
		</div>


	</div>
</template>
  
  
<style scoped>
.bg-primary {
	background: #EE9D0F;
}

.split-background {
	background: linear-gradient(to bottom, #EE9D0F 50%, #f1f3ff 50%);
	background-repeat: repeat, no-repeat;
	background-size: 100% 100%, auto;
	background-position: 0% 0%, center;
}

.background-image {
	position: absolute;
	top: 0;
	width: 100%;
	height: 50%;
	object-fit: cover;
}</style>