import { ref, watch, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createTextVNode, withDirectives, vModelText, Fragment, renderList, unref, withModifiers, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import "https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js";
import { usePage, router } from "@inertiajs/vue3";
import { Plus } from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";
import { _ as _sfc_main$1 } from "./Pagination-8e49e8d6.js";
import "./Link-ab392f85.js";
const _sfc_main = {
  __name: "SectionList",
  __ssrInlineRender: true,
  props: {
    sections: Object
  },
  setup(__props) {
    const sections = usePage().props.sections;
    const searchValue = usePage().props.search;
    ref(false);
    const isEditSection = ref(false);
    const dialogVisible = ref(false);
    const sectionImages = ref([]);
    const dialogImageUrl = ref("");
    const dialogPreviewImg = ref(false);
    const handleFileChange = (file) => {
      sectionImages.value.push(file);
    };
    const handlePictureCardPreview = (file) => {
      dialogImageUrl.value = file.url;
      dialogPreviewImg.value = true;
    };
    const handleRemove = (file) => {
      console.log(file);
    };
    const sectionModels = ref([]);
    const dialogModelUrl = ref("");
    const dialogPreviewMdl = ref(false);
    const handleFileModelChange = (file) => {
      sectionModels.value.push(file);
    };
    const handleModelPreview = (file) => {
      dialogModelUrl.value = file.url;
      dialogPreviewMdl.value = true;
    };
    const model3DLegBedrTreug = ref(null);
    const handleFileModelLegBedrTreugChange = (model) => {
      model3DLegBedrTreug.value = {
        "name": model.name,
        "url": model.raw
      };
    };
    const model3DLegPodkolYamk = ref(null);
    const handleFileModelLegPodkolYamkChange = (file) => {
      model3DLegPodkolYamk.value = file;
    };
    const model3DLegGoleni = ref(null);
    const handleFileModelLegGoleniChange = (file) => {
      model3DLegGoleni.value = file;
    };
    const search = ref(searchValue);
    watch(search, (value) => {
      router.get(
        "/admin/section/index",
        { search: value },
        { preserveState: false }
      );
    });
    const id = ref("");
    const name = ref("");
    const text = ref("");
    const text_leg_bedr_treug = ref("");
    const text_leg_podkol_yamk = ref("");
    const text_leg_goleni = ref("");
    ref("");
    ref("");
    ref("");
    const is_published = ref(1);
    const link_images_schemes = ref("");
    const link_tables = ref("");
    const link_mental_cards = ref("");
    const link_test = ref("");
    const link_video = ref("");
    const section_images = ref([]);
    const section_models = ref([]);
    const AddSection = async () => {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("text", text.value);
      formData.append("text_leg_bedr_treug", text_leg_bedr_treug.value);
      formData.append("text_leg_podkol_yamk", text_leg_podkol_yamk.value);
      formData.append("text_leg_goleni", text_leg_goleni.value);
      formData.append("is_published", is_published.value);
      formData.append("link_images_schemes", link_images_schemes.value);
      formData.append("link_tables", link_tables.value);
      formData.append("link_mental_cards", link_mental_cards.value);
      formData.append("link_test", link_test.value);
      formData.append("link_video", link_video.value);
      formData.append("model_3D_leg_bedr_treug", model3DLegBedrTreug.value === null ? "" : model3DLegBedrTreug.value.url);
      formData.append("model_3D_leg_podkol_yamk", model3DLegPodkolYamk.value === null ? "" : model3DLegBedrTreug.value.url);
      formData.append("model_3D_leg_goleni", model3DLegGoleni.value === null ? "" : model3DLegBedrTreug.value.url);
      for (const image of sectionImages.value) {
        formData.append("section_images[]", image.raw);
      }
      for (const model of sectionModels.value) {
        formData.append("section_models[]", model.raw);
      }
      try {
        await router.post("store", formData, {
          onSuccess: (page) => {
            ElNotification({
              title: "Успешно",
              message: page.props.flash.success,
              type: "success"
            });
            dialogVisible.value = false;
            resetFormData();
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    const resetFormData = () => {
      id.value = "";
      name.value = "";
      text.value = "";
      text_leg_bedr_treug.value = "";
      text_leg_podkol_yamk.value = "";
      text_leg_goleni.value = "";
      model3DLegBedrTreug.value = null;
      model3DLegPodkolYamk.value = null;
      model3DLegGoleni.value = null;
      is_published.value = "";
      link_images_schemes.value = "";
      link_tables.value = "";
      link_mental_cards.value = "";
      link_test.value = "";
      link_video.value = "";
      section_images.value = [];
      sectionImages.value = [];
      section_models.value = [];
      sectionModels.value = [];
      dialogImageUrl.value = "";
    };
    const deleteImage = async (pimage, index) => {
      try {
        await router.delete("/admin/section/image/" + pimage.id, {
          onSuccess: (page) => {
            section_images.value.splice(index, 1);
            ElNotification({
              title: "Успешно",
              message: page.props.flash.success,
              type: "success"
            });
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    const deleteModel = async (pmodel, index) => {
      try {
        await router.delete("/admin/section/model/" + pmodel.id, {
          onSuccess: (page) => {
            section_models.value.splice(index, 1);
            ElNotification({
              title: "Успешно",
              message: page.props.flash.success,
              type: "success"
            });
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    const updateSection = async () => {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("text", text.value);
      formData.append("text_leg_bedr_treug", text_leg_bedr_treug.value);
      formData.append("text_leg_podkol_yamk", text_leg_podkol_yamk.value);
      formData.append("text_leg_goleni", text_leg_goleni.value);
      formData.append("is_published", is_published.value);
      formData.append("link_images_schemes", link_images_schemes.value);
      formData.append("link_tables", link_tables.value);
      formData.append("link_mental_cards", link_mental_cards.value);
      formData.append("link_test", link_test.value);
      formData.append("link_video", link_video.value);
      formData.append("model_3D_leg_bedr_treug", model3DLegBedrTreug.value === null ? "" : model3DLegBedrTreug.value.url);
      formData.append("model_3D_leg_podkol_yamk", model3DLegPodkolYamk.value === null ? "" : model3DLegPodkolYamk.value.url);
      formData.append("model_3D_leg_goleni", model3DLegGoleni.value === null ? "" : model3DLegGoleni.value.url);
      formData.append("_method", "PUT");
      for (const image of sectionImages.value) {
        formData.append("section_images[]", image.raw);
      }
      for (const model of sectionModels.value) {
        formData.append("section_models[]", model.raw);
      }
      try {
        await router.post("update/" + id.value, formData, {
          onSuccess: (page) => {
            dialogVisible.value = false;
            resetFormData();
            ElNotification({
              title: "Успешно",
              message: page.props.flash.success,
              type: "success"
            });
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    const tabLeg = ref([
      {
        name: "Бедренный треугольник",
        text: "text_leg_bedr_treug"
      },
      {
        name: "Подколенная ямка",
        text: "text_leg_podkol_yamk"
      },
      {
        name: "Голень",
        text: "text_leg_goleni"
      }
    ]);
    const selectedTabLeg = ref();
    const handleLegClick = (tab) => selectedTabLeg.value = tab;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dialog = resolveComponent("el-dialog");
      const _component_el_tabs = resolveComponent("el-tabs");
      const _component_el_tab_pane = resolveComponent("el-tab-pane");
      const _component_el_upload = resolveComponent("el-upload");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_icon = resolveComponent("el-icon");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 dark:bg-gray-900 p-3 sm:p-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_dialog, {
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
        class: "text-gray-800 dark:bg-gray-800 dark:text-gray-200",
        width: "80%"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg text-gray-800 dark:text-white mb-6"${_scopeId}>${ssrInterpolate(isEditSection.value ? "Редактировать часть тела" : "Добавить часть тела")}</h3><form${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-3 gap-4"${_scopeId}><div class="md:mb-6"${_scopeId}><label for="form_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Заголовок</label><input${ssrRenderAttr("value", name.value)} type="text" id="form_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Заголовок" required${_scopeId}></div><div class="md:mb-6"${_scopeId}><label for="form_link_images_schemes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Ссылка на схемы</label><input type="text"${ssrRenderAttr("value", link_images_schemes.value)} id="form_link_images_schemes" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ссылка на схемы" required${_scopeId}></div><div class="mb-6"${_scopeId}><label for="form_link_tables" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Ссылка на таблицу</label><input${ssrRenderAttr("value", link_tables.value)} type="text" id="form_link_tables" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ссылка на таблицу" required${_scopeId}></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-4"${_scopeId}><div class="md:mb-6"${_scopeId}><label for="form_link_mental_cards" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Ссылка на ментальную карту</label><input type="text"${ssrRenderAttr("value", link_mental_cards.value)} id="form_link_mental_cards" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ссылка на ментальную карту" required${_scopeId}></div><div class="md:mb-6"${_scopeId}><label for="form_link_test" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Ссылка на тест</label><input${ssrRenderAttr("value", link_test.value)} type="text" id="form_link_test" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ссылка на тест" required${_scopeId}></div><div class="mb-6"${_scopeId}><label for="form_link_video" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Ссылка на Youtube видео</label><input type="text"${ssrRenderAttr("value", link_video.value)} id="form_link_video" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ссылка на Youtube видео" required${_scopeId}></div></div>`);
            if (name.value == "Нога") {
              _push2(`<div class=""${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_tabs, {
                modelValue: selectedTabLeg.value,
                "onUpdate:modelValue": ($event) => selectedTabLeg.value = $event,
                class: "left-menu",
                type: "card",
                onTabClick: handleLegClick
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(tabLeg.value, (tab, index) => {
                      _push3(ssrRenderComponent(_component_el_tab_pane, {
                        label: tab.name,
                        name: tab.name,
                        key: index
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            if (tab.text == "text_leg_bedr_treug") {
                              _push4(`<div class="mb-6"${_scopeId3}><textarea type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows="10"${ssrRenderAttr("placeholder", `Описание к модели ${tab.name}`)} required${_scopeId3}>${ssrInterpolate(text_leg_bedr_treug.value)}</textarea><div class="grid md:gap-6"${_scopeId3}><div class="relative z-0 w-full mb-6 mt-4 group"${_scopeId3}><label for="form_model"${_scopeId3}>3D модель Бедренный треугольник</label>`);
                              _push4(ssrRenderComponent(_component_el_upload, {
                                class: "upload-demo",
                                "on-change": handleFileModelLegBedrTreugChange,
                                "on-preview": handleModelPreview,
                                limit: 1
                              }, {
                                tip: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="el-upload__tip"${_scopeId4}> только модели формата.glb </div>`);
                                    if (model3DLegBedrTreug.value !== null) {
                                      _push5(`<p class="el-upload__tip"${_scopeId4}> Загружен файл - ${ssrInterpolate(model3DLegBedrTreug.value.name)}</p>`);
                                    } else {
                                      _push5(`<p${_scopeId4}>Файл не загружен</p>`);
                                    }
                                  } else {
                                    return [
                                      createVNode("div", { class: "el-upload__tip" }, " только модели формата.glb "),
                                      model3DLegBedrTreug.value !== null ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "el-upload__tip"
                                      }, " Загружен файл - " + toDisplayString(model3DLegBedrTreug.value.name), 1)) : (openBlock(), createBlock("p", { key: 1 }, "Файл не загружен"))
                                    ];
                                  }
                                }),
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_component_el_button, { type: "primary" }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`Кликните, чтоб загрузить`);
                                        } else {
                                          return [
                                            createTextVNode("Кликните, чтоб загрузить")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_component_el_button, { type: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Кликните, чтоб загрузить")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div></div></div>`);
                            } else if (tab.text == "text_leg_podkol_yamk") {
                              _push4(`<div class="mb-6"${_scopeId3}><textarea type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows="10" placeholder="Описание к  модели подколенная ямка" required${_scopeId3}>${ssrInterpolate(text_leg_podkol_yamk.value)}</textarea><div class="grid md:gap-6"${_scopeId3}><div class="relative z-0 w-full mb-6 mt-4 group"${_scopeId3}><label for="form_model"${_scopeId3}>3D модель Подколенная ямка</label>`);
                              _push4(ssrRenderComponent(_component_el_upload, {
                                class: "upload-demo",
                                "on-change": handleFileModelLegPodkolYamkChange,
                                "on-preview": handleModelPreview,
                                limit: 1
                              }, {
                                tip: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="el-upload__tip"${_scopeId4}> только модели формата.glb </div>`);
                                    if (model3DLegPodkolYamk.value !== null) {
                                      _push5(`<p class="el-upload__tip"${_scopeId4}> Загружен файл - ${ssrInterpolate(model3DLegPodkolYamk.value.name)}</p>`);
                                    } else {
                                      _push5(`<p${_scopeId4}>Файл не загружен</p>`);
                                    }
                                  } else {
                                    return [
                                      createVNode("div", { class: "el-upload__tip" }, " только модели формата.glb "),
                                      model3DLegPodkolYamk.value !== null ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "el-upload__tip"
                                      }, " Загружен файл - " + toDisplayString(model3DLegPodkolYamk.value.name), 1)) : (openBlock(), createBlock("p", { key: 1 }, "Файл не загружен"))
                                    ];
                                  }
                                }),
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_component_el_button, { type: "primary" }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`Кликните, чтоб загрузить`);
                                        } else {
                                          return [
                                            createTextVNode("Кликните, чтоб загрузить")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_component_el_button, { type: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Кликните, чтоб загрузить")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div></div></div>`);
                            } else {
                              _push4(`<div class="mb-6"${_scopeId3}><textarea type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows="10" placeholder="Описание к модели голень" required${_scopeId3}>${ssrInterpolate(text_leg_goleni.value)}</textarea><div class="grid md:gap-6"${_scopeId3}><div class="relative z-0 w-full mb-6 mt-4 group"${_scopeId3}><label for="form_model"${_scopeId3}>3D модель Голень</label>`);
                              _push4(ssrRenderComponent(_component_el_upload, {
                                class: "upload-demo",
                                "on-change": handleFileModelLegGoleniChange,
                                "on-preview": handleModelPreview,
                                limit: 1
                              }, {
                                tip: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="el-upload__tip"${_scopeId4}> только модели формата.glb </div>`);
                                    if (model3DLegGoleni.value !== null) {
                                      _push5(`<p class="el-upload__tip"${_scopeId4}> Загружен файл - ${ssrInterpolate(model3DLegGoleni.value.name)}</p>`);
                                    } else {
                                      _push5(`<p${_scopeId4}>Файл не загружен</p>`);
                                    }
                                  } else {
                                    return [
                                      createVNode("div", { class: "el-upload__tip" }, " только модели формата.glb "),
                                      model3DLegGoleni.value !== null ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "el-upload__tip"
                                      }, " Загружен файл - " + toDisplayString(model3DLegGoleni.value.name), 1)) : (openBlock(), createBlock("p", { key: 1 }, "Файл не загружен"))
                                    ];
                                  }
                                }),
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_component_el_button, { type: "primary" }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`Кликните, чтоб загрузить`);
                                        } else {
                                          return [
                                            createTextVNode("Кликните, чтоб загрузить")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_component_el_button, { type: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Кликните, чтоб загрузить")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div></div></div>`);
                            }
                          } else {
                            return [
                              tab.text == "text_leg_bedr_treug" ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mb-6"
                              }, [
                                withDirectives(createVNode("textarea", {
                                  type: "text",
                                  "onUpdate:modelValue": ($event) => text_leg_bedr_treug.value = $event,
                                  class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                  rows: "10",
                                  placeholder: `Описание к модели ${tab.name}`,
                                  required: ""
                                }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                                  [vModelText, text_leg_bedr_treug.value]
                                ]),
                                createVNode("div", { class: "grid md:gap-6" }, [
                                  createVNode("div", { class: "relative z-0 w-full mb-6 mt-4 group" }, [
                                    createVNode("label", { for: "form_model" }, "3D модель Бедренный треугольник"),
                                    createVNode(_component_el_upload, {
                                      class: "upload-demo",
                                      "on-change": handleFileModelLegBedrTreugChange,
                                      "on-preview": handleModelPreview,
                                      limit: 1
                                    }, {
                                      tip: withCtx(() => [
                                        createVNode("div", { class: "el-upload__tip" }, " только модели формата.glb "),
                                        model3DLegBedrTreug.value !== null ? (openBlock(), createBlock("p", {
                                          key: 0,
                                          class: "el-upload__tip"
                                        }, " Загружен файл - " + toDisplayString(model3DLegBedrTreug.value.name), 1)) : (openBlock(), createBlock("p", { key: 1 }, "Файл не загружен"))
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_el_button, { type: "primary" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Кликните, чтоб загрузить")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ])) : tab.text == "text_leg_podkol_yamk" ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "mb-6"
                              }, [
                                withDirectives(createVNode("textarea", {
                                  type: "text",
                                  "onUpdate:modelValue": ($event) => text_leg_podkol_yamk.value = $event,
                                  class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                  rows: "10",
                                  placeholder: "Описание к  модели подколенная ямка",
                                  required: ""
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, text_leg_podkol_yamk.value]
                                ]),
                                createVNode("div", { class: "grid md:gap-6" }, [
                                  createVNode("div", { class: "relative z-0 w-full mb-6 mt-4 group" }, [
                                    createVNode("label", { for: "form_model" }, "3D модель Подколенная ямка"),
                                    createVNode(_component_el_upload, {
                                      class: "upload-demo",
                                      "on-change": handleFileModelLegPodkolYamkChange,
                                      "on-preview": handleModelPreview,
                                      limit: 1
                                    }, {
                                      tip: withCtx(() => [
                                        createVNode("div", { class: "el-upload__tip" }, " только модели формата.glb "),
                                        model3DLegPodkolYamk.value !== null ? (openBlock(), createBlock("p", {
                                          key: 0,
                                          class: "el-upload__tip"
                                        }, " Загружен файл - " + toDisplayString(model3DLegPodkolYamk.value.name), 1)) : (openBlock(), createBlock("p", { key: 1 }, "Файл не загружен"))
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_el_button, { type: "primary" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Кликните, чтоб загрузить")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ])) : (openBlock(), createBlock("div", {
                                key: 2,
                                class: "mb-6"
                              }, [
                                withDirectives(createVNode("textarea", {
                                  type: "text",
                                  "onUpdate:modelValue": ($event) => text_leg_goleni.value = $event,
                                  class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                  rows: "10",
                                  placeholder: "Описание к модели голень",
                                  required: ""
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, text_leg_goleni.value]
                                ]),
                                createVNode("div", { class: "grid md:gap-6" }, [
                                  createVNode("div", { class: "relative z-0 w-full mb-6 mt-4 group" }, [
                                    createVNode("label", { for: "form_model" }, "3D модель Голень"),
                                    createVNode(_component_el_upload, {
                                      class: "upload-demo",
                                      "on-change": handleFileModelLegGoleniChange,
                                      "on-preview": handleModelPreview,
                                      limit: 1
                                    }, {
                                      tip: withCtx(() => [
                                        createVNode("div", { class: "el-upload__tip" }, " только модели формата.glb "),
                                        model3DLegGoleni.value !== null ? (openBlock(), createBlock("p", {
                                          key: 0,
                                          class: "el-upload__tip"
                                        }, " Загружен файл - " + toDisplayString(model3DLegGoleni.value.name), 1)) : (openBlock(), createBlock("p", { key: 1 }, "Файл не загружен"))
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_el_button, { type: "primary" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Кликните, чтоб загрузить")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ]))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(tabLeg.value, (tab, index) => {
                        return openBlock(), createBlock(_component_el_tab_pane, {
                          label: tab.name,
                          name: tab.name,
                          key: index
                        }, {
                          default: withCtx(() => [
                            tab.text == "text_leg_bedr_treug" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mb-6"
                            }, [
                              withDirectives(createVNode("textarea", {
                                type: "text",
                                "onUpdate:modelValue": ($event) => text_leg_bedr_treug.value = $event,
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                rows: "10",
                                placeholder: `Описание к модели ${tab.name}`,
                                required: ""
                              }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                                [vModelText, text_leg_bedr_treug.value]
                              ]),
                              createVNode("div", { class: "grid md:gap-6" }, [
                                createVNode("div", { class: "relative z-0 w-full mb-6 mt-4 group" }, [
                                  createVNode("label", { for: "form_model" }, "3D модель Бедренный треугольник"),
                                  createVNode(_component_el_upload, {
                                    class: "upload-demo",
                                    "on-change": handleFileModelLegBedrTreugChange,
                                    "on-preview": handleModelPreview,
                                    limit: 1
                                  }, {
                                    tip: withCtx(() => [
                                      createVNode("div", { class: "el-upload__tip" }, " только модели формата.glb "),
                                      model3DLegBedrTreug.value !== null ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "el-upload__tip"
                                      }, " Загружен файл - " + toDisplayString(model3DLegBedrTreug.value.name), 1)) : (openBlock(), createBlock("p", { key: 1 }, "Файл не загружен"))
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_el_button, { type: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Кликните, чтоб загрузить")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ])) : tab.text == "text_leg_podkol_yamk" ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "mb-6"
                            }, [
                              withDirectives(createVNode("textarea", {
                                type: "text",
                                "onUpdate:modelValue": ($event) => text_leg_podkol_yamk.value = $event,
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                rows: "10",
                                placeholder: "Описание к  модели подколенная ямка",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, text_leg_podkol_yamk.value]
                              ]),
                              createVNode("div", { class: "grid md:gap-6" }, [
                                createVNode("div", { class: "relative z-0 w-full mb-6 mt-4 group" }, [
                                  createVNode("label", { for: "form_model" }, "3D модель Подколенная ямка"),
                                  createVNode(_component_el_upload, {
                                    class: "upload-demo",
                                    "on-change": handleFileModelLegPodkolYamkChange,
                                    "on-preview": handleModelPreview,
                                    limit: 1
                                  }, {
                                    tip: withCtx(() => [
                                      createVNode("div", { class: "el-upload__tip" }, " только модели формата.glb "),
                                      model3DLegPodkolYamk.value !== null ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "el-upload__tip"
                                      }, " Загружен файл - " + toDisplayString(model3DLegPodkolYamk.value.name), 1)) : (openBlock(), createBlock("p", { key: 1 }, "Файл не загружен"))
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_el_button, { type: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Кликните, чтоб загрузить")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ])) : (openBlock(), createBlock("div", {
                              key: 2,
                              class: "mb-6"
                            }, [
                              withDirectives(createVNode("textarea", {
                                type: "text",
                                "onUpdate:modelValue": ($event) => text_leg_goleni.value = $event,
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                rows: "10",
                                placeholder: "Описание к модели голень",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, text_leg_goleni.value]
                              ]),
                              createVNode("div", { class: "grid md:gap-6" }, [
                                createVNode("div", { class: "relative z-0 w-full mb-6 mt-4 group" }, [
                                  createVNode("label", { for: "form_model" }, "3D модель Голень"),
                                  createVNode(_component_el_upload, {
                                    class: "upload-demo",
                                    "on-change": handleFileModelLegGoleniChange,
                                    "on-preview": handleModelPreview,
                                    limit: 1
                                  }, {
                                    tip: withCtx(() => [
                                      createVNode("div", { class: "el-upload__tip" }, " только модели формата.glb "),
                                      model3DLegGoleni.value !== null ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "el-upload__tip"
                                      }, " Загружен файл - " + toDisplayString(model3DLegGoleni.value.name), 1)) : (openBlock(), createBlock("p", { key: 1 }, "Файл не загружен"))
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_el_button, { type: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Кликните, чтоб загрузить")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]))
                          ]),
                          _: 2
                        }, 1032, ["label", "name"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="mb-6"${_scopeId}><label for="form_text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Описание</label><textarea type="text" id="form_text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows="10" placeholder="Описание части тела" required${_scopeId}>${ssrInterpolate(text.value)}</textarea></div>`);
            }
            _push2(`<div class="grid md:gap-6"${_scopeId}><div class="relative z-0 w-full mb-6 group"${_scopeId}><label for="form_image"${_scopeId}>Миниатюра</label>`);
            _push2(ssrRenderComponent(_component_el_upload, {
              id: "form_image",
              "file-list": sectionImages.value,
              "onUpdate:fileList": ($event) => sectionImages.value = $event,
              accept: ".jpg, .jpeg, .png",
              "list-type": "picture-card",
              multiple: "",
              "on-preview": handlePictureCardPreview,
              "on-remove": handleRemove,
              "on-change": handleFileChange
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_icon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Plus), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Plus))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_dialog, {
                    modelValue: dialogPreviewImg.value,
                    "onUpdate:modelValue": ($event) => dialogPreviewImg.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img w-full${ssrRenderAttr("src", dialogImageUrl.value)}${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            "w-full": "",
                            src: dialogImageUrl.value
                          }, null, 8, ["src"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        createVNode(unref(Plus))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_dialog, {
                      modelValue: dialogPreviewImg.value,
                      "onUpdate:modelValue": ($event) => dialogPreviewImg.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          "w-full": "",
                          src: dialogImageUrl.value
                        }, null, 8, ["src"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-nowrap mb-8"${_scopeId}><!--[-->`);
            ssrRenderList(section_images.value, (pimage, index) => {
              _push2(`<div class="relative w-36 h-auto"${_scopeId}><img class="rounded h-auto"${ssrRenderAttr("src", pimage.image)}${_scopeId}><span class="absolute top-0 right-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"${_scopeId}><span class="text-white text-xs font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"${_scopeId}>x</span></span></div>`);
            });
            _push2(`<!--]--></div>`);
            if (name.value !== "Нога") {
              _push2(`<div class="grid md:gap-6"${_scopeId}><div class="relative z-0 w-full mb-6 group"${_scopeId}><label for="form_model"${_scopeId}>3D модель</label>`);
              _push2(ssrRenderComponent(_component_el_upload, {
                "file-list": sectionModels.value,
                "onUpdate:fileList": ($event) => sectionModels.value = $event,
                class: "upload-demo",
                "on-change": handleFileModelChange,
                "on-preview": handleModelPreview,
                "before-remove": deleteModel,
                limit: 1,
                "on-exceed": _ctx.handleExceed
              }, {
                tip: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="el-upload__tip"${_scopeId2}> только модели формата.glb </div>`);
                  } else {
                    return [
                      createVNode("div", { class: "el-upload__tip" }, " только модели формата.glb ")
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_button, { type: "primary" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Кликните, чтоб загрузить`);
                        } else {
                          return [
                            createTextVNode("Кликните, чтоб загрузить")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_button, { type: "primary" }, {
                        default: withCtx(() => [
                          createTextVNode("Кликните, чтоб загрузить")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex w-full justify-end items-center gap-4"${_scopeId}><button type="button" class="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-dark dark:hover:bg-slate-900 dark:focus:ring-black"${_scopeId}>Отменить</button><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"${_scopeId}>Добавить</button></div></form>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg text-gray-800 dark:text-white mb-6" }, toDisplayString(isEditSection.value ? "Редактировать часть тела" : "Добавить часть тела"), 1),
              createVNode("form", {
                onSubmit: withModifiers(($event) => isEditSection.value ? updateSection() : AddSection(), ["prevent"])
              }, [
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-4" }, [
                  createVNode("div", { class: "md:mb-6" }, [
                    createVNode("label", {
                      for: "form_name",
                      class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    }, "Заголовок"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => name.value = $event,
                      type: "text",
                      id: "form_name",
                      class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                      placeholder: "Заголовок",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, name.value]
                    ])
                  ]),
                  createVNode("div", { class: "md:mb-6" }, [
                    createVNode("label", {
                      for: "form_link_images_schemes",
                      class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    }, "Ссылка на схемы"),
                    withDirectives(createVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": ($event) => link_images_schemes.value = $event,
                      id: "form_link_images_schemes",
                      class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                      placeholder: "Ссылка на схемы",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, link_images_schemes.value]
                    ])
                  ]),
                  createVNode("div", { class: "mb-6" }, [
                    createVNode("label", {
                      for: "form_link_tables",
                      class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    }, "Ссылка на таблицу"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => link_tables.value = $event,
                      type: "text",
                      id: "form_link_tables",
                      class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                      placeholder: "Ссылка на таблицу",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, link_tables.value]
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-4" }, [
                  createVNode("div", { class: "md:mb-6" }, [
                    createVNode("label", {
                      for: "form_link_mental_cards",
                      class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    }, "Ссылка на ментальную карту"),
                    withDirectives(createVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": ($event) => link_mental_cards.value = $event,
                      id: "form_link_mental_cards",
                      class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                      placeholder: "Ссылка на ментальную карту",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, link_mental_cards.value]
                    ])
                  ]),
                  createVNode("div", { class: "md:mb-6" }, [
                    createVNode("label", {
                      for: "form_link_test",
                      class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    }, "Ссылка на тест"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => link_test.value = $event,
                      type: "text",
                      id: "form_link_test",
                      class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                      placeholder: "Ссылка на тест",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, link_test.value]
                    ])
                  ]),
                  createVNode("div", { class: "mb-6" }, [
                    createVNode("label", {
                      for: "form_link_video",
                      class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    }, "Ссылка на Youtube видео"),
                    withDirectives(createVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": ($event) => link_video.value = $event,
                      id: "form_link_video",
                      class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                      placeholder: "Ссылка на Youtube видео",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, link_video.value]
                    ])
                  ])
                ]),
                name.value == "Нога" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ""
                }, [
                  createVNode(_component_el_tabs, {
                    modelValue: selectedTabLeg.value,
                    "onUpdate:modelValue": ($event) => selectedTabLeg.value = $event,
                    class: "left-menu",
                    type: "card",
                    onTabClick: handleLegClick
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(tabLeg.value, (tab, index) => {
                        return openBlock(), createBlock(_component_el_tab_pane, {
                          label: tab.name,
                          name: tab.name,
                          key: index
                        }, {
                          default: withCtx(() => [
                            tab.text == "text_leg_bedr_treug" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mb-6"
                            }, [
                              withDirectives(createVNode("textarea", {
                                type: "text",
                                "onUpdate:modelValue": ($event) => text_leg_bedr_treug.value = $event,
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                rows: "10",
                                placeholder: `Описание к модели ${tab.name}`,
                                required: ""
                              }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                                [vModelText, text_leg_bedr_treug.value]
                              ]),
                              createVNode("div", { class: "grid md:gap-6" }, [
                                createVNode("div", { class: "relative z-0 w-full mb-6 mt-4 group" }, [
                                  createVNode("label", { for: "form_model" }, "3D модель Бедренный треугольник"),
                                  createVNode(_component_el_upload, {
                                    class: "upload-demo",
                                    "on-change": handleFileModelLegBedrTreugChange,
                                    "on-preview": handleModelPreview,
                                    limit: 1
                                  }, {
                                    tip: withCtx(() => [
                                      createVNode("div", { class: "el-upload__tip" }, " только модели формата.glb "),
                                      model3DLegBedrTreug.value !== null ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "el-upload__tip"
                                      }, " Загружен файл - " + toDisplayString(model3DLegBedrTreug.value.name), 1)) : (openBlock(), createBlock("p", { key: 1 }, "Файл не загружен"))
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_el_button, { type: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Кликните, чтоб загрузить")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ])) : tab.text == "text_leg_podkol_yamk" ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "mb-6"
                            }, [
                              withDirectives(createVNode("textarea", {
                                type: "text",
                                "onUpdate:modelValue": ($event) => text_leg_podkol_yamk.value = $event,
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                rows: "10",
                                placeholder: "Описание к  модели подколенная ямка",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, text_leg_podkol_yamk.value]
                              ]),
                              createVNode("div", { class: "grid md:gap-6" }, [
                                createVNode("div", { class: "relative z-0 w-full mb-6 mt-4 group" }, [
                                  createVNode("label", { for: "form_model" }, "3D модель Подколенная ямка"),
                                  createVNode(_component_el_upload, {
                                    class: "upload-demo",
                                    "on-change": handleFileModelLegPodkolYamkChange,
                                    "on-preview": handleModelPreview,
                                    limit: 1
                                  }, {
                                    tip: withCtx(() => [
                                      createVNode("div", { class: "el-upload__tip" }, " только модели формата.glb "),
                                      model3DLegPodkolYamk.value !== null ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "el-upload__tip"
                                      }, " Загружен файл - " + toDisplayString(model3DLegPodkolYamk.value.name), 1)) : (openBlock(), createBlock("p", { key: 1 }, "Файл не загружен"))
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_el_button, { type: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Кликните, чтоб загрузить")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ])) : (openBlock(), createBlock("div", {
                              key: 2,
                              class: "mb-6"
                            }, [
                              withDirectives(createVNode("textarea", {
                                type: "text",
                                "onUpdate:modelValue": ($event) => text_leg_goleni.value = $event,
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                rows: "10",
                                placeholder: "Описание к модели голень",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, text_leg_goleni.value]
                              ]),
                              createVNode("div", { class: "grid md:gap-6" }, [
                                createVNode("div", { class: "relative z-0 w-full mb-6 mt-4 group" }, [
                                  createVNode("label", { for: "form_model" }, "3D модель Голень"),
                                  createVNode(_component_el_upload, {
                                    class: "upload-demo",
                                    "on-change": handleFileModelLegGoleniChange,
                                    "on-preview": handleModelPreview,
                                    limit: 1
                                  }, {
                                    tip: withCtx(() => [
                                      createVNode("div", { class: "el-upload__tip" }, " только модели формата.glb "),
                                      model3DLegGoleni.value !== null ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "el-upload__tip"
                                      }, " Загружен файл - " + toDisplayString(model3DLegGoleni.value.name), 1)) : (openBlock(), createBlock("p", { key: 1 }, "Файл не загружен"))
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_el_button, { type: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Кликните, чтоб загрузить")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]))
                          ]),
                          _: 2
                        }, 1032, ["label", "name"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "mb-6"
                }, [
                  createVNode("label", {
                    for: "form_text",
                    class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  }, "Описание"),
                  withDirectives(createVNode("textarea", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => text.value = $event,
                    id: "form_text",
                    class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                    rows: "10",
                    placeholder: "Описание части тела",
                    required: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, text.value]
                  ])
                ])),
                createVNode("div", { class: "grid md:gap-6" }, [
                  createVNode("div", { class: "relative z-0 w-full mb-6 group" }, [
                    createVNode("label", { for: "form_image" }, "Миниатюра"),
                    createVNode(_component_el_upload, {
                      id: "form_image",
                      "file-list": sectionImages.value,
                      "onUpdate:fileList": ($event) => sectionImages.value = $event,
                      accept: ".jpg, .jpeg, .png",
                      "list-type": "picture-card",
                      multiple: "",
                      "on-preview": handlePictureCardPreview,
                      "on-remove": handleRemove,
                      "on-change": handleFileChange
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_icon, null, {
                          default: withCtx(() => [
                            createVNode(unref(Plus))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_dialog, {
                          modelValue: dialogPreviewImg.value,
                          "onUpdate:modelValue": ($event) => dialogPreviewImg.value = $event
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              "w-full": "",
                              src: dialogImageUrl.value
                            }, null, 8, ["src"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["file-list", "onUpdate:fileList"])
                  ])
                ]),
                createVNode("div", { class: "flex flex-nowrap mb-8" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(section_images.value, (pimage, index) => {
                    return openBlock(), createBlock("div", {
                      key: pimage.id,
                      class: "relative w-36 h-auto"
                    }, [
                      createVNode("img", {
                        class: "rounded h-auto",
                        src: pimage.image
                      }, null, 8, ["src"]),
                      createVNode("span", { class: "absolute top-0 right-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full" }, [
                        createVNode("span", {
                          onClick: ($event) => deleteImage(pimage, index),
                          class: "text-white text-xs font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        }, "x", 8, ["onClick"])
                      ])
                    ]);
                  }), 128))
                ]),
                name.value !== "Нога" ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "grid md:gap-6"
                }, [
                  createVNode("div", { class: "relative z-0 w-full mb-6 group" }, [
                    createVNode("label", { for: "form_model" }, "3D модель"),
                    createVNode(_component_el_upload, {
                      "file-list": sectionModels.value,
                      "onUpdate:fileList": ($event) => sectionModels.value = $event,
                      class: "upload-demo",
                      "on-change": handleFileModelChange,
                      "on-preview": handleModelPreview,
                      "before-remove": deleteModel,
                      limit: 1,
                      "on-exceed": _ctx.handleExceed
                    }, {
                      tip: withCtx(() => [
                        createVNode("div", { class: "el-upload__tip" }, " только модели формата.glb ")
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_el_button, { type: "primary" }, {
                          default: withCtx(() => [
                            createTextVNode("Кликните, чтоб загрузить")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["file-list", "onUpdate:fileList", "on-exceed"])
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "flex w-full justify-end items-center gap-4" }, [
                  createVNode("button", {
                    type: "button",
                    onClick: ($event) => dialogVisible.value = false,
                    class: "text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-dark dark:hover:bg-slate-900 dark:focus:ring-black"
                  }, "Отменить", 8, ["onClick"]),
                  createVNode("button", {
                    type: "submit",
                    class: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  }, "Добавить")
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="max-w-screen-xl px-2 bg-gray-50 dark:bg-gray-900"><div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden"><div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 bg-gray-50 dark:bg-gray-900"><div class="w-full md:w-1/2"><label for="simple-search" class="sr-only">Поиск</label><div class="relative w-full"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text"${ssrRenderAttr("value", search.value)} id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Поиск"></div></div><div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"><button type="button" class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"><svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"></path></svg> Добавить часть тела </button></div></div><div class="overflow-x-auto"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"><tr><th scope="col" class="px-4 py-3">#</th><th scope="col" class="px-4 py-3">Заголовок</th><th scope="col" class="px-4 py-3">Модели</th><th scope="col" class="px-4 py-3">Ссылка на схемы</th><th scope="col" class="px-4 py-3">Ссылка на таблицу</th><th scope="col" class="px-4 py-3">Ссылка на карты</th><th scope="col" class="px-4 py-3">Ссылка на тест</th><th scope="col" class="px-4 py-3">Ссылка на Youtube видео</th><th scope="col" class="px-4 py-3">Статус</th><th scope="col" class="px-4 py-3"><span class="sr-only">Действия</span></th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(sections).data, (section, index) => {
        _push(`<tr class="border-b dark:border-gray-700"><td class="px-4 py-3">${ssrInterpolate(index + 1)}</td><th scope="row" class="flex items-center gap-3 px-4 py-3 font-medium dark:text-gray-200 text-gray-900 whitespace-nowrap">`);
        if (section.section_images.length > 0) {
          _push(`<img${ssrRenderAttr("src", section.section_images[0].image)} class="h-8">`);
        } else {
          _push(`<img src="/images/no_image.jpg" class="h-8">`);
        }
        _push(`<section><p>${ssrInterpolate(section.name)}</p><p class="text-[gray]">/${ssrInterpolate(section.slug)}</p></section></th><td class="px-4 py-3"><ul><!--[-->`);
        ssrRenderList(section.section_models, (item, index2) => {
          _push(`<li><p class="flex gap-1"><span>${ssrInterpolate(index2 + 1)}:</span><span>${ssrInterpolate(item.name)}</span></p></li>`);
        });
        _push(`<!--]--></ul>`);
        if (section.name === "Нога") {
          _push(`<ul>`);
          if (section.model_3D_leg_bedr_treug) {
            _push(`<p class="flex gap-1">1. <span>${ssrInterpolate(section.model_3D_leg_bedr_treug)}</span></p>`);
          } else {
            _push(`<!---->`);
          }
          if (section.model_3D_leg_podkol_yamk) {
            _push(`<p class="flex gap-1">2. <span>${ssrInterpolate(section.model_3D_leg_podkol_yamk)}</span></p>`);
          } else {
            _push(`<!---->`);
          }
          if (section.model_3D_leg_goleni) {
            _push(`<p class="flex gap-1">3. <span>${ssrInterpolate(section.model_3D_leg_goleni)}</span></p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td class="px-4 py-3">${ssrInterpolate(section.link_images_schemes ? "Заполнено" : "Не заполнено")}</td><td class="px-4 py-3">${ssrInterpolate(section.link_tables ? "Заполнено" : "Не заполнено")}</td><td class="px-4 py-3">${ssrInterpolate(section.link_mental_cards ? "Заполнено" : "Не заполнено")}</td><td class="px-4 py-3">${ssrInterpolate(section.link_test ? "Заполнено" : "Не заполнено")}</td><td class="px-4 py-3">${ssrInterpolate(section.link_video ? "Заполнено" : "Не заполнено")}</td><td class="px-4 py-3">`);
        if (section.is_published == 1) {
          _push(`<span class="bg-blue-100 text-blue-800 flex w-20 justify-center items-center text-xs font-medium me-2 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">Опубликован</span>`);
        } else {
          _push(`<span class="bg-yellow-100 text-yellow-800 text-xs flex w-20 justify-center items-center font-medium me-2 px-2 py-1 rounded dark:bg-yellow-900 dark:text-yellow-300">Не отображается на сайте</span>`);
        }
        _push(`</td><td class="px-4 py-3 flex items-center justify-end"><button${ssrRenderAttr("id", `${section.id}-button`)}${ssrRenderAttr("data-dropdown-toggle", `${section.id}`)} class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button"><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg></button><div${ssrRenderAttr("id", `${section.id}`)} class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"><ul class="py-1 text-sm text-gray-700 dark:text-gray-200"${ssrRenderAttr("aria-labelledby", `${section.id}-button`)}><li><a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Изменить</a></li></ul><div class="py-1"><a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Удалить</a></div></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="mt-4 py-4 px-10">`);
      _push(ssrRenderComponent(_sfc_main$1, { data: unref(sections) }, null, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Section/SectionList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
