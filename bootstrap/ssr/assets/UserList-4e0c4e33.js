import { ref, watch, resolveComponent, mergeProps, withCtx, unref, createVNode, withModifiers, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import "https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js";
import { usePage, router, useForm } from "@inertiajs/vue3";
import { ElNotification } from "element-plus";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3 } from "./TextInput-0364e26d.js";
import { _ as _sfc_main$4 } from "./Pagination-8e49e8d6.js";
import "./Link-ab392f85.js";
import "@element-plus/icons-vue";
const UserList_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "UserList",
  __ssrInlineRender: true,
  props: {
    users: Object
  },
  setup(__props) {
    const users = usePage().props.users;
    const searchValue = usePage().props.search;
    ref(false);
    const isEditUser = ref(false);
    const dialogVisible = ref(false);
    const search = ref(searchValue);
    watch(search, (value) => {
      router.get(
        "/admin/user/index",
        { search: value },
        { preserveState: false }
      );
    });
    const form = useForm({
      name: "",
      email: "",
      isAdmin: "",
      password: "",
      password_confirmation: ""
    });
    const AddUser = async () => {
      try {
        await form.post(route("admin.user.store"), {
          onSuccess: (page) => {
            ElNotification({
              title: "Успешно",
              message: page.props.flash.success,
              type: "success"
            });
            dialogVisible.value = false;
          },
          onFinish: () => form.reset("password", "password_confirmation")
        });
      } catch (err) {
        ElNotification({
          title: "Произошла ошибка",
          message: err,
          type: "error"
        });
        console.log(err);
      }
    };
    const updateUser = async () => {
      try {
        await form.post(route("admin.user.update/" + form.id.value), {
          onSuccess: (page) => {
            dialogVisible.value = false;
            ElNotification({
              title: "Успешно",
              message: page.props.flash.success,
              type: "success"
            });
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    const clearEditForm = () => {
      if (isEditUser.value == true) {
        if (dialogVisible.value == false) {
          isEditUser.value = false;
          form.reset();
        }
      }
    };
    watch(clearEditForm());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dialog = resolveComponent("el-dialog");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 dark:bg-gray-900 p-3 sm:p-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_dialog, {
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
        class: "text-gray-800 dark:bg-gray-800 dark:text-gray-200",
        width: "80%"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div class="flex justify-between"${_scopeId}><h3 class="text-lg text-gray-800 dark:text-white mb-6"${_scopeId}>${ssrInterpolate(isEditUser.value ? "Редактировать пользователя" : "Добавить пользователя")}</h3></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4"${_scopeId}><div class="mb-7"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              for: "name",
              value: "Логин"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-7"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              for: "email",
              value: "E-mail"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4"${_scopeId}><div class="mb-7"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              for: "password",
              value: "Пароль"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-7"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              for: "password_confirmation",
              value: "Повторите пароль"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex w-full justify-end items-center gap-4"${_scopeId}><button type="button" class="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-dark dark:hover:bg-slate-900 dark:focus:ring-black"${_scopeId}>Отменить</button><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"${_scopeId}>Добавить пользователя</button></div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(($event) => isEditUser.value ? updateUser() : AddUser(), ["prevent"])
              }, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode("h3", { class: "text-lg text-gray-800 dark:text-white mb-6" }, toDisplayString(isEditUser.value ? "Редактировать пользователя" : "Добавить пользователя"), 1)
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4" }, [
                  createVNode("div", { class: "mb-7" }, [
                    createVNode(_sfc_main$1, {
                      for: "name",
                      value: "Логин"
                    }),
                    createVNode(_sfc_main$2, {
                      id: "name",
                      type: "text",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      required: "",
                      autofocus: "",
                      autocomplete: "name"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$3, {
                      class: "mt-2",
                      message: unref(form).errors.name
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "mb-7" }, [
                    createVNode(_sfc_main$1, {
                      for: "email",
                      value: "E-mail"
                    }),
                    createVNode(_sfc_main$2, {
                      id: "email",
                      type: "email",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      required: "",
                      autocomplete: "username"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$3, {
                      class: "mt-2",
                      message: unref(form).errors.email
                    }, null, 8, ["message"])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-4" }, [
                  createVNode("div", { class: "mb-7" }, [
                    createVNode(_sfc_main$1, {
                      for: "password",
                      value: "Пароль"
                    }),
                    createVNode(_sfc_main$2, {
                      id: "password",
                      type: "password",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      required: "",
                      autocomplete: "new-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$3, {
                      class: "mt-2",
                      message: unref(form).errors.password
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "mb-7" }, [
                    createVNode(_sfc_main$1, {
                      for: "password_confirmation",
                      value: "Повторите пароль"
                    }),
                    createVNode(_sfc_main$2, {
                      id: "password_confirmation",
                      type: "password",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                      required: "",
                      autocomplete: "new-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$3, {
                      class: "mt-2",
                      message: unref(form).errors.password_confirmation
                    }, null, 8, ["message"])
                  ])
                ]),
                createVNode("div", { class: "flex w-full justify-end items-center gap-4" }, [
                  createVNode("button", {
                    type: "button",
                    onClick: ($event) => dialogVisible.value = false,
                    class: "text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-dark dark:hover:bg-slate-900 dark:focus:ring-black"
                  }, "Отменить", 8, ["onClick"]),
                  createVNode("button", {
                    type: "submit",
                    class: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  }, "Добавить пользователя")
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="max-w-screen-xl px-2 bg-gray-50 dark:bg-gray-900"><div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden"><div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 bg-gray-50 dark:bg-gray-900"><div class="w-full md:w-1/2"><label for="simple-search" class="sr-only">Поиск</label><div class="relative w-full"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text"${ssrRenderAttr("value", search.value)} id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Поиск"></div></div><div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"><button type="button" class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"><svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"></path></svg> Добавить пользователя </button></div></div><div class="overflow-x-auto"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"><tr><th scope="col" class="px-4 py-3">#</th><th scope="col" class="px-4 py-3">Логин</th><th scope="col" class="px-4 py-3">E-mail</th><th scope="col" class="px-4 py-3">Роль пользователя</th><th scope="col" class="px-4 py-3"><span class="sr-only">Действия</span></th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(users).data, (user, index) => {
        _push(`<tr class="border-b dark:border-gray-700"><td class="px-4 py-3">${ssrInterpolate(index + 1)}</td><td class="px-4 py-3">${ssrInterpolate(user.name)}</td><td class="px-4 py-3">${ssrInterpolate(user.email)}</td><td class="px-4 py-3">`);
        if (user.isAdmin == 1) {
          _push(`<span class="bg-blue-100 text-blue-800 flex w-20 justify-center items-center text-xs font-medium me-2 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">Админ</span>`);
        } else {
          _push(`<span class="bg-yellow-100 text-yellow-800 text-xs flex w-20 justify-center items-center font-medium me-2 px-2 py-1 rounded dark:bg-yellow-900 dark:text-yellow-300">Клиент</span>`);
        }
        _push(`</td><td class="px-4 py-3 flex items-center justify-end"><button${ssrRenderAttr("id", `${user.id}-button`)}${ssrRenderAttr("data-dropdown-toggle", `${user.id}`)} class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button"><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg></button><div${ssrRenderAttr("id", `${user.id}`)} class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"><ul class="py-1 text-sm text-gray-700 dark:text-gray-200"${ssrRenderAttr("aria-labelledby", `${user.id}-button`)}><li><a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Изменить пользователя</a></li></ul><div class="py-1"><a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Удалить</a></div></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="mt-4 py-4 px-10">`);
      _push(ssrRenderComponent(_sfc_main$4, { data: unref(users) }, null, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/User/UserList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
