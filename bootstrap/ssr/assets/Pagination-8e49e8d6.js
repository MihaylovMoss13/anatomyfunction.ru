import { resolveComponent, mergeProps, withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Link-ab392f85.js";
import { DArrowLeft, DArrowRight } from "@element-plus/icons-vue";
const _sfc_main = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = resolveComponent("el-icon");
      if (__props.data.links.length > 3) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center mt-4 space-x-4" }, _attrs))}><!--[-->`);
        ssrRenderList(__props.data.links, (link, k) => {
          _push(`<div class="flex justify-center items-center gap-3">`);
          if (link.label.includes("Previous")) {
            _push(ssrRenderComponent(_sfc_main$1, {
              class: "px-4 py-3 text-sm leading-4 rounded focus:text-blue-500 hover:shadow",
              href: link.url ? __props.data.prev_page_url : __props.data.first_page_url,
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
            _push(ssrRenderComponent(_sfc_main$1, {
              class: "px-4 py-3 text-sm leading-4 rounded focus:text-blue-500 hover:shadow",
              href: link.url ? __props.data.next_page_url : __props.data.last_page_url,
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
            _push(ssrRenderComponent(_sfc_main$1, {
              key: k,
              class: ["px-4 py-3 text-sm leading-4 rounded focus:text-blue-500 hover:shadow", link.active ? "bg-blue-500 text-white hover:bg-blue-700 hover:text-white" : "bg-white hover:bg-gray-100"],
              href: link.url
            }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
