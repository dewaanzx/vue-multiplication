<script setup>
import { useUserStore } from "@/stores/user.js";
import { ref } from "vue";

const store = useUserStore();
const nameInput = ref("");

const handleSubmit = () => {
	store.gantiNama(nameInput.value);
	nameInput.value = "";
};
</script>