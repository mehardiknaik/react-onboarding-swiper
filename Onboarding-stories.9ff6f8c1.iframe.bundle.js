/*! For license information please see Onboarding-stories.9ff6f8c1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_hardiknaik_react_onboarding_swiper=self.webpackChunk_hardiknaik_react_onboarding_swiper||[]).push([[707],{"./src/Onboarding.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Onboarding_stories});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),style=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/style.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(style.Z,options);style.Z&&style.Z.locals&&style.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SinglePage=({title,subtitle,color,image})=>{let titleElement=title;("string"==typeof title||title instanceof String)&&(titleElement=(0,jsx_runtime.jsx)("div",{className:"onboarding-title",children:title}));let subtitleElement=subtitle;return("string"==typeof subtitleElement||subtitleElement instanceof String)&&(subtitleElement=(0,jsx_runtime.jsx)("div",{className:"onboarding-subtitle",children:subtitle})),(0,jsx_runtime.jsxs)("div",{className:"onboarding-item "+("light"===color?"onboarding-item-light":"onboarding-item-dark"),children:[(0,jsx_runtime.jsx)("div",{className:"onboarding-image",children:image}),(0,jsx_runtime.jsxs)("div",{className:"onboarding-info",children:[titleElement,subtitleElement]})]})};SinglePage.displayName="SinglePage";const src_SinglePage=SinglePage;try{SinglePage.displayName="SinglePage",SinglePage.__docgenInfo={description:"",displayName:"SinglePage",props:{backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"Element"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string | Element"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!0,type:{name:"string | Element"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/SinglePage.tsx#SinglePage"]={docgenInfo:SinglePage.__docgenInfo,name:"SinglePage",path:"src/SinglePage.tsx#SinglePage"})}catch(__react_docgen_typescript_loader_error){}const BottomContainer=({onDone,onSkip,DoneButtonComponent,hideDone,hideSkip,SkipButtonComponent,done})=>(0,jsx_runtime.jsxs)("div",{className:"onboarding-bottom-container",children:[!hideDone&&done&&(0,jsx_runtime.jsx)(DoneButtonComponent,{onClick:()=>{"function"==typeof onDone&&onDone()}}),!hideSkip&&!done&&(0,jsx_runtime.jsx)(SkipButtonComponent,{onClick:()=>{"function"==typeof onSkip&&onSkip()}})]});BottomContainer.displayName="BottomContainer";const src_BottomContainer=BottomContainer;try{BottomContainer.displayName="BottomContainer",BottomContainer.__docgenInfo={description:"",displayName:"BottomContainer",props:{onDone:{defaultValue:null,description:"",name:"onDone",required:!0,type:{name:"() => void"}},onSkip:{defaultValue:null,description:"",name:"onSkip",required:!0,type:{name:"() => void"}},DoneButtonComponent:{defaultValue:null,description:"",name:"DoneButtonComponent",required:!0,type:{name:"(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => Element"}},SkipButtonComponent:{defaultValue:null,description:"",name:"SkipButtonComponent",required:!0,type:{name:"(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => Element"}},hideDone:{defaultValue:null,description:"",name:"hideDone",required:!0,type:{name:"boolean"}},hideSkip:{defaultValue:null,description:"",name:"hideSkip",required:!0,type:{name:"boolean"}},done:{defaultValue:null,description:"",name:"done",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/BottomContainer.tsx#BottomContainer"]={docgenInfo:BottomContainer.__docgenInfo,name:"BottomContainer",path:"src/BottomContainer.tsx#BottomContainer"})}catch(__react_docgen_typescript_loader_error){}const DoneButton=props=>(0,jsx_runtime.jsxs)("button",{className:"onboarding-button",...props,children:["Lets Go ",(0,jsx_runtime.jsx)("span",{className:"first"}),(0,jsx_runtime.jsx)("span",{className:"second"})," ",(0,jsx_runtime.jsx)("span",{className:"third"}),(0,jsx_runtime.jsx)("span",{className:"fourth"})]});DoneButton.displayName="DoneButton";const SkipButton=props=>(0,jsx_runtime.jsxs)("button",{className:"onboarding-button",...props,children:["Skip ",(0,jsx_runtime.jsx)("span",{className:"first"}),(0,jsx_runtime.jsx)("span",{className:"second"})," ",(0,jsx_runtime.jsx)("span",{className:"third"}),(0,jsx_runtime.jsx)("span",{className:"fourth"})]});SkipButton.displayName="SkipButton";try{DoneButton.displayName="DoneButton",DoneButton.__docgenInfo={description:"",displayName:"DoneButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Buttons.tsx#DoneButton"]={docgenInfo:DoneButton.__docgenInfo,name:"DoneButton",path:"src/Buttons.tsx#DoneButton"})}catch(__react_docgen_typescript_loader_error){}try{SkipButton.displayName="SkipButton",SkipButton.__docgenInfo={description:"",displayName:"SkipButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Buttons.tsx#SkipButton"]={docgenInfo:SkipButton.__docgenInfo,name:"SkipButton",path:"src/Buttons.tsx#SkipButton"})}catch(__react_docgen_typescript_loader_error){}const Onboarding=({pages,hideScroll=!1,onDone,onSkip,DoneButtonComponent=DoneButton,SkipButtonComponent=SkipButton,hideDone=!1,hideSkip=!1})=>{const[done,setDone]=(0,react.useState)(!1),ref=(0,react.useRef)(null),grad=pages.map(((x,i,v)=>`${x.backgroundColor} ${i/(v.length-1)*100}%`)).join(","),handleScroll=e=>{e.target.scrollHeight-e.target.scrollTop===e.target.clientHeight&&setDone(!0)};return(0,react.useEffect)((()=>(ref&&ref.current&&ref.current?.addEventListener("scroll",handleScroll),()=>{ref&&ref.current&&ref.current?.removeEventListener("scroll",handleScroll)})),[]),(0,jsx_runtime.jsx)("div",{className:"onboarding-container "+(hideScroll?"onboarding-hidescroll":""),ref,children:(0,jsx_runtime.jsxs)("div",{className:"onboarding-item-container",style:{background:`linear-gradient(180deg,${grad})`},children:[pages.map(((item,i)=>(0,react.createElement)(src_SinglePage,{...item,key:i}))),(0,jsx_runtime.jsx)(src_BottomContainer,{onDone,onSkip,DoneButtonComponent,SkipButtonComponent,hideDone,hideSkip,done})]})})};Onboarding.displayName="Onboarding";const src_Onboarding=Onboarding;try{Onboarding.displayName="Onboarding",Onboarding.__docgenInfo={description:"",displayName:"Onboarding",props:{pages:{defaultValue:null,description:"",name:"pages",required:!0,type:{name:"[pagesType, pagesType, ...pagesType[]]"}},hideScroll:{defaultValue:{value:"false"},description:"",name:"hideScroll",required:!1,type:{name:"boolean"}},onDone:{defaultValue:null,description:"",name:"onDone",required:!0,type:{name:"() => void"}},onSkip:{defaultValue:null,description:"",name:"onSkip",required:!0,type:{name:"() => void"}},DoneButtonComponent:{defaultValue:{value:'(\r\n  props: React.DetailedHTMLProps<\r\n    React.ButtonHTMLAttributes<HTMLButtonElement>,\r\n    HTMLButtonElement\r\n  >\r\n) => (\r\n  <button className="onboarding-button" {...props}>\r\n    Lets Go <span className="first" />\r\n    <span className="second" /> <span className="third" />\r\n    <span className="fourth" />\r\n  </button>\r\n)'},description:"",name:"DoneButtonComponent",required:!1,type:{name:"(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => Element"}},SkipButtonComponent:{defaultValue:{value:'(\r\n  props: React.DetailedHTMLProps<\r\n    React.ButtonHTMLAttributes<HTMLButtonElement>,\r\n    HTMLButtonElement\r\n  >\r\n) => (\r\n  <button className="onboarding-button" {...props}>\r\n    Skip <span className="first" />\r\n    <span className="second" /> <span className="third" />\r\n    <span className="fourth" />\r\n  </button>\r\n)'},description:"",name:"SkipButtonComponent",required:!1,type:{name:"(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => Element"}},hideDone:{defaultValue:{value:"false"},description:"",name:"hideDone",required:!1,type:{name:"boolean"}},hideSkip:{defaultValue:{value:"false"},description:"",name:"hideSkip",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Onboarding.tsx#Onboarding"]={docgenInfo:Onboarding.__docgenInfo,name:"Onboarding",path:"src/Onboarding.tsx#Onboarding"})}catch(__react_docgen_typescript_loader_error){}const Onboarding_stories={title:"Example/Onboarding",component:src_Onboarding,tags:["autodocs"],argTypes:{}},Primary={args:{pages:[{title:"Lorem ipsum dolor",backgroundColor:"rgb(0 27 255)",subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maiores in dolor quisquam quod quam! Doloribus autem exercitationem debitis odio, provident accusantium dolor reiciendis ipsa dignissimos sapiente necessitatibus obcaecati aspernatur!",color:"light",image:react.createElement("img",{src:"https://www.pngmart.com/files/10/Glossy-Apple-Logo-PNG-Clipart.png",height:"60%"})},{title:"Lorem ipsum dolor",backgroundColor:"#b2f8b2",subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maiores in dolor quisquam quod quam! Doloribus autem exercitationem debitis odio, provident accusantium dolor reiciendis ipsa dignissimos sapiente necessitatibus obcaecati aspernatur!",color:"dark",image:react.createElement("img",{src:"https://www.pngmart.com/files/10/Glossy-Apple-Logo-PNG-Clipart.png",height:"60%"})},{title:"Lorem ipsum dolor",backgroundColor:"rgb(255 0 19)",subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maiores in dolor quisquam quod quam! Doloribus autem exercitationem debitis odio, provident accusantium dolor reiciendis ipsa dignissimos sapiente necessitatibus obcaecati aspernatur!",color:"light",image:react.createElement("img",{src:"https://www.pngmart.com/files/10/Glossy-Apple-Logo-PNG-Clipart.png",height:"60%"})},{title:"Lorem ipsum dolor",backgroundColor:"rgb(183 0 219)",subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maiores in dolor quisquam quod quam! Doloribus autem exercitationem debitis odio, provident accusantium dolor reiciendis ipsa dignissimos sapiente necessitatibus obcaecati aspernatur!",color:"light",image:react.createElement("img",{src:"https://www.pngmart.com/files/10/Glossy-Apple-Logo-PNG-Clipart.png",height:"60%"})}],hideScroll:!0,onDone:()=>{alert("Done")},onSkip:()=>{alert("onSkip")}}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  // More on args: https://storybook.js.org/docs/react/writing-stories/args\n  args: {\n    pages: [{\n      title: "Lorem ipsum dolor",\n      backgroundColor: "rgb(0 27 255)",\n      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maiores in dolor quisquam quod quam! Doloribus autem exercitationem debitis odio, provident accusantium dolor reiciendis ipsa dignissimos sapiente necessitatibus obcaecati aspernatur!",\n      color: "light",\n      image: React.createElement("img", {\n        src: "https://www.pngmart.com/files/10/Glossy-Apple-Logo-PNG-Clipart.png",\n        height: "60%"\n      })\n    }, {\n      title: "Lorem ipsum dolor",\n      backgroundColor: "#b2f8b2",\n      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maiores in dolor quisquam quod quam! Doloribus autem exercitationem debitis odio, provident accusantium dolor reiciendis ipsa dignissimos sapiente necessitatibus obcaecati aspernatur!",\n      color: "dark",\n      image: React.createElement("img", {\n        src: "https://www.pngmart.com/files/10/Glossy-Apple-Logo-PNG-Clipart.png",\n        height: "60%"\n      })\n    }, {\n      title: "Lorem ipsum dolor",\n      backgroundColor: "rgb(255 0 19)",\n      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maiores in dolor quisquam quod quam! Doloribus autem exercitationem debitis odio, provident accusantium dolor reiciendis ipsa dignissimos sapiente necessitatibus obcaecati aspernatur!",\n      color: "light",\n      image: React.createElement("img", {\n        src: "https://www.pngmart.com/files/10/Glossy-Apple-Logo-PNG-Clipart.png",\n        height: "60%"\n      })\n    }, {\n      title: "Lorem ipsum dolor",\n      backgroundColor: "rgb(183 0 219)",\n      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maiores in dolor quisquam quod quam! Doloribus autem exercitationem debitis odio, provident accusantium dolor reiciendis ipsa dignissimos sapiente necessitatibus obcaecati aspernatur!",\n      color: "light",\n      image: React.createElement("img", {\n        src: "https://www.pngmart.com/files/10/Glossy-Apple-Logo-PNG-Clipart.png",\n        height: "60%"\n      })\n    }],\n    hideScroll: true,\n    onDone: () => {\n      alert("Done");\n    },\n    onSkip: () => {\n      alert("onSkip");\n    }\n\n    // DoneButtonComponent: (props) =>\n    //   React.createElement("button", props, "hello"),\n  }\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/style.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.onboarding-container {\n  height: var(--container-height, 100vh);\n  overflow: auto;\n}\n\n.onboarding-container.onboarding-hidescroll {\n  -ms-overflow-style: none; /* Internet Explorer 10+ */\n  scrollbar-width: none; /* Firefox */\n}\n\n.onboarding-container.onboarding-hidescroll::-webkit-scrollbar {\n  display: none; /* Safari and Chrome */\n}\n\n.onboarding-item-container {\n  height: auto;\n}\n.onboarding-item {\n  height: var(--container-height, 100vh);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n.onboarding-item:nth-child(even) {\n  flex-direction: row-reverse;\n}\n\n.onboarding-title {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n\n.onboarding-item-light .onboarding-title {\n  color: white;\n}\n.onboarding-item-light .onboarding-subtitle {\n  color: rgb(255 255 255 / 60%);\n}\n\n.onboarding-item-dark .onboarding-title {\n  color: black;\n}\n.onboarding-item-dark .onboarding-subtitle {\n  color: rgb(0 0 0 / 60%);\n}\n\n.onboarding-image,\n.onboarding-info {\n  text-align: center;\n  flex: 1;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.onboarding-bottom-container {\n  position: sticky;\n  bottom: 0;\n  display: flex;\n  justify-content: end;\n  background: #10101069;\n  align-items: center;\n  height: 60px;\n  backdrop-filter: blur(10px);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding-inline: 1rem;\n}\n\n@media only screen and (max-width: 600px) {\n  .onboarding-item {\n    display: block;\n  }\n  .onboarding-image,\n  .onboarding-info {\n    flex: auto;\n    height: 50%;\n  }\n}\n\n.onboarding-button {\n  padding: 10px;\n  position: relative;\n  background: transparent;\n  color: #ffa500;\n  border: 2px solid #ffa500;\n  cursor: pointer;\n  transition: all 0.7s;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.onboarding-button:hover {\n  color: #000;\n}\nspan {\n  transition: all 0.7s;\n  z-index: -1;\n}\n\n.onboarding-button .first {\n  content: "";\n  position: absolute;\n  right: 100%;\n  top: 0;\n  width: 25%;\n  height: 100%;\n  background: #ffa500;\n}\n\n.onboarding-button:hover .first {\n  top: 0;\n  right: 0;\n}\n.onboarding-button .second {\n  content: "";\n  position: absolute;\n  left: 25%;\n  top: -100%;\n  height: 100%;\n  width: 25%;\n  background: #ffa500;\n}\n\n.onboarding-button:hover .second {\n  top: 0;\n  left: 50%;\n}\n\n.onboarding-button .third {\n  content: "";\n  position: absolute;\n  left: 50%;\n  height: 100%;\n  top: 100%;\n  width: 25%;\n  background: #ffa500;\n}\n\n.onboarding-button:hover .third {\n  top: 0;\n  left: 25%;\n}\n\n.onboarding-button .fourth {\n  content: "";\n  position: absolute;\n  left: 100%;\n  top: 0;\n  height: 100%;\n  width: 25%;\n  background: #ffa500;\n}\n\n.onboarding-button:hover .fourth {\n  top: 0;\n  left: 0;\n}\n',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,sCAAsC;EACtC,cAAc;AAChB;;AAEA;EACE,wBAAwB,EAAE,0BAA0B;EACpD,qBAAqB,EAAE,YAAY;AACrC;;AAEA;EACE,aAAa,EAAE,sBAAsB;AACvC;;AAEA;EACE,YAAY;AACd;AACA;EACE,sCAAsC;EACtC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;AACA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd;AACA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,kBAAkB;EAClB,OAAO;EACP,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,aAAa;EACb,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;EACZ,2BAA2B;EAC3B,4BAA4B;EAC5B,6BAA6B;EAC7B,oBAAoB;AACtB;;AAEA;EACE;IACE,cAAc;EAChB;EACA;;IAEE,UAAU;IACV,WAAW;EACb;AACF;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,cAAc;EACd,yBAAyB;EACzB,eAAe;EACf,oBAAoB;EACpB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;AACA;EACE,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,MAAM;EACN,UAAU;EACV,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,MAAM;EACN,QAAQ;AACV;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,MAAM;EACN,SAAS;AACX;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,SAAS;EACT,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,MAAM;EACN,SAAS;AACX;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,YAAY;EACZ,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,MAAM;EACN,OAAO;AACT",sourcesContent:['.onboarding-container {\r\n  height: var(--container-height, 100vh);\r\n  overflow: auto;\r\n}\r\n\r\n.onboarding-container.onboarding-hidescroll {\r\n  -ms-overflow-style: none; /* Internet Explorer 10+ */\r\n  scrollbar-width: none; /* Firefox */\r\n}\r\n\r\n.onboarding-container.onboarding-hidescroll::-webkit-scrollbar {\r\n  display: none; /* Safari and Chrome */\r\n}\r\n\r\n.onboarding-item-container {\r\n  height: auto;\r\n}\r\n.onboarding-item {\r\n  height: var(--container-height, 100vh);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1rem;\r\n}\r\n.onboarding-item:nth-child(even) {\r\n  flex-direction: row-reverse;\r\n}\r\n\r\n.onboarding-title {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.onboarding-item-light .onboarding-title {\r\n  color: white;\r\n}\r\n.onboarding-item-light .onboarding-subtitle {\r\n  color: rgb(255 255 255 / 60%);\r\n}\r\n\r\n.onboarding-item-dark .onboarding-title {\r\n  color: black;\r\n}\r\n.onboarding-item-dark .onboarding-subtitle {\r\n  color: rgb(0 0 0 / 60%);\r\n}\r\n\r\n.onboarding-image,\r\n.onboarding-info {\r\n  text-align: center;\r\n  flex: 1;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.onboarding-bottom-container {\r\n  position: sticky;\r\n  bottom: 0;\r\n  display: flex;\r\n  justify-content: end;\r\n  background: #10101069;\r\n  align-items: center;\r\n  height: 60px;\r\n  backdrop-filter: blur(10px);\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  padding-inline: 1rem;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .onboarding-item {\r\n    display: block;\r\n  }\r\n  .onboarding-image,\r\n  .onboarding-info {\r\n    flex: auto;\r\n    height: 50%;\r\n  }\r\n}\r\n\r\n.onboarding-button {\r\n  padding: 10px;\r\n  position: relative;\r\n  background: transparent;\r\n  color: #ffa500;\r\n  border: 2px solid #ffa500;\r\n  cursor: pointer;\r\n  transition: all 0.7s;\r\n  overflow: hidden;\r\n  border-radius: 10px;\r\n}\r\n\r\n.onboarding-button:hover {\r\n  color: #000;\r\n}\r\nspan {\r\n  transition: all 0.7s;\r\n  z-index: -1;\r\n}\r\n\r\n.onboarding-button .first {\r\n  content: "";\r\n  position: absolute;\r\n  right: 100%;\r\n  top: 0;\r\n  width: 25%;\r\n  height: 100%;\r\n  background: #ffa500;\r\n}\r\n\r\n.onboarding-button:hover .first {\r\n  top: 0;\r\n  right: 0;\r\n}\r\n.onboarding-button .second {\r\n  content: "";\r\n  position: absolute;\r\n  left: 25%;\r\n  top: -100%;\r\n  height: 100%;\r\n  width: 25%;\r\n  background: #ffa500;\r\n}\r\n\r\n.onboarding-button:hover .second {\r\n  top: 0;\r\n  left: 50%;\r\n}\r\n\r\n.onboarding-button .third {\r\n  content: "";\r\n  position: absolute;\r\n  left: 50%;\r\n  height: 100%;\r\n  top: 100%;\r\n  width: 25%;\r\n  background: #ffa500;\r\n}\r\n\r\n.onboarding-button:hover .third {\r\n  top: 0;\r\n  left: 25%;\r\n}\r\n\r\n.onboarding-button .fourth {\r\n  content: "";\r\n  position: absolute;\r\n  left: 100%;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 25%;\r\n  background: #ffa500;\r\n}\r\n\r\n.onboarding-button:hover .fourth {\r\n  top: 0;\r\n  left: 0;\r\n}\r\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);