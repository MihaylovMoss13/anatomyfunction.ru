import { resolveComponent, withCtx, createVNode, openBlock, createBlock, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./App-3dadc7ca.js";
import Banner from "./Banner-c0240b6a.js";
import "flowbite";
import "./Navbar-b1030f76.js";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./ApplicationLogo-a3a17935.js";
import "@element-plus/icons-vue";
import "aos";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: "Личный кабинет" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Banner, null, null, _parent2, _scopeId));
            _push2(`<div class="block py-10 h-auto"${_scopeId}><div class="mx-auto mt-2 max-w-screen-lg px-2"${_scopeId}><div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row"${_scopeId}><p class="flex-1 text-base font-bold text-gray-900"${_scopeId}>Latest Order</p><div class="mt-4 sm:mt-0"${_scopeId}><div class="flex items-center justify-start sm:justify-end"${_scopeId}><div class="flex items-center"${_scopeId}><label for="" class="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"${_scopeId}> Sort by: </label><select name="" class="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"${_scopeId}><option class="whitespace-no-wrap text-sm"${_scopeId}>Recent</option></select></div><button type="button" class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow"${_scopeId}><svg class="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" class=""${_scopeId}></path></svg> Export to CSV </button></div></div></div><div class="mt-6 overflow-hidden rounded-xl border shadow"${_scopeId}><table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2"${_scopeId}><thead class="hidden border-b lg:table-header-group"${_scopeId}><tr class=""${_scopeId}><td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6"${_scopeId}>Product</td><td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6"${_scopeId}></td></tr></thead></table></div></div></div>`);
          } else {
            return [
              createVNode(Banner),
              createVNode("div", { class: "block py-10 h-auto" }, [
                createVNode("div", { class: "mx-auto mt-2 max-w-screen-lg px-2" }, [
                  createVNode("div", { class: "sm:flex sm:items-center sm:justify-between flex-col sm:flex-row" }, [
                    createVNode("p", { class: "flex-1 text-base font-bold text-gray-900" }, "Latest Order"),
                    createVNode("div", { class: "mt-4 sm:mt-0" }, [
                      createVNode("div", { class: "flex items-center justify-start sm:justify-end" }, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("label", {
                            for: "",
                            class: "mr-2 flex-shrink-0 text-sm font-medium text-gray-900"
                          }, " Sort by: "),
                          createVNode("select", {
                            name: "",
                            class: "sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"
                          }, [
                            createVNode("option", { class: "whitespace-no-wrap text-sm" }, "Recent")
                          ])
                        ]),
                        createVNode("button", {
                          type: "button",
                          class: "inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow"
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "mr-1 h-4 w-4",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "stroke-width": "2"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                              class: ""
                            })
                          ])),
                          createTextVNode(" Export to CSV ")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-6 overflow-hidden rounded-xl border shadow" }, [
                    createVNode("table", { class: "min-w-full border-separate border-spacing-y-2 border-spacing-x-2" }, [
                      createVNode("thead", { class: "hidden border-b lg:table-header-group" }, [
                        createVNode("tr", { class: "" }, [
                          createVNode("td", { class: "whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6" }, "Product"),
                          createVNode("td", { class: "whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6" })
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
