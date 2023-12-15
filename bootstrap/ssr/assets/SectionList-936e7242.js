import { resolveComponent, unref, withCtx, createVNode, useSSRContext, openBlock, createBlock, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Link, usePage, Head } from "@inertiajs/vue3";
import { DArrowLeft, DArrowRight } from "@element-plus/icons-vue";
import { _ as _sfc_main$2 } from "./Link-ab392f85.js";
const _sfc_main$1 = {
  __name: "Paginate",
  __ssrInlineRender: true,
  props: {
    sections: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = resolveComponent("el-icon");
      _push(`<!--[-->`);
      ssrRenderList(__props.sections.links, (link, index) => {
        _push(`<div class="flex text-gray-700">`);
        if (link.label.includes("Previous")) {
          _push(ssrRenderComponent(unref(Link), {
            class: ["w-10 h-10 flex items-center justify-center rounded-full border border-blue-gray-100 bg-transparent text-sm text-blue-gray-700 dark:text-gray-100 transition duration-150 ease-in-out hover:bg-light-300 dark:hover:bg-gray-600", link.url ? "" : "hidden"],
            href: link.url ? __props.sections.prev_page_url : __props.sections.first_page_url,
            "aria-label": "Previous"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_el_icon, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(DArrowLeft), null, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(DArrowLeft))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      createVNode(unref(DArrowLeft))
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
        } else if (link.label.includes("Next")) {
          _push(ssrRenderComponent(unref(Link), {
            class: ["w-10 h-10 flex items-center justify-center rounded-full border border-blue-gray-100 bg-transparent text-sm text-blue-gray-700 dark:text-gray-100 transition duration-150 ease-in-out hover:bg-light-300 dark:hover:bg-gray-600", link.url ? "" : "hidden"],
            href: link.url ? __props.sections.next_page_url : __props.sections.last_page_url,
            "aria-label": "Previous"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_el_icon, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(DArrowRight), null, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(DArrowRight))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      createVNode(unref(DArrowRight))
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(ssrRenderComponent(unref(Link), {
            class: ["w-10 h-10 flex items-center justify-center rounded-full text-md transition duration-150 ease-in-out", link.active ? "bg-gradient-to-t via-90% from-pink-600 to-pink-400 hover:bg-gradient-to-b text-white hover:text-white" : "bg-gray-200 hover:bg-gray-200 text-gray-900"],
            key: index,
            href: link.url
          }, null, _parent));
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Paginate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "SectionList",
  __ssrInlineRender: true,
  props: {
    sections: Object
  },
  setup(__props) {
    usePage().props.auth;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_carousel = resolveComponent("el-carousel");
      const _component_el_carousel_item = resolveComponent("el-carousel-item");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Анатомия" }, null, _parent));
      _push(`<div class="bg-white dark:bg-gray-900"><div class="mx-auto flex flex-col w-full px-4 sm:px-6 lg:px-8"><div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"><!--[-->`);
      ssrRenderList(__props.sections.data, (section) => {
        _push(`<div class="shadow-lg rounded-lg p-4">`);
        _push(ssrRenderComponent(_component_el_carousel, {
          interval: 5e3,
          trigger: "click",
          class: "rounded-lg"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (section.section_images.length) {
                _push2(`<!--[-->`);
                ssrRenderList(section.section_images, (pimg, index) => {
                  _push2(ssrRenderComponent(_component_el_carousel_item, { key: index }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<img${ssrRenderAttr("src", pimg.image)}${ssrRenderAttr("alt", section.title)} class="h-20 w-20 object-cover object-center lg:h-full lg:w-full"${_scopeId2}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: pimg.image,
                            alt: section.title,
                            class: "h-20 w-20 object-cover object-center lg:h-full lg:w-full"
                          }, null, 8, ["src", "alt"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(ssrRenderComponent(_component_el_carousel_item, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png" class="h-20 w-20 object-cover object-center lg:h-full lg:w-full"${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png",
                          class: "h-20 w-20 object-cover object-center lg:h-full lg:w-full"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              }
            } else {
              return [
                section.section_images.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(section.section_images, (pimg, index) => {
                  return openBlock(), createBlock(_component_el_carousel_item, { key: index }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: pimg.image,
                        alt: section.title,
                        class: "h-20 w-20 object-cover object-center lg:h-full lg:w-full"
                      }, null, 8, ["src", "alt"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128)) : (openBlock(), createBlock(_component_el_carousel_item, { key: 1 }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png",
                      class: "h-20 w-20 object-cover object-center lg:h-full lg:w-full"
                    })
                  ]),
                  _: 1
                }))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="px-4 mt-4"><div>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          href: _ctx.route("section.view", section.slug),
          class: "text-gray-900 font-semibold dark:text-gray-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span aria-hidden="true" class="line-clamp-1"${_scopeId}>${ssrInterpolate(section.name)}</span>`);
            } else {
              return [
                createVNode("span", {
                  "aria-hidden": "true",
                  class: "line-clamp-1"
                }, toDisplayString(section.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div><div data-aos="fade-left" class="mt-10 flex justify-end gap-3">`);
      _push(ssrRenderComponent(_sfc_main$1, { sections: __props.sections }, null, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Section/SectionList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
