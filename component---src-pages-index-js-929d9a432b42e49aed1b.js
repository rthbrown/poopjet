"use strict";(self.webpackChunkpoopjet=self.webpackChunkpoopjet||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),o=new RegExp(s.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];s&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,o=i,i=!0,l++):i&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=i,i=!1,s=!0):(s=r(c)===c&&n(c)!==c,o=i,i=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return S},P:function(){return E},S:function(){return D},_:function(){return o},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return l}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,s,o,l){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(g,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:l}=e,c=o(e,f);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=o(e,h);const l=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},s,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var w;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,v);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const S=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};S.displayName="MainImage",S.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],x=["style","className"],C=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:s().object.isRequired,alt:L},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],R=new Set;let _,I;const A=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:u,class:p,onStartLoad:g,onLoad:m,onError:f}=e,h=o(e,j);const{width:y,height:b,layout:w}=n,v=c(y,b,w),{style:E,className:S}=v,k=o(v,N),x=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(u=p);const L=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,b);return(0,r.useEffect)((()=>{_||(_=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void R.add(C);if(I&&R.has(C))return;let t,r;return _.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;x.current&&(x.current.innerHTML=a(i({isLoading:!0,isLoaded:R.has(C),image:n},h)),R.has(C)||(t=requestAnimationFrame((()=>{x.current&&(r=o(x.current,C,R,s,g,m,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{R.has(C)&&I&&(x.current.innerHTML=I(i({isLoading:R.has(C),isLoaded:R.has(C),image:n},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},k,{style:i({},E,s,{backgroundColor:d}),className:S+(u?" "+u:""),ref:x,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(A,e):null}));O.propTypes=T,O.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:n,__error:s}=t,l=o(t,q);return s&&console.warn(s),n?r.createElement(e,i({image:n},l)):(console.warn("Image not loaded",a),null)}}const W=z((function(e){let{as:t="div",className:a,class:n,style:s,image:l,loading:p="lazy",imgClassName:g,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,w=o(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=i({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:v,height:L,layout:T,images:j,placeholder:N,backgroundColor:R}=l,_=c(v,L,T),{style:I,className:A}=_,O=o(_,x),q={fallback:void 0,sources:[]};return j.fallback&&(q.fallback=i({},j.fallback,{srcSet:j.fallback.srcSet?C(j.fallback.srcSet):void 0})),j.sources&&(q.sources=j.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,i({},O,{style:i({},I,s,{backgroundColor:h}),className:A+(a?" "+a:"")}),r.createElement(m,{layout:T,width:v,height:L},r.createElement(E,i({},u(N,!1,T,v,L,R,y,b))),r.createElement(S,i({"data-gatsby-image-ssr":"",className:g},w,d("eager"===p,!1,q,p,f)))))})),P=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},H=new Set(["fixed","fullWidth","constrained"]),B={src:s().string.isRequired,alt:L,width:P,height:P,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!H.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};W.displayName="StaticImage",W.propTypes=B;const D=z(O);D.displayName="StaticImage",D.propTypes=B},6558:function(e,t,a){a.r(t),a.d(t,{Head:function(){return y}});var r=a(7294),n=a(8032);const s={color:"#232129",padding:96,fontFamily:"-apple-system, Roboto, sans-serif, serif"},i={marginTop:0,marginBottom:64,maxWidth:800},o={color:"#663399"},l={marginBottom:96,paddingLeft:0},c={fontWeight:300,fontSize:24,maxWidth:560,marginBottom:30},d={color:"#8954A8",fontWeight:"bold",fontSize:16,verticalAlign:"5%"},u={...d,listStyleType:"none",marginBottom:24},p={color:"#232129",fontSize:14,marginTop:10,marginBottom:0,lineHeight:1.25},g="Toto Super Pooper Jet",m="https://www.build.com/product/summary/1821089?uid=4317580&jmtest=gg-gbav2_4317580&inv2=1&&&&&&source=gg-gba-pla_4317580!c11766103907!a115586859978!dc!ng&gclid=CjwKCAiAmJGgBhAZEiwA1JZols-q-fvYG0f02DhRpoLvBQqLHJUxxd_0qI_o4XS3tsENcv2v64lpKBoCOiQQAvD_BwE&gclsrc=aw.ds",f={color:"#fff",backgroundColor:"#088413",border:"1px solid #088413",fontSize:11,fontWeight:"bold",letterSpacing:1,borderRadius:4,padding:"4px 6px",display:"inline-block",position:"relative",top:-2,marginLeft:10,lineHeight:1},h=[];t.default=()=>r.createElement("main",{style:s},r.createElement("h1",{style:i},"The Super Duper Pooper Jet",r.createElement("br",null),r.createElement("span",{style:o},"A site dedicated to the awesomeness of poop jets")),r.createElement(n.S,{alt:"Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera",src:"/Users/rtbrown/Desktop/poopjet/src/images/happyRob.jpg",__imageData:a(7478)}),r.createElement("ul",{style:l},r.createElement("li",{style:u},r.createElement("a",{style:d,href:m+"?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter"},g)),h.map((e=>r.createElement("li",{key:e.url,style:{...c,color:e.color}},r.createElement("span",null,r.createElement("a",{style:d,href:e.url+"?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter"},e.text),e.badge&&r.createElement("span",{style:f,"aria-label":"New Badge"},"NEW!"),r.createElement("p",{style:p},e.description)))))));const y=()=>r.createElement("title",null,"Home Page")},7478:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/964a3feebcd95a9799800ed6f95bfd48/6d40b/happyRob.jpg","srcSet":"/static/964a3feebcd95a9799800ed6f95bfd48/adbe3/happyRob.jpg 579w,\\n/static/964a3feebcd95a9799800ed6f95bfd48/23f99/happyRob.jpg 1158w,\\n/static/964a3feebcd95a9799800ed6f95bfd48/6d40b/happyRob.jpg 2316w","sizes":"(min-width: 2316px) 2316px, 100vw"},"sources":[{"srcSet":"/static/964a3feebcd95a9799800ed6f95bfd48/970b0/happyRob.webp 579w,\\n/static/964a3feebcd95a9799800ed6f95bfd48/eb52a/happyRob.webp 1158w,\\n/static/964a3feebcd95a9799800ed6f95bfd48/b25c5/happyRob.webp 2316w","type":"image/webp","sizes":"(min-width: 2316px) 2316px, 100vw"}]},"width":2316,"height":3088}')}}]);
//# sourceMappingURL=component---src-pages-index-js-929d9a432b42e49aed1b.js.map