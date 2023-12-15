import { ref, unref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
const Text_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Text",
  __ssrInlineRender: true,
  props: {
    textData: Object
  },
  setup(__props) {
    const props = __props;
    ref([]);
    const splitText = () => {
      return props.textData.split(".\r\n");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Splide), mergeProps({
        options: { type: "loop", gap: "1rem", autoplay: true },
        "aria-label": "My Favorite Images"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(splitText(), (text, index) => {
              _push2(ssrRenderComponent(unref(SplideSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class=""${_scopeId2}><figure data-aos="fade-right" data-aos-duration="3000" class="max-w-screen-md mx-auto"${_scopeId2}><p class="text-white dark:text-white"${_scopeId2}>${ssrInterpolate(text)}</p></figure></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "" }, [
                        createVNode("figure", {
                          "data-aos": "fade-right",
                          "data-aos-duration": "3000",
                          class: "max-w-screen-md mx-auto"
                        }, [
                          createVNode("p", { class: "text-white dark:text-white" }, toDisplayString(text), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(splitText(), (text, index) => {
                return openBlock(), createBlock(unref(SplideSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "" }, [
                      createVNode("figure", {
                        "data-aos": "fade-right",
                        "data-aos-duration": "3000",
                        class: "max-w-screen-md mx-auto"
                      }, [
                        createVNode("p", { class: "text-white dark:text-white" }, toDisplayString(text), 1)
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/components/Text.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
