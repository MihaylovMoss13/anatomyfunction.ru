import { resolveComponent, mergeProps, withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { ShoppingCartFull, RefreshRight, CircleCheck, TrophyBase } from "@element-plus/icons-vue";
const _sfc_main = {
  __name: "Panel",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = resolveComponent("el-icon");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-gray-900 py-4" }, _attrs))}><div class="py-8 mx-auto max-w-screen-xl px-4 border rounded-lg shadow-lg dark:bg-gray-800 dark:border-none"><div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 lg:grid-cols-4 dark:text-gray-400"><div class="flex space-x-5 items-center"><div><span>`);
      _push(ssrRenderComponent(_component_el_icon, {
        color: "#409EFC",
        size: 50
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ShoppingCartFull), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ShoppingCartFull))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div><div><p class="text-gray-900 text-xl font-bold tracking-wide mb-1 dark:text-gray-200">Free Shipping</p><p class="text-sm text-gray-500 dark:text-gray-300">When ordering over $100</p></div></div><div class="flex space-x-5 items-center"><div><span>`);
      _push(ssrRenderComponent(_component_el_icon, {
        color: "#409EFC",
        size: 50
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(RefreshRight), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(RefreshRight))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div><div><p class="text-gray-900 text-xl font-bold tracking-wide mb-1 dark:text-gray-200">Free Return</p><p class="text-sm text-gray-500 dark:text-gray-300">Get Return within 30 days</p></div></div><div class="flex space-x-5 items-center"><div><span>`);
      _push(ssrRenderComponent(_component_el_icon, {
        color: "#409EFC",
        size: 50
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CircleCheck), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CircleCheck))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div><div><p class="text-gray-900 text-xl font-bold tracking-wide mb-1 dark:text-gray-200">Secure Payment</p><p class="text-sm text-gray-500 dark:text-gray-300">100% Secure Online Payment</p></div></div><div class="flex space-x-5 items-center"><div><span>`);
      _push(ssrRenderComponent(_component_el_icon, {
        color: "#409EFC",
        size: 50
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TrophyBase), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TrophyBase))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div><div><p class="text-gray-900 text-xl font-bold tracking-wide mb-1 dark:text-gray-200">Best Quality</p><p class="text-sm text-gray-500 dark:text-gray-300">Original Section Guarenteed</p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/components/Panel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
