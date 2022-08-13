import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import { useProgressStore } from '@/stores/progress.js';

describe('Progress Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    test('that the counter starts at zero', () => {
        const progress = useProgressStore()

        expect(progress.counter).toBe(0)
    })

    test('that the counter increments by 1', () => {
        const progress = useProgressStore()

        progress.increment()

        expect(progress.counter).toBe(1)
    })

    test('that the percentage is returned', () => {
        const progress = useProgressStore()
        progress.$patch({
            max: 10,
            counter: 5
        })

        expect(progress.percentage).toBe(50)
    })
})