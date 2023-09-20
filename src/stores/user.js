import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return { 
      hasilPerkalian: 0 
    }
  },
  actions: {
    ubahHasilPerkalian(angka1, angka2) { 
		const hasil=angka1 * angka2;
      this.hasilPerkalian = hasil;
    },
  }
})
