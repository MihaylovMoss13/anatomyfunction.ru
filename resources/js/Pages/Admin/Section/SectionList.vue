<script setup>
import 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js';
import {ref, watch } from 'vue';
import {router, usePage} from "@inertiajs/vue3";
import { Plus } from '@element-plus/icons-vue';
import { ElNotification, ElMessage, ElMessageBox } from 'element-plus';
// import type { UploadProps, UploadUserFile } from 'element-plus';
import Pagination from "@/Components/Pagination.vue";

defineProps({
    sections: Object,
});

const sections = usePage().props.sections;
const searchValue = usePage().props.search;
const isAddSection = ref(false);
const isEditSection = ref(false);
const dialogVisible = ref(false);

// upload multiple images
const sectionImages = ref([]);
const dialogImageUrl = ref('');
const dialogPreviewImg = ref(false);
const handleFileChange = (file) => {
    sectionImages.value.push(file);
}

const handlePictureCardPreview = (file) => {
    dialogImageUrl.value = file.url;
    dialogPreviewImg.value = true;
}

const handleRemove = (file) => {
    console.log(file);
}

// upload multiple models
const sectionModels = ref([]);
const dialogModelUrl = ref('');
const dialogPreviewMdl = ref(false);
const handleFileModelChange = (file) => {
    sectionModels.value.push(file);
}

const handleModelPreview = (file) => {
    dialogModelUrl.value = file.url;
    dialogPreviewMdl.value = true;
}

const model3DLegBedrTreug = ref(null);
const handleFileModelLegBedrTreugChange = (model) => {
    model3DLegBedrTreug.value = {
        'name': model.name,
        'url': model.raw
    };
}

const model3DLegPodkolYamk = ref(null);
const handleFileModelLegPodkolYamkChange = (file) => {
    model3DLegPodkolYamk.value = file;
}

const model3DLegGoleni = ref(null);
const handleFileModelLegGoleniChange = (file) => {
    model3DLegGoleni.value = file;
}

const handleModelRemove = (file) => {
    console.log(file);
}

const search = ref(searchValue);
watch(search, (value) => {
    router.get(
        "/admin/section/index",
        { search: value },
        { preserveState: false },
    );
});

// formData Section
const id = ref('');
const name = ref('');
const text = ref('');
const text_leg_bedr_treug = ref('');
const text_leg_podkol_yamk = ref('');
const text_leg_goleni = ref('');
const model_3D_leg_bedr_treug = ref('');
const model_3D_leg_podkol_yamk = ref('');
const model_3D_leg_goleni = ref('');
const is_published = ref(1);
const link_images_schemes = ref('');
const link_tables = ref('');
const link_mental_cards = ref('');
const link_test = ref('');
const link_video = ref('');
const section_images = ref([]);
const section_models = ref([]);

// open add modal
const openAddModal = () => {
    isAddSection.value = true;
    isEditSection.value = false;
    dialogVisible.value = true;

    resetFormData();
}

// add Section method
const AddSection = async () => {
    const formData = new FormData();
    formData.append('name',                     name.value);
    formData.append('text',                     text.value);
    formData.append('text_leg_bedr_treug',      text_leg_bedr_treug.value);
    formData.append('text_leg_podkol_yamk',     text_leg_podkol_yamk.value);
    formData.append('text_leg_goleni',          text_leg_goleni.value);
    formData.append('is_published',             is_published.value);
    formData.append('link_images_schemes',      link_images_schemes.value);
    formData.append('link_tables',              link_tables.value);
    formData.append('link_mental_cards',        link_mental_cards.value);
    formData.append('link_test',                link_test.value);
    formData.append('link_video',               link_video.value);

    // Append Section Leg models to Form Data
    formData.append('model_3D_leg_bedr_treug',  model3DLegBedrTreug.value === null ? '' : model3DLegBedrTreug.value.url);
    formData.append('model_3D_leg_podkol_yamk', model3DLegPodkolYamk.value === null ? '' : model3DLegBedrTreug.value.url);
    formData.append('model_3D_leg_goleni',      model3DLegGoleni.value === null ? '' : model3DLegBedrTreug.value.url);

    // Append section images to the FormData
    for (const image of sectionImages.value) {
        formData.append('section_images[]', image.raw);
    }

    // Append section models to the FormData
    for (const model of sectionModels.value) {
        formData.append('section_models[]', model.raw);
    }

    try {
        await router.post('store', formData, {
            onSuccess: page => {
                ElNotification({
                    title: 'Успешно',
                    message: page.props.flash.success,
                    type: 'success',
                });

                dialogVisible.value = false;
                resetFormData();
            },
        })
    } catch (err) {
        console.log(err);
    }
}

