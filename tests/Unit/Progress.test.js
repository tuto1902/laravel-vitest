import Progress from '@/components/Progress.vue';
import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test, vitest } from 'vitest';
import { useProgressStore } from '@/stores/progress';

describe('Progress.vue', () => {
    let wrapper = null

    beforeEach(() => {
        wrapper = mount(Progress, {
            global: {
                plugins: [createTestingPinia({
                    createSpy: vitest.fn
                })]
            }
        })
    })

    test('that it displays the percentage', () => {
        expect(wrapper.find('#percentage').text()).toBe('0 %')
    })

    test('that it increments the progress', () => {
        const progress = useProgressStore()

        wrapper.find('#increment-btn').trigger('click')

        expect(progress.increment).toHaveBeenCalledOnce()
    })
})