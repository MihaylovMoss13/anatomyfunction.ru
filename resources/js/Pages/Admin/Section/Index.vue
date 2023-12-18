<script setup>
import {Head} from "@inertiajs/vue3";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import SectionList from "@/Pages/Admin/Section/SectionList.vue";

defineProps({
    sections: Object,
})

</script>

<template>
    <AdminLayout>
            <Head title="Часть тела" />

            <SectionList :sections="sections"  :brands="brands"></SectionList>
    </AdminLayout>
</template>
