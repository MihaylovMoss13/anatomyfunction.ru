import { onMounted, useSSRContext, ref, resolveComponent, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode } from "vue";
import { ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import "https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js";
import { Fancybox } from "@fancyapps/ui";
import { Head, Link } from "@inertiajs/vue3";
import _sfc_main$3 from "./Text-2b29e19b.js";
import { _ as _sfc_main$2 } from "./App-3dadc7ca.js";
import "@splidejs/vue-splide";
import "flowbite";
import "./Navbar-b1030f76.js";
import "@vueuse/core";
import "./ApplicationLogo-a3a17935.js";
import "@element-plus/icons-vue";
import "aos";
const fancybox = "";
const _sfc_main$1 = {
  __name: "Fancybox-Modal",
  __ssrInlineRender: true,
  props: {
    options: Object
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      const opts = props.options || {};
      Fancybox.bind("[data-fancybox]", opts);
      return () => {
        Fancybox.destroy();
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Fancybox-Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Show_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    section: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    const viewTestBlock = ref(false);
    ref(false);
    const tabs = [
      {
        "name": "Бедренный треугольник",
        "url": "bedr-treug",
        "model": props.section.model_3D_leg_bedr_treug,
        "text": props.section.text_leg_bedr_treug
      },
      {
        "name": "Подколенная ямка",
        "url": "podkol-yamk",
        "model": props.section.model_3D_leg_podkol_yamk,
        "text": props.section.text_leg_podkol_yamk
      },
      {
        "name": "Голень",
        "url": "goleni",
        "model": props.section.model_3D_leg_goleni,
        "text": props.section.text_leg_goleni
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_model_viewer = resolveComponent("model-viewer");
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), {
              title: `Блок "${props.section.name}"`
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center justify-between mb-6 lg:mb-14"${_scopeId}><h1 class="text-[#591653] text-3xl lg:text-6xl font-bold"${_scopeId}>Блок &quot;${ssrInterpolate(props.section.name)}&quot;</h1>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "btn"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` назад `);
                } else {
                  return [
                    createTextVNode(" назад ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-wrap xl:flex-nowrap w-full"${_scopeId}><div class="w-full lg:w-2/6"${_scopeId}><ul class="left-menu flex flex-col md:max-w-md gap-y-4 lg:gap-y-8"${_scopeId}><li${_scopeId}><a target="_blank"${ssrRenderAttr("href", props.section.link_images_schemes)}${_scopeId}>2D рисунки и схемы</a></li><li${_scopeId}><a target="_blank"${ssrRenderAttr("href", props.section.link_tables)}${_scopeId}>Таблицы</a></li><li${_scopeId}><a target="_blank"${ssrRenderAttr("href", props.section.link_mental_cards)}${_scopeId}>Ментальные карты + скрэбл</a></li><li${_scopeId}><a${ssrRenderAttr("href", props.section.link_test)} class="cursor-pointer" target="_blank"${_scopeId}>Тесты</a></li><li${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, { options: {} }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a${ssrRenderAttr("href", props.section.link_video)} class="cursor-pointer" data-fancybox${_scopeId2}>Видео</a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: props.section.link_video,
                      class: "cursor-pointer",
                      "data-fancybox": ""
                    }, "Видео", 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul></div><div class="w-full lg:w-4/6 md:pl-24 flex flex-col max-w-[860px]"${_scopeId}>`);
            if (__props.section.name == "Нога") {
              _push2(`<div${_scopeId}><div class="tabs"${_scopeId}><!--[-->`);
              ssrRenderList(tabs, (tab, index) => {
                _push2(`<div class="tab"${_scopeId}>`);
                if (tab.url == "bedr-treug") {
                  _push2(`<input type="radio" name="css-tabs"${ssrRenderAttr("id", tab.url)} checked class="tab-switch"${_scopeId}>`);
                } else {
                  _push2(`<input type="radio" name="css-tabs"${ssrRenderAttr("id", tab.url)} class="tab-switch"${_scopeId}>`);
                }
                _push2(`<label${ssrRenderAttr("for", tab.url)} class="tab-label"${_scopeId}>${ssrInterpolate(tab.name)}</label><div class="tab-content"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_model_viewer, {
                  class: "mb-7",
                  src: tab.model,
                  "camera-controls": "",
                  "shadow-intensity": "1",
                  "auto-rotate": "",
                  "touch-action": "pan-y"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$3, {
                  "text-data": tab.text
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<div class="relative h-96"${_scopeId}><!--[-->`);
              ssrRenderList(__props.section.section_models, (section, index) => {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_model_viewer, {
                  src: section.model,
                  "camera-controls": "",
                  "shadow-intensity": "1",
                  "auto-rotate": "",
                  "touch-action": "pan-y",
                  class: "h-64"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "pt-2",
                "text-data": __props.section.text
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            if (viewTestBlock.value) {
              _push2(`<div${_scopeId}><iframe src="https://onlinetestpad.com/y56gfcp5m4sqw" frameborder="0"${_scopeId}></iframe></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(unref(Head), {
                title: `Блок "${props.section.name}"`
              }, null, 8, ["title"]),
              createVNode("div", { class: "flex items-center justify-between mb-6 lg:mb-14" }, [
                createVNode("h1", { class: "text-[#591653] text-3xl lg:text-6xl font-bold" }, 'Блок "' + toDisplayString(props.section.name) + '"', 1),
                createVNode(unref(Link), {
                  href: "/",
                  class: "btn"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" назад ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex flex-wrap xl:flex-nowrap w-full" }, [
                createVNode("div", { class: "w-full lg:w-2/6" }, [
                  createVNode("ul", { class: "left-menu flex flex-col md:max-w-md gap-y-4 lg:gap-y-8" }, [
                    createVNode("li", null, [
                      createVNode("a", {
                        target: "_blank",
                        href: props.section.link_images_schemes
                      }, "2D рисунки и схемы", 8, ["href"])
                    ]),
                    createVNode("li", null, [
                      createVNode("a", {
                        target: "_blank",
                        href: props.section.link_tables
                      }, "Таблицы", 8, ["href"])
                    ]),
                    createVNode("li", null, [
                      createVNode("a", {
                        target: "_blank",
                        href: props.section.link_mental_cards
                      }, "Ментальные карты + скрэбл", 8, ["href"])
                    ]),
                    createVNode("li", null, [
                      createVNode("a", {
                        href: props.section.link_test,
                        class: "cursor-pointer",
                        target: "_blank"
                      }, "Тесты", 8, ["href"])
                    ]),
                    createVNode("li", null, [
                      createVNode(_sfc_main$1, { options: {} }, {
                        default: withCtx(() => [
                          createVNode("a", {
                            href: props.section.link_video,
                            class: "cursor-pointer",
                            "data-fancybox": ""
                          }, "Видео", 8, ["href"])
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-full lg:w-4/6 md:pl-24 flex flex-col max-w-[860px]" }, [
                  __props.section.name == "Нога" ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("div", { class: "tabs" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(tabs, (tab, index) => {
                        return createVNode("div", {
                          class: "tab",
                          key: index
                        }, [
                          tab.url == "bedr-treug" ? (openBlock(), createBlock("input", {
                            key: 0,
                            type: "radio",
                            name: "css-tabs",
                            id: tab.url,
                            checked: "",
                            class: "tab-switch"
                          }, null, 8, ["id"])) : (openBlock(), createBlock("input", {
                            key: 1,
                            type: "radio",
                            name: "css-tabs",
                            id: tab.url,
                            class: "tab-switch"
                          }, null, 8, ["id"])),
                          createVNode("label", {
                            for: tab.url,
                            class: "tab-label"
                          }, toDisplayString(tab.name), 9, ["for"]),
                          createVNode("div", { class: "tab-content" }, [
                            createVNode(_component_model_viewer, {
                              class: "mb-7",
                              src: tab.model,
                              "camera-controls": "",
                              "shadow-intensity": "1",
                              "auto-rotate": "",
                              "touch-action": "pan-y"
                            }, null, 8, ["src"]),
                            createVNode(_sfc_main$3, {
                              "text-data": tab.text
                            }, null, 8, ["text-data"])
                          ])
                        ]);
                      }), 64))
                    ])
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "relative h-96"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.section.section_models, (section, index) => {
                      return openBlock(), createBlock("div", { key: index }, [
                        createVNode(_component_model_viewer, {
                          src: section.model,
                          "camera-controls": "",
                          "shadow-intensity": "1",
                          "auto-rotate": "",
                          "touch-action": "pan-y",
                          class: "h-64"
                        }, null, 8, ["src"])
                      ]);
                    }), 128)),
                    createVNode(_sfc_main$3, {
                      class: "pt-2",
                      "text-data": __props.section.text
                    }, null, 8, ["text-data"])
                  ])),
                  viewTestBlock.value ? (openBlock(), createBlock("div", { key: 2 }, [
                    createVNode("iframe", {
                      src: "https://onlinetestpad.com/y56gfcp5m4sqw",
                      frameborder: "0"
                    })
                  ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Section/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
