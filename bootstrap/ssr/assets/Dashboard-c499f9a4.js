import { resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AdminLayout-f87b9ec3.js";
import "./Navigation-97a02672.js";
import "./ApplicationLogo-a3a17935.js";
import "@vueuse/core";
import "./Sidebar-2df59c6c.js";
import "./Link-ab392f85.js";
import "flowbite";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    section: Number
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Head, { title: "Admin Dashboard" }, null, _parent2, _scopeId));
            _push2(`<div class="flex-1 px-4 mt-10"${_scopeId}><div class="mb-6 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 xl:grid-cols-4"${_scopeId}><div class="bg-gradient-to-r from-blue-500 to-blue-400 p-4 rounded-lg"${_scopeId}><div class="mt-5 flex justify-center items-center mb-4"${_scopeId}><div class="text-3xl font-bold"${_scopeId}>${ssrInterpolate(__props.section)}</div></div><div class="flex w-full justify-center items-center flex-col"${_scopeId}><div class="text-xl font-semibold"${_scopeId}>Части тела</div></div></div></div></div>`);
          } else {
            return [
              createVNode(_component_Head, { title: "Admin Dashboard" }),
              createVNode("div", { class: "flex-1 px-4 mt-10" }, [
                createVNode("div", { class: "mb-6 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 xl:grid-cols-4" }, [
                  createVNode("div", { class: "bg-gradient-to-r from-blue-500 to-blue-400 p-4 rounded-lg" }, [
                    createVNode("div", { class: "mt-5 flex justify-center items-center mb-4" }, [
                      createVNode("div", { class: "text-3xl font-bold" }, toDisplayString(__props.section), 1)
                    ]),
                    createVNode("div", { class: "flex w-full justify-center items-center flex-col" }, [
                      createVNode("div", { class: "text-xl font-semibold" }, "Части тела")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
