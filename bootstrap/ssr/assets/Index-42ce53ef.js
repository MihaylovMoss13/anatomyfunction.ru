import { ref, mergeProps, withCtx, unref, openBlock, createBlock, createVNode, toDisplayString, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./App-3dadc7ca.js";
import { Head } from "@inertiajs/vue3";
import "@splidejs/vue-splide";
import { _ as _sfc_main$2 } from "./Link-ab392f85.js";
import "flowbite";
import "./Navbar-b1030f76.js";
import "@vueuse/core";
import "./ApplicationLogo-a3a17935.js";
import "@element-plus/icons-vue";
import "aos";
const Index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    sections: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const showSection = (slug) => route("section.view", slug);
    const svgClasses = ref("w-20 md:w-32 2xl:w-40");
    const textClasses = ref("md:text-5xl 2xl:text-7xl");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        classList: "justify-center",
        svgClassList: svgClasses.value,
        textClassList: textClasses.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Главная" }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-white font-bold 2xl:text-4xl text-3xl 2xl:mb-20 mb-12"${_scopeId}> Выберите интересующий вас блок для изучения: </h3><div class="sectionsList grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 2xl:gap-24"${_scopeId}><!--[-->`);
            ssrRenderList(__props.sections.data, (section) => {
              _push2(ssrRenderComponent(_sfc_main$2, {
                href: showSection(section.slug),
                key: section.id,
                "data-aos": "fade-up",
                class: "py-0 border-0 text-white focus:text-white focus:bg-transparent"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (section.section_images.length >= 1) {
                      _push3(`<div class="section_img"${_scopeId2}><img${ssrRenderAttr("src", section.section_images[0].image)}${_scopeId2}></div>`);
                    } else {
                      _push3(`<div class="section_img"${_scopeId2}><img src="/images/no_image.jpg"${_scopeId2}></div>`);
                    }
                    _push3(`<h2 class="mt-6 2xl:text-5xl text-3xl font-bold text-white justify-center flex"${_scopeId2}>${ssrInterpolate(section.name)}</h2>`);
                  } else {
                    return [
                      section.section_images.length >= 1 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "section_img"
                      }, [
                        createVNode("img", {
                          src: section.section_images[0].image
                        }, null, 8, ["src"])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "section_img"
                      }, [
                        createVNode("img", { src: "/images/no_image.jpg" })
                      ])),
                      createVNode("h2", { class: "mt-6 2xl:text-5xl text-3xl font-bold text-white justify-center flex" }, toDisplayString(section.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Главная" }),
              createVNode("h3", { class: "text-white font-bold 2xl:text-4xl text-3xl 2xl:mb-20 mb-12" }, " Выберите интересующий вас блок для изучения: "),
              createVNode("div", { class: "sectionsList grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 2xl:gap-24" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.sections.data, (section) => {
                  return openBlock(), createBlock(_sfc_main$2, {
                    href: showSection(section.slug),
                    key: section.id,
                    "data-aos": "fade-up",
                    class: "py-0 border-0 text-white focus:text-white focus:bg-transparent"
                  }, {
                    default: withCtx(() => [
                      section.section_images.length >= 1 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "section_img"
                      }, [
                        createVNode("img", {
                          src: section.section_images[0].image
                        }, null, 8, ["src"])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "section_img"
                      }, [
                        createVNode("img", { src: "/images/no_image.jpg" })
                      ])),
                      createVNode("h2", { class: "mt-6 2xl:text-5xl text-3xl font-bold text-white justify-center flex" }, toDisplayString(section.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["href"]);
                }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
