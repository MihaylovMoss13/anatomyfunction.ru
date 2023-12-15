import { withCtx, unref, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./App-3dadc7ca.js";
import "flowbite";
import "./Navbar-b1030f76.js";
import "@vueuse/core";
import "./ApplicationLogo-a3a17935.js";
import "@element-plus/icons-vue";
import "aos";
const _sfc_main = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "About" }, null, _parent2, _scopeId));
            _push2(`<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased"${_scopeId}><div class="flex justify-between px-4 mx-auto max-w-screen-xl"${_scopeId}><article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"${_scopeId}><header class="mb-4 lg:mb-6 not-format"${_scopeId}><address class="flex items-center mb-6 not-italic"${_scopeId}><div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"${_scopeId}><img class="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos"${_scopeId}><div${_scopeId}><a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white"${_scopeId}>Jese Leos</a><p class="text-base text-gray-500 dark:text-gray-400"${_scopeId}>Graphic Designer, educator &amp; CEO Flowbite</p><p class="text-base text-gray-500 dark:text-gray-400"${_scopeId}><time pubdate datetime="2022-02-08" title="February 8th, 2022"${_scopeId}>Feb. 8, 2022</time></p></div></div></address><h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"${_scopeId}>Best practices for successful prototypes</h1></header><p class="lead"${_scopeId}>Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals, datepickers.</p><p${_scopeId}>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.</p><p${_scopeId}>But then I found a <a href="https://flowbite.com"${_scopeId}>component library based on Tailwind CSS called Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation bars, cards, form elements, and more which are conveniently built with the utility classes from Tailwind CSS.</p><figure${_scopeId}><img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt=""${_scopeId}><figcaption${_scopeId}>Digital art by Anonymous</figcaption></figure><h2${_scopeId}>Getting started with Flowbite</h2><p${_scopeId}>First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the documentation.</p><p${_scopeId}>It also includes a JavaScript file that enables interactive components, such as modals, dropdowns, and datepickers which you can optionally include into your project via CDN or NPM.</p><p${_scopeId}>You can check out the <a href="https://flowbite.com/docs/getting-started/quickstart/"${_scopeId}>quickstart guide</a> to explore the elements by including the CDN files into your project. But if you want to build a project with Flowbite I recommend you to follow the build tools steps so that you can purge and minify the generated CSS.</p><p${_scopeId}>You&#39;ll also receive a lot of useful application UI, marketing UI, and e-commerce pages that can help you get started with your projects even faster. You can check out this <a href="https://flowbite.com/docs/components/tables/"${_scopeId}>comparison table</a> to better understand the differences between the open-source and pro version of Flowbite.</p><h2${_scopeId}>When does design come in handy?</h2><p${_scopeId}>While it might seem like extra work at a first glance, here are some key moments in which prototyping will come in handy:</p><ol${_scopeId}><li${_scopeId}><strong${_scopeId}>Usability testing</strong>. Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live; </li><li${_scopeId}><strong${_scopeId}>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying properly? Pass your prototype to your data protection team and they can test it for real;</li><li${_scopeId}><strong${_scopeId}>Impressing a client</strong>. Prototypes can help explain or even sell your idea by providing your client with a hands-on experience;</li><li${_scopeId}><strong${_scopeId}>Communicating your vision</strong>. By using an interactive medium to preview and test design elements, designers and developers can understand each other — and the project — better. </li></ol><h3${_scopeId}>Laying the groundwork for best design</h3><p${_scopeId}>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.</p><p${_scopeId}>Let&#39;s start by including the CSS file inside the <code${_scopeId}>head</code> tag of your HTML.</p><h3${_scopeId}>Understanding typography</h3><h4${_scopeId}>Type properties</h4><p${_scopeId}>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across letters. A typeface represents shared patterns across a collection of letters.</p><h4${_scopeId}>Baseline</h4><p${_scopeId}>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across letters. A typeface represents shared patterns across a collection of letters.</p><h4${_scopeId}>Measurement from the baseline</h4><p${_scopeId}>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across letters. A typeface represents shared patterns across a collection of letters.</p><h3${_scopeId}>Type classification</h3><h4${_scopeId}>Serif</h4><p${_scopeId}>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter. Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the following:</p><h4${_scopeId}>Old-Style serifs</h4><ul${_scopeId}><li${_scopeId}>Low contrast between thick and thin strokes</li><li${_scopeId}>Diagonal stress in the strokes</li><li${_scopeId}>Slanted serifs on lower-case ascenders</li></ul><img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png" alt=""${_scopeId}><ol${_scopeId}><li${_scopeId}>Low contrast between thick and thin strokes</li><li${_scopeId}>Diagonal stress in the strokes</li><li${_scopeId}>Slanted serifs on lower-case ascenders</li></ol><h3${_scopeId}>Laying the best for successful prototyping</h3><p${_scopeId}>A serif is a small shape or projection that appears at the beginning:</p><blockquote${_scopeId}><p${_scopeId}>Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.</p></blockquote><h4${_scopeId}>Code example</h4><p${_scopeId}>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter. Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the following:</p><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Country</th><th${_scopeId}>Date &amp; Time</th><th${_scopeId}>Amount</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>United States</td><td${_scopeId}>April 21, 2021</td><td${_scopeId}><strong${_scopeId}>$2,300</strong></td></tr><tr${_scopeId}><td${_scopeId}>Canada</td><td${_scopeId}>May 31, 2021</td><td${_scopeId}><strong${_scopeId}>$300</strong></td></tr><tr${_scopeId}><td${_scopeId}>United Kingdom</td><td${_scopeId}>June 3, 2021</td><td${_scopeId}><strong${_scopeId}>$2,500</strong></td></tr><tr${_scopeId}><td${_scopeId}>Australia</td><td${_scopeId}>June 23, 2021</td><td${_scopeId}><strong${_scopeId}>$3,543</strong></td></tr><tr${_scopeId}><td${_scopeId}>Germany</td><td${_scopeId}>July 6, 2021</td><td${_scopeId}><strong${_scopeId}>$99</strong></td></tr><tr${_scopeId}><td${_scopeId}>France</td><td${_scopeId}>August 23, 2021</td><td${_scopeId}><strong${_scopeId}>$2,540</strong></td></tr></tbody></table><h3${_scopeId}>Best practices for setting up your prototype</h3><p${_scopeId}><strong${_scopeId}>Low fidelity or high fidelity?</strong> Fidelity refers to how close a prototype will be to the real deal. If you’re simply preparing a quick visual aid for a presentation, a low-fidelity prototype — like a wireframe with placeholder images and some basic text — would be more than enough. But if you’re going for more intricate usability testing, a high-fidelity prototype — with on-brand colors, fonts and imagery — could help get more pointed results.</p><p${_scopeId}><strong${_scopeId}>Consider your user</strong>. To create an intuitive user flow, try to think as your user would when interacting with your section. While you can fine-tune this during beta testing, considering your user’s needs and habits early on will save you time by setting you on the right path.</p><p${_scopeId}><strong${_scopeId}>Start from the inside out</strong>. A nice way to both organize your tasks and create more user-friendly prototypes is by building your prototypes ‘inside out’. Start by focusing on what will be important to your user, like a Buy now button or an image gallery, and list each element by order of priority. This way, you’ll be able to create a prototype that puts your users’ needs at the heart of your design.</p><p${_scopeId}>And there you have it! Everything you need to design and share prototypes — right in Flowbite Figma. </p></article></div></main>`);
          } else {
            return [
              createVNode(unref(Head), { title: "About" }),
              createVNode("main", { class: "pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased" }, [
                createVNode("div", { class: "flex justify-between px-4 mx-auto max-w-screen-xl" }, [
                  createVNode("article", { class: "mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert" }, [
                    createVNode("header", { class: "mb-4 lg:mb-6 not-format" }, [
                      createVNode("address", { class: "flex items-center mb-6 not-italic" }, [
                        createVNode("div", { class: "inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white" }, [
                          createVNode("img", {
                            class: "mr-4 w-16 h-16 rounded-full",
                            src: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
                            alt: "Jese Leos"
                          }),
                          createVNode("div", null, [
                            createVNode("a", {
                              href: "#",
                              rel: "author",
                              class: "text-xl font-bold text-gray-900 dark:text-white"
                            }, "Jese Leos"),
                            createVNode("p", { class: "text-base text-gray-500 dark:text-gray-400" }, "Graphic Designer, educator & CEO Flowbite"),
                            createVNode("p", { class: "text-base text-gray-500 dark:text-gray-400" }, [
                              createVNode("time", {
                                pubdate: "",
                                datetime: "2022-02-08",
                                title: "February 8th, 2022"
                              }, "Feb. 8, 2022")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("h1", { class: "mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white" }, "Best practices for successful prototypes")
                    ]),
                    createVNode("p", { class: "lead" }, "Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals, datepickers."),
                    createVNode("p", null, "Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project."),
                    createVNode("p", null, [
                      createTextVNode("But then I found a "),
                      createVNode("a", { href: "https://flowbite.com" }, "component library based on Tailwind CSS called Flowbite"),
                      createTextVNode(". It comes with the most commonly used UI components, such as buttons, navigation bars, cards, form elements, and more which are conveniently built with the utility classes from Tailwind CSS.")
                    ]),
                    createVNode("figure", null, [
                      createVNode("img", {
                        src: "https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png",
                        alt: ""
                      }),
                      createVNode("figcaption", null, "Digital art by Anonymous")
                    ]),
                    createVNode("h2", null, "Getting started with Flowbite"),
                    createVNode("p", null, "First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the documentation."),
                    createVNode("p", null, "It also includes a JavaScript file that enables interactive components, such as modals, dropdowns, and datepickers which you can optionally include into your project via CDN or NPM."),
                    createVNode("p", null, [
                      createTextVNode("You can check out the "),
                      createVNode("a", { href: "https://flowbite.com/docs/getting-started/quickstart/" }, "quickstart guide"),
                      createTextVNode(" to explore the elements by including the CDN files into your project. But if you want to build a project with Flowbite I recommend you to follow the build tools steps so that you can purge and minify the generated CSS.")
                    ]),
                    createVNode("p", null, [
                      createTextVNode("You'll also receive a lot of useful application UI, marketing UI, and e-commerce pages that can help you get started with your projects even faster. You can check out this "),
                      createVNode("a", { href: "https://flowbite.com/docs/components/tables/" }, "comparison table"),
                      createTextVNode(" to better understand the differences between the open-source and pro version of Flowbite.")
                    ]),
                    createVNode("h2", null, "When does design come in handy?"),
                    createVNode("p", null, "While it might seem like extra work at a first glance, here are some key moments in which prototyping will come in handy:"),
                    createVNode("ol", null, [
                      createVNode("li", null, [
                        createVNode("strong", null, "Usability testing"),
                        createTextVNode(". Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live; ")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Involving stakeholders"),
                        createTextVNode(". Need to check if your GDPR consent boxes are displaying properly? Pass your prototype to your data protection team and they can test it for real;")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Impressing a client"),
                        createTextVNode(". Prototypes can help explain or even sell your idea by providing your client with a hands-on experience;")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Communicating your vision"),
                        createTextVNode(". By using an interactive medium to preview and test design elements, designers and developers can understand each other — and the project — better. ")
                      ])
                    ]),
                    createVNode("h3", null, "Laying the groundwork for best design"),
                    createVNode("p", null, "Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project."),
                    createVNode("p", null, [
                      createTextVNode("Let's start by including the CSS file inside the "),
                      createVNode("code", null, "head"),
                      createTextVNode(" tag of your HTML.")
                    ]),
                    createVNode("h3", null, "Understanding typography"),
                    createVNode("h4", null, "Type properties"),
                    createVNode("p", null, "A typeface is a collection of letters. While each letter is unique, certain shapes are shared across letters. A typeface represents shared patterns across a collection of letters."),
                    createVNode("h4", null, "Baseline"),
                    createVNode("p", null, "A typeface is a collection of letters. While each letter is unique, certain shapes are shared across letters. A typeface represents shared patterns across a collection of letters."),
                    createVNode("h4", null, "Measurement from the baseline"),
                    createVNode("p", null, "A typeface is a collection of letters. While each letter is unique, certain shapes are shared across letters. A typeface represents shared patterns across a collection of letters."),
                    createVNode("h3", null, "Type classification"),
                    createVNode("h4", null, "Serif"),
                    createVNode("p", null, "A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter. Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the following:"),
                    createVNode("h4", null, "Old-Style serifs"),
                    createVNode("ul", null, [
                      createVNode("li", null, "Low contrast between thick and thin strokes"),
                      createVNode("li", null, "Diagonal stress in the strokes"),
                      createVNode("li", null, "Slanted serifs on lower-case ascenders")
                    ]),
                    createVNode("img", {
                      src: "https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png",
                      alt: ""
                    }),
                    createVNode("ol", null, [
                      createVNode("li", null, "Low contrast between thick and thin strokes"),
                      createVNode("li", null, "Diagonal stress in the strokes"),
                      createVNode("li", null, "Slanted serifs on lower-case ascenders")
                    ]),
                    createVNode("h3", null, "Laying the best for successful prototyping"),
                    createVNode("p", null, "A serif is a small shape or projection that appears at the beginning:"),
                    createVNode("blockquote", null, [
                      createVNode("p", null, "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.")
                    ]),
                    createVNode("h4", null, "Code example"),
                    createVNode("p", null, "A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter. Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the following:"),
                    createVNode("table", null, [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", null, "Country"),
                          createVNode("th", null, "Date & Time"),
                          createVNode("th", null, "Amount")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        createVNode("tr", null, [
                          createVNode("td", null, "United States"),
                          createVNode("td", null, "April 21, 2021"),
                          createVNode("td", null, [
                            createVNode("strong", null, "$2,300")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "Canada"),
                          createVNode("td", null, "May 31, 2021"),
                          createVNode("td", null, [
                            createVNode("strong", null, "$300")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "United Kingdom"),
                          createVNode("td", null, "June 3, 2021"),
                          createVNode("td", null, [
                            createVNode("strong", null, "$2,500")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "Australia"),
                          createVNode("td", null, "June 23, 2021"),
                          createVNode("td", null, [
                            createVNode("strong", null, "$3,543")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "Germany"),
                          createVNode("td", null, "July 6, 2021"),
                          createVNode("td", null, [
                            createVNode("strong", null, "$99")
                          ])
                        ]),
                        createVNode("tr", null, [
                          createVNode("td", null, "France"),
                          createVNode("td", null, "August 23, 2021"),
                          createVNode("td", null, [
                            createVNode("strong", null, "$2,540")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("h3", null, "Best practices for setting up your prototype"),
                    createVNode("p", null, [
                      createVNode("strong", null, "Low fidelity or high fidelity?"),
                      createTextVNode(" Fidelity refers to how close a prototype will be to the real deal. If you’re simply preparing a quick visual aid for a presentation, a low-fidelity prototype — like a wireframe with placeholder images and some basic text — would be more than enough. But if you’re going for more intricate usability testing, a high-fidelity prototype — with on-brand colors, fonts and imagery — could help get more pointed results.")
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Consider your user"),
                      createTextVNode(". To create an intuitive user flow, try to think as your user would when interacting with your section. While you can fine-tune this during beta testing, considering your user’s needs and habits early on will save you time by setting you on the right path.")
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Start from the inside out"),
                      createTextVNode(". A nice way to both organize your tasks and create more user-friendly prototypes is by building your prototypes ‘inside out’. Start by focusing on what will be important to your user, like a Buy now button or an image gallery, and list each element by order of priority. This way, you’ll be able to create a prototype that puts your users’ needs at the heart of your design.")
                    ]),
                    createVNode("p", null, "And there you have it! Everything you need to design and share prototypes — right in Flowbite Figma. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
