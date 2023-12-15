import { ref, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, withDirectives, vModelCheckbox, toDisplayString, createTextVNode, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./App-3dadc7ca.js";
import { useForm, Head } from "@inertiajs/vue3";
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { PlusIcon, MinusIcon, FunnelIcon } from "@heroicons/vue/20/solid";
import _sfc_main$3 from "./SectionList-936e7242.js";
import { _ as _sfc_main$2 } from "./SecondaryButton-e85edded.js";
import Banner from "./Banner-c0240b6a.js";
import "flowbite";
import "./Navbar-b1030f76.js";
import "@vueuse/core";
import "./ApplicationLogo-a3a17935.js";
import "@element-plus/icons-vue";
import "aos";
import "./Link-ab392f85.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    sections: Object,
    categories: Object,
    brands: Object
  },
  setup(__props) {
    const filterPrices = useForm({
      prices: [0, 1e5]
    });
    const priceFilter = () => {
      filterPrices.transform((data) => ({
        ...data,
        prices: {
          from: filterPrices.prices[0],
          to: filterPrices.prices[1]
        }
      })).get("section", {
        preserveState: true,
        replace: true
      });
    };
    const mobileFiltersOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Функциональная анатомия" }, null, _parent2, _scopeId));
            _push2(`<div class="bg-white"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(Banner, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(TransitionRoot), {
              as: "template",
              show: mobileFiltersOpen.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Dialog), {
                    as: "div",
                    class: "relative z-40 lg:hidden",
                    onClose: ($event) => mobileFiltersOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(TransitionChild), {
                          as: "template",
                          enter: "transition-opacity ease-linear duration-300",
                          "enter-from": "opacity-0",
                          "enter-to": "opacity-100",
                          leave: "transition-opacity ease-linear duration-300",
                          "leave-from": "opacity-100",
                          "leave-to": "opacity-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="fixed inset-0 bg-black bg-opacity-25"${_scopeId4}></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="fixed inset-0 z-40 flex"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(TransitionChild), {
                          as: "template",
                          enter: "transition ease-in-out duration-300 transform",
                          "enter-from": "translate-x-full",
                          "enter-to": "translate-x-0",
                          leave: "transition ease-in-out duration-300 transform",
                          "leave-from": "translate-x-0",
                          "leave-to": "translate-x-full"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(DialogPanel), { class: "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="flex items-center justify-between px-4"${_scopeId5}><h2 class="text-lg font-medium text-gray-900"${_scopeId5}>Filters</h2><button type="button" class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"${_scopeId5}><span class="sr-only"${_scopeId5}>Close menu</span>`);
                                    _push6(ssrRenderComponent(unref(XMarkIcon), {
                                      class: "h-6 w-6",
                                      "aria-hidden": "true"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</button></div><form class="mt-4 border-t border-gray-200 mx-4"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(Disclosure), {
                                      as: "div",
                                      class: "border-b border-gray-200 py-6"
                                    }, {
                                      default: withCtx(({ open }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h3 class="-my-3 flow-root"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<span class="font-medium text-gray-900"${_scopeId7}>Brand</span><span class="ml-6 flex items-center"${_scopeId7}>`);
                                                if (!open) {
                                                  _push8(ssrRenderComponent(unref(PlusIcon), {
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  _push8(ssrRenderComponent(unref(MinusIcon), {
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  }, null, _parent8, _scopeId7));
                                                }
                                                _push8(`</span>`);
                                              } else {
                                                return [
                                                  createVNode("span", { class: "font-medium text-gray-900" }, "Brand"),
                                                  createVNode("span", { class: "ml-6 flex items-center" }, [
                                                    !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                      key: 0,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                      key: 1,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    }))
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(`</h3>`);
                                          _push7(ssrRenderComponent(unref(DisclosurePanel), { class: "pt-6" }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="space-y-4"${_scopeId7}><!--[-->`);
                                                ssrRenderList(__props.brands, (brand, id) => {
                                                  _push8(`<div class="flex items-center"${_scopeId7}><input${ssrRenderAttr("id", `filter-${brand.id}`)}${ssrRenderAttr("value", brand.id)}${ssrIncludeBooleanAttr(Array.isArray(_ctx.selectedBrands) ? ssrLooseContain(_ctx.selectedBrands, brand.id) : _ctx.selectedBrands) ? " checked" : ""} type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"${_scopeId7}><label${ssrRenderAttr("for", `filter-${brand.id}`)} class="ml-3 text-sm text-gray-600"${_scopeId7}>${ssrInterpolate(brand.name)}</label></div>`);
                                                });
                                                _push8(`<!--]--></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "space-y-4" }, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.brands, (brand, id) => {
                                                      return openBlock(), createBlock("div", {
                                                        key: id,
                                                        class: "flex items-center"
                                                      }, [
                                                        withDirectives(createVNode("input", {
                                                          id: `filter-${brand.id}`,
                                                          value: brand.id,
                                                          "onUpdate:modelValue": ($event) => _ctx.selectedBrands = $event,
                                                          type: "checkbox",
                                                          class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                                          [vModelCheckbox, _ctx.selectedBrands]
                                                        ]),
                                                        createVNode("label", {
                                                          for: `filter-${brand.id}`,
                                                          class: "ml-3 text-sm text-gray-600"
                                                        }, toDisplayString(brand.name), 9, ["for"])
                                                      ]);
                                                    }), 128))
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("h3", { class: "-my-3 flow-root" }, [
                                              createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-medium text-gray-900" }, "Brand"),
                                                  createVNode("span", { class: "ml-6 flex items-center" }, [
                                                    !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                      key: 0,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                      key: 1,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    }))
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "space-y-4" }, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.brands, (brand, id) => {
                                                    return openBlock(), createBlock("div", {
                                                      key: id,
                                                      class: "flex items-center"
                                                    }, [
                                                      withDirectives(createVNode("input", {
                                                        id: `filter-${brand.id}`,
                                                        value: brand.id,
                                                        "onUpdate:modelValue": ($event) => _ctx.selectedBrands = $event,
                                                        type: "checkbox",
                                                        class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                      }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                                        [vModelCheckbox, _ctx.selectedBrands]
                                                      ]),
                                                      createVNode("label", {
                                                        for: `filter-${brand.id}`,
                                                        class: "ml-3 text-sm text-gray-600"
                                                      }, toDisplayString(brand.name), 9, ["for"])
                                                    ]);
                                                  }), 128))
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(Disclosure), {
                                      as: "div",
                                      class: "border-b border-gray-200 py-6"
                                    }, {
                                      default: withCtx(({ open }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h3 class="-my-3 flow-root"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<span class="font-medium text-gray-900"${_scopeId7}>Categories</span><span class="ml-6 flex items-center"${_scopeId7}>`);
                                                if (!open) {
                                                  _push8(ssrRenderComponent(unref(PlusIcon), {
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  _push8(ssrRenderComponent(unref(MinusIcon), {
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  }, null, _parent8, _scopeId7));
                                                }
                                                _push8(`</span>`);
                                              } else {
                                                return [
                                                  createVNode("span", { class: "font-medium text-gray-900" }, "Categories"),
                                                  createVNode("span", { class: "ml-6 flex items-center" }, [
                                                    !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                      key: 0,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                      key: 1,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    }))
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(`</h3>`);
                                          _push7(ssrRenderComponent(unref(DisclosurePanel), { class: "pt-6" }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="space-y-4"${_scopeId7}><!--[-->`);
                                                ssrRenderList(__props.categories, (category) => {
                                                  _push8(`<div class="flex items-center"${_scopeId7}><input${ssrRenderAttr("id", `filter-${category.id}`)}${ssrRenderAttr("value", category.id)} type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(_ctx.selectedCategories) ? ssrLooseContain(_ctx.selectedCategories, category.id) : _ctx.selectedCategories) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"${_scopeId7}><label${ssrRenderAttr("for", `filter-${category.id}`)} class="ml-3 text-sm text-gray-600"${_scopeId7}>${ssrInterpolate(category.name)}</label></div>`);
                                                });
                                                _push8(`<!--]--></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "space-y-4" }, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                                                      return openBlock(), createBlock("div", {
                                                        key: category.id,
                                                        class: "flex items-center"
                                                      }, [
                                                        withDirectives(createVNode("input", {
                                                          id: `filter-${category.id}`,
                                                          value: category.id,
                                                          type: "checkbox",
                                                          "onUpdate:modelValue": ($event) => _ctx.selectedCategories = $event,
                                                          class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                                          [vModelCheckbox, _ctx.selectedCategories]
                                                        ]),
                                                        createVNode("label", {
                                                          for: `filter-${category.id}`,
                                                          class: "ml-3 text-sm text-gray-600"
                                                        }, toDisplayString(category.name), 9, ["for"])
                                                      ]);
                                                    }), 128))
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("h3", { class: "-my-3 flow-root" }, [
                                              createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-medium text-gray-900" }, "Categories"),
                                                  createVNode("span", { class: "ml-6 flex items-center" }, [
                                                    !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                      key: 0,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                      key: 1,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    }))
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "space-y-4" }, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                                                    return openBlock(), createBlock("div", {
                                                      key: category.id,
                                                      class: "flex items-center"
                                                    }, [
                                                      withDirectives(createVNode("input", {
                                                        id: `filter-${category.id}`,
                                                        value: category.id,
                                                        type: "checkbox",
                                                        "onUpdate:modelValue": ($event) => _ctx.selectedCategories = $event,
                                                        class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                      }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                                        [vModelCheckbox, _ctx.selectedCategories]
                                                      ]),
                                                      createVNode("label", {
                                                        for: `filter-${category.id}`,
                                                        class: "ml-3 text-sm text-gray-600"
                                                      }, toDisplayString(category.name), 9, ["for"])
                                                    ]);
                                                  }), 128))
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</form>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "flex items-center justify-between px-4" }, [
                                        createVNode("h2", { class: "text-lg font-medium text-gray-900" }, "Filters"),
                                        createVNode("button", {
                                          type: "button",
                                          class: "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",
                                          onClick: ($event) => mobileFiltersOpen.value = false
                                        }, [
                                          createVNode("span", { class: "sr-only" }, "Close menu"),
                                          createVNode(unref(XMarkIcon), {
                                            class: "h-6 w-6",
                                            "aria-hidden": "true"
                                          })
                                        ], 8, ["onClick"])
                                      ]),
                                      createVNode("form", { class: "mt-4 border-t border-gray-200 mx-4" }, [
                                        createVNode(unref(Disclosure), {
                                          as: "div",
                                          class: "border-b border-gray-200 py-6"
                                        }, {
                                          default: withCtx(({ open }) => [
                                            createVNode("h3", { class: "-my-3 flow-root" }, [
                                              createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-medium text-gray-900" }, "Brand"),
                                                  createVNode("span", { class: "ml-6 flex items-center" }, [
                                                    !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                      key: 0,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                      key: 1,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    }))
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "space-y-4" }, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.brands, (brand, id) => {
                                                    return openBlock(), createBlock("div", {
                                                      key: id,
                                                      class: "flex items-center"
                                                    }, [
                                                      withDirectives(createVNode("input", {
                                                        id: `filter-${brand.id}`,
                                                        value: brand.id,
                                                        "onUpdate:modelValue": ($event) => _ctx.selectedBrands = $event,
                                                        type: "checkbox",
                                                        class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                      }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                                        [vModelCheckbox, _ctx.selectedBrands]
                                                      ]),
                                                      createVNode("label", {
                                                        for: `filter-${brand.id}`,
                                                        class: "ml-3 text-sm text-gray-600"
                                                      }, toDisplayString(brand.name), 9, ["for"])
                                                    ]);
                                                  }), 128))
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(Disclosure), {
                                          as: "div",
                                          class: "border-b border-gray-200 py-6"
                                        }, {
                                          default: withCtx(({ open }) => [
                                            createVNode("h3", { class: "-my-3 flow-root" }, [
                                              createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-medium text-gray-900" }, "Categories"),
                                                  createVNode("span", { class: "ml-6 flex items-center" }, [
                                                    !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                      key: 0,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                      key: 1,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    }))
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "space-y-4" }, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                                                    return openBlock(), createBlock("div", {
                                                      key: category.id,
                                                      class: "flex items-center"
                                                    }, [
                                                      withDirectives(createVNode("input", {
                                                        id: `filter-${category.id}`,
                                                        value: category.id,
                                                        type: "checkbox",
                                                        "onUpdate:modelValue": ($event) => _ctx.selectedCategories = $event,
                                                        class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                      }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                                        [vModelCheckbox, _ctx.selectedCategories]
                                                      ]),
                                                      createVNode("label", {
                                                        for: `filter-${category.id}`,
                                                        class: "ml-3 text-sm text-gray-600"
                                                      }, toDisplayString(category.name), 9, ["for"])
                                                    ]);
                                                  }), 128))
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(DialogPanel), { class: "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center justify-between px-4" }, [
                                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, "Filters"),
                                      createVNode("button", {
                                        type: "button",
                                        class: "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",
                                        onClick: ($event) => mobileFiltersOpen.value = false
                                      }, [
                                        createVNode("span", { class: "sr-only" }, "Close menu"),
                                        createVNode(unref(XMarkIcon), {
                                          class: "h-6 w-6",
                                          "aria-hidden": "true"
                                        })
                                      ], 8, ["onClick"])
                                    ]),
                                    createVNode("form", { class: "mt-4 border-t border-gray-200 mx-4" }, [
                                      createVNode(unref(Disclosure), {
                                        as: "div",
                                        class: "border-b border-gray-200 py-6"
                                      }, {
                                        default: withCtx(({ open }) => [
                                          createVNode("h3", { class: "-my-3 flow-root" }, [
                                            createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-medium text-gray-900" }, "Brand"),
                                                createVNode("span", { class: "ml-6 flex items-center" }, [
                                                  !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                    key: 0,
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                    key: 1,
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  }))
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "space-y-4" }, [
                                                (openBlock(true), createBlock(Fragment, null, renderList(__props.brands, (brand, id) => {
                                                  return openBlock(), createBlock("div", {
                                                    key: id,
                                                    class: "flex items-center"
                                                  }, [
                                                    withDirectives(createVNode("input", {
                                                      id: `filter-${brand.id}`,
                                                      value: brand.id,
                                                      "onUpdate:modelValue": ($event) => _ctx.selectedBrands = $event,
                                                      type: "checkbox",
                                                      class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                                      [vModelCheckbox, _ctx.selectedBrands]
                                                    ]),
                                                    createVNode("label", {
                                                      for: `filter-${brand.id}`,
                                                      class: "ml-3 text-sm text-gray-600"
                                                    }, toDisplayString(brand.name), 9, ["for"])
                                                  ]);
                                                }), 128))
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Disclosure), {
                                        as: "div",
                                        class: "border-b border-gray-200 py-6"
                                      }, {
                                        default: withCtx(({ open }) => [
                                          createVNode("h3", { class: "-my-3 flow-root" }, [
                                            createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-medium text-gray-900" }, "Categories"),
                                                createVNode("span", { class: "ml-6 flex items-center" }, [
                                                  !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                    key: 0,
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                    key: 1,
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  }))
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "space-y-4" }, [
                                                (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                                                  return openBlock(), createBlock("div", {
                                                    key: category.id,
                                                    class: "flex items-center"
                                                  }, [
                                                    withDirectives(createVNode("input", {
                                                      id: `filter-${category.id}`,
                                                      value: category.id,
                                                      type: "checkbox",
                                                      "onUpdate:modelValue": ($event) => _ctx.selectedCategories = $event,
                                                      class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                                      [vModelCheckbox, _ctx.selectedCategories]
                                                    ]),
                                                    createVNode("label", {
                                                      for: `filter-${category.id}`,
                                                      class: "ml-3 text-sm text-gray-600"
                                                    }, toDisplayString(category.name), 9, ["for"])
                                                  ]);
                                                }), 128))
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(unref(TransitionChild), {
                            as: "template",
                            enter: "transition-opacity ease-linear duration-300",
                            "enter-from": "opacity-0",
                            "enter-to": "opacity-100",
                            leave: "transition-opacity ease-linear duration-300",
                            "leave-from": "opacity-100",
                            "leave-to": "opacity-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "fixed inset-0 z-40 flex" }, [
                            createVNode(unref(TransitionChild), {
                              as: "template",
                              enter: "transition ease-in-out duration-300 transform",
                              "enter-from": "translate-x-full",
                              "enter-to": "translate-x-0",
                              leave: "transition ease-in-out duration-300 transform",
                              "leave-from": "translate-x-0",
                              "leave-to": "translate-x-full"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(DialogPanel), { class: "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center justify-between px-4" }, [
                                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, "Filters"),
                                      createVNode("button", {
                                        type: "button",
                                        class: "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",
                                        onClick: ($event) => mobileFiltersOpen.value = false
                                      }, [
                                        createVNode("span", { class: "sr-only" }, "Close menu"),
                                        createVNode(unref(XMarkIcon), {
                                          class: "h-6 w-6",
                                          "aria-hidden": "true"
                                        })
                                      ], 8, ["onClick"])
                                    ]),
                                    createVNode("form", { class: "mt-4 border-t border-gray-200 mx-4" }, [
                                      createVNode(unref(Disclosure), {
                                        as: "div",
                                        class: "border-b border-gray-200 py-6"
                                      }, {
                                        default: withCtx(({ open }) => [
                                          createVNode("h3", { class: "-my-3 flow-root" }, [
                                            createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-medium text-gray-900" }, "Brand"),
                                                createVNode("span", { class: "ml-6 flex items-center" }, [
                                                  !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                    key: 0,
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                    key: 1,
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  }))
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "space-y-4" }, [
                                                (openBlock(true), createBlock(Fragment, null, renderList(__props.brands, (brand, id) => {
                                                  return openBlock(), createBlock("div", {
                                                    key: id,
                                                    class: "flex items-center"
                                                  }, [
                                                    withDirectives(createVNode("input", {
                                                      id: `filter-${brand.id}`,
                                                      value: brand.id,
                                                      "onUpdate:modelValue": ($event) => _ctx.selectedBrands = $event,
                                                      type: "checkbox",
                                                      class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                                      [vModelCheckbox, _ctx.selectedBrands]
                                                    ]),
                                                    createVNode("label", {
                                                      for: `filter-${brand.id}`,
                                                      class: "ml-3 text-sm text-gray-600"
                                                    }, toDisplayString(brand.name), 9, ["for"])
                                                  ]);
                                                }), 128))
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Disclosure), {
                                        as: "div",
                                        class: "border-b border-gray-200 py-6"
                                      }, {
                                        default: withCtx(({ open }) => [
                                          createVNode("h3", { class: "-my-3 flow-root" }, [
                                            createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-medium text-gray-900" }, "Categories"),
                                                createVNode("span", { class: "ml-6 flex items-center" }, [
                                                  !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                    key: 0,
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                    key: 1,
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  }))
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "space-y-4" }, [
                                                (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                                                  return openBlock(), createBlock("div", {
                                                    key: category.id,
                                                    class: "flex items-center"
                                                  }, [
                                                    withDirectives(createVNode("input", {
                                                      id: `filter-${category.id}`,
                                                      value: category.id,
                                                      type: "checkbox",
                                                      "onUpdate:modelValue": ($event) => _ctx.selectedCategories = $event,
                                                      class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                                      [vModelCheckbox, _ctx.selectedCategories]
                                                    ]),
                                                    createVNode("label", {
                                                      for: `filter-${category.id}`,
                                                      class: "ml-3 text-sm text-gray-600"
                                                    }, toDisplayString(category.name), 9, ["for"])
                                                  ]);
                                                }), 128))
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Dialog), {
                      as: "div",
                      class: "relative z-40 lg:hidden",
                      onClose: ($event) => mobileFiltersOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "transition-opacity ease-linear duration-300",
                          "enter-from": "opacity-0",
                          "enter-to": "opacity-100",
                          leave: "transition-opacity ease-linear duration-300",
                          "leave-from": "opacity-100",
                          "leave-to": "opacity-0"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "fixed inset-0 z-40 flex" }, [
                          createVNode(unref(TransitionChild), {
                            as: "template",
                            enter: "transition ease-in-out duration-300 transform",
                            "enter-from": "translate-x-full",
                            "enter-to": "translate-x-0",
                            leave: "transition ease-in-out duration-300 transform",
                            "leave-from": "translate-x-0",
                            "leave-to": "translate-x-full"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(DialogPanel), { class: "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center justify-between px-4" }, [
                                    createVNode("h2", { class: "text-lg font-medium text-gray-900" }, "Filters"),
                                    createVNode("button", {
                                      type: "button",
                                      class: "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",
                                      onClick: ($event) => mobileFiltersOpen.value = false
                                    }, [
                                      createVNode("span", { class: "sr-only" }, "Close menu"),
                                      createVNode(unref(XMarkIcon), {
                                        class: "h-6 w-6",
                                        "aria-hidden": "true"
                                      })
                                    ], 8, ["onClick"])
                                  ]),
                                  createVNode("form", { class: "mt-4 border-t border-gray-200 mx-4" }, [
                                    createVNode(unref(Disclosure), {
                                      as: "div",
                                      class: "border-b border-gray-200 py-6"
                                    }, {
                                      default: withCtx(({ open }) => [
                                        createVNode("h3", { class: "-my-3 flow-root" }, [
                                          createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "font-medium text-gray-900" }, "Brand"),
                                              createVNode("span", { class: "ml-6 flex items-center" }, [
                                                !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                  key: 0,
                                                  class: "h-5 w-5",
                                                  "aria-hidden": "true"
                                                })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                  key: 1,
                                                  class: "h-5 w-5",
                                                  "aria-hidden": "true"
                                                }))
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "space-y-4" }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(__props.brands, (brand, id) => {
                                                return openBlock(), createBlock("div", {
                                                  key: id,
                                                  class: "flex items-center"
                                                }, [
                                                  withDirectives(createVNode("input", {
                                                    id: `filter-${brand.id}`,
                                                    value: brand.id,
                                                    "onUpdate:modelValue": ($event) => _ctx.selectedBrands = $event,
                                                    type: "checkbox",
                                                    class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                  }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                                    [vModelCheckbox, _ctx.selectedBrands]
                                                  ]),
                                                  createVNode("label", {
                                                    for: `filter-${brand.id}`,
                                                    class: "ml-3 text-sm text-gray-600"
                                                  }, toDisplayString(brand.name), 9, ["for"])
                                                ]);
                                              }), 128))
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(Disclosure), {
                                      as: "div",
                                      class: "border-b border-gray-200 py-6"
                                    }, {
                                      default: withCtx(({ open }) => [
                                        createVNode("h3", { class: "-my-3 flow-root" }, [
                                          createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "font-medium text-gray-900" }, "Categories"),
                                              createVNode("span", { class: "ml-6 flex items-center" }, [
                                                !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                  key: 0,
                                                  class: "h-5 w-5",
                                                  "aria-hidden": "true"
                                                })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                  key: 1,
                                                  class: "h-5 w-5",
                                                  "aria-hidden": "true"
                                                }))
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "space-y-4" }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                                                return openBlock(), createBlock("div", {
                                                  key: category.id,
                                                  class: "flex items-center"
                                                }, [
                                                  withDirectives(createVNode("input", {
                                                    id: `filter-${category.id}`,
                                                    value: category.id,
                                                    type: "checkbox",
                                                    "onUpdate:modelValue": ($event) => _ctx.selectedCategories = $event,
                                                    class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                  }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                                    [vModelCheckbox, _ctx.selectedCategories]
                                                  ]),
                                                  createVNode("label", {
                                                    for: `filter-${category.id}`,
                                                    class: "ml-3 text-sm text-gray-600"
                                                  }, toDisplayString(category.name), 9, ["for"])
                                                ]);
                                              }), 128))
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }, 8, ["onClose"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24"${_scopeId}><h1 class="text-4xl font-bold tracking-tight text-gray-900"${_scopeId}>Section List</h1><div class="flex items-center"${_scopeId}><button type="button" class="-m-2 ml-4 p-2 mr-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"${_scopeId}><span class="sr-only"${_scopeId}>Filters</span>`);
            _push2(ssrRenderComponent(unref(FunnelIcon), {
              class: "h-5 w-5",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`</button></div></div><section aria-labelledby="sections-heading" class="pb-24 pt-6"${_scopeId}><h2 id="sections-heading" class="sr-only"${_scopeId}>Анатомия</h2><div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"${_scopeId}><form class="hidden lg:block"${_scopeId}><h3 class="sr-only"${_scopeId}>Price</h3><div class="flex items-center justify-between space-x-3"${_scopeId}><div class="basis-1/3"${_scopeId}><label for="filters-price-from" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"${_scopeId}> From </label><input type="number" id="filters-price-from" placeholder="Min price"${ssrRenderAttr("value", unref(filterPrices).prices[0])} class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"${_scopeId}></div><div class="basis-1/3"${_scopeId}><label for="filters-price-to" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"${_scopeId}> To </label><input type="number" id="filters-price-to"${ssrRenderAttr("value", unref(filterPrices).prices[1])} placeholder="Max price" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "self-end",
              onClick: ($event) => priceFilter()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Ok `);
                } else {
                  return [
                    createTextVNode(" Ok ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(Disclosure), {
              as: "div",
              class: "border-b border-gray-200 py-6"
            }, {
              default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="-my-3 flow-root"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="font-medium text-gray-900"${_scopeId3}>Brand</span><span class="ml-6 flex items-center"${_scopeId3}>`);
                        if (!open) {
                          _push4(ssrRenderComponent(unref(PlusIcon), {
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(unref(MinusIcon), {
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                        }
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "font-medium text-gray-900" }, "Brand"),
                          createVNode("span", { class: "ml-6 flex items-center" }, [
                            !open ? (openBlock(), createBlock(unref(PlusIcon), {
                              key: 0,
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })) : (openBlock(), createBlock(unref(MinusIcon), {
                              key: 1,
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            }))
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</h3>`);
                  _push3(ssrRenderComponent(unref(DisclosurePanel), { class: "pt-6" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(__props.brands, (brand, id) => {
                          _push4(`<div class="flex items-center"${_scopeId3}><input${ssrRenderAttr("id", `filter-${brand.id}`)}${ssrRenderAttr("value", brand.id)}${ssrIncludeBooleanAttr(Array.isArray(_ctx.selectedBrands) ? ssrLooseContain(_ctx.selectedBrands, brand.id) : _ctx.selectedBrands) ? " checked" : ""} type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"${_scopeId3}><label${ssrRenderAttr("for", `filter-${brand.id}`)} class="ml-3 text-sm text-gray-600"${_scopeId3}>${ssrInterpolate(brand.name)}</label></div>`);
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.brands, (brand, id) => {
                              return openBlock(), createBlock("div", {
                                key: id,
                                class: "flex items-center"
                              }, [
                                withDirectives(createVNode("input", {
                                  id: `filter-${brand.id}`,
                                  value: brand.id,
                                  "onUpdate:modelValue": ($event) => _ctx.selectedBrands = $event,
                                  type: "checkbox",
                                  class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                  [vModelCheckbox, _ctx.selectedBrands]
                                ]),
                                createVNode("label", {
                                  for: `filter-${brand.id}`,
                                  class: "ml-3 text-sm text-gray-600"
                                }, toDisplayString(brand.name), 9, ["for"])
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h3", { class: "-my-3 flow-root" }, [
                      createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "font-medium text-gray-900" }, "Brand"),
                          createVNode("span", { class: "ml-6 flex items-center" }, [
                            !open ? (openBlock(), createBlock(unref(PlusIcon), {
                              key: 0,
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })) : (openBlock(), createBlock(unref(MinusIcon), {
                              key: 1,
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            }))
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.brands, (brand, id) => {
                            return openBlock(), createBlock("div", {
                              key: id,
                              class: "flex items-center"
                            }, [
                              withDirectives(createVNode("input", {
                                id: `filter-${brand.id}`,
                                value: brand.id,
                                "onUpdate:modelValue": ($event) => _ctx.selectedBrands = $event,
                                type: "checkbox",
                                class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                [vModelCheckbox, _ctx.selectedBrands]
                              ]),
                              createVNode("label", {
                                for: `filter-${brand.id}`,
                                class: "ml-3 text-sm text-gray-600"
                              }, toDisplayString(brand.name), 9, ["for"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Disclosure), {
              as: "div",
              class: "border-b border-gray-200 py-6"
            }, {
              default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="-my-3 flow-root"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="font-medium text-gray-900"${_scopeId3}>Categories</span><span class="ml-6 flex items-center"${_scopeId3}>`);
                        if (!open) {
                          _push4(ssrRenderComponent(unref(PlusIcon), {
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(unref(MinusIcon), {
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                        }
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "font-medium text-gray-900" }, "Categories"),
                          createVNode("span", { class: "ml-6 flex items-center" }, [
                            !open ? (openBlock(), createBlock(unref(PlusIcon), {
                              key: 0,
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })) : (openBlock(), createBlock(unref(MinusIcon), {
                              key: 1,
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            }))
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</h3>`);
                  _push3(ssrRenderComponent(unref(DisclosurePanel), { class: "pt-6" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(__props.categories, (category) => {
                          _push4(`<div class="flex items-center"${_scopeId3}><input${ssrRenderAttr("id", `filter-${category.id}`)}${ssrRenderAttr("value", category.id)} type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(_ctx.selectedCategories) ? ssrLooseContain(_ctx.selectedCategories, category.id) : _ctx.selectedCategories) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"${_scopeId3}><label${ssrRenderAttr("for", `filter-${category.id}`)} class="ml-3 text-sm text-gray-600"${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                              return openBlock(), createBlock("div", {
                                key: category.id,
                                class: "flex items-center"
                              }, [
                                withDirectives(createVNode("input", {
                                  id: `filter-${category.id}`,
                                  value: category.id,
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => _ctx.selectedCategories = $event,
                                  class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                  [vModelCheckbox, _ctx.selectedCategories]
                                ]),
                                createVNode("label", {
                                  for: `filter-${category.id}`,
                                  class: "ml-3 text-sm text-gray-600"
                                }, toDisplayString(category.name), 9, ["for"])
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h3", { class: "-my-3 flow-root" }, [
                      createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "font-medium text-gray-900" }, "Categories"),
                          createVNode("span", { class: "ml-6 flex items-center" }, [
                            !open ? (openBlock(), createBlock(unref(PlusIcon), {
                              key: 0,
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })) : (openBlock(), createBlock(unref(MinusIcon), {
                              key: 1,
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            }))
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.id,
                              class: "flex items-center"
                            }, [
                              withDirectives(createVNode("input", {
                                id: `filter-${category.id}`,
                                value: category.id,
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => _ctx.selectedCategories = $event,
                                class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                [vModelCheckbox, _ctx.selectedCategories]
                              ]),
                              createVNode("label", {
                                for: `filter-${category.id}`,
                                class: "ml-3 text-sm text-gray-600"
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form><div class="lg:col-span-3"${_scopeId}><div class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { sections: __props.sections }, null, _parent2, _scopeId));
            _push2(`</div></div></div></section></main></div></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Функциональная анатомия" }),
              createVNode("div", { class: "bg-white" }, [
                createVNode("div", null, [
                  createVNode(Banner),
                  createVNode(unref(TransitionRoot), {
                    as: "template",
                    show: mobileFiltersOpen.value
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Dialog), {
                        as: "div",
                        class: "relative z-40 lg:hidden",
                        onClose: ($event) => mobileFiltersOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(TransitionChild), {
                            as: "template",
                            enter: "transition-opacity ease-linear duration-300",
                            "enter-from": "opacity-0",
                            "enter-to": "opacity-100",
                            leave: "transition-opacity ease-linear duration-300",
                            "leave-from": "opacity-100",
                            "leave-to": "opacity-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "fixed inset-0 z-40 flex" }, [
                            createVNode(unref(TransitionChild), {
                              as: "template",
                              enter: "transition ease-in-out duration-300 transform",
                              "enter-from": "translate-x-full",
                              "enter-to": "translate-x-0",
                              leave: "transition ease-in-out duration-300 transform",
                              "leave-from": "translate-x-0",
                              "leave-to": "translate-x-full"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(DialogPanel), { class: "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center justify-between px-4" }, [
                                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, "Filters"),
                                      createVNode("button", {
                                        type: "button",
                                        class: "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",
                                        onClick: ($event) => mobileFiltersOpen.value = false
                                      }, [
                                        createVNode("span", { class: "sr-only" }, "Close menu"),
                                        createVNode(unref(XMarkIcon), {
                                          class: "h-6 w-6",
                                          "aria-hidden": "true"
                                        })
                                      ], 8, ["onClick"])
                                    ]),
                                    createVNode("form", { class: "mt-4 border-t border-gray-200 mx-4" }, [
                                      createVNode(unref(Disclosure), {
                                        as: "div",
                                        class: "border-b border-gray-200 py-6"
                                      }, {
                                        default: withCtx(({ open }) => [
                                          createVNode("h3", { class: "-my-3 flow-root" }, [
                                            createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-medium text-gray-900" }, "Brand"),
                                                createVNode("span", { class: "ml-6 flex items-center" }, [
                                                  !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                    key: 0,
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                    key: 1,
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  }))
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "space-y-4" }, [
                                                (openBlock(true), createBlock(Fragment, null, renderList(__props.brands, (brand, id) => {
                                                  return openBlock(), createBlock("div", {
                                                    key: id,
                                                    class: "flex items-center"
                                                  }, [
                                                    withDirectives(createVNode("input", {
                                                      id: `filter-${brand.id}`,
                                                      value: brand.id,
                                                      "onUpdate:modelValue": ($event) => _ctx.selectedBrands = $event,
                                                      type: "checkbox",
                                                      class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                                      [vModelCheckbox, _ctx.selectedBrands]
                                                    ]),
                                                    createVNode("label", {
                                                      for: `filter-${brand.id}`,
                                                      class: "ml-3 text-sm text-gray-600"
                                                    }, toDisplayString(brand.name), 9, ["for"])
                                                  ]);
                                                }), 128))
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Disclosure), {
                                        as: "div",
                                        class: "border-b border-gray-200 py-6"
                                      }, {
                                        default: withCtx(({ open }) => [
                                          createVNode("h3", { class: "-my-3 flow-root" }, [
                                            createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-medium text-gray-900" }, "Categories"),
                                                createVNode("span", { class: "ml-6 flex items-center" }, [
                                                  !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                    key: 0,
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                    key: 1,
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  }))
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "space-y-4" }, [
                                                (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                                                  return openBlock(), createBlock("div", {
                                                    key: category.id,
                                                    class: "flex items-center"
                                                  }, [
                                                    withDirectives(createVNode("input", {
                                                      id: `filter-${category.id}`,
                                                      value: category.id,
                                                      type: "checkbox",
                                                      "onUpdate:modelValue": ($event) => _ctx.selectedCategories = $event,
                                                      class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                                      [vModelCheckbox, _ctx.selectedCategories]
                                                    ]),
                                                    createVNode("label", {
                                                      for: `filter-${category.id}`,
                                                      class: "ml-3 text-sm text-gray-600"
                                                    }, toDisplayString(category.name), 9, ["for"])
                                                  ]);
                                                }), 128))
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["onClose"])
                    ]),
                    _: 1
                  }, 8, ["show"]),
                  createVNode("main", { class: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" }, [
                    createVNode("div", { class: "flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24" }, [
                      createVNode("h1", { class: "text-4xl font-bold tracking-tight text-gray-900" }, "Section List"),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("button", {
                          type: "button",
                          class: "-m-2 ml-4 p-2 mr-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden",
                          onClick: ($event) => mobileFiltersOpen.value = true
                        }, [
                          createVNode("span", { class: "sr-only" }, "Filters"),
                          createVNode(unref(FunnelIcon), {
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          })
                        ], 8, ["onClick"])
                      ])
                    ]),
                    createVNode("section", {
                      "aria-labelledby": "sections-heading",
                      class: "pb-24 pt-6"
                    }, [
                      createVNode("h2", {
                        id: "sections-heading",
                        class: "sr-only"
                      }, "Анатомия"),
                      createVNode("div", { class: "grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4" }, [
                        createVNode("form", { class: "hidden lg:block" }, [
                          createVNode("h3", { class: "sr-only" }, "Price"),
                          createVNode("div", { class: "flex items-center justify-between space-x-3" }, [
                            createVNode("div", { class: "basis-1/3" }, [
                              createVNode("label", {
                                for: "filters-price-from",
                                class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                              }, " From "),
                              withDirectives(createVNode("input", {
                                type: "number",
                                id: "filters-price-from",
                                placeholder: "Min price",
                                "onUpdate:modelValue": ($event) => unref(filterPrices).prices[0] = $event,
                                class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(filterPrices).prices[0]]
                              ])
                            ]),
                            createVNode("div", { class: "basis-1/3" }, [
                              createVNode("label", {
                                for: "filters-price-to",
                                class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                              }, " To "),
                              withDirectives(createVNode("input", {
                                type: "number",
                                id: "filters-price-to",
                                "onUpdate:modelValue": ($event) => unref(filterPrices).prices[1] = $event,
                                placeholder: "Max price",
                                class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(filterPrices).prices[1]]
                              ])
                            ]),
                            createVNode(_sfc_main$2, {
                              class: "self-end",
                              onClick: ($event) => priceFilter()
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Ok ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          createVNode(unref(Disclosure), {
                            as: "div",
                            class: "border-b border-gray-200 py-6"
                          }, {
                            default: withCtx(({ open }) => [
                              createVNode("h3", { class: "-my-3 flow-root" }, [
                                createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "font-medium text-gray-900" }, "Brand"),
                                    createVNode("span", { class: "ml-6 flex items-center" }, [
                                      !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                        key: 0,
                                        class: "h-5 w-5",
                                        "aria-hidden": "true"
                                      })) : (openBlock(), createBlock(unref(MinusIcon), {
                                        key: 1,
                                        class: "h-5 w-5",
                                        "aria-hidden": "true"
                                      }))
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "space-y-4" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.brands, (brand, id) => {
                                      return openBlock(), createBlock("div", {
                                        key: id,
                                        class: "flex items-center"
                                      }, [
                                        withDirectives(createVNode("input", {
                                          id: `filter-${brand.id}`,
                                          value: brand.id,
                                          "onUpdate:modelValue": ($event) => _ctx.selectedBrands = $event,
                                          type: "checkbox",
                                          class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                          [vModelCheckbox, _ctx.selectedBrands]
                                        ]),
                                        createVNode("label", {
                                          for: `filter-${brand.id}`,
                                          class: "ml-3 text-sm text-gray-600"
                                        }, toDisplayString(brand.name), 9, ["for"])
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Disclosure), {
                            as: "div",
                            class: "border-b border-gray-200 py-6"
                          }, {
                            default: withCtx(({ open }) => [
                              createVNode("h3", { class: "-my-3 flow-root" }, [
                                createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "font-medium text-gray-900" }, "Categories"),
                                    createVNode("span", { class: "ml-6 flex items-center" }, [
                                      !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                        key: 0,
                                        class: "h-5 w-5",
                                        "aria-hidden": "true"
                                      })) : (openBlock(), createBlock(unref(MinusIcon), {
                                        key: 1,
                                        class: "h-5 w-5",
                                        "aria-hidden": "true"
                                      }))
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "space-y-4" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                                      return openBlock(), createBlock("div", {
                                        key: category.id,
                                        class: "flex items-center"
                                      }, [
                                        withDirectives(createVNode("input", {
                                          id: `filter-${category.id}`,
                                          value: category.id,
                                          type: "checkbox",
                                          "onUpdate:modelValue": ($event) => _ctx.selectedCategories = $event,
                                          class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                          [vModelCheckbox, _ctx.selectedCategories]
                                        ]),
                                        createVNode("label", {
                                          for: `filter-${category.id}`,
                                          class: "ml-3 text-sm text-gray-600"
                                        }, toDisplayString(category.name), 9, ["for"])
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "lg:col-span-3" }, [
                          createVNode("div", { class: "relative" }, [
                            createVNode(_sfc_main$3, { sections: __props.sections }, null, 8, ["sections"])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Section/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
