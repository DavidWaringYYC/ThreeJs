(()=>{"use strict";var e,t={698:(e,t,n)=>{n.r(t)},607:(e,t,n)=>{t.nS=t.Ah=void 0;const o=n(232),i=n(709);n(698);const r=n(600),a=n(226),s=n(296),d=n(137);let l,c,p;function u(e,n){l.xr.isPresenting&&(n&&(0,a.handleXRHitTest)(l,n,(e=>{e&&(c.visible=!0,c.matrix.fromArray(e))}),(()=>{c.visible=!1})),l.render(t.Ah,t.nS))}function h(){t.nS.aspect=window.innerWidth/window.innerHeight,t.nS.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}function m(){if(console.log("PlaneMarker clicked :"+c.visible),c.visible){const e=d.rocketModel.clone();e.scale.set(.3,.3,.3),e.position.setFromMatrixPosition(c.matrix),e.visible=!0,t.Ah.add(e)}}t.Ah=new o.Scene,t.nS=new o.PerspectiveCamera(70,window.innerWidth/window.innerHeight,.02,20),(0,d.objectsInit)().then((e=>{!async function(){await(0,r.browserHasImmersiveArCompatibility)()?function(){const{devicePixelRatio:e,innerHeight:n,innerWidth:a}=window;l=new o.WebGLRenderer({antialias:!0,alpha:!0}),l.setPixelRatio(e),l.setSize(a,n),l.xr.enabled=!0;const d=document.createElement("div");document.body.appendChild(d),d.appendChild(l.domElement),document.body.appendChild(i.ARButton.createButton(l,{requiredFeatures:["hit-test"]})),function(){const e=new o.AmbientLight(16777215,1);t.Ah.add(e),c=(0,s.createPlaneMarker)(),t.Ah.add(c),p=l.xr.getController(0),p.addEventListener("select",m),t.Ah.add(p),l.setAnimationLoop(u)}(),(0,r.displayIntroductionMessage)(),window.addEventListener("resize",h)}():(0,r.displayUnsupportedBrowserMessage)()}()}))},296:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createPlaneMarker=void 0;const o=n(232);t.createPlaneMarker=function(){const e=new o.MeshBasicMaterial({color:16777215}),t=new o.RingGeometry(.14,.15,16).rotateX(-Math.PI/2),n=new o.Mesh(t,e);return n.matrixAutoUpdate=!1,n}},600:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.displayUnsupportedBrowserMessage=t.displayIntroductionMessage=t.browserHasImmersiveArCompatibility=void 0,t.browserHasImmersiveArCompatibility=async function(){var e;if(window.navigator.xr){const t=await(null===(e=navigator.xr)||void 0===e?void 0:e.isSessionSupported("immersive-ar"));if(console.info("[DEBUG] "+(t?"browser supports AR":"No AR Support")),t)return t}return!1},t.displayIntroductionMessage=function(){const e=document.getElementById("app-root"),t=document.createElement("h1");t.innerText="Welcome!";const n=document.createElement("p");n.innerText="Press the button below to enter the AR experiance.";const o=document.createElement("p");return o.innerText="Note the app works best in a well lit environment, with enough space to move around.",o.style.fontSize="16px",o.style.fontWeight="bold",o.style.padding="64px 64px 0px 64px",o.style.opacity="0.8",e&&(e.appendChild(t),e.appendChild(n),e.appendChild(o)),()=>{e&&(e.contains(n)&&e.removeChild(n),e.contains(t)&&e.removeChild(t),e.contains(o)&&e.removeChild(o))}},t.displayUnsupportedBrowserMessage=function(){const e=document.getElementById("app-root"),t=document.createElement("h1");t.innerText="Oh no!";const n=document.createElement("p");n.innerText="Your browser does not seem to support augmented reality with WebXR.";const o=document.createElement("p");o.innerText="Try opening the page using a recent version of Chrome on Android.",o.style.fontSize="16px",o.style.fontWeight="bold",o.style.padding="64px 64px 0px 64px",o.style.opacity="0.8",e&&(e.appendChild(t),e.appendChild(n),e.appendChild(o))}},226:(e,t)=>{let n;Object.defineProperty(t,"__esModule",{value:!0}),t.handleXRHitTest=void 0;let o=!1;t.handleXRHitTest=function(e,t,i,r){const a=e.xr.getReferenceSpace(),s=e.xr.getSession();let d;if(s&&!1===o&&(s.requestReferenceSpace("viewer").then((e=>{s&&s.requestHitTestSource({space:e}).then((e=>{n=e}))})),o=!0),n){const e=t.getHitTestResults(n);if(e.length){const t=e[0];if(t&&null!==t&&a){const e=t.getPose(a);e&&(d=e.transform.matrix,i(d))}}else r()}}},137:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.objectsInit=t.rocketModel=t.koalaModel=void 0;const o=new(n(76).GLTFLoader);t.objectsInit=async()=>{t.koalaModel=(await o.loadAsync("static/models/koala/koala.glb")).scene.children[0],t.rocketModel=(await o.loadAsync("static/models/rocket/scene.gltf")).scene.children[0]}}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,i,r)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,i,r]=e[c],s=!0,d=0;d<n.length;d++)(!1&r||a>=r)&&Object.keys(o.O).every((e=>o.O[e](n[d])))?n.splice(d--,1):(s=!1,r<a&&(a=r));if(s){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,i,r]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,r,[a,s,d]=n,l=0;if(a.some((t=>0!==e[t]))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(d)var c=d(o)}for(t&&t(n);l<a.length;l++)r=a[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},n=self.webpackChunkmywebpack=self.webpackChunkmywebpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[185],(()=>o(607)));i=o.O(i)})();