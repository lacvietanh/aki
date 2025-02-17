(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-236302bd"], {
    7101: function(t, e, o) {
      "use strict";
      o.r(e);
      var i = function() {
          var t = this,
            e = t._self._c;
          t._self._setupProxy;
          return e("el-container", {
            staticClass: "login"
          }, [e("el-main", {
            staticClass: "content"
          }, [e("div", {
            staticClass: "login_input_parent"
          }, [e("div", {
            staticClass: "login_input_box"
          }, [t.$IS_CLIENT_PIX_PIE ? [e("span", {
            staticClass: "title c-text-regular"
          }, [t._v("账号密码登录")])] : [e("span", {
            staticClass: "title c-text-regular"
          }, [t._v("手机验证码登录")]), e("span", {
            staticClass: "label c-text-label"
          }, [t._v("新用户登录后可自动创建账号")])], t.$isDev || t.$isBeta ? [e("el-input", {
            staticClass: "tel-num token",
            attrs: {
              size: "larger",
              type: "textarea",
              placeholder: "输入Token"
            },
            on: {
              blur: t.tokenLogin
            },
            nativeOn: {
              keydown: function(e) {
                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.tokenLogin.apply(null, arguments)
              }
            },
            model: {
              value: t.token,
              callback: function(e) {
                t.token = "string" === typeof e ? e.trim() : e
              },
              expression: "token"
            }
          })] : t._e(), e("el-input", {
            staticClass: "tel-num",
            attrs: {
              type: "tel",
              size: "larger",
              maxlength: 32,
              placeholder: t.$IS_CLIENT_PIX_PIE ? "输入账号" : "输入手机号"
            },
            on: {
              blur: t.gaPhoneInput
            },
            model: {
              value: t.telNum,
              callback: function(e) {
                t.telNum = "string" === typeof e ? e.trim() : e
              },
              expression: "telNum"
            }
          }), t.$IS_CLIENT_PIX_PIE ? e("div", {
            staticClass: "verify-code"
          }, [e("el-input", {
            ref: "verifyCode",
            staticClass: "verify-code-input pwd",
            attrs: {
              "show-password": "",
              type: "tel",
              size: "larger",
              placeholder: "输入密码",
              maxlength: 64
            },
            on: {
              blur: t.gaCodeInput
            },
            nativeOn: {
              keydown: function(e) {
                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.login.apply(null, arguments)
              }
            },
            model: {
              value: t.verifyCode,
              callback: function(e) {
                t.verifyCode = "string" === typeof e ? e.trim() : e
              },
              expression: "verifyCode"
            }
          })], 1) : e("div", {
            staticClass: "verify-code"
          }, [e("el-input", {
            ref: "verifyCode",
            staticClass: "verify-code-input",
            attrs: {
              type: "tel",
              size: "larger",
              placeholder: "输入短信中的验证码",
              maxlength: 64
            },
            on: {
              blur: t.gaCodeInput
            },
            nativeOn: {
              keydown: function(e) {
                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.login.apply(null, arguments)
              }
            },
            model: {
              value: t.verifyCode,
              callback: function(e) {
                t.verifyCode = "string" === typeof e ? e.trim() : e
              },
              expression: "verifyCode"
            }
          }, [e("template", {
            slot: "suffix"
          }, [e("el-button", {
            staticClass: "verify-time-btn",
            attrs: {
              type: "text",
              size: "larger",
              disabled: t.verifyDisabled
            },
            on: {
              click: t.getVatifyCode
            }
          }, [e("span", {
            staticClass: "verify-tip"
          }, [t._v(t._s(t.text))])])], 1)], 2)], 1), e("el-button", {
            staticClass: "login-btn",
            attrs: {
              size: "larger",
              type: "primary",
              loading: t.loginLoading,
              disabled: t.LoginDisabled
            },
            on: {
              click: t.login
            }
          }, [e("span", {
            staticClass: "text"
          }, [t._v("登录")])])], 2), t.$IS_CLIENT_PIX_PIE ? t._e() : e("div", {
            staticClass: "agreement"
          }, [e("el-tooltip", {
            staticClass: "item",
            attrs: {
              manual: "",
              effect: "dark",
              placement: "top",
              content: "请阅读并勾选下方的协议"
            },
            model: {
              value: t.showProtocolTooltip,
              callback: function(e) {
                t.showProtocolTooltip = e
              },
              expression: "showProtocolTooltip"
            }
          }, [e("el-checkbox", {
            on: {
              change: t.onAgreeProtocol
            },
            model: {
              value: t.isAgreeProtocol,
              callback: function(e) {
                t.isAgreeProtocol = e
              },
              expression: "isAgreeProtocol"
            }
          })], 1), e("span", {
            staticClass: "c-text-label agreement-text"
          }, [e("span", [t._v("已仔细阅读并同意" + t._s(t.CLIENT_NAME) + " "), e("el-link", {
            staticClass: "link",
            on: {
              click: function(e) {
                return t.checkProtocol(t.userProtocol)
              }
            }
          }, [t._v(" 《" + t._s(t.userProtocolName || "商家使用协议") + "》 ")])], 1)]), e("div", {
            style: {
              textAlign: "left",
              paddingLeft: "14px"
            }
          }, [e("el-link", {
            staticClass: "link",
            on: {
              click: function(e) {
                return t.checkProtocol(t.privacyProtocol)
              }
            }
          }, [t._v(" 《" + t._s(t.privacyProtocolName || "隐私政策") + "》 ")])], 1)], 1)])])], 1)
        },
        n = [],
        s = o("2b0e"),
        l = o("2f62"),
        a = o("6ac5"),
        r = o("93c3"),
        c = o("25c2"),
        u = o("781e"),
        d = o("879d"),
        p = o("8ec2"),
        g = o("442f"),
        h = o("72fa"),
        f = o("9573"),
        y = o("5c96"),
        m = o("ad29");
      let k = null;
      var v = Object(s["defineComponent"])({
          name: "LoginPage",
          mixins: [g["a"]],
          components: {
            "el-button": y["Button"],
            "el-container": y["Container"],
            "el-main": y["Main"],
            "el-link": y["Link"],
            "el-tooltip": y["Tooltip"],
            "el-checkbox": y["Checkbox"]
          },
          setup() {
            const {
              PointLogin: t
            } = Object(m["a"])();
            return {
              PointLogin: t
            }
          },
          data() {
            return {
              CLIENT_NAME: c["b"],
              verifyCode: "",
              telNum: "",
              num: 60,
              text: "获取验证码",
              isActive: !0,
              token: "",
              isAgreeProtocol: !1,
              showProtocolTooltip: !1,
              loginLoading: !1
            }
          },
          computed: {
            ...Object(l["c"])(["userId", "userProtocol", "userProtocolName", "privacyProtocol", "privacyProtocolName"]),
            LoginDisabled() {
              return !this.telNum || !this.verifyCode
            },
            verifyDisabled() {
              return 11 !== this.telNum.trim().length || 60 !== this.num
            }
          },
          async created() {
            this.$IS_CLIENT_PIX_PIE || this.fetchUserProtocol()
          },
          methods: {
            ...Object(l["d"])(["initUser"]),
            ...Object(l["b"])(["TokenLogin", "fetchUserProtocol"]),
            async getVatifyCode() {
              if (/1[3-9]{1}[0-9]{9}/.test(this.telNum)) {
                if (null == k) try {
                  this.PointLogin("get_verification_code");
                  const t = await Object(r["g"])(this.telNum);
                  t && (null == k && (k = setInterval(() => {
                    this.num -= 1, this.text = this.num + "s后可获取", this.num <= 0 && (this.num = 60, this.text = "重新获取", clearInterval(k), k = null)
                  }, 1e3)), this.tsNotify({
                    message: "手机验证码发送成功",
                    type: "success"
                  }), this.$refs.verifyCode.focus())
                } catch (t) {
                  const e = t && t.data && t.data.code ? t.message : "请检查网络环境或者代理设置";
                  this.tsNotify({
                    type: "error",
                    message: e
                  })
                }
              } else this.tsNotify({
                message: "请先输入正确的手机号!",
                type: "warning"
              })
            },
            checkProtocol(t) {
              this.PointLogin("click_agreement"), t ? this.$openExternal(t) : this.tsNotify({
                message: "协议不存在，请联系客服获取协议!",
                type: "error"
              })
            },
            async login() {
              try {
                if (!this.isAgreeProtocol && !c["v"]) return void(this.showProtocolTooltip = !0);
                if (this.loginLoading) return;
                this.loginLoading = !0, this.PointLogin("click_login_button");
                let e = "";
                try {
                  e = await p["a"].instance().getSystemUUID()
                } catch (t) {}
                const o = await p["a"].instance().systemInfo;
                let i = new h["a"],
                  n = await i.on(f["a"].FetchHardWareInfo, {});
                const s = n.info.host_name || "",
                  l = n.info.user_name || "",
                  g = await Object(r["f"])({
                    phone: this.telNum,
                    verifyCode: this.verifyCode,
                    setupFileName: o.setup_file_name,
                    muuid: e,
                    minfo: o,
                    host_name: 0 == s.length ? "\t" : s,
                    user_name: 0 == l.length ? "\t" : l
                  }),
                  y = g.data;
                await Object(a["d"])(y.token);
                let m = new u["a"](y.user_id, y.token, this.telNum, y.oid);
                await d["a"].getInstance().cacheUserInfo(m), this.initUser(m), await this.loginSuccess(y)
              } catch (t) {
                console.log("login : ", t);
                let e = t.message;
                c["v"] && t.data && 6 == t.data.code && (e = "请输入正确的密码!"), this.tsNotify({
                  message: e,
                  type: "error"
                })
              }
              this.$nextTick(() => {
                this.loginLoading = !1
              })
            },
            async loginSuccess(t) {
              var e;
              let o = this.userId,
                i = t.oid;
              null === (e = this.$tsStat) || void 0 === e || e.login(o, i), await this.$router.replace({
                name: "index"
              });
              t.token
            },
            gaPhoneInput() {
              this.PointLogin("input_phone_number")
            },
            gaCodeInput() {
              this.PointLogin("enter_verification_code")
            },
            async tokenLogin() {
              if (this.token.trim()) try {
                const t = await this.TokenLogin(this.token);
                console.log("==> tokenLogin: ", t), await this.loginSuccess(t)
              } catch (t) {
                this.token = ""
              }
            },
            onAgreeProtocol(t) {
              t && this.showProtocolTooltip && (this.showProtocolTooltip = !1)
            }
          }
        }),
        _ = v,
        C = (o("e6e5"), o("2877")),
        P = Object(C["a"])(_, i, n, !1, null, "0692f793", null);
      e["default"] = P.exports
    },
    "731e": function(t, e, o) {},
    e6e5: function(t, e, o) {
      "use strict";
      o("731e")
    }
  }
]);
//# sourceMappingURL=chunk-236302bd.c0dbd822.js.map