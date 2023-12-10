<script setup>
import { ref } from 'vue';
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const props = defineProps({
    textData: Object,
});

const textArr = ref([]);

const splitText = () => {
    return props.textData.split('.\r\n');
}
</script>

<template>
    <Splide :options="{ type : 'loop', gap: '1rem', autoplay: true}" aria-label="My Favorite Images">
        <SplideSlide :key="index" v-for="(text, index) in splitText()">
            <div class="">
                <figure data-aos="fade-right" data-aos-duration="3000" class="max-w-screen-md mx-auto">
                    <p class="text-white dark:text-white">{{ text }}</p>
                </figure>
            </div>
        </SplideSlide>
    </Splide>
</template>

<style lang="scss">
.splide {
    &__arrow {
        top: 123%;
    }

    &__pagination {
        bottom: -2.4em;
    }
}
</style>
