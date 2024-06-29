(() => {
    chrome.storage.sync.clear();
    const e = document.querySelector(".mainpanel"),
      t = /^(016|017|018|019|015|013|014)\d{8}$/,
      o = /^(016|017|018|019|015|013|014)\d{1}XXXX\d{3}$/;
    function n(e, t) {
      var o = document.createElement("script");
      (o.type = "text/javascript"),
        (o.src = e),
        (o.onload = t),
        document.head.appendChild(o);
    }
    new MutationObserver((e, l) => {
      n("https://code.jquery.com/jquery-3.6.0.min.js", function () {
        console.log("jQuery loaded"),
          n("https://code.jquery.com/ui/1.12.1/jquery-ui.min.js", function () {
            console.log("jQuery UI loaded");
            let e = window.location.href;
            if ("https://managment.io/en/admin/report/requestrefill" === e) {
              let e = document.querySelectorAll("td span");
              if (0 === e.length);
              else {
                let t = [];
                e.forEach((e) => {
                  if (e.hasChildNodes()) {
                    e.parentNode.parentNode;
                    let o = e.childNodes[1].textContent.replace(": ", "");
                    t.push(o);
                  }
                }),
                  (l = new FormData()).append("dom_data", JSON.stringify(t));
                var n = {
                  url: "https://02channel.com/api/array-analysis",
                  method: "POST",
                  cache: !1,
                  processData: !1,
                  mimeType: "multipart/form-data",
                  contentType: !1,
                  data: l,
                  statusCode: {
                    404: function () {
                      alert("Data mismatch ! Please press ok for reload."),
                        (window.location =
                          "https://managment.io/en/admin/report/requestrefill"),
                        window.location.reload();
                    },
                    429: function () {
                      alert("Server Busy! please try some time later"),
                        (window.location =
                          "https://managment.io/en/admin/report/requestrefill"),
                        window.location.reload();
                    },
                  },
                };
                $.ajax(n).done(function (t) {
                  let n = JSON.parse(t),
                    l = JSON.parse(n.notifications);
                  e.forEach((e) => {
                    if (e.hasChildNodes()) {
                      performance.navigation.type ===
                        performance.navigation.TYPE_RELOAD &&
                        (e.children[0].setAttribute("style", "background: none;"),
                        e.setAttribute("title", ""));
                      let t = e.parentNode.parentNode.children
                          .item(3)
                          .textContent.trim()
                          .replace(/\s/g, ""),
                        n = e.childNodes[4].textContent?.replace(": ", "");
                      e.childNodes.length > 6 &&
                        (n = e.childNodes[7].textContent?.replace(": ", ""));
                      const r = e.childNodes[1].textContent.replace(": ", "");
                      l.forEach((l) => {
                        l.transaction_id === r &&
                          (console.log("=>Inside Transaction Match If"),
                          parseFloat(l.amount) === parseFloat(t)
                            ? (console.log(
                                "=>(find.js:108) Inside Amount Match "
                              ),
                              l.sender.match(o)
                                ? (console.log(">> BKASH SENDER >>"),
                                  console.log(
                                    "ITEM SENDER => " +
                                      l.sender.substr(-3) +
                                      ">>" +
                                      typeof l.sender
                                  ),
                                  console.log(
                                    " Mobile => " + n.slice(-3) + ">>" + typeof n
                                  ),
                                  l.sender.slice(-3) == n.slice(-3)
                                    ? e.children[0].setAttribute(
                                        "style",
                                        "background: #90EE90;"
                                      )
                                    : e.children[0].setAttribute(
                                        "style",
                                        "background: yellow;"
                                      ))
                                : (console.log(">> Nagad  SENDER >>"),
                                  console.log(
                                    "ITEM SENDER => " +
                                      l.sender +
                                      ">>" +
                                      typeof l.sender
                                  ),
                                  l.sender.trim().replace(/\s/g, "") ===
                                  n.trim().replace(/\s/g, "")
                                    ? e.children[0].setAttribute(
                                        "style",
                                        "background: #90EE90;"
                                      )
                                    : e.children[0].setAttribute(
                                        "style",
                                        "background: yellow;"
                                      )))
                            : e.children[0].setAttribute(
                                "style",
                                "background: red;"
                              ),
                          $(e).tooltip({ content: l.android_text }));
                      });
                    }
                  });
                });
              }
            } else if (
              "https://managment.io/en/admin/report/requestwithdrawal" === e
            ) {
              console.log("=>(find.js:188) requestWithdrawal");
              let e = document.querySelectorAll("td span");
              if (
                (console.log("=>(find.js:190) nodeElements", e), 0 === e.length)
              );
              else {
                let t = [];
                var l;
                e.forEach((e) => {
                  if (e.hasChildNodes()) {
                    e.parentNode.parentNode;
                    let o = e.childNodes[1].textContent.replace(": ", "");
                    t.push(o);
                  }
                }),
                  (l = new FormData()).append("dom_data", JSON.stringify(t)),
                  (n = {
                    url: "https://02channel.com/api/mobile-app-withdrawal-endpoint",
                    method: "POST",
                    cache: !1,
                    processData: !1,
                    mimeType: "multipart/form-data",
                    contentType: !1,
                    data: l,
                    statusCode: {
                      404: function () {
                        alert("Data mismatch ! Please press ok for reload."),
                          (window.location =
                            "https://managment.io/en/admin/report/requestwithdrawal"),
                          window.location.reload();
                      },
                      429: function () {
                        alert("Server Busy! please try some time later"),
                          (window.location =
                            "https://managment.io/en/admin/report/requestwithdrawal"),
                          window.location.reload();
                      },
                    },
                  }),
                  $.ajax(n).done(function (t) {
                    console.log(JSON.parse(t)),
                      console.log("=>(find.js:249) response");
                    let n = JSON.parse(t),
                      l = JSON.parse(n.notifications);
                    e.forEach((e) => {
                      if (e.hasChildNodes()) {
                        performance.navigation.type ===
                          performance.navigation.TYPE_RELOAD &&
                          (e.children[0].setAttribute(
                            "style",
                            "background: none;"
                          ),
                          e.setAttribute("title", ""));
                        let t = e.parentNode.parentNode,
                          n = t.children.item(0).textContent.trim(),
                          r = n.replace(/\s/g, "");
                        console.log("=>(find.js:270) amount", n),
                          console.log("=>(find.js:271) amount2", r);
                        let s = t.children.item(2).textContent;
                        console.log("=>(find.js:275) userInfo", s);
                        let a = s.split(": "),
                          i = "000000000",
                          c = "00000000000";
                        if (
                          (console.log(
                            "=>(find.js:278) contentUserInfoArray",
                            a.length
                          ),
                          a.length > 2)
                        ) {
                          console.log("=>(find.js:284) length greater than 2");
                          let e = a[1];
                          console.log("=>(find.js:286) transactionIdText", e);
                          let t = e.indexOf("আপনার");
                          if (
                            (console.log(
                              "=>(find.js:286) index",
                              t + "Type : " + typeof t
                            ),
                            -1 == t)
                          ) {
                            console.log("=>(find.js:294) -1");
                            let t = e,
                              o = t.indexOf(":") + 1,
                              n = t.indexOf("Your"),
                              l = t.substring(o, n).trim();
                            console.log("=>(find.js:301) extractedText", l),
                              (i = l);
                          } else
                            console.log("=>(find.js:296) Not -1"),
                              (i = e.substring(0, t)),
                              console.log("=>(find.js:289) contentBefore", i),
                              console.log("=>(find.js:282) trx", i);
                          console.log("=>(find.js:282) trx", i), (c = a[2]);
                        }
                        l.forEach((t) => {
                          t.transaction_id === i &&
                            (console.log("=>Inside Transaction Match If"),
                            parseFloat(t.amount) === parseFloat(r)
                              ? (console.log(
                                  "=>(find.js:108) Inside Amount Match "
                                ),
                                t.sender.match(o)
                                  ? (console.log(">> BKASH SENDER >>"),
                                    console.log(
                                      "ITEM SENDER => " +
                                        t.sender.substr(-3) +
                                        ">>" +
                                        typeof t.sender
                                    ),
                                    console.log(
                                      " Mobile => " +
                                        c.slice(-3) +
                                        ">>" +
                                        typeof c
                                    ),
                                    t.sender.slice(-3) == c.slice(-3)
                                      ? e.children[2].setAttribute(
                                          "style",
                                          "background: #90EE90;"
                                        )
                                      : e.children[2].setAttribute(
                                          "style",
                                          "background: yellow;"
                                        ))
                                  : (console.log(">> Nagad  SENDER >>"),
                                    console.log(
                                      "ITEM SENDER => " +
                                        t.sender +
                                        ">>" +
                                        typeof t.sender
                                    ),
                                    t.sender.trim().replace(/\s/g, "") ===
                                    c.trim().replace(/\s/g, "")
                                      ? e.children[2].setAttribute(
                                          "style",
                                          "background: #90EE90;"
                                        )
                                      : e.children[2].setAttribute(
                                          "style",
                                          "background: yellow;"
                                        )))
                              : e.children[2].setAttribute(
                                  "style",
                                  "background: red;"
                                ),
                            $(e).tooltip({ content: t.android_text }));
                        });
                      }
                    });
                  });
              }
            } else {
              $("#filter_form").on("submit", "td", function (e) {
                document
                  .querySelectorAll("td:nth-of-type(3)")
                  .setAttribute("style", "background:none !important"),
                  document
                    .querySelectorAll("td:nth-of-type(3)")
                    .setAttribute("title", "");
              });
              const e = document.querySelectorAll("td:nth-of-type(3)");
              if (0 === e.length);
              else {
                let n = [];
                e.forEach((e) => {
                  if (e.hasChildNodes()) {
                    $(e).tooltip({ disabled: !0 }),
                      e.previousElementSibling.textContent
                        .trim()
                        .replace(/\s/g, "");
                    let o = e.textContent.split(" ");
                    const l = o[1];
                    o.filter((e, o) => {
                      if (e.match(t)) return e[0];
                    }),
                      n.push(l);
                  }
                }),
                  n.pop();
                let l = new FormData();
                l.append("dom_data", JSON.stringify(n));
                let r = {
                  url: "https://02channel.com/api/array-analysis",
                  method: "POST",
                  cache: !1,
                  processData: !1,
                  mimeType: "multipart/form-data",
                  contentType: !1,
                  data: l,
                  statusCode: {
                    404: function () {
                      alert("Data mismatch ! Please press ok to reload."),
                        (window.location =
                          "https://managment.io/en/admin/report/requestrefill"),
                        window.location.reload();
                    },
                    429: function () {
                      alert("Server Busy! please try again later"),
                        (window.location =
                          "https://managment.io/en/admin/report/requestrefill"),
                        window.location.reload();
                    },
                  },
                };
                $.ajax(r).done(function (n) {
                  let l = JSON.parse(n),
                    r = JSON.parse(l.notifications);
                  void 0 !== $(".modal_wrap form .btn-success").html() &&
                    ($(".modal_wrap form .btn-default").on("click", function (e) {
                      $("#filter_form .btn-success").click();
                    }),
                    $(".modal_wrap form .success").on("click", function (e) {
                      $("#filter_form .btn-success").click();
                    })),
                    $(e).tooltip({ content: "", disabled: !1, hide: !1 }),
                    e.forEach((e) => {
                      if (e.hasChildNodes()) {
                        e.setAttribute("style", "background: none;"),
                          e.setAttribute("title", ""),
                          $(e).tooltip({ content: "", disabled: !1, hide: !1 });
                        let n = e.previousElementSibling.textContent
                            .trim()
                            .replace(/\s/g, ""),
                          l = e.textContent.split(" ");
                        const s = l[1];
                        let a = l.filter((e, o) => {
                          if (e.match(t)) return e[0];
                        });
                        console.log("=>(find.js:500) mobile", a),
                          r.forEach((t) => {
                            t.transaction_id === s &&
                              (console.log(
                                "=>(find.js:505) inside transaction if condition"
                              ),
                              parseFloat(t.amount) === parseFloat(n)
                                ? (console.log(
                                    "=>(find.js:506) inside amount if condition"
                                  ),
                                  t.sender.match(o)
                                    ? (console.log(">> BKASH SENDER >>"),
                                      console.log(
                                        "ITEM SENDER => " +
                                          t.sender.substr(-3) +
                                          ">>" +
                                          typeof t.sender
                                      ),
                                      console.log(
                                        " Mobile => " +
                                          a[0]
                                            .trim()
                                            .replace(/\s/g, "")
                                            .slice(-3) +
                                          ">>" +
                                          typeof a
                                      ),
                                      (t.sender = t.sender
                                        .trim()
                                        .replace(/\s/g, "")),
                                      console.log(
                                        "=>(find.js:515) item.sender",
                                        t.sender
                                      ),
                                      console.log("=>(find.js:516) mobile2", a),
                                      t.sender.slice(-3) ==
                                      a[0].trim().replace(/\s/g, "").slice(-3)
                                        ? e.setAttribute(
                                            "style",
                                            "background: #90EE90;"
                                          )
                                        : e.setAttribute(
                                            "style",
                                            "background: yellow;"
                                          ))
                                    : (console.log(">> Nagad  SENDER >>"),
                                      console.log(
                                        "ITEM SENDER => " +
                                          t.sender +
                                          ">>" +
                                          typeof t.sender
                                      ),
                                      console.log("=>(find.js:531) mobile", a),
                                      t.sender.trim().replace(/\s/g, "") ===
                                      a[0].trim().replace(/\s/g, "")
                                        ? e.setAttribute(
                                            "style",
                                            "background: #90EE90;"
                                          )
                                        : e.setAttribute(
                                            "style",
                                            "background: yellow;"
                                          )))
                                : e.setAttribute("style", "background: red;"),
                              e.setAttribute("title", t.android_text));
                          });
                      }
                    });
                });
              }
            }
          });
      });
    }).observe(e, {
      childList: !0,
      subtree: !0,
      characterData: !0,
      characterDataOldValue: !0,
    });
  })();
  
