(this.webpackJsonpawesome=this.webpackJsonpawesome||[]).push([[0],{128:function(e,t){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),o=a.n(r),c=a(26),m=a(27),i=a(30),l=a(29),u=a(50),p=a(10),h=a(161),g=a(165),d=a(166),f=a(169),v=a(167),y=(a(56),function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:""},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(h.a,{className:"form-paper"},s.a.createElement(g.a,{variant:"h6",gutterBottom:!0},"Chat with random strangers"),s.a.createElement(g.a,{variant:"body2",component:"p",gutterBottom:!0},"Welcome to the Quickchatzz free Chat Roulette.You Must be 13+ to start a random chat with stranger.",s.a.createElement("br",null),"How to chat with strangers safely?",s.a.createElement("br",null),"Don't share your personal information or contacts,don't send any money to strangers.",s.a.createElement("br",null),"Enjoy the Quickchatzz!",s.a.createElement("br",null)),s.a.createElement(d.a,{container:!0,justify:"space-between",alignItems:"center",style:{marginTop:"20px"}},s.a.createElement(d.a,{item:!0,xs:9},s.a.createElement(f.a,{variant:"outlined",label:"Username",size:"small",style:{width:"100%"},onChange:function(t){e.setState({username:t.target.value}),e.props.setUsername(t.target.value)},onKeyDown:function(t){13==t.keyCode&&""!==e.state.username&&0!==e.state.username.indexOf(" ")&&e.props.history.push("/room")}})),s.a.createElement(d.a,{item:!0,xs:3,sm:2},s.a.createElement(v.a,{color:"primary",variant:"contained",size:"small",disabled:""==this.state.username||0===this.state.username.indexOf(" "),onClick:function(){e.props.history.push("/room")}},"start"))))}}]),a}(n.Component)),E=Object(p.e)(y),b=a(79),w=a.n(b),x=a(170),k=a(168),j=a(81),O=a.n(j),S=a(80),M=a.n(S),C=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={connected:!1,messages:[],src:null,username:"saiteja",activeMsg:"",persons:0},n.componentDidUpdate=function(){n.scrollIntoViewmsg()},n.componentDidMount=function(){n.socket=w()("https://chat-app-using-node.herokuapp.com"),n.socket.on("new-other-user-connected",(function(e){for(var t=0;t<1;t++){var a={name:e,msg:"Joined"},s=n.state.messages;s.push(a),n.setState({messages:s}),n.setState({persons:n.state.persons+1})}})),n.socket.on("msg-by-other",(function(e){for(var t=0;t<1;t++){var a={name:e.name,msg:e.message};console.log("msg by ",e.name,e.message);var s=n.state.messages;s.push(a),console.log(s),n.setState({messages:s})}})),n.socket.on("disconnected",(function(e){var t={name:e,msg:"left"},a=n.state.messages;a.push(t),console.log(a),n.setState({messages:a}),n.setState({persons:n.state.persons-1})})),n.socket.on("number-of-users",(function(e){var t=Object.keys(e).length;n.setState({persons:t})})),n.setState({username:n.props.username}),n.submitName()},n.scrollIntoViewmsg=function(){n.chatboxRef.current.scrollIntoView({behavior:"smooth"})},n.submitName=function(){var e=n.state.messages;e.push({name:"You ",msg:"Joined"}),console.log(e),n.setState({messages:e}),n.setState({connected:!0}),n.socket.emit("new-user-connected",n.props.username)},n.sendMessage=function(){if(""!==n.state.activeMsg&&""!==n.state.activeMsg.indexOf(" ")){n.scrollIntoViewmsg();var e={name:"You",msg:n.state.activeMsg},t=n.state.messages;t.push(e),console.log(t),n.setState({messages:t}),n.socket.emit("send-message",n.state.activeMsg),n.setState({activeMsg:""})}},n.chatboxRef=s.a.createRef(),n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(h.a,{className:"chat-paper",elevation:3},s.a.createElement(d.a,{style:{width:"100%",height:"100%"},direction:"column"},s.a.createElement(d.a,{item:!0,container:!0,className:"chat-nav",xs:12,style:{height:"10%"}},s.a.createElement(d.a,{item:!0,xs:2,sm:1},s.a.createElement(M.a,{size:"small",style:{color:"white",margin:"10px 13px"}})),s.a.createElement(d.a,{item:!0,xs:10,sm:11},s.a.createElement(g.a,{variant:"body1",style:{color:"white",paddingLeft:"10px",paddingTop:"4px"}},"Group Chat"),s.a.createElement(g.a,{variant:"body2",style:{color:"white",paddingLeft:"10px"},gutterBottom:!0},this.state.persons," people in the chat"))),s.a.createElement(d.a,{item:!0,xs:12,style:{overflowY:"scroll",overflowX:"hidden",height:"80%"}},this.state.messages.map((function(e,t){return"Joined"==e.msg||"left"==e.msg?s.a.createElement("div",{className:"joined-msg"},e.name," ",e.msg):"You"==e.name?s.a.createElement("div",{className:"msg-by-admin"},s.a.createElement(g.a,{variant:"body2"},e.msg)):s.a.createElement("div",{className:"msg-by-other"},s.a.createElement("div",{className:"sender-name"},s.a.createElement(g.a,{variant:"body2"},e.name)," "),s.a.createElement(g.a,{variant:"body2"},e.msg))})),s.a.createElement("div",{style:{width:"100%"},ref:this.chatboxRef})),s.a.createElement(d.a,{item:!0,xs:12,style:{height:"12%",padding:"0px 6px",paddingTop:"10px"},className:"bottom-grid"},s.a.createElement(d.a,{item:!0,container:!0,xs:12,justify:"space-between",alignItems:"center",spacing:2},s.a.createElement(d.a,{item:!0,xs:10,sm:10},s.a.createElement("input",{type:"text",placeholder:"Enter Message..",value:this.state.activeMsg,onChange:function(t){e.setState({activeMsg:t.target.value})},onKeyDown:function(t){13==t.keyCode&&e.sendMessage()}})),s.a.createElement(d.a,{item:!0,xs:2,sm:2},s.a.createElement(x.a,{xsDown:!0},s.a.createElement(v.a,{color:"primary",size:"small",variant:"contained",onClick:this.sendMessage},"Send")),s.a.createElement(x.a,{smUp:!0},s.a.createElement(k.a,{size:"small",color:"primary",style:{width:"35px",height:"20px"},onClick:this.sendMessage},s.a.createElement(O.a,{style:{fontSize:"0.9rem"},color:"white"}))))))))}}]),a}(n.Component),z=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:""},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(u.a,{basename:window.location.pathname||""},s.a.createElement(p.a,{path:"/",exact:!0},s.a.createElement(E,{setUsername:function(t){e.setState({username:t})}})),s.a.createElement(p.a,{path:"/room",exact:!0},s.a.createElement(C,{username:this.state.username})))}}]),a}(n.Component);o.a.render(s.a.createElement(z,null),document.getElementById("root"))},56:function(e,t,a){},90:function(e,t,a){e.exports=a(132)}},[[90,1,2]]]);
//# sourceMappingURL=main.91b122f4.chunk.js.map