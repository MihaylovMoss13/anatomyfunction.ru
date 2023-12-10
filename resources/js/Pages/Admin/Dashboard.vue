<script setup>
import {computed} from "vue";
import {usePage} from "@inertiajs/vue3";
import AdminLayout from "@/Layouts/AdminLayout.vue";

defineProps({
    section: Number,
})
</script>

<template>
    <AdminLayout>
        <Head title="Admin Dashboard" />
        <div class="flex-1 px-4 mt-10">
            <div class="mb-6 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 xl:grid-cols-4">
                <!-- Time On-Site -->
                <div class="bg-gradient-to-r from-blue-500 to-blue-400 p-4 rounded-lg">
                    <div class="mt-5 flex justify-center items-center mb-4">
                        <div class="text-3xl font-bold">{{ section }}</div>
                    </div>
                    <div class="flex w-full justify-center items-center flex-col">
                        <div class="text-xl font-semibold">Части тела</div>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
