(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),l=n.n(o),i=(n(20),n(1)),c=n(2),s=n(4),u=n(3),d=n(5),f=n(7),y=n(6);function p(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t}function m(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"===typeof e[n]?e[n]:e[n].val);return t}var h=[0,0];function v(e,t,n,a,r,o,l){var i=n+(-r*(t-a)+-o*n)*e,c=t+i*e;return Math.abs(i)<l&&Math.abs(c-a)<l?(h[0]=a,h[1]=0,h):(h[0]=c,h[1]=i,h)}var k=n(8),b=n.n(k),O=n(9),g=n.n(O);function w(e,t,n){for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(0!==n[a])return!1;var r="number"===typeof t[a]?t[a]:t[a].val;if(e[a]!==r)return!1}return!0}var j=1e3/60;function S(e,t,n){var a=t;return null==a?e.map(function(e,t){return{key:e.key,data:e.data,style:n[t]}}):e.map(function(e,t){for(var r=0;r<a.length;r++)if(a[r].key===e.key)return{key:a[r].key,data:a[r].data,style:n[t]};return{key:e.key,data:e.data,style:n[t]}})}function I(e,t,n,a,r,o,l,i,c){for(var s=function(e,t,n){for(var a={},r=0;r<e.length;r++)a[e[r].key]=r;for(var o={},l=0;l<t.length;l++)o[t[l].key]=l;for(var i=[],c=0;c<t.length;c++)i[c]=t[c];for(var s=0;s<e.length;s++)if(!Object.prototype.hasOwnProperty.call(o,e[s].key)){var u=n(s,e[s]);null!=u&&i.push(u)}return i.sort(function(e,n){var r=o[e.key],l=o[n.key],i=a[e.key],c=a[n.key];if(null!=r&&null!=l)return o[e.key]-o[n.key];if(null!=i&&null!=c)return a[e.key]-a[n.key];if(null!=r){for(var s=0;s<t.length;s++){var u=t[s].key;if(Object.prototype.hasOwnProperty.call(a,u)){if(r<o[u]&&c>a[u])return-1;if(r>o[u]&&c<a[u])return 1}}return 1}for(var d=0;d<t.length;d++){var f=t[d].key;if(Object.prototype.hasOwnProperty.call(a,f)){if(l<o[f]&&i>a[f])return 1;if(l>o[f]&&i<a[f])return-1}}return-1})}(a,r,function(e,a){var r=t(a);return null==r?(n({key:a.key,data:a.data}),null):w(o[e],r,l[e])?(n({key:a.key,data:a.data}),null):{key:a.key,data:a.data,style:r}}),u=[],d=[],f=[],y=[],m=0;m<s.length;m++){for(var h=s[m],v=null,k=0;k<a.length;k++)if(a[k].key===h.key){v=k;break}if(null==v){var b=e(h);u[m]=b,f[m]=b;var O=p(h.style);d[m]=O,y[m]=O}else u[m]=o[v],f[m]=i[v],d[m]=l[v],y[m]=c[v]}return[s,u,d,f,y]}var P=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).unmounting=!1,n.animationID=null,n.prevTime=0,n.accumulatedTime=0,n.unreadPropStyles=null,n.clearUnreadPropStyle=function(e){for(var t=I(n.props.willEnter,n.props.willLeave,n.props.didLeave,n.state.mergedPropsStyles,e,n.state.currentStyles,n.state.currentVelocities,n.state.lastIdealStyles,n.state.lastIdealVelocities),a=Object(f.a)(t,5),r=a[0],o=a[1],l=a[2],i=a[3],c=a[4],s=0;s<e.length;s++){var u=e[s].style,d=!1;for(var p in u)if(Object.prototype.hasOwnProperty.call(u,p)){var m=u[p];"number"===typeof m&&(d||(d=!0,o[s]=Object(y.a)({},o[s]),l[s]=Object(y.a)({},l[s]),i[s]=Object(y.a)({},i[s]),c[s]=Object(y.a)({},c[s]),r[s]={key:r[s].key,data:r[s].data,style:Object(y.a)({},r[s].style)}),o[s][p]=m,l[s][p]=0,i[s][p]=m,c[s][p]=0,r[s].style[p]=m)}}n.setState({currentStyles:o,currentVelocities:l,mergedPropsStyles:r,lastIdealStyles:i,lastIdealVelocities:c})},n.startAnimationIfNecessary=function(){n.unmounting||null!=n.animationID||(n.animationID=g()(function(e){if(!n.unmounting){var t=n.props.styles,a="function"===typeof t?t(S(n.state.mergedPropsStyles,n.unreadPropStyles,n.state.lastIdealStyles)):t;if(function(e,t,n,a){if(a.length!==t.length)return!1;for(var r=0;r<a.length;r++)if(a[r].key!==t[r].key)return!1;for(var o=0;o<a.length;o++)if(!w(e[o],t[o].style,n[o]))return!1;return!0}(n.state.currentStyles,a,n.state.currentVelocities,n.state.mergedPropsStyles))return n.animationID=null,void(n.accumulatedTime=0);var r=e||b()(),o=r-n.prevTime;if(n.prevTime=r,n.accumulatedTime=n.accumulatedTime+o,n.accumulatedTime>10*j&&(n.accumulatedTime=0),0===n.accumulatedTime)return n.animationID=null,void n.startAnimationIfNecessary();for(var l=(n.accumulatedTime-Math.floor(n.accumulatedTime/j)*j)/j,i=Math.floor(n.accumulatedTime/j),c=I(n.props.willEnter,n.props.willLeave,n.props.didLeave,n.state.mergedPropsStyles,a,n.state.currentStyles,n.state.currentVelocities,n.state.lastIdealStyles,n.state.lastIdealVelocities),s=Object(f.a)(c,5),u=s[0],d=s[1],y=s[2],p=s[3],m=s[4],h=0;h<u.length;h++){var k=u[h].style,O={},g={},P={},E={};for(var M in k)if(Object.prototype.hasOwnProperty.call(k,M)){var D=k[M];if("number"===typeof D)O[M]=D,g[M]=0,P[M]=D,E[M]=0;else{for(var T=p[h][M],_=m[h][M],A=0;A<i;A++){var L=v(j/1e3,T,_,D.val,D.stiffness,D.damping,D.precision),C=Object(f.a)(L,2);T=C[0],_=C[1]}var N=v(j/1e3,T,_,D.val,D.stiffness,D.damping,D.precision),x=Object(f.a)(N,2),W=x[0],V=x[1];O[M]=T+(W-T)*l,g[M]=_+(V-_)*l,P[M]=T,E[M]=_}}p[h]=P,m[h]=E,d[h]=O,y[h]=g}n.animationID=null,n.accumulatedTime-=i*j,n.setState({currentStyles:d,currentVelocities:y,lastIdealStyles:p,lastIdealVelocities:m,mergedPropsStyles:u}),n.unreadPropStyles=null,n.startAnimationIfNecessary()}}))},n.state=n.defaultState(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"defaultState",value:function(){var e,t=this.props,n=t.defaultStyles,a=t.styles,r=t.willEnter,o=t.willLeave,l=t.didLeave,i="function"===typeof a?a(n):a;e=null==n?i:n.map(function(e){for(var t=0;t<i.length;t++)if(i[t].key===e.key)return i[t];return e});var c=null==n?i.map(function(e){return m(e.style)}):n.map(function(e){return m(e.style)}),s=null==n?i.map(function(e){return p(e.style)}):n.map(function(e){return p(e.style)}),u=I(r,o,l,e,i,c,s,c,s),d=Object(f.a)(u,5),y=d[0];return{currentStyles:d[1],currentVelocities:d[2],lastIdealStyles:d[3],lastIdealVelocities:d[4],mergedPropsStyles:y}}},{key:"componentDidMount",value:function(){this.prevTime=b()(),this.startAnimationIfNecessary()}},{key:"componentWillReceiveProps",value:function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;this.unreadPropStyles="function"===typeof t?t(S(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):t,null==this.animationID&&(this.prevTime=b()(),this.startAnimationIfNecessary())}},{key:"componentWillUnmount",value:function(){this.unmounting=!0,null!=this.animationID&&(g.a.cancel(this.animationID),this.animationID=null)}},{key:"render",value:function(){var e=S(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&r.a.Children.only(t)}}]),t}(r.a.Component);P.defaultProps={willEnter:function(e){return m(e.style)},willLeave:function(){return null},didLeave:function(){}};var E=Object(y.a)({},{stiffness:170,damping:26},{precision:.01});function M(e,t){return Object(y.a)({},E,t,{val:e})}n(22);var D={stiffness:60,damping:15},T=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleMouseMove=function(e){var t=e.pageX,a=e.pageY;n.setState(function(){return{mouse:[t-25,a-25],now:"t"+Date.now()}})},n.handleKeyDown=function(e){n.setState({mouse:[n.randomNumber(0,1500),n.randomNumber(0,600)],now:"t"+Date.now()})},n.randomNumber=function(e,t){return Math.round(e+Math.random(t-e)*t)},n.handleTouchMove=function(e){e.preventDefault(),e.code?n.handleMouseMove():n.handleMouseMove(e.touches[0])},n.willLeave=function(e){return Object(y.a)({},e.style,{opacity:M(0,D),scale:M(2,D)})},n.state={mouse:[],now:"t0"},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this,t=this.state,n=Object(f.a)(t.mouse,2),a=n[0],o=n[1],l=t.now,i=null==a?[]:[{key:l,style:{opacity:M(1),scale:M(0),x:M(a),y:M(o)}}];return r.a.createElement(P,{willLeave:this.willLeave,styles:i},function(t){return r.a.createElement("div",{onMouseMove:e.handleMouseMove,onTouchMove:e.handleTouchMove,className:"header__container"},t.map(function(e){var t=e.key,n=e.style,a=n.opacity,o=n.scale,l=n.x,i=n.y;return r.a.createElement("div",{key:t,className:"header__ball",style:{opacity:a,scale:o,transform:"translate3d(".concat(l,"px, ").concat(i,"px, 0) scale(").concat(o,")"),WebkitTransform:"translate3d(".concat(l,"px, ").concat(i,"px, 0) scale(").concat(o,")")}})}))})}}]),t}(r.a.Component),_=(n(23),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(T,null))}}]),t}(a.Component)),A=n(14),L=(n(12),n(24),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.foodCell,n=e.snakeCell,a=e.tailCell,o=e.key,l="main__gridcell \n      ".concat(t?"main__gridcell--food":"","\n      ").concat(n?"main__gridcell--head":"","\n      ").concat(a?"main__gridcell--tail":"","\n    ");return r.a.createElement("div",{className:l,key:o})}}]),t}(a.Component)),C=function(e){var t=e.snake;return a.createElement("div",null,a.createElement("h1",{className:"gameOver__message"},"Game Over"),a.createElement("h1",{className:"gameOver__message"},"Your Score ",t.tail.length))},N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.gridSize,n=e.snake,r=e.apple,o=e.gameOver,l=Array.from(Array(t).keys()),i=l.map(function(e){return l.map(function(t){var o=r.row===t&&r.col===e,l=n.head.row===t&&n.head.col===e,i=n.tail.find(function(n){return n.row===t&&n.col===e});return a.createElement(L,{snakeCell:l,foodCell:o,tailCell:i,key:t+" "+e})})});return a.createElement("div",null,a.createElement("div",{className:o?"main__gameOver":"main__board"},o?a.createElement(C,{snake:n}):i))}}]),t}(a.Component),x=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).getRandomApple=function(){var e={row:parseInt(Math.floor(20*Math.random())),col:parseInt(Math.floor(20*Math.random()))};n.setState({apple:e})},n.moveSnake=function(){switch(n.state.key){case"ArrowUp":n.setState({direction:{x:0,y:-1}});break;case"ArrowDown":n.setState({direction:{x:0,y:1}});break;case"ArrowRight":n.setState({direction:{x:1,y:0}});break;case"ArrowLeft":n.setState({direction:{x:-1,y:0}})}},n.setDirection=function(e){n.setState({key:e.key}),n.moveSnake()},n.gameLoop=function(){var e=n.state,t=e.direction,a=e.snake,r=e.apple,o=n.collisionWithApple(),l=n.collisionWithEdge(),i=n.collisionWithTail();n.setState(function(){var e={snake:{head:{row:a.head.row+t.x,col:a.head.col+t.y},tail:[a.head].concat(Object(A.a)(a.tail))},apple:o?n.getRandomApple():r};return o||e.snake.tail.pop(),e}),(l||i)&&(n.endGame(),n.setState(function(){return{gameOver:!0}}))},n.collisionWithApple=function(){var e=n.state,t=e.snake,a=e.apple;if(t.head.row===a.row&&t.head.col===a.col)return!0},n.collisionWithEdge=function(){var e=n.state.snake;if(e.head.row>20||e.head.col>20||e.head.row<0||e.head.col<0)return!0},n.collisionWithTail=function(){var e=n.state.snake;return e.tail.find(function(t){return t.row===e.head.row&&t.col===e.head.col})},n.endGame=function(){clearInterval(n.state.intervalID)},n.state={intervalID:{},gridSize:20,snake:{head:{row:4,col:4},tail:[]},apple:{row:0,col:0},direction:{x:1,y:0},gameOver:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.setState({height:window.innerHeight}),this.getRandomApple()}},{key:"componentDidMount",value:function(){var e=this,t=this.state.snake;document.addEventListener("keydown",function(t){e.setDirection(t)}),setInterval(function(){e.gameLoop()},0!==t.tail.length?t.tail.length/200*200:200)}},{key:"render",value:function(){var e=this.state,t=e.snake,n=e.apple,r=e.gridSize,o=e.gameOver,l=e.height;return a.createElement(N,{snake:t,apple:n,gridSize:r,setDirection:this.setDirection,gameOver:o,height:l})}}]),t}(a.Component),W=(n(25),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.createElement("div",null,a.createElement(_,null),a.createElement(x,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.1d7eb4d6.chunk.js.map