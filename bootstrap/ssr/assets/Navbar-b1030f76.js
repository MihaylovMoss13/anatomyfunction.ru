import { onMounted, resolveComponent, mergeProps, unref, withCtx, createVNode, isRef, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import "flowbite";
import { usePage, Link } from "@inertiajs/vue3";
import { useDark, useToggle } from "@vueuse/core";
import { _ as _sfc_main$1 } from "./ApplicationLogo-a3a17935.js";
import { Moon, Sunny } from "@element-plus/icons-vue";
const _sfc_main = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
    });
    const canLogin = usePage().props.canLogin;
    const canRegister = usePage().props.canRegister;
    const auth = usePage().props.auth;
    const isDark = useDark();
    useToggle(isDark);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_switch = resolveComponent("el-switch");
      const _component_el_icon = resolveComponent("el-icon");
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-gray-800 fixed w-full z-20 top-0 start-0 scroll-smooth dark:border-gray-600" }, _attrs))}><div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "flex items-center space-x-3 rtl:space-x-reverse"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(canLogin)) {
        _push(`<div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">`);
        _push(ssrRenderComponent(_component_el_switch, {
          modelValue: unref(isDark),
          "onUpdate:modelValue": ($event) => isRef(isDark) ? isDark.value = $event : null,
          class: "mr-3 mt-1 cursor-pointer",
          "active-action-icon": unref(Moon),
          style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#427D9D" },
          "inactive-action-icon": unref(Sunny)
        }, null, _parent));
        _push(`<button type="button" class="${ssrRenderClass([unref(isDark) ? "text-gray-100" : "text-yellow-500", "focus:outline-none font-medium rounded-full font-semibold text-sm px-3 text-center inline-flex items-center mr-4"])}">`);
        if (unref(isDark)) {
          _push(ssrRenderComponent(_component_el_icon, { size: 20 }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Moon), null, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(Moon))
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_el_icon, { size: 20 }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Sunny), null, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(Sunny))
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</button>`);
        if (unref(auth).user) {
          _push(`<button type="button" class="flex mr-3 mt-2 text-sm rounded-full md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom"><span class="mr-2 capitalize md:block hidden mt-0.5">${ssrInterpolate(unref(auth).user.name)}</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></button>`);
        } else {
          _push(`<div class="flex">`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("login"),
            type: "button",
            class: "hidden lg:block text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1 mt-2 text-center me-2 mb-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Войти`);
              } else {
                return [
                  createTextVNode(" Войти")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (unref(canRegister)) {
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              type: "button",
              class: "hidden lg:block text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-1 mt-2 text-center me-2 mb-2"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Зарегистрироваться`);
                } else {
                  return [
                    createTextVNode(" Зарегистрироваться")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        if (unref(auth).user) {
          _push(`<div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown"><div class="px-4 py-3"><span class="block text-sm text-gray-900 dark:text-white">${ssrInterpolate(unref(auth).user.name)}</span><span class="block text-sm text-gray-500 truncate dark:text-gray-400">${ssrInterpolate(unref(auth).user.email)}</span></div><ul class="py-2" aria-labelledby="user-menu-button"><li>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("dashboard"),
            class: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Админ.Панель`);
              } else {
                return [
                  createTextVNode(" Админ.Панель")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li><li>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("profile.edit"),
            class: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Профиль `);
              } else {
                return [
                  createTextVNode(" Профиль ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li><li>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("logout"),
            method: "post",
            as: "button",
            class: "flex px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Выйти `);
              } else {
                return [
                  createTextVNode(" Выйти ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/components/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
