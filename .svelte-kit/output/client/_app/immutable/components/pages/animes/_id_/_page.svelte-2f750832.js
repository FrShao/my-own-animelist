import{S as H,i as L,s as P,M as z,k as c,l as d,m as v,h as o,b as j,N as F,B as k,H as J,q as I,r as E,G as s,a as A,c as G,L as B,n as m}from"../../../../chunks/index-cf589771.js";import{p as K}from"../../../../chunks/stores-ad19ad07.js";function O(l){let t,a,e=l[4].message+"",r;return{c(){t=c("div"),a=I("Error: "),r=I(e)},l(u){t=d(u,"DIV",{});var i=v(t);a=E(i,"Error: "),r=E(i,e),i.forEach(o)},m(u,i){j(u,t,i),s(t,a),s(t,r)},p:k,d(u){u&&o(t)}}}function Q(l){let t,a,e,r,u,i,n,_,C,M,f,p,q,w,g,y;return{c(){t=c("div"),a=c("div"),e=c("img"),u=A(),i=c("div"),n=c("div"),_=c("img"),M=A(),f=c("div"),p=c("div"),q=I("Add to list"),w=A(),g=c("div"),y=I("favorite"),this.h()},l(b){t=d(b,"DIV",{class:!0});var h=v(t);a=d(h,"DIV",{class:!0});var N=v(a);e=d(N,"IMG",{src:!0,alt:!0}),N.forEach(o),u=G(h),i=d(h,"DIV",{class:!0});var D=v(i);n=d(D,"DIV",{class:!0});var S=v(n);_=d(S,"IMG",{src:!0,alt:!0}),S.forEach(o),M=G(D),f=d(D,"DIV",{class:!0});var V=v(f);p=d(V,"DIV",{});var W=v(p);q=E(W,"Add to list"),W.forEach(o),w=G(V),g=d(V,"DIV",{});var x=v(g);y=E(x,"favorite"),x.forEach(o),V.forEach(o),D.forEach(o),h.forEach(o),this.h()},h(){B(e.src,r=l[0].data.images.jpg.large_image_url)||m(e,"src",r),m(e,"alt",l[0].data.title+"-banner.jpg"),m(a,"class","banner"),B(_.src,C="")||m(_,"src",C),m(_,"alt",""),m(n,"class","thumbnail"),m(f,"class","thumbnail-buttons"),m(i,"class","thumbnail-card"),m(t,"class","poster")},m(b,h){j(b,t,h),s(t,a),s(a,e),s(t,u),s(t,i),s(i,n),s(n,_),s(i,M),s(i,f),s(f,p),s(p,q),s(f,w),s(f,g),s(g,y)},p:k,d(b){b&&o(t)}}}function R(l){let t,a;return{c(){t=c("div"),a=I("Waiting for informations ...")},l(e){t=d(e,"DIV",{});var r=v(t);a=E(r,"Waiting for informations ..."),r.forEach(o)},m(e,r){j(e,t,r),s(t,a)},p:k,d(e){e&&o(t)}}}function T(l){let t,a={ctx:l,current:null,token:null,hasCatch:!0,pending:R,then:Q,catch:O,value:0,error:4};return z(l[0],a),{c(){t=c("main"),a.block.c()},l(e){t=d(e,"MAIN",{});var r=v(t);a.block.l(r),r.forEach(o)},m(e,r){j(e,t,r),a.block.m(t,a.anchor=null),a.mount=()=>t,a.anchor=null},p(e,[r]){l=e,F(a,l,r)},i:k,o:k,d(e){e&&o(t),a.block.d(),a.token=null,a=null}}}function U(l,t,a){let e;J(l,K,n=>a(2,e=n));let{id:r=e.params.id}=t;async function u(){const n=await fetch(`https://api.jikan.moe/v4/anime/${r}/full`);return!n.ok||n.status===404?[]:await n.json()}let i=u();return l.$$set=n=>{"id"in n&&a(1,r=n.id)},[i,r]}class Z extends H{constructor(t){super(),L(this,t,U,T,P,{id:1})}}export{Z as default};
