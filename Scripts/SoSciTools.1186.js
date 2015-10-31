var SoSciTools={inputsDisabled:!1,focusRegister:null,characterCheck:null,attachEvent:function(a,c,b){if(!a)throw Error("No element specified for SoSciTools.attachEvent()");a.addEventListener?a.addEventListener(c,b,!1):a.attachEvent?a.attachEvent("on"+c,b):a["on"+c]=b},classAround:function(a,c){var b=a,f=null;for(b.classList||(f=new RegExp("\\b"+c+"\\b","i"));b&&9!=b.nodeType;){if(b.classList){if(b.classList.contains(c))return!0}else if("undefined"!=typeof b.className&&-1<b.className.search(f))return!0;
b=b.parentNode}return!1},detachEvent:function(a,c,b){a.removeEventListener?a.removeEventListener(c,b,!1):a.detachEvent?a.detachEvent("on"+c,b):a["on"+c]=null},disableInputs:function(){SoSciTools.inputsDisabled=!0;var a;a=document.getElementsByTagName("input");for(var c=0;c<a.length;c++)if(a[c].getAttribute){var b=a[c].getAttribute("type");"radio"==b?a[c].checked||(a[c].disabled=!0):"checkbox"==b?a[c].parentNode&&(a[c].disabled=!0,b=document.createElement("input"),b.type="hidden",b.id=a[c].id,b.name=
a[c].name,b.value=a[c].value,a[c].parentNode.appendChild(b)):"text"==b&&a[c].parentNode&&(a[c].readOnly=!0,a[c].disabled=!0,b=document.createElement("input"),b.type="hidden",b.id=a[c].id,b.name=a[c].name,b.value=a[c].value,a[c].parentNode.appendChild(b))}a=document.getElementsByTagName("select");for(c=0;c<a.length;c++)a[c].parentNode&&(a[c].disabled=!0,b=document.createElement("input"),b.type="hidden",b.id=a[c].id,b.name=a[c].name,b.value=a[c].value,a[c].parentNode.appendChild(b));a=document.getElementsByTagName("textarea");
for(c=0;c<a.length;c++)a[c].readOnly=!0},disableInputs2:function(){function a(a,b){b.style.display=a.style.display&&!b.style.display?a.style.display:"inline-block";if(a.style.position||a.style.top)b.style.position=a.style.position,b.style.top=a.style.top;b.style.left=a.style.left;a.style.verticalAlign||(b.style.verticalAlign=a.style.verticalAlign);b.title=f.title}SoSciTools.inputsDisabled=!0;var c;c=document.getElementsByTagName("input");for(var b=0;b<c.length;b++){var f=c[b],e=f.getAttribute("type"),
d=null;"radio"==e||"checkbox"==e?(d=document.createElement("div"),d.className="inputCST",d.style.width="17px",d.style.height="17px",d.style.border="0 none",d.style.padding="0",d.style.margin="0",d.style.backgroundColor="transparent",d.style.backgroundImage="url(../images/inputs.circles.png)",d.style.backgroundPosition=f.checked?"0px -32px":"0px 0px"):"text"==e&&(d=document.createElement("div"),d.style.width=f.offsetWidth-8+"px",d.style.height=f.offsetHeight-8+"px",d.style.padding="3px",d.style.display=
"inline-block",d.style.border="1px solid black",d.style.backgroundColor="white",d.style.verticalAlign="middle",e=document.createTextNode(f.value),d.appendChild(e));null!=d&&(a(f,d),f.parentNode.insertBefore(d,f),f.style.display="none")}c=document.getElementsByTagName("textarea");for(b=0;b<c.length;b++){e=c[b];d=document.createElement("div");d.style.width=e.offsetWidth-8+"px";d.style.height=e.offsetHeight-8+"px";d.style.padding="3px";d.style.display="inline-block";d.style.border="1px solid black";
d.style.backgroundColor="white";d.style.verticalAlign="middle";var g=document.createTextNode(e.value);d.appendChild(g);a(e,d);e.parentNode.insertBefore(d,e);e.style.display="none"}c=document.getElementsByTagName("select");for(b=0;b<c.length;b++){var h=c[b],d=document.createElement("div");d.style.width=h.offsetWidth-8+"px";d.style.height=h.offsetHeight-8+"px";d.style.padding="3px";d.style.display="inline-block";d.style.border="1px solid black";d.style.backgroundColor="white";d.style.verticalAlign=
"middle";g=-1==h.selectedIndex?"":h.options[h.selectedIndex].text;e=document.createTextNode(g);d.appendChild(e);a(h,d);h.parentNode.insertBefore(d,h);h.style.display="none"}},dispatchEvent:function(a,c){if(document.createEvent){var b;b="click"==c?document.createEvent("MouseEvents"):document.createEvent("UIEvents");b.initEvent(c,!0,!1);a.dispatchEvent(b)}else document.createEventObject&&(b=document.createEventObject(),a.fireEvent("on"+c,b))},submitButtonsDisplay:function(){SoSciTools.showButtons(!0,
null)},submitButtonsHide:function(){SoSciTools.showButtons(!1,null)},catchEnter:function(){var a=!0,c=null,b=document.getElementById("questionnaireForm");SoSciTools.attachEvent(b,"keydown",function(b){13==(b.which?b.which:b.keyCode)&&(a=(c=SoSciTools.focusRegister.getElement())&&"submit"==c.type?!0:c&&"TEXTAREA"==c.nodeName.toUpperCase()?!0:!1)});SoSciTools.attachEvent(b,"keyup",function(b){if(!a&&(a=!0,null!=c)){b=document.getElementById("questionnaireForm");for(var e=0,d=0;d<b.elements.length;d++)if(b.elements[d]==
c){e=d;break}e+=1;e<b.elements.length?b.elements[e].focus():c.focus()}});SoSciTools.getPage().attachCheck(function(b){return a},!0)},checkBrowser:function(a){return-1<navigator.userAgent.toLowerCase().indexOf(a.toLowerCase())?!0:!1},debugMessage:function(a){var c=document.getElementById("debugMessages");if(!c){var b=document.getElementsByTagName("body")[0],c=document.createElement("DIV");c.setAttribute("id","debugMessages");c.style.border="1px solid black";c.style.height="50px";c.style.resize="vertical";
c.style.overflow="auto";b.insertBefore(c,b.firstChild)}a=document.createTextNode("["+(new Date).toString()+"] "+a);b=document.createElement("DIV");b.appendChild(a);c.appendChild(b);b.scrollIntoView()},showButtons:function(a,c){if("complete"!==document.readyState)SoSciTools.attachEvent(window,"load",function(b){SoSciTools.showButtons(a,c)});else{var b,f;f=1==a?"":0==a?"none":null;if(null!=f){if(b=document.getElementById("buttonsAuto"))b.style.display=f;if(b=document.getElementById("buttonNext"))b.style.display=
f;if(b=document.getElementById("buttonBack"))b.style.display=f;b=document.getElementsByName("submitNext");for(var e=0;e<b.length;e++)b[e].style.display=f;b=document.getElementsByName("submitBack");for(e=0;e<b.length;e++)b[e].style.display=f}f=1==c?"":0==c?"none":null;if(null!=f){if(b=document.getElementById("buttonsControl"))b.style.display=f;if(b=document.getElementById("buttonBreak"))b.style.display=f;if(b=document.getElementById("buttonLeave"))b.style.display=f;b=document.getElementsByName("submitBreak");
for(e=0;e<b.length;e++)b[e].style.display=f;b=document.getElementsByName("submitLeave");for(e=0;e<b.length;e++)b[e].style.display=f}}},stopEvent:function(a){if(a.preventDefault)a.preventDefault(),a.stopPropagation();else return a||(a=window.event),a.ReturnValue=!1},getNodePosition:function(a){if(null==a||void 0==a)throw Error("No HTML node specified for SoSciTools.getNodePosition");for(var c=a.offsetLeft,b=a.offsetTop;a.offsetParent;)a=a.offsetParent,c+=a.offsetLeft,b+=a.offsetTop;return[c,b]},getNodePos:function(a){if(null==
a||void 0==a)throw Error("No HTML node specified for SoSciTools.getNodePosition");for(var c=a.offsetLeft,b=a.offsetTop;a=a.offsetParent;)c+=a.offsetLeft,b+=a.offsetTop;return{x:c,y:b}},getNodeMetrics:function(a){var c=SoSciTools.getNodePosition(a);return[c[1],c[0]+a.offsetWidth,c[1]+a.offsetHeight,c[0]]},getPosition:function(a,c){a||(a=window.event);var b,f;null==c||void 0==c?f=b=0:(f=SoSciTools.getNodePosition(c),b=f[0],f=f[1]);var e,d;if(a.touches&&a.touches[0])e=a.touches[0].pageX,d=a.touches[0].pageY;
else if(a.changedTouches&&a.changedTouches[0])e=a.changedTouches[0].pageX,d=a.changedTouches[0].pageY;else if(a.pageX)e=a.pageX,d=a.pageY;else if(a.clientX)e=a.clientX+document.body.scrollLeft,d=a.clientY+document.body.scrollTop;else return[0,0];return[e-b,d-f]},getSender:function(a){a||(a=window.event);return a.target?a.target:a.srcElement?a.srcElement:null},autoHeight:function(a,c,b,f){function e(){g.style.height="auto";var a=g.scrollHeight;0==g.value.length&&(a=0);f&&(a+=18);0<b&&a>b&&(a=b);0<
c&&a<c&&(a=c);g.style.height=a+"px"}function d(){window.setTimeout(e,10)}var g=document.getElementById(a);g?(SoSciTools.attachEvent(g,"keyup",d),SoSciTools.attachEvent(g,"cut",d),SoSciTools.attachEvent(g,"paste",d),SoSciTools.attachEvent(g,"drop",d),SoSciTools.attachEvent(g,"change",e),e()):alert("Textarea "+a+" not found")},focusHeight:function(a,c,b){var f=document.getElementById(a);if(f){var e=!0,d="function"==typeof SoSciAnimator,g=f.offsetHeight;void 0==b&&(b=c);var h=function(){""==f.value?
d&&!e?SoSciAnimator.animate(f,"height",null,b,"px",250):f.style.height=b+"px":d&&!e?SoSciAnimator.animate(f,"height",null,c,"px",250):f.style.height=c+"px"};a=function(a){window.setTimeout(h,250)};var k=function(a){d?SoSciAnimator.animate(f,"height",null,g,"px",250):f.style.height=""};h();e=!1;SoSciTools.attachEvent(f,"focus",function(a){window.setTimeout(k,250)});SoSciTools.attachEvent(f,"blur",a);SoSciTools.attachEvent(f,"keypressed",a)}else alert("Textarea "+a+" not found")},Questionnaire:function(){var a=
document.getElementById("questionnaireForm");if(!a)throw Error("Questionnaire form was not found by SoSciTools.Questionnaire()");var c=a.getAttribute("action"),b=[],f=[],e="none",d=function(d){d||(d=window.event);for(var g=!0,h=0;h<b.length;h++){var k=b[h];if(!k(d)){g=!1;break}}if(g&&"back"!=e)for(h=0;h<f.length;h++)if(k=f[h],!k(d)){g=!1;break}if(g)return a.setAttribute("action",c),!0;d.preventDefault?(d.preventDefault(),d.stopPropagation()):d.returnValue=!1;a.setAttribute("action","javascript:void(0)");
return!1};this.attachCheck=function(a,c){c?b.push(a):f.push(a)};this.submit=function(){d()&&a.submit()};for(var g=function(a){e="next"},h=function(a){e="back"},k=function(a){e=""},l=0;l<a.elements.length;l++)if("submit"==a.elements[l].type){var m=a.elements[l],n;(n="submitNext"==m.name?g:"submitBack"==m.name?h:k)&&SoSciTools.attachEvent(m,"click",n)}SoSciTools.attachEvent(a,"submit",d)},inArray:function(a,c){for(var b=0;b<c.length;b++)if(c[b]==a)return!0;return!1},preventDrag:function(a){a.classList?
a.classList.add("unselectable"):-1==a.className.search(/(^|\W)unselectable(\W|$)/)&&(a.className+=" unselectable");a.setAttribute("unselectable","on");a.setAttribute("draggable","false");SoSciTools.attachEvent(a,"dragstart",function(a){return SoSciTools.stopEvent(a)});a=a.getElementsByTagName("*");for(var c=0;c<a.length;c++)a[c].setAttribute("unselectable","on"),a[c].setAttribute("draggable","false")},registerFocus:function(){SoSciTools.focusRegister=new function(){var a=document.getElementById("questionnaireForm"),
c=null;for(i=0;i<a.elements.length;i++){var b=a.elements[i];b.onfocus=function(){c=this};b.onblur=function(){c=this}}this.getElement=function(){return c}}},checkChars:function(a,c,b){null==SoSciTools.characterCheck&&(SoSciTools.characterCheck=new SoSciTools.CharacterChecker);SoSciTools.characterCheck.attach(a,c,b)},CharacterChecker:function(){function a(a){var e=this;a.srcElement&&(e=a.srcElement);var d=e.getAttribute("id");a=e.value;var g="",h=c[d];if(0<h.length)for(var k=0;k<a.length;k++){var l=
a.charAt(k);-1!=h.indexOf(l)&&(g+=l)}else g=a;if((d=b[d])&&0<d&&a.length>d){h="";for(k=l=0;k<g.length&&!(32<=a.charCodeAt(k)&&l++,l>d);k++)h+=g.charAt(k);g=h}a!=g&&(e.value=g)}var c={},b={};this.attach=function(f,e,d){if(!(""==e&&1>d)){var g=document.getElementById(f);SoSciTools.attachEvent(g,"keyup",a);c[f]=e;b[f]=d}}},getMousePos:function(a){a||(a=window.event);if(a){if(a.touches&&a.touches[0])mouseX=a.touches[0].pageX,mouseY=a.touches[0].pageY;else if(a.changedTouches&&a.changedTouches[0])mouseX=
a.changedTouches[0].pageX,mouseY=a.changedTouches[0].pageY;else if(a.pageX)mouseX=a.pageX,mouseY=a.pageY;else if(a.clientX)mouseX=a.clientX+document.body.scrollLeft,mouseY=a.clientY+document.body.scrollTop;else return;return{x:mouseX,y:mouseY}}},formValueRadio:function(a){a=document.getElementsByName(a);for(var c=0;c<a.length;c++)if(a[c].checked)return a[c].getAttribute("value");return null},getElementPos:function(a){var c=a.offsetLeft,b=a.offsetTop;for(a=a.offsetParent;a;)c+=a.offsetLeft,b+=a.offsetTop,
a=a.offsetParent;return{x:c,y:b}},instancePage:null,getPage:function(){null==SoSciTools.instancePage&&(SoSciTools.instancePage=new SoSciTools.Questionnaire);return SoSciTools.instancePage},getForm:function(){return document.getElementById("questionnaireForm")},submitPage:function(){var a=SoSciTools.getPage();"complete"===document.readyState?a.submit():SoSciTools.attachEvent(window,"load",function(){a.submit()})},attachFormInfo:function(){SoSciTools.attachEvent(window,"load",function(){function a(){f.value=
c.offsetWidth}var c=SoSciTools.getForm();if(c){var b=document.createElement("div"),f=document.createElement("input");f.name="page_form_width";f.type="hidden";b.appendChild(f);c.appendChild(b);a();SoSciTools.attachEvent(window,"resize",a)}})}};