const resetFormData = () => {
    id.value                    = '';
    name.value                  = '';
    text.value                  = '';
    text_leg_bedr_treug.value   = '';
    text_leg_podkol_yamk.value  = '';
    text_leg_goleni.value       = '';
    model3DLegBedrTreug.value   = null;
    model3DLegPodkolYamk.value  = null;
    model3DLegGoleni.value      = null;
    is_published.value          = '';
    link_images_schemes.value   = '';
    link_tables.value           = '';
    link_mental_cards.value     = '';
    link_test.value             = '';
    link_video.value            = '';

    section_images.value        = [];
    sectionImages.value         = [];

    section_models.value        = [];
    sectionModels.value         = [];

    dialogImageUrl.value        = '';
};

const openEditModal = (section) => {
    id.value                    = section.id;
    name.value                  = section.name;
    text.value                  = section.text;
    text_leg_bedr_treug.value   = section.text_leg_bedr_treug;
    text_leg_podkol_yamk.value  = section.text_leg_podkol_yamk;
    text_leg_goleni.value       = section.text_leg_goleni;
    is_published.value          = section.is_published;
    link_images_schemes.value   = section.link_images_schemes;
    link_tables.value           = section.link_tables;
    link_mental_cards.value     = section.link_mental_cards;
    link_test.value             = section.link_test;
    link_video.value            = section.link_video;

    section_images.value            = section.section_images;

    sectionModels.value             = section.section_models;
    section_models.value            = section.section_models;

    model3DLegBedrTreug.value       = section.model_3D_leg_bedr_treug;
    model_3D_leg_bedr_treug.value   = section.model_3D_leg_bedr_treug;

    model3DLegPodkolYamk.value      = section.model_3D_leg_podkol_yamk;
    model_3D_leg_podkol_yamk.value  = section.model_3D_leg_podkol_yamk;

    model3DLegGoleni.value          = section.model_3D_leg_goleni;
    model_3D_leg_goleni.value       = section.model_3D_leg_goleni;

    isEditSection.value = true;
    isAddSection.value = false;
    dialogVisible.value = true;
}

