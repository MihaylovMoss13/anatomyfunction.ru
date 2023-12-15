import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "relative h-56 bg-cover w-full bg-center bg-no-repeat shadow-lg",
    style: { "background-image": "url(https://images.unsplash.com/photo-1614850715776-a749a85b4144?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJhbm5lciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D)" }
  }, _attrs))}><div class="px-4 pt-8 pb-10"><div class="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg"><span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span><img class="mx-auto h-32 w-32 rounded-full"${ssrRenderAttr("src", `/images/logo.png`)} alt=""></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/components/Banner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Banner as default
};
