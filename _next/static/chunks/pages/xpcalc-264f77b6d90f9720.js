(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[524],{2025:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/xpcalc",function(){return t(8794)}])},8794:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(5893),s=t(7294),a=t(1163),o=t(811);t(5202);var i=t(2498),l=t(7754),c=t(1669),u=t(4418),x=t(3100),p=t(8691),d=t(7004),h=t(9564),g=t(9008),m=t.n(g);function f(){let[e,n]=(0,s.useState)({days:0,department:"None Chosen",departmentChosen:!1,getrankoptions:["None Chosen"],hours:0,is_hydrated:!1,maxxp:12800,minutes:0,neededxp:0,options:[],rank:"None Chosen",targetrank:"None Chosen",timetext:"",xpstr:"No Data",xpval:0,events:[{name:"state.hydrate"}],files:[]}),[t,g]=(0,s.useState)({state:null,events:[],processing:!1}),f=(0,a.useRouter)(),j=(0,s.useRef)(null),{isReady:v}=f,{colorMode:y,toggleColorMode:C}=(0,i.If)(),w=(0,s.useRef)(),_=(t,r)=>{(0,o.PF)(r),n({...e,events:[...e.events,...t]})};return(0,s.useEffect)(()=>{if(!v)return;j.current||(0,o.$j)(j,e,n,t,g,f,["websocket","polling"]);let r=async()=>{null!=t.state&&(n({...t.state,events:[...e.events,...t.events]}),g({state:null,events:[],processing:!1})),await (0,o.xq)(e,n,t,g,f,j.current)};w.current&&w.current.focus(),r()}),(0,s.useEffect)(()=>{let e=()=>_([(0,o.E)("state.hydrate",{})]);return f.events.on("routeChangeComplete",e),()=>{f.events.off("routeChangeComplete",e)}},[f]),(0,r.jsxs)(l.M,{children:[(0,r.jsxs)(c.g,{spacing:"1em",sx:{fontSize:"2em"},children:[(0,r.jsx)(u.X,{sx:{fontSize:"2em",paddingTop:"10%"},children:"XP Calculator"}),(0,r.jsx)(x.xu,{children:"Start by choosing a department below."}),(0,r.jsx)(x.xu,{children:(0,r.jsxs)(p.P,{onChange:e=>_([(0,o.E)("state.set_department",{value:e.target.value})],e),onMouseOut:e=>_([(0,o.E)("state.updateoptions",{})],e),children:[(0,r.jsx)("option",{value:"None Chosen",children:"None Chosen"}),(0,r.jsx)("option",{value:"O5 Command",children:"O5 Command"}),(0,r.jsx)("option",{value:"Site Director",children:"Site Director"}),(0,r.jsx)("option",{value:"Intelligence Agency",children:"Intelligence Agency"}),(0,r.jsx)("option",{value:"Rapid Response Team",children:"Rapid Response Team"}),(0,r.jsx)("option",{value:"Security Department",children:"Security Department"}),(0,r.jsx)("option",{value:"Class D",children:"Class D"}),(0,r.jsx)("option",{value:"Chaos Insurgency",children:"Chaos Insurgency"}),(0,r.jsx)("option",{value:"Scientific Department",children:"Scientific Department"}),(0,r.jsx)("option",{value:"Mobile Task Force",children:"Mobile Task Force"})]})}),(0,r.jsx)(s.Fragment,{children:(0,o.oA)("None Chosen"!==e.department)?(0,r.jsx)(s.Fragment,{children:(0,r.jsxs)(x.xu,{children:[(0,r.jsx)(x.xu,{sx:{textAlign:"center"},children:"Current Rank"}),(0,r.jsx)(p.P,{onChange:e=>_([(0,o.E)("state.set_rank",{value:e.target.value})],e),onFocus:e=>_([(0,o.E)("state.updateoptions",{})],e),children:e.options.slice(0,9).map((e,n)=>(0,r.jsx)("option",{value:e,children:e},n))})]})}):(0,r.jsx)(s.Fragment,{})}),(0,r.jsx)(s.Fragment,{children:(0,o.oA)("None Chosen"!==e.rank)?(0,r.jsx)(s.Fragment,{children:(0,r.jsxs)(x.xu,{children:[(0,r.jsx)(x.xu,{sx:{textAlign:"center"},children:"Target Rank"}),(0,r.jsx)(p.P,{onChange:e=>_([(0,o.E)("state.set_targetrank",{value:e.target.value})],e),onFocus:e=>_([(0,o.E)("state.updateoptions",{})],e),onMouseOut:e=>_([(0,o.E)("state.updatexpvar",{})],e),children:e.getrankoptions.map((e,n)=>(0,r.jsx)("option",{value:e,children:e},n))})]})}):(0,r.jsx)(s.Fragment,{})}),(0,r.jsx)(s.Fragment,{children:(0,o.oA)("None Chosen"!==e.targetrank)?(0,r.jsx)(s.Fragment,{children:(0,r.jsxs)(x.xu,{children:[(0,r.jsx)(x.xu,{sx:{textAlign:"center"},children:"Current XP"}),(0,r.jsxs)(d.Y2,{allowMouseWheel:!0,max:e.maxxp,min:0,onChange:e=>_([(0,o.E)("state.setxpval",{xp:e})],e),sx:{fontSize:"0.5em"},children:[(0,r.jsx)(d.zu,{}),(0,r.jsxs)(d.Fi,{children:[(0,r.jsx)(d.WQ,{}),(0,r.jsx)(d.Y_,{})]})]})]})}):(0,r.jsx)(s.Fragment,{})}),(0,r.jsx)(s.Fragment,{children:(0,o.oA)("None Chosen"!==e.targetrank)?(0,r.jsx)(s.Fragment,{children:(0,r.jsxs)(x.xu,{children:[(0,r.jsx)(u.X,{sx:{textAlign:"center"},children:"Needed XP:"}),(0,r.jsx)(h.x,{sx:{textAlign:"center"},children:e.neededxp+" XP"}),(0,r.jsx)(u.X,{sx:{textAlign:"center"},children:"Time to get:"}),(0,r.jsx)(h.x,{children:e.timetext})]})}):(0,r.jsx)(s.Fragment,{})})]}),(0,r.jsxs)(m(),{children:[(0,r.jsx)("title",{children:"Pynecone App"}),(0,r.jsx)("meta",{content:"A Pynecone app.",name:"description"}),(0,r.jsx)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},811:function(e,n,t){"use strict";let r;t.d(n,{E:function(){return C},$j:function(){return v},oA:function(){return w},PF:function(){return _},xq:function(){return j}});var s=t(6154),a=t(9367),o=t(1142),i=t.n(o),l=JSON.parse('{"P_":"http://209.126.80.217:8000/upload","Om":"ws://209.126.80.217:8000/event","H5":"http://209.126.80.217:8000/ping"}');l.H5;let c=l.Om,u=l.P_,x="token",p={},d=()=>{let e=new Date().getTime(),n=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=16*Math.random();return e>0?(r=(e+r)%16|0,e=Math.floor(e/16)):(r=(n+r)%16|0,n=Math.floor(n/16)),("x"==t?r:7&r|8).toString(16)})},h=()=>(r||window&&(window.sessionStorage.getItem(x)||window.sessionStorage.setItem(x,d()),r=window.sessionStorage.getItem(x)),r),g=(e,n)=>{for(let t in n){let r=e,s=t.split(".").slice(1);for(;s.length>0;)r=r[s.shift()];for(let e in n[t])r[e]=n[t][e]}},m=async(e,n,t)=>{if("_redirect"==e.name)return n.push(e.payload.path),!1;if("_console"==e.name)return console.log(e.payload.message),!1;if("_alert"==e.name)return alert(e.payload.message),!1;if("_set_focus"==e.name){let n=e.payload.ref in p?p[e.payload.ref]:e.payload.ref;return n.current.focus(),!1}if("_set_value"==e.name){let n=e.payload.ref in p?p[e.payload.ref]:e.payload.ref;return n.current.value=e.payload.value,!1}return e.token=h(),e.router_data=(e=>{let{pathname:n,query:t}=e;return{pathname:n,query:t}})(n),!!t&&(t.emit("event",JSON.stringify(e)),!0)},f=async(e,n,t)=>{"uploadFiles"==e.handler&&await y(n,t,e.name)},j=async(e,n,t,r,s,a)=>{if(t.processing||0==e.events.length)return;r({...t,processing:!0});let o=e.events.shift();if(n({...e,events:e.events}),o.handler)await f(o,e,r);else{let n=await m(o,s,a);n||r({...e,processing:!1})}},v=async(e,n,t,r,s,o,l)=>{let u=new URL(c);e.current=(0,a.ZP)(c,{path:u.pathname,transports:l,autoUnref:!1}),e.current.on("connect",()=>{j(n,t,r,s,o,e.current)}),e.current.on("event",function(e){g(n,(e=i().parse(e)).delta),s({processing:!0,state:n,events:e.events})})},y=async(e,n,t)=>{let r=e.files;if(0==r.length)return;let a={"Content-Type":r[0].type},o=new FormData;for(let e=0;e<r.length;e++)o.append("files",r[e],h()+":"+t+":"+r[e].name);await s.Z.post(u,o,a).then(t=>{let r=t.data;g(e,r.delta),n({processing:!1,state:e,events:r.events})})},C=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{name:e,payload:n,handler:t}},w=e=>Array.isArray(e)?e.length>0:!!e,_=e=>{e&&"submit"==e.type&&e.preventDefault()}}},function(e){e.O(0,[273,363,774,888,179],function(){return e(e.s=2025)}),_N_E=e.O()}]);