(this.webpackJsonpstephenbryson=this.webpackJsonpstephenbryson||[]).push([[0],{128:function(e,t,a){e.exports=a.p+"static/media/hero.547f48bc.jpeg"},129:function(e,t,a){e.exports=a(289)},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},288:function(e,t,a){},289:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(125),o=a.n(c);a(134);function l(e){var t=e.Wrapper,a=e.wrapperProps,n=e.className,c=e.href,o=e.label,l=e.icon;return r.a.createElement(r.a.Fragment,null,r.a.createElement(t,Object.assign({href:c},a,{className:"button ".concat(n)}),r.a.createElement("p",{className:"w--medium m--none"},o),l&&r.a.createElement(b,{className:"button__icon",type:"far",icon:l})))}l.defaultProps={Wrapper:"a",wrapperProps:{},label:"",icon:"",className:""};var s=l;a(135);var i=function(){return r.a.createElement("div",{className:"contact"},r.a.createElement(u,null,r.a.createElement(O,null,r.a.createElement("h3",null,"Get in touch"),r.a.createElement("p",{className:"m--bottom-large"},"Feel free to reach out if you're looking for a developer, have a question, or just want to connect."),r.a.createElement(s,{href:"mailto:stephen.bryson1@gmail.com",className:"button--link",label:"stephen.bryson1@gmail.com",icon:"arrow-right"}))))};a(136);function m(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:"container ".concat(a)},t)}m.defaultProps={className:""};var u=m;a(137);var p=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(u,null,r.a.createElement("p",{className:"m--none"},"\xa9 2020 stephenbryson.com | All rights reserved")))},h=a(27);a(138);var f=function(){return r.a.createElement("header",{className:"header"},r.a.createElement(u,{className:"header__container"},r.a.createElement(h.b,{to:"/"},r.a.createElement(b,{icon:"code",className:"f--xxlarge"})),r.a.createElement(s,{href:"mailto:stephenbryson1@gmail.com",className:"button--small button--primary",label:"Get in touch"})))};a(143);var g=function(e){var t=e.title,a=e.desc,n=e.buttonLabel,c=e.img;return r.a.createElement("div",{className:"hero",style:{backgroundImage:"url(".concat(c,")")}},r.a.createElement(u,null,r.a.createElement(O,null,t&&r.a.createElement("h1",{className:"".concat(a?"h1--accent":"")},t),a&&r.a.createElement("p",null,a),n&&r.a.createElement(s,{label:"Click here",icon:"check"}))))},d=(a(144),function(e){var t=e.className,a=e.icon,n=e.type;return r.a.createElement("i",{className:"icon ".concat(t," ").concat(n," fa-").concat(a)})});d.defaultProps={className:"",type:"far"};var b=d,E=a(14),v=a(15),j=a(17),y=a(16),N=a(18),k=(a(145),function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={tags:a.props.tags},a}return Object(N.a)(t,e),Object(v.a)(t,[{key:"truncateDescription",value:function(){return this.props.desc.split(" ").splice(0,14).join(" ")+"..."}},{key:"render",value:function(){var e=this.props;return r.a.createElement(h.b,{to:e.url},r.a.createElement("div",{className:"project ".concat(e.className)},r.a.createElement("img",{className:"project__image",src:e.image,alt:"",title:""}),r.a.createElement("p",{className:"project__title f--large w--bold"},e.title),this.state.tags&&r.a.createElement("div",{className:"project__tags"},this.state.tags.map((function(e){return r.a.createElement(S,{className:"project__tags-item",key:e,label:e})}))),r.a.createElement("p",{className:"project__desc"},this.truncateDescription())))}}]),t}(n.Component));a(146);function w(e){var t=e.children,a=e.className;return r.a.createElement("section",{className:"section ".concat(a)},t)}w.defaultProps={className:""};var O=w,_=a(23),F=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(v.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),P=Object(_.f)(F),D=(a(147),function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(v.a)(t,[{key:"getVariant",value:function(){switch(this.props.label){case"ui":return"tag--ui";case"ux":return"tag--ux";case"react":return"tag--react";case"scss":return"tag--scss"}}},{key:"render",value:function(){var e=this.props;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"tag ".concat(this.getVariant()," f--xsmall w--medium ").concat(e.className)},e.label))}}]),t}(n.Component));D.defaultProps={Wrapper:"a",wrapperProps:{},label:"",icon:"",className:""};var S=D,x=a(128),R=a.n(x),A=a(55),B=a.n(A),C=new B.a({accessToken:"fBBlGUH5Sfj3r2HuM3XXpAtt",cache:{clear:"auto",type:"memory"}}),H=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).state={projects:[]},a.getProjectsFromStoryblok=function(){C.get("cdn/stories",{starts_with:"projects/"}).then((function(e){a.handleReportData(e)})).catch((function(e){e.projectsResponse&&404===e.projectsResponse.status?a.getProjectsFromStoryblok():console.error(e)}))},a.handleReportData=function(e){var t=e.data.stories;if(t){var n=t;a.setState({projects:n})}},a.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{title:"Hi, I'm Stephen. Front End Developer & Designer",img:R.a}),r.a.createElement(u,null,r.a.createElement(O,null,r.a.createElement("h3",null,"Latest projects"),a.state.projects.length>0&&r.a.createElement("div",{className:"g--grid"},a.state.projects.map((function(e){return r.a.createElement("div",{key:e.id,className:"g--grid__col"},r.a.createElement(k,{url:e.full_slug,image:e.content.image,title:e.name,desc:e.content.description,tags:e.tag_list}))}))))),r.a.createElement(i,null))},a}return Object(N.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.getProjectsFromStoryblok()}}]),t}(n.Component),W=new B.a({accessToken:"fBBlGUH5Sfj3r2HuM3XXpAtt",cache:{clear:"auto",type:"memory"}}),G=[{path:"/",exact:!0,component:H},{path:"/projects",component:function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={pages:[]},a.getPagesFromStoryblok=function(){W.get("cdn/stories",{starts_with:"projects/"}).then((function(e){a.handleReportData(e)})).catch((function(e){e.pagesResponse&&404===e.pagesResponse.status?a.getPagesFromStoryblok():console.error(e)}))},a.handleReportData=function(e){var t=e.data.stories;if(t){var n=t;a.setState({pages:n})}},a}return Object(N.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.getPagesFromStoryblok()}},{key:"render",value:function(){var e=window.location.pathname.replace(/^\/|\/$/g,"");return r.a.createElement(r.a.Fragment,null,this.state.pages.length>0&&r.a.createElement(r.a.Fragment,null,this.state.pages.map((function(t){return r.a.createElement("div",{key:t.id},t.full_slug===e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{img:t.content.hero_image,title:t.name,desc:t.content.description})))}))))}}]),t}(n.Component)}];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(288);o.a.render(r.a.createElement((function(){return r.a.createElement(h.a,null,r.a.createElement(P,null,r.a.createElement(f,null),r.a.createElement(_.c,null,G.map((function(e,t){return r.a.createElement(_.a,Object.assign({key:t},e))}))),r.a.createElement(p,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[129,1,2]]]);
//# sourceMappingURL=main.c7e39fad.chunk.js.map