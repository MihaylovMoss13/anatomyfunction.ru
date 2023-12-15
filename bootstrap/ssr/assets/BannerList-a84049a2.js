import { ref, watch, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, withModifiers, withDirectives, vModelText, vModelSelect, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Pagination-8e49e8d6.js";
import { usePage, router } from "@inertiajs/vue3";
import { Plus } from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";
import "./Link-ab392f85.js";
const Select_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "BannerList",
  __ssrInlineRender: true,
  props: {
    banners: Object
  },
  setup(__props) {
    const searchValue = usePage().props.search;
    ref(false);
    const isEditItem = ref(false);
    const dialogVisible = ref(false);
    const id = ref("");
    const name = ref("");
    const slug = ref("");
    const image = ref("");
    const isActive = ref(false);
    ref(true);
    const getDefaultImage = () => {
      return "../../images/no_image.jpg";
    };
    const dialogPreviewImg = ref(false);
    const dialogImageUrl = ref("");
    const images = ref([]);
    const handleFileChange = (file) => {
      images.value.push(file);
    };
    const handlePictureCardPreview = (file) => {
      dialogImageUrl.value = file.url;
      dialogPreviewImg.value = true;
    };
    const handleRemove = (file) => {
      console.log(file);
    };
    const deleteImage = async (slug2) => {
      try {
        await router.delete("/admin/banner/image/" + slug2, {
          onSuccess: (page) => {
            resetImage();
            ElNotification({
              title: "Success",
              message: page.props.flash.success,
              type: "success"
            });
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    const resetImage = () => {
      image.value = "";
      images.value = "";
    };
    const search = ref(searchValue);
    watch(search, (value) => {
      router.get(
        "/admin/banner/index",
        { search: value },
        {
          preserveState: false
        }
      );
    });
    const AddBanner = async () => {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("isActive", isActive.value);
      for (const image2 of images.value) {
        formData.append("image", image2.raw);
      }
      try {
        await router.post("store", formData, {
          onSuccess: (page) => {
            ElNotification({
              title: "Success",
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
    const updateBanner = async () => {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("isActive", isActive.value);
      formData.append("_method", "PUT");
      for (const image2 of images.value) {
        formData.append("image", image2.raw);
      }
      try {
        await router.post("update/" + id.value, formData, {
          onSuccess: (page) => {
            dialogVisible.value = false;
            resetFormData();
            ElNotification({
              title: "Success",
              message: page.props.flash.success,
              type: "success"
            });
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    const resetFormData = () => {
      id.value = "";
      name.value = "";
      isActive.value = false;
      image.value = "";
      images.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dialog = resolveComponent("el-dialog");
      const _component_el_upload = resolveComponent("el-upload");
      const _component_el_icon = resolveComponent("el-icon");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 dark:bg-gray-900 p-3 sm:p-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_dialog, {
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
        class: "text-gray-800 dark:bg-gray-800 dark:text-gray-200",
        width: "30%"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg text-gray-800 dark:text-white mb-6"${_scopeId}>${ssrInterpolate(isEditItem.value ? "Edit Banner" : "Add Banner")}</h3><form${_scopeId}><div class="mb-6"${_scopeId}><label for="form_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Name</label><input type="text"${ssrRenderAttr("value", name.value)} name="name" id="form_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Banner name" required${_scopeId}></div><div class="mb-6"${_scopeId}><label for="form_active" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Status</label><select id="form_active" name="form_active" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"${_scopeId}><option value="1" selected${_scopeId}>Active</option><option value="0"${ssrIncludeBooleanAttr(Array.isArray(isActive.value) ? ssrLooseContain(isActive.value, "0") : ssrLooseEqual(isActive.value, "0")) ? " selected" : ""}${_scopeId}>Non Active</option></select></div><div class="mt-6"${_scopeId}><div class="${ssrRenderClass([image.value ? "hidden" : "", "relative z-0 w-full mb-6 group"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_upload, {
              "file-list": images.value,
              "onUpdate:fileList": ($event) => images.value = $event,
              accept: ".jpg, .jpeg, .png",
              "list-type": "picture-card",
              limit: 1,
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
                        _push4(`<img w-full${ssrRenderAttr("src", dialogImageUrl.value)} alt="Preview Image"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            "w-full": "",
                            src: dialogImageUrl.value,
                            alt: "Preview Image"
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
                          src: dialogImageUrl.value,
                          alt: "Preview Image"
                        }, null, 8, ["src"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (image.value) {
              _push2(`<div class="flex flex-nowrap mb-8"${_scopeId}><div class="relative w-32 h-32"${_scopeId}><img class="w-48 h-32 rounded-lg border"${ssrRenderAttr("src", image.value)} alt=""${_scopeId}><span class="absolute top-0 -right-2 transform -translate-y-1/2 w-6 h-6 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"${_scopeId}><span class="text-white text-lg font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"${_scopeId}>x</span></span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex w-full justify-center items-center gap-4"${_scopeId}><button type="button" class="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-dark dark:hover:bg-slate-900 dark:focus:ring-black"${_scopeId}>Cancel</button><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"${_scopeId}>Submit</button></div></form>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg text-gray-800 dark:text-white mb-6" }, toDisplayString(isEditItem.value ? "Edit Banner" : "Add Banner"), 1),
              createVNode("form", {
                onSubmit: withModifiers(($event) => isEditItem.value ? updateBanner() : AddBanner(), ["prevent"])
              }, [
                createVNode("div", { class: "mb-6" }, [
                  createVNode("label", {
                    for: "form_name",
                    class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  }, "Name"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => name.value = $event,
                    name: "name",
                    id: "form_name",
                    class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                    placeholder: "Banner name",
                    required: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, name.value]
                  ])
                ]),
                createVNode("div", { class: "mb-6" }, [
                  createVNode("label", {
                    for: "form_active",
                    class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  }, "Status"),
                  withDirectives(createVNode("select", {
                    id: "form_active",
                    name: "form_active",
                    "onUpdate:modelValue": ($event) => isActive.value = $event,
                    class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  }, [
                    createVNode("option", {
                      value: "1",
                      selected: ""
                    }, "Active"),
                    createVNode("option", { value: "0" }, "Non Active")
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, isActive.value]
                  ])
                ]),
                createVNode("div", { class: "mt-6" }, [
                  createVNode("div", {
                    class: ["relative z-0 w-full mb-6 group", image.value ? "hidden" : ""]
                  }, [
                    createVNode(_component_el_upload, {
                      "file-list": images.value,
                      "onUpdate:fileList": ($event) => images.value = $event,
                      accept: ".jpg, .jpeg, .png",
                      "list-type": "picture-card",
                      limit: 1,
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
                              src: dialogImageUrl.value,
                              alt: "Preview Image"
                            }, null, 8, ["src"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["file-list", "onUpdate:fileList"])
                  ], 2),
                  image.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-nowrap mb-8"
                  }, [
                    createVNode("div", { class: "relative w-32 h-32" }, [
                      createVNode("img", {
                        class: "w-48 h-32 rounded-lg border",
                        src: image.value,
                        alt: ""
                      }, null, 8, ["src"]),
                      createVNode("span", { class: "absolute top-0 -right-2 transform -translate-y-1/2 w-6 h-6 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full" }, [
                        createVNode("span", {
                          onClick: ($event) => deleteImage(slug.value),
                          class: "text-white text-lg font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        }, "x", 8, ["onClick"])
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "flex w-full justify-center items-center gap-4" }, [
                  createVNode("button", {
                    type: "button",
                    onClick: ($event) => dialogVisible.value = false,
                    class: "text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-dark dark:hover:bg-slate-900 dark:focus:ring-black"
                  }, "Cancel", 8, ["onClick"]),
                  createVNode("button", {
                    type: "submit",
                    class: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  }, "Submit")
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mx-auto max-w-screen-xl px-4 lg:px-12"><div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden"><div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"><div class="w-full md:w-1/2"><form class="flex items-center"><label for="simple-search" class="sr-only">Search</label><div class="relative w-full"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text"${ssrRenderAttr("value", search.value)} id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required=""></div></form></div><div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"><button type="button" class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"><svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"></path></svg> Add section </button><div class="flex items-center space-x-3 w-full md:w-auto"><button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button"><svg class="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg> Actions </button><div id="actionsDropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"><ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton"><li><a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a></li></ul><div class="py-1"><a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a></div></div><button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd"></path></svg> Filter <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg></button><div id="filterDropdown" class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"><h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6><ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton"><li class="flex items-center"><input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"><label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label></li><li class="flex items-center"><input id="fitbit" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"><label for="fitbit" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft (16)</label></li><li class="flex items-center"><input id="razor" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"><label for="razor" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razor (49)</label></li><li class="flex items-center"><input id="nikon" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"><label for="nikon" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Nikon (12)</label></li><li class="flex items-center"><input id="benq" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"><label for="benq" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">BenQ (74)</label></li></ul></div></div></div></div><div class="overflow-x-auto"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"><tr><th scope="col" class="px-4 py-3">#</th><th scope="col" class="px-4 py-3">Name</th><th scope="col" class="px-4 py-3">Image</th><th scope="col" class="px-4 py-3">Status</th><th scope="col" class="px-4 py-3"><span class="sr-only">Actions</span></th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.banners.data, (item, index) => {
        _push(`<tr class="border-b dark:border-gray-700"><td class="px-4 py-3">${ssrInterpolate(index + 1)}</td><th scope="row" class="px-4 py-3 font-medium dark:text-gray-200 text-gray-900 whitespace-nowrap">${ssrInterpolate(item.name)}</th><td class="px-4 py-3">`);
        if (item.image) {
          _push(`<img class="w-16 h-10 rounded"${ssrRenderAttr("src", item.image)}${ssrRenderAttr("aria-label", item.name)}>`);
        } else {
          _push(`<img class="w-16 h-10 rounded"${ssrRenderAttr("src", getDefaultImage())}>`);
        }
        _push(`</td><td class="px-4 py-3"><td class="px-4 py-3">`);
        if (item.isActive == 1) {
          _push(`<span class="bg-green-100 text-green-800 flex w-20 justify-center items-center text-xs font-medium me-2 px-2 py-1 rounded dark:bg-green-900 dark:text-green-300">Active</span>`);
        } else {
          _push(`<span class="bg-red-100 text-red-800 flex w-20 justify-center items-center text-xs font-medium me-2 px-2 py-1 rounded dark:bg-red-900 dark:text-red-300">Non Active</span>`);
        }
        _push(`</td></td><td class="px-4 py-3 flex items-center justify-end"><button${ssrRenderAttr("id", `${item.id}-button`)}${ssrRenderAttr("data-dropdown-toggle", `${item.id}`)} class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button"><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg></button><div${ssrRenderAttr("id", `${item.id}`)} class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"><ul class="py-1 text-sm text-gray-700 dark:text-gray-200"${ssrRenderAttr("aria-labelledby", `${item.id}-button`)}><li><a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a></li></ul><div class="py-1"><a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a></div></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="mt-4 py-4 px-10">`);
      _push(ssrRenderComponent(_sfc_main$1, { data: __props.banners }, null, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Banner/BannerList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
