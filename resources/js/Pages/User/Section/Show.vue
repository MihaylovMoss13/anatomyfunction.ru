<script setup>
import 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js';
import { ref } from 'vue';
import FancyboxModal from '@/Components/Fancybox-Modal.vue';
import { Head, Link, router, usePage } from "@inertiajs/vue3";
import Text from "@/Pages/User/components/Text.vue";
import App from "@/Layouts/App.vue";

const props = defineProps({
    section: {
        type: Object,
    },
});

const viewTestBlock = ref(false);
const viewlink_videoBlock = ref(false);

const tabs = [
    {
        'name': 'Бедренный треугольник',
        'url': 'bedr-treug',
        'model': props.section.model_3D_leg_bedr_treug,
        'text': props.section.text_leg_bedr_treug,
    },
    {
        'name': 'Подколенная ямка',
        'url': 'podkol-yamk',
        'model': props.section.model_3D_leg_podkol_yamk,
        'text': props.section.text_leg_podkol_yamk,
    },
    {
        'name': 'Голень',
        'url': 'goleni',
        'model': props.section.model_3D_leg_goleni,
        'text': props.section.text_leg_goleni,
    }
];

// const handleTabLegClick = tab => activeTabLeg.value = tab;
</script>

<template>
    <App>
        <Head :title='`Блок "${props.section.name}"`' />

        <div class="flex items-center justify-between mb-6 lg:mb-14">
            <h1 class="text-[#591653] text-3xl lg:text-6xl font-bold">Блок "{{ props.section.name }}"</h1>

            <Link href="/" class="btn">
                назад
            </Link>
        </div>

        <div class="flex flex-wrap xl:flex-nowrap w-full">
            <div class="w-full lg:w-2/6">
                <ul class="left-menu flex flex-col md:max-w-md gap-y-4 lg:gap-y-8">
                    <li>
                        <a target="_blank" :href="props.section.link_images_schemes">2D рисунки и схемы</a>
                    </li>
                    <li>
                        <a target="_blank" :href="props.section.link_tables">Таблицы</a>
                    </li>
                    <li>
                        <a target="_blank" :href="props.section.link_mental_cards">Ментальные карты + скрэбл</a>
                    </li>
                    <li>
                        <a :href="props.section.link_test" class="cursor-pointer" target="_blank">Тесты</a>
                    </li>
                    <li>
                        <FancyboxModal :options="{}">
                            <a :href="props.section.link_video" class="cursor-pointer" data-fancybox>Видео</a>
                        </FancyboxModal>
                    </li>
                </ul>
            </div>

            <div class="w-full lg:w-4/6 md:pl-24 flex flex-col max-w-[860px]">
                <div v-if="section.name == 'Нога'">
                    <div class="tabs">
                        <div class="tab" v-for="(tab, index) in tabs" :key="index">
                            <input type="radio" name="css-tabs" :id="tab.url" v-if="tab.url == 'bedr-treug'" checked class="tab-switch">
                            <input type="radio" name="css-tabs" :id="tab.url" v-else class="tab-switch">

                            <label :for="tab.url" class="tab-label">
                                {{ tab.name }}
                            </label>

                            <div class="tab-content">
                                <model-viewer class="mb-7" :src="tab.model" camera-controls shadow-intensity="1" auto-rotate touch-action="pan-y"></model-viewer>

                                <Text :text-data="tab.text" />
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else class="relative h-96">
                    <div
                        v-for="(section, index) in section.section_models"
                        :key="index"
                    >
                        <model-viewer :src="section.model" camera-controls shadow-intensity="1" auto-rotate touch-action="pan-y" class="h-64"></model-viewer>
                    </div>

                    <Text class="pt-2" :text-data="section.text" />
                </div>

                <div v-if="viewTestBlock">
                    <!-- Online Test Pad Test Widget (#268445)-->
                    <iframe src="https://onlinetestpad.com/y56gfcp5m4sqw" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </App>
</template>

<style lang="scss">
.left-menu {
    @media only screen and (max-width: 768px) {
        flex-direction: row;
        padding-bottom: 8px;
        margin-bottom: 28px;
        column-gap: 1rem;
        overflow: auto;

        li {
            text-wrap: nowrap;
        }
    }

    li {
        display: flex;

        a {
            border-radius: 20px;
            background: linear-gradient(180deg, #93688E 0%, #591653 100%);

            @apply text-white text-lg lg:text-2xl font-bold transition py-5 px-7 w-full text-center;

            &:hover, &.active {
                background: linear-gradient(180deg, #591653 0%, #93688E 100%);
            }
        }
    }
}

.btn {
    background: linear-gradient(180deg, #93688E 0%, #591653 100%);

    @apply text-white text-lg lg:text-2xl rounded-[20px] font-bold transition py-5 px-7 text-center;

    &:hover {
        background: linear-gradient(180deg, #591653 0%, #93688E 100%);
    }
}

model-viewer {
    @apply h-80 w-full;
}

* { box-sizing: border-box; }

.tabs {
    min-height: 860px;
    position: relative;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        border-top: 1px solid;
        padding-top: 35px;
        display: flex;
    }

    &::before,
    &::after {
        content: "";
        display: table;
    }

    &::after {
        clear: both;
    }

    .tab {
        display: flex;
        float: left;

        &-label {
            background: linear-gradient(180deg, #93688E 0%, #591653 100%);
            border-radius: 20px;

            @apply text-white text-base lg:text-xl font-bold transition py-5 px-7 w-full text-center;

            &:hover, &.active {
                background: linear-gradient(180deg, #591653 0%, #93688E 100%);
                top: -0.25rem;
            }
        }

        &-content {
            color: #FFF;
            position: absolute;
            padding-top: 1.618rem;
            padding-bottom: 1.618rem;
            height: auto;
            top: 4.45em;
            width: 100%;
            z-index: 1;
            opacity: 0;
            left: 0;
            transition: all 0.35s;

            @media (max-width: 768px) {
                top: 17em;
            }
        }
    }

    .tab-switch {
        display: none;

        &:checked + .tab-label {
            background: linear-gradient(180deg, #591653 0%, #93688E 100%);
            border-bottom: 0;
            top: -0.0625rem;
            z-index: 2;
            transition: all 0.35s;

            &:hover {
                background: linear-gradient(180deg, #591653 0%, #93688E 100%);
                top: -0.0625rem;
            }
        }

        &:checked + .tab-label + .tab-content {
            opacity: 1;
            z-index: 3;
            transition: all 0.35s;
        }
    }

    .tab + .tab {
        .tab-label {
            @media only screen and (min-width: 768px) {
                margin-left: 1rem;
            }

            @media (max-width: 768px) {
                margin-top: 20px;
            }
        }
    }
}

.carousel {
    &__item {
        min-height: 200px;
        width: 100%;
        color: var(--vc-clr-white);
        font-size: 20px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__slide {
        padding: 10px;
    }

    &__prev,
    &__next {
        box-sizing: content-box;
        border: 2px solid #FFF;
        border-radius: 20px;
        top: 98%;
    }

    &__prev {
        @apply left-4 md:left-1/3;
    }

    &__next {
        @apply right-4 md:right-1/3;
    }

    &__icon {
        fill: #FFF;
    }
}
</style>
