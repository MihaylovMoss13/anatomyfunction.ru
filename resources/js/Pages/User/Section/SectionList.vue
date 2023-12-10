<script setup>
import {Head, router, usePage} from "@inertiajs/vue3";
import Paginate from "@/Components/Paginate.vue";
import {ElNotification} from "element-plus";
import Link from "@/Components/Link.vue";
defineProps({
    sections: Object,
})

const sampleImage = [
    {
        id: 1,
        name: 'Sample 1',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU',
    },{
        id: 2,
        name: 'Sample 2',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU',
    },{
        id: 2,
        name: 'Sample 3',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU',
    }
];

const auth = usePage().props.auth;
</script>

<template>
        <Head title="Анатомия" />

        <div class="bg-white dark:bg-gray-900">
            <div class="mx-auto flex flex-col w-full px-4 sm:px-6 lg:px-8">
                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
                    <div v-for="section in sections.data" :key="section.id" class="shadow-lg rounded-lg p-4">
                        <el-carousel :interval="5000" trigger="click" class="rounded-lg">
                            <el-carousel-item  v-if="section.section_images.length" v-for="(pimg, index) in section.section_images" :key="index">
                                <img :src="pimg.image" :alt="section.title" class="h-20 w-20 object-cover object-center lg:h-full lg:w-full" />
                            </el-carousel-item>

                            <el-carousel-item v-else>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png" class="h-20 w-20 object-cover object-center lg:h-full lg:w-full" />
                            </el-carousel-item>
                        </el-carousel>

                        <div class="px-4 mt-4">
                            <div>
                                <Link :href="route('section.view', section.slug)" class="text-gray-900 font-semibold dark:text-gray-100">
                                <span aria-hidden="true" class="line-clamp-1">{{ section.name }}</span>
                            </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div data-aos="fade-left" class="mt-10 flex justify-end gap-3">
                    <Paginate :sections="sections"/>
                </div>
            </div>
        </div>
</template>
