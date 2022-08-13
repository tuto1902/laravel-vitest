<template>
    <main>
        <div id="percentage">{{ progress.percentage }} %</div>
        <button id="increment-btn" @click="progress.increment()">+1</button>
    </main>
</template>

<script>
import { useProgressStore } from '@/stores/progress';
export default {
    setup() {
        const progress = useProgressStore()

        return {
            progress
        }
    }
}
</script>