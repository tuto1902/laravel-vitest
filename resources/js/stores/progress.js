import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProgressStore = defineStore('progress', () => {
    const counter = ref(0)
    const max = ref(100)

    const increment = () => {
        counter.value++
    }

    const percentage = computed({
        get() {
            return Math.round((counter.value / max.value) * 100)
        }
    })

    return {
        counter,
        max,
        increment,
        percentage
    }
})