(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"happy100th",(function(){return i})),a.d(t,"howBashCompletionWorks",(function(){return o})),a.d(t,"addingBashCompletion",(function(){return n})),a.d(t,"palindromicSuperpermutations",(function(){return r})),a.d(t,"reactCommentarySidebar",(function(){return c})),a.d(t,"reactCommentarySidebar2",(function(){return p})),a.d(t,"grapplingWithInfinity",(function(){return m})),a.d(t,"pairProgrammingInSentient",(function(){return s})),a.d(t,"takingThePlunge",(function(){return l}));var i={title:"Happy 100th, tuzz!",path:"/blog/happy-100th",type:"article",description:"I’ve decided to start a blog to talk about my side projects.",keywords:"Chris Patuzzo,GitHub,Side Projects,Hobby,Computer Science,Sentient,Neural Network,3D,Game Engine,Puzzle,Problem",date:"2019-09-29T12:00Z"},o={title:"How Bash completion works",path:"/blog/how-bash-completion-works",type:"article",description:"Ever wondered how Bash completion works? In this first article on the topic, we’ll look at how it works under the hood.",keywords:"Chris Patuzzo,Bash,Ruby,Chef,completion,auto-completion,complete,auto-complete,how it works,behaviour,rbenv,nodenv,FizzBuzz",image:{path:"/images/fizzbuzz-completion.gif",width:800,height:630,bytes:245983,type:"image/gif"},video:{path:"/videos/fizzbuzz-completion.mp4",width:820,height:646,bytes:129214,type:"video/mp4"},date:"2019-10-06T12:00Z"},n={title:"Adding Bash completion to my tool",path:"/blog/adding-bash-completion",type:"article",description:"In this second article on Bash completion, we’ll see to apply it to a real-world use case: The tuzz automation tool.",keywords:"Chris Patuzzo,Bash,Ruby,completion,auto-completion,complete,auto-complete,behaviour",image:{path:"/images/zz-completion.gif",width:1012,height:480,bytes:165186,type:"image/gif"},video:{path:"/videos/zz-completion.mp4",width:1362,height:646,bytes:89935,type:"video/mp4"},date:"2019-10-06T12:01Z"},r={title:"Searching for palindromic superpermutations",path:"/blog/palindromic-superpermutations",type:"article",description:"I wrote a search algorithm to tackle a challenging combinatorial problem.",keywords:"Chris Patuzzo,superpermutation,search algorithm,depth first,Chaffin method,palindrome,branch and bound,incremental search,combinatorics",image:{path:"/images/chaffin-search.gif",width:800,height:435,bytes:350969,type:"image/gif"},video:{path:"/videos/chaffin-search.mp4",width:1280,height:696,bytes:237393,type:"video/mp4"},date:"2019-10-20T12:00Z"},c={title:"Building a commentary sidebar in React",path:"/blog/react-commentary-sidebar",type:"article",description:"How I built one of my favourite features: a commentary sidebar, written in React.",keywords:"Chris Patuzzo,React,commentary,sidebar,aside,hooks,CSS,positioning",image:{path:"/images/commentary-sidebar.gif",width:600,height:478,bytes:904040,type:"image/gif"},video:{path:"/videos/commentary-sidebar.mp4",width:1120,height:892,bytes:531454,type:"video/mp4"},date:"2019-10-30T12:00Z"},p={title:"Building a commentary sidebar in React (cont.)",path:"/blog/react-commentary-sidebar-2",type:"article",description:"Part two of building a commentary sidebar in React: taking a deeper look at the code.",keywords:"Chris Patuzzo,React,commentary,sidebar,aside,hooks,printing,bug",image:{path:"/images/commentary-sidebar.gif",width:600,height:478,bytes:904040,type:"image/gif"},video:{path:"/videos/commentary-sidebar.mp4",width:1120,height:892,bytes:531454,type:"video/mp4"},date:"2019-10-30T12:01Z"},m={title:"Grappling with infinity in constraint solvers",path:"/blog/grappling-with-infinity",type:"article",description:"How can we solve constraint-satisfaction problems that deal with infinite structure? This article is about Sentient, a programming language I wrote to solve tricky problems.",keywords:"Chris Patuzzo,Constraint programming,Constraint solvers,Sentient,Infinity,Approximations,SAT,Satisfiability,NP-hard,Turing completeness,Loop unrolling",image:{path:"/images/multi-dimensional-space.png",width:1556,height:1018,bytes:13652,type:"image/png"},video:{path:"/videos/sum-of-squares-optimisation.mp4",width:1218,height:700,bytes:307345,type:"video/mp4"},date:"2019-11-17T12:00Z"},s={title:"Pair programming with Dmitry in Sentient",path:"/blog/pair-programming-in-sentient",type:"article",description:"A rare opportunity to pair program in Sentient: a programming language I wrote a few years ago for solving constraint-based problems.",keywords:"Chris Patuzzo,Sentient,pair programming,screencast,pairing,programming,constraint solving,boolean satisfiability,SAT",image:{path:"/images/pair-programming-in-sentient.png",width:1200,height:659,bytes:118972,type:"image/png"},date:"2020-01-13T12:00Z"},l={title:"GameDev Notes 1: Taking the Plunge",path:"/blog/taking-the-plunge",type:"article",description:"How I added swimming to my indie platform game.",keywords:"Chris Patuzzo,game development,Rust,programming,swimming,water,underwater,animation",image:{path:"/images/gamedev-1/cloak-fin.gif",width:300,height:300,bytes:1021461,type:"image/gif"},video:{path:"/videos/cloak-fin.mp4",width:600,height:600,bytes:254449,type:"video/mp4"},date:"2020-10-02T12:00Z"}},162:function(e,t,a){"use strict";var i=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){var t=new Date(e),a=i[t.getMonth()],o=t.getDate(),n=t.getFullYear();return"".concat(a," ").concat(o,", ").concat(n)}},163:function(e,t,a){"use strict";var i=a(24),o=a.n(i),n=function e(t){var a=t.image,i=t.video,n=o()(t,["image","video"]);return React.createElement(React.Fragment,null,React.createElement(e.Page,n),a&&React.createElement(e.Image,a),i&&React.createElement(e.Video,i))};n.Page=function(e){var t=e.title,a=e.path,i=e.type,o=e.description,n=e.keywords;return React.createElement(Head,null,React.createElement("meta",{property:"og:title",content:t}),React.createElement("meta",{property:"og:url",content:"https://tuzz.tech".concat(a)}),React.createElement("meta",{property:"og:type",content:i}),React.createElement("meta",{property:"og:description",content:o}),React.createElement("meta",{name:"description",content:o}),React.createElement("meta",{name:"keywords",content:n}))},n.Image=function(e){var t=e.path,a=e.type,i=e.width,o=e.height;return React.createElement(Head,null,React.createElement("meta",{property:"og:image",content:"https://tuzz.tech".concat(t)}),React.createElement("meta",{property:"og:image:secure_url",content:"https://tuzz.tech".concat(t)}),React.createElement("meta",{property:"og:image:type",content:a}),React.createElement("meta",{property:"og:image:width",content:"".concat(i)}),React.createElement("meta",{property:"og:image:height",content:"".concat(o)}))},n.Video=function(e){var t=e.path,a=e.type,i=e.width,o=e.height;return React.createElement(Head,null,React.createElement("meta",{property:"og:video",content:"https://tuzz.tech".concat(t)}),React.createElement("meta",{property:"og:video:secure_url",content:"https://tuzz.tech".concat(t)}),React.createElement("meta",{property:"og:image:type",content:a}),React.createElement("meta",{property:"og:video:width",content:"".concat(i)}),React.createElement("meta",{property:"og:video:height",content:"".concat(o)}))},t.a=n},164:function(e,t,a){"use strict";var i=a(170),o=a.n(i);t.a=function(){return React.createElement("a",{href:"/feed.xml",target:"_blank",className:o.a.feed_icon},React.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},React.createElement("circle",{cx:"3.429",cy:"20.571",r:"3.429"}),React.createElement("path",{d:"m11.429 24h4.57c0-8.821-7.178-15.999-15.999-16v4.572c6.302.001 11.429 5.126 11.429 11.428z"}),React.createElement("path",{d:"m24 24c0-13.234-10.766-24-24-24v4.571c10.714 0 19.43 8.714 19.43 19.429z"})))}},165:function(e,t,a){"use strict";var i=a(7),o=a.n(i),n=a(171),r=a.n(n);t.a=function(e){var t=e.target,a=e.children,i=e.moveDown,n=void 0===i?0:i,c=useState(null),p=o()(c,2),m=p[0],s=p[1],l=function(){var e=t.current;if(e){var a=e.getBoundingClientRect(),i=window.scrollY+a.top+n;s({top:i,opacity:1,transition:"opacity 0.3s"})}};useEffect(l,[]),usePrint(l);var h=useDebounce(l,50);return useResize(h),useDelays(h,[200,500,1e3,2500,5e3,15e3,3e4]),React.createElement("aside",{className:r.a.aside,style:m},a)}},170:function(e,t,a){e.exports={feed_icon:"styles-feed_icon_SE8y"}},171:function(e,t,a){e.exports={aside:"styles-aside_161L"}}}]);