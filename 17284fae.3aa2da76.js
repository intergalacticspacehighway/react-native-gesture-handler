(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),o=(n(0),n(191)),c=n(193),l=n(201),i={id:"example",title:"Running Example App"},p={id:"example",title:"Running Example App",description:"Example app code is located under Example/ folder in the repo.",source:"@site/docs/example.md",permalink:"/react-native-gesture-handler/docs/next/example",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/example.md",version:"next",sidebar:"docs",previous:{title:"Cross handler interactions",permalink:"/react-native-gesture-handler/docs/next/interactions"},next:{title:"Common handler properties",permalink:"/react-native-gesture-handler/docs/next/handler-common"}},s=[{value:"Running example app on Expo",id:"running-example-app-on-expo",children:[]},{value:"Running example app locally",id:"running-example-app-locally",children:[]}],u={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Example app code is located under ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/Example"}),Object(o.b)("inlineCode",{parentName:"a"},"Example/"))," folder in the repo.\nIt showcases the majority of the Gesture Handler library features.\nThe app consist of the list of single screen examples presenting the capabilities of the library.\nEach example is located under a separate folder under ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/Example"}),Object(o.b)("inlineCode",{parentName:"a"},"Example/")),"."),Object(o.b)(l.a,{mdxType:"GifGallery"},Object(o.b)("img",{src:Object(c.a)("gifs/sampleapp.gif"),width:"180",height:"320"})),Object(o.b)("h2",{id:"running-example-app-on-expo"},"Running example app on Expo"),Object(o.b)("p",null,"You can run example app on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://expo.io"}),"Expo"),". Follow instructions under ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"}),"this link")," to do so. Note that the app published to Expo is not the most up to date version. We publish updates whenever new version of Expo SDK is released. If you wish to try the most up to date version you will have to run example app locally. For that see below \ud83d\udc47"),Object(o.b)("h2",{id:"running-example-app-locally"},"Running example app locally"),Object(o.b)("p",null,"Before you begin you should follow ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/getting-started.html"}),"React Native's setup steps")," to make sure you have all the tools necessary to build and run React Native apps installed.\nThe example app is a regular React Native app, so in case of problems or to learn about available commands you may want to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/cli/blob/master/README.md"}),"check react-native cli documentation"),"."),Object(o.b)("p",null,"In order to run example app you need to clone the repo first:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:software-mansion/react-native-gesture-handler.git\n")),Object(o.b)("p",null,"Then go to the library folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd react-native-gesture-handler/\n")),Object(o.b)("p",null,"Install dependencies of library with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn\n")),Object(o.b)("p",null,"Then go to the ",Object(o.b)("inlineCode",{parentName:"p"},"Example")," folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd Example\n")),Object(o.b)("p",null,"Install dependencies of example with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn\n")),Object(o.b)("p",null,"Run development server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn start\n")),Object(o.b)("p",null,"Finally run one of the commands below in order to build, install and launch the app on Android:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"react-native run-android\n")),Object(o.b)("p",null,"or on iOS:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"react-native run-ios\n")),Object(o.b)("p",null,"You will need to have an Android or iOS device or emulator connected and ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-cli")," package installed globally."))}b.isMDXComponent=!0},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(d,l(l({ref:t},p),{},{components:n})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},192:function(e,t,n){"use strict";var a=n(0),r=n(51);t.a=function(){return Object(a.useContext)(r.a)}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(194);var a=n(192);function r(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},194:function(e,t,n){"use strict";var a=n(17),r=n(35),o=n(197),c="".startsWith;a(a.P+a.F*n(198)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return c?c.call(t,a,n):t.slice(n,n+a.length)===a}})},195:function(e,t,n){var a=n(17);a(a.S+a.F,"Object",{assign:n(199)})},196:function(e,t){t.f=Object.getOwnPropertySymbols},197:function(e,t,n){var a=n(72),r=n(24);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},198:function(e,t,n){var a=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(r){}}return!0}},199:function(e,t,n){"use strict";var a=n(11),r=n(23),o=n(196),c=n(71),l=n(50),i=n(73),p=Object.assign;e.exports=!p||n(18)((function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach((function(e){t[e]=e})),7!=p({},e)[n]||Object.keys(p({},t)).join("")!=a}))?function(e,t){for(var n=l(e),p=arguments.length,s=1,u=o.f,b=c.f;p>s;)for(var m,d=i(arguments[s++]),h=u?r(d).concat(u(d)):r(d),f=h.length,g=0;f>g;)m=h[g++],a&&!b.call(d,m)||(n[m]=d[m]);return n}:p},201:function(e,t,n){"use strict";n(195);var a=n(0),r=n.n(a),o={container:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},img:{border:"1px solid #acacac",borderRadius:"6px",boxShadow:"0 0 20px #acacac",marginTop:"1em",marginBottom:"1em"}};t.a=function(e){var t=e.children;return r.a.createElement("div",{style:o.container},a.Children.map(t,(function(e){return Object(a.cloneElement)(e,Object.assign(Object.assign({},e.props.style),{},{style:o.img}))})))}}}]);