<script setup>
import {onMounted, onUnmounted, ref} from 'vue'
import { initFlowbite } from 'flowbite'
import Navbar from "@/Pages/User/components/Navbar.vue";
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
import AOS from "aos";
import { Top } from "@element-plus/icons-vue";

// initialize components based on data attribute selectors
onMounted(() => {
    // initFlowbite();
    AOS.init();
})

const isHidden = ref(true)

const handleScroll = () => {
    if (window.pageYOffset > 500) {
        isHidden.value = false;
    } else {
        isHidden.value = true;
    }
}

defineProps({
    classList: {
        type: String
    },

    svgClassList: {
        type: String
    },

    textClassList: {
        type: String
    },
});

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const svgClasses = ref('w-20 md:w-32 2xl:w-40');

const textClasses = ref('md:text-5xl 2xl:text-7xl');
</script>

<template>
    <main class="relative sm:flex sm:justify-center sm:items-center selection:bg-red-500 selection:text-white" @scroll="handleScroll">
        <div class="mx-auto p-6 lg:p-8 w-full">
            <transition
                name="fade"
                mode="out-in"
                appear
            >
                <ApplicationLogo :classList="classList" :svgClassList="svgClasses" :textClassList="textClasses" />
            </transition>

            <div class="2xl:py-16 py-8 pb-4">
                <transition-group name="fade" mode="out-in" appear>
                    <slot />
                </transition-group>
            </div>
        </div>

        <div class="fixed -bottom-6 right-0 p-4 m-20">
            <button @click="scrollToTop" :class="['bg-blue-600 hover:bg-blue-700 rounded-full px-3 py-3 transition ease-in-out duration-150 hover:mb-1 animate-pulse', { hidden: isHidden }]">
                <span class="justify-center flex items-center text-white">
                    <el-icon><Top /></el-icon>
                </span>
            </button>
        </div>
    </main>
</template>

<style>
.transform-enter-active,
.transform-leave-active {
    transform: translateX(0);
    transition: all .1s ease;
}

.transform-enter-from,
.transform-leave-to {
    transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
    opacity: 1;
    transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
