<script setup>
import App from "@/Layouts/App.vue";
import {Head, usePage} from "@inertiajs/vue3";
import {Splide, SplideSlide} from "@splidejs/vue-splide";
import { ref } from 'vue';
import Link from "@/Components/Link.vue"

defineProps({
    sections: {
        type: Array,
        required: true,
    },
});

const showSection = (slug) => route('section.view', slug);

const svgClasses = ref('w-20 md:w-32 2xl:w-40');

const textClasses = ref('md:text-5xl 2xl:text-7xl');
</script>

<template>
    <App classList="justify-center" :svgClassList="svgClasses" :textClassList="textClasses">
        <Head title="Главная" />

        <h3 class="text-white font-bold 2xl:text-4xl text-3xl 2xl:mb-20 mb-12">
            Выберите интересующий вас блок для изучения:
        </h3>

        <div class="sectionsList grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 2xl:gap-24">
            <Link
                :href="showSection(section.slug)"
                :key="section.id"
                v-for="section in sections.data"
                data-aos="fade-up"
                class="py-0 border-0 text-white focus:text-white focus:bg-transparent"
            >
                <div class="section_img" v-if="section.section_images.length >= 1">
                    <img :src="section.section_images[0].image" />
                </div>

                <div class="section_img" v-else>
                    <img src="/images/no_image.jpg" />
                </div>

                <h2 class="mt-6 2xl:text-5xl text-3xl font-bold text-white justify-center flex">{{ section.name }}</h2>
            </Link>
        </div>
    </App>
</template>

<style lang="scss">
.sectionsList {
    a {
        &:hover {
            .section_img {
                border: 5px solid #84357C;

                &::after {
                    content: "";
                    background: rgba(0, 0, 0, 0.40);
                    border-radius: 20px;
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    z-index: 1;
                    left: 0;
                    top: 0;
                }
            }
        }

        .section_img {
            transition: all .3s ease-in-out;
            border-radius: 20px;
            position: relative;
            overflow: hidden;
            max-width: 350px;

            img {
                border-radius: 20px;
            }
        }
    }
}
</style>
