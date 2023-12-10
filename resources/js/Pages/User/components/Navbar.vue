<script setup>
import {computed, onMounted} from 'vue'
import { initFlowbite } from 'flowbite'
import { Link, usePage } from '@inertiajs/vue3';
import { useDark, useToggle } from '@vueuse/core';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import {Moon, Sunny} from "@element-plus/icons-vue";

// initialize components based on data attribute selectors
onMounted(() => {
    // initFlowbite();
})

const canLogin = usePage().props.canLogin;
const canRegister = usePage().props.canRegister;
const auth = usePage().props.auth;

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <nav class="bg-white dark:bg-gray-800 fixed w-full z-20 top-0 start-0 scroll-smooth dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link :href="route('home')" class="flex items-center space-x-3  rtl:space-x-reverse">
                <ApplicationLogo />
            </Link>
            <div v-if="canLogin" class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <el-switch
                   v-model="isDark"
                   class="mr-3 mt-1 cursor-pointer"
                   :active-action-icon="Moon"
                   style="&#45;&#45;el-switch-on-color: #13ce66; &#45;&#45;el-switch-off-color: #427D9D"
                   :inactive-action-icon="Sunny"
                />
                <button @click="toggleDark()" type="button" class="focus:outline-none font-medium rounded-full font-semibold text-sm px-3 text-center inline-flex items-center mr-4" :class="isDark ? 'text-gray-100' : 'text-yellow-500'">
                    <el-icon v-if="isDark" :size="20"><Moon /></el-icon>
                    <el-icon v-else :size="20"><Sunny /></el-icon>
                </button>

                <button v-if="auth.user" type="button"
                        class="flex mr-3 mt-2 text-sm rounded-full md:mr-0"
                        id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                        data-dropdown-placement="bottom">
                    <span class="mr-2 capitalize md:block hidden mt-0.5">{{auth.user.name}}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>

                <div v-else class="flex">
                    <Link :href="route('login')" type="button"
                          class="hidden lg:block text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1 mt-2 text-center me-2 mb-2">
                        Войти</Link>
                    <Link :href="route('register')" v-if="canRegister" type="button"
                          class="hidden lg:block text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-1 mt-2 text-center me-2 mb-2">
                        Зарегистрироваться</Link>
                </div>
                <div v-if="auth.user"
                     class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                     id="user-dropdown">
                    <div class="px-4 py-3">
                        <span class="block text-sm text-gray-900 dark:text-white">{{ auth.user.name }}</span>
                        <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{{ auth.user.email }}</span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <Link :href="route('dashboard')"
                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                Админ.Панель</Link>
                        </li>
                        <li>
                            <Link :href="route('profile.edit')"
                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                Профиль
                            </Link>
                        </li>
                        <li>
                            <Link :href="route('logout')" method="post" as="button"
                                  class="flex px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                Выйти
                            </Link>
                        </li>
                    </ul>
                </div>
                <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
        </div>
    </nav>

</template>


