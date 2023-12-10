<script setup>
import 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js';
import { ref, watch } from 'vue';
import { router, usePage, useForm } from "@inertiajs/vue3";
import { Plus } from '@element-plus/icons-vue';
import { ElNotification, ElMessage, ElMessageBox, ElSwitch } from 'element-plus';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import Pagination from "@/Components/Pagination.vue";

defineProps({
    users: Object,
});

const users = usePage().props.users;
const searchValue = usePage().props.search;
const isAddUser = ref(false);
const isEditUser = ref(false);
const dialogVisible = ref(false);

//search
const search = ref(searchValue);
watch(search, (value) => {
    router.get(
        "/admin/user/index",
        {search: value},
        {preserveState: false},
    );
});

const form = useForm({
    name: '',
    email: '',
    isAdmin: '',
    password: '',
    password_confirmation: '',
});

//open add modal
const openAddModal = () => {
    isAddUser.value = true;
    isEditUser.value = false;
    dialogVisible.value = true;
}

//add user method
const AddUser = async () => {
    try {
        await form.post(route('admin.user.store'), {
            onSuccess: page => {
                ElNotification({
                    title: 'Успешно',
                    message: page.props.flash.success,
                    type: 'success',
                });
                dialogVisible.value = false;
            },

            onFinish: () => form.reset('password', 'password_confirmation'),
        });
    } catch (err) {
        ElNotification({
            title: 'Произошла ошибка',
            message: err,
            type: 'error',
        });

        console.log(err);
    }
}

const openEditModal = (user) => {
    form.id = user.id;
    form.name = user.name;
    form.email = user.email;
    form.isAdmin = user.isAdmin;
    form.password = user.password;
    form.password_confirmation = user.password_confirmation;

    isEditUser.value = true;
    isAddUser.value = false;
    dialogVisible.value = true;
}

const updateUser = async () => {
    try {
        await form.post(route('admin.user.update/' + form.id.value), {
            onSuccess: (page) => {
                dialogVisible.value = false;

                ElNotification({
                    title: 'Успешно',
                    message: page.props.flash.success,
                    type: 'success',
                });
            }
        })
    } catch (err) {
        console.log(err);
    }
}

//delete user method
const deleteUser = (user, index) => {
    Swal.fire({
        title: 'Вы точно хотите удалить?',
        text: "Действие не удатся вернуть!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Нет',
        confirmButtonText: 'Удалить!'
    }).then((result) => {
        if (result.isConfirmed) {
            try {
                router.delete('destroy/' + user.id, {
                    onSuccess: (page) => {
                        Swal.fire({
                            toast: true,
                            icon: "success",
                            position: "top-end",
                            showConfirmButton: false,
                            title: page.props.flash.success
                        });
                    }
                });
            } catch (err) {
                console.log(err);
            }
        }
    });
}

const clearEditForm = () => {
    if (isEditUser.value == true) {
        if (dialogVisible.value == false) {
            isEditUser.value = false;

            form.reset();
        }
    }
}

watch(clearEditForm());
</script>

<template>
    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <!-- Start modal -->
        <el-dialog
            v-model="dialogVisible"
            class="text-gray-800 dark:bg-gray-800 dark:text-gray-200"
            width="80%"
        >
            <form @submit.prevent="isEditUser ? updateUser() : AddUser()">
                <div class="flex justify-between">
                    <h3 class="text-lg text-gray-800 dark:text-white mb-6">{{ isEditUser ? 'Редактировать пользователя' : 'Добавить пользователя' }}</h3>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div class="mb-7">
                        <InputLabel for="name" value="Логин" />

                        <TextInput
                            id="name"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.name"
                            required
                            autofocus
                            autocomplete="name"
                        />

                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>

                    <div class="mb-7">
                        <InputLabel for="email" value="E-mail" />

                        <TextInput
                            id="email"
                            type="email"
                            class="mt-1 block w-full"
                            v-model="form.email"
                            required
                            autocomplete="username"
                        />

                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div class="mb-7">
                        <InputLabel for="password" value="Пароль" />

                        <TextInput
                            id="password"
                            type="password"
                            class="mt-1 block w-full"
                            v-model="form.password"
                            required
                            autocomplete="new-password"
                        />

                        <InputError class="mt-2" :message="form.errors.password" />
                    </div>

                    <div class="mb-7">
                        <InputLabel for="password_confirmation" value="Повторите пароль" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            class="mt-1 block w-full"
                            v-model="form.password_confirmation"
                            required
                            autocomplete="new-password"
                        />

                        <InputError class="mt-2" :message="form.errors.password_confirmation" />
                    </div>
                </div>

                <div class="flex w-full justify-end items-center gap-4">
                    <button type="button" @click="dialogVisible = false" class="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-dark dark:hover:bg-slate-900 dark:focus:ring-black">Отменить</button>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Добавить пользователя</button>
                </div>
            </form>
        </el-dialog>
        <!-- End modal -->

        <div class="max-w-screen-xl px-2 bg-gray-50 dark:bg-gray-900">
            <!-- Start coding here -->
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 bg-gray-50 dark:bg-gray-900">
                    <!-- Start from search -->
                    <div class="w-full md:w-1/2">
                        <label for="simple-search" class="sr-only">Поиск</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>

                            <input type="text" v-model.lazy="search" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Поиск">
                        </div>
                    </div>
                    <!-- end form search -->

                    <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <!-- Start button add user -->
                        <button type="button" @click="openAddModal" class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                            <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                            </svg>

                            Добавить пользователя
                        </button>
                        <!-- end button add user -->
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-4 py-3">#</th>
                                <th scope="col" class="px-4 py-3">Логин</th>
                                <th scope="col" class="px-4 py-3">E-mail</th>
                                <th scope="col" class="px-4 py-3">Роль пользователя</th>
                                <th scope="col" class="px-4 py-3">
                                    <span class="sr-only">Действия</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in users.data" :key="user.id" class="border-b dark:border-gray-700">
                                <td class="px-4 py-3">{{ index+1 }}</td>
                                <td class="px-4 py-3">{{ user.name }}</td>
                                <td class="px-4 py-3">{{ user.email }}</td>
                                <td class="px-4 py-3">
                                    <span v-if="user.isAdmin == 1" class="bg-blue-100 text-blue-800 flex w-20 justify-center items-center text-xs font-medium me-2 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">Админ</span>
                                    <span v-else class="bg-yellow-100 text-yellow-800 text-xs flex w-20 justify-center items-center font-medium me-2 px-2 py-1 rounded dark:bg-yellow-900 dark:text-yellow-300">Клиент</span>
                                </td>
                                <td class="px-4 py-3 flex items-center justify-end">
                                    <button :id="`${user.id}-button`" :data-dropdown-toggle="`${user.id}`"
                                            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button">
                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                        </svg>
                                    </button>

                                    <div :id="`${user.id}`"
                                         class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                            :aria-labelledby="`${user.id}-button`">

                                            <li>
                                                <a href="#" @click="openEditModal(user)"
                                                   class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Изменить пользователя</a>
                                            </li>
                                        </ul>
                                        <div class="py-1">
                                            <a href="#" @click="deleteUser(user, index)" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Удалить</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="mt-4 py-4 px-10">
                        <Pagination :data="users"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.swal2-container:not(.swal2-in) {
    pointer-events: all;
}
</style>
