(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{139:function(e,a,t){"use strict";t.r(a);var n=t(297),r=t(0),l=t.n(r),c=t(298),i=t(228),s=t(209),o=t(212),m=t(213),u=t(214);function d(){var e=Object(n.a)(["\n  padding: 40px 0;\n  > h1 {\n    font-weight: 500;\n    margin-bottom: 30px;\n  }\n\n  > div > h3 {\n    font-size: 15px;\n  }\n"]);return d=function(){return e},e}var b=c.a.div(d());a.default=function(){var e=Object(s.a)().siteConfig,a=void 0===e?{}:e,t=u[0],n=u.filter((function(e){return e!==t})),r="https://github.com/"+a.organizationName+"/"+a.projectName;return l.a.createElement(i.a,{title:"Versions",permalink:"/versions",description:"Docusaurus 2 Versions page listing all documented site versions"},l.a.createElement(b,{className:"container margin-vert--lg"},l.a.createElement("h1",null,"Craft.js Documentation Versions"),l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"latest"},"Latest version (Stable)"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,t),l.a.createElement("td",null,l.a.createElement(o.a,{to:Object(m.a)("/docs/overview")},"Documentation")),l.a.createElement("td",null,l.a.createElement("a",{href:r+"/releases/tag/v"+t},"Release Notes")))))),n.length>0&&l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"archive"},"Past Versions"),l.a.createElement("table",null,l.a.createElement("tbody",null,n.map((function(e){return l.a.createElement("tr",{key:e},l.a.createElement("th",null,e),l.a.createElement("td",null,l.a.createElement(o.a,{to:Object(m.a)("/docs/"+e+"/overview")},"Documentation")),l.a.createElement("td",null,l.a.createElement("a",{href:r+"/releases/tag/v"+e},"Release Notes")))})))))))}},214:function(e){e.exports=JSON.parse('["0.1.0-beta.10","0.1.0-beta.6"]')},230:function(e,a,t){"use strict";var n=t(47),r=t(207),l=t(0),c=t.n(l),i=t(211),s=t.n(i),o=t(212),m=t(209),u=t(213),d=t(126),b=t.n(d);function v(e){var a=e.to,t=e.href,l=e.label,i=Object(r.a)(e,["to","href","label"]),s=Object(u.a)(a);return c.a.createElement(o.a,Object(n.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:s},i),l)}var h=function(e){var a=e.url,t=e.alt;return c.a.createElement("img",{className:"footer__logo",alt:t,src:a})};a.a=function(){var e=Object(m.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,n=t||{},r=n.copyright,l=n.links,i=void 0===l?[]:l,o=n.logo,d=void 0===o?{}:o,f=Object(u.a)(d.src);return t?c.a.createElement("footer",{className:s()("footer",{"footer--dark":"dark"===t.style})},c.a.createElement("div",{className:"container"},i&&i.length>0&&c.a.createElement("div",{className:"row footer__links"},i.map((function(e,a){return c.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?c.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(v,e))}))):null)}))),c.a.createElement("div",{className:"footer__end text--center"},c.a.createElement("div",{className:"footer__madewith margin-bottom--md"},"Made with ",c.a.createElement("img",{src:Object(u.a)("img/heart-fill.png")})," in Kuala Lumpur, Malaysia"),c.a.createElement("div",null,"Released under the MIT license"),(d||r)&&c.a.createElement("div",{className:""},d&&d.src&&c.a.createElement("div",{className:"margin-bottom--sm"},d.href?c.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:b.a.footerLogoLink},c.a.createElement(h,{alt:d.alt,url:f})):c.a.createElement(h,{alt:d.alt,url:f})),r),c.a.createElement("div",{className:"text--center margin-top--md"},c.a.createElement("a",{target:"_blank",href:"https://github.com/prevwong/craft.js"},c.a.createElement("img",{src:"https://img.shields.io/github/stars/prevwong/craft.js?color=%23000&logo=github&style=social"})))))):null}},232:function(e,a,t){"use strict";var n=t(47),r=(t(217),t(222),t(218),t(207)),l=t(0),c=t.n(l),i=t(211),s=t.n(i),o=t(212),m=t(209),u=t(213),d=(t(50),t(20),t(15),t(14),t(70),t(215)),b=!1,v=function(e){var a=Object(l.useRef)(!1),n=Object(l.useRef)(null),r=Object(m.a)().siteConfig,i=(void 0===r?{}:r).themeConfig.algolia,o=Object(d.c)(),u=function(){a.current||(window.docsearch({appId:i.appId,apiKey:i.apiKey,indexName:i.indexName,inputSelector:"#search_input_react",algoliaOptions:i.algoliaOptions,handleSelected:function(e,a,t){var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;o.push(r)}}),a.current=!0)},v=function(){b?u():Promise.all([Promise.all([t.e(3),t.e(76)]).then(t.t.bind(null,373,7)),t.e(50).then(t.t.bind(null,374,7))]).then((function(e){var a=e[0].default;b=!0,window.docsearch=a,u()}))},h=Object(l.useCallback)((function(a){n.current.contains(a.target)||n.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:v,onMouseOver:v,onFocus:h,onBlur:h,ref:n}))},h=t(229),f=t(219),g=t(231),E=t(223),p=t(224),_=t(214),N=t(125),k=t.n(N);function O(e){var a=e.activeBasePath,t=e.activeBaseRegex,l=e.to,i=e.href,s=e.label,m=e.activeClassName,d=void 0===m?"navbar__link--active":m,b=e.prependBaseUrlToHref,v=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),h=Object(u.a)(l),f=Object(u.a)(a),g=Object(u.a)(i,!0);return c.a.createElement(o.a,Object(n.a)({},i?{target:"_blank",rel:"noopener noreferrer",href:b?g:i}:Object.assign({isNavLink:!0,activeClassName:d,to:h},a||t?{isActive:function(e,a){return t?new RegExp(t).test(a.pathname):a.pathname.startsWith(f)}}:null),v),s)}function j(e){var a=e.items,t=e.position,l=e.className,i=Object(r.a)(e,["items","position","className"]),o=function(e,a){return void 0===a&&(a=!1),s()({"navbar__item navbar__link":!a,dropdown__link:a},e)};return a?c.a.createElement("div",{className:s()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},c.a.createElement(O,Object(n.a)({className:o(l)},i,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),i.label),c.a.createElement("ul",{className:"dropdown__menu"},a.map((function(e,a){var t=e.className,l=Object(r.a)(e,["className"]);return c.a.createElement("li",{key:a},c.a.createElement(O,Object(n.a)({activeClassName:"dropdown__link--active",className:o(t,!0)},l)))})))):c.a.createElement(O,Object(n.a)({className:o(l)},i))}function w(e){var a=e.items,t=(e.position,e.className),l=Object(r.a)(e,["items","position","className"]),i=function(e,a){return void 0===a&&(a=!1),s()("menu__link",{"menu__link--sublist":a},e)};return a?c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(O,Object(n.a)({className:i(t,!0)},l),l.label),c.a.createElement("ul",{className:"menu__list"},a.map((function(e,a){var t=e.className,s=Object(r.a)(e,["className"]);return c.a.createElement("li",{className:"menu__list-item",key:a},c.a.createElement(O,Object(n.a)({activeClassName:"menu__link--active",className:i(t)},s,{onClick:l.onClick})))})))):c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(O,Object(n.a)({className:i(t)},l)))}a.a=function(){var e,a,t=Object(m.a)(),r=t.siteConfig,i=r.themeConfig,d=i.navbar,b=(d=void 0===d?{}:d).title,N=d.links,O=void 0===N?[]:N,y=d.hideOnScroll,C=void 0!==y&&y,x=i.disableDarkMode,S=void 0!==x&&x,B=r.baseUrl,D=t.isClient,L=Object(l.useState)(!1),M=L[0],T=L[1],R=Object(l.useState)(!1),I=R[0],K=R[1],P=Object(f.a)(),V=P.isDarkTheme,H=P.setLightTheme,A=P.setDarkTheme,U=Object(g.a)(C),J=U.navbarRef,z=U.isNavbarVisible,W=Object(p.a)(),F=W.logoLink,q=W.logoLinkProps,G=W.logoImageUrl,Q=W.logoAlt,X=_[0],Y="undefined"!=typeof window?window.location.pathname:null;Y&&Y.indexOf(B+"docs/")>-1&&(X=_.filter((function(e){return Y.indexOf(e)>-1}))[0]||X),Object(E.a)(M);var Z=Object(l.useCallback)((function(){T(!0)}),[T]),$=Object(l.useCallback)((function(){T(!1)}),[T]),ee=Object(l.useCallback)((function(e){return e.target.checked?A():H()}),[H,A]);return c.a.createElement("nav",{ref:J,className:s()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":M},e[k.a.navbarHideable]=C,e[k.a.navbarHidden]=!z,e))},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},null!=O&&0!==O.length&&c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:Z,onKeyDown:Z},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement("div",{className:"logo-container"},c.a.createElement(o.a,Object(n.a)({className:"navbar__brand",to:F},q),null!=G&&c.a.createElement("img",{key:D,className:"navbar__logo",src:G,alt:Q}),null!=b&&c.a.createElement("strong",{className:s()("navbar__title",(a={},a[k.a.hideLogoText]=I,a))},b)),c.a.createElement(o.a,{to:Object(u.a)("versions"),className:"version-header-label"},X)),O.filter((function(e){return"left"===e.position})).map((function(e,a){return c.a.createElement(j,Object(n.a)({},e,{key:a}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},O.filter((function(e){return"right"===e.position})).map((function(e,a){return c.a.createElement(j,Object(n.a)({},e,{key:a}))})),!S&&c.a.createElement(h.a,{className:k.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:V,onChange:ee}),c.a.createElement(v,{handleSearchBarToggle:K,isSearchBarExpanded:I}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:$}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(o.a,Object(n.a)({className:"navbar__brand",onClick:$,to:F},q),null!=G&&c.a.createElement("img",{key:D,className:"navbar__logo",src:G,alt:Q}),null!=b&&c.a.createElement("strong",{className:"navbar__title"},b)),!S&&M&&c.a.createElement(h.a,{"aria-label":"Dark mode toggle in sidebar",checked:V,onChange:ee})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},O.map((function(e,a){return c.a.createElement(w,Object(n.a)({},e,{onClick:$,key:a}))})))))))}}}]);