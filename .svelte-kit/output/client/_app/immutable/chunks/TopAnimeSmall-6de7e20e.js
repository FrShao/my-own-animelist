import{S as A,i as L,s as M,C as P,D as G,E as H,F as T,f as B,t as F,o as J,M as O,k as m,l as v,m as g,h as c,n as h,b as k,N as R,q as b,r as E,G as f,B as V,e as N,O as z,a as y,c as I,L as K,u as Q,p as U}from"./index-cf589771.js";function S(n,e,s){const l=n.slice();return l[9]=e[s],l[11]=s,l}function X(n){let e,s,l=n[12].message+"",t;return{c(){e=m("div"),s=b("Error: "),t=b(l)},l(a){e=v(a,"DIV",{});var i=g(e);s=E(i,"Error: "),t=E(i,l),i.forEach(c)},m(a,i){k(a,e,i),f(e,s),f(e,t)},p:V,d(a){a&&c(e)}}}function Y(n){let e,s=n[2](n[3].data),l=[];for(let t=0;t<s.length;t+=1)l[t]=w(S(n,s,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=N()},l(t){for(let a=0;a<l.length;a+=1)l[a].l(t);e=N()},m(t,a){for(let i=0;i<l.length;i+=1)l[i].m(t,a);k(t,e,a)},p(t,a){if(a&12){s=t[2](t[3].data);let i;for(i=0;i<s.length;i+=1){const r=S(t,s,i);l[i]?l[i].p(r,a):(l[i]=w(r),l[i].c(),l[i].m(e.parentNode,e))}for(;i<l.length;i+=1)l[i].d(1);l.length=s.length}},d(t){z(l,t),t&&c(e)}}}function Z(n){let e,s,l,t=n[11]+1+"",a;return{c(){e=m("div"),s=m("p"),l=b("#"),a=b(t),this.h()},l(i){e=v(i,"DIV",{class:!0,style:!0});var r=g(e);s=v(r,"P",{});var d=g(s);l=E(d,"#"),a=E(d,t),d.forEach(c),r.forEach(c),this.h()},h(){h(e,"class","rank svelte-1qite1"),U(e,"background-color",ae(n[11]))},m(i,r){k(i,e,r),f(e,s),f(s,l),f(s,a)},p:V,d(i){i&&c(e)}}}function w(n){let e,s,l,t,a,i,r,d=le(n[9].title)+"",W,q,_=n[11]<10&&Z(n);return{c(){e=m("div"),s=m("div"),l=m("img"),a=y(),_&&_.c(),i=y(),r=m("div"),W=b(d),q=y(),this.h()},l(o){e=v(o,"DIV",{class:!0});var u=g(e);s=v(u,"DIV",{class:!0});var p=g(s);l=v(p,"IMG",{src:!0,alt:!0,class:!0}),a=I(p),_&&_.l(p),p.forEach(c),i=I(u),r=v(u,"DIV",{class:!0});var D=g(r);W=E(D,d),D.forEach(c),q=I(u),u.forEach(c),this.h()},h(){K(l.src,t=n[9].images.jpg.image_url)||h(l,"src",t),h(l,"alt",n[9].title+".jpg"),h(l,"class","svelte-1qite1"),h(s,"class","card-thumbnail svelte-1qite1"),h(r,"class","card-desc svelte-1qite1"),h(e,"class","card svelte-1qite1")},m(o,u){k(o,e,u),f(e,s),f(s,l),f(s,a),_&&_.m(s,null),f(e,i),f(e,r),f(r,W),f(e,q)},p(o,u){o[11]<10&&_.p(o,u)},d(o){o&&c(e),_&&_.d()}}}function x(n){let e=C(n[0]+10)+"",s,l,t,a;return{c(){s=b(e),l=y(),t=m("div"),a=b("Waiting for informations ...")},l(i){s=E(i,e),l=I(i),t=v(i,"DIV",{});var r=g(t);a=E(r,"Waiting for informations ..."),r.forEach(c)},m(i,r){k(i,s,r),k(i,l,r),k(i,t,r),f(t,a)},p(i,r){r&1&&e!==(e=C(i[0]+10)+"")&&Q(s,e)},d(i){i&&c(s),i&&c(l),i&&c(t)}}}function $(n){let e,s,l={ctx:n,current:null,token:null,hasCatch:!0,pending:x,then:Y,catch:X,value:3,error:12};return O(n[3],l),{c(){e=m("div"),l.block.c(),this.h()},l(t){e=v(t,"DIV",{class:!0});var a=g(e);l.block.l(a),a.forEach(c),this.h()},h(){h(e,"class",s="wrap "+(n[1]?"nowrap":"")+" svelte-1qite1")},m(t,a){k(t,e,a),l.block.m(e,l.anchor=null),l.mount=()=>e,l.anchor=null},p(t,a){n=t,R(l,n,a),a&2&&s!==(s="wrap "+(n[1]?"nowrap":"")+" svelte-1qite1")&&h(e,"class",s)},d(t){t&&c(e),l.block.d(),l.token=null,l=null}}}function ee(n){let e;const s=n[7].default,l=P(s,n,n[6],null),t=l||$(n);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,i){t&&t.m(a,i),e=!0},p(a,[i]){l?l.p&&(!e||i&64)&&G(l,s,a,a[6],e?T(s,a[6],i,null):H(a[6]),null):t&&t.p&&(!e||i&3)&&t.p(a,e?i:-1)},i(a){e||(B(t,a),e=!0)},o(a){F(t,a),e=!1},d(a){t&&t.d(a)}}}let j=225+10;function C(n){j=n}function ne(){return j}async function te(){const n=await fetch("https://api.jikan.moe/v4/top/anime?page=1");return!n.ok||n.status===404?[]:await n.json()}function le(n){let e;if(n.length>40){let l=0,t=n.split(" ");e="",t.forEach(a=>{l+=a.length+1,l<=40+1&&(e+=a+" ")}),e+="..."}else e=n;return e}function ae(n){let e;return n<3?e="gold":e="hsl(215,81%,56%)",e}function ie(n,e,s){let{$$slots:l={},$$scope:t}=e;J(()=>{document.documentElement.style.setProperty("--cardWidth",d+"px"),document.documentElement.style.setProperty("--cardHeight",W+"px")});let{limit:a=25}=e,{isSmall:i=!1}=e,{isNoWrap:r=!1}=e,{cardWidth:d=225}=e,W=308;i&&(d=131,W=180);function q(o){let u=[o[0]];for(let p=1;p<a;p++)u.push(o[p]);return u}let _=te();return n.$$set=o=>{"limit"in o&&s(4,a=o.limit),"isSmall"in o&&s(5,i=o.isSmall),"isNoWrap"in o&&s(1,r=o.isNoWrap),"cardWidth"in o&&s(0,d=o.cardWidth),"$$scope"in o&&s(6,t=o.$$scope)},[d,r,q,_,a,i,t,l]}class re extends A{constructor(e){super(),L(this,e,ie,ee,M,{limit:4,isSmall:5,isNoWrap:1,cardWidth:0})}}export{re as default,j as elementWidth,ne as getElementWidth};