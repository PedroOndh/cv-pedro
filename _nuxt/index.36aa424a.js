import{a as p,o as s,b as i,e,f as b,h as m,i as x,F as d,r,j as u,t as n,k as h,p as g,l as y,m as f}from"./entry.1450dabc.js";const S=""+globalThis.__publicAssetsURL("assets/lakes.jpg"),k={},$={class:"cv-about-me cv-section",id:"about-me"},w=e("h1",null,[b(" Hi! I am "),e("b",null,"Pedro Ondiviela")],-1),E=e("h2",null,"About me",-1),M=e("p",null," I'm a Front-end Developer, expert in complex interfaces and animations, in the point where UX and programming met. ",-1),D=e("p",null,"I am from Asturias, a beautiful and green area in the north of Spain.",-1),P=e("div",{class:"cv-about-me__homeland"},[e("img",{src:S,alt:"lake image"})],-1),I=[w,E,M,D,P];function T(c,_){return s(),i("section",$,I)}const F=p(k,[["render",T]]),U=""+globalThis.__publicAssetsURL("assets/moon.svg"),A=""+globalThis.__publicAssetsURL("assets/earth.svg"),R=m({__name:"Star",setup(c){const _=`${Math.random()*100}%`,v=`${Math.random()*100}%`,l=`${Math.max(2,Math.random()*6)}px`,t=`${Math.random()*4}s`;return(o,we)=>(s(),i("div",{class:"cv-star-decoration",style:x(`top: ${_}; left: ${v}; width: ${l}; height: ${l}; animation-delay: ${t};`)},null,4))}}),C=p(R,[["__scopeId","data-v-10513869"]]),a=c=>(g("data-v-29daf6f1"),c=c(),y(),c),L={class:"cv-experience cv-section",id:"experience"},V={class:"cv-experience__background"},H=a(()=>e("img",{class:"cv-experience__moon",src:U,alt:"Moon"},null,-1)),J=a(()=>e("img",{class:"cv-experience__earth",src:A,alt:"Earth"},null,-1)),B=a(()=>e("h2",{class:"cv-experience__title"},"Experience",-1)),N={class:"cv-experience__list"},W={class:"cv-experience__list-item"},X=a(()=>e("div",{class:"cv-experience__list-item-background"},null,-1)),j={class:"cv-experience__list-item-duration"},Q={class:"cv-experience__list-item-text"},O={class:"cv-experience__list-item-title"},G={class:"cv-experience__list-item-company"},z={class:"cv-experience__list-item-time"},Y={class:"cv-experience__list-item-description"},q={class:"cv-experience__technologies-wrapper"},K={key:0,class:"cv-experience__list-item-technologies cv-experience__list-item-technologies--front"},Z=a(()=>e("div",{class:"cv-experience__technology-title"},"Front",-1)),ee={class:"cv-experience__list-item-technology-wrapper"},te={class:"cv-experience__list-item-technology"},se={key:1,class:"cv-experience__list-item-technologies cv-experience__list-item-technologies--test"},ie=a(()=>e("div",{class:"cv-experience__technology-title"},"Test",-1)),ne={class:"cv-experience__list-item-technology-wrapper"},ce={class:"cv-experience__list-item-technology"},oe={key:2,class:"cv-experience__list-item-technologies cv-experience__list-item-technologies--back"},ae=a(()=>e("div",{class:"cv-experience__technology-title"},"Back",-1)),_e={class:"cv-experience__list-item-technology-wrapper"},de={class:"cv-experience__list-item-technology"},re={key:3,class:"cv-experience__list-item-technologies cv-experience__list-item-technologies--ops"},le=a(()=>e("div",{class:"cv-experience__technology-title"},"DevOps",-1)),pe={class:"cv-experience__list-item-technology-wrapper"},ve={class:"cv-experience__list-item-technology"},he=m({__name:"Experience",setup(c){const _=[{title:"Front-end Engineer",start:"mar 2021",end:"present",duration:"2y 8m",months:31,company:"Empathy.co",description:"Front-end Engineer leading tech in the Documentation and web teams (3-4 devs).",front:["Typescript","Vue","React","D3.js","Vuepress","Redux","Vuex","Nuxt","Jekyll"],test:["Jest","Cypress"],back:["Node.js","Express"],ops:["Github actions","AWS","Jenkins"]},{title:"UX & Front-end",start:"feb 2020",end:"mar 2021",duration:"1y 2m",months:14,company:"Empathy.co",description:`Front-end Developer and UX Designer as part of the UX Team.

Centered in developing complex layouts and animations.`,front:["Typescript","Vue","Vuex","React","Webpack","Nuxt","Jekyll","UX"]},{title:"Front-end Developer",start:"oct 2019",end:"feb 2020",duration:"5m",months:5,company:"Capgemini",description:"Front-end development with React, Redux, websockets and API REST services",front:["Typescript","React","Redux","Webpack"],back:["Websockets","API REST"]},{title:"UX/UI Developer",start:"oct 2018",end:"sep 2019",duration:"1y",months:12,company:"DIL SE Estudio Creativo",description:`Development and layout of custom web pages with HTML, CSS, JavaScript, PHP, WordPress, responsive layouts & Génesis Framework.

Occasional intervention in the design process, highlighting UX values of the final product.`,front:["HTML","CSS","SCSS","Javascript","Wordpress","UX"],back:["PHP"]},{title:"Scholarship in web development",start:"may 2018",end:"sep 2018",duration:"5m",months:5,company:"3WAYS",description:`Edition and updating of Apps and web pages with HTML, CSS, JavaScript, JQuery & Bootstrap.
Edition of back and databases with PHP, MySQL y PHPMyAdmin.`,front:["HTML","CSS","Javascript","JQuery","Bootstrap"],back:["PHP","MySQL"]}];return(v,l)=>(s(),i("section",L,[e("div",V,[(s(),i(d,null,r(1e3,t=>u(C,{key:t})),64)),H,J]),B,e("ul",N,[(s(),i(d,null,r(_,t=>e("li",W,[X,e("div",j,n(t.duration),1),e("div",Q,[e("h3",O,n(t.title),1),e("div",G,[e("b",null,n(t.company),1)]),e("div",z,n(t.start)+" - "+n(t.end),1),e("p",Y,n(t.description),1)]),e("div",q,[t.front?(s(),i("div",K,[Z,e("div",ee,[(s(!0),i(d,null,r(t.front,o=>(s(),i("span",te,n(o),1))),256))])])):h("",!0),t.test?(s(),i("div",se,[ie,e("div",ne,[(s(!0),i(d,null,r(t.test,o=>(s(),i("span",ce,n(o),1))),256))])])):h("",!0),t.back?(s(),i("div",oe,[ae,e("div",_e,[(s(!0),i(d,null,r(t.back,o=>(s(),i("span",de,n(o),1))),256))])])):h("",!0),t.ops?(s(),i("div",re,[le,e("div",pe,[(s(!0),i(d,null,r(t.ops,o=>(s(),i("span",ve,n(o),1))),256))])])):h("",!0)])])),64))])]))}}),ue=p(he,[["__scopeId","data-v-29daf6f1"]]),me={},be={class:"cv-studies",id:"studies"},xe=f('<h2 class="cv-studies__title" data-v-44a445ab>Studies</h2><div class="cv-studies__wrapper" data-v-44a445ab><div class="cv-studies__section cv-studies__section--first" data-v-44a445ab><h3 class="cv-studies__section-title cv-studies__section-title--second" data-v-44a445ab> Bachelor in architecture </h3><p data-v-44a445ab>2011-2017</p><p data-v-44a445ab>Universidad de Valladolid</p></div><div class="cv-studies__section cv-studies__section--second" data-v-44a445ab><h3 class="cv-studies__section-title cv-studies__section-title--third" data-v-44a445ab> Master&#39;s degree in Interactive Design </h3><p data-v-44a445ab>2017-2018</p><p data-v-44a445ab>Escuela Superior de Diseño de Madrid</p></div><div class="cv-studies__section cv-studies__section--third" data-v-44a445ab><h3 class="cv-studies__section-title cv-studies__section-title--third" data-v-44a445ab> Full stack Web Development Bootcamp </h3><p data-v-44a445ab>2017-2018</p><p data-v-44a445ab>Escuela Superior de Diseño de Madrid</p><h3 class="cv-studies__section-title cv-studies__section-title--third" data-v-44a445ab> 5+ years of Front-end experience </h3><p data-v-44a445ab>2017-present</p></div></div>',2),ge=[xe];function ye(c,_){return s(),i("section",be,ge)}const fe=p(me,[["render",ye],["__scopeId","data-v-44a445ab"]]);const Se={},ke={class:"cv-main"};function $e(c,_){const v=F,l=ue,t=fe;return s(),i("main",ke,[u(v),u(l),u(t)])}const Me=p(Se,[["render",$e],["__scopeId","data-v-1eb6da69"]]);export{Me as default};
