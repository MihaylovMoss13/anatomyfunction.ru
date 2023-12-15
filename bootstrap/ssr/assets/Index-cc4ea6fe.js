import { withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AdminLayout-e7109739.js";
import _sfc_main$2 from "./BannerList-a84049a2.js";
import "./Navigation-a35d9ecb.js";
import "./ApplicationLogo-a3a17935.js";
import "@vueuse/core";
import "./Sidebar-2df59c6c.js";
import "./Link-ab392f85.js";
import "flowbite";
import "./Pagination-8e49e8d6.js";
import "@element-plus/icons-vue";
import "element-plus";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    banners: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Banner" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, { banners: __props.banners }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "Banner" }),
              createVNode(_sfc_main$2, { banners: __props.banners }, null, 8, ["banners"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Banner/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
