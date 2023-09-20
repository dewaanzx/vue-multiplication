// stores/counter.js
import { ref } from "vue";

import {
	defineStore
} from 'pinia';

export const useCounterStore = defineStore('counter', () => {
	const namaku = ref("");
	  
		function tambahNama(namabaru) {
		  namaku.value = namabaru;
		}
	  
		return { namaku, tambahNama };
	  
});