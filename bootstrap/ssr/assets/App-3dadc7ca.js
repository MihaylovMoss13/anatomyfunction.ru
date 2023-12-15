import { onMounted, ref, onUnmounted, resolveComponent, mergeProps, withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass } from "vue/server-renderer";
import "flowbite";
import "./Navbar-b1030f76.js";
import { _ as _sfc_main$1 } from "./ApplicationLogo-a3a17935.js";
import "@inertiajs/vue3";
import AOS from "aos";
import { Top } from "@element-plus/icons-vue";
const App_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  props: {
    classList: {
      type: String
    },
    svgClassList: {
      type: String
    },
    textClassList: {
      type: String
    }
  },
  setup(__props) {
    onMounted(() => {
      AOS.init();
    });
    const isHidden = ref(true);
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        isHidden.value = false;
      } else {
        isHidden.value = true;
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    const svgClasses = ref("w-20 md:w-32 2xl:w-40");
    const textClasses = ref("md:text-5xl 2xl:text-7xl");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = resolveComponent("el-icon");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "relative sm:flex sm:justify-center sm:items-center selection:bg-red-500 selection:text-white" }, _attrs))}><div class="mx-auto p-6 lg:p-8 w-full"><template>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        classList: __props.classList,
        svgClassList: svgClasses.value,
        textClassList: textClasses.value
      }, null, _parent));
      _push(`</template><div class="2xl:py-16 py-8 pb-4"><!--[-->`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]--></div></div><div class="fixed -bottom-6 right-0 p-4 m-20"><button class="${ssrRenderClass(["bg-blue-600 hover:bg-blue-700 rounded-full px-3 py-3 transition ease-in-out duration-150 hover:mb-1 animate-pulse", { hidden: isHidden.value }])}"><span class="justify-center flex items-center text-white">`);
      _push(ssrRenderComponent(_component_el_icon, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Top), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Top))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></button></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
