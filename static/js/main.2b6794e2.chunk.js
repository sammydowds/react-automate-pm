(this.webpackJsonpautomate_project_management=this.webpackJsonpautomate_project_management||[]).push([[0],{146:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),o=(t(95),t(96),t(10)),s=t(11),p=t(13),i=t(12),m=(t(97),t(29)),d=t(147),u=t(148),h=t(149),E=t(150),f=t(151),j=function(e){Object(p.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1},n.toggleNav=n.toggleNav.bind(Object(m.a)(n)),n}return Object(s.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{className:"navbar-style",fixed:"top",expand:"lg"},r.a.createElement(u.a,{className:"navbar-style"},r.a.createElement("img",{src:"assets/images/profileprojectile.png",height:"55",width:"55",alt:""}),"Projectile"),r.a.createElement(h.a,{onClick:this.toggleNav}),r.a.createElement(E.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(f.a,{className:"mr-auto",navbar:!0}))))}}]),t}(n.Component),g=t(168),v=t(154),P=t(155),b=t(169),M=t(30),C=t.n(M),O=t(153),N=t(156),y=t(157),w=t(158),x=t(159),A=t(160),D=t(152),L=function(){return r.a.createElement("div",{className:"h-100 text-center align-middle"},r.a.createElement(D.a,{type:"grow",color:"warning"}))};function S(e,a,t){if(e){var n=e.map((function(e){var n=e.status,l=function(e){var a=e.map((function(e){var a=C()(e.end);return(r.a.createElement("span",{className:"px-1"},r.a.createElement(O.a,{color:"dark"},e.name," ",a.fromNow())))}));return(r.a.createElement("span",null,a))}(a.filter((function(a){return e.id===a.projectId})).filter((function(e){return e.active})));return r.a.createElement("span",null,r.a.createElement("p",{style:{fontweight:"superbold"}},r.a.createElement("span",{className:"pr-2"},r.a.createElement("svg",{class:"bi bi-box-seam",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"})),"\xa0",r.a.createElement("span",{className:"project-link",onClick:function(){t(e.id)}},e.name),"\xa0"),r.a.createElement("p",{className:"ml-4"},n?r.a.createElement("span",null,r.a.createElement(O.a,{color:"success"},"On Track")):r.a.createElement("span",null,r.a.createElement(O.a,{className:"off-badge"},"Off Track"))," |",l),r.a.createElement("p",{className:"ml-4"})))}));return(r.a.createElement("span",null,n))}return r.a.createElement("div",null,"wtf")}var k=function(e){return e.projectsLoading?r.a.createElement(v.a,null,r.a.createElement(P.a,null,r.a.createElement(N.a,{className:"my-2 text-center card-border"},r.a.createElement(y.a,{className:"text-left"},r.a.createElement(w.a,{className:"pl-2"},r.a.createElement("h4",{lead:!0},"Open Projects: Work In Progress")),r.a.createElement(x.a,{className:"pl-2"},r.a.createElement("hr",null)),r.a.createElement(A.a,{className:"font-weight-bold"},r.a.createElement(L,null)))))):r.a.createElement(v.a,null,r.a.createElement(P.a,null,r.a.createElement(N.a,{className:"my-2 text-center card-border"},r.a.createElement(y.a,{className:"text-left"},r.a.createElement(w.a,{className:"pl-2"},r.a.createElement("h4",{lead:!0},"Open Projects: Work In Progress")),r.a.createElement(x.a,{className:"pl-2"},r.a.createElement("hr",null)),r.a.createElement(A.a,{className:"pt-1 pl-4 font-weight-bold"},S(e.projects,e.phases,e.handleProjectClicked))))))};var _=function(e){if(e.projectsLoading)return r.a.createElement(v.a,null,r.a.createElement(P.a,null,r.a.createElement(N.a,{className:"mt-2 card-border"},r.a.createElement(y.a,null,r.a.createElement(w.a,{className:"pl-2 normal-text text-center"},r.a.createElement("h6",{lead:!0},"Off Track")),r.a.createElement(x.a,null,r.a.createElement("hr",null)),r.a.createElement(A.a,{className:"font-weight-bold text-left pl-2"},r.a.createElement(L,null))))));var a=e.projects.filter((function(e){return!1===e.status}));return(r.a.createElement(v.a,null,r.a.createElement(P.a,null,r.a.createElement(N.a,{className:"mt-2 card-border"},r.a.createElement(y.a,null,r.a.createElement(w.a,{className:"pl-2 normal-text text-center"},r.a.createElement("h6",{lead:!0},"Off Track ",r.a.createElement(O.a,{className:"off-badge"},a.length))),r.a.createElement(x.a,null,r.a.createElement("hr",null)),r.a.createElement(A.a,{className:"font-weight-bold text-center"},function(e,a){var t=e.map((function(e){return r.a.createElement("span",null,r.a.createElement("p",{style:{fontweight:"superbold",fontSize:"12px"}},r.a.createElement("span",null,r.a.createElement("span",{className:"project-link",onClick:function(){a(e.id)}},e.name),"\xa0",r.a.createElement("svg",{class:"bi bi-flag-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"#ffa41b",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M3.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 0 0 .593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 0 1 9 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916A.5.5 0 0 1 3.5 9V3a.5.5 0 0 1 .223-.416l.04-.026z"})))))}));return(r.a.createElement("span",null,t))}(a,e.handleProjectClicked)))))))};var U=function(e){if(e.projectsLoading)return r.a.createElement(v.a,null,r.a.createElement(P.a,null,r.a.createElement(N.a,{className:"mt-2 card-border"},r.a.createElement(y.a,null,r.a.createElement(w.a,{className:"pl-2 normal-text text-center"},r.a.createElement("h6",{lead:!0},"Recent Changes")),r.a.createElement(x.a,null,r.a.createElement("hr",null)),r.a.createElement(A.a,{className:"font-weight-bold text-left pl-2"},r.a.createElement(L,null))))));var a=e.projects.filter((function(e){return C()(e.lastupdated,"YYYY-MM-DD")>C()().subtract(7,"days")}));return(r.a.createElement(v.a,null,r.a.createElement(P.a,null,r.a.createElement(N.a,{className:"mt-2 card-border"},r.a.createElement(y.a,null,r.a.createElement(w.a,{className:"pl-2 normal-text text-center"},r.a.createElement("h6",{lead:!0},"Recent Changes ",r.a.createElement(O.a,{className:"off-badge"},a.length))),r.a.createElement(x.a,null,r.a.createElement("hr",null)),r.a.createElement(A.a,{className:"font-weight-bold text-center"},function(e,a){if(null!=e){var t=e.map((function(e){return r.a.createElement("span",null,r.a.createElement("p",{style:{fontweight:"superbold",fontSize:"12px"}},r.a.createElement("span",null,r.a.createElement("span",{className:"project-link",onClick:function(){a(e.id)}},e.name),"\xa0",r.a.createElement("svg",{class:"bi bi-flag-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"#000839",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M3.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 0 0 .593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 0 1 9 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916A.5.5 0 0 1 3.5 9V3a.5.5 0 0 1 .223-.416l.04-.026z"})))))}));return(r.a.createElement("span",null,t))}return r.a.createElement("div",null,"WTF")}(a,e.handleProjectClicked)))))))},T=t(170),I=t(163),R=t(164),H=t(165),z=t(162),F=t(161),J=t(6),V=function(e){return e&&e.length},Y=function(e){return function(a){return!a||a.length<=e}},q=function(e){Object(p.a)(t,e);var a=Object(i.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"handleSubmit",value:function(e){var a=this.props.project.id;this.props.updateProject(a,e),this.props.closeProjectUpdateModal()}},{key:"render",value:function(){var e,a=this;return(r.a.createElement(J.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(v.a,{className:"form-group text-center"},r.a.createElement(F.a,{htmlFor:"author",md:4},r.a.createElement("strong",null,"Project Name: ")),r.a.createElement(P.a,{md:8},r.a.createElement(J.Control.text,{model:".name",id:"author",name:"author",defaultValue:this.props.project.name,className:"form-control",validators:{required:V,minLength:(e=5,function(a){return a&&a.length>=e}),maxLength:Y(50)}}),r.a.createElement(J.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 5 characters",maxLength:"Must be 50 characters or less"}}))),r.a.createElement(v.a,{className:"text-center m-2"},r.a.createElement(P.a,{md:5},"Status of Project:"),r.a.createElement(P.a,null,r.a.createElement("div",{className:"field"},r.a.createElement(J.Control.checkbox,{model:".status",defaultValue:this.props.project.status}),"\xa0",r.a.createElement("strong",null," Project is On Track")))),r.a.createElement(v.a,{className:"text-center m-2"},r.a.createElement(P.a,{md:5},"Project Active: "),r.a.createElement(P.a,null,r.a.createElement("div",{className:"field"},r.a.createElement(J.Control.checkbox,{model:".complete",defaultValue:this.props.project.complete}),"\xa0",r.a.createElement("strong",null," Project is Complete")))),r.a.createElement(v.a,{className:"text-center"},r.a.createElement(P.a,null,r.a.createElement(z.a,{type:"submit"},"Submit")))))}}]),t}(n.Component),B=function(e){Object(p.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(m.a)(n)),n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(s.a)(t,[{key:"handleSubmit",value:function(e){var a=this.props.phase.id;this.props.updatePhase(a,e),this.props.closePhaseUpdateModal()}},{key:"handleChange",value:function(e){console.log("CHANGE"),console.log(e)}},{key:"handleUpdate",value:function(e){console.log("UDPATE"),console.log(e)}},{key:"render",value:function(){var e=this;return(r.a.createElement(J.LocalForm,{onUpdate:function(a){return e.handleUpdate(a)},onChange:function(a){return e.handleChange(a)},onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(v.a,{className:"m-2"},r.a.createElement(P.a,null,r.a.createElement(F.a,null,"Start Date:")),r.a.createElement(P.a,{md:8},r.a.createElement(J.Control.input,{type:"date",defaultValue:this.props.phase.start,model:".start",id:"idk",name:"idk",className:"form-control"}))),r.a.createElement(v.a,{className:"m-2"},r.a.createElement(P.a,null,r.a.createElement(F.a,null,"End Date:")),r.a.createElement(P.a,{md:8},r.a.createElement(J.Control.input,{type:"date",defaultValue:this.props.phase.end,model:".end",id:"phaseEnd",name:"phaseEnd",className:"form-control"}))),r.a.createElement(v.a,{className:"text-center m-2"},r.a.createElement(P.a,{md:5},"Status of Project:"),r.a.createElement(P.a,null,r.a.createElement("div",{className:"field"},r.a.createElement(J.Control.checkbox,{model:".active",defaultValue:this.props.phase.active}),"\xa0",r.a.createElement("strong",null," Work in Progress")))),r.a.createElement(v.a,{className:"text-center m-2"},r.a.createElement(P.a,{md:5},"Project Active: "),r.a.createElement(P.a,null,r.a.createElement("div",{className:"field"},r.a.createElement(J.Control.checkbox,{model:".complete",defaultValue:this.props.phase.complete}),"\xa0",r.a.createElement("strong",null," Phase is Complete")))),r.a.createElement(v.a,{className:"text-center"},r.a.createElement(P.a,null,r.a.createElement(z.a,{type:"submit"},"Submit")))))}}]),t}(n.Component),W=function(e){return e&&e.length},Z=function(e){return function(a){return!a||a.length<=e}},G=function(e){Object(p.a)(t,e);var a=Object(i.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"handleSubmit",value:function(e,a){this.props.createPhase(e,a),this.props.closePhaseCreateModal()}},{key:"render",value:function(){var e,a=this;return(r.a.createElement(T.a,{isOpen:this.props.phaseCreateModal.open,toggle:this.props.closePhaseCreateModal,className:"text-center"},r.a.createElement(I.a,{toggle:this.props.closePhaseCreateModal,className:"off-badge"},"Create New Phase"),r.a.createElement(R.a,null,r.a.createElement(J.LocalForm,{onSubmit:function(e){return a.handleSubmit(a.props.projectId,e)}},r.a.createElement(v.a,{className:"form-group text-center"},r.a.createElement(F.a,{htmlFor:"author",md:4},r.a.createElement("strong",null,"Phase Name: ")),r.a.createElement(P.a,{md:8},r.a.createElement(J.Control.text,{model:".name",id:"author",name:"author",className:"form-control",validators:{required:W,minLength:(e=1,function(a){return a&&a.length>=e}),maxLength:Z(50)}}),r.a.createElement(J.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 5 characters",maxLength:"Must be 20 characters or less"}}))),r.a.createElement(v.a,{className:"m-2"},r.a.createElement(P.a,null,r.a.createElement(F.a,null,"Start Date:")),r.a.createElement(P.a,{md:8},r.a.createElement(J.Control.input,{type:"date",model:".start",id:"idk",name:"idk",className:"form-control"}))),r.a.createElement(v.a,{className:"m-2"},r.a.createElement(P.a,null,r.a.createElement(F.a,null,"End Date:")),r.a.createElement(P.a,{md:8},r.a.createElement(J.Control.input,{type:"date",model:".end",id:"phaseEnd",name:"phaseEnd",className:"form-control"}))),r.a.createElement(v.a,{className:"text-center m-2"},r.a.createElement(P.a,{md:5},"Status of Project:"),r.a.createElement(P.a,null,r.a.createElement("div",{className:"field"},r.a.createElement(J.Control.checkbox,{model:".active"}),"\xa0",r.a.createElement("strong",null," Work in Progress")))),r.a.createElement(v.a,{className:"text-center m-2"},r.a.createElement(P.a,{md:5},"Project Active: "),r.a.createElement(P.a,null,r.a.createElement("div",{className:"field"},r.a.createElement(J.Control.checkbox,{model:".complete"}),"\xa0",r.a.createElement("strong",null," Phase is Complete")))),r.a.createElement(v.a,{className:"text-center"},r.a.createElement(P.a,null,r.a.createElement(z.a,{type:"submit"},"Submit")))))))}}]),t}(n.Component),$=function(e){Object(p.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).projDetailsCard=r.a.createRef(),n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.projDetailsCard.current.focus()}},{key:"renderPhase",value:function(e){var a=this,t=C()(e.end,"YYYY-MM-DD"),n=C()(e.start,"YYYY-MM-DD");return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",{scope:"row"},e.active?r.a.createElement("span",{className:"text-danger font-weight-light"}," ",r.a.createElement(O.a,{color:"warning"}," WIP ")):r.a.createElement("div",null),e.complete?r.a.createElement("span",{className:"text-danger font-weight-light"}," ",r.a.createElement(O.a,{color:"success"}," Done ")):r.a.createElement("div",null)),r.a.createElement("td",null,e.name),r.a.createElement("td",null,n.format("M"),"/",n.date()," (",n.format("ddd"),")"),r.a.createElement("td",null,t.format("M"),"/",t.date()," (",t.format("ddd"),")"),r.a.createElement("td",null,t.fromNow()),r.a.createElement("td",null,t.diff(n,"days")),r.a.createElement("td",null,r.a.createElement("div",{onClick:function(){a.props.openPhaseUpdateModal(e.id)}},r.a.createElement("svg",{class:"bi bi-pencil",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"})))))}},{key:"renderPhaseForm",value:function(){var e=this;if(this.props.phaseUpdateModal.open){var a=this.props.phases.filter((function(a){return a.id===e.props.phaseUpdateModal.phaseId}))[0];return(r.a.createElement(T.a,{isOpen:this.props.phaseUpdateModal.open,className:"text-center"},r.a.createElement(I.a,{toggle:this.props.closePhaseUpdateModal,className:"off-badge"},"Update Phase: ",a.name),r.a.createElement(R.a,null,r.a.createElement(B,{phase:a,updatePhase:this.props.updatePhase,closePhaseUpdateModal:this.props.closePhaseUpdateModal}))))}}},{key:"renderProjectForm",value:function(){return r.a.createElement(T.a,{isOpen:this.props.projectUpdateModal.open},r.a.createElement(I.a,{toggle:this.props.closeProjectUpdateModal,className:"off-badge"},"Update ",this.props.project.name),r.a.createElement(R.a,null,r.a.createElement(q,{project:this.props.project,updateProject:this.props.updateProject,closeProjectUpdateModal:this.props.closeProjectUpdateModal})))}},{key:"render",value:function(){var e=this;if(this.props.projectsLoading)return r.a.createElement(L,null);var a=this.props.phases.map((function(a){return r.a.createElement("tr",null,e.renderPhase(a))}));return(r.a.createElement("div",{ref:this.projDetailsCard},r.a.createElement(N.a,{className:"my-2 card-border"},r.a.createElement(y.a,{className:"text-left"},r.a.createElement(w.a,{className:"pl-2 text-center"},r.a.createElement("h3",{lead:!0},this.props.project.name,"\xa0",this.props.project.status?r.a.createElement("span",null,r.a.createElement(O.a,{color:"success",className:"ml-1"},"On Track")):r.a.createElement("span",null,r.a.createElement(O.a,{className:"off-badge ml-1"},"Off Track")),"\xa0",r.a.createElement("span",{onClick:function(){e.props.openProjectUpdateModal(e.props.project.id)}},r.a.createElement("svg",{class:"bi bi-pencil",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"})))),r.a.createElement("hr",null)),r.a.createElement(x.a,{className:"mb-2 lead text-center"},"Project Phases"),r.a.createElement(A.a,{className:"pl-3 pb-3"},r.a.createElement(H.a,{size:"sm",className:"text-center overflow-auto",hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Phase"),r.a.createElement("th",null,"Start"),r.a.createElement("th",null,"End"),r.a.createElement("th",null,"Rel. End"),r.a.createElement("th",null,"Duration (Days)"),r.a.createElement("th",null))),r.a.createElement("tbody",null,a))),r.a.createElement("div",{className:"text-right"},r.a.createElement(z.a,{size:"sm",className:"align-end",outline:!0,color:"success",onClick:this.props.openPhaseCreateModal},"Add Phase"),"\xa0",r.a.createElement(z.a,{size:"sm",className:"align-end",outline:!0,color:"dark",onClick:this.props.handleCloseDetails},"Close Details"),this.renderPhaseForm(),this.renderProjectForm(),r.a.createElement(G,{phaseCreateModal:this.props.phaseCreateModal,closePhaseCreateModal:this.props.closePhaseCreateModal,createPhase:this.props.createPhase,projectId:this.props.project.id}))))))}}]),t}(n.Component),K=t(166),Q=t(167),X=function(e){return e&&e.length},ee=function(e){return function(a){return!a||a.length<=e}},ae=function(e){Object(p.a)(t,e);var a=Object(i.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"handleSubmit",value:function(e){this.props.createProject(e),this.props.closeProjectCreateModal()}},{key:"render",value:function(){var e,a=this;return(r.a.createElement(T.a,{isOpen:this.props.projectCreateModal.open,toggle:this.props.closeProjectCreateModal,className:"text-center"},r.a.createElement(I.a,{toggle:this.props.closeProjectCreateModal,className:"off-badge"},"Create New Project"),r.a.createElement(R.a,null,r.a.createElement(J.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(v.a,{className:"form-group text-center"},r.a.createElement(F.a,{htmlFor:"author",md:4},r.a.createElement("strong",null,"Project Name: ")),r.a.createElement(P.a,{md:8},r.a.createElement(J.Control.text,{model:".name",id:"author",name:"author",className:"form-control",validators:{required:X,minLength:(e=1,function(a){return a&&a.length>=e}),maxLength:ee(50)}}),r.a.createElement(J.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 5 characters",maxLength:"Must be 50 characters or less"}}))),r.a.createElement(v.a,{className:"text-center m-2"},r.a.createElement(P.a,{md:5},"Status of Project:"),r.a.createElement(P.a,null,r.a.createElement("div",{className:"field"},r.a.createElement(J.Control.checkbox,{model:".status"}),"\xa0",r.a.createElement("strong",null," Project is On Track")))),r.a.createElement(v.a,{className:"text-center m-2"},r.a.createElement(P.a,{md:5},"Project Active: "),r.a.createElement(P.a,null,r.a.createElement("div",{className:"field"},r.a.createElement(J.Control.checkbox,{model:".complete"}),"\xa0",r.a.createElement("strong",null," Project is Complete")))),r.a.createElement(v.a,{className:"text-center"},r.a.createElement(P.a,null,r.a.createElement(z.a,{type:"submit"},"Create")))))))}}]),t}(n.Component),te=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{className:"mt-1 font-weight-bold card-border"},r.a.createElement(K.a,{vertical:!0,className:"text-center w-100",flush:!0},r.a.createElement(Q.a,{className:"text-center",tag:"button",action:!0,onClick:e.openProjectCreateModal},r.a.createElement("div",null,r.a.createElement("svg",{class:"bi bi-plus-circle",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z","clip-rule":"evenodd"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z","clip-rule":"evenodd"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z","clip-rule":"evenodd"})),"\xa0",r.a.createElement("strong",null,"Add Project"))),r.a.createElement(Q.a,{tag:"button",className:"text-center",action:!0,disabled:!0},"All Projects ",r.a.createElement(O.a,null," ",e.numProjects," ")),r.a.createElement(Q.a,{tag:"button",className:"text-center",action:!0,disabled:!0},"Learn"),r.a.createElement(Q.a,{tag:"button",className:"text-center",disabled:!0},"My Profile"))),r.a.createElement(ae,{projectCreateModal:e.projectCreateModal,closeProjectCreateModal:e.closeProjectCreateModal,createProject:e.createProject}))};var ne=function(e){return r.a.createElement(g.a,{className:"container-spacing",fluid:!0},r.a.createElement(v.a,null,r.a.createElement(P.a,null,r.a.createElement(b.a,{color:"danger",className:"text-center mt-3",fade:!1},r.a.createElement("h4",{className:"alert-heading"},"Black Lives Matter."),r.a.createElement("p",null,"Here at Projectile we believe in accomplishing big things - but only when others arent oppressed. Help the cause. Help create a new history which does not repeat itself."),r.a.createElement("p",null,r.a.createElement("h5",null,r.a.createElement("a",{href:"https://blacklivesmatter.com/"},"Learn More, and Take Action.")))))),r.a.createElement(v.a,null,r.a.createElement(P.a,null,r.a.createElement(b.a,{color:"warning",className:"text-center mt-1",fade:!1},"Warning: This is a prototype only, and not suitable for production."))),r.a.createElement(v.a,{className:"h-100 justify-content-center"},r.a.createElement(P.a,{lg:"2"},r.a.createElement(te,{numProjects:e.projects.length,projectCreateModal:e.projectCreateModal,openProjectCreateModal:e.openProjectCreateModal,closeProjectCreateModal:e.closeProjectCreateModal,createProject:e.createProject}),r.a.createElement(_,{projects:e.projects,projectsLoading:e.projectsLoading,handleProjectClicked:e.openDetails}),r.a.createElement(U,{projects:e.projects,projectsLoading:e.projectsLoading,handleProjectClicked:e.openDetails})),r.a.createElement(P.a,{lg:"4"},r.a.createElement(k,{projects:e.projects,projectsLoading:e.projectsLoading,handleProjectClicked:e.openDetails,phases:e.phases})),r.a.createElement(P.a,{lg:"6"},e.projectDetails.open?r.a.createElement($,{project:e.projects[e.projectDetails.projectId],phases:e.phases.filter((function(a){return a.projectId===e.projectDetails.projectId})),handleCloseDetails:e.closeDetails,updateProject:e.updateProject,updatePhase:e.updatePhase,createPhase:e.createPhase,phaseUpdateModal:e.phaseUpdateModal,phaseCreateModal:e.phaseCreateModal,projectUpdateModal:e.projectUpdateModal,openPhaseUpdateModal:e.openPhaseUpdateModal,closePhaseUpdateModal:e.closePhaseUpdateModal,openProjectUpdateModal:e.openProjectUpdateModal,closeProjectUpdateModal:e.closeProjectUpdateModal,openPhaseCreateModal:e.openPhaseCreateModal,closePhaseCreateModal:e.closePhaseCreateModal}):r.a.createElement("div",null))))},re=t(31),le=t(24),ce=t(65),oe={projects:[{id:0,name:"React Front End",description:"First Project at AfterHours rebuilding components of ___ web app.",company:0,complete:!1,status:!1,lastupdated:"2020-06-14T18:51:53.140Z"},{id:1,name:"Django REST API",description:"First Project at AfterHours rebuilding components of ___ web app.",company:0,complete:!1,status:!1,lastupdated:"2020-06-14T20:06:47.770Z"}]},se={phases:[{id:0,name:"Engineering",description:"Mechanical engineer will work on his assignment, and review with customer",start:"2020-06-10",end:"2020-06-19",people:null,active:!1,complete:!0,projectId:0,lastupdated:"2020-06-14T20:03:00.107Z"},{id:1,name:"Testing",description:"Mechanical engineer will work on his assignment, and review with customer",start:"2020-06-14",end:"2020-06-19",people:null,active:!0,complete:!1,projectId:0,lastupdated:"2020-06-14T20:03:06.631Z"},{id:2,name:"Testing",description:"Mechanical engineer will work on his assignment, and review with customer",start:"2020-06-11",end:"2020-06-30",people:null,active:!0,complete:!1,projectId:1,lastupdated:"2020-06-12T19:40:22.108Z"},{name:"Finishing - Paint ",start:"2020-06-15",end:"2020-06-17",active:!1,lastupdated:"2020-06-14T20:03:11.187Z",projectId:0,id:3}]},pe=function(e){var a=new ce.b.Entity("schema",{attributeId:"id"});return Object(ce.a)(e,[a]).entities.schema},ie=function(){return{type:"PROJECTS_LOADING"}},me=function(e){return{type:"ADD_PROJECTS",payload:e}},de=function(e){return{type:"CREATE_PROJECT",payload:e}},ue=function(e){return{type:"CREATE_PHASE",payload:e}},he=function(e){return{type:"UPDATE_PROJECT",payload:e}},Ee=function(e){return{type:"UPDATE_PHASE",payload:e}},fe=function(){return{type:"PHASES_LOADING"}},je=function(e){return{type:"ADD_PHASES",payload:e}},ge=function(e){Object(p.a)(t,e);var a=Object(i.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("Main component mounted"),this.props.fetchProjects(),this.props.fetchPhases()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"main-container"},r.a.createElement(j,null),r.a.createElement(re.c,null,r.a.createElement(re.a,{path:"/",component:function(){return r.a.createElement(ne,{projects:Object.values(e.props.projects.projects),projectsLoading:e.props.projects.isLoading,updateProject:e.props.updateProject,phases:Object.values(e.props.phases.phases),phasesLoading:e.props.phases.isLoading,updatePhase:e.props.updatePhase,createProject:e.props.createProject,createPhase:e.props.createPhase,projectDetails:e.props.userinterface.projectDetails,phaseUpdateModal:e.props.userinterface.phaseUpdateModal,projectUpdateModal:e.props.userinterface.projectUpdateModal,phaseCreateModal:e.props.userinterface.phaseCreateModal,projectCreateModal:e.props.userinterface.projectCreateModal,openDetails:e.props.openDetails,closeDetails:e.props.closeDetails,openPhaseUpdateModal:e.props.openPhaseUpdateModal,closePhaseUpdateModal:e.props.closePhaseUpdateModal,openProjectUpdateModal:e.props.openProjectUpdateModal,closeProjectUpdateModal:e.props.closeProjectUpdateModal,openProjectCreateModal:e.props.openProjectCreateModal,closeProjectCreateModal:e.props.closeProjectCreateModal,openPhaseCreateModal:e.props.openPhaseCreateModal,closePhaseCreateModal:e.props.closePhaseCreateModal})}})))}}]),t}(n.Component),ve=Object(re.f)(Object(le.connect)((function(e){return{projects:e.projects,phases:e.phases,userinterface:e.userinterface}}),(function(e){return{fetchProjects:function(){e((function(e){e(ie(!0));var a=oe.projects,t=pe(a);e(me(t))}))},fetchPhases:function(){e((function(e){e(fe(!0));var a=se.phases,t=pe(a);e(je(t))}))},updateProject:function(a,t){e(function(e,a){return function(t){var n=Object.assign({},a);n.lastupdated=(new Date).toISOString();var r=Object.assign(oe.projects[e],n);oe.projects[e]=r,t(he(r))}}(a,t))},updatePhase:function(a,t){e(function(e,a){return function(t){var n=Object.assign({},a);n.lastupdated=(new Date).toISOString();var r=Object.assign(se.phases[e],n);se.phases[e]=r,t(Ee(r))}}(a,t))},closeDetails:function(){e((function(e){e({type:"DETAILS_CLOSE",payload:{open:!1,projectSelected:null}})}))},openDetails:function(a){e(function(e){return function(a){a({type:"DETAILS_OPEN",payload:{open:!0,projectId:e}})}}(a))},openPhaseUpdateModal:function(a){e(function(e){return function(a){a({type:"PHASE_MODAL_OPEN",payload:{open:!0,phaseId:e}})}}(a))},closePhaseUpdateModal:function(){e((function(e){e({type:"PHASE_MODAL_CLOSE",payload:{open:!1,phaseId:null}})}))},openProjectUpdateModal:function(a){e(function(e){return function(a){a({type:"PROJECT_MODAL_OPEN",payload:{open:!0,projectId:e}})}}(a))},closeProjectUpdateModal:function(){e((function(e){e({type:"PROJECT_MODAL_CLOSE",payload:{open:!1,projectId:null}})}))},openProjectCreateModal:function(){e((function(e){e({type:"PROJECT_CREATE_MODAL_OPEN",payload:{open:!0}})}))},closeProjectCreateModal:function(){e((function(e){e({type:"PROJECT_CREATE_MODAL_CLOSE",payload:{open:!1}})}))},openPhaseCreateModal:function(){e((function(e){e({type:"PHASE_CREATE_MODAL_OPEN",payload:{open:!0}})}))},closePhaseCreateModal:function(){e((function(e){e({type:"PHASE_CREATE_MODAL_CLOSE",payload:{open:!1}})}))},createProject:function(a){e(function(e){return function(a){var t=oe.projects.length,n=Object.assign({},e);n.lastupdated=(new Date).toISOString(),n.id=t,oe.projects.push(n),a(de(n))}}(a))},createPhase:function(a,t){e(function(e,a){return function(t){var n=se.phases.length,r=Object.assign({},a);r.lastupdated=(new Date).toISOString(),r.id=n,r.projectId=e,se.phases.push(r),t(ue(r))}}(a,t))}}}))(ge)),Pe=t(63),be=t(25),Me=t(18),Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,projects:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROJECTS":return Object(Me.a)({},e,{isLoading:!1,errMess:null,projects:a.payload});case"PROJECTS_LOADING":return Object(Me.a)({},e,{isLoading:!0,errMess:null,projects:[]});case"PROJECTS_FAILED":return Object(Me.a)({},e,{isLoading:!1,errMess:a.payload,projects:[]});case"UPDATE_PROJECT":var t=a.payload,n=Object.assign({},e);return n.projects[t.id]=t,Object(Me.a)({},e,{projects:n.projects});case"CREATE_PROJECT":var r=a.payload,l=Object.assign({},e);return l.projects[r.id]=r,Object(Me.a)({},e,{projects:l.projects});default:return e}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,phases:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PHASES":return Object(Me.a)({},e,{isLoading:!1,errMess:null,phases:a.payload});case"PHASES_LOADING":return Object(Me.a)({},e,{isLoading:!0,errMess:null,phases:[]});case"PHASES_FAILED":return Object(Me.a)({},e,{isLoading:!1,errMess:a.payload,phases:[]});case"UPDATE_PHASE":var t=a.payload,n=Object.assign({},e);return n.phases[t.id]=t,Object(Me.a)({},e,{phases:n.phases});case"CREATE_PHASE":var r=a.payload,l=Object.assign({},e);return l.phases[r.id]=r,Object(Me.a)({},e,{phases:l.phases});default:return e}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userinterface:null},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"DETAILS_OPEN":var t=a.payload,n=Object.assign({},e);return n.projectDetails=t,n;case"DETAILS_CLOSE":var r=a.payload,l=Object.assign({},e);return l.projectDetails=r,l;case"PHASE_MODAL_OPEN":var c=a.payload,o=Object.assign({},e);return o.phaseUpdateModal=c,o;case"PHASE_MODAL_CLOSE":var s=a.payload,p=Object.assign({},e);return p.phaseUpdateModal=s,p;case"PROJECT_MODAL_OPEN":var i=a.payload,m=Object.assign({},e);return m.projectUpdateModal=i,m;case"PROJECT_MODAL_CLOSE":var d=a.payload,u=Object.assign({},e);return u.projectUpdateModal=d,u;case"PROJECT_CREATE_MODAL_OPEN":var h=a.payload,E=Object.assign({},e);return E.projectCreateModal=h,E;case"PROJECT_CREATE_MODAL_CLOSE":var f=a.payload,j=Object.assign({},e);return j.projectCreateModal=f,j;case"PHASE_CREATE_MODAL_OPEN":var g=a.payload,v=Object.assign({},e);return v.phaseCreateModal=g,v;case"PHASE_CREATE_MODAL_CLOSE":var P=a.payload,b=Object.assign({},e);return b.phaseCreateModal=P,b;default:return e}},ye=t(88),we=t(89),xe=t.n(we),Ae={projectDetails:{open:!1,projectId:null},phaseUpdateModal:{open:!1,phaseId:null},projectUpdateModal:{open:!1,projectId:null},projectCreateModal:{open:!1},phaseCreateModal:{open:!1}},De=Object(be.createStore)(Object(be.combineReducers)({projects:Ce,phases:Oe,userinterface:Ne}),{userinterface:Ae},Object(be.applyMiddleware)(ye.a,xe.a)),Le=function(e){Object(p.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(le.Provider,{store:De},r.a.createElement(Pe.a,null,r.a.createElement(ve,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,a,t){e.exports=t(146)},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.2b6794e2.chunk.js.map