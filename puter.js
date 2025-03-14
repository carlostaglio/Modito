// Copyright 2024-present Puter Technologies Inc. All rights reserved.
// Generated on 2025-02-21 17:07

(() => {
  var e = {
      480: (e) => {
        class t extends HTMLElement {
          isUsingFileProtocol = () => "file:" === window.location.protocol;
          constructor(e, t) {
            let n;
            super(),
              this.attachShadow({ mode: "open" }),
              (this.reject = t),
              (this.resolve = e),
              (n =
                "\n        <style>\n        dialog{\n            background: transparent; \n            border: none; \n            box-shadow: none; \n            outline: none;\n        }\n        .puter-dialog-content {\n            border: 1px solid #e8e8e8;\n            border-radius: 8px;\n            padding: 20px;\n            background: white;\n            box-shadow: 0 0 9px 1px rgb(0 0 0 / 21%);\n            padding: 80px 20px;\n            -webkit-font-smoothing: antialiased;\n            color: #575762;\n            position: relative;\n            background-image: url('data:image/webp;base64,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');\n            background-repeat: no-repeat;\n            background-position: center center;\n            background-size: 100% 100%;\n            background-color: #fff;\n        }\n        \n        dialog * {\n            max-width: 500px;\n            font-family: \"Helvetica Neue\", HelveticaNeue, Helvetica, Arial, sans-serif;\n        }\n        \n        dialog p.about{\n            text-align: center;\n            font-size: 17px;\n            padding: 10px 30px;\n            font-weight: 400;\n            -webkit-font-smoothing: antialiased;\n            color: #404048;\n            box-sizing: border-box;\n        }\n        \n        dialog .buttons{\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            flex-wrap: wrap;\n            margin-top: 20px;\n            text-align: center;\n            margin-bottom: 20px;\n        }\n        \n        .launch-auth-popup-footnote{\n            font-size: 11px;\n            color: #666;\n            margin-top: 10px;\n            /* footer at the bottom */\n            position: absolute;\n            left: 0;\n            right: 0;\n            bottom: 10px;\n            text-align: center;\n            margin: 0 10px;\n        }\n        \n        dialog .close-btn{\n            position: absolute;\n            right: 15px;\n            top: 10px;\n            font-size: 17px;\n            color: #8a8a8a;\n            cursor: pointer;\n        }\n        \n        dialog .close-btn:hover{\n            color: #000;\n        }\n        \n        /* ------------------------------------\n        Button\n        ------------------------------------*/\n        \n        dialog .button {\n            color: #666666;\n            background-color: #eeeeee;\n            border-color: #eeeeee;\n            font-size: 14px;\n            text-decoration: none;\n            text-align: center;\n            line-height: 40px;\n            height: 35px;\n            padding: 0 30px;\n            margin: 0;\n            display: inline-block;\n            appearance: none;\n            cursor: pointer;\n            border: none;\n            -webkit-box-sizing: border-box;\n            -moz-box-sizing: border-box;\n            box-sizing: border-box;\n            border-color: #b9b9b9;\n            border-style: solid;\n            border-width: 1px;\n            line-height: 35px;\n            background: -webkit-gradient(linear, left top, left bottom, from(#f6f6f6), to(#e1e1e1));\n            background: linear-gradient(#f6f6f6, #e1e1e1);\n            -webkit-box-shadow: inset 0px 1px 0px rgb(255 255 255 / 30%), 0 1px 2px rgb(0 0 0 / 15%);\n            box-shadow: inset 0px 1px 0px rgb(255 255 255 / 30%), 0 1px 2px rgb(0 0 0 / 15%);\n            border-radius: 4px;\n            outline: none;\n            -webkit-font-smoothing: antialiased;\n        }\n        \n        dialog .button:focus-visible {\n            border-color: rgb(118 118 118);\n        }\n        \n        dialog .button:active, dialog .button.active, dialog .button.is-active, dialog .button.has-open-contextmenu {\n            text-decoration: none;\n            background-color: #eeeeee;\n            border-color: #cfcfcf;\n            color: #a9a9a9;\n            -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n            -webkit-box-shadow: inset 0 1px 3px rgb(0 0 0 / 20%);\n            box-shadow: inset 0px 2px 3px rgb(0 0 0 / 36%), 0px 1px 0px white;\n        }\n        \n        dialog .button.disabled, dialog .button.is-disabled, dialog .button:disabled {\n            top: 0 !important;\n            background: #EEE !important;\n            border: 1px solid #DDD !important;\n            text-shadow: 0 1px 1px white !important;\n            color: #CCC !important;\n            cursor: default !important;\n            appearance: none !important;\n            pointer-events: none;\n        }\n        \n        dialog .button-action.disabled, dialog .button-action.is-disabled, dialog .button-action:disabled {\n            background: #55a975 !important;\n            border: 1px solid #60ab7d !important;\n            text-shadow: none !important;\n            color: #CCC !important;\n        }\n        \n        dialog .button-primary.disabled, dialog .button-primary.is-disabled, dialog .button-primary:disabled {\n            background: #8fc2e7 !important;\n            border: 1px solid #98adbd !important;\n            text-shadow: none !important;\n            color: #f5f5f5 !important;\n        }\n        \n        dialog .button-block {\n            width: 100%;\n        }\n        \n        dialog .button-primary {\n            border-color: #088ef0;\n            background: -webkit-gradient(linear, left top, left bottom, from(#34a5f8), to(#088ef0));\n            background: linear-gradient(#34a5f8, #088ef0);\n            color: white;\n        }\n        \n        dialog .button-danger {\n            border-color: #f00808;\n            background: -webkit-gradient(linear, left top, left bottom, from(#f83434), to(#f00808));\n            background: linear-gradient(#f83434, #f00808);\n            color: white;\n        }\n        \n        dialog .button-primary:active, dialog .button-primary.active, dialog .button-primary.is-active, dialog .button-primary-flat:active, dialog .button-primary-flat.active, dialog .button-primary-flat.is-active {\n            background-color: #2798eb;\n            border-color: #2798eb;\n            color: #bedef5;\n        }\n        \n        dialog .button-action {\n            border-color: #08bf4e;\n            background: -webkit-gradient(linear, left top, left bottom, from(#29d55d), to(#1ccd60));\n            background: linear-gradient(#29d55d, #1ccd60);\n            color: white;\n        }\n        \n        dialog .button-action:active, dialog .button-action.active, dialog .button-action.is-active, dialog .button-action-flat:active, dialog .button-action-flat.active, dialog .button-action-flat.is-active {\n            background-color: #27eb41;\n            border-color: #27eb41;\n            color: #bef5ca;\n        }\n        \n        dialog .button-giant {\n            font-size: 28px;\n            height: 70px;\n            line-height: 70px;\n            padding: 0 70px;\n        }\n        \n        dialog .button-jumbo {\n            font-size: 24px;\n            height: 60px;\n            line-height: 60px;\n            padding: 0 60px;\n        }\n        \n        dialog .button-large {\n            font-size: 20px;\n            height: 50px;\n            line-height: 50px;\n            padding: 0 50px;\n        }\n        \n        dialog .button-normal {\n            font-size: 16px;\n            height: 40px;\n            line-height: 38px;\n            padding: 0 40px;\n        }\n        \n        dialog .button-small {\n            height: 30px;\n            line-height: 29px;\n            padding: 0 30px;\n        }\n        \n        dialog .button-tiny {\n            font-size: 9.6px;\n            height: 24px;\n            line-height: 24px;\n            padding: 0 24px;\n        }\n        \n        #launch-auth-popup{\n            margin-left: 10px; \n            width: 200px; \n            font-weight: 500; \n            font-size: 15px;\n        }\n        dialog .button-auth{\n            margin-bottom: 10px;\n        }\n        dialog a, dialog a:visited{\n            color: rgb(0 69 238);\n            text-decoration: none;\n        }\n        dialog a:hover{\n            text-decoration: underline;\n        }\n        \n        @media (max-width:480px)  { \n            .puter-dialog-content{\n                padding: 50px 20px;\n            }\n            dialog .buttons{\n                flex-direction: column-reverse;\n            }\n            dialog p.about{\n                padding: 10px 0;\n            }\n            dialog .button-auth{\n                width: 100% !important;\n                margin:0 !important;\n                margin-bottom: 10px !important;\n            }\n        }\n        .error-container h1 {\n            color: #e74c3c;\n            font-size: 20px;\n            text-align: center;\n        }\n\n        .puter-dialog-content a:focus{\n            outline: none;\n        }\n        </style>"),
              "file:" === window.location.protocol
                ? (n +=
                    '<dialog>\n                    <div class="puter-dialog-content" style="padding: 20px 40px; background:white !important; font-size: 15px;">\n                        <span class="close-btn">&#x2715</span>\n                        <div class="error-container">\n                            <h1>Puter.js Error: Unsupported Protocol</h1>\n                            <p>It looks like you\'ve opened this file directly in your browser (using the <code style="font-family: monospace;">file:///</code> protocol) which is not supported by Puter.js for security reasons.</p>\n                            <p>To view this content properly, you need to serve it through a web server. Here are some options:</p>\n                            <ul>\n                                <li>Use a local development server (e.g., Python\'s built-in server or Node.js http-server)</li>\n                                <li>Upload the files to a web hosting service</li>\n                                <li>Use a local server application like XAMPP or MAMP</li>\n                            </ul>\n                            <p class="help-text">If you\'re not familiar with these options, consider reaching out to your development team or IT support for assistance.</p>\n                        </div>\n                        <p style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px; text-align: center; font-size:13px;">\n                            <a href="https://docs.puter.com" target="_blank">Docs</a><span style="margin:10px; color: #CCC;">|</span>\n                            <a href="https://github.com/heyPuter/puter/" target="_blank">Github</a><span style="margin:10px; color: #CCC;">|</span>\n                            <a href="https://discord.com/invite/PQcx7Teh8u" target="_blank">Discord</a>\n                        </p>\n                    </div>\n                </dialog>')
                : (n +=
                    '<dialog>\n                <div class="puter-dialog-content">\n                    <span class="close-btn">&#x2715</span>\n                    <a href="https://puter.com" target="_blank" style="border:none; outline:none; display: block; width: 70px; height: 70px; margin: 0 auto; border-radius: 4px;"><img style="display: block; width: 70px; height: 70px; margin: 0 auto; border-radius: 4px;" src="data:image/png;base64,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"/></a>\n                    <p class="about">This website uses Puter to bring you safe, secure, and private AI and Cloud features.</p>\n                    <div class="buttons">\n                        <button class="button button-auth" id="launch-auth-popup-cancel">Cancel</button>\n                        <button class="button button-primary button-auth" id="launch-auth-popup" style="margin-left:10px;">Continue</button>\n                    </div>\n                    <p style="text-align: center; margin-top: -15px; font-size: 14px;">Powered by <a href="https://docs.puter.com/" target="_blank">Puter.js</a></p>\n                    <p class="launch-auth-popup-footnote">By clicking \'Continue\' you agree to Puter\'s <a href="https://puter.com/terms" target="_blank">Terms of Service</a> and <a href="https://puter.com/privacy" target="_blank">Privacy Policy</a>.</p>\n                </div>\n            </dialog>'),
              (this.shadowRoot.innerHTML = n),
              (this.messageListener = async (e) => {
                "puter.token" === e.data.msg &&
                  (this.close(),
                  puter.setAuthToken(e.data.token),
                  puter.setAppID(e.data.app_uid),
                  window.removeEventListener("message", this.messageListener),
                  (puter.puterAuthState.authGranted = !0),
                  this.resolve(),
                  puter.onAuth &&
                    "function" == typeof puter.onAuth &&
                    puter.getUser().then((e) => {
                      puter.onAuth(e);
                    }),
                  (puter.puterAuthState.isPromptOpen = !1),
                  puter.puterAuthState.resolver &&
                    (puter.puterAuthState.authGranted
                      ? puter.puterAuthState.resolver.resolve()
                      : puter.puterAuthState.resolver.reject(),
                    (puter.puterAuthState.resolver = null)));
              });
          }
          cancelListener = () => {
            this.close(),
              window.removeEventListener("message", this.messageListener),
              (puter.puterAuthState.authGranted = !1),
              (puter.puterAuthState.isPromptOpen = !1),
              this.reject(new Error("User cancelled the authentication")),
              puter.puterAuthState.resolver &&
                (puter.puterAuthState.resolver.reject(
                  new Error("User cancelled the authentication")
                ),
                (puter.puterAuthState.resolver = null));
          };
          connectedCallback() {
            this.shadowRoot
              .querySelector("#launch-auth-popup")
              ?.addEventListener("click", () => {
                var e = screen.width / 2 - 300,
                  t = screen.height / 2 - 200;
                window.open(
                  puter.defaultGUIOrigin +
                    "/?embedded_in_popup=true&request_auth=true" +
                    (window.crossOriginIsolated
                      ? "&cross_origin_isolated=true"
                      : ""),
                  "Puter",
                  "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=600, height=400, top=" +
                    t +
                    ", left=" +
                    e
                );
              }),
              window.addEventListener("message", this.messageListener),
              this.shadowRoot
                .querySelector("#launch-auth-popup-cancel")
                ?.addEventListener("click", this.cancelListener),
              this.shadowRoot
                .querySelector(".close-btn")
                ?.addEventListener("click", this.cancelListener);
          }
          open() {
            this.shadowRoot.querySelector("dialog").showModal();
          }
          close() {
            this.shadowRoot.querySelector("dialog").close();
          }
        }
        customElements.define("puter-dialog", t), (e.exports = t);
      },
      294: (e, t, n) => {
        const { AdvancedBase: s } = n(952),
          { Service: i } = n(866),
          { ServiceManager: r } = n(875),
          o = n(868);
        e.exports = {
          AdvancedBase: s,
          system: { ServiceManager: r },
          libs: {
            promise: n(717),
            context: n(475),
            listener: n(498),
            log: n(346),
            string: n(519),
            time: n(259),
            smol: n(9),
            event: n(140),
          },
          features: { EmitterFeature: n(891) },
          concepts: { Service: i },
          traits: o,
        };
      },
      952: (e, t, n) => {
        const { FeatureBase: s } = n(533);
        class i extends s {
          static FEATURES = [n(912), n(314), n(178), n(659), n(73)];
        }
        e.exports = { AdvancedBase: i };
      },
      777: (e) => {
        class t {
          _get_inheritance_chain() {
            const e = [];
            let n = this.constructor;
            for (; n && n !== t; ) e.push(n), (n = n.__proto__);
            return e.reverse();
          }
          _get_merged_static_array(e) {
            const t = this._get_inheritance_chain(),
              n = [];
            let s = null;
            for (const i of t)
              i[e] && i[e] !== s && ((s = i[e]), n.push(...i[e]));
            return n;
          }
          _get_merged_static_object(e) {
            const t = this._get_inheritance_chain(),
              n = {};
            for (const s of t) s[e] && Object.assign(n, s[e]);
            return n;
          }
        }
        e.exports = { BasicBase: t };
      },
      533: (e, t, n) => {
        const { BasicBase: s } = n(777);
        e.exports = {
          FeatureBase: class extends s {
            constructor(e, ...t) {
              super(e, ...t),
                (this._ = {
                  features: this._get_merged_static_array("FEATURES"),
                });
              for (const t of this._.features)
                t.install_in_instance(this, { parameters: e || {} });
            }
          },
        };
      },
      866: (e, t, n) => {
        const { AdvancedBase: s } = n(952),
          i = n(696),
          r = async () => {},
          o = Symbol("TService");
        e.exports = {
          TService: o,
          Service: class extends s {
            static FEATURES = [i];
            async __on(e, t) {
              const n = this.__get_event_handler(e);
              return await n(e, ...t);
            }
            __get_event_handler(e) {
              return (
                this[`__on_${e}`]?.bind?.(this) ||
                this.constructor[`__on_${e}`]?.bind?.(this.constructor) ||
                r
              );
            }
            static create({ parameters: e, context: t }) {
              const n = new this();
              return (n._.context = t), n.as(o).construct(e), n;
            }
            static IMPLEMENTS = {
              [o]: {
                init(...e) {
                  if (this._.init_hooks)
                    for (const e of this._.init_hooks) e.call(this);
                  if (this._init) return this._init(...e);
                },
                construct(e) {
                  this.$parameters = {};
                  for (const t in e) this.$parameters[t] = e[t];
                  if (this._construct) return this._construct(e);
                },
                get_depends() {
                  return [
                    ...(this.constructor.DEPENDS ?? []),
                    ...(this.get_depends?.() ?? []),
                  ];
                },
              },
            };
          },
        };
      },
      891: (e) => {
        e.exports = ({ decorators: e } = {}) => ({
          install_in_instance(t, { parameters: n }) {
            const s = (t._.emitterFeature = {});
            (s.listeners_ = {}),
              (s.global_listeners_ = []),
              (s.callbackDecorators = e || []),
              (t.emit = async (e, t, n) => {
                n = n ?? {};
                const i = e.split("."),
                  r = [];
                for (let i = 0; i < s.global_listeners_.length; i++) {
                  let o = s.global_listeners_[i];
                  for (const e of s.callbackDecorators) o = e(o);
                  r.push(o(e, t, { ...n, key: e }));
                }
                for (let o = 0; o < i.length; o++) {
                  const a =
                      o === i.length - 1
                        ? i.join(".")
                        : i.slice(0, o + 1).join(".") + ".*",
                    c = s.listeners_[a];
                  if (c)
                    for (let i = 0; i < c.length; i++) {
                      let o = c[i];
                      for (const e of s.callbackDecorators) o = e(o);
                      r.push(o(t, { ...n, key: e }));
                    }
                }
                return await Promise.all(r);
              }),
              (t.on = (e, t) => {
                const n = s.listeners_[e] || (s.listeners_[e] = []);
                return (
                  n.push(t),
                  {
                    detach: () => {
                      const e = n.indexOf(t);
                      -1 !== e && n.splice(e, 1);
                    },
                  }
                );
              }),
              (t.on_all = (e) => {
                s.global_listeners_.push(e);
              });
          },
        });
      },
      659: (e) => {
        e.exports = {
          readme:
            "\n        Normalized Asynchronous Request Invocation (NARI) Methods Feature\n\n        This feature allows a class to define \"Nari methods\", which are methods\n        that support both async/await and callback-style invocation, have\n        positional arguments, and an options argument.\n\n        \"the expected interface for methods in puter.js\"\n\n        The underlying method will receive parameters as an object, with the\n        positional arguments as keys in the object. The options argument will\n        be merged into the parameters object unless the method spec specifies\n        `separate_options: true`.\n\n        Example:\n\n        ```\n        class MyClass extends AdvancedBase {\n            static NARI_METHODS = {\n                myMethod: {\n                    positional: ['param1', 'param2'],\n                    fn: ({ param1, param2 }) => {\n                        return param1 + param2;\n                    }\n                }\n            }\n        }\n\n        const instance = new MyClass();\n        const result = instance.myMethod(1, 2); // returns 3\n        ```\n\n        The method can also be called with options and callbacks:\n\n        ```\n        instance.myMethod(1, 2, { option1: 'value' }, (result) => {\n            console.log('success', result);\n        }, (error) => {\n            console.error('error', error);\n        });\n        ```\n    ",
          install_in_instance: (e) => {
            const t = e._get_merged_static_object("NARI_METHODS");
            e._.nariMethods = {};
            for (const n in t) {
              const s = t[n],
                i = s.fn.bind(e);
              (e._.nariMethods[n] = i),
                (e[n] = async (...e) => {
                  const t =
                      s.firstarg_options && "object" == typeof e[0]
                        ? 0
                        : s.positional.length,
                    n = e.slice(0, t),
                    r = e.slice(t),
                    o = {},
                    a = {},
                    c = {};
                  for (const [e, t] of n.entries()) o[s.positional[e]] = t;
                  let l;
                  "object" == typeof r[0] &&
                    (Object.assign(a, r[0]), r.shift()),
                    "function" == typeof r[0]
                      ? ((c.success = r[0]), r.shift())
                      : a.success && (c.success = a.success),
                    "function" == typeof r[0]
                      ? ((c.error = r[0]), r.shift())
                      : a.error && (c.error = a.error),
                    s.separate_options ? (o.options = a) : Object.assign(o, a);
                  try {
                    l = await i(o);
                  } catch (e) {
                    if (!c.error) throw e;
                    c.error(e);
                  }
                  return c.success && c.success(l), l;
                });
            }
          },
        };
      },
      912: (e, t, n) => {
        e.exports = {
          install_in_instance: (e, { parameters: t }) => {
            const s = e._get_merged_static_object("MODULES");
            if (t.modules) for (const e in t.modules) s[e] = t.modules[e];
            (e.modules = s), (e.require = (e) => (s[e] ? s[e] : n(274)(e)));
          },
        };
      },
      314: (e) => {
        e.exports = {
          name: "Properties",
          depends: ["Listeners"],
          install_in_instance: (e, { parameters: t }) => {
            const n = e._get_merged_static_object("PROPERTIES");
            (e.onchange = (t, n) => {
              e._.properties[t].listeners.push(n);
            }),
              (e._.properties = {});
            for (const s in n) {
              const i = { definition: n[s], listeners: [], value: void 0 };
              e._.properties[s] = i;
              let r = null;
              if (
                ("object" == typeof n[s]
                  ? ((r = n[s]),
                    r.factory && (r.value = r.factory({ parameters: t })))
                  : "function" == typeof n[s] && ((r = {}), (r.value = n[s]())),
                null === r)
              )
                throw new Error("this will never happen");
              if (
                (Object.defineProperty(e, s, {
                  get: () => i.value,
                  set: (t) => {
                    for (const n of e._.properties[s].listeners)
                      n(t, { old_value: e[s] });
                    const n = e[s],
                      o = t;
                    r.adapt && (t = r.adapt(t)),
                      (i.value = t),
                      r.post_set &&
                        r.post_set.call(e, t, {
                          intermediate_value: o,
                          old_value: n,
                        });
                  },
                }),
                (i.value = r.value),
                n[s].construct)
              ) {
                const i =
                  "string" == typeof n[s].construct ? n[s].construct : s;
                e[s] = t[i];
              }
            }
          },
        };
      },
      696: (e, t, n) => {
        const { TTopics: s } = n(868);
        e.exports = {
          install_in_instance: (e, { parameters: t }) => {
            const n = e._get_merged_static_array("HOOKS");
            e._.init_hooks = e._.init_hooks ?? [];
            for (const t of n)
              e._.init_hooks.push(() => {
                e._.context.services
                  .info(t.service)
                  .instance.as(s)
                  .sub(t.event, t.do.bind(e));
              });
          },
        };
      },
      73: (e, t, n) => {
        const { RemoveFromArrayDetachable: s } = n(498),
          { TTopics: i } = n(868),
          { install_in_instance: r } = n(912);
        e.exports = {
          install_in_instance: (e, { parameters: t }) => {
            const n = e._get_merged_static_array("TOPICS");
            e._.topics = {};
            for (const t of n) e._.topics[t] = { listeners_: [] };
            e.mixin(i, {
              pub: (t, n) => {
                if (t.includes("!"))
                  throw new Error('"!" in event name reserved for future use');
                const s = e._.topics[t];
                if (s) for (const e of s.listeners_) e();
                else console.warn("missing topic: " + s);
              },
              sub: (t, n) => {
                const i = e._.topics[t];
                if (i) return i.listeners_.push(n), new s(i.listeners_, n);
                console.warn("missing topic: " + i);
              },
            });
          },
        };
      },
      178: (e) => {
        e.exports = {
          install_in_instance_: (e, { parameters: t }) => {
            const n = e._get_merged_static_object("IMPLEMENTS");
            e._.impls = {};
            for (const t in n) {
              const s = n[t],
                i = {};
              for (const t in s) {
                const n = s[t];
                i[t] = n.bind(e);
              }
              e._.impls[t] = i;
            }
            (e.as = (t) => e._.impls[t]),
              (e.list_traits = () => Object.keys(e._.impls));
          },
          install_in_instance: (e, { parameters: t }) => {
            const n = e._get_inheritance_chain();
            (e._.impls = {}),
              (e.as = (t) => e._.impls[t]),
              (e.list_traits = () => Object.keys(e._.impls)),
              (e.mixin = (t, n) => (e._.impls[t] = n));
            for (const t of n) {
              const n = t.IMPLEMENTS;
              if (!n) continue;
              const s = [...Object.getOwnPropertySymbols(n), ...Object.keys(n)];
              for (const t of s) {
                const s = e._.impls[t] ?? (e._.impls[t] = {}),
                  i = n[t];
                for (const t in i) {
                  const n = i[t];
                  s[t] = n.bind(e);
                }
              }
            }
          },
        };
      },
      274: (e) => {
        function t(e) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        (t.keys = () => []), (t.resolve = t), (t.id = 274), (e.exports = t);
      },
      475: (e) => {
        class t {
          constructor(e = {}) {
            const t = Object.getOwnPropertyDescriptors(e);
            for (const e in t) Object.defineProperty(this, e, t[e]);
          }
          follow(e, t) {
            const n = {};
            for (const s of t) Object.defineProperty(n, s, { get: () => e[s] });
            return this.sub(n);
          }
          sub(e) {
            void 0 === e && (e = {});
            const n = Object.create(this),
              s = {};
            for (const i in n)
              if (n[i] instanceof t) {
                const t = e.hasOwnProperty(i) ? e[i] : void 0;
                (n[i] = n[i].sub(t)), (s[i] = !0);
              }
            const i = Object.getOwnPropertyDescriptors(e);
            for (const e in i) s[e] || Object.defineProperty(n, e, i[e]);
            return n;
          }
        }
        e.exports = { Context: t };
      },
      140: (e, t, n) => {
        const { AdvancedBase: s } = n(952),
          i = n(891);
        class r extends s {
          static FEATURES = [i()];
        }
        e.exports = { Emitter: r };
      },
      498: (e, t, n) => {
        const { FeatureBase: s } = n(533),
          { TDetachable: i } = n(868);
        class r extends s {
          static FEATURES = [n(178)];
          constructor() {
            super(), (this.delegates = []), (this.detached_ = !1);
          }
          add(e) {
            this.detached_ ? e.detach() : this.delegates.push(e);
          }
          static IMPLEMENTS = {
            [i]: {
              detach() {
                this.detached_ = !0;
                for (const e of this.delegates) e.detach();
              },
            },
          };
        }
        class o extends s {
          static FEATURES = [n(178)];
          constructor() {
            super(), (this.also = () => {});
          }
          also(e) {
            return (this.also = e), this;
          }
          static IMPLEMENTS = {
            [i]: {
              detach() {
                this.detach_(), this.also();
              },
            },
          };
        }
        e.exports = {
          MultiDetachable: r,
          RemoveFromArrayDetachable: class extends o {
            constructor(e, t) {
              super(), (this.array = new WeakRef(e)), (this.element = t);
            }
            detach_() {
              const e = this.array.deref();
              if (!e) return;
              const t = e.indexOf(this.element);
              -1 !== t && e.splice(t, 1);
            }
          },
        };
      },
      346: (e, t, n) => {
        const { AdvancedBase: s } = n(952),
          { TLogger: i, AS: r } = n(868);
        class o extends s {
          static MODULES = { util: { inspect: (e) => e } };
          static PROPERTIES = {
            console: { construct: !0, factory: () => console },
            format: () => ({
              info: { ansii: "[32;1m" },
              warn: { ansii: "[33;1m" },
              error: { ansii: "[31;1m", err: !0 },
              debug: { ansii: "[34;1m" },
            }),
          };
          static IMPLEMENTS = {
            [i]: {
              log(e, t, n, s) {
                const i = (0, this.require)("util"),
                  r = this.format[e];
                let o = "";
                (o += `${r.ansii}[${e.toUpperCase()}][0m `),
                  (o += t),
                  Object.keys(n).length &&
                    ((o += " "),
                    (o +=
                      Object.entries(n)
                        .map(([e, t]) => `\n  ${e}=${i.inspect(t)}`)
                        .join(" ") + "\n")),
                  (this.console ?? console)[r.err ? "error" : "log"](o, ...s);
              },
            },
          };
        }
        class a extends s {
          static PROPERTIES = {
            fields: { construct: !0, factory: () => ({}) },
            delegate: { construct: !0, value: null, adapt: (e) => r(e, i) },
          };
          static IMPLEMENTS = {
            [i]: {
              log(e, t, n, s) {
                return this.delegate.log(
                  e,
                  t,
                  Object.assign({}, this.fields, n),
                  s
                );
              },
            },
          };
        }
        class c extends s {
          static PROPERTIES = {
            impl: {
              value: () => new o(),
              adapt: (e) => r(e, i),
              construct: !0,
            },
            cat: { construct: !0 },
          };
          static IMPLEMENTS = {
            [i]: {
              log(e, t, n, s) {
                console.log();
              },
            },
          };
          fields(e) {
            const t = new a({ fields: e, delegate: this.impl });
            return new c({ impl: t });
          }
          info(e, ...t) {
            this.impl.log("info", e, {}, t);
          }
          on(e) {
            this.cat.on(e);
          }
          off(e) {
            this.cat.off(e);
          }
        }
        e.exports = {
          ArrayLogger: class extends s {
            static PROPERTIES = { buffer: { factory: () => [] } };
            static IMPLEMENTS = {
              [i]: {
                log(e, t, n, s) {
                  this.buffer.push({
                    level: e,
                    message: t,
                    fields: n,
                    values: s,
                  });
                },
              },
            };
          },
          CategorizedToggleLogger: class extends s {
            static PROPERTIES = {
              categories: {
                description: "categories that are enabled",
                factory: () => ({}),
              },
              delegate: { construct: !0, value: null, adapt: (e) => r(e, i) },
            };
            static IMPLEMENTS = {
              [i]: {
                log(e, t, n, s) {
                  const i = n.category;
                  if (this.categories[i]) return this.delegate.log(e, t, n, s);
                },
              },
            };
            on(e) {
              this.categories[e] = !0;
            }
            off(e) {
              delete this.categories[e];
            }
          },
          ToggleLogger: class extends s {
            static PROPERTIES = {
              enabled: { construct: !0, value: !0 },
              delegate: { construct: !0, value: null, adapt: (e) => r(e, i) },
            };
            static IMPLEMENTS = {
              [i]: {
                log(e, t, n, s) {
                  if (this.enabled) return this.delegate.log(e, t, n, s);
                },
              },
            };
          },
          ConsoleLogger: o,
          PrefixLogger: class extends s {
            static PROPERTIES = {
              prefix: { construct: !0, value: "" },
              delegate: { construct: !0, value: null, adapt: (e) => r(e, i) },
            };
            static IMPLEMENTS = {
              [i]: {
                log(e, t, n, s) {
                  return this.delegate.log(e, this.prefix + t, n, s);
                },
              },
            };
          },
          FieldsLogger: a,
          LoggerFacade: c,
        };
      },
      717: (e) => {
        class t {
          static STATUS_PENDING = Symbol("pending");
          static STATUS_RUNNING = {};
          static STATUS_DONE = Symbol("done");
          constructor() {
            (this.status_ = this.constructor.STATUS_PENDING),
              (this.donePromise = new Promise((e, t) => {
                (this.doneResolve = e), (this.doneReject = t);
              }));
          }
          get status() {
            return this.status_;
          }
          set status(e) {
            (this.status_ = e),
              e === this.constructor.STATUS_DONE && this.doneResolve();
          }
          resolve(e) {
            (this.status_ = this.constructor.STATUS_DONE), this.doneResolve(e);
          }
          awaitDone() {
            return this.donePromise;
          }
          then(e, ...t) {
            return this.donePromise.then(e, ...t);
          }
          reject(e) {
            (this.status_ = this.constructor.STATUS_DONE), this.doneReject(e);
          }
          onComplete(e) {
            return this.then(e);
          }
        }
        class n {
          static TYPE_READ = Symbol("read");
          static TYPE_WRITE = Symbol("write");
          constructor() {
            (this.queue = []),
              (this.readers_ = 0),
              (this.writer_ = !1),
              (this.on_empty_ = () => {}),
              (this.mode = this.constructor.TYPE_READ);
          }
          get effective_mode() {
            return this.readers_ > 0
              ? this.constructor.TYPE_READ
              : this.writer_
              ? this.constructor.TYPE_WRITE
              : void 0;
          }
          push_(e) {
            0 !== this.readers_ || this.writer_ || (this.mode = e.type),
              this.queue.push(e),
              this.check_queue_();
          }
          check_queue_() {
            if (0 === this.queue.length)
              return void (
                0 !== this.readers_ ||
                this.writer_ ||
                this.on_empty_()
              );
            const e = () => this.queue[0];
            if (
              (0 !== this.readers_ || this.writer_ || (this.mode = e().type),
              this.mode === this.constructor.TYPE_READ)
            ) {
              for (; e()?.type === this.constructor.TYPE_READ; ) {
                const e = this.queue.shift();
                this.readers_++,
                  (async () => {
                    await e.p_unlock, this.readers_--, this.check_queue_();
                  })(),
                  e.p_operation.resolve();
              }
              return;
            }
            if (this.writer_) return;
            const t = this.queue.shift();
            (this.writer_ = !0),
              (async () => {
                await t.p_unlock, (this.writer_ = !1), this.check_queue_();
              })(),
              t.p_operation.resolve();
          }
          async rlock() {
            const e = new t(),
              n = new t(),
              s = {
                unlock: () => {
                  n.resolve();
                },
              };
            return (
              this.push_({
                type: this.constructor.TYPE_READ,
                p_operation: e,
                p_unlock: n,
              }),
              await e,
              s
            );
          }
          async wlock() {
            const e = new t(),
              n = new t(),
              s = {
                unlock: () => {
                  n.resolve();
                },
              };
            return (
              this.push_({
                type: this.constructor.TYPE_WRITE,
                p_operation: e,
                p_unlock: n,
              }),
              await e,
              s
            );
          }
        }
        e.exports = {
          TeePromise: t,
          Lock: class {
            constructor() {
              (this._locked = !1), (this._waiting = []);
            }
            async acquire(e) {
              if (
                (await new Promise((e) => {
                  this._locked
                    ? this._waiting.push({ resolve: e })
                    : ((this._locked = !0), e());
                }),
                e)
              ) {
                let t;
                try {
                  t = await e();
                } finally {
                  this.release();
                }
                return t;
              }
            }
            release() {
              if (this._waiting.length > 0) {
                const { resolve: e } = this._waiting.shift();
                e();
              } else this._locked = !1;
            }
          },
          RWLock: n,
          asyncSafeSetInterval: async (e, t, n, s) => {
            (n = n ?? []), (s = s ?? {});
            const { onBehindSchedule: i } = s,
              r = (e) => new Promise((t) => setTimeout(t, e));
            for (;;) {
              await r(t);
              const s = Date.now();
              await e(...n);
              const o = t - (Date.now() - s);
              if (o < 0) {
                if (i && (await i(-o))) return;
              } else await r(o);
            }
          },
          raceCase: async (e) =>
            Promise.race(
              Object.entries(e).map(([e, t]) => t.then((t) => [e, t]))
            ),
        };
      },
      9: (e) => {
        e.exports = class {
          static ensure_array(e) {
            return Array.isArray(e) ? e : [e];
          }
          static add(...e) {
            return e.reduce((e, t) => e + t, 0);
          }
          static split(e, t, n = {}) {
            n = n || {};
            const { trim: s, discard_empty: i } = n,
              r = [];
            n.trim && r.push((e) => e.map((e) => e.trim())),
              n.discard_empty && r.push((e) => e.filter((e) => e.length > 0));
            let o = e.split(t);
            for (const e of r) o = e(o);
            return o;
          }
        };
      },
      519: (e) => {
        e.exports = {
          quot: (e) =>
            void 0 === e
              ? "[undefined]"
              : null === e
              ? "[null]"
              : "function" == typeof e
              ? "[function]"
              : "object" == typeof e
              ? "[object]"
              : "number" == typeof e
              ? "(" + e + ")"
              : ((e = (e = "" + e).replace(/["`]/g, (e) =>
                  '"' === e ? "`" : '"'
                )),
                (e = (e = JSON.stringify("" + e)).replace(/["`]/g, (e) =>
                  '"' === e ? "`" : '"'
                ))),
          osclink: (e, t) => (t || (t = e), `]8;;${e}\\${t}]8;;\\`),
          format_as_usd: (e) =>
            e < 0.01
              ? e < 1e-5
                ? "$" + e.toExponential(2)
                : "$" + e.toFixed(5)
              : "$" + e.toFixed(2),
        };
      },
      259: (e) => {
        class t {
          static valueOf() {
            return this.value;
          }
        }
        class n extends t {
          static value = 1;
        }
        class s extends t {
          static value = 1e3 * n;
        }
        class i extends t {
          static value = 60 * s;
        }
        class r extends t {
          static value = 60 * i;
        }
        e.exports = {
          MILLISECOND: n,
          SECOND: s,
          MINUTE: i,
          HOUR: r,
          DAY: class extends t {
            static value = 24 * r;
          },
        };
      },
      875: (e, t, n) => {
        const { AdvancedBase: s } = n(952),
          { TService: i } = n(866),
          { TeePromise: r } = n(717),
          o = (e) => {
            const t = class {
              get label() {
                return e;
              }
              describe() {
                return e;
              }
            };
            return (t.name = `Status${e[0].toUpperCase() + e.slice(1)}`), t;
          };
        class a extends s {
          static StatusRegistering = o("registering");
          static StatusPending = class {
            constructor({ waiting_for: e }) {
              this.waiting_for = e;
            }
            get label() {
              return "waiting";
            }
            describe() {
              return `waiting for: ${this.waiting_for.join(", ")}`;
            }
          };
          static StatusInitializing = o("initializing");
          static StatusRunning = class {
            constructor({ start_ts: e }) {
              this.start_ts = e;
            }
            get label() {
              return "running";
            }
            describe() {
              return `running (since ${this.start_ts})`;
            }
          };
          constructor({ context: e } = {}) {
            super(),
              (this.context = e),
              (this.services_l_ = []),
              (this.services_m_ = {}),
              (this.service_infos_ = {}),
              (this.init_listeners_ = []),
              (this.waiting_ = {});
          }
          async register(e, t, n = {}) {
            await new Promise((e) => setTimeout(e, 0));
            const s = {
              name: e,
              instance: t.create({
                parameters: n.parameters ?? {},
                context: this.context,
              }),
              status: new this.constructor.StatusRegistering(),
            };
            this.services_l_.push(s),
              (this.services_m_[e] = s),
              await this.maybe_init_(e);
          }
          info(e) {
            return this.services_m_[e];
          }
          get(e) {
            const t = this.services_m_[e];
            if (!t) throw new Error(`Service not registered: ${e}`);
            if (t.status instanceof this.constructor.StatusRunning)
              return t.instance;
          }
          async aget(e) {
            return await this.wait_for_init([e]), this.get(e);
          }
          async wait_for_init(e) {
            let t;
            await new Promise((n) => {
              (t = () => {
                if (0 === this.get_waiting_for_(e).length) {
                  const e = this.init_listeners_.indexOf(t);
                  return -1 !== e && this.init_listeners_.splice(e, 1), n(), !0;
                }
              }),
                t() || this.init_listeners_.push(t);
            });
          }
          get_waiting_for_(e) {
            const t = [];
            for (const n of e) {
              const e = this.services_m_[n];
              (e && e.status instanceof this.constructor.StatusRunning) ||
                t.push(n);
            }
            return t;
          }
          async maybe_init_(e) {
            const t = this.services_m_[e],
              n = t.instance.as(i).get_depends(),
              s = this.get_waiting_for_(n);
            if (0 !== s.length) {
              for (const t of s)
                (this.waiting_[t] || (this.waiting_[t] = new Set())).add(e);
              t.status = new this.constructor.StatusPending({ waiting_for: s });
            } else await this.init_service_(e);
          }
          async init_service_(e, t = {}) {
            const n = this.services_m_[e];
            n.status = new this.constructor.StatusInitializing();
            const s = n.instance.as(i);
            await s.init(),
              (n.status = new this.constructor.StatusRunning({
                start_ts: new Date(),
              }));
            const r = this.waiting_[e],
              o = [];
            if (r)
              for (const e of r.values())
                o.push(this.maybe_init_(e, { no_init_listeners: !0 }));
            if ((await Promise.all(o), !t.no_init_listeners))
              for (const e of this.init_listeners_) await e();
          }
        }
        e.exports = { ServiceManager: a };
      },
      868: (e) => {
        e.exports = {
          TTopics: Symbol("TTopics"),
          TDetachable: Symbol("TDetachable"),
          TLogger: Symbol("TLogger"),
          AS: (e, t) =>
            e.constructor &&
            e.constructor.IMPLEMENTS &&
            e.constructor.IMPLEMENTS[t]
              ? e.as(t)
              : e,
        };
      },
    },
    t = {};
  function n(s) {
    var i = t[s];
    if (void 0 !== i) return i.exports;
    var r = (t[s] = { exports: {} });
    return e[s](r, r.exports, n), r.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var s in t)
        n.o(t, s) &&
          !n.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      async function e(e) {
        if ("blob" === e.responseType) {
          const t = e.getResponseHeader("content-type");
          if (t.startsWith("application/json")) {
            const t = await e.response.text();
            try {
              return JSON.parse(t);
            } catch (e) {
              return t;
            }
          } else if (t.startsWith("application/octet-stream"))
            return e.response;
          return { success: !0, result: e.response };
        }
        const t = e.responseText;
        try {
          return JSON.parse(t);
        } catch (e) {
          return t;
        }
      }
      function t() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e) =>
          (
            e ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))
          ).toString(16)
        );
      }
      function s(
        e,
        t,
        n,
        s = "post",
        i = "application/json;charset=UTF-8",
        r = void 0
      ) {
        const o = new XMLHttpRequest();
        return (
          o.open(s, t + e, !0),
          o.setRequestHeader("Authorization", "Bearer " + n),
          o.setRequestHeader("Content-Type", i),
          (o.responseType = r ?? ""),
          o
        );
      }
      function i(e, t, n) {
        return e && "function" == typeof e && e(n), t(n);
      }
      function r(t, n, s, r, o) {
        t.addEventListener("load", function (t) {
          return (async function (t, n, s, i, r) {
            const o = await e(r);
            return 401 === r.status
              ? (n &&
                  "function" == typeof n &&
                  n({ status: 401, message: "Unauthorized" }),
                i({ status: 401, message: "Unauthorized" }))
              : 200 !== r.status
              ? (n && "function" == typeof n && n(o), i(o))
              : (!1 === o.success &&
                  "permission_denied" === o.error?.code &&
                  (
                    await puter.ui.requestPermission({
                      permission: "driver:puter-image-generation:generate",
                    })
                  ).granted,
                t && "function" == typeof t && t(o),
                s(o));
          })(n, s, r, o, this);
        }),
          t.addEventListener("error", function (e) {
            return i(s, o, this);
          });
      }
      const o = () => {};
      class a {
        static callback(e) {
          return e && "function" == typeof e ? e : void 0;
        }
      }
      function c(e, t, n, s, i = {}) {
        return async function (...r) {
          let o = {},
            a = {};
          return (
            1 !== r.length || "object" != typeof r[0] || Array.isArray(r[0])
              ? (e.forEach((e, t) => {
                  o[e] = r[t];
                }),
                (a = { success: r[e.length], error: r[e.length + 1] }))
              : ((o = { ...r[0] }),
                (a = { success: o.success, error: o.error }),
                delete o.success,
                delete o.error),
            i.preprocess &&
              "function" == typeof i.preprocess &&
              (o = i.preprocess(o)),
            await (async function (e, t, n, s, i, r) {
              const o = new h();
              return (
                l(
                  e,
                  o.resolve.bind(o),
                  o.reject.bind(o),
                  t,
                  n,
                  s,
                  i,
                  void 0,
                  void 0,
                  r
                ),
                await o
              );
            })(a, t, n, s, o, i)
          );
        };
      }
      async function l(
        t = {},
        n,
        r,
        c,
        u,
        d,
        p,
        f,
        g = "application/json;charset=UTF-8",
        m = {}
      ) {
        if (!puter.authToken && "web" === puter.env)
          try {
            await puter.ui.authenticateWithPuter();
          } catch (e) {
            return r({
              error: {
                code: "auth_canceled",
                message: "Authentication canceled",
              },
            });
          }
        const y = a.callback(t.success) ?? o,
          b = a.callback(t.error) ?? o,
          w = s("/drivers/call", puter.APIOrigin, puter.authToken, "POST", g);
        m.responseType && (w.responseType = m.responseType);
        let v = !1,
          _ = null,
          A = 0,
          k = !1,
          I = "";
        const x = [];
        (w.onreadystatechange = () => {
          if (2 === w.readyState) {
            if ("application/x-ndjson" !== w.getResponseHeader("Content-Type"))
              return;
            return (
              (v = !0),
              n(
                (async function* () {
                  for (; !k; ) {
                    const e = new h();
                    if (((_ = e.resolve.bind(e)), await e, k)) break;
                    for (; x.length > 0; ) {
                      const e = x.shift();
                      "" !== e.trim() && (yield JSON.parse(e));
                    }
                  }
                })()
              )
            );
          }
          4 === w.readyState && ((k = !0), v && _?.());
        }),
          (w.onprogress = function () {
            if (!_) return;
            const e = w.responseText.slice(A);
            A = w.responseText.length;
            let t = !1;
            for (let n = 0; n < e.length; n++)
              (I += e[n]), "\n" === e[n] && ((t = !0), x.push(I), (I = ""));
            t && _();
          }),
          w.addEventListener("load", async function (s) {
            if (v) return;
            const i = await e(s.target);
            if (401 === s.status || "token_auth_failed" === i?.code) {
              if ("token_auth_failed" === i?.code && "web" === puter.env)
                try {
                  puter.resetAuthToken(),
                    await puter.ui.authenticateWithPuter();
                } catch (e) {
                  return r({
                    error: {
                      code: "auth_canceled",
                      message: "Authentication canceled",
                    },
                  });
                }
              return (
                b &&
                  "function" == typeof b &&
                  b({ status: 401, message: "Unauthorized" }),
                r({ status: 401, message: "Unauthorized" })
              );
            }
            if (s.status && 200 !== s.status) return b(i), r(i);
            {
              if (!1 === i.success && "permission_denied" === i.error?.code)
                return (
                  await puter.ui.requestPermission({
                    permission: "driver:" + c + ":" + d,
                  })
                ).granted
                  ? l(t, n, r, c, d, p, f, g, m)
                  : (b(i), r(i));
              if (!1 === i.success) return b(i), r(i);
              let e = void 0 !== i.result ? i.result : i;
              return (
                m.transform && (e = await m.transform(e)),
                n.success && y(e),
                n(e)
              );
            }
          }),
          w.addEventListener("error", function (e) {
            return i(b, r, this);
          }),
          w.send(
            JSON.stringify({
              interface: c,
              driver: u,
              test_mode: m?.test_mode,
              method: d,
              args: p,
            })
          );
      }
      class h {
        static STATUS_PENDING = {};
        static STATUS_RUNNING = {};
        static STATUS_DONE = {};
        constructor() {
          (this.status_ = this.constructor.STATUS_PENDING),
            (this.donePromise = new Promise((e, t) => {
              (this.doneResolve = e), (this.doneReject = t);
            }));
        }
        get status() {
          return this.status_;
        }
        set status(e) {
          (this.status_ = e),
            e === this.constructor.STATUS_DONE && this.doneResolve();
        }
        resolve(e) {
          (this.status_ = this.constructor.STATUS_DONE), this.doneResolve(e);
        }
        awaitDone() {
          return this.donePromise;
        }
        then(e, t) {
          return this.donePromise.then(e, t);
        }
        reject(e) {
          (this.status_ = this.constructor.STATUS_DONE), this.doneReject(e);
        }
        onComplete(e) {
          return this.then(e);
        }
      }
      async function u(e) {
        const t = new h(),
          n = new FileReader();
        return (
          (n.onloadend = () => t.resolve(n.result)), n.readAsDataURL(e), await t
        );
      }
      function d(e) {
        return new Promise((t, n) => {
          const s = new FileReader();
          (s.onload = function (e) {
            t(e.target.result);
          }),
            (s.onerror = function (e) {
              n(e);
            }),
            s.readAsDataURL(e);
        });
      }
      const p = class {
          constructor(e) {
            (this.authToken = e.authToken),
              (this.APIOrigin = e.APIOrigin),
              (this.appID = e.appID);
          }
          setAuthToken(e) {
            this.authToken = e;
          }
          setAPIOrigin(e) {
            this.APIOrigin = e;
          }
          user = function (...e) {
            let t;
            t =
              "object" == typeof e[0] && null !== e[0]
                ? e[0]
                : { success: e[0], error: e[1] };
            let n = "";
            return (
              t?.query && (n = "?" + new URLSearchParams(t.query).toString()),
              new Promise((e, i) => {
                const o = s(
                  "/whoami" + n,
                  this.APIOrigin,
                  this.authToken,
                  "get"
                );
                r(o, t.success, t.error, e, i), o.send();
              })
            );
          };
          version = function (...e) {
            let t;
            return (
              (t =
                "object" == typeof e[0] && null !== e[0]
                  ? e[0]
                  : { success: e[0], error: e[1] }),
              new Promise((e, n) => {
                const i = s("/version", this.APIOrigin, this.authToken, "get");
                r(i, t.success, t.error, e, n), i.send();
              })
            );
          };
        },
        f = Object.create(null);
      (f.open = "0"),
        (f.close = "1"),
        (f.ping = "2"),
        (f.pong = "3"),
        (f.message = "4"),
        (f.upgrade = "5"),
        (f.noop = "6");
      const g = Object.create(null);
      Object.keys(f).forEach((e) => {
        g[f[e]] = e;
      });
      const m = { type: "error", data: "parser error" },
        y =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" ===
              Object.prototype.toString.call(Blob)),
        b = "function" == typeof ArrayBuffer,
        w = (e) =>
          "function" == typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer instanceof ArrayBuffer,
        v = ({ type: e, data: t }, n, s) =>
          y && t instanceof Blob
            ? n
              ? s(t)
              : _(t, s)
            : b && (t instanceof ArrayBuffer || w(t))
            ? n
              ? s(t)
              : _(new Blob([t]), s)
            : s(f[e] + (t || "")),
        _ = (e, t) => {
          const n = new FileReader();
          return (
            (n.onload = function () {
              const e = n.result.split(",")[1];
              t("b" + (e || ""));
            }),
            n.readAsDataURL(e)
          );
        };
      function A(e) {
        return e instanceof Uint8Array
          ? e
          : e instanceof ArrayBuffer
          ? new Uint8Array(e)
          : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      }
      let k;
      const I = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
      for (let e = 0; e < 64; e++)
        I[
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(
            e
          )
        ] = e;
      const x = "function" == typeof ArrayBuffer,
        T = (e, t) => {
          if ("string" != typeof e) return { type: "message", data: S(e, t) };
          const n = e.charAt(0);
          return "b" === n
            ? { type: "message", data: E(e.substring(1), t) }
            : g[n]
            ? e.length > 1
              ? { type: g[n], data: e.substring(1) }
              : { type: g[n] }
            : m;
        },
        E = (e, t) => {
          if (x) {
            const n = ((e) => {
              let t,
                n,
                s,
                i,
                r,
                o = 0.75 * e.length,
                a = e.length,
                c = 0;
              "=" === e[e.length - 1] && (o--, "=" === e[e.length - 2] && o--);
              const l = new ArrayBuffer(o),
                h = new Uint8Array(l);
              for (t = 0; t < a; t += 4)
                (n = I[e.charCodeAt(t)]),
                  (s = I[e.charCodeAt(t + 1)]),
                  (i = I[e.charCodeAt(t + 2)]),
                  (r = I[e.charCodeAt(t + 3)]),
                  (h[c++] = (n << 2) | (s >> 4)),
                  (h[c++] = ((15 & s) << 4) | (i >> 2)),
                  (h[c++] = ((3 & i) << 6) | (63 & r));
              return l;
            })(e);
            return S(n, t);
          }
          return { base64: !0, data: e };
        },
        S = (e, t) =>
          "blob" === t
            ? e instanceof Blob
              ? e
              : new Blob([e])
            : e instanceof ArrayBuffer
            ? e
            : e.buffer,
        P = String.fromCharCode(30);
      function O() {
        return new TransformStream({
          transform(e, t) {
            !(function (e, t) {
              y && e.data instanceof Blob
                ? e.data.arrayBuffer().then(A).then(t)
                : b && (e.data instanceof ArrayBuffer || w(e.data))
                ? t(A(e.data))
                : v(e, !1, (e) => {
                    k || (k = new TextEncoder()), t(k.encode(e));
                  });
            })(e, (n) => {
              const s = n.length;
              let i;
              if (s < 126)
                (i = new Uint8Array(1)), new DataView(i.buffer).setUint8(0, s);
              else if (s < 65536) {
                i = new Uint8Array(3);
                const e = new DataView(i.buffer);
                e.setUint8(0, 126), e.setUint16(1, s);
              } else {
                i = new Uint8Array(9);
                const e = new DataView(i.buffer);
                e.setUint8(0, 127), e.setBigUint64(1, BigInt(s));
              }
              e.data && "string" != typeof e.data && (i[0] |= 128),
                t.enqueue(i),
                t.enqueue(n);
            });
          },
        });
      }
      let D;
      function C(e) {
        return e.reduce((e, t) => e + t.length, 0);
      }
      function M(e, t) {
        if (e[0].length === t) return e.shift();
        const n = new Uint8Array(t);
        let s = 0;
        for (let i = 0; i < t; i++)
          (n[i] = e[0][s++]), s === e[0].length && (e.shift(), (s = 0));
        return e.length && s < e[0].length && (e[0] = e[0].slice(s)), n;
      }
      function L(e) {
        if (e)
          return (function (e) {
            for (var t in L.prototype) e[t] = L.prototype[t];
            return e;
          })(e);
      }
      (L.prototype.on = L.prototype.addEventListener =
        function (e, t) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
            this
          );
        }),
        (L.prototype.once = function (e, t) {
          function n() {
            this.off(e, n), t.apply(this, arguments);
          }
          return (n.fn = t), this.on(e, n), this;
        }),
        (L.prototype.off =
          L.prototype.removeListener =
          L.prototype.removeAllListeners =
          L.prototype.removeEventListener =
            function (e, t) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this;
              var n,
                s = this._callbacks["$" + e];
              if (!s) return this;
              if (1 == arguments.length)
                return delete this._callbacks["$" + e], this;
              for (var i = 0; i < s.length; i++)
                if ((n = s[i]) === t || n.fn === t) {
                  s.splice(i, 1);
                  break;
                }
              return 0 === s.length && delete this._callbacks["$" + e], this;
            }),
        (L.prototype.emit = function (e) {
          this._callbacks = this._callbacks || {};
          for (
            var t = new Array(arguments.length - 1),
              n = this._callbacks["$" + e],
              s = 1;
            s < arguments.length;
            s++
          )
            t[s - 1] = arguments[s];
          if (n) {
            s = 0;
            for (var i = (n = n.slice(0)).length; s < i; ++s)
              n[s].apply(this, t);
          }
          return this;
        }),
        (L.prototype.emitReserved = L.prototype.emit),
        (L.prototype.listeners = function (e) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks["$" + e] || []
          );
        }),
        (L.prototype.hasListeners = function (e) {
          return !!this.listeners(e).length;
        });
      const R =
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : Function("return this")();
      function U(e, ...t) {
        return t.reduce(
          (t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t),
          {}
        );
      }
      const B = R.setTimeout,
        N = R.clearTimeout;
      function F(e, t) {
        t.useNativeTimers
          ? ((e.setTimeoutFn = B.bind(R)), (e.clearTimeoutFn = N.bind(R)))
          : ((e.setTimeoutFn = R.setTimeout.bind(R)),
            (e.clearTimeoutFn = R.clearTimeout.bind(R)));
      }
      class j extends Error {
        constructor(e, t, n) {
          super(e),
            (this.description = t),
            (this.context = n),
            (this.type = "TransportError");
        }
      }
      class q extends L {
        constructor(e) {
          super(),
            (this.writable = !1),
            F(this, e),
            (this.opts = e),
            (this.query = e.query),
            (this.socket = e.socket);
        }
        onError(e, t, n) {
          return super.emitReserved("error", new j(e, t, n)), this;
        }
        open() {
          return (this.readyState = "opening"), this.doOpen(), this;
        }
        close() {
          return (
            ("opening" !== this.readyState && "open" !== this.readyState) ||
              (this.doClose(), this.onClose()),
            this
          );
        }
        send(e) {
          "open" === this.readyState && this.write(e);
        }
        onOpen() {
          (this.readyState = "open"),
            (this.writable = !0),
            super.emitReserved("open");
        }
        onData(e) {
          const t = T(e, this.socket.binaryType);
          this.onPacket(t);
        }
        onPacket(e) {
          super.emitReserved("packet", e);
        }
        onClose(e) {
          (this.readyState = "closed"), super.emitReserved("close", e);
        }
        pause(e) {}
        createUri(e, t = {}) {
          return (
            e +
            "://" +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(t)
          );
        }
        _hostname() {
          const e = this.opts.hostname;
          return -1 === e.indexOf(":") ? e : "[" + e + "]";
        }
        _port() {
          return this.opts.port &&
            ((this.opts.secure && Number(443 !== this.opts.port)) ||
              (!this.opts.secure && 80 !== Number(this.opts.port)))
            ? ":" + this.opts.port
            : "";
        }
        _query(e) {
          const t = (function (e) {
            let t = "";
            for (let n in e)
              e.hasOwnProperty(n) &&
                (t.length && (t += "&"),
                (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
            return t;
          })(e);
          return t.length ? "?" + t : "";
        }
      }
      const z =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
          ),
        W = 64,
        X = {};
      let V,
        K = 0,
        G = 0;
      function Y(e) {
        let t = "";
        do {
          (t = z[e % W] + t), (e = Math.floor(e / W));
        } while (e > 0);
        return t;
      }
      function H() {
        const e = Y(+new Date());
        return e !== V ? ((K = 0), (V = e)) : e + "." + Y(K++);
      }
      for (; G < W; G++) X[z[G]] = G;
      let Q = !1;
      try {
        Q =
          "undefined" != typeof XMLHttpRequest &&
          "withCredentials" in new XMLHttpRequest();
      } catch (f) {}
      const Z = Q;
      function J(e) {
        const t = e.xdomain;
        try {
          if ("undefined" != typeof XMLHttpRequest && (!t || Z))
            return new XMLHttpRequest();
        } catch (e) {}
        if (!t)
          try {
            return new R[["Active"].concat("Object").join("X")](
              "Microsoft.XMLHTTP"
            );
          } catch (e) {}
      }
      function $() {}
      const ee = null != new J({ xdomain: !1 }).responseType;
      class te extends L {
        constructor(e, t) {
          super(),
            F(this, t),
            (this.opts = t),
            (this.method = t.method || "GET"),
            (this.uri = e),
            (this.data = void 0 !== t.data ? t.data : null),
            this.create();
        }
        create() {
          var e;
          const t = U(
            this.opts,
            "agent",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "autoUnref"
          );
          t.xdomain = !!this.opts.xd;
          const n = (this.xhr = new J(t));
          try {
            n.open(this.method, this.uri, !0);
            try {
              if (this.opts.extraHeaders) {
                n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                for (let e in this.opts.extraHeaders)
                  this.opts.extraHeaders.hasOwnProperty(e) &&
                    n.setRequestHeader(e, this.opts.extraHeaders[e]);
              }
            } catch (e) {}
            if ("POST" === this.method)
              try {
                n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (e) {}
            try {
              n.setRequestHeader("Accept", "*/*");
            } catch (e) {}
            null === (e = this.opts.cookieJar) ||
              void 0 === e ||
              e.addCookies(n),
              "withCredentials" in n &&
                (n.withCredentials = this.opts.withCredentials),
              this.opts.requestTimeout &&
                (n.timeout = this.opts.requestTimeout),
              (n.onreadystatechange = () => {
                var e;
                3 === n.readyState &&
                  (null === (e = this.opts.cookieJar) ||
                    void 0 === e ||
                    e.parseCookies(n)),
                  4 === n.readyState &&
                    (200 === n.status || 1223 === n.status
                      ? this.onLoad()
                      : this.setTimeoutFn(() => {
                          this.onError(
                            "number" == typeof n.status ? n.status : 0
                          );
                        }, 0));
              }),
              n.send(this.data);
          } catch (e) {
            return void this.setTimeoutFn(() => {
              this.onError(e);
            }, 0);
          }
          "undefined" != typeof document &&
            ((this.index = te.requestsCount++),
            (te.requests[this.index] = this));
        }
        onError(e) {
          this.emitReserved("error", e, this.xhr), this.cleanup(!0);
        }
        cleanup(e) {
          if (void 0 !== this.xhr && null !== this.xhr) {
            if (((this.xhr.onreadystatechange = $), e))
              try {
                this.xhr.abort();
              } catch (e) {}
            "undefined" != typeof document && delete te.requests[this.index],
              (this.xhr = null);
          }
        }
        onLoad() {
          const e = this.xhr.responseText;
          null !== e &&
            (this.emitReserved("data", e),
            this.emitReserved("success"),
            this.cleanup());
        }
        abort() {
          this.cleanup();
        }
      }
      function ne() {
        for (let e in te.requests)
          te.requests.hasOwnProperty(e) && te.requests[e].abort();
      }
      (te.requestsCount = 0),
        (te.requests = {}),
        "undefined" != typeof document &&
          ("function" == typeof attachEvent
            ? attachEvent("onunload", ne)
            : "function" == typeof addEventListener &&
              addEventListener(
                "onpagehide" in R ? "pagehide" : "unload",
                ne,
                !1
              ));
      const se =
          "function" == typeof Promise && "function" == typeof Promise.resolve
            ? (e) => Promise.resolve().then(e)
            : (e, t) => t(e, 0),
        ie = R.WebSocket || R.MozWebSocket,
        re =
          "undefined" != typeof navigator &&
          "string" == typeof navigator.product &&
          "reactnative" === navigator.product.toLowerCase(),
        oe = {
          websocket: class extends q {
            constructor(e) {
              super(e), (this.supportsBinary = !e.forceBase64);
            }
            get name() {
              return "websocket";
            }
            doOpen() {
              if (!this.check()) return;
              const e = this.uri(),
                t = this.opts.protocols,
                n = re
                  ? {}
                  : U(
                      this.opts,
                      "agent",
                      "perMessageDeflate",
                      "pfx",
                      "key",
                      "passphrase",
                      "cert",
                      "ca",
                      "ciphers",
                      "rejectUnauthorized",
                      "localAddress",
                      "protocolVersion",
                      "origin",
                      "maxPayload",
                      "family",
                      "checkServerIdentity"
                    );
              this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
              try {
                this.ws = re ? new ie(e, t, n) : t ? new ie(e, t) : new ie(e);
              } catch (e) {
                return this.emitReserved("error", e);
              }
              (this.ws.binaryType = this.socket.binaryType),
                this.addEventListeners();
            }
            addEventListeners() {
              (this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
              }),
                (this.ws.onclose = (e) =>
                  this.onClose({
                    description: "websocket connection closed",
                    context: e,
                  })),
                (this.ws.onmessage = (e) => this.onData(e.data)),
                (this.ws.onerror = (e) => this.onError("websocket error", e));
            }
            write(e) {
              this.writable = !1;
              for (let t = 0; t < e.length; t++) {
                const n = e[t],
                  s = t === e.length - 1;
                v(n, this.supportsBinary, (e) => {
                  try {
                    this.ws.send(e);
                  } catch (e) {}
                  s &&
                    se(() => {
                      (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
                });
              }
            }
            doClose() {
              void 0 !== this.ws && (this.ws.close(), (this.ws = null));
            }
            uri() {
              const e = this.opts.secure ? "wss" : "ws",
                t = this.query || {};
              return (
                this.opts.timestampRequests &&
                  (t[this.opts.timestampParam] = H()),
                this.supportsBinary || (t.b64 = 1),
                this.createUri(e, t)
              );
            }
            check() {
              return !!ie;
            }
          },
          webtransport: class extends q {
            get name() {
              return "webtransport";
            }
            doOpen() {
              "function" == typeof WebTransport &&
                ((this.transport = new WebTransport(
                  this.createUri("https"),
                  this.opts.transportOptions[this.name]
                )),
                this.transport.closed
                  .then(() => {
                    this.onClose();
                  })
                  .catch((e) => {
                    this.onError("webtransport error", e);
                  }),
                this.transport.ready.then(() => {
                  this.transport.createBidirectionalStream().then((e) => {
                    const t = (function (e, t) {
                        D || (D = new TextDecoder());
                        const n = [];
                        let s = 0,
                          i = -1,
                          r = !1;
                        return new TransformStream({
                          transform(o, a) {
                            for (n.push(o); ; ) {
                              if (0 === s) {
                                if (C(n) < 1) break;
                                const e = M(n, 1);
                                (r = !(128 & ~e[0])),
                                  (i = 127 & e[0]),
                                  (s = i < 126 ? 3 : 126 === i ? 1 : 2);
                              } else if (1 === s) {
                                if (C(n) < 2) break;
                                const e = M(n, 2);
                                (i = new DataView(
                                  e.buffer,
                                  e.byteOffset,
                                  e.length
                                ).getUint16(0)),
                                  (s = 3);
                              } else if (2 === s) {
                                if (C(n) < 8) break;
                                const e = M(n, 8),
                                  t = new DataView(
                                    e.buffer,
                                    e.byteOffset,
                                    e.length
                                  ),
                                  r = t.getUint32(0);
                                if (r > Math.pow(2, 21) - 1) {
                                  a.enqueue(m);
                                  break;
                                }
                                (i = r * Math.pow(2, 32) + t.getUint32(4)),
                                  (s = 3);
                              } else {
                                if (C(n) < i) break;
                                const e = M(n, i);
                                a.enqueue(T(r ? e : D.decode(e), t)), (s = 0);
                              }
                              if (0 === i || i > e) {
                                a.enqueue(m);
                                break;
                              }
                            }
                          },
                        });
                      })(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                      n = e.readable.pipeThrough(t).getReader(),
                      s = O();
                    s.readable.pipeTo(e.writable),
                      (this.writer = s.writable.getWriter());
                    const i = () => {
                      n.read()
                        .then(({ done: e, value: t }) => {
                          e || (this.onPacket(t), i());
                        })
                        .catch((e) => {});
                    };
                    i();
                    const r = { type: "open" };
                    this.query.sid && (r.data = `{"sid":"${this.query.sid}"}`),
                      this.writer.write(r).then(() => this.onOpen());
                  });
                }));
            }
            write(e) {
              this.writable = !1;
              for (let t = 0; t < e.length; t++) {
                const n = e[t],
                  s = t === e.length - 1;
                this.writer.write(n).then(() => {
                  s &&
                    se(() => {
                      (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
                });
              }
            }
            doClose() {
              var e;
              null === (e = this.transport) || void 0 === e || e.close();
            }
          },
          polling: class extends q {
            constructor(e) {
              if (
                (super(e), (this.polling = !1), "undefined" != typeof location)
              ) {
                const t = "https:" === location.protocol;
                let n = location.port;
                n || (n = t ? "443" : "80"),
                  (this.xd =
                    ("undefined" != typeof location &&
                      e.hostname !== location.hostname) ||
                    n !== e.port);
              }
              const t = e && e.forceBase64;
              (this.supportsBinary = ee && !t),
                this.opts.withCredentials && (this.cookieJar = void 0);
            }
            get name() {
              return "polling";
            }
            doOpen() {
              this.poll();
            }
            pause(e) {
              this.readyState = "pausing";
              const t = () => {
                (this.readyState = "paused"), e();
              };
              if (this.polling || !this.writable) {
                let e = 0;
                this.polling &&
                  (e++,
                  this.once("pollComplete", function () {
                    --e || t();
                  })),
                  this.writable ||
                    (e++,
                    this.once("drain", function () {
                      --e || t();
                    }));
              } else t();
            }
            poll() {
              (this.polling = !0), this.doPoll(), this.emitReserved("poll");
            }
            onData(e) {
              ((e, t) => {
                const n = e.split(P),
                  s = [];
                for (let e = 0; e < n.length; e++) {
                  const i = T(n[e], t);
                  if ((s.push(i), "error" === i.type)) break;
                }
                return s;
              })(e, this.socket.binaryType).forEach((e) => {
                if (
                  ("opening" === this.readyState &&
                    "open" === e.type &&
                    this.onOpen(),
                  "close" === e.type)
                )
                  return (
                    this.onClose({
                      description: "transport closed by the server",
                    }),
                    !1
                  );
                this.onPacket(e);
              }),
                "closed" !== this.readyState &&
                  ((this.polling = !1),
                  this.emitReserved("pollComplete"),
                  "open" === this.readyState && this.poll());
            }
            doClose() {
              const e = () => {
                this.write([{ type: "close" }]);
              };
              "open" === this.readyState ? e() : this.once("open", e);
            }
            write(e) {
              (this.writable = !1),
                ((e, t) => {
                  const n = e.length,
                    s = new Array(n);
                  let i = 0;
                  e.forEach((e, r) => {
                    v(e, !1, (e) => {
                      (s[r] = e), ++i === n && t(s.join(P));
                    });
                  });
                })(e, (e) => {
                  this.doWrite(e, () => {
                    (this.writable = !0), this.emitReserved("drain");
                  });
                });
            }
            uri() {
              const e = this.opts.secure ? "https" : "http",
                t = this.query || {};
              return (
                !1 !== this.opts.timestampRequests &&
                  (t[this.opts.timestampParam] = H()),
                this.supportsBinary || t.sid || (t.b64 = 1),
                this.createUri(e, t)
              );
            }
            request(e = {}) {
              return (
                Object.assign(
                  e,
                  { xd: this.xd, cookieJar: this.cookieJar },
                  this.opts
                ),
                new te(this.uri(), e)
              );
            }
            doWrite(e, t) {
              const n = this.request({ method: "POST", data: e });
              n.on("success", t),
                n.on("error", (e, t) => {
                  this.onError("xhr post error", e, t);
                });
            }
            doPoll() {
              const e = this.request();
              e.on("data", this.onData.bind(this)),
                e.on("error", (e, t) => {
                  this.onError("xhr poll error", e, t);
                }),
                (this.pollXhr = e);
            }
          },
        },
        ae =
          /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        ce = [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ];
      function le(e) {
        const t = e,
          n = e.indexOf("["),
          s = e.indexOf("]");
        -1 != n &&
          -1 != s &&
          (e =
            e.substring(0, n) +
            e.substring(n, s).replace(/:/g, ";") +
            e.substring(s, e.length));
        let i = ae.exec(e || ""),
          r = {},
          o = 14;
        for (; o--; ) r[ce[o]] = i[o] || "";
        return (
          -1 != n &&
            -1 != s &&
            ((r.source = t),
            (r.host = r.host
              .substring(1, r.host.length - 1)
              .replace(/;/g, ":")),
            (r.authority = r.authority
              .replace("[", "")
              .replace("]", "")
              .replace(/;/g, ":")),
            (r.ipv6uri = !0)),
          (r.pathNames = (function (e, t) {
            const n = t.replace(/\/{2,9}/g, "/").split("/");
            return (
              ("/" != t.slice(0, 1) && 0 !== t.length) || n.splice(0, 1),
              "/" == t.slice(-1) && n.splice(n.length - 1, 1),
              n
            );
          })(0, r.path)),
          (r.queryKey = (function (e, t) {
            const n = {};
            return (
              t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, s) {
                t && (n[t] = s);
              }),
              n
            );
          })(0, r.query)),
          r
        );
      }
      class he extends L {
        constructor(e, t = {}) {
          super(),
            (this.binaryType = "arraybuffer"),
            (this.writeBuffer = []),
            e && "object" == typeof e && ((t = e), (e = null)),
            e
              ? ((e = le(e)),
                (t.hostname = e.host),
                (t.secure = "https" === e.protocol || "wss" === e.protocol),
                (t.port = e.port),
                e.query && (t.query = e.query))
              : t.host && (t.hostname = le(t.host).host),
            F(this, t),
            (this.secure =
              null != t.secure
                ? t.secure
                : "undefined" != typeof location &&
                  "https:" === location.protocol),
            t.hostname && !t.port && (t.port = this.secure ? "443" : "80"),
            (this.hostname =
              t.hostname ||
              ("undefined" != typeof location
                ? location.hostname
                : "localhost")),
            (this.port =
              t.port ||
              ("undefined" != typeof location && location.port
                ? location.port
                : this.secure
                ? "443"
                : "80")),
            (this.transports = t.transports || [
              "polling",
              "websocket",
              "webtransport",
            ]),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0),
            (this.opts = Object.assign(
              {
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: { threshold: 1024 },
                transportOptions: {},
                closeOnBeforeunload: !1,
              },
              t
            )),
            (this.opts.path =
              this.opts.path.replace(/\/$/, "") +
              (this.opts.addTrailingSlash ? "/" : "")),
            "string" == typeof this.opts.query &&
              (this.opts.query = (function (e) {
                let t = {},
                  n = e.split("&");
                for (let e = 0, s = n.length; e < s; e++) {
                  let s = n[e].split("=");
                  t[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
                }
                return t;
              })(this.opts.query)),
            (this.id = null),
            (this.upgrades = null),
            (this.pingInterval = null),
            (this.pingTimeout = null),
            (this.pingTimeoutTimer = null),
            "function" == typeof addEventListener &&
              (this.opts.closeOnBeforeunload &&
                ((this.beforeunloadEventListener = () => {
                  this.transport &&
                    (this.transport.removeAllListeners(),
                    this.transport.close());
                }),
                addEventListener(
                  "beforeunload",
                  this.beforeunloadEventListener,
                  !1
                )),
              "localhost" !== this.hostname &&
                ((this.offlineEventListener = () => {
                  this.onClose("transport close", {
                    description: "network connection lost",
                  });
                }),
                addEventListener("offline", this.offlineEventListener, !1))),
            this.open();
        }
        createTransport(e) {
          const t = Object.assign({}, this.opts.query);
          (t.EIO = 4), (t.transport = e), this.id && (t.sid = this.id);
          const n = Object.assign(
            {},
            this.opts,
            {
              query: t,
              socket: this,
              hostname: this.hostname,
              secure: this.secure,
              port: this.port,
            },
            this.opts.transportOptions[e]
          );
          return new oe[e](n);
        }
        open() {
          let e;
          if (
            this.opts.rememberUpgrade &&
            he.priorWebsocketSuccess &&
            -1 !== this.transports.indexOf("websocket")
          )
            e = "websocket";
          else {
            if (0 === this.transports.length)
              return void this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
              }, 0);
            e = this.transports[0];
          }
          this.readyState = "opening";
          try {
            e = this.createTransport(e);
          } catch (e) {
            return this.transports.shift(), void this.open();
          }
          e.open(), this.setTransport(e);
        }
        setTransport(e) {
          this.transport && this.transport.removeAllListeners(),
            (this.transport = e),
            e
              .on("drain", this.onDrain.bind(this))
              .on("packet", this.onPacket.bind(this))
              .on("error", this.onError.bind(this))
              .on("close", (e) => this.onClose("transport close", e));
        }
        probe(e) {
          let t = this.createTransport(e),
            n = !1;
          he.priorWebsocketSuccess = !1;
          const s = () => {
            n ||
              (t.send([{ type: "ping", data: "probe" }]),
              t.once("packet", (e) => {
                if (!n)
                  if ("pong" === e.type && "probe" === e.data) {
                    if (
                      ((this.upgrading = !0),
                      this.emitReserved("upgrading", t),
                      !t)
                    )
                      return;
                    (he.priorWebsocketSuccess = "websocket" === t.name),
                      this.transport.pause(() => {
                        n ||
                          ("closed" !== this.readyState &&
                            (l(),
                            this.setTransport(t),
                            t.send([{ type: "upgrade" }]),
                            this.emitReserved("upgrade", t),
                            (t = null),
                            (this.upgrading = !1),
                            this.flush()));
                      });
                  } else {
                    const e = new Error("probe error");
                    (e.transport = t.name),
                      this.emitReserved("upgradeError", e);
                  }
              }));
          };
          function i() {
            n || ((n = !0), l(), t.close(), (t = null));
          }
          const r = (e) => {
            const n = new Error("probe error: " + e);
            (n.transport = t.name), i(), this.emitReserved("upgradeError", n);
          };
          function o() {
            r("transport closed");
          }
          function a() {
            r("socket closed");
          }
          function c(e) {
            t && e.name !== t.name && i();
          }
          const l = () => {
            t.removeListener("open", s),
              t.removeListener("error", r),
              t.removeListener("close", o),
              this.off("close", a),
              this.off("upgrading", c);
          };
          t.once("open", s),
            t.once("error", r),
            t.once("close", o),
            this.once("close", a),
            this.once("upgrading", c),
            -1 !== this.upgrades.indexOf("webtransport") && "webtransport" !== e
              ? this.setTimeoutFn(() => {
                  n || t.open();
                }, 200)
              : t.open();
        }
        onOpen() {
          if (
            ((this.readyState = "open"),
            (he.priorWebsocketSuccess = "websocket" === this.transport.name),
            this.emitReserved("open"),
            this.flush(),
            "open" === this.readyState && this.opts.upgrade)
          ) {
            let e = 0;
            const t = this.upgrades.length;
            for (; e < t; e++) this.probe(this.upgrades[e]);
          }
        }
        onPacket(e) {
          if (
            "opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState
          )
            switch (
              (this.emitReserved("packet", e),
              this.emitReserved("heartbeat"),
              this.resetPingTimeout(),
              e.type)
            ) {
              case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
              case "ping":
                this.sendPacket("pong"),
                  this.emitReserved("ping"),
                  this.emitReserved("pong");
                break;
              case "error":
                const t = new Error("server error");
                (t.code = e.data), this.onError(t);
                break;
              case "message":
                this.emitReserved("data", e.data),
                  this.emitReserved("message", e.data);
            }
        }
        onHandshake(e) {
          this.emitReserved("handshake", e),
            (this.id = e.sid),
            (this.transport.query.sid = e.sid),
            (this.upgrades = this.filterUpgrades(e.upgrades)),
            (this.pingInterval = e.pingInterval),
            (this.pingTimeout = e.pingTimeout),
            (this.maxPayload = e.maxPayload),
            this.onOpen(),
            "closed" !== this.readyState && this.resetPingTimeout();
        }
        resetPingTimeout() {
          this.clearTimeoutFn(this.pingTimeoutTimer),
            (this.pingTimeoutTimer = this.setTimeoutFn(() => {
              this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout)),
            this.opts.autoUnref && this.pingTimeoutTimer.unref();
        }
        onDrain() {
          this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            0 === this.writeBuffer.length
              ? this.emitReserved("drain")
              : this.flush();
        }
        flush() {
          if (
            "closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length
          ) {
            const e = this.getWritablePackets();
            this.transport.send(e),
              (this.prevBufferLen = e.length),
              this.emitReserved("flush");
          }
        }
        getWritablePackets() {
          if (
            !(
              this.maxPayload &&
              "polling" === this.transport.name &&
              this.writeBuffer.length > 1
            )
          )
            return this.writeBuffer;
          let e = 1;
          for (let n = 0; n < this.writeBuffer.length; n++) {
            const s = this.writeBuffer[n].data;
            if (
              (s &&
                (e +=
                  "string" == typeof (t = s)
                    ? (function (e) {
                        let t = 0,
                          n = 0;
                        for (let s = 0, i = e.length; s < i; s++)
                          (t = e.charCodeAt(s)),
                            t < 128
                              ? (n += 1)
                              : t < 2048
                              ? (n += 2)
                              : t < 55296 || t >= 57344
                              ? (n += 3)
                              : (s++, (n += 4));
                        return n;
                      })(t)
                    : Math.ceil(1.33 * (t.byteLength || t.size))),
              n > 0 && e > this.maxPayload)
            )
              return this.writeBuffer.slice(0, n);
            e += 2;
          }
          var t;
          return this.writeBuffer;
        }
        write(e, t, n) {
          return this.sendPacket("message", e, t, n), this;
        }
        send(e, t, n) {
          return this.sendPacket("message", e, t, n), this;
        }
        sendPacket(e, t, n, s) {
          if (
            ("function" == typeof t && ((s = t), (t = void 0)),
            "function" == typeof n && ((s = n), (n = null)),
            "closing" === this.readyState || "closed" === this.readyState)
          )
            return;
          (n = n || {}).compress = !1 !== n.compress;
          const i = { type: e, data: t, options: n };
          this.emitReserved("packetCreate", i),
            this.writeBuffer.push(i),
            s && this.once("flush", s),
            this.flush();
        }
        close() {
          const e = () => {
              this.onClose("forced close"), this.transport.close();
            },
            t = () => {
              this.off("upgrade", t), this.off("upgradeError", t), e();
            },
            n = () => {
              this.once("upgrade", t), this.once("upgradeError", t);
            };
          return (
            ("opening" !== this.readyState && "open" !== this.readyState) ||
              ((this.readyState = "closing"),
              this.writeBuffer.length
                ? this.once("drain", () => {
                    this.upgrading ? n() : e();
                  })
                : this.upgrading
                ? n()
                : e()),
            this
          );
        }
        onError(e) {
          (he.priorWebsocketSuccess = !1),
            this.emitReserved("error", e),
            this.onClose("transport error", e);
        }
        onClose(e, t) {
          ("opening" !== this.readyState &&
            "open" !== this.readyState &&
            "closing" !== this.readyState) ||
            (this.clearTimeoutFn(this.pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            "function" == typeof removeEventListener &&
              (removeEventListener(
                "beforeunload",
                this.beforeunloadEventListener,
                !1
              ),
              removeEventListener("offline", this.offlineEventListener, !1)),
            (this.readyState = "closed"),
            (this.id = null),
            this.emitReserved("close", e, t),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0));
        }
        filterUpgrades(e) {
          const t = [];
          let n = 0;
          const s = e.length;
          for (; n < s; n++) ~this.transports.indexOf(e[n]) && t.push(e[n]);
          return t;
        }
      }
      he.protocol = 4;
      const ue = "function" == typeof ArrayBuffer,
        de = (e) =>
          "function" == typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e.buffer instanceof ArrayBuffer,
        pe = Object.prototype.toString,
        fe =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" === pe.call(Blob)),
        ge =
          "function" == typeof File ||
          ("undefined" != typeof File &&
            "[object FileConstructor]" === pe.call(File));
      function me(e) {
        return (
          (ue && (e instanceof ArrayBuffer || de(e))) ||
          (fe && e instanceof Blob) ||
          (ge && e instanceof File)
        );
      }
      function ye(e, t) {
        if (!e || "object" != typeof e) return !1;
        if (Array.isArray(e)) {
          for (let t = 0, n = e.length; t < n; t++) if (ye(e[t])) return !0;
          return !1;
        }
        if (me(e)) return !0;
        if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length)
          return ye(e.toJSON(), !0);
        for (const t in e)
          if (Object.prototype.hasOwnProperty.call(e, t) && ye(e[t])) return !0;
        return !1;
      }
      function be(e) {
        const t = [],
          n = e.data,
          s = e;
        return (
          (s.data = we(n, t)),
          (s.attachments = t.length),
          { packet: s, buffers: t }
        );
      }
      function we(e, t) {
        if (!e) return e;
        if (me(e)) {
          const n = { _placeholder: !0, num: t.length };
          return t.push(e), n;
        }
        if (Array.isArray(e)) {
          const n = new Array(e.length);
          for (let s = 0; s < e.length; s++) n[s] = we(e[s], t);
          return n;
        }
        if ("object" == typeof e && !(e instanceof Date)) {
          const n = {};
          for (const s in e)
            Object.prototype.hasOwnProperty.call(e, s) && (n[s] = we(e[s], t));
          return n;
        }
        return e;
      }
      function ve(e, t) {
        return (e.data = _e(e.data, t)), delete e.attachments, e;
      }
      function _e(e, t) {
        if (!e) return e;
        if (e && !0 === e._placeholder) {
          if ("number" == typeof e.num && e.num >= 0 && e.num < t.length)
            return t[e.num];
          throw new Error("illegal attachments");
        }
        if (Array.isArray(e))
          for (let n = 0; n < e.length; n++) e[n] = _e(e[n], t);
        else if ("object" == typeof e)
          for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (e[n] = _e(e[n], t));
        return e;
      }
      const Ae = [
        "connect",
        "connect_error",
        "disconnect",
        "disconnecting",
        "newListener",
        "removeListener",
      ];
      var ke;
      function Ie(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      !(function (e) {
        (e[(e.CONNECT = 0)] = "CONNECT"),
          (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
          (e[(e.EVENT = 2)] = "EVENT"),
          (e[(e.ACK = 3)] = "ACK"),
          (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
          (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
          (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
      })(ke || (ke = {}));
      class xe extends L {
        constructor(e) {
          super(), (this.reviver = e);
        }
        add(e) {
          let t;
          if ("string" == typeof e) {
            if (this.reconstructor)
              throw new Error(
                "got plaintext data when reconstructing a packet"
              );
            t = this.decodeString(e);
            const n = t.type === ke.BINARY_EVENT;
            n || t.type === ke.BINARY_ACK
              ? ((t.type = n ? ke.EVENT : ke.ACK),
                (this.reconstructor = new Te(t)),
                0 === t.attachments && super.emitReserved("decoded", t))
              : super.emitReserved("decoded", t);
          } else {
            if (!me(e) && !e.base64) throw new Error("Unknown type: " + e);
            if (!this.reconstructor)
              throw new Error(
                "got binary data when not reconstructing a packet"
              );
            (t = this.reconstructor.takeBinaryData(e)),
              t &&
                ((this.reconstructor = null), super.emitReserved("decoded", t));
          }
        }
        decodeString(e) {
          let t = 0;
          const n = { type: Number(e.charAt(0)) };
          if (void 0 === ke[n.type])
            throw new Error("unknown packet type " + n.type);
          if (n.type === ke.BINARY_EVENT || n.type === ke.BINARY_ACK) {
            const s = t + 1;
            for (; "-" !== e.charAt(++t) && t != e.length; );
            const i = e.substring(s, t);
            if (i != Number(i) || "-" !== e.charAt(t))
              throw new Error("Illegal attachments");
            n.attachments = Number(i);
          }
          if ("/" === e.charAt(t + 1)) {
            const s = t + 1;
            for (; ++t && "," !== e.charAt(t) && t !== e.length; );
            n.nsp = e.substring(s, t);
          } else n.nsp = "/";
          const s = e.charAt(t + 1);
          if ("" !== s && Number(s) == s) {
            const s = t + 1;
            for (; ++t; ) {
              const n = e.charAt(t);
              if (null == n || Number(n) != n) {
                --t;
                break;
              }
              if (t === e.length) break;
            }
            n.id = Number(e.substring(s, t + 1));
          }
          if (e.charAt(++t)) {
            const s = this.tryParse(e.substr(t));
            if (!xe.isPayloadValid(n.type, s))
              throw new Error("invalid payload");
            n.data = s;
          }
          return n;
        }
        tryParse(e) {
          try {
            return JSON.parse(e, this.reviver);
          } catch (e) {
            return !1;
          }
        }
        static isPayloadValid(e, t) {
          switch (e) {
            case ke.CONNECT:
              return Ie(t);
            case ke.DISCONNECT:
              return void 0 === t;
            case ke.CONNECT_ERROR:
              return "string" == typeof t || Ie(t);
            case ke.EVENT:
            case ke.BINARY_EVENT:
              return (
                Array.isArray(t) &&
                ("number" == typeof t[0] ||
                  ("string" == typeof t[0] && -1 === Ae.indexOf(t[0])))
              );
            case ke.ACK:
            case ke.BINARY_ACK:
              return Array.isArray(t);
          }
        }
        destroy() {
          this.reconstructor &&
            (this.reconstructor.finishedReconstruction(),
            (this.reconstructor = null));
        }
      }
      class Te {
        constructor(e) {
          (this.packet = e), (this.buffers = []), (this.reconPack = e);
        }
        takeBinaryData(e) {
          if (
            (this.buffers.push(e),
            this.buffers.length === this.reconPack.attachments)
          ) {
            const e = ve(this.reconPack, this.buffers);
            return this.finishedReconstruction(), e;
          }
          return null;
        }
        finishedReconstruction() {
          (this.reconPack = null), (this.buffers = []);
        }
      }
      var Ee = Object.freeze({
        __proto__: null,
        protocol: 5,
        get PacketType() {
          return ke;
        },
        Encoder: class {
          constructor(e) {
            this.replacer = e;
          }
          encode(e) {
            return (e.type !== ke.EVENT && e.type !== ke.ACK) || !ye(e)
              ? [this.encodeAsString(e)]
              : this.encodeAsBinary({
                  type: e.type === ke.EVENT ? ke.BINARY_EVENT : ke.BINARY_ACK,
                  nsp: e.nsp,
                  data: e.data,
                  id: e.id,
                });
          }
          encodeAsString(e) {
            let t = "" + e.type;
            return (
              (e.type !== ke.BINARY_EVENT && e.type !== ke.BINARY_ACK) ||
                (t += e.attachments + "-"),
              e.nsp && "/" !== e.nsp && (t += e.nsp + ","),
              null != e.id && (t += e.id),
              null != e.data && (t += JSON.stringify(e.data, this.replacer)),
              t
            );
          }
          encodeAsBinary(e) {
            const t = be(e),
              n = this.encodeAsString(t.packet),
              s = t.buffers;
            return s.unshift(n), s;
          }
        },
        Decoder: xe,
      });
      function Se(e, t, n) {
        return (
          e.on(t, n),
          function () {
            e.off(t, n);
          }
        );
      }
      const Pe = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1,
      });
      class Oe extends L {
        constructor(e, t, n) {
          super(),
            (this.connected = !1),
            (this.recovered = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this._queue = []),
            (this._queueSeq = 0),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = e),
            (this.nsp = t),
            n && n.auth && (this.auth = n.auth),
            (this._opts = Object.assign({}, n)),
            this.io._autoConnect && this.open();
        }
        get disconnected() {
          return !this.connected;
        }
        subEvents() {
          if (this.subs) return;
          const e = this.io;
          this.subs = [
            Se(e, "open", this.onopen.bind(this)),
            Se(e, "packet", this.onpacket.bind(this)),
            Se(e, "error", this.onerror.bind(this)),
            Se(e, "close", this.onclose.bind(this)),
          ];
        }
        get active() {
          return !!this.subs;
        }
        connect() {
          return (
            this.connected ||
              (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              "open" === this.io._readyState && this.onopen()),
            this
          );
        }
        open() {
          return this.connect();
        }
        send(...e) {
          return e.unshift("message"), this.emit.apply(this, e), this;
        }
        emit(e, ...t) {
          if (Pe.hasOwnProperty(e))
            throw new Error('"' + e.toString() + '" is a reserved event name');
          if (
            (t.unshift(e),
            this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
          )
            return this._addToQueue(t), this;
          const n = { type: ke.EVENT, data: t, options: {} };
          if (
            ((n.options.compress = !1 !== this.flags.compress),
            "function" == typeof t[t.length - 1])
          ) {
            const e = this.ids++,
              s = t.pop();
            this._registerAckCallback(e, s), (n.id = e);
          }
          const s =
            this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
          return (
            (this.flags.volatile && (!s || !this.connected)) ||
              (this.connected
                ? (this.notifyOutgoingListeners(n), this.packet(n))
                : this.sendBuffer.push(n)),
            (this.flags = {}),
            this
          );
        }
        _registerAckCallback(e, t) {
          var n;
          const s =
            null !== (n = this.flags.timeout) && void 0 !== n
              ? n
              : this._opts.ackTimeout;
          if (void 0 === s) return void (this.acks[e] = t);
          const i = this.io.setTimeoutFn(() => {
            delete this.acks[e];
            for (let t = 0; t < this.sendBuffer.length; t++)
              this.sendBuffer[t].id === e && this.sendBuffer.splice(t, 1);
            t.call(this, new Error("operation has timed out"));
          }, s);
          this.acks[e] = (...e) => {
            this.io.clearTimeoutFn(i), t.apply(this, [null, ...e]);
          };
        }
        emitWithAck(e, ...t) {
          const n =
            void 0 !== this.flags.timeout || void 0 !== this._opts.ackTimeout;
          return new Promise((s, i) => {
            t.push((e, t) => (n ? (e ? i(e) : s(t)) : s(e))),
              this.emit(e, ...t);
          });
        }
        _addToQueue(e) {
          let t;
          "function" == typeof e[e.length - 1] && (t = e.pop());
          const n = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({ fromQueue: !0 }, this.flags),
          };
          e.push((e, ...s) => {
            if (n === this._queue[0])
              return (
                null !== e
                  ? n.tryCount > this._opts.retries &&
                    (this._queue.shift(), t && t(e))
                  : (this._queue.shift(), t && t(null, ...s)),
                (n.pending = !1),
                this._drainQueue()
              );
          }),
            this._queue.push(n),
            this._drainQueue();
        }
        _drainQueue(e = !1) {
          if (!this.connected || 0 === this._queue.length) return;
          const t = this._queue[0];
          (t.pending && !e) ||
            ((t.pending = !0),
            t.tryCount++,
            (this.flags = t.flags),
            this.emit.apply(this, t.args));
        }
        packet(e) {
          (e.nsp = this.nsp), this.io._packet(e);
        }
        onopen() {
          "function" == typeof this.auth
            ? this.auth((e) => {
                this._sendConnectPacket(e);
              })
            : this._sendConnectPacket(this.auth);
        }
        _sendConnectPacket(e) {
          this.packet({
            type: ke.CONNECT,
            data: this._pid
              ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e)
              : e,
          });
        }
        onerror(e) {
          this.connected || this.emitReserved("connect_error", e);
        }
        onclose(e, t) {
          (this.connected = !1),
            delete this.id,
            this.emitReserved("disconnect", e, t);
        }
        onpacket(e) {
          if (e.nsp === this.nsp)
            switch (e.type) {
              case ke.CONNECT:
                e.data && e.data.sid
                  ? this.onconnect(e.data.sid, e.data.pid)
                  : this.emitReserved(
                      "connect_error",
                      new Error(
                        "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                      )
                    );
                break;
              case ke.EVENT:
              case ke.BINARY_EVENT:
                this.onevent(e);
                break;
              case ke.ACK:
              case ke.BINARY_ACK:
                this.onack(e);
                break;
              case ke.DISCONNECT:
                this.ondisconnect();
                break;
              case ke.CONNECT_ERROR:
                this.destroy();
                const t = new Error(e.data.message);
                (t.data = e.data.data), this.emitReserved("connect_error", t);
            }
        }
        onevent(e) {
          const t = e.data || [];
          null != e.id && t.push(this.ack(e.id)),
            this.connected
              ? this.emitEvent(t)
              : this.receiveBuffer.push(Object.freeze(t));
        }
        emitEvent(e) {
          if (this._anyListeners && this._anyListeners.length) {
            const t = this._anyListeners.slice();
            for (const n of t) n.apply(this, e);
          }
          super.emit.apply(this, e),
            this._pid &&
              e.length &&
              "string" == typeof e[e.length - 1] &&
              (this._lastOffset = e[e.length - 1]);
        }
        ack(e) {
          const t = this;
          let n = !1;
          return function (...s) {
            n || ((n = !0), t.packet({ type: ke.ACK, id: e, data: s }));
          };
        }
        onack(e) {
          const t = this.acks[e.id];
          "function" == typeof t &&
            (t.apply(this, e.data), delete this.acks[e.id]);
        }
        onconnect(e, t) {
          (this.id = e),
            (this.recovered = t && this._pid === t),
            (this._pid = t),
            (this.connected = !0),
            this.emitBuffered(),
            this.emitReserved("connect"),
            this._drainQueue(!0);
        }
        emitBuffered() {
          this.receiveBuffer.forEach((e) => this.emitEvent(e)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((e) => {
              this.notifyOutgoingListeners(e), this.packet(e);
            }),
            (this.sendBuffer = []);
        }
        ondisconnect() {
          this.destroy(), this.onclose("io server disconnect");
        }
        destroy() {
          this.subs && (this.subs.forEach((e) => e()), (this.subs = void 0)),
            this.io._destroy(this);
        }
        disconnect() {
          return (
            this.connected && this.packet({ type: ke.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
          );
        }
        close() {
          return this.disconnect();
        }
        compress(e) {
          return (this.flags.compress = e), this;
        }
        get volatile() {
          return (this.flags.volatile = !0), this;
        }
        timeout(e) {
          return (this.flags.timeout = e), this;
        }
        onAny(e) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.push(e),
            this
          );
        }
        prependAny(e) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.unshift(e),
            this
          );
        }
        offAny(e) {
          if (!this._anyListeners) return this;
          if (e) {
            const t = this._anyListeners;
            for (let n = 0; n < t.length; n++)
              if (e === t[n]) return t.splice(n, 1), this;
          } else this._anyListeners = [];
          return this;
        }
        listenersAny() {
          return this._anyListeners || [];
        }
        onAnyOutgoing(e) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(e),
            this
          );
        }
        prependAnyOutgoing(e) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(e),
            this
          );
        }
        offAnyOutgoing(e) {
          if (!this._anyOutgoingListeners) return this;
          if (e) {
            const t = this._anyOutgoingListeners;
            for (let n = 0; n < t.length; n++)
              if (e === t[n]) return t.splice(n, 1), this;
          } else this._anyOutgoingListeners = [];
          return this;
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || [];
        }
        notifyOutgoingListeners(e) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const t = this._anyOutgoingListeners.slice();
            for (const n of t) n.apply(this, e.data);
          }
        }
      }
      function De(e) {
        (e = e || {}),
          (this.ms = e.min || 100),
          (this.max = e.max || 1e4),
          (this.factor = e.factor || 2),
          (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
          (this.attempts = 0);
      }
      (De.prototype.duration = function () {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
          e = 1 & Math.floor(10 * t) ? e + n : e - n;
        }
        return 0 | Math.min(e, this.max);
      }),
        (De.prototype.reset = function () {
          this.attempts = 0;
        }),
        (De.prototype.setMin = function (e) {
          this.ms = e;
        }),
        (De.prototype.setMax = function (e) {
          this.max = e;
        }),
        (De.prototype.setJitter = function (e) {
          this.jitter = e;
        });
      class Ce extends L {
        constructor(e, t) {
          var n;
          super(),
            (this.nsps = {}),
            (this.subs = []),
            e && "object" == typeof e && ((t = e), (e = void 0)),
            ((t = t || {}).path = t.path || "/socket.io"),
            (this.opts = t),
            F(this, t),
            this.reconnection(!1 !== t.reconnection),
            this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(t.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
              null !== (n = t.randomizationFactor) && void 0 !== n ? n : 0.5
            ),
            (this.backoff = new De({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor(),
            })),
            this.timeout(null == t.timeout ? 2e4 : t.timeout),
            (this._readyState = "closed"),
            (this.uri = e);
          const s = t.parser || Ee;
          (this.encoder = new s.Encoder()),
            (this.decoder = new s.Decoder()),
            (this._autoConnect = !1 !== t.autoConnect),
            this._autoConnect && this.open();
        }
        reconnection(e) {
          return arguments.length
            ? ((this._reconnection = !!e), this)
            : this._reconnection;
        }
        reconnectionAttempts(e) {
          return void 0 === e
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = e), this);
        }
        reconnectionDelay(e) {
          var t;
          return void 0 === e
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = e),
              null === (t = this.backoff) || void 0 === t || t.setMin(e),
              this);
        }
        randomizationFactor(e) {
          var t;
          return void 0 === e
            ? this._randomizationFactor
            : ((this._randomizationFactor = e),
              null === (t = this.backoff) || void 0 === t || t.setJitter(e),
              this);
        }
        reconnectionDelayMax(e) {
          var t;
          return void 0 === e
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = e),
              null === (t = this.backoff) || void 0 === t || t.setMax(e),
              this);
        }
        timeout(e) {
          return arguments.length ? ((this._timeout = e), this) : this._timeout;
        }
        maybeReconnectOnOpen() {
          !this._reconnecting &&
            this._reconnection &&
            0 === this.backoff.attempts &&
            this.reconnect();
        }
        open(e) {
          if (~this._readyState.indexOf("open")) return this;
          this.engine = new he(this.uri, this.opts);
          const t = this.engine,
            n = this;
          (this._readyState = "opening"), (this.skipReconnect = !1);
          const s = Se(t, "open", function () {
              n.onopen(), e && e();
            }),
            i = (t) => {
              this.cleanup(),
                (this._readyState = "closed"),
                this.emitReserved("error", t),
                e ? e(t) : this.maybeReconnectOnOpen();
            },
            r = Se(t, "error", i);
          if (!1 !== this._timeout) {
            const e = this._timeout,
              n = this.setTimeoutFn(() => {
                s(), i(new Error("timeout")), t.close();
              }, e);
            this.opts.autoUnref && n.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(n);
              });
          }
          return this.subs.push(s), this.subs.push(r), this;
        }
        connect(e) {
          return this.open(e);
        }
        onopen() {
          this.cleanup(),
            (this._readyState = "open"),
            this.emitReserved("open");
          const e = this.engine;
          this.subs.push(
            Se(e, "ping", this.onping.bind(this)),
            Se(e, "data", this.ondata.bind(this)),
            Se(e, "error", this.onerror.bind(this)),
            Se(e, "close", this.onclose.bind(this)),
            Se(this.decoder, "decoded", this.ondecoded.bind(this))
          );
        }
        onping() {
          this.emitReserved("ping");
        }
        ondata(e) {
          try {
            this.decoder.add(e);
          } catch (e) {
            this.onclose("parse error", e);
          }
        }
        ondecoded(e) {
          se(() => {
            this.emitReserved("packet", e);
          }, this.setTimeoutFn);
        }
        onerror(e) {
          this.emitReserved("error", e);
        }
        socket(e, t) {
          let n = this.nsps[e];
          return (
            n
              ? this._autoConnect && !n.active && n.connect()
              : ((n = new Oe(this, e, t)), (this.nsps[e] = n)),
            n
          );
        }
        _destroy(e) {
          const t = Object.keys(this.nsps);
          for (const e of t) if (this.nsps[e].active) return;
          this._close();
        }
        _packet(e) {
          const t = this.encoder.encode(e);
          for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options);
        }
        cleanup() {
          this.subs.forEach((e) => e()),
            (this.subs.length = 0),
            this.decoder.destroy();
        }
        _close() {
          (this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose("forced close"),
            this.engine && this.engine.close();
        }
        disconnect() {
          return this._close();
        }
        onclose(e, t) {
          this.cleanup(),
            this.backoff.reset(),
            (this._readyState = "closed"),
            this.emitReserved("close", e, t),
            this._reconnection && !this.skipReconnect && this.reconnect();
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) return this;
          const e = this;
          if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
              this.emitReserved("reconnect_failed"),
              (this._reconnecting = !1);
          else {
            const t = this.backoff.duration();
            this._reconnecting = !0;
            const n = this.setTimeoutFn(() => {
              e.skipReconnect ||
                (this.emitReserved("reconnect_attempt", e.backoff.attempts),
                e.skipReconnect ||
                  e.open((t) => {
                    t
                      ? ((e._reconnecting = !1),
                        e.reconnect(),
                        this.emitReserved("reconnect_error", t))
                      : e.onreconnect();
                  }));
            }, t);
            this.opts.autoUnref && n.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(n);
              });
          }
        }
        onreconnect() {
          const e = this.backoff.attempts;
          (this._reconnecting = !1),
            this.backoff.reset(),
            this.emitReserved("reconnect", e);
        }
      }
      const Me = {};
      function Le(e, t) {
        "object" == typeof e && ((t = e), (e = void 0));
        const n = (function (e, t = "", n) {
            let s = e;
            (n = n || ("undefined" != typeof location && location)),
              null == e && (e = n.protocol + "//" + n.host),
              "string" == typeof e &&
                ("/" === e.charAt(0) &&
                  (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e),
                /^(https?|wss?):\/\//.test(e) ||
                  (e = void 0 !== n ? n.protocol + "//" + e : "https://" + e),
                (s = le(e))),
              s.port ||
                (/^(http|ws)$/.test(s.protocol)
                  ? (s.port = "80")
                  : /^(http|ws)s$/.test(s.protocol) && (s.port = "443")),
              (s.path = s.path || "/");
            const i = -1 !== s.host.indexOf(":") ? "[" + s.host + "]" : s.host;
            return (
              (s.id = s.protocol + "://" + i + ":" + s.port + t),
              (s.href =
                s.protocol +
                "://" +
                i +
                (n && n.port === s.port ? "" : ":" + s.port)),
              s
            );
          })(e, (t = t || {}).path || "/socket.io"),
          s = n.source,
          i = n.id,
          r = n.path,
          o = Me[i] && r in Me[i].nsps;
        let a;
        return (
          t.forceNew || t["force new connection"] || !1 === t.multiplex || o
            ? (a = new Ce(s, t))
            : (Me[i] || (Me[i] = new Ce(s, t)), (a = Me[i])),
          n.query && !t.query && (t.query = n.queryKey),
          a.socket(n.path, t)
        );
      }
      Object.assign(Le, { Manager: Ce, Socket: Oe, io: Le, connect: Le });
      const Re = function (...e) {
          let t;
          return (
            (t =
              "object" == typeof e[0] && null !== e[0]
                ? e[0]
                : { success: e[0], error: e[1] }),
            new Promise(async (e, n) => {
              if (!puter.authToken && "web" === puter.env)
                try {
                  await puter.ui.authenticateWithPuter();
                } catch (e) {
                  n("Authentication failed.");
                }
              const i = s("/df", this.APIOrigin, this.authToken);
              r(i, t.success, t.error, e, n), i.send();
            })
          );
        },
        Ue = 47;
      function Be(e) {
        return e === Ue;
      }
      function Ne(e, t, n, s) {
        let i = "",
          r = 0,
          o = -1,
          a = 0,
          c = 0;
        for (let l = 0; l <= e.length; ++l) {
          if (l < e.length) c = e.charCodeAt(l);
          else {
            if (s(c)) break;
            c = Ue;
          }
          if (s(c)) {
            if (o === l - 1 || 1 === a);
            else if (2 === a) {
              if (
                i.length < 2 ||
                2 !== r ||
                46 !== i.charCodeAt(i.length - 1) ||
                46 !== i.charCodeAt(i.length - 2)
              ) {
                if (i.length > 2) {
                  const e = i.lastIndexOf(n);
                  -1 === e
                    ? ((i = ""), (r = 0))
                    : ((i = i.slice(0, e)),
                      (r = i.length - 1 - i.lastIndexOf(i, n))),
                    (o = l),
                    (a = 0);
                  continue;
                }
                if (0 !== i.length) {
                  (i = ""), (r = 0), (o = l), (a = 0);
                  continue;
                }
              }
              t && ((i += i.length > 0 ? `${n}..` : ".."), (r = 2));
            } else
              i.length > 0
                ? (i += `${n}${e.slice(o + 1, l)}`)
                : (i = e.slice(o + 1, l)),
                (r = l - o - 1);
            (o = l), (a = 0);
          } else 46 === c && -1 !== a ? ++a : (a = -1);
        }
        return i;
      }
      const Fe = {
          resolve(...e) {
            let t = "",
              n = !1;
            for (let s = e.length - 1; s >= -1 && !n; s--) {
              const i = s >= 0 ? e[s] : "/";
              0 !== i.length &&
                ((t = `${i}/${t}`), (n = i.charCodeAt(0) === Ue));
            }
            return (
              (t = Ne(t, !n, "/", Be)), n ? `/${t}` : t.length > 0 ? t : "."
            );
          },
          normalize(e) {
            if (0 === e.length) return ".";
            const t = e.charCodeAt(0) === Ue,
              n = e.charCodeAt(e.length - 1) === Ue;
            return 0 === (e = Ne(e, !t, "/", Be)).length
              ? t
                ? "/"
                : n
                ? "./"
                : "."
              : (n && (e += "/"), t ? `/${e}` : e);
          },
          isAbsolute: (e) => e.length > 0 && e.charCodeAt(0) === Ue,
          join(...e) {
            if (0 === e.length) return ".";
            let t;
            for (let n = 0; n < e.length; ++n) {
              const s = e[n];
              s.length > 0 && (void 0 === t ? (t = s) : (t += `/${s}`));
            }
            return void 0 === t ? "." : Fe.normalize(t);
          },
          relative(e, t) {
            if (e === t) return "";
            if ((e = Fe.resolve(e)) === (t = Fe.resolve(t))) return "";
            const n = e.length,
              s = n - 1,
              i = t.length - 1,
              r = s < i ? s : i;
            let o = -1,
              a = 0;
            for (; a < r; a++) {
              const n = e.charCodeAt(1 + a);
              if (n !== t.charCodeAt(1 + a)) break;
              n === Ue && (o = a);
            }
            if (a === r)
              if (i > r) {
                if (t.charCodeAt(1 + a) === Ue) return t.slice(1 + a + 1);
                if (0 === a) return t.slice(1 + a);
              } else
                s > r &&
                  (e.charCodeAt(1 + a) === Ue ? (o = a) : 0 === a && (o = 0));
            let c = "";
            for (a = 1 + o + 1; a <= n; ++a)
              (a !== n && e.charCodeAt(a) !== Ue) ||
                (c += 0 === c.length ? ".." : "/..");
            return `${c}${t.slice(1 + o)}`;
          },
          toNamespacedPath: (e) => e,
          dirname(e) {
            if (0 === e.length) return ".";
            const t = e.charCodeAt(0) === Ue;
            let n = -1,
              s = !0;
            for (let t = e.length - 1; t >= 1; --t)
              if (e.charCodeAt(t) === Ue) {
                if (!s) {
                  n = t;
                  break;
                }
              } else s = !1;
            return -1 === n
              ? t
                ? "/"
                : "."
              : t && 1 === n
              ? "//"
              : e.slice(0, n);
          },
          basename(e, t) {
            let n = 0,
              s = -1,
              i = !0;
            if (void 0 !== t && t.length > 0 && t.length <= e.length) {
              if (t === e) return "";
              let r = t.length - 1,
                o = -1;
              for (let a = e.length - 1; a >= 0; --a) {
                const c = e.charCodeAt(a);
                if (c === Ue) {
                  if (!i) {
                    n = a + 1;
                    break;
                  }
                } else
                  -1 === o && ((i = !1), (o = a + 1)),
                    r >= 0 &&
                      (c === t.charCodeAt(r)
                        ? -1 == --r && (s = a)
                        : ((r = -1), (s = o)));
              }
              return (
                n === s ? (s = o) : -1 === s && (s = e.length), e.slice(n, s)
              );
            }
            for (let t = e.length - 1; t >= 0; --t)
              if (e.charCodeAt(t) === Ue) {
                if (!i) {
                  n = t + 1;
                  break;
                }
              } else -1 === s && ((i = !1), (s = t + 1));
            return -1 === s ? "" : e.slice(n, s);
          },
          extname(e) {
            let t = -1,
              n = 0,
              s = -1,
              i = !0,
              r = 0;
            for (let o = e.length - 1; o >= 0; --o) {
              const a = e.charCodeAt(o);
              if (a !== Ue)
                -1 === s && ((i = !1), (s = o + 1)),
                  46 === a
                    ? -1 === t
                      ? (t = o)
                      : 1 !== r && (r = 1)
                    : -1 !== t && (r = -1);
              else if (!i) {
                n = o + 1;
                break;
              }
            }
            return -1 === t ||
              -1 === s ||
              0 === r ||
              (1 === r && t === s - 1 && t === n + 1)
              ? ""
              : e.slice(t, s);
          },
          format: function (e, t) {
            validateObject(t, "pathObject");
            const n = t.dir || t.root,
              s = t.base || `${t.name || ""}${t.ext || ""}`;
            return n ? (n === t.root ? `${n}${s}` : `${n}${e}${s}`) : s;
          }.bind(null, "/"),
          parse(e) {
            const t = { root: "", dir: "", base: "", ext: "", name: "" };
            if (0 === e.length) return t;
            const n = e.charCodeAt(0) === Ue;
            let s;
            n ? ((t.root = "/"), (s = 1)) : (s = 0);
            let i = -1,
              r = 0,
              o = -1,
              a = !0,
              c = e.length - 1,
              l = 0;
            for (; c >= s; --c) {
              const t = e.charCodeAt(c);
              if (t !== Ue)
                -1 === o && ((a = !1), (o = c + 1)),
                  46 === t
                    ? -1 === i
                      ? (i = c)
                      : 1 !== l && (l = 1)
                    : -1 !== i && (l = -1);
              else if (!a) {
                r = c + 1;
                break;
              }
            }
            if (-1 !== o) {
              const s = 0 === r && n ? 1 : r;
              -1 === i || 0 === l || (1 === l && i === o - 1 && i === r + 1)
                ? (t.base = t.name = e.slice(s, o))
                : ((t.name = e.slice(s, i)),
                  (t.base = e.slice(s, o)),
                  (t.ext = e.slice(i, o)));
            }
            return r > 0 ? (t.dir = e.slice(0, r - 1)) : n && (t.dir = "/"), t;
          },
          sep: "/",
          delimiter: ":",
          win32: null,
          posix: null,
        },
        je = Fe,
        qe = (e) => (
          "gui" === puter.env ||
            (e || (e = "."),
            (e && (e.startsWith("/") || e.startsWith("~") || !puter.appID)) ||
              (e = je.join("~/AppData", puter.appID, e))),
          e
        ),
        ze = function (...e) {
          let t = {};
          return (
            ("string" == typeof e[0] &&
              "object" == typeof e[1] &&
              !(e[1] instanceof Function)) ||
            ("object" == typeof e[0] && null !== e[0])
              ? "string" == typeof e[0]
                ? ((t.path = e[0]),
                  Object.assign(t, e[1]),
                  (t.success = e[2]),
                  (t.error = e[3]))
                : (t = e[0])
              : "string" == typeof e[0] &&
                ((t.path = e[0]), (t.success = e[1]), (t.error = e[2])),
            new Promise(async (e, n) => {
              if (!puter.authToken && "web" === puter.env)
                try {
                  await puter.ui.authenticateWithPuter();
                } catch (e) {
                  n("Authentication failed.");
                }
              const i = s("/mkdir", this.APIOrigin, this.authToken);
              r(i, t.success, t.error, e, n),
                (t.path = qe(t.path)),
                i.send(
                  JSON.stringify({
                    parent: je.dirname(t.path),
                    path: je.basename(t.path),
                    overwrite: t.overwrite ?? !1,
                    dedupe_name: (t.rename || t.dedupeName) ?? !1,
                    shortcut_to: t.shortcutTo,
                    original_client_socket_id: this.socket.id,
                    create_missing_parents:
                      (t.recursive || t.createMissingParents) ?? !1,
                  })
                );
            })
          );
        },
        We = function (...e) {
          let t;
          return (
            (t =
              "object" == typeof e[0] && null !== e[0]
                ? e[0]
                : {
                    source: e[0],
                    destination: e[1],
                    overwrite: e[2]?.overwrite,
                    new_name: e[2]?.newName || e[2]?.new_name,
                    create_missing_parents:
                      e[2]?.createMissingParents ||
                      e[2]?.create_missing_parents,
                    new_metadata: e[2]?.newMetadata || e[2]?.new_metadata,
                    original_client_socket_id:
                      e[2]?.excludeSocketID || e[2]?.original_client_socket_id,
                    success: e[3],
                    error: e[4],
                  }),
            new Promise(async (e, n) => {
              if (!puter.authToken && "web" === puter.env)
                try {
                  await puter.ui.authenticateWithPuter();
                } catch (e) {
                  n("Authentication failed.");
                }
              (t.source = qe(t.source)), (t.destination = qe(t.destination));
              const i = s("/copy", this.APIOrigin, this.authToken);
              r(i, t.success, t.error, e, n),
                i.send(
                  JSON.stringify({
                    original_client_socket_id: this.socket.id,
                    socket_id: this.socket.id,
                    source: t.source,
                    destination: t.destination,
                    overwrite: t.overwrite,
                    new_name: t.new_name || t.newName,
                    dedupe_name: t.dedupe_name || t.dedupeName,
                  })
                );
            })
          );
        },
        Xe = function (...e) {
          let t;
          return (
            (t =
              "object" == typeof e[0] && null !== e[0]
                ? e[0]
                : { path: e[0], new_name: e[1], success: e[2], error: e[3] }),
            new Promise(async (e, n) => {
              if (!puter.authToken && "web" === puter.env)
                try {
                  await puter.ui.authenticateWithPuter();
                } catch (e) {
                  n("Authentication failed.");
                }
              const i = s("/rename", this.APIOrigin, this.authToken);
              r(i, t.success, t.error, e, n);
              let o = {
                original_client_socket_id:
                  t.excludeSocketID || t.original_client_socket_id,
                new_name: t.new_name || t.newName,
              };
              void 0 !== t.uid
                ? (o.uid = t.uid)
                : void 0 !== t.path && (o.path = qe(t.path)),
                i.send(JSON.stringify(o));
            })
          );
        },
        Ve = async function (n, s, i = {}) {
          return new Promise(async (r, o) => {
            if (!puter.authToken && "web" === puter.env)
              try {
                await puter.ui.authenticateWithPuter();
              } catch (e) {
                o(e);
              }
            const a = (e) => (
              i.error && "function" == typeof i.error && i.error(e), o(e)
            );
            let c = new XMLHttpRequest();
            if ("/" === s) return a("Can not upload to root directory.");
            s = qe(s);
            const l = t();
            i.init && "function" == typeof i.init && i.init(l, c);
            let h,
              u = 0,
              d = 0,
              p = 0,
              f = !1;
            if (Array.isArray(n) && n.length > 0)
              for (let e = 0; e < n.length; e++)
                (n[e] instanceof DataTransferItem ||
                  n[e] instanceof DataTransferItemList) &&
                  (f = !0);
            if (
              n instanceof DataTransferItemList ||
              n instanceof DataTransferItem ||
              n[0] instanceof DataTransferItem ||
              i.parsedDataTransferItems
            )
              (h = i.parsedDataTransferItems
                ? n
                : await puter.ui.getEntriesFromDataTransferItems(n)),
                h.sort((e, t) =>
                  e.isDirectory && !t.isDirectory
                    ? -1
                    : !e.isDirectory && t.isDirectory
                    ? 1
                    : e.isDirectory && t.isDirectory
                    ? 0
                    : e.size - t.size
                );
            else if (
              n instanceof File ||
              n[0] instanceof File ||
              n instanceof FileList ||
              n[0] instanceof FileList
            ) {
              (h = Array.isArray(n)
                ? n
                : n instanceof FileList
                ? Array.from(n)
                : [n]),
                h.sort((e, t) => e.size - t.size);
              for (let e = 0; e < h.length; e++)
                (h[e].filepath = h[e].name), (h[e].fullPath = h[e].name);
            } else if (n instanceof Blob) {
              h = [new File([n], i.name, { type: "application/octet-stream" })];
              for (let e = 0; e < h.length; e++)
                (h[e].filepath = h[e].name), (h[e].fullPath = h[e].name);
            } else {
              if ("string" != typeof n)
                return a({
                  code: "field_invalid",
                  message: "upload() items parameter is an invalid type",
                });
              h = [new File([n], "default.txt", { type: "text/plain" })];
              for (let e = 0; e < h.length; e++)
                (h[e].filepath = h[e].name), (h[e].fullPath = h[e].name);
            }
            let g,
              m = [],
              y = {},
              b = [];
            for (let e = 0; e < h.length; e++)
              if (h[e]) {
                if (h[e].isDirectory)
                  m.push({
                    path: je.join(
                      s,
                      h[e].finalPath ? h[e].finalPath : h[e].fullPath
                    ),
                  });
                else {
                  let t = h[e].finalPath ? h[e].finalPath : h[e].fullPath,
                    [n, r] = [
                      t?.slice(0, t?.lastIndexOf("/")),
                      t?.slice(t?.lastIndexOf("/") + 1),
                    ];
                  if (
                    ("" != r && b.push(h[e]),
                    i.createFileParent && t.includes("/"))
                  ) {
                    let e;
                    n.split("/").forEach((t) => {
                      e = e ? e + "/" + t : t;
                      let n = je.join(s, e);
                      y[n] || ((y[n] = !0), m.push({ path: n }));
                    });
                  }
                }
                void 0 !== h[e].size && (p += h[e].size);
              }
            if (0 === m.length && 0 === b.length)
              return a({
                code: "EMPTY_UPLOAD",
                message: "No files or directories to upload.",
              });
            if ("web" !== puter.env)
              try {
                if (((g = await this.space()), g.capacity - g.used < p))
                  return a({
                    code: "NOT_ENOUGH_SPACE",
                    message: "Not enough storage space available.",
                  });
              } catch (e) {}
            p *= 2;
            const w = new FormData();
            m.sort((e, t) => t.path.length - e.path.length);
            let v = [];
            for (let e = 0; e < m.length; e++) {
              for (let t = 0; t < b.length; t++)
                !b[t].puter_path_param &&
                  je.join(s, b[t].filepath).startsWith(m[e].path + "/") &&
                  (b[t].puter_path_param =
                    `$dir_${e}/` + je.basename(b[t].filepath));
              for (let t = 0; t < m.length; t++)
                !m[t].puter_path_param &&
                  m[t].path.startsWith(m[e].path + "/") &&
                  (m[t].puter_path_param =
                    `$dir_${e}/` + je.basename(m[t].path));
            }
            for (let e = 0; e < m.length; e++) {
              let t = je.dirname(m[e].puter_path_param || m[e].path),
                n = m[e].puter_path_param || m[e].path;
              "/" !== t && (n = n.replace(t, "")),
                v.push({
                  op: "mkdir",
                  parent: t,
                  path: n,
                  overwrite: i.overwrite ?? !1,
                  dedupe_name: i.dedupeName ?? !0,
                  create_missing_ancestors: i.createMissingAncestors ?? !0,
                  as: `dir_${e}`,
                });
            }
            v.reverse(),
              w.append("operation_id", l),
              w.append("socket_id", this.socket.id),
              w.append("original_client_socket_id", this.socket.id);
            for (let e = 0; e < v.length; e++)
              w.append("operation", JSON.stringify(v[e]));
            if (!i.shortcutTo)
              for (let e = 0; e < b.length; e++)
                w.append(
                  "fileinfo",
                  JSON.stringify({
                    name: b[e].name,
                    type: b[e].type,
                    size: b[e].size,
                  })
                );
            for (let e = 0; e < b.length; e++)
              w.append(
                "operation",
                JSON.stringify({
                  op: i.shortcutTo ? "shortcut" : "write",
                  dedupe_name: i.dedupeName ?? !0,
                  overwrite: i.overwrite ?? !1,
                  create_missing_ancestors:
                    i.createMissingAncestors || i.createMissingParents,
                  operation_id: l,
                  path:
                    (b[e].puter_path_param &&
                      je.dirname(b[e].puter_path_param ?? "")) ||
                    (b[e].filepath && je.join(s, je.dirname(b[e].filepath))) ||
                    "",
                  name: je.basename(b[e].filepath),
                  item_upload_id: e,
                  shortcut_to: i.shortcutTo,
                  shortcut_to_uid: i.shortcutTo,
                  app_uid: i.appUID,
                })
              );
            if (!i.shortcutTo)
              for (let e = 0; e < b.length; e++) w.append("file", b[e] ?? "");
            const _ = (e) => {
              e.operation_id === l && (d += e.loaded_diff);
            };
            this.socket.on("upload.progress", _);
            let A = null;
            c.open("post", this.APIOrigin + "/batch", !0),
              c.setRequestHeader("Authorization", "Bearer " + this.authToken),
              c.upload.addEventListener("progress", function (e) {
                let t;
                null === A ? ((t = e.loaded), (A = 0)) : (t = e.loaded - A),
                  (A += t),
                  (u += t);
                let n = (((d + u) / p) * 100).toFixed(2);
                (n = n > 100 ? 100 : n),
                  i.progress &&
                    "function" == typeof i.progress &&
                    i.progress(l, n);
              });
            let k = setInterval(function () {
              let e = (((d + u) / p) * 100).toFixed(2);
              (e = e > 100 ? 100 : e),
                i.progress &&
                  "function" == typeof i.progress &&
                  i.progress(l, e);
            }, 100);
            (c.onabort = () => {
              clearInterval(k),
                this.socket.off("upload.progress", _),
                i.abort && "function" == typeof i.abort && i.abort(l);
            }),
              (c.onreadystatechange = async (t) => {
                if (4 === c.readyState) {
                  const t = await e(c);
                  if (
                    (c.status >= 400 && c.status < 600) ||
                    (i.strict && 218 === c.status)
                  ) {
                    if (
                      (clearInterval(k),
                      this.socket.off("upload.progress", _),
                      i.strict && 218 === c.status)
                    ) {
                      let e;
                      for (let n = 0; n < t.results?.length; n++)
                        if (200 !== t.results[n].status) {
                          e = t.results[n];
                          break;
                        }
                      return a(e);
                    }
                    return a(t);
                  }
                  {
                    (t && t.results && 0 !== t.results.length) ||
                      (puter.debugMode && console.log("no results"));
                    let e = t.results;
                    return (
                      (e = 1 === e.length ? e[0] : e),
                      i.success &&
                        "function" == typeof i.success &&
                        i.success(e),
                      clearInterval(k),
                      this.socket.off("upload.progress", _),
                      r(e)
                    );
                  }
                }
              }),
              i.start && "function" == typeof i.start && i.start(),
              c.send(w);
          });
        },
        Ke = function (...e) {
          let t;
          return (
            (t =
              "object" == typeof e[0] && null !== e[0]
                ? e[0]
                : {
                    path:
                      "string" == typeof e[0]
                        ? e[0]
                        : "object" == typeof e[0] && null !== e[0]
                        ? e[0].path
                        : e[0],
                    success: e[1],
                    error: e[2],
                  }),
            new Promise(async (e, n) => {
              if (!puter.authToken && "web" === puter.env)
                try {
                  await puter.ui.authenticateWithPuter();
                } catch (e) {
                  n("Authentication failed.");
                }
              t.path = qe(t.path);
              const i = s(
                "/read?file=" + encodeURIComponent(t.path),
                this.APIOrigin,
                this.authToken,
                "get",
                "application/json;charset=UTF-8",
                "blob"
              );
              r(i, t.success, t.error, e, n), i.send();
            })
          );
        },
        Ge = async function (...e) {
          let t;
          return (
            (t =
              "object" == typeof e[0] && null !== e[0]
                ? e[0]
                : {
                    path: e[0],
                    options: "object" == typeof e[1] ? e[1] : {},
                    success: "object" == typeof e[1] ? e[2] : e[1],
                    error: "object" == typeof e[1] ? e[3] : e[2],
                  }),
            new Promise(async (e, n) => {
              if (!puter.authToken && "web" === puter.env)
                try {
                  await puter.ui.authenticateWithPuter();
                } catch (e) {
                  n("Authentication failed.");
                }
              const i = s("/stat", this.APIOrigin, this.authToken);
              r(i, t.success, t.error, e, n);
              let o = {};
              void 0 !== t.uid
                ? (o.uid = t.uid)
                : void 0 !== t.path && (o.path = qe(t.path)),
                (o.return_subdomains = t.returnSubdomains),
                (o.return_permissions = t.returnPermissions),
                (o.return_versions = t.returnVersions),
                (o.return_size = t.returnSize),
                i.send(JSON.stringify(o));
            })
          );
        },
        Ye = function (...e) {
          let t;
          return (
            (t =
              "object" == typeof e[0] && null !== e[0]
                ? e[0]
                : {
                    source: e[0],
                    destination: e[1],
                    overwrite: e[2]?.overwrite,
                    new_name: e[2]?.newName || e[2]?.new_name,
                    create_missing_parents:
                      e[2]?.createMissingParents ||
                      e[2]?.create_missing_parents,
                    new_metadata: e[2]?.newMetadata || e[2]?.new_metadata,
                    original_client_socket_id:
                      e[2]?.excludeSocketID || e[2]?.original_client_socket_id,
                  }),
            new Promise(async (e, n) => {
              if (!puter.authToken && "web" === puter.env)
                try {
                  await puter.ui.authenticateWithPuter();
                } catch (e) {
                  n("Authentication failed.");
                }
              if (
                ((t.source = qe(t.source)),
                (t.destination = qe(t.destination)),
                !t.new_name)
              )
                try {
                  if (!(await Ge.bind(this)(t.destination)).is_dir)
                    throw "is not directory";
                } catch (e) {
                  (t.new_name = je.basename(t.destination)),
                    (t.destination = je.dirname(t.destination));
                }
              const i = s("/move", this.APIOrigin, this.authToken);
              r(i, t.success, t.error, e, n),
                i.send(
                  JSON.stringify({
                    source: t.source,
                    destination: t.destination,
                    overwrite: t.overwrite,
                    new_name: t.new_name || t.newName,
                    create_missing_parents:
                      t.create_missing_parents || t.createMissingParents,
                    new_metadata: t.new_metadata || t.newMetadata,
                    original_client_socket_id: t.excludeSocketID,
                  })
                );
            })
          );
        },
        He = async function (e, t, n = {}) {
          if (!e)
            throw new Error({
              code: "NO_TARGET_PATH",
              message: "No target path provided.",
            });
          e instanceof File && void 0 === t && (e = (t = e).name),
            (n.strict = !0),
            (n.overwrite = n.overwrite ?? !0),
            n.overwrite && void 0 === n.dedupeName && (n.dedupeName = !1),
            (e = qe(e));
          const s = je.basename(e),
            i = je.dirname(e);
          if (
            ("string" == typeof t
              ? (t = new File([t ?? ""], s ?? "Untitled.txt", {
                  type: "text/plain",
                }))
              : t instanceof Blob &&
                (t = new File([t ?? ""], s ?? "Untitled", { type: t.type })),
            t || (t = new File([t ?? ""], s)),
            !(t instanceof File))
          )
            throw new Error({
              code: "field_invalid",
              message: "write() data parameter is an invalid type",
            });
          return this.upload(t, i, n);
        },
        Qe = function (...t) {
          let n;
          return (
            (n = { app_uid: t[0], items: t[1], success: t[2], error: t[3] }),
            new Promise(async (t, r) => {
              if (!puter.authToken && "web" === puter.env)
                try {
                  await puter.ui.authenticateWithPuter();
                } catch (e) {
                  r("Authentication failed.");
                }
              let o = n.items;
              Array.isArray(o) || (o = [o]);
              const a = s("/sign", this.APIOrigin, this.authToken);
              a.addEventListener("load", async function (s) {
                const i = await e(this);
                if (200 !== this.status)
                  return (
                    n.error && "function" == typeof n.error && n.error(i), r(i)
                  );
                {
                  let e,
                    s = i,
                    r = s.token;
                  if (1 == o.length) e = { ...s.signatures[0] };
                  else {
                    let t = [];
                    for (let e = 0; e < s.signatures.length; e++)
                      t.push({ ...s.signatures[e] });
                    e = t;
                  }
                  return (
                    n.success &&
                      "function" == typeof n.success &&
                      n.success({ token: r, items: e }),
                    t({ token: r, items: e })
                  );
                }
              }),
                a.upload.addEventListener("progress", function (e) {}),
                a.addEventListener("error", function (e) {
                  return i(n.error, r, this);
                }),
                a.send(JSON.stringify({ app_uid: n.app_uid, items: o }));
            })
          );
        },
        Ze = async function (e, t) {
          if (!puter.authToken && "web" === puter.env)
            try {
              await puter.ui.authenticateWithPuter();
            } catch (e) {
              throw "Authentication failed.";
            }
          (t = qe(t)), (e = qe(e));
          const n = je.basename(t),
            s = { op: "symlink", path: je.dirname(t), name: n, target: e },
            i = new FormData();
          i.append("operation", JSON.stringify(s));
          try {
            const e = await fetch(this.APIOrigin + "/batch", {
              method: "POST",
              headers: { Authorization: `Bearer ${puter.authToken}` },
              body: i,
            });
            if (200 !== e.status) {
              const t = await e.text();
              throw (console.error("[symlink] fetch error: ", t), t);
            }
          } catch (e) {
            throw (console.error("[symlink] fetch error: ", e), e);
          }
        },
        Je = async function (...e) {
          let t;
          t =
            "object" == typeof e[0] && null !== e[0]
              ? e[0]
              : {
                  paths: e[0],
                  recursive: e[1]?.recursive ?? !0,
                  descendantsOnly: e[1]?.descendantsOnly ?? !1,
                };
          let n = t.paths;
          return (
            "string" == typeof n && (n = [n]),
            new Promise(async (e, i) => {
              if (!puter.authToken && "web" === puter.env)
                try {
                  await puter.ui.authenticateWithPuter();
                } catch (e) {
                  i("Authentication failed.");
                }
              const o = s("/delete", this.APIOrigin, this.authToken);
              r(o, t.success, t.error, e, i),
                (n = n.map((e) => qe(e))),
                o.send(
                  JSON.stringify({
                    paths: n,
                    descendants_only:
                      (t.descendants_only || t.descendantsOnly) ?? !1,
                    recursive: t.recursive ?? !0,
                  })
                );
            })
          );
        };
      var $e = n(294),
        et = n.n($e);
      const tt = "TFilesystem";
      class nt extends et().AdvancedBase {
        static PROPERTIES = { delegate: () => {} };
        constructor({ delegate: e }) {
          super(), (this.delegate = e);
        }
        static IMPLEMENTS = {
          [tt]: {
            stat: async function (e) {
              return this.delegate.stat(e);
            },
            readdir: async function (e) {
              return this.delegate.readdir(e);
            },
          },
        };
      }
      var st = n(717);
      class it extends et().AdvancedBase {
        static PROPERTIES = {
          assocs_path_: () => ({}),
          assocs_uuid_: () => ({}),
          entries: () => ({}),
        };
        get_entry_ei(e) {
          if (Array.isArray(e)) {
            for (const t of e) {
              const e = this.get_entry_ei(t);
              if (e) return e;
            }
            return;
          }
          console.log("GET ENTRY EI", e);
          const t = this.assocs_path_[e] || this.assocs_uuid_[e] || e;
          if (t) return this.entries[t];
        }
        add_entry({ id: e } = {}) {
          const n = e ?? t(),
            s = {
              id: n,
              stat_has: {},
              stat_exp: 0,
              locks: { stat: new st.RWLock(), members: new st.RWLock() },
            };
          return (this.entries[n] = s), s;
        }
        assoc_path(e, t) {
          console.log("ASSOC PATH", e, t), (this.assocs_path_[e] = t);
        }
        assoc_uuid(e, t) {
          e !== t && (this.assocs_uuid_[e] = t);
        }
      }
      class rt extends nt {
        constructor(e) {
          super(e), (this.cacheFS = new it());
        }
        static IMPLEMENTS = {
          [tt]: {
            stat: async function (e) {
              let t = this.cacheFS.get_entry_ei(e.path ?? e.uid);
              const n = ["subdomains", "permissions", "versions", "size"];
              let s,
                i,
                r = {};
              for (const t of n)
                e["return" + t.charAt(0).toUpperCase() + t.slice(1)] &&
                  (r[t] = !0);
              if (t && t.stat && t.stat_exp > Date.now()) {
                const e = await t.locks.stat.rlock();
                ((e) => {
                  for (const t of n) if (r[t] && !e.stat_has[t]) return !1;
                  return !0;
                })(t) && (s = t.stat),
                  e.unlock();
              }
              if (s) return console.log("CACHE HIT"), s;
              console.log("CACHE MISS"),
                t && (i = await t.locks.stat.wlock()),
                console.log("DOING THE STAT", e);
              const o = await this.delegate.stat(e);
              let a = !!t;
              return (
                (t = this.cacheFS.get_entry_ei([o.uid, o.path])),
                t && (a && i.unlock(), (i = await t.locks.stat.wlock())),
                t ||
                  ((t = this.cacheFS.add_entry({ id: o.uid })),
                  this.cacheFS.assoc_path(o.path, t.id),
                  this.cacheFS.assoc_uuid(o.uid, t.id),
                  (i = await t.locks.stat.wlock())),
                (t.stat = o),
                (t.stat_has = { ...r }),
                (t.stat_exp = Date.now() + 5e3),
                i.unlock(),
                console.log("RETRUNING THE ENTRY", o),
                o
              );
            },
            readdir: async function (e) {
              let t = this.cacheFS.get_entry_ei([e.path, e.uid]);
              console.log("CENT", t, e);
              let n,
                s = null;
              if (t && t.members && t.members_exp > Date.now()) {
                console.log("MEMBERS", t.members), (s = []);
                const n = await t.locks.stat.rlock();
                for (const n of t.members) {
                  const t = this.cacheFS.get_entry_ei(n);
                  if (!t || !t.stat || t.stat_exp <= Date.now()) {
                    console.log("NO MEMBER OR STAT", t), (s = null);
                    break;
                  }
                  if (
                    (console.log("member", t),
                    !e.no_assocs && !t.stat_has.subdomains)
                  ) {
                    s = null;
                    break;
                  }
                  if (!e.no_assocs && !t.stat_has.apps) {
                    s = null;
                    break;
                  }
                  if (!e.no_thumbs && !t.stat_has.thumbnail) {
                    s = null;
                    break;
                  }
                  console.log("PUSHING", t.stat), s.push(t.stat);
                }
                n.unlock();
              }
              if ((console.log("STATS????", s), s)) return s;
              t && (n = await t.locks.members.wlock());
              const i = await this.delegate.readdir(e);
              t ||
                ((t = this.cacheFS.add_entry(e.uid ? { id: e.uid } : {})),
                e.path && this.cacheFS.assoc_path(e.path, t.id),
                (n = await t.locks.members.wlock()));
              let r = [];
              for (const t of i) {
                let n = this.cacheFS.get_entry_ei([t.path, t.uid]);
                n ||
                  ((n = this.cacheFS.add_entry({ id: t.uid })),
                  this.cacheFS.assoc_path(t.path, t.uid)),
                  r.push(n.id),
                  (n.stat = t),
                  (n.stat_has = {
                    subdomains: !e.no_assocs,
                    apps: !e.no_assocs,
                    thumbnail: !e.no_thumbs,
                  }),
                  (n.stat_exp = Date.now() + 3e3);
              }
              t.members = [];
              for (const e of r) t.members.push(e);
              return (
                (t.members_exp = Date.now() + 5e3),
                n.unlock(),
                console.log("CACHE ENTRY?", t),
                i
              );
            },
          },
        };
      }
      class ot extends et().AdvancedBase {
        constructor({ api_info: e }) {
          super(), (this.api_info = e);
        }
        static IMPLEMENTS = {
          [tt]: {
            stat: async function (e) {
              this.ensure_auth_();
              const t = new st.TeePromise(),
                n = new s(
                  "/stat",
                  this.api_info.APIOrigin,
                  this.api_info.authToken
                );
              r(n, void 0, void 0, t.resolve.bind(t), t.reject.bind(t));
              let i = {};
              return (
                void 0 !== e.uid
                  ? (i.uid = e.uid)
                  : void 0 !== e.path && (i.path = qe(e.path)),
                (i.return_subdomains = e.returnSubdomains),
                (i.return_permissions = e.returnPermissions),
                (i.return_versions = e.returnVersions),
                (i.return_size = e.returnSize),
                n.send(JSON.stringify(i)),
                await t
              );
            },
            readdir: async function (e) {
              this.ensure_auth_();
              const t = new st.TeePromise(),
                n = new s(
                  "/readdir",
                  this.api_info.APIOrigin,
                  this.api_info.authToken
                );
              return (
                r(n, void 0, void 0, t.resolve.bind(t), t.reject.bind(t)),
                n.send(JSON.stringify({ path: qe(e.path) })),
                await t
              );
            },
          },
        };
        ensure_auth_() {
          if (!this.api_info.authToken && "web" === puter.env)
            try {
              this.ui.authenticateWithPuter();
            } catch (e) {
              throw new Error("Authentication failed.");
            }
        }
      }
      class at extends $e.AdvancedBase {
        space = Re;
        mkdir = ze;
        copy = We;
        rename = Xe;
        upload = Ve;
        read = Ke;
        delete = Je;
        move = Ye;
        write = He;
        sign = Qe;
        symlink = Ze;
        static NARI_METHODS = {
          stat: {
            positional: ["path"],
            firstarg_options: !0,
            async fn(e) {
              return (
                await this.context.services.aget("filesystem")
              ).filesystem.stat(e);
            },
          },
          readdir: {
            positional: ["path"],
            firstarg_options: !0,
            async fn(e) {
              return (
                await this.context.services.aget("filesystem")
              ).filesystem.readdir(e);
            },
          },
        };
        constructor(e) {
          super(),
            (this.authToken = e.authToken),
            (this.APIOrigin = e.APIOrigin),
            (this.appID = e.appID),
            (this.context = e),
            this.initializeSocket();
          const t = {};
          Object.defineProperty(t, "authToken", { get: () => this.authToken }),
            Object.defineProperty(t, "APIOrigin", {
              get: () => this.APIOrigin,
            });
        }
        initializeSocket() {
          this.socket && this.socket.disconnect(),
            (this.socket = Le(this.APIOrigin, {
              auth: { auth_token: this.authToken },
            })),
            this.bindSocketEvents();
        }
        bindSocketEvents() {
          this.socket.on("connect", () => {
            puter.debugMode &&
              console.log("FileSystem Socket: Connected", this.socket.id);
          }),
            this.socket.on("disconnect", () => {
              puter.debugMode && console.log("FileSystem Socket: Disconnected");
            }),
            this.socket.on("reconnect", (e) => {
              puter.debugMode &&
                console.log("FileSystem Socket: Reconnected", this.socket.id);
            }),
            this.socket.on("reconnect_attempt", (e) => {
              puter.debugMode &&
                console.log("FileSystem Socket: Reconnection Attemps", e);
            }),
            this.socket.on("reconnect_error", (e) => {
              puter.debugMode &&
                console.log("FileSystem Socket: Reconnection Error", e);
            }),
            this.socket.on("reconnect_failed", () => {
              puter.debugMode &&
                console.log("FileSystem Socket: Reconnection Failed");
            }),
            this.socket.on("error", (e) => {
              puter.debugMode && console.error("FileSystem Socket Error:", e);
            });
        }
        setAuthToken(e) {
          (this.authToken = e), this.initializeSocket();
        }
        setAPIOrigin(e) {
          (this.APIOrigin = e), this.initializeSocket();
        }
      }
      const ct = class {
          constructor(e) {
            (this.authToken = e.authToken),
              (this.APIOrigin = e.APIOrigin),
              (this.appID = e.appID);
          }
          setAuthToken(e) {
            this.authToken = e;
          }
          setAPIOrigin(e) {
            this.APIOrigin = e;
          }
          list = c([], "puter-subdomains", void 0, "select");
          create = async (...e) => {
            let t = {};
            return (
              "string" == typeof e[0] && 1 === e.length
                ? (e[0].match(/^[a-z0-9]+\.puter\.(site|com)$/) &&
                    (e[0] = e[0].split(".")[0]),
                  (t = { object: { subdomain: e[0] } }))
                : Array.isArray(e) && 2 === e.length && "string" == typeof e[0]
                ? (e[0].match(/^[a-z0-9]+\.puter\.(site|com)$/) &&
                    (e[0] = e[0].split(".")[0]),
                  e[1] && (e[1] = qe(e[1])),
                  (t = { object: { subdomain: e[0], root_dir: e[1] } }))
                : "object" == typeof e[0] && (t = { object: e[0] }),
              await c(["object"], "puter-subdomains", void 0, "create").call(
                this,
                t
              )
            );
          };
          update = async (...e) => {
            let t = {};
            return (
              Array.isArray(e) &&
                "string" == typeof e[0] &&
                (e[0].match(/^[a-z0-9]+\.puter\.(site|com)$/) &&
                  (e[0] = e[0].split(".")[0]),
                e[1] && (e[1] = qe(e[1])),
                (t = {
                  id: { subdomain: e[0] },
                  object: { root_dir: e[1] ?? null },
                })),
              await c(["object"], "puter-subdomains", void 0, "update").call(
                this,
                t
              )
            );
          };
          get = async (...e) => {
            let t = {};
            return (
              Array.isArray(e) &&
                "string" == typeof e[0] &&
                (e[0].match(/^[a-z0-9]+\.puter\.(site|com)$/) &&
                  (e[0] = e[0].split(".")[0]),
                (t = { id: { subdomain: e[0] } })),
              c(["uid"], "puter-subdomains", void 0, "read").call(this, t)
            );
          };
          delete = async (...e) => {
            let t = {};
            return (
              Array.isArray(e) &&
                "string" == typeof e[0] &&
                (e[0].match(/^[a-z0-9]+\.puter\.(site|com)$/) &&
                  (e[0] = e[0].split(".")[0]),
                (t = { id: { subdomain: e[0] } })),
              c(["uid"], "puter-subdomains", void 0, "delete").call(this, t)
            );
          };
        },
        lt = class {
          constructor(e) {
            (this.authToken = e.authToken),
              (this.APIOrigin = e.APIOrigin),
              (this.appID = e.appID);
          }
          setAuthToken(e) {
            this.authToken = e;
          }
          setAPIOrigin(e) {
            this.APIOrigin = e;
          }
          send = async (...e) => {
            let t = {};
            if (!e || 0 === e.length)
              throw {
                message: "Arguments are required",
                code: "arguments_required",
              };
            let n = 0;
            "object" == typeof e[0]
              ? ((t = e[0]), (n = 1))
              : ((t = { to: e[0], subject: e[1], body: e[2] }), (n = 3));
            for (const s of e.slice(n))
              "object" == typeof s && Object.assign(t, s);
            return c(
              ["to", "subject", "body"],
              "puter-send-mail",
              void 0,
              "send"
            ).call(this, t);
          };
        },
        ht = class {
          constructor(e) {
            (this.authToken = e.authToken),
              (this.APIOrigin = e.APIOrigin),
              (this.appID = e.appID);
          }
          setAuthToken(e) {
            this.authToken = e;
          }
          setAPIOrigin(e) {
            this.APIOrigin = e;
          }
          list = async (...e) => {
            let t = {};
            return (
              "object" == typeof e[0] && null !== e[0] && (t.params = e[0]),
              (t.predicate = ["user-can-edit"]),
              c(["uid"], "puter-apps", void 0, "select").call(this, t)
            );
          };
          create = async (...e) => {
            let t = {};
            if ("string" == typeof e[0]) {
              let n = e[1],
                s = e[2] ?? e[0];
              t = { object: { name: e[0], index_url: n, title: s } };
            } else if ("object" == typeof e[0] && null !== e[0]) {
              let n = e[0];
              t = {
                object: {
                  name: n.name,
                  index_url: n.indexURL,
                  title: n.title,
                  description: n.description,
                  icon: n.icon,
                  maximize_on_start: n.maximizeOnStart,
                  background: n.background,
                  filetype_associations: n.filetypeAssociations,
                  metadata: n.metadata,
                },
                options: { dedupe_name: n.dedupeName ?? !1 },
              };
            }
            return await c(["object"], "puter-apps", void 0, "create").call(
              this,
              t
            );
          };
          update = async (...e) => {
            let t = {};
            if (Array.isArray(e) && "string" == typeof e[0]) {
              let n = e[1],
                s = {
                  name: n.name,
                  index_url: n.indexURL,
                  title: n.title,
                  description: n.description,
                  icon: n.icon,
                  maximize_on_start: n.maximizeOnStart,
                  background: n.background,
                  filetype_associations: n.filetypeAssociations,
                  metadata: n.metadata,
                };
              t = { id: { name: e[0] }, object: s };
            }
            return await c(["object"], "puter-apps", void 0, "update").call(
              this,
              t
            );
          };
          get = async (...e) => {
            let t = {};
            return (
              Array.isArray(e) &&
                "string" == typeof e[0] &&
                ("object" == typeof e[1] && null !== e[1] && (t.params = e[1]),
                (t.id = { name: e[0] })),
              "object" == typeof e[0] && null !== e[0] && (t.params = e[0]),
              c(["uid"], "puter-apps", void 0, "read").call(this, t)
            );
          };
          delete = async (...e) => {
            let t = {};
            return (
              Array.isArray(e) &&
                "string" == typeof e[0] &&
                (t = { id: { name: e[0] } }),
              c(["uid"], "puter-apps", void 0, "delete").call(this, t)
            );
          };
          getDeveloperProfile = function (...e) {
            let t;
            return (
              (t =
                "object" == typeof e[0] && null !== e[0]
                  ? e[0]
                  : { success: e[0], error: e[1] }),
              new Promise((t, n) => {
                let i;
                return (
                  (i =
                    "object" == typeof e[0] && null !== e[0]
                      ? e[0]
                      : { success: e[0], error: e[1] }),
                  new Promise((e, t) => {
                    const n = s(
                      "/get-dev-profile",
                      puter.APIOrigin,
                      puter.authToken,
                      "get"
                    );
                    r(n, i.success, i.error, e, t), n.send();
                  })
                );
              })
            );
          };
        },
        ut = class {
          constructor(e) {
            (this.readURL = e.readURL ?? e.read_url),
              (this.writeURL = e.writeURL ?? e.write_url),
              (this.metadataURL = e.metadataURL ?? e.metadata_url),
              (this.name = e.name ?? e.fsentry_name),
              (this.uid =
                e.uid ??
                e.uuid ??
                e.fsentry_uid ??
                e.fsentry_id ??
                e.fsentry_uuid ??
                e.id),
              (this.id = this.uid),
              (this.uuid = this.uid),
              (this.path = e.path ?? e.fsentry_path),
              (this.size = e.size ?? e.fsentry_size),
              (this.accessed = e.accessed ?? e.fsentry_accessed),
              (this.modified = e.modified ?? e.fsentry_modified),
              (this.created = e.created ?? e.fsentry_created),
              (this.isDirectory = !!(
                e.isDirectory ||
                e.is_dir ||
                e.fsentry_is_dir
              ));
          }
          write = async function (e) {
            return puter.fs.write(this.path, new File([e], this.name), {
              overwrite: !0,
              dedupeName: !1,
            });
          };
          watch = function (e) {};
          open = function (e) {};
          setAsWallpaper = function (e, t) {};
          rename = function (e) {
            return puter.fs.rename(this.uid, e);
          };
          move = function (e, t = !1, n) {
            return puter.fs.move(this.path, e, t, n);
          };
          copy = function (e, t = !1, n = !1) {
            return puter.fs.copy(this.path, e, t, n);
          };
          delete = function () {
            return puter.fs.delete(this.path);
          };
          versions = async function () {};
          trash = function () {};
          mkdir = async function (e, t = !1) {
            if (!this.isDirectory)
              throw new Error("mkdir() can only be called on a directory");
            return puter.fs.mkdir(je.join(this.path, e));
          };
          metadata = async function () {};
          readdir = async function () {
            if (!this.isDirectory)
              throw new Error("readdir() can only be called on a directory");
            return puter.fs.readdir(this.path);
          };
          read = async function () {
            return puter.fs.read(this.path);
          };
        };
      var dt = n(480),
        pt = n.n(dt);
      class ft {
        #e;
        #t;
        constructor(e) {
          (this.#e = e),
            (this.#t = (() => {
              const e = new Map();
              for (let t of this.#e) e[t] = [];
              return e;
            })());
        }
        emit(e, t) {
          this.#e.includes(e)
            ? this.#t[e].forEach((e) => {
                e(t);
              })
            : console.error(`Event name '${e}' not supported`);
        }
        on(e, t) {
          if (this.#e.includes(e)) return this.#t[e].push(t), this;
          console.error(`Event name '${e}' not supported`);
        }
        off(e, t) {
          if (!this.#e.includes(e))
            return void console.error(`Event name '${e}' not supported`);
          const n = this.#t[e],
            s = n.indexOf(t);
          return -1 !== s && n.splice(s, 1), this;
        }
      }
      class gt extends ft {
        #n = "*";
        #s;
        #i;
        static from(e, t) {
          const n = new gt(t, { target: e.appInstanceID, usesSDK: e.usesSDK });
          return (n.response = e.response), n;
        }
        constructor(e, { target: t, usesSDK: n }) {
          super(["message", "close"]),
            (this.messageTarget = e.messageTarget),
            (this.appInstanceID = e.appInstanceID),
            (this.targetAppInstanceID = t),
            (this.#s = !0),
            (this.#i = n),
            (this.log = e.puter.log.fields({ category: "ipc" })),
            this.log
              .fields({
                cons_source: e.appInstanceID,
                source: e.puter.appInstanceID,
                target: t,
              })
              .info(`AppConnection created to ${t}`, this),
            window.addEventListener("message", (e) => {
              if ("messageToApp" === e.data.msg) {
                if (e.data.appInstanceID !== this.targetAppInstanceID) return;
                return e.data.targetAppInstanceID !== this.appInstanceID
                  ? void console.error(
                      `AppConnection received message intended for wrong app! appInstanceID=${this.appInstanceID}, target=${e.data.targetAppInstanceID}`
                    )
                  : void this.emit("message", e.data.contents);
              }
              if ("appClosed" === e.data.msg) {
                if (e.data.appInstanceID !== this.targetAppInstanceID) return;
                (this.#s = !1),
                  this.emit("close", {
                    appInstanceID: this.targetAppInstanceID,
                    statusCode: e.data.statusCode,
                  });
              }
            });
        }
        get usesSDK() {
          return this.#i;
        }
        postMessage(e) {
          this.#s
            ? this.#i
              ? this.messageTarget.postMessage(
                  {
                    msg: "messageToApp",
                    appInstanceID: this.appInstanceID,
                    targetAppInstanceID: this.targetAppInstanceID,
                    targetAppOrigin: "*",
                    contents: e,
                  },
                  this.#n
                )
              : console.warn("Trying to post message to a non-SDK app")
            : console.warn("Trying to post message on a closed AppConnection");
        }
        close() {
          this.#s
            ? this.messageTarget.postMessage(
                {
                  msg: "closeApp",
                  appInstanceID: this.appInstanceID,
                  targetAppInstanceID: this.targetAppInstanceID,
                },
                this.#n
              )
            : console.warn("Trying to close an app on a closed AppConnection");
        }
      }
      const mt = class extends ft {
          #r = 1;
          itemWatchCallbackFunctions = [];
          appInstanceID;
          parentInstanceID;
          #o = null;
          #a = [];
          #c;
          #l;
          #h;
          #e;
          #u = new Map();
          #d = !1;
          #p = null;
          #f = function (e, t, n = {}) {
            const s = this.#r++;
            this.messageTarget?.postMessage(
              {
                msg: e,
                env: this.env,
                appInstanceID: this.appInstanceID,
                uuid: s,
                ...n,
              },
              "*"
            ),
              (this.#a[s] = t);
          };
          #g = function (e, t) {
            const n = this.util.rpc.getDehydrator({
              target: this.messageTarget,
            });
            this.messageTarget?.postMessage(
              {
                msg: e,
                env: this.env,
                appInstanceID: this.appInstanceID,
                value: n.dehydrate(t),
              },
              "*"
            );
          };
          #m = async function ({ callback: e, method: t, parameters: n }) {
            let s, i;
            await new Promise((e) => {
              s = new Promise((t) => {
                (i = t), e();
              });
            });
            const r = this.util.rpc.registerCallback(i);
            this.messageTarget?.postMessage(
              {
                $: "puter-ipc",
                v: 2,
                appInstanceID: this.appInstanceID,
                env: this.env,
                msg: t,
                parameters: n,
                uuid: r,
              },
              "*"
            );
            const o = await s;
            return e && e(o), o;
          };
          constructor(e, { appInstanceID: t, parentInstanceID: n }) {
            const s = ["localeChanged", "themeChanged", "connection"];
            if (
              (super(s),
              (this.#e = s),
              (this.context = e),
              (this.appInstanceID = t),
              (this.parentInstanceID = n),
              (this.appID = e.appID),
              (this.env = e.env),
              (this.util = e.util),
              "app" === this.env)
            )
              this.messageTarget = window.parent;
            else if ("gui" === this.env) return;
            (this.context = this.context.sub({
              appInstanceID: this.appInstanceID,
              messageTarget: this.messageTarget,
            })),
              this.parentInstanceID &&
                (this.#o = new gt(this.context, {
                  target: this.parentInstanceID,
                  usesSDK: !0,
                })),
              this.messageTarget?.postMessage(
                { msg: "READY", appInstanceID: this.appInstanceID },
                "*"
              ),
              window.addEventListener("focus", (e) => {
                this.messageTarget?.postMessage(
                  { msg: "windowFocused", appInstanceID: this.appInstanceID },
                  "*"
                );
              });
            let i = null;
            window.addEventListener("message", async (e) => {
              if (e.data.error) throw e.data.error;
              if (e.data.msg && "focus" === e.data.msg) window.focus();
              else if (e.data.msg && "click" === e.data.msg) {
                const t = document.elementFromPoint(e.data.x, e.data.y);
                null !== t && t.click();
              } else if (e.data.msg && "drag" === e.data.msg) {
                const t = document.elementFromPoint(e.data.x, e.data.y);
                if (t !== i) {
                  if (i) {
                    const t = new Event("dragleave", {
                      bubbles: !0,
                      cancelable: !0,
                      clientX: e.data.x,
                      clientY: e.data.y,
                    });
                    i.dispatchEvent(t);
                  }
                  if (t) {
                    const n = new Event("dragenter", {
                      bubbles: !0,
                      cancelable: !0,
                      clientX: e.data.x,
                      clientY: e.data.y,
                    });
                    t.dispatchEvent(n);
                  }
                  i = t;
                }
              } else if (e.data.msg && "drop" === e.data.msg) {
                if (i) {
                  const t = new CustomEvent("drop", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: {
                      clientX: e.data.x,
                      clientY: e.data.y,
                      items: e.data.items,
                    },
                  });
                  i.dispatchEvent(t), (i = null);
                }
              } else if ("windowWillClose" === e.data.msg)
                void 0 === this.#c
                  ? this.messageTarget?.postMessage(
                      {
                        msg: !0,
                        appInstanceID: this.appInstanceID,
                        original_msg_id: e.data.msg_id,
                      },
                      "*"
                    )
                  : (this.messageTarget?.postMessage(
                      {
                        msg: !1,
                        appInstanceID: this.appInstanceID,
                        original_msg_id: e.data.msg_id,
                      },
                      "*"
                    ),
                    this.#c());
              else if ("itemsOpened" === e.data.msg)
                if (void 0 === this.#l)
                  this.messageTarget?.postMessage(
                    {
                      msg: !0,
                      appInstanceID: this.appInstanceID,
                      original_msg_id: e.data.msg_id,
                    },
                    "*"
                  );
                else {
                  this.messageTarget?.postMessage(
                    {
                      msg: !1,
                      appInstanceID: this.appInstanceID,
                      original_msg_id: e.data.msg_id,
                    },
                    "*"
                  );
                  let t = [];
                  if (e.data.items.length > 0)
                    for (let n = 0; n < e.data.items.length; n++)
                      t.push(new ut(e.data.items[n]));
                  this.#l(t);
                }
              else if ("getAppDataSucceeded" === e.data.msg) {
                let t = new ut(e.data.item);
                e.data.original_msg_id &&
                  this.#a[e.data.original_msg_id] &&
                  this.#a[e.data.original_msg_id](t);
              } else if ("readAppDataFileSucceeded" === e.data.msg) {
                let t = new ut(e.data.item);
                e.data.original_msg_id &&
                  this.#a[e.data.original_msg_id] &&
                  this.#a[e.data.original_msg_id](t);
              } else if ("readAppDataFileFailed" === e.data.msg)
                e.data.original_msg_id &&
                  this.#a[e.data.original_msg_id] &&
                  this.#a[e.data.original_msg_id](null);
              else if (
                void 0 !== e.data.original_msg_id &&
                this.#a[e.data.original_msg_id]
              ) {
                if ("fileOpenPicked" === e.data.msg) {
                  if (1 === e.data.items.length)
                    this.#a[e.data.original_msg_id](new ut(e.data.items[0]));
                  else if (e.data.items.length > 1) {
                    let t = [];
                    for (let n = 0; n < e.data.items.length; n++)
                      t.push(new ut(e.data.items[n]));
                    this.#a[e.data.original_msg_id](t);
                  }
                } else if ("directoryPicked" === e.data.msg) {
                  if (1 === e.data.items.length)
                    this.#a[e.data.original_msg_id](
                      new ut({
                        uid: e.data.items[0].uid,
                        name: e.data.items[0].fsentry_name,
                        path: e.data.items[0].path,
                        readURL: e.data.items[0].read_url,
                        writeURL: e.data.items[0].write_url,
                        metadataURL: e.data.items[0].metadata_url,
                        isDirectory: !0,
                        size: e.data.items[0].fsentry_size,
                        accessed: e.data.items[0].fsentry_accessed,
                        modified: e.data.items[0].fsentry_modified,
                        created: e.data.items[0].fsentry_created,
                      })
                    );
                  else if (e.data.items.length > 1) {
                    let t = [];
                    for (let n = 0; n < e.data.items.length; n++)
                      t.push(new ut(e.data.items[n]));
                    this.#a[e.data.original_msg_id](t);
                  }
                } else
                  "colorPicked" === e.data.msg
                    ? this.#a[e.data.original_msg_id](e.data.color)
                    : "fontPicked" === e.data.msg
                    ? this.#a[e.data.original_msg_id](e.data.font)
                    : "alertResponded" === e.data.msg ||
                      "promptResponded" === e.data.msg
                    ? this.#a[e.data.original_msg_id](e.data.response)
                    : "fileSaved" === e.data.msg
                    ? this.#a[e.data.original_msg_id](new ut(e.data.saved_file))
                    : this.#a[e.data.original_msg_id](e.data);
                delete this.#a[e.data.original_msg_id];
              } else if (
                "itemChanged" === e.data.msg &&
                e.data.data &&
                e.data.data.uid
              )
                this.itemWatchCallbackFunctions[e.data.data.uid] &&
                  "function" ==
                    typeof this.itemWatchCallbackFunctions[e.data.data.uid] &&
                  this.itemWatchCallbackFunctions[e.data.data.uid](e.data.data);
              else if ("broadcast" === e.data.msg) {
                const { name: t, data: n } = e.data;
                if (!this.#e.includes(t)) return;
                this.emit(t, n), this.#u.set(t, n);
              } else if ("connection" === e.data.msg) {
                e.data.usesSDK = !0;
                const t = gt.from(e.data, this.context),
                  n = (t) => {
                    this.messageTarget?.postMessage(
                      {
                        $: "connection-resp",
                        connection: e.data.appInstanceID,
                        accept: !0,
                        value: t,
                      },
                      "*"
                    );
                  },
                  s = (t) => {
                    this.messageTarget?.postMessage(
                      {
                        $: "connection-resp",
                        connection: e.data.appInstanceID,
                        accept: !1,
                        value: t,
                      },
                      "*"
                    );
                  };
                this.emit("connection", { conn: t, accept: n, reject: s });
              }
            }),
              document.addEventListener("mousemove", async (e) => {
                (this.mouseX = e.clientX),
                  (this.mouseY = e.clientY),
                  this.messageTarget?.postMessage(
                    {
                      msg: "mouseMoved",
                      appInstanceID: this.appInstanceID,
                      x: this.mouseX,
                      y: this.mouseY,
                    },
                    "*"
                  );
              }),
              document.addEventListener("click", async (e) => {
                (this.mouseX = e.clientX),
                  (this.mouseY = e.clientY),
                  this.messageTarget?.postMessage(
                    {
                      msg: "mouseClicked",
                      appInstanceID: this.appInstanceID,
                      x: this.mouseX,
                      y: this.mouseY,
                    },
                    "*"
                  );
              });
          }
          onWindowClose = function (e) {
            this.#c = e;
          };
          onItemsOpened = function (e) {
            if (!this.#l) {
              let t = new URLSearchParams(window.location.search);
              if (
                t.has("puter.item.name") &&
                t.has("puter.item.uid") &&
                t.has("puter.item.read_url")
              ) {
                let n = t.get("puter.item.path");
                n.startsWith("~/") || n.startsWith("/") || (n = "~/" + n),
                  e([
                    new ut({
                      name: t.get("puter.item.name"),
                      path: n,
                      uid: t.get("puter.item.uid"),
                      readURL: t.get("puter.item.read_url"),
                      writeURL: t.get("puter.item.write_url"),
                      metadataURL: t.get("puter.item.metadata_url"),
                      size: t.get("puter.item.size"),
                      accessed: t.get("puter.item.accessed"),
                      modified: t.get("puter.item.modified"),
                      created: t.get("puter.item.created"),
                    }),
                  ]);
              }
            }
            this.#l = e;
          };
          wasLaunchedWithItems = function () {
            const e = new URLSearchParams(window.location.search);
            return (
              e.has("puter.item.name") &&
              e.has("puter.item.uid") &&
              e.has("puter.item.read_url")
            );
          };
          onLaunchedWithItems = function (e) {
            if (!this.#h) {
              let t = new URLSearchParams(window.location.search);
              if (
                t.has("puter.item.name") &&
                t.has("puter.item.uid") &&
                t.has("puter.item.read_url")
              ) {
                let n = t.get("puter.item.path");
                n.startsWith("~/") || n.startsWith("/") || (n = "~/" + n),
                  e([
                    new ut({
                      name: t.get("puter.item.name"),
                      path: n,
                      uid: t.get("puter.item.uid"),
                      readURL: t.get("puter.item.read_url"),
                      writeURL: t.get("puter.item.write_url"),
                      metadataURL: t.get("puter.item.metadata_url"),
                      size: t.get("puter.item.size"),
                      accessed: t.get("puter.item.accessed"),
                      modified: t.get("puter.item.modified"),
                      created: t.get("puter.item.created"),
                    }),
                  ]);
              }
            }
            this.#h = e;
          };
          alert = function (e, t, n, s) {
            return new Promise((s) => {
              this.#f("ALERT", s, { message: e, buttons: t, options: n });
            });
          };
          socialShare = function (e, t, n, s) {
            return new Promise((s) => {
              this.#f("socialShare", s, { url: e, message: t, options: n });
            });
          };
          prompt = function (e, t, n, s) {
            return new Promise((s) => {
              this.#f("PROMPT", s, { message: e, placeholder: t, options: n });
            });
          };
          showDirectoryPicker = function (e, t) {
            return new Promise((t) => {
              const n = this.#r++;
              if ("app" === this.env)
                this.messageTarget?.postMessage(
                  {
                    msg: "showDirectoryPicker",
                    appInstanceID: this.appInstanceID,
                    uuid: n,
                    options: e,
                    env: this.env,
                  },
                  "*"
                );
              else {
                let t = 700,
                  r = 400,
                  o = "Puter: Open Directory";
                var s = screen.width / 2 - t / 2,
                  i = screen.height / 2 - r / 2;
                window.open(
                  `${
                    puter.defaultGUIOrigin
                  }/action/show-directory-picker?embedded_in_popup=true&msg_id=${n}&appInstanceID=${
                    this.appInstanceID
                  }&env=${this.env}&options=${JSON.stringify(e)}`,
                  o,
                  "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
                    t +
                    ", height=" +
                    r +
                    ", top=" +
                    i +
                    ", left=" +
                    s
                );
              }
              this.#a[n] = t;
            });
          };
          showOpenFilePicker = function (e, t) {
            return new Promise((t) => {
              const n = this.#r++;
              if ("app" === this.env)
                this.messageTarget?.postMessage(
                  {
                    msg: "showOpenFilePicker",
                    appInstanceID: this.appInstanceID,
                    uuid: n,
                    options: e ?? {},
                    env: this.env,
                  },
                  "*"
                );
              else {
                let t = 700,
                  r = 400,
                  o = "Puter: Open File";
                var s = screen.width / 2 - t / 2,
                  i = screen.height / 2 - r / 2;
                window.open(
                  `${
                    puter.defaultGUIOrigin
                  }/action/show-open-file-picker?embedded_in_popup=true&msg_id=${n}&appInstanceID=${
                    this.appInstanceID
                  }&env=${this.env}&options=${JSON.stringify(e ?? {})}`,
                  o,
                  "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
                    t +
                    ", height=" +
                    r +
                    ", top=" +
                    i +
                    ", left=" +
                    s
                );
              }
              this.#a[n] = t;
            });
          };
          showFontPicker = function (e) {
            return new Promise((t) => {
              this.#f("showFontPicker", t, { options: e ?? {} });
            });
          };
          showColorPicker = function (e) {
            return new Promise((t) => {
              this.#f("showColorPicker", t, { options: e ?? {} });
            });
          };
          showSaveFilePicker = function (e, t) {
            return new Promise((n) => {
              const s = this.#r++,
                i =
                  "[object URL]" === Object.prototype.toString.call(e)
                    ? e
                    : void 0;
              if ("app" === this.env)
                this.messageTarget?.postMessage(
                  {
                    msg: "showSaveFilePicker",
                    appInstanceID: this.appInstanceID,
                    content: i ? void 0 : e,
                    url: i ? i.toString() : void 0,
                    suggestedName: t ?? "",
                    env: this.env,
                    uuid: s,
                  },
                  "*"
                );
              else {
                window.addEventListener("message", async (n) => {
                  "sendMeFileData" === n.data?.msg &&
                    (n.source.postMessage(
                      {
                        msg: "showSaveFilePickerPopup",
                        content: i ? void 0 : e,
                        url: i ? i.toString() : void 0,
                        suggestedName: t ?? "",
                        env: this.env,
                        uuid: s,
                      },
                      "*"
                    ),
                    window.removeEventListener("message", this));
                });
                let n = new Blob([e], { type: "application/octet-stream" }),
                  a = URL.createObjectURL(n),
                  c = 700,
                  l = 400,
                  h = "Puter: Save File";
                var r = screen.width / 2 - c / 2,
                  o = screen.height / 2 - l / 2;
                window.open(
                  `${
                    puter.defaultGUIOrigin
                  }/action/show-save-file-picker?embedded_in_popup=true&msg_id=${s}&appInstanceID=${
                    this.appInstanceID
                  }&env=${this.env}&blobUrl=${encodeURIComponent(a)}`,
                  h,
                  "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
                    c +
                    ", height=" +
                    l +
                    ", top=" +
                    o +
                    ", left=" +
                    r
                );
              }
              this.#a[s] = n;
            });
          };
          setWindowTitle = function (e, t, n) {
            return (
              "function" == typeof t
                ? (t = void 0)
                : "object" == typeof t && null !== t && (t = t.id),
              new Promise((n) => {
                this.#f("setWindowTitle", n, { new_title: e, window_id: t });
              })
            );
          };
          setWindowWidth = function (e, t, n) {
            return (
              "function" == typeof t
                ? (t = void 0)
                : "object" == typeof t && null !== t && (t = t.id),
              new Promise((n) => {
                this.#f("setWindowWidth", n, { width: e, window_id: t });
              })
            );
          };
          setWindowHeight = function (e, t, n) {
            return (
              "function" == typeof t
                ? (t = void 0)
                : "object" == typeof t && null !== t && (t = t.id),
              new Promise((n) => {
                this.#f("setWindowHeight", n, { height: e, window_id: t });
              })
            );
          };
          setWindowSize = function (e, t, n, s) {
            return (
              "function" == typeof n
                ? (n = void 0)
                : "object" == typeof n && null !== n && (n = n.id),
              new Promise((s) => {
                this.#f("setWindowSize", s, {
                  width: e,
                  height: t,
                  window_id: n,
                });
              })
            );
          };
          setWindowPosition = function (e, t, n, s) {
            return (
              "function" == typeof n
                ? (n = void 0)
                : "object" == typeof n && null !== n && (n = n.id),
              new Promise((s) => {
                this.#f("setWindowPosition", s, { x: e, y: t, window_id: n });
              })
            );
          };
          setWindowY = function (e, t, n) {
            return (
              "function" == typeof t
                ? (t = void 0)
                : "object" == typeof t && null !== t && (t = t.id),
              new Promise((n) => {
                this.#f("setWindowY", n, { y: e, window_id: t });
              })
            );
          };
          setWindowX = function (e, t, n) {
            return (
              "function" == typeof t
                ? (t = void 0)
                : "object" == typeof t && null !== t && (t = t.id),
              new Promise((n) => {
                this.#f("setWindowX", n, { x: e, window_id: t });
              })
            );
          };
          setMenubar = function (e) {
            this.#g("setMenubar", e);
          };
          disableMenuItem = function (e) {
            this.#g("disableMenuItem", { id: e });
          };
          enableMenuItem = function (e) {
            this.#g("enableMenuItem", { id: e });
          };
          setMenuItemIcon = function (e, t) {
            this.#g("setMenuItemIcon", { id: e, icon: t });
          };
          setMenuItemIconActive = function (e, t) {
            this.#g("setMenuItemIconActive", { id: e, icon: t });
          };
          setMenuItemChecked = function (e, t) {
            this.#g("setMenuItemChecked", { id: e, checked: t });
          };
          contextMenu = function (e) {
            this.#g("contextMenu", e);
          };
          getEntriesFromDataTransferItems = async function (
            e,
            t = { raw: !1 }
          ) {
            const n = (e) => {
                if (this.getEntriesFromDataTransferItems.didShowInfo) return;
                if ("EncodingError" !== e.name) return;
                this.getEntriesFromDataTransferItems.didShowInfo = !0;
                const t = `${e.name} occurred within datatransfer-files-promise module\nError message: "${e.message}"\nTry serving html over http if currently you are running it from the filesystem.`;
                console.warn(t);
              },
              s = (e, t) =>
                new Promise((s, r) => {
                  e.readEntries(
                    async (e) => {
                      let n = [];
                      for (let s of e) {
                        const e = await i(s, t);
                        n = n.concat(e);
                      }
                      s(n);
                    },
                    (e) => {
                      n(e), r(e);
                    }
                  );
                }),
              i = async (e, i = "") => {
                if (null !== e) {
                  if (e.isFile) {
                    const s = await ((e, s = "") =>
                      new Promise((i, r) => {
                        e.file(
                          (e) => {
                            t.raw || (e.filepath = s + e.name), i(e);
                          },
                          (e) => {
                            n(e), r(e);
                          }
                        );
                      }))(e, i);
                    return [s];
                  }
                  if (e.isDirectory) {
                    const t = await (async (e, t) => {
                      const n = e.createReader(),
                        i = t + e.name + "/";
                      let r,
                        o = [];
                      do {
                        (r = await s(n, i)), (o = o.concat(r));
                      } while (r.length > 0);
                      return o;
                    })(e, i);
                    return t.push(e), t;
                  }
                }
              };
            let r = [],
              o = [];
            for (let t = 0, n = e.length; t < n; t++)
              o.push(e[t].webkitGetAsEntry());
            for (let e of o) {
              const t = await i(e);
              r = r.concat(t);
            }
            return r;
          };
          authenticateWithPuter = function () {
            if ("web" === this.env)
              return this.authToken
                ? new Promise((e) => {
                    e();
                  })
                : puter.puterAuthState.isPromptOpen
                ? new Promise((e, t) => {
                    puter.puterAuthState.resolver = { resolve: e, reject: t };
                  })
                : ((puter.puterAuthState.isPromptOpen = !0),
                  (puter.puterAuthState.authGranted = null),
                  new Promise((e, t) => {
                    if (puter.authToken) e();
                    else {
                      const n = new (pt())(e, t);
                      document.body.appendChild(n), n.open();
                    }
                  }));
          };
          launchApp = async function (e, t, n) {
            let s;
            e.includes("#(as)") && ([e, s] = e.split("#(as)"));
            const i = await this.#m({
              method: "launchApp",
              callback: n,
              parameters: { app_name: e, pseudonym: s, args: t },
            });
            return gt.from(i, this.context);
          };
          connectToInstance = async function (e) {
            const t = await this.#m({
              method: "connectToInstance",
              parameters: { app_name: e },
            });
            return gt.from(t, this.context);
          };
          parentApp() {
            return this.#o;
          }
          createWindow = function (e, t) {
            return new Promise((t) => {
              this.#f(
                "createWindow",
                (e) => {
                  t(e.window);
                },
                { options: e ?? {} }
              );
            });
          };
          menubar = function () {
            document
              .querySelectorAll("style.puter-stylesheet")
              .forEach(function (e) {
                e.remove();
              });
            const e = document.createElement("style");
            e.classList.add("puter-stylesheet"),
              (e.innerHTML =
                "\n        .--puter-menubar {\n            border-bottom: 1px solid #e9e9e9;\n            background-color: #fbf9f9;\n            padding-top: 3px;\n            padding-bottom: 2px;\n            display: inline-block;\n            position: fixed;\n            top: 0;\n            width: 100%;\n            margin: 0;\n            padding: 0;\n            height: 31px;\n            font-family: Arial, Helvetica, sans-serif;\n            font-size: 13px;\n            z-index: 9999;\n        }\n        \n        .--puter-menubar, .--puter-menubar * {\n            user-select: none;\n            -webkit-user-select: none;\n            cursor: default;\n        }\n        \n        .--puter-menubar .dropdown-item-divider>hr {\n            margin-top: 5px;\n            margin-bottom: 5px;\n            border-bottom: none;\n            border-top: 1px solid #00000033;\n        }\n        \n        .--puter-menubar>li {\n            display: inline-block;\n            padding: 10px 5px;\n        }\n        \n        .--puter-menubar>li>ul {\n            display: none;\n            z-index: 999999999999;\n            list-style: none;\n            background-color: rgb(233, 233, 233);\n            width: 200px;\n            border: 1px solid #e4ebf3de;\n            box-shadow: 0px 0px 5px #00000066;\n            padding-left: 6px;\n            padding-right: 6px;\n            padding-top: 4px;\n            padding-bottom: 4px;\n            color: #333;\n            border-radius: 4px;\n            padding: 2px;\n            min-width: 200px;\n            margin-top: 5px;\n            position: absolute;\n        }\n        \n        .--puter-menubar .menubar-item {\n            display: block;\n            line-height: 24px;\n            margin-top: -7px;\n            text-align: center;\n            border-radius: 3px;\n            padding: 0 5px;\n        }\n        \n        .--puter-menubar .menubar-item-open {\n            background-color: rgb(216, 216, 216);\n        }\n        \n        .--puter-menubar .dropdown-item {\n            padding: 5px;\n            padding: 5px 30px;\n            list-style-type: none;\n            user-select: none;\n            font-size: 13px;\n        }\n        \n        .--puter-menubar .dropdown-item-icon, .--puter-menubar .dropdown-item-icon-active {\n            pointer-events: none;\n            width: 18px;\n            height: 18px;\n            margin-left: -23px;\n            margin-bottom: -4px;\n            margin-right: 5px;\n        }\n        .--puter-menubar .dropdown-item-disabled .dropdown-item-icon{\n            display: inline-block !important;\n        }\n        .--puter-menubar .dropdown-item-disabled .dropdown-item-icon-active{\n            display: none !important;\n        }\n        .--puter-menubar .dropdown-item-icon-active {\n            display:none;\n        }\n        .--puter-menubar .dropdown-item:hover .dropdown-item-icon{\n            display: none;\n        }\n        .--puter-menubar .dropdown-item:hover .dropdown-item-icon-active{\n            display: inline-block;\n        }\n        .--puter-menubar .dropdown-item-hide-icon .dropdown-item-icon, .--puter-menubar .dropdown-item-hide-icon .dropdown-item-icon-active{\n            display: none !important;\n        }\n        .--puter-menubar .dropdown-item a {\n            color: #333;\n            text-decoration: none;\n        }\n        \n        .--puter-menubar .dropdown-item:hover, .--puter-menubar .dropdown-item:hover a {\n            background-color: rgb(59 134 226);\n            color: white;\n            border-radius: 4px;\n        }\n        \n        .--puter-menubar .dropdown-item-disabled, .--puter-menubar .dropdown-item-disabled:hover {\n            opacity: 0.5;\n            background-color: transparent;\n            color: initial;\n            cursor: initial;\n            pointer-events: none;\n        }\n        \n        .--puter-menubar .menubar * {\n            user-select: none;\n        }                \n        "),
              (
                document.head || document.getElementsByTagName("head")[0]
              ).appendChild(e),
              document.addEventListener("click", function (e) {
                if (e.target.classList.contains("dropdown-item-disabled"))
                  return !1;
                e.target.classList.contains("menubar-item") ||
                  (document
                    .querySelectorAll(".menubar-item.menubar-item-open")
                    .forEach(function (e) {
                      e.classList.remove("menubar-item-open");
                    }),
                  document
                    .querySelectorAll(".dropdown")
                    .forEach((e) => (e.style.display = "none")));
              }),
              window.addEventListener("blur", function (e) {
                document.querySelectorAll(".dropdown").forEach(function (e) {
                  e.style.display = "none";
                }),
                  document
                    .querySelectorAll(".menubar-item.menubar-item-open")
                    .forEach((e) => e.classList.remove("menubar-item-open"));
              }),
              document.querySelectorAll(".menubar-item").forEach((e) =>
                e.addEventListener("mousedown", function (e) {
                  document.querySelectorAll(".dropdown").forEach(function (e) {
                    e.style.display = "none";
                  }),
                    document
                      .querySelectorAll(".menubar-item.menubar-item-open")
                      .forEach(function (t) {
                        t != e.target &&
                          t.classList.remove("menubar-item-open");
                      }),
                    this.classList.contains("menubar-item-open")
                      ? document
                          .querySelectorAll(".menubar-item.menubar-item-open")
                          .forEach(function (e) {
                            e.classList.remove("menubar-item-open");
                          })
                      : e.target.classList.contains("dropdown-item") ||
                        (this.classList.add("menubar-item-open"),
                        (function (e) {
                          const t = [];
                          if (!e.parentNode) return t;
                          let n = e.parentNode.firstChild;
                          for (; n; )
                            1 === n.nodeType && n !== e && t.push(n),
                              (n = n.nextSibling);
                          return t;
                        })(this).forEach(function (e) {
                          e.style.display = "block";
                        }));
                })
              ),
              document
                .querySelectorAll(".--puter-menubar .menubar-item")
                .forEach((e) =>
                  e.addEventListener("mouseover", function (e) {
                    const t = document.querySelectorAll(
                      ".menubar-item.menubar-item-open"
                    );
                    t.length > 0 &&
                      t[0] !== e.target &&
                      e.target.dispatchEvent(new Event("mousedown"));
                  })
                );
          };
          on(e, t) {
            super.on(e, t),
              this.#e.includes(e) && this.#u.has(e) && t(this.#u.get(e));
          }
          #y = null;
          #b = null;
          showSpinner() {
            if (this.#d) return;
            if (!document.getElementById("puter-spinner-styles")) {
              const e = document.createElement("style");
              (e.id = "puter-spinner-styles"),
                (e.textContent =
                  "\n                .puter-loading-spinner {\n                    width: 50px;\n                    height: 50px;\n                    border: 5px solid #f3f3f3;\n                    border-top: 5px solid #3498db;\n                    border-radius: 50%;\n                    animation: spin 1s linear infinite;\n                    margin-bottom: 10px;\n                }\n    \n                .puter-loading-text {\n                    font-family: Arial, sans-serif;\n                    font-size: 16px;\n                    margin-top: 10px;\n                    text-align: center;\n                }\n    \n                @keyframes spin {\n                    0% { transform: rotate(0deg); }\n                    100% { transform: rotate(360deg); }\n                }\n    \n                .puter-loading-container {\n                    display: flex;\n                    flex-direction: column;\n                    align-items: center;\n                    justify-content: center;\n                    width: 120px; \n                    height: 120px; \n                    background: #ffffff; \n                    border-radius: 10px;\n                }\n            "),
                document.head.appendChild(e);
            }
            const e = document.createElement("div");
            e.classList.add("puter-loading-overlay"),
              Object.assign(e.style, {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                zIndex: "2147483647",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pointerEvents: "all",
              });
            const t = document.createElement("div");
            t.classList.add("puter-loading-container"),
              (t.innerHTML =
                '\n            <div class="puter-loading-spinner"></div>\n            <div class="puter-loading-text">Working...</div>\n        '),
              e.appendChild(t),
              document.body.appendChild(e),
              (this.#d = !0),
              (this.#y = Date.now()),
              (this.#p = setTimeout(() => {
                this.#p = null;
              }, 1e3));
          }
          hideSpinner() {
            if (!this.#d) return;
            this.#p && (clearTimeout(this.#p), (this.#p = null));
            const e = Date.now() - this.#y,
              t = Math.max(0, 1200 - e);
            t > 0
              ? (this.#b && clearTimeout(this.#b),
                (this.#b = setTimeout(() => {
                  this.#w();
                }, t)))
              : this.#w();
          }
          #w() {
            const e = document.querySelector(".puter-loading-overlay");
            e && e.parentNode?.removeChild(e),
              (this.#d = !1),
              (this.#y = null),
              (this.#b = null);
          }
          isWorkingActive() {
            return this.#d;
          }
        },
        yt = [
          "has_set_default_app_user_permissions",
          "window_sidebar_width",
          "sidebar_items",
          "menubar_style",
          "user_preferences.auto_arrange_desktop",
          "user_preferences.show_hidden_files",
          "user_preferences.language",
          "user_preferences.clock_visible",
          "has_seen_welcome_window",
        ];
      function bt(e, t) {
        let n = ((s = e), s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
          .replace(/\\\*/g, ".*")
          .replace(/\\\?/g, ".")
          .replace(/\\\[/g, "[")
          .replace(/\\\]/g, "]")
          .replace(/\\\^/g, "^");
        var s;
        return new RegExp("^" + n + "$").test(t);
      }
      const wt = class {
          MAX_KEY_SIZE = 1024;
          MAX_VALUE_SIZE = 409600;
          constructor(e) {
            (this.authToken = e.authToken),
              (this.APIOrigin = e.APIOrigin),
              (this.appID = e.appID),
              (this.gui_cached = new st.TeePromise()),
              (this.gui_cache_init = new st.TeePromise()),
              (async () => {
                await this.gui_cache_init, (this.gui_cache_init = null);
                const e = await fetch(`${this.APIOrigin}/drivers/call`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${this.authToken}`,
                    },
                    body: JSON.stringify({
                      interface: "puter-kvstore",
                      method: "get",
                      args: { key: yt },
                    }),
                  }),
                  t = await e.json(),
                  n = {};
                for (let e = 0; e < yt.length; e++) n[yt[e]] = t.result[e];
                this.gui_cached.resolve(n),
                  setTimeout(() => {
                    this.gui_cached = null;
                  }, 4e3);
              })();
          }
          setAuthToken(e) {
            this.authToken = e;
          }
          setAPIOrigin(e) {
            this.APIOrigin = e;
          }
          set = c(["key", "value"], "puter-kvstore", void 0, "set", {
            preprocess: (e) => {
              if (void 0 === e.key || null === e.key)
                throw {
                  message: "Key cannot be undefined",
                  code: "key_undefined",
                };
              if (e.key.length > this.MAX_KEY_SIZE)
                throw {
                  message:
                    "Key size cannot be larger than " + this.MAX_KEY_SIZE,
                  code: "key_too_large",
                };
              if (e.value && e.value.length > this.MAX_VALUE_SIZE)
                throw {
                  message:
                    "Value size cannot be larger than " + this.MAX_VALUE_SIZE,
                  code: "value_too_large",
                };
              return e;
            },
          });
          async get(...e) {
            return "string" == typeof e[0] &&
              yt.includes(e[0]) &&
              null !== this.gui_cached
              ? (this.gui_cache_init && this.gui_cache_init.resolve(),
                (await this.gui_cached)[e[0]])
              : await this.get_(...e);
          }
          get_ = c(["key"], "puter-kvstore", void 0, "get", {
            preprocess: (e) => {
              if (e.key.length > this.MAX_KEY_SIZE)
                throw {
                  message:
                    "Key size cannot be larger than " + this.MAX_KEY_SIZE,
                  code: "key_too_large",
                };
              return e;
            },
            transform: (e) => e,
          });
          incr = async (...e) => {
            let t = {};
            if (!e || 0 === e.length)
              throw {
                message: "Arguments are required",
                code: "arguments_required",
              };
            if (
              ((t.key = e[0]),
              (t.amount = e[1] ?? 1),
              t.key.length > this.MAX_KEY_SIZE)
            )
              throw {
                message: "Key size cannot be larger than " + this.MAX_KEY_SIZE,
                code: "key_too_large",
              };
            return c(["key"], "puter-kvstore", void 0, "incr").call(this, t);
          };
          decr = async (...e) => {
            let t = {};
            if (!e || 0 === e.length)
              throw {
                message: "Arguments are required",
                code: "arguments_required",
              };
            if (
              ((t.key = e[0]),
              (t.amount = e[1] ?? 1),
              t.key.length > this.MAX_KEY_SIZE)
            )
              throw {
                message: "Key size cannot be larger than " + this.MAX_KEY_SIZE,
                code: "key_too_large",
              };
            return c(["key"], "puter-kvstore", void 0, "decr").call(this, t);
          };
          del = c(["key"], "puter-kvstore", void 0, "del", {
            preprocess: (e) => {
              if (e.key.length > this.MAX_KEY_SIZE)
                throw {
                  message:
                    "Key size cannot be larger than " + this.MAX_KEY_SIZE,
                  code: "key_too_large",
                };
              return e;
            },
          });
          list = async (...e) => {
            let t,
              n = {},
              s = !1;
            return (
              (e && 1 === e.length && !0 === e[0]) ||
              (e && 2 === e.length && !0 === e[1])
                ? ((n = {}), (s = !0))
                : (n = { as: "keys" }),
              ((e && 1 === e.length && "string" == typeof e[0]) ||
                (e &&
                  2 === e.length &&
                  "string" == typeof e[0] &&
                  !0 === e[1])) &&
                (t = e[0]),
              c([], "puter-kvstore", void 0, "list", {
                transform: (e) =>
                  t
                    ? s
                      ? e.filter((e) => bt(t, e.key))
                      : e.filter((e) => bt(t, e))
                    : e,
              }).call(this, n)
            );
          };
          flush = c([], "puter-kvstore", void 0, "flush");
          clear = this.flush;
        },
        vt = class {
          constructor(e) {
            (this.authToken = e.authToken),
              (this.APIOrigin = e.APIOrigin),
              (this.appID = e.appID);
          }
          setAuthToken(e) {
            this.authToken = e;
          }
          setAPIOrigin(e) {
            this.APIOrigin = e;
          }
          img2txt = async (...e) => {
            let t = {},
              n = !1;
            if (!e)
              throw {
                message: "Arguments are required",
                code: "arguments_required",
              };
            if (
              (("string" == typeof e[0] || e[0] instanceof Blob) &&
                (t.source = e[0]),
              e[0].source instanceof Blob && (t.source = await d(e[0].source)),
              t.source.length > this.MAX_INPUT_SIZE)
            )
              throw {
                message: "Input size cannot be larger than 10485760",
                code: "input_too_large",
              };
            return (
              (("boolean" == typeof e[1] && !0 === e[1]) ||
                ("boolean" == typeof e[2] && !0 === e[2]) ||
                ("boolean" == typeof e[3] && !0 === e[3])) &&
                (n = !0),
              await c(["source"], "puter-ocr", "aws-textract", "recognize", {
                test_mode: n ?? !1,
                transform: async (e) => {
                  let t = "";
                  for (let n = 0; n < e?.blocks?.length; n++)
                    "text/textract:LINE" === e.blocks[n].type &&
                      (t += e.blocks[n].text + "\n");
                  return t;
                },
              }).call(this, t)
            );
          };
          txt2speech = async (...e) => {
            let t = {},
              n = !1;
            if (!e)
              throw {
                message: "Arguments are required",
                code: "arguments_required",
              };
            if (
              ("string" == typeof e[0] && (t = { text: e[0] }),
              e[1] && "string" == typeof e[1] && (t.language = e[1]),
              t.text.length > this.MAX_INPUT_SIZE)
            )
              throw {
                message: "Input size cannot be larger than 3000",
                code: "input_too_large",
              };
            return (
              (("boolean" == typeof e[1] && !0 === e[1]) ||
                ("boolean" == typeof e[2] && !0 === e[2]) ||
                ("boolean" == typeof e[3] && !0 === e[3])) &&
                (n = !0),
              await c(["source"], "puter-tts", "aws-polly", "synthesize", {
                responseType: "blob",
                test_mode: n ?? !1,
                transform: async (e) => {
                  const t = await u(e),
                    n = new Audio(t);
                  return (n.toString = () => t), (n.valueOf = () => t), n;
                },
              }).call(this, t)
            );
          };
          chat = async (...e) => {
            let t = {},
              n = {},
              s = !1,
              i = "openai-completion";
            if (!e)
              throw {
                message: "Arguments are required",
                code: "arguments_required",
              };
            if (
              ("string" == typeof e[0] &&
                (t = { messages: [{ content: e[0] }] }),
              "string" != typeof e[0] || (e[1] && "boolean" != typeof e[1]))
            )
              if (
                "string" == typeof e[0] &&
                ("string" == typeof e[1] || e[1] instanceof File)
              )
                e[1] instanceof File && (e[1] = await d(e[1])),
                  (t = {
                    vision: !0,
                    messages: [
                      { content: [e[0], { image_url: { url: e[1] } }] },
                    ],
                  });
              else if ("string" == typeof e[0] && Array.isArray(e[1])) {
                for (let t = 0; t < e[1].length; t++)
                  e[1][t] = { image_url: { url: e[1][t] } };
                t = { vision: !0, messages: [{ content: [e[0], ...e[1]] }] };
              } else Array.isArray(e[0]) && (t = { messages: e[0] });
            else t = { messages: [{ content: e[0] }] };
            (("boolean" == typeof e[1] && !0 === e[1]) ||
              ("boolean" == typeof e[2] && !0 === e[2]) ||
              ("boolean" == typeof e[3] && !0 === e[3])) &&
              (s = !0);
            const r = (e) =>
              "object" == typeof e && !Array.isArray(e) && null !== e;
            for (let t = 0; t < e.length; t++)
              if (r(e[t])) {
                n = e[t];
                break;
              }
            n.model && (t.model = n.model),
              ("claude-3-5-sonnet" !== t.model && "claude" !== t.model) ||
                (t.model = "claude-3-5-sonnet-latest"),
              "mistral" === t.model && (t.model = "mistral-large-latest"),
              "groq" === t.model && (t.model = "llama3-8b-8192"),
              "deepseek" === t.model && (t.model = "deepseek-chat"),
              t.model && "gpt-4o" !== t.model && "gpt-4o-mini" !== t.model
                ? "claude-3-haiku-20240307" === t.model ||
                  "claude-3-5-sonnet-20240620" === t.model ||
                  "claude-3-5-sonnet-20241022" === t.model ||
                  "claude-3-5-sonnet-latest" === t.model
                  ? (i = "claude")
                  : "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo" === t.model ||
                    "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo" ===
                      t.model ||
                    "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo" ===
                      t.model ||
                    "google/gemma-2-27b-it" === t.model
                  ? (i = "together-ai")
                  : "mistral-large-latest" === t.model ||
                    "codestral-latest" === t.model
                  ? (i = "mistral")
                  : [
                      "distil-whisper-large-v3-en",
                      "gemma2-9b-it",
                      "gemma-7b-it",
                      "llama-3.1-70b-versatile",
                      "llama-3.1-8b-instant",
                      "llama3-70b-8192",
                      "llama3-8b-8192",
                      "llama3-groq-70b-8192-tool-use-preview",
                      "llama3-groq-8b-8192-tool-use-preview",
                      "llama-guard-3-8b",
                      "mixtral-8x7b-32768",
                      "whisper-large-v3",
                    ].includes(t.model)
                  ? (i = "groq")
                  : "grok-beta" === t.model
                  ? (i = "xai")
                  : "deepseek-chat" === t.model ||
                    "deepseek-reasoner" === t.model
                  ? (i = "deepseek")
                  : "gemini-1.5-flash" === t.model ||
                    "gemini-2.0-flash" === t.model
                  ? (i = "gemini")
                  : t.model.startsWith("openrouter:") && (i = "openrouter")
                : (i = "openai-completion"),
              void 0 !== n.stream &&
                "boolean" == typeof n.stream &&
                (t.stream = n.stream);
            const o = ["tools", "response"];
            for (const e of o) n[e] && (t[e] = n[e]);
            return await c(
              ["messages"],
              "puter-chat-completion",
              i,
              "complete",
              {
                test_mode: s ?? !1,
                transform: async (e) => (
                  (e.toString = () => e.message?.content),
                  (e.valueOf = () => e.message?.content),
                  e
                ),
              }
            ).call(this, t);
          };
          txt2img = async (...e) => {
            let t = {},
              n = !1;
            if (!e)
              throw {
                message: "Arguments are required",
                code: "arguments_required",
              };
            return (
              "string" == typeof e[0] && (t = { prompt: e[0] }),
              "boolean" == typeof e[1] && !0 === e[1] && (n = !0),
              await c(
                ["prompt"],
                "puter-image-generation",
                void 0,
                "generate",
                {
                  responseType: "blob",
                  test_mode: n ?? !1,
                  transform: async (e) => {
                    let t = new Image();
                    return (
                      (t.src = await u(e)),
                      (t.toString = () => t.src),
                      (t.valueOf = () => t.src),
                      t
                    );
                  },
                }
              ).call(this, t)
            );
          };
        },
        _t = class {
          #r = 1;
          constructor(e) {
            (this.authToken = e.authToken),
              (this.APIOrigin = e.APIOrigin),
              (this.appID = e.appID);
          }
          setAuthToken(e) {
            this.authToken = e;
          }
          setAPIOrigin(e) {
            this.APIOrigin = e;
          }
          signIn = () =>
            new Promise((e, t) => {
              let n = this.#r++;
              var s = screen.width / 2 - 300,
                i = screen.height / 2 - 300;
              window.open(
                puter.defaultGUIOrigin +
                  "/action/sign-in?embedded_in_popup=true&msg_id=" +
                  n +
                  (window.crossOriginIsolated
                    ? "&cross_origin_isolated=true"
                    : ""),
                "Puter",
                "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=600, height=600, top=" +
                  i +
                  ", left=" +
                  s
              ),
                window.addEventListener("message", function (s) {
                  s.data.msg_id == n &&
                    (delete s.data.msg_id,
                    delete s.data.msg,
                    s.data.success
                      ? (puter.setAuthToken(s.data.token), e(s.data))
                      : t(s.data),
                    window.removeEventListener("message", this));
                });
            });
          isSignedIn = () => !!puter.authToken;
          getUser = function (...e) {
            let t;
            return (
              (t =
                "object" == typeof e[0] && null !== e[0]
                  ? e[0]
                  : { success: e[0], error: e[1] }),
              new Promise((e, n) => {
                const i = s("/whoami", puter.APIOrigin, puter.authToken, "get");
                r(i, t.success, t.error, e, n), i.send();
              })
            );
          };
          signOut = () => {
            puter.resetAuthToken();
          };
          async whoami() {
            const e = await fetch(this.APIOrigin + "/whoami", {
              headers: { Authorization: `Bearer ${this.authToken}` },
            });
            return await e.json();
          }
        },
        At = "9a9c83a4-7897-43a0-93b9-53217b84fde6";
      class kt {
        #v = 1;
        constructor() {
          this.callbacks = new Map();
        }
        register_callback(e) {
          const t = this.#v++;
          return this.callbacks.set(t, e), t;
        }
        attach_to_source(e) {
          e.addEventListener("message", (e) => {
            const { data: t } = e;
            if (t && "object" == typeof t && t.$SCOPE === At) {
              const { id: e, args: n } = t,
                s = this.callbacks.get(e);
              s && s(...n);
            }
          });
        }
      }
      class It {
        constructor({ callbackManager: e }) {
          this.callbackManager = e;
        }
        dehydrate(e) {
          return this.dehydrate_value_(e);
        }
        dehydrate_value_(e) {
          if ("function" == typeof e) {
            const t = this.callbackManager.register_callback(e);
            return { $SCOPE: At, id: t };
          }
          if (Array.isArray(e)) return e.map(this.dehydrate_value_.bind(this));
          if ("object" == typeof e && null !== e) {
            const t = {};
            for (const n in e) t[n] = this.dehydrate_value_(e[n]);
            return t;
          }
          return e;
        }
      }
      class xt {
        constructor({ target: e }) {
          this.target = e;
        }
        hydrate(e) {
          return this.hydrate_value_(e);
        }
        hydrate_value_(e) {
          if (e && "object" == typeof e && e.$SCOPE === At) {
            const { id: t } = e;
            return (...e) => {
              this.target.postMessage({ $SCOPE: At, id: t, args: e }, "*");
            };
          }
          if (Array.isArray(e)) return e.map(this.hydrate_value_.bind(this));
          if ("object" == typeof e && null !== e) {
            const t = {};
            for (const n in e) t[n] = this.hydrate_value_(e[n]);
            return t;
          }
          return e;
        }
      }
      class Tt {
        constructor() {
          this.rpc = new Et();
        }
      }
      class Et {
        constructor() {
          (this.callbackManager = new kt()),
            this.callbackManager.attach_to_source(window);
        }
        getDehydrator() {
          return new It({ callbackManager: this.callbackManager });
        }
        getHydrator({ target: e }) {
          return new xt({ target: e });
        }
        registerCallback(e) {
          return this.callbackManager.register_callback(e);
        }
        send(e, t, ...n) {
          e.postMessage({ $SCOPE: At, id: t, args: n }, "*");
        }
      }
      class St {
        constructor({ context: e }) {
          (this.context = e),
            (this.response_handlers = this.constructor.response_handlers);
        }
        static response_handlers = {
          "application/x-ndjson": async (e) =>
            (async function* (e) {
              const t = e.getReader();
              let n, s;
              for (; !s && (({ value: n, done: s } = await t.read()), !s); ) {
                const e = new TextDecoder().decode(n).split("\n");
                for (const t of e) "" !== t.trim() && (yield JSON.parse(t));
              }
            })(e.body),
          "application/json": async (e) => await e.json(),
          "application/octet-stream": async (e) => await e.blob(),
        };
        async call({ driver: e, method_name: t, parameters: n }) {
          const s = await fetch(`${this.context.APIOrigin}/drivers/call`, {
              headers: {
                Authorization: `Bearer ${this.context.authToken}`,
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify({
                interface: e.iface_name,
                ...(e.service_name ? { service: e.service_name } : {}),
                method: t,
                args: n,
              }),
            }),
            i = s.headers.get("content-type").split(";")[0].trim(),
            r = this.response_handlers[i];
          if (!r) {
            const e = `unrecognized content type: ${i}`;
            throw (
              (console.error(e),
              console.error("creating blob so dev tools shows response..."),
              await s.blob(),
              new Error(e))
            );
          }
          return await r(s);
        }
      }
      class Pt {
        constructor({
          iface: e,
          iface_name: t,
          service_name: n,
          call_backend: s,
        }) {
          (this.iface = e),
            (this.iface_name = t),
            (this.service_name = n),
            (this.call_backend = s);
        }
        async call(e, t) {
          return await this.call_backend.call({
            driver: this,
            method_name: e,
            parameters: t,
          });
        }
      }
      const Ot = class {
          constructor(e) {
            (this.authToken = e.authToken),
              (this.APIOrigin = e.APIOrigin),
              (this.appID = e.appID),
              (this.drivers_ = {}),
              (this.context = {}),
              Object.defineProperty(this.context, "authToken", {
                get: () => this.authToken,
              }),
              Object.defineProperty(this.context, "APIOrigin", {
                get: () => this.APIOrigin,
              });
          }
          setAuthToken(e) {
            this.authToken = e;
          }
          setAPIOrigin(e) {
            this.APIOrigin = e;
          }
          async list() {
            const e = await fetch(`${this.APIOrigin}/lsmod`, {
              headers: { Authorization: "Bearer " + this.authToken },
              method: "POST",
            });
            return (await e.json()).interfaces;
          }
          async get(e, t) {
            const n = `${e}:${t}`;
            if (this.drivers_[n]) return this.drivers_[n];
            const s = await this.list();
            if (!s[e]) throw new Error(`Interface ${e} not found`);
            return (this.drivers_[n] = new Pt({
              call_backend: new St({ context: this.context }),
              iface: s[e],
              iface_name: e,
              service_name: t,
            }));
          }
          async call(e, t, n, s) {
            const i = await this.get(e, t);
            return await i.call(n, s);
          }
        },
        Dt = {
          id: "f485f1ba-de07-422c-8c4b-c2da057d4a44",
          uid: "f485f1ba-de07-422c-8c4b-c2da057d4a44",
          is_dir: !0,
          immutable: !0,
          name: "FromParentWindow",
        };
      class Ct extends et().concepts.Service {
        async _init() {
          const e = this._.context.services,
            t = this._.context.util;
          e.get("xd-incoming").register_tagged_listener("puter-fs", (e) => {
            t.rpc.send(e.source, e.data.$callback, [Dt]);
          });
        }
      }
      const Mt = {
        id: "f485f1ba-de07-422c-8c4b-c2da057d4a44",
        uid: "f485f1ba-de07-422c-8c4b-c2da057d4a44",
        is_dir: !0,
        immutable: !0,
        name: "Test",
      };
      class Lt extends et().AdvancedBase {
        constructor({ rpc: e, messageTarget: t }) {
          super(), (this.rpc = e), (this.messageTarget = t);
        }
        static IMPLEMENTS = {
          [tt]: {
            stat: async function (e) {
              return Mt;
            },
            readdir: async function (e) {
              const t = new (et().libs.promise.TeePromise)(),
                n = this.rpc.registerCallback((e) => {
                  t.resolve(e);
                });
              return (
                this.messageTarget.postMessage(
                  { $: "puter-fs", $callback: n, op: "readdir", args: e },
                  "*"
                ),
                await t
              );
            },
          },
        };
      }
      class Rt extends et().concepts.Service {
        static PROPERTIES = {};
        static DEPENDS = ["api-access"];
        static HOOKS = [
          {
            service: "api-access",
            event: "update",
            description:
              "\n                re-initialize the socket connection whenever the\n                authentication token or API origin is changed.\n            ",
            async do() {
              this.initializeSocket();
            },
          },
        ];
        _init() {
          this._.context.env, this.init_top_fs_(), this.initializeSocket();
        }
        init_app_fs_() {
          (this.fs_nocache_ = new Lt({
            messageTarget: window.parent,
            rpc: this._.context.util.rpc,
          }).as(tt)),
            (this.filesystem = this.fs_nocache_);
        }
        init_top_fs_() {
          const e = this._.context.services.get("api-access").get_api_info();
          (this.fs_nocache_ = new ot({ api_info: e }).as(tt)),
            (this.fs_cache_ = new rt({ delegate: this.fs_nocache_ }).as(tt)),
            (this.fs_proxy_ = new nt({ delegate: this.fs_nocache_ })),
            (this.filesystem = this.fs_proxy_.as(tt));
        }
        cache_on() {
          this.fs_proxy_.delegate = this.fs_cache_;
        }
        cache_off() {
          this.fs_proxy_.delegate = this.fs_nocache_;
        }
        async initializeSocket() {
          this.socket && this.socket.disconnect();
          const e = this._.context.services.get("api-access").get_api_info();
          void 0 !== e.api_origin &&
            ((this.socket = Le(e.api_origin, {
              auth: { auth_token: e.auth_token },
            })),
            this.bindSocketEvents());
        }
        bindSocketEvents() {
          this.socket.on("connect", () => {
            puter.debugMode &&
              console.log("FileSystem Socket: Connected", this.socket.id);
          }),
            this.socket.on("disconnect", () => {
              puter.debugMode && console.log("FileSystem Socket: Disconnected");
            }),
            this.socket.on("reconnect", (e) => {
              puter.debugMode &&
                console.log("FileSystem Socket: Reconnected", this.socket.id);
            }),
            this.socket.on("reconnect_attempt", (e) => {
              puter.debugMode &&
                console.log("FileSystem Socket: Reconnection Attemps", e);
            }),
            this.socket.on("reconnect_error", (e) => {
              puter.debugMode &&
                console.log("FileSystem Socket: Reconnection Error", e);
            }),
            this.socket.on("reconnect_failed", () => {
              puter.debugMode &&
                console.log("FileSystem Socket: Reconnection Failed");
            }),
            this.socket.on("error", (e) => {
              puter.debugMode && console.error("FileSystem Socket Error:", e);
            });
        }
      }
      const { TTopics: Ut } = et().traits;
      class Bt extends et().concepts.Service {
        static TOPICS = ["update"];
        static PROPERTIES = {
          auth_token: {
            post_set(e) {
              this.as(Ut).pub("update");
            },
          },
          api_origin: {
            post_set() {
              this.as(Ut).pub("update");
            },
          },
        };
        get_api_info() {
          const e = this,
            t = {};
          return (
            [
              ["auth_token", "auth_token"],
              ["authToken", "auth_token"],
              ["APIOrigin", "api_origin"],
              ["api_origin", "api_origin"],
            ].forEach(([n, s]) => {
              Object.defineProperty(t, n, { get: () => e[s], set: (t) => e });
            }),
            t
          );
        }
      }
      const Nt = et().libs.promise.TeePromise;
      class Ft extends et().concepts.Service {
        _construct() {
          (this.filter_listeners_ = []), (this.tagged_listeners_ = {});
        }
        _init() {
          window.addEventListener("message", async (e) => {
            for (const t of this.filter_listeners_) {
              const n = new Nt();
              if ((t(e, n), await n)) return;
            }
            const t = e.data,
              n = t.$;
            if (n && this.tagged_listeners_[n])
              for (const s of this.tagged_listeners_[n])
                s({ data: t, source: e.source });
          });
        }
        register_filter_listener(e) {
          this.filter_listeners_.push(e);
        }
        register_tagged_listener(e, t) {
          this.tagged_listeners_[e] || (this.tagged_listeners_[e] = []),
            this.tagged_listeners_[e].push(t);
        }
      }
      class jt extends et().concepts.Service {
        _init() {
          if (window.when_puter_happens && (!puter || "gui" === puter.env)) {
            Array.isArray(window.when_puter_happens) ||
              (window.when_puter_happens = [window.when_puter_happens]);
            for (const e of window.when_puter_happens)
              e({ context: this._.context });
          }
        }
      }
      class qt {
        constructor(e, t) {
          (this.context = e), (this.parameters = t), this._init();
        }
        _init() {
          let e = new URL(location.href).searchParams.get("enabled_logs");
          e || (e = ""), (e = e.split(";"));
          for (const t of e) "" !== t && this.context.puter.log.on(t);
          window.addEventListener("message", async (e) => {
            e.source === window.parent &&
              e.data.$ &&
              "puterjs-debug" === e.data.$ &&
              (console.log("Got a puter.js debug event!", e.data),
              "log.on" === e.data.cmd &&
                (console.log("Got instruction to turn logs on!"),
                this.context.puter.log.on(e.data.category)));
          });
        }
      }
      const zt = new TextDecoder(),
        Wt = new TextEncoder(),
        Xt = {
          1: "Reason unspecified or unknown. Returning a more specific reason should be preferred.",
          3: "Unexpected stream closure due to a network error.",
          65: "Stream creation failed due to invalid information. This could be sent if the destination was a reserved address or the port is invalid.",
          66: "Stream creation failed due to an unreachable destination host. This could be sent if the destination is an domain which does not resolve to anything.",
          67: "Stream creation timed out due to the destination server not responding.",
          68: "Stream creation failed due to the destination server refusing the connection.",
          71: "TCP data transfer timed out.",
          72: "Stream destination address/domain is intentionally blocked by the proxy server.",
          73: "Connection throttled by the server.",
        };
      function Vt(e) {
        let t = 5;
        switch (e.packetType) {
          case 1:
            (e.hostEncoded = Wt.encode(e.hostname)),
              (t += 3 + e.hostEncoded.length);
            break;
          case 2:
            t += e.payload.byteLength;
            break;
          case 3:
            t += 4;
            break;
          case 4:
            t += 1;
            break;
          case 5:
            (t += 2),
              e.password && (t += 6),
              e.puterAuth &&
                ((e.passwordEncoded = Wt.encode(e.puterAuth)),
                (t += 8 + e.passwordEncoded.length));
            break;
          default:
            throw new Error("Not supported");
        }
        let n = new Uint8Array(t);
        const s = new DataView(n.buffer);
        switch (
          (s.setUint8(0, e.packetType),
          s.setUint32(1, e.streamID, !0),
          e.packetType)
        ) {
          case 1:
            s.setUint8(5, e.streamType),
              s.setUint16(6, e.port, !0),
              n.set(e.hostEncoded, 8);
            break;
          case 2:
            n.set(e.payload, 5);
            break;
          case 3:
            s.setUint32(5, e.remainingBuffer, !0);
            break;
          case 4:
            s.setUint8(5, e.reason);
            break;
          case 5:
            s.setUint8(5, 2),
              s.setUint8(6, 0),
              e.password &&
                (s.setUint8(7, 2), s.setUint32(8, 1, !0), s.setUint8(12, 0)),
              e.puterAuth &&
                (s.setUint8(7, 2),
                s.setUint32(8, 5 + e.passwordEncoded.length, !0),
                s.setUint8(12, 0),
                s.setUint16(13, e.passwordEncoded.length, !0),
                n.set(e.passwordEncoded, 15));
        }
        return n;
      }
      const Kt = new TextEncoder();
      let Gt,
        Yt = { server: "wss://puter.cafe/", handler: void 0 };
      class Ht extends ft {
        _events = new Map();
        _streamID;
        constructor(e, t) {
          super([
            "data",
            "drain",
            "open",
            "error",
            "close",
            "tlsdata",
            "tlsopen",
          ]);
          const n = {
            dataCallBack: (e) => {
              this.emit("data", e);
            },
            closeCallBack: (e) => {
              if (2 !== e)
                return (
                  this.emit("error", new Error(Xt[e])),
                  void this.emit("close", !0)
                );
              this.emit("close", !1);
            },
          };
          (this._streamID = Yt.handler.register(e, t, n)),
            setTimeout(() => {
              this.emit("open", void 0);
            }, 0);
        }
        addListener(...e) {
          this.on(...e);
        }
        write(e, t) {
          if (e.buffer) Yt.handler.write(this._streamID, e), t && t();
          else if (e.resize)
            e.write(this._streamID, new Uint8Array(e)), t && t();
          else {
            if ("string" != typeof e)
              throw new Error(
                "Invalid data type (not TypedArray, ArrayBuffer or String!!)"
              );
            Yt.handler.write(this._streamID, Kt.encode(e)), t && t();
          }
        }
        close() {
          Yt.handler.close(this._streamID);
        }
      }
      class Qt extends Ht {
        constructor(...e) {
          super(...e),
            (async () => {
              Gt ||
                ((Gt = await import("https://puter-net.b-cdn.net/rustls.js")),
                await Gt.default("https://puter-net.b-cdn.net/rustls.wasm"));
              let t = !1;
              const n = new ReadableStream({
                  start: (e) => {
                    super.on("data", (t) => {
                      e.enqueue(t.buffer);
                    }),
                      super.on("close", () => {
                        t || e.close();
                      });
                  },
                  pull: (e) => {},
                  cancel: () => {
                    t = !0;
                  },
                }),
                s = new WritableStream({
                  write: (e) => {
                    super.write(e);
                  },
                  abort: () => {
                    console.log("hello"), super.close();
                  },
                  close: () => {
                    super.close();
                  },
                });
              let i, r;
              try {
                const t = await Gt.connect_tls(n, s, e[0]);
                (i = t.read), (r = t.write);
              } catch (e) {
                return void this.emit(
                  "error",
                  new Error("TLS Handshake failed: " + e)
                );
              }
              this.writer = r.getWriter();
              let o = i.getReader(),
                a = !1;
              this.emit("tlsopen", void 0);
              try {
                for (; !a; ) {
                  const { done: e, value: t } = await o.read();
                  (a = e), a || this.emit("tlsdata", t);
                }
              } catch (e) {
                this.emit("error", e);
              }
            })();
        }
        on(e, t) {
          return "data" === e || "open" === e
            ? super.on("tls" + e, t)
            : super.on(e, t);
        }
        write(e, t) {
          if (e.buffer) this.writer.write(e.slice(0).buffer).then(t);
          else if (e.resize) this.writer.write(e).then(t);
          else {
            if ("string" != typeof e)
              throw new Error(
                "Invalid data type (not TypedArray, ArrayBuffer or String!!)"
              );
            this.writer.write(e).then(t);
          }
        }
      }
      class Zt {
        _ws;
        _nextStreamID = 1;
        _bufferMax;
        streamMap = new Map();
        constructor(e, t) {
          const n = () => {
            (this._ws = new WebSocket(e)),
              (this._ws.binaryType = "arraybuffer"),
              (this._ws.onmessage = (e) => {
                const s = (function (e) {
                  const t = new DataView(e.buffer, e.byteOffset),
                    n = t.getUint8(0),
                    s = t.getUint32(1, !0);
                  switch (n) {
                    case 1:
                      return {
                        packetType: n,
                        streamID: s,
                        streamType: t.getUint8(5),
                        port: t.getUint16(6, !0),
                        hostname: zt.decode(e.subarray(8, e.length)),
                      };
                    case 2:
                      return {
                        packetType: n,
                        streamID: s,
                        payload: e.subarray(5, e.length),
                      };
                    case 3:
                      return {
                        packetType: n,
                        streamID: s,
                        remainingBuffer: t.getUint32(5, !0),
                      };
                    case 4:
                      return {
                        packetType: n,
                        streamID: s,
                        reason: t.getUint8(5),
                      };
                    case 5:
                      const i = {};
                      (i.version_major = t.getUint8(5)),
                        (i.version_minor = t.getUint8(6));
                      let r = 7;
                      for (; r < e.length; ) {
                        const n = t.getUint8(r),
                          s = t.getUint32(r + 1, !0),
                          o = e.subarray(r + 5, r + 5 + s);
                        (i[n] = o), (r += 5 + s);
                      }
                      return { packetType: n, streamID: s, infoObj: i };
                  }
                })(new Uint8Array(e.data));
                switch (s.packetType) {
                  case 2:
                    this.streamMap
                      .get(s.streamID)
                      .dataCallBack(s.payload.slice(0));
                    break;
                  case 3:
                    if (0 === s.streamID)
                      return (
                        (this._bufferMax = s.remainingBuffer),
                        void (this._ws.onclose = () => {
                          setTimeout(n(), 1e3);
                        })
                      );
                    (this.streamMap.get(s.streamID).buffer = s.remainingBuffer),
                      this._continue();
                    break;
                  case 4:
                    0 !== s.streamID &&
                      this.streamMap.get(s.streamID).closeCallBack(s.reason);
                    break;
                  case 5:
                    t &&
                      this._ws.send(
                        Vt({ packetType: 5, streamID: 0, puterAuth: t })
                      );
                }
              });
          };
          n();
        }
        _continue(e) {
          const t = this.streamMap.get(e).queue;
          for (let n = 0; n < t.length; n++) this.write(e, t.shift());
        }
        register(e, t, n) {
          const s = this._nextStreamID++;
          return (
            this.streamMap.set(s, {
              queue: [],
              streamID: s,
              buffer: this._bufferMax,
              dataCallBack: n.dataCallBack,
              closeCallBack: n.closeCallBack,
            }),
            this._ws.send(
              Vt({
                packetType: 1,
                streamType: 1,
                streamID: s,
                hostname: e,
                port: t,
              })
            ),
            s
          );
        }
        write(e, t) {
          const n = this.streamMap.get(e);
          n.buffer > 0
            ? (n.buffer--,
              this._ws.send(Vt({ packetType: 2, streamID: e, payload: t })))
            : n.queue.push(t);
        }
        close(e) {
          this._ws.send(Vt({ packetType: 4, streamID: e, reason: 2 }));
        }
      }
      class Jt extends ft {
        constructor({ options: e, callback: t }) {
          super(["data", "end", "error"]),
            (this.options = e),
            (this.callback = t),
            (this.buffer = []),
            (this.onData_ = null);
        }
        set onData(e) {
          (this.onData_ = e),
            this.buffer.length &&
              (this.buffer.forEach((e) => this.onData_(e)), (this.buffer = []));
        }
        write(e) {
          this.onData_ ? this.onData_(e) : this.buffer.push(e);
        }
        end() {
          this.emit("end");
        }
      }
      const $t = ({ Socket: e, DEFAULT_PORT: t }) => {
        const n = {
          request: (n, s) => {
            const i = new TextEncoder(),
              r = new TextDecoder();
            let o;
            const a = new Jt(["data", "end", "error"]),
              c = new ft(["data", "end", "error"]);
            (c.headers = {}), (c.statusCode = null), (c.statusMessage = "");
            let l = "",
              h = 0;
            const u = {
                data: (e) => {
                  const t = parseInt(c.headers["content-length"], 10);
                  if (l) {
                    const t = i.encode(l);
                    (e = new Uint8Array([...t, ...e])), (l = "");
                  }
                  (h += e.length),
                    c.emit("data", r.decode(e)),
                    h >= t && o.close();
                },
              },
              d = {
                data: (e) => {
                  throw new Error("Chunked transfer encoding not implemented");
                },
              },
              p = {
                data: (e) => {
                  if (l) {
                    const t = i.encode(l);
                    (e = new Uint8Array([...t, ...e])), (l = "");
                  }
                  c.emit("data", r.decode(e));
                },
              };
            let f = null,
              g = !1;
            const m = {
                data: (e) => {
                  (e = r.decode(e)), (l += e);
                  const t = l.indexOf("\r\n\r\n");
                  if (-1 === t) return;
                  const n = l.substring(0, t).split("\r\n");
                  l = l.substring(t + 4);
                  const [i, o, ...a] = n[0].split(" ");
                  (c.statusCode = parseInt(o, 10)),
                    (c.statusMessage = a.join(" "));
                  for (let e = 1; e < n.length; e++) {
                    const [t, ...s] = n[e].split(":");
                    t &&
                      (c.headers[t.toLowerCase().trim()] = s.join(":").trim());
                  }
                  if (g)
                    if ("chunked" === c.headers["transfer-encoding"]) f = d;
                    else {
                      if (c.headers["transfer-encoding"])
                        throw new Error("Unsupported transfer encoding");
                      if (!c.headers["content-length"])
                        throw new Error(
                          "No content length or transfer encoding"
                        );
                      f = u;
                    }
                  else f = p;
                  (b = y), s(c);
                },
              },
              y = {
                data: (e) => {
                  f.data(e);
                },
              };
            let b = m;
            const w = n.method || "GET",
              v = n.path || "/",
              _ = n.headers || {};
            (_.Host = n.hostname),
              _.Connection
                ? "close" !== _.Connection && (g = !0)
                : (_.Connection = "close");
            let A = `${w} ${v} HTTP/1.1\r\n`;
            for (const [e, t] of Object.entries(_)) A += `${e}: ${t}\r\n`;
            let k = [];
            n.data && k.push(n.data), (o = new e(n.hostname, n.port ?? t));
            const I = new (et().libs.promise.TeePromise)(),
              x = new (et().libs.promise.TeePromise)();
            (async () => {
              await I,
                (a.onData = (e) => {
                  "string" == typeof e && (e = i.encode(e)), k.push(e);
                }),
                await x,
                k.length &&
                  (A += `Content-Length: ${k.reduce(
                    (e, t) => e + t.length,
                    0
                  )}\r\n`),
                o.write(i.encode(A)),
                o.write(i.encode("\r\n")),
                k.forEach((e) => o.write(e));
            })(),
              a.on("end", () => {
                x.resolve();
              }),
              o.on("data", (e) => {
                console.log("data event", e), b.data(e);
              }),
              o.on("open", () => {
                I.resolve();
              }),
              o.on("error", (e) => {
                a.emit("error", e);
              });
            let T = !1;
            return (
              o.on("close", () => {
                if (T) console.error("close event after closed");
                else {
                  if (((T = !0), l)) {
                    console.log("close with buffer", l);
                    const e = i.encode(l);
                    (l = ""), b.data(e);
                  }
                  c.emit("end");
                }
              }),
              a
            );
          },
        };
        return n;
      };
      class en {
        setAuthToken(e) {
          this.authToken = e;
        }
        setAPIOrigin(e) {
          this.APIOrigin = e;
        }
        async exec(...e) {
          const t = puter.fs.socket,
            n = new (et().libs.promise.TeePromise)(),
            s = new (et().libs.promise.TeePromise)(),
            i = async (e) => {
              const r = await n;
              e.id === r && (s.resolve(e), t.off("submission.done", i));
            };
          t.on("submission.done", i);
          const { token: r } = await c(
            ["runtime", "code", "stdin"],
            "puter-exec",
            void 0,
            "exec",
            {
              transform: async (e) => (
                (e.toString = () => e.message?.content),
                (e.valueOf = () => e.message?.content),
                e
              ),
            }
          ).call(this, ...e);
          return n.resolve(r), await s;
        }
      }
      const tn = class {
        constructor(e) {
          (this.authToken = e.authToken),
            (this.APIOrigin = e.APIOrigin),
            (this.appID = e.appID);
        }
        setAuthToken(e) {
          this.authToken = e;
        }
        setAPIOrigin(e) {
          this.APIOrigin = e;
        }
        convert = async (...e) => {
          let t = {};
          t =
            "object" == typeof e[0] && null !== e[0]
              ? e[0]
              : { source: e[0], to: e[1], success: e[2], error: e[3] };
          try {
            const e = await fetch(`${this.APIOrigin}/drivers/call`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.authToken}`,
              },
              body: JSON.stringify({
                interface: "convert-files",
                method: "convert",
                args: { source: t.source, to: t.to },
              }),
            });
            if (!e.ok) {
              const t = await e.json();
              throw new Error(t.message || "Conversion failed");
            }
            const n = await e.blob();
            return (
              t.success && "function" == typeof t.success && t.success(n), n
            );
          } catch (e) {
            throw (t.error && "function" == typeof t.error && t.error(e), e);
          }
        };
      };
      (window.puter = (function () {
        const e = new (class {
          env;
          defaultAPIOrigin = "https://api.puter.com";
          defaultGUIOrigin = "https://puter.com";
          onAuth;
          puterAuthState = {
            isPromptOpen: !1,
            authGranted: null,
            resolver: null,
          };
          appInstanceID;
          parentInstanceID;
          static FSItem = ut;
          eventHandlers = {};
          debugMode = !1;
          initSubmodules = function () {
            (this.util = new Tt()),
              this.registerModule("auth", _t),
              this.registerModule("os", p),
              this.registerModule("fs", at),
              this.registerModule("ui", mt, {
                appInstanceID: this.appInstanceID,
                parentInstanceID: this.parentInstanceID,
              }),
              this.registerModule("hosting", ct),
              this.registerModule("email", lt),
              this.registerModule("apps", ht),
              this.registerModule("ai", vt),
              this.registerModule("kv", wt),
              this.registerModule("drivers", Ot),
              this.registerModule("debug", qt),
              this.registerModule("exec", en),
              this.registerModule("convert", tn),
              (this.path = je);
          };
          constructor(e) {
            (e = e ?? {}), (this.modules_ = []);
            const t = new (et().libs.context.Context)().follow(this, [
              "env",
              "util",
              "authToken",
              "APIOrigin",
              "appID",
            ]);
            (t.puter = this),
              (this.services = new (et().system.ServiceManager)({
                context: t,
              })),
              (this.context = t),
              (t.services = this.services);
            let n = new URLSearchParams(window.location.search);
            n.has("puter.app_instance_id")
              ? (this.env = "app")
              : !0 === window.puter_gui_enabled
              ? (this.env = "gui")
              : (this.env = "web"),
              "gui" !== this.env &&
                location.hostname.replace(/\.$/, "") ===
                  new URL("https://puter.com").hostname &&
                (this.env = "gui"),
              n.has("puter.args")
                ? (this.args = JSON.parse(
                    decodeURIComponent(n.get("puter.args"))
                  ))
                : (this.args = {}),
              n.has("puter.app_instance_id") &&
                (this.appInstanceID = decodeURIComponent(
                  n.get("puter.app_instance_id")
                )),
              n.has("puter.parent_instance_id") &&
                (this.parentInstanceID = decodeURIComponent(
                  n.get("puter.parent_instance_id")
                )),
              n.has("puter.app.id") &&
                (this.appID = decodeURIComponent(n.get("puter.app.id"))),
              this.appID && (this.appDataPath = `~/AppData/${this.appID}`),
              (this.APIOrigin = this.defaultAPIOrigin),
              n.has("puter.api_origin") && "app" === this.env
                ? (this.APIOrigin = decodeURIComponent(
                    n.get("puter.api_origin")
                  ))
                : n.has("puter.domain") &&
                  "app" === this.env &&
                  (this.APIOrigin = "https://api." + n.get("puter.domain"));
            let s = new (et().libs.log.ConsoleLogger)();
            s = new (et().libs.log.CategorizedToggleLogger)({ delegate: s });
            const i = s;
            if (
              ((this.log = new (et().libs.log.LoggerFacade)({
                impl: s,
                cat: i,
              })),
              this.services.register("no-puter-yet", jt),
              this.services.register("filesystem", Rt),
              this.services.register("api-access", Bt),
              this.services.register("xd-incoming", Ft),
              "app" !== this.env && this.services.register("fs-relay", Ct),
              (async () => {
                await this.services.wait_for_init(["api-access"]);
                const e = this.services.get("api-access");
                (e.auth_token = this.authToken),
                  (e.api_origin = this.APIOrigin),
                  [
                    ["authToken", "auth_token"],
                    ["APIOrigin", "api_origin"],
                  ].forEach(([t, n]) => {
                    Object.defineProperty(this, t, {
                      get: () => e[n],
                      set: (t) => ((e[n] = t), !0),
                    });
                  });
              })(),
              "gui" === this.env)
            )
              (this.authToken = window.auth_token), this.initSubmodules();
            else if ("app" === this.env) {
              (this.authToken = decodeURIComponent(n.get("puter.auth.token"))),
                this.initSubmodules();
              try {
                localStorage.getItem("puter.auth.token") &&
                  this.setAuthToken(localStorage.getItem("puter.auth.token")),
                  localStorage.getItem("puter.app.id") &&
                    this.setAppID(localStorage.getItem("puter.app.id"));
              } catch (e) {
                console.error("Error accessing localStorage:", e);
              }
            } else if ("web" === this.env) {
              this.initSubmodules();
              try {
                localStorage.getItem("puter.auth.token") &&
                  this.setAuthToken(localStorage.getItem("puter.auth.token")),
                  localStorage.getItem("puter.app.id") &&
                    this.setAppID(localStorage.getItem("puter.app.id"));
              } catch (e) {
                console.error("Error accessing localStorage:", e);
              }
            }
            (async () => {
              await this.services.wait_for_init(["api-access"]);
              const e = await this.auth.whoami();
              (s = new (et().libs.log.PrefixLogger)({
                delegate: s,
                prefix:
                  "[" + (e?.app_name ?? this.appInstanceID ?? "HOST") + "] ",
              })),
                (this.log.impl = s);
            })(),
              (this.lock_rao_ = new (et().libs.promise.Lock)()),
              (this.p_can_request_rao_ = new (et().libs.promise.TeePromise)()),
              (this.rao_requested_ = !1),
              (async () => {
                await this.services.wait_for_init(["api-access"]),
                  this.p_can_request_rao_.resolve();
              })(),
              (async () => {
                const { token: e, server: t } = await (
                  await fetch(this.APIOrigin + "/wisp/relay-token/create", {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${this.authToken}`,
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({}),
                  })
                ).json();
                (Yt.handler = new Zt(t, e)),
                  (this.net = {
                    generateWispV1URL: async () => {
                      const { token: e, server: t } = await (
                        await fetch(
                          this.APIOrigin + "/wisp/relay-token/create",
                          {
                            method: "POST",
                            headers: {
                              Authorization: `Bearer ${this.authToken}`,
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({}),
                          }
                        )
                      ).json();
                      return `${t}/${e}/`;
                    },
                    Socket: Ht,
                    tls: { TLSSocket: Qt },
                  }),
                  (this.http = $t({
                    Socket: this.net.Socket,
                    DEFAULT_PORT: 80,
                  })),
                  (this.https = $t({
                    Socket: this.net.tls.TLSSocket,
                    DEFAULT_PORT: 443,
                  }));
              })();
          }
          async request_rao_() {
            if ((await this.p_can_request_rao_, "gui" === this.env)) return;
            if ((await this.lock_rao_.acquire(), this.rao_requested_))
              return void this.lock_rao_.release();
            let e = !1;
            try {
              const e = await fetch(this.APIOrigin + "/rao", {
                method: "POST",
                headers: { Authorization: `Bearer ${this.authToken}` },
              });
              return await e.json();
            } catch (t) {
              (e = !0), console.error(t);
            } finally {
              this.lock_rao_.release();
            }
            e || (this.rao_requested_ = !0);
          }
          registerModule(e, t, n = {}) {
            const s = new t(this.context, n);
            this.modules_.push(e), (this[e] = s);
          }
          updateSubmodules() {
            for (const e of this.modules_)
              this[e] &&
                (this[e]?.setAuthToken?.(this.authToken),
                this[e]?.setAPIOrigin?.(this.APIOrigin));
          }
          setAppID = function (e) {
            try {
              localStorage.setItem("puter.app.id", e);
            } catch (e) {
              console.error("Error accessing localStorage:", e);
            }
            this.appID = e;
          };
          setAuthToken = function (e) {
            if (
              ((this.authToken = e), "web" === this.env || "app" === this.env)
            )
              try {
                localStorage.setItem("puter.auth.token", e);
              } catch (e) {
                console.error("Error accessing localStorage:", e);
              }
            this.updateSubmodules(), this.request_rao_();
          };
          setAPIOrigin = function (e) {
            (this.APIOrigin = e), this.updateSubmodules();
          };
          resetAuthToken = function () {
            if (
              ((this.authToken = null),
              "web" === this.env || "app" === this.env)
            )
              try {
                localStorage.removeItem("puter.auth.token");
              } catch (e) {
                console.error("Error accessing localStorage:", e);
              }
            this.updateSubmodules();
          };
          exit = function (e = 0) {
            e &&
              "number" != typeof e &&
              (console.warn(
                "puter.exit() requires status code to be a number. Treating it as 1"
              ),
              (e = 1)),
              window.parent.postMessage(
                {
                  msg: "exit",
                  appInstanceID: this.appInstanceID,
                  statusCode: e,
                },
                "*"
              );
          };
          randName = function (e = "-") {
            const t = [
                "helpful",
                "sensible",
                "loyal",
                "honest",
                "clever",
                "capable",
                "calm",
                "smart",
                "genius",
                "bright",
                "charming",
                "creative",
                "diligent",
                "elegant",
                "fancy",
                "colorful",
                "avid",
                "active",
                "gentle",
                "happy",
                "intelligent",
                "jolly",
                "kind",
                "lively",
                "merry",
                "nice",
                "optimistic",
                "polite",
                "quiet",
                "relaxed",
                "silly",
                "victorious",
                "witty",
                "young",
                "zealous",
                "strong",
                "brave",
                "agile",
                "bold",
              ],
              n = [
                "street",
                "roof",
                "floor",
                "tv",
                "idea",
                "morning",
                "game",
                "wheel",
                "shoe",
                "bag",
                "clock",
                "pencil",
                "pen",
                "magnet",
                "chair",
                "table",
                "house",
                "dog",
                "room",
                "book",
                "car",
                "cat",
                "tree",
                "flower",
                "bird",
                "fish",
                "sun",
                "moon",
                "star",
                "cloud",
                "rain",
                "snow",
                "wind",
                "mountain",
                "river",
                "lake",
                "sea",
                "ocean",
                "island",
                "bridge",
                "road",
                "train",
                "plane",
                "ship",
                "bicycle",
                "horse",
                "elephant",
                "lion",
                "tiger",
                "bear",
                "zebra",
                "giraffe",
                "monkey",
                "snake",
                "rabbit",
                "duck",
                "goose",
                "penguin",
                "frog",
                "crab",
                "shrimp",
                "whale",
                "octopus",
                "spider",
                "ant",
                "bee",
                "butterfly",
                "dragonfly",
                "ladybug",
                "snail",
                "camel",
                "kangaroo",
                "koala",
                "panda",
                "piglet",
                "sheep",
                "wolf",
                "fox",
                "deer",
                "mouse",
                "seal",
                "chicken",
                "cow",
                "dinosaur",
                "puppy",
                "kitten",
                "circle",
                "square",
                "garden",
                "otter",
                "bunny",
                "meerkat",
                "harp",
              ];
            return (
              t[Math.floor(Math.random() * t.length)] +
              e +
              n[Math.floor(Math.random() * n.length)] +
              e +
              Math.floor(1e4 * Math.random())
            );
          };
          getUser = function (...e) {
            let t;
            return (
              (t =
                "object" == typeof e[0] && null !== e[0]
                  ? e[0]
                  : { success: e[0], error: e[1] }),
              new Promise((e, n) => {
                const i = s("/whoami", this.APIOrigin, this.authToken, "get");
                r(i, t.success, t.error, e, n), i.send();
              })
            );
          };
          print = function (...e) {
            for (let t of e) document.body.innerHTML += t;
          };
        })();
        return e;
      })()),
        window.addEventListener("message", async (e) => {
          e.origin === puter.defaultGUIOrigin &&
            (e.data.msg && "requestOrigin" === e.data.msg
              ? e.source.postMessage({ msg: "originResponse" }, "*")
              : "puter.token" === e.data.msg &&
                (puter.setAuthToken(e.data.token),
                puter.setAppID(e.data.app_uid),
                (puter.puterAuthState.authGranted = !0),
                puter.onAuth &&
                  "function" == typeof puter.onAuth &&
                  puter.getUser().then((e) => {
                    puter.onAuth(e);
                  }),
                (puter.puterAuthState.isPromptOpen = !1),
                puter.puterAuthState.resolver &&
                  (puter.puterAuthState.authGranted
                    ? puter.puterAuthState.resolver.resolve()
                    : puter.puterAuthState.resolver.reject(),
                  (puter.puterAuthState.resolver = null))));
        });
    })();
})();
