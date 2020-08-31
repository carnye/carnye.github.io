(this.webpackJsonpyinyang=this.webpackJsonpyinyang||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),c=n.n(i),l=(n(14),n(6)),o=(n(15),n(4)),s=n(5),u=n(8),d=n(7),h=function(e){var t=e.state,n=e.cantChange,a=e.onPress,i=(e.isInConnected,e.isInInvalidFourSquare),c="empty"!==t;var l="white"===t?"#FFF":"#222";return r.a.createElement("div",{className:"piece ".concat(n&&"locked"," ").concat(i&&"invalid"),onClick:a},c&&r.a.createElement("div",{style:{height:"70%",width:"70%",borderRadius:n?"30%":"50%",background:l,border:"1.5px solid #222",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute"}}))},f=n(1),g=[-1,1,0,0],m=[0,0,-1,1],v=function(e){for(var t=e[0].length,n=0;n<t;n++)for(var a=0;a<t;a++)if("empty"===e[n][a].state)return!1;return!0},p=function(e,t){for(var n=e[0].length,a=function(e,t){for(var n=0;n<e.length;n++)for(var a=0;a<e[n].length;a++)if(e[n][a].state===t&&!0===e[n][a].locked)return{startingX:a,startingY:n};throw new Error("must have at least one square of each color")}(e,t),r=a.startingX,i=a.startingY,c={square:e[r][i],x:r,y:i},l=[c],o=[c],s=[];l.length;){var u=l.shift();s.push(u);for(var d=u.x,h=u.y,v=function(a){var r=g[a]+d,i=m[a]+h;if(r<0||r>=n)return"continue";if(i<0||i>=n)return"continue";var c=e[i][r],s=Object(f.find)(o,(function(e){return e.x===r&&e.y===i}));if(c.state===t&&!s){var u={square:c,x:r,y:i};o.push(u),l.push(u)}},p=0;p<g.length;p+=1)v(p)}return s},y=[{size:9,blacks:[4,13,15,26,42,44,46,51,55,57,66,75],whites:[22,24,31,33,35,37,40,48,53,62,64,73,84],difficulty:2},{blacks:[0,1,2,3,4,10,16,20,23,25,30,31,34,40,42,50,54,60,65,67,70,72,74,80,83,86,90,91,92,93,94,96,95,97,98,99],whites:[5,6,7,8,9,11,27,37,43,44,46,48,62,88],size:10,difficulty:3},{size:10,blacks:[17,31,32,42,52,61,62,83],whites:[14,24,37,38,45,47,57,64,67,68,75,76,82],difficulty:4},{size:9,difficulty:5,blacks:[13,27,43,45,61,65,74],whites:[0,1,2,3,4,5,6,7,8,10,12,18,20,28,30,38,40,44,48,50,55,58,60,68,70,75,78,80,81,82,83,84,85,86,87,88]}],b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(o.a)(this,n),(a=t.call(this,e)).clickPiece=function(e,t){var n=a.state.grid[t][e];if(!n.locked){var r="white";"white"===n.state?r="black":"black"===n.state&&(r="empty"),a.changePieceColor(e,t,r)}},a.changePieceColor=function(e,t,n){var r=a.state.grid[t][e],i=Object(f.cloneDeep)(a.state.grid);i[t][e]={locked:r.locked,state:n},a.setState({grid:i,showCongrats:!0})};for(var r=[],i=y[a.props.puzzleIndex],c=0;c<i.size;c++){for(var l=[],s=0;s<i.size;s++){var u=10*c+s,d=!1,h="empty";i.blacks.includes(u)?(h="black",d=!0):i.whites.includes(u)&&(h="white",d=!0),l.push({state:h,locked:d})}r.push(l)}return a.state={grid:r,currentPuzzle:i,draggingColor:void 0,showCongrats:!1,size:i.size},a}return Object(s.a)(n,[{key:"render",value:function(){for(var e=this,t=[],n=p(this.state.grid,"black"),a=p(this.state.grid,"white"),i=function(e){for(var t=e[0].length,n=[],a=0;a<t-1;a+=1)for(var r=0;r<t-1;r+=1){var i=[e[a][r],e[a+1][r],e[a][r+1],e[a+1][r+1]],c=0,l=0;i.forEach((function(e){"black"===e.state?c+=1:"white"===e.state&&(l+=1)})),4!==c&&4!==l||n.push({x:r,y:a},{x:r+1,y:a},{x:r,y:a+1},{x:r+1,y:a+1})}return n}(this.state.grid),c=0===i.length,l=0,o=0,s=function(c){for(var s=[],u=function(t){var u=10*c+t,d=e.state.grid[c][t],g=Object(f.find)(n,(function(e){return e.x===t&&e.y===c})),m=Object(f.find)(a,(function(e){return e.x===t&&e.y===c})),v=Object(f.find)(i,(function(e){return e.x===t&&e.y===c}));"black"===d.state?o++:"white"===d.state&&l++,s.push(r.a.createElement(h,{onPress:function(){return e.clickPiece(t,c)},isInConnected:!(!g&&!m),isInInvalidFourSquare:!!v,key:u,cantChange:d.locked,state:d.state}))},d=0;d<e.state.size;d++)u(d);t.push(r.a.createElement("div",{className:"flex-row",key:c},s))},u=0;u<this.state.size;u++)s(u);var d=n.length+a.length===this.state.size*this.state.size,g=n.length===o&&a.length===l;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{style:{position:"relative",border:"3px solid #333",borderRadius:"3px"},onMouseLeave:function(){return e.setState({draggingColor:void 0})}},t,this.state.showCongrats&&d&&c&&r.a.createElement("div",{className:"congrats",style:{position:"absolute",height:"100%",width:"100%",top:0,left:0,backdropFilter:"blur(4px)",backgroundColor:"rgba(100,100,100,.7)",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",backgroundColor:"white",borderRadius:4,color:"#222",padding:"20px"}},r.a.createElement("div",{style:{cursor:"pointer",alignSelf:"flex-end",padding:"4px",userSelect:"none"},onClick:function(){return e.setState({showCongrats:!1})}},"X"),r.a.createElement("h2",null,"Congratulations!"),r.a.createElement("p",null,"You've completed the puzzle"),this.props.hasMorePuzzles&&r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{onClick:this.props.nextPuzzle,className:"btn"},"Next"))))),r.a.createElement("p",{style:{paddingLeft:20,paddingRight:20,textAlign:"center",userSelect:"none"}},"Complete the board so that the following are true:"),r.a.createElement("ul",{className:"rules"},r.a.createElement("li",{style:{color:v(this.state.grid)?"#111":"#888"}},"Every square contains a black or white circle"),r.a.createElement("li",{style:{color:g?"#111":"#888"}},"Every black circles connects to every other black circle, and every white circle connects to every other white circle"),r.a.createElement("li",{style:{color:c?"#111":"#888"}},"No 2 x 2 section can contain circles of all the same color")))}}]),n}(a.Component);var k=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],i=t[1],c=function(){i(n+1)},o=n!==y.length-1;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"title"},"Yin-Yang Puzzle")),r.a.createElement("div",{className:"subtitle"},r.a.createElement("div",null),r.a.createElement("div",null,"Difficulty: ",y[n].difficulty,"/5")),r.a.createElement(b,{nextPuzzle:c,key:n,puzzleIndex:n,hasMorePuzzles:o}),o&&r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{className:"btn",onClick:c},"Next")),r.a.createElement("p",{style:{userSelect:"none"}},"Puzzles came from"," ",r.a.createElement("a",{href:"https://jacoblance.wordpress.com/"},"Jack Lance Puzzles")," ","and"," ",r.a.createElement("a",{href:"http://wa1729.blogspot.com/"},"http://wa1729.blogspot.com/")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.b2a9182e.chunk.js.map