// delete image from section image
const deleteImage = async (pimage, index) => {
    try {
        await router.delete('/admin/section/image/' + pimage.id, {
            onSuccess: (page) => {
                section_images.value.splice(index, 1);

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

// delete model from section model
const deleteModel = async (pmodel, index) => {
    try {
        await router.delete('/admin/section/model/' + pmodel.id, {
            onSuccess: (page) => {
                section_models.value.splice(index, 1);

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

const updateSection = async () => {
    const formData  = new FormData();
    formData.append('name',                     name.value);
    formData.append('text',                     text.value);
    formData.append('text_leg_bedr_treug',      text_leg_bedr_treug.value);
    formData.append('text_leg_podkol_yamk',     text_leg_podkol_yamk.value);
    formData.append('text_leg_goleni',          text_leg_goleni.value);
    formData.append('is_published',             is_published.value);
    formData.append('link_images_schemes',      link_images_schemes.value);
    formData.append('link_tables',              link_tables.value);
    formData.append('link_mental_cards',        link_mental_cards.value);
    formData.append('link_test',                link_test.value);
    formData.append('link_video',               link_video.value);
    formData.append('model_3D_leg_bedr_treug',  model3DLegBedrTreug.value === null ? '' : model3DLegBedrTreug.value.url);
    formData.append('model_3D_leg_podkol_yamk', model3DLegPodkolYamk.value === null ? '' : model3DLegPodkolYamk.value.url);
    formData.append('model_3D_leg_goleni',      model3DLegGoleni.value === null ? '' : model3DLegGoleni.value.url);
    formData.append('_method', 'PUT');

    // Append section images to the FormData
    for (const image of sectionImages.value) {
        formData.append('section_images[]', image.raw);
    }

    // Append section models to the FormData
    for (const model of sectionModels.value) {
        formData.append('section_models[]', model.raw);
    }

    try {
        await router.post('update/' + id.value, formData, {
            onSuccess: (page) => {
                dialogVisible.value = false;

                resetFormData();

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

//delete section method
const deleteSection = (section, index) => {
    Swal.fire({
        title: 'Are you Sure',
        text: "This actions cannot undo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes, delete!'
    }).then((result) => {
        if (result.isConfirmed) {
            try {
                router.delete('destroy/' + section.id, {
                    onSuccess: (page) => {
                        this.delete(section, index);

                        Swal.fire({
                            toast: true,
                            icon: "success",
                            position: "top-end",
                            showConfirmButton: false,
                            title: page.props.flash.success
                        });
                    }
                })
            } catch (err) {
                console.log(err);
            }
        }
    });
}

const tabLeg = ref([
    {
        name: 'Бедренный треугольник',
        text: 'text_leg_bedr_treug',
    },
    {
        name: 'Подколенная ямка',
        text: 'text_leg_podkol_yamk',
    },
    {
        name: 'Голень',
        text: 'text_leg_goleni',
    }
]);

const selectedTabLeg = ref();

const handleLegClick = tab => selectedTabLeg.value = tab;
</script>

<template>
    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <!-- Start modal -->
        <el-dialog
            v-model="dialogVisible"
            class="text-gray-800 dark:bg-gray-800 dark:text-gray-200"
            width="80%"
        >
            <h3 class="text-lg text-gray-800 dark:text-white mb-6">{{ isEditSection ? 'Редактировать часть тела' : 'Добавить часть тела' }}</h3>

            <form @submit.prevent="isEditSection ? updateSection() : AddSection()">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div class="md:mb-6">
                        <label for="form_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Заголовок</label>
                        <input v-model="name" type="text" id="form_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Заголовок" required>
                    </div>

                    <div class="md:mb-6">
                        <label for="form_link_images_schemes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ссылка на схемы</label>
                        <input type="text" v-model="link_images_schemes" id="form_link_images_schemes" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ссылка на схемы" required>
                    </div>

                    <div class="mb-6">
                        <label for="form_link_tables" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ссылка на таблицу</label>
                        <input v-model="link_tables" type="text" id="form_link_tables" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ссылка на таблицу" required>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div class="md:mb-6">
                        <label for="form_link_mental_cards" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ссылка на ментальную карту</label>
                        <input type="text" v-model="link_mental_cards" id="form_link_mental_cards" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ссылка на ментальную карту" required>
                    </div>

                    <div class="md:mb-6">
                        <label for="form_link_test" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ссылка на тест</label>
                        <input v-model="link_test" type="text" id="form_link_test" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ссылка на тест" required>
                    </div>

                    <div class="mb-6">
                        <label for="form_link_video" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ссылка на Youtube видео</label>
                        <input type="text" v-model="link_video" id="form_link_video" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ссылка на Youtube видео" required>
                    </div>
                </div>

                <div v-if="name == 'Нога'" class="">
                    <el-tabs v-model="selectedTabLeg" class="left-menu" type="card" @tab-click="handleLegClick">
                        <el-tab-pane
                            v-for="(tab, index) in tabLeg"
                            :label="tab.name"
                            :name="tab.name"
                            :key="index"
                        >
                            <div v-if="tab.text == 'text_leg_bedr_treug'" class="mb-6">
                                <textarea
                                    type="text"
                                    v-model="text_leg_bedr_treug"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    rows="10"
                                    :placeholder="`Описание к модели ${tab.name}`"
                                    required
                                />

                                <!-- multiple models upload -->
                                <div class="grid md:gap-6">
                                    <div class="relative z-0 w-full mb-6 mt-4 group">
                                        <label for="form_model">3D модель Бедренный треугольник</label>

                                        <el-upload
                                            class="upload-demo"
                                            :on-change="handleFileModelLegBedrTreugChange"
                                            :on-preview="handleModelPreview"
                                            :limit="1"
                                        >
                                            <el-button type="primary">Кликните, чтоб загрузить</el-button>

                                            <template #tip>
                                                <div class="el-upload__tip">
                                                    только модели формата.glb
                                                </div>
                                                <p v-if="model3DLegBedrTreug !== null" class="el-upload__tip">
                                                    Загружен файл - {{ model3DLegBedrTreug }}
                                                </p>
                                                <p v-else>Файл не загружен</p>
                                            </template>
                                        </el-upload>
                                    </div>
                                </div>
                            </div>

                            <div v-else-if="tab.text == 'text_leg_podkol_yamk'" class="mb-6">
                                <textarea
                                    type="text"
                                    v-model="text_leg_podkol_yamk"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    rows="10"
                                    placeholder="Описание к  модели подколенная ямка"
                                    required
                                />

                                <!-- multiple models upload -->
                                <div class="grid md:gap-6">
                                    <div class="relative z-0 w-full mb-6 mt-4 group">
                                        <label for="form_model">3D модель Подколенная ямка</label>

                                        <el-upload
                                            class="upload-demo"
                                            :on-change="handleFileModelLegPodkolYamkChange"
                                            :on-preview="handleModelPreview"
                                            :limit="1"
                                        >
                                            <el-button type="primary">Кликните, чтоб загрузить</el-button>

                                            <template #tip>
                                                <div class="el-upload__tip">
                                                    только модели формата.glb
                                                </div>
                                                <p v-if="model3DLegBedrTreug.length > 0" class="el-upload__tip">
                                                    Загружен файл - {{ model3DLegPodkolYamk }}
                                                </p>
                                                <p v-else>Файл не загружен</p>
                                            </template>
                                        </el-upload>
                                    </div>
                                </div>
                            </div>

                            <div v-else class="mb-6">
                                <textarea
                                    type="text"
                                    v-model="text_leg_goleni"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    rows="10"
                                    placeholder="Описание к модели голень"
                                    required
                                />

                                <!-- multiple models upload -->
                                <div class="grid md:gap-6">
                                    <div class="relative z-0 w-full mb-6 mt-4 group">
                                        <label for="form_model">3D модель Голень</label>

                                        <el-upload
                                            class="upload-demo"
                                            :on-change="handleFileModelLegGoleniChange"
                                            :on-preview="handleModelPreview"
                                            :limit="1"
                                        >
                                            <el-button type="primary">Кликните, чтоб загрузить</el-button>

                                            <template #tip>
                                                <div class="el-upload__tip">
                                                    только модели формата.glb
                                                </div>
                                                <p v-if="model3DLegBedrTreug.length > 0" class="el-upload__tip">
                                                    Загружен файл - {{ model3DLegGoleni }}
                                                </p>
                                                <p v-else>Файл не загружен</p>
                                            </template>
                                        </el-upload>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>

                <div v-else class="mb-6">
                    <label for="form_text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Описание</label>

                    <textarea
                        type="text"
                        v-model="text"
                        id="form_text"
                        class="
                            bg-gray-50
                            border
                            border-gray-300
                            text-gray-900
                            text-sm
                            rounded-lg
                            focus:ring-blue-500
                            focus:border-blue-500
                            block
                            w-full
                            p-2.5
                            dark:bg-gray-700
                            dark:border-gray-600
                            dark:placeholder-gray-400
                            dark:text-white
                            dark:focus:ring-blue-500
                            dark:focus:border-blue-500
                        "
                        rows="10"
                        placeholder="Описание части тела"
                        required
                    />
                </div>

                <!-- multiple images upload -->
                <div class="grid md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <label for="form_image">Миниатюра</label>

                        <el-upload id="form_image"
                            v-model:file-list="sectionImages"
                            accept=".jpg, .jpeg, .png"
                            list-type="picture-card"
                            multiple
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove"
                            :on-change="handleFileChange"
                        >
                            <el-icon>
                                <Plus />
                            </el-icon>

                            <el-dialog v-model="dialogPreviewImg">
                                <img w-full :src="dialogImageUrl" />
                            </el-dialog>
                        </el-upload>
                    </div>
                </div>
                <!-- end -->

                <!-- list of images for selected section -->
                <div class="flex flex-nowrap mb-8">
                    <div v-for="(pimage, index) in section_images"
                         :key="pimage.id"
                         class="relative w-36 h-auto"
                    >
                        <img class="rounded h-auto" :src="pimage.image" />

                        <span class="
                            absolute
                            top-0
                            right-8
                            transform
                            -translate-y-1/2
                            w-3.5
                            h-3.5
                            bg-red-400
                            border-2
                            border-white
                            dark:border-gray-800
                            rounded-full
                        ">
                            <span @click="deleteImage(pimage, index)"
                                  class="
                                    text-white
                                    text-xs
                                    font-bold
                                    absolute
                                    top-1/2
                                    left-1/2
                                    transform
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    cursor-pointer
                                ">x</span>
                        </span>
                    </div>
                </div>
                <!-- end -->

                <div class="grid md:gap-6" v-if="name !== 'Нога'">
                    <div class="relative z-0 w-full mb-6 group">
                        <label for="form_model">3D модель</label>

                        <el-upload
                            v-model:file-list="sectionModels"
                            class="upload-demo"
                            :on-change="handleFileModelChange"
                            :on-preview="handleModelPreview"
                            :before-remove="deleteModel"
                            :limit="1"
                            :on-exceed="handleExceed"
                        >
                            <el-button type="primary">Кликните, чтоб загрузить</el-button>

                            <template #tip>
                                <div class="el-upload__tip">
                                    только модели формата.glb
                                </div>
                            </template>
                        </el-upload>
                    </div>
                </div>
                <!-- end -->

                <div class="flex w-full justify-end items-center gap-4">
                    <button type="button" @click="dialogVisible = false" class="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-dark dark:hover:bg-slate-900 dark:focus:ring-black">Отменить</button>

                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Добавить</button>
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
                        <!-- Start button add section -->
                        <button type="button" @click="openAddModal" class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                            <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                            </svg>
                            Добавить часть тела
                        </button>
                        <!-- end button add section -->
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-4 py-3">#</th>
                                <th scope="col" class="px-4 py-3">Заголовок</th>
                                <th scope="col" class="px-4 py-3">Модели</th>
                                <th scope="col" class="px-4 py-3">Ссылка на схемы</th>
                                <th scope="col" class="px-4 py-3">Ссылка на таблицу</th>
                                <th scope="col" class="px-4 py-3">Ссылка на карты</th>
                                <th scope="col" class="px-4 py-3">Ссылка на тест</th>
                                <th scope="col" class="px-4 py-3">Ссылка на Youtube видео</th>
                                <th scope="col" class="px-4 py-3">Статус</th>
                                <th scope="col" class="px-4 py-3">
                                    <span class="sr-only">Действия</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(section, index) in sections.data" :key="section.id" class="border-b dark:border-gray-700">
                                <td class="px-4 py-3">{{ index+1 }}</td>
                                <th scope="row" class="flex items-center gap-3 px-4 py-3 font-medium dark:text-gray-200 text-gray-900 whitespace-nowrap">
                                    <img v-if="section.section_images.length > 0" :src="section.section_images[0].image" class="h-8" />
                                    <img v-else src="/images/no_image.jpg" class="h-8" />

                                    <section>
                                        <p>{{ section.name }}</p>
                                        <p class="text-[gray]">/{{ section.slug }}</p>
                                    </section>
                                </th>
                                <td class="px-4 py-3">
                                    <ul>
                                        <li :key="index" v-for="(item, index) in section.section_models">
                                            <p class="flex gap-1"><span>{{ index + 1 }}:</span><span>{{ item.name }}</span></p>
                                        </li>
                                    </ul>
                                    <ul v-if="section.name === 'Нога'">
                                        <p class="flex gap-1">1. <span>{{ section.model_3D_leg_bedr_treug }}</span></p>
                                        <p class="flex gap-1">2. <span>{{ section.model_3D_leg_podkol_yamk }}</span></p>
                                        <p class="flex gap-1">3. <span>{{ section.model_3D_leg_goleni }}</span></p>
                                    </ul>
                                </td>

                                <td class="px-4 py-3">{{ section.link_images_schemes ? 'Заполнено' : 'Не заполнено' }}</td>
                                <td class="px-4 py-3">{{ section.link_tables ? 'Заполнено' : 'Не заполнено' }}</td>
                                <td class="px-4 py-3">{{ section.link_mental_cards ? 'Заполнено' : 'Не заполнено' }}</td>
                                <td class="px-4 py-3">{{ section.link_test ? 'Заполнено' : 'Не заполнено' }}</td>
                                <td class="px-4 py-3">{{ section.link_video ? 'Заполнено' : 'Не заполнено' }}</td>
                                <td class="px-4 py-3">
                                    <span v-if="section.is_published == 1" class="bg-blue-100 text-blue-800 flex w-20 justify-center items-center text-xs font-medium me-2 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">Опубликован</span>
                                    <span v-else class="bg-yellow-100 text-yellow-800 text-xs flex w-20 justify-center items-center font-medium me-2 px-2 py-1 rounded dark:bg-yellow-900 dark:text-yellow-300">Не отображается на сайте</span>
                                </td>
                                <td class="px-4 py-3 flex items-center justify-end">
                                    <button :id="`${section.id}-button`" :data-dropdown-toggle="`${section.id}`"
                                            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button">
                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                        </svg>
                                    </button>
                                    <div :id="`${section.id}`"
                                        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                            :aria-labelledby="`${section.id}-button`">

                                            <li>
                                                <a href="#" @click="openEditModal(section)"
                                                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Изменить</a>
                                            </li>
                                        </ul>
                                        <div class="py-1">
                                            <a href="#" @click="deleteSection(section, index)" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Удалить</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="mt-4 py-4 px-10">
                        <Pagination :data="sections"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
