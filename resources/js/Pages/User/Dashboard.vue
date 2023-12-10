<script setup>
import App from "@/Layouts/App.vue";
import Banner from "@/Pages/User/components/Banner.vue";
</script>

<template>
    <Head title="Личный кабинет" />
    <App>
        <Banner/>
        <div class="block py-10 h-auto">
            <div class="mx-auto mt-2 max-w-screen-lg px-2">
                <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
                    <p class="flex-1 text-base font-bold text-gray-900">Latest Order</p>

                    <div class="mt-4 sm:mt-0">
                        <div class="flex items-center justify-start sm:justify-end">
                            <div class="flex items-center">
                                <label for="" class="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"> Sort by: </label>
                                <select name="" class="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm">
                                    <option class="whitespace-no-wrap text-sm">Recent</option>
                                </select>
                            </div>

                            <button type="button" class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
                                <svg class="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" class=""></path>
                                </svg>
                                Export to CSV
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mt-6 overflow-hidden rounded-xl border shadow">
                    <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                        <thead class="hidden border-b lg:table-header-group">
                        <tr class="">
                            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Product</td>

                            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6"></td>
                        </tr>
                        </thead>
                    </table>
                </div>

            </div>

        </div>
    </App>
</template>
