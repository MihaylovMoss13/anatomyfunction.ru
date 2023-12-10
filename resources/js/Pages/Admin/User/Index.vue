<script setup>
import { Head } from "@inertiajs/vue3";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import UserList from "@/Pages/Admin/User/UserList.vue";

defineProps({
    users: Object,
});
</script>

<template>
    <AdminLayout>
        <Head title="Пользователи" />

        <UserList :users="users"></UserList>
    </AdminLayout>
</template>
