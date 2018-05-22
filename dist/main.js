!function(e){var t={};function n(i){if(t[i])return t[i].exports;var l=t[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var i;class l{YTDurationToSeconds(e){let t=e.match(/PT(\d+H)?(\d+M)?(\d+S)?/);t=t.slice(1).map(function(e){if(null!=e)return e.replace(/\D/,"")});let n=parseInt(t[0])||0,i=parseInt(t[1])||0,l=parseInt(t[2])||0;l<10&&(l="0"+l);let a=i+":"+l;return 0!==n&&(a=n+":"+a),a}formatTimeReverse(e){return e.toLocaleString("en-US",{month:"long",year:"numeric",day:"numeric"})}}void 0===(i=function(e,t,n){n.exports=l}.call(t,n,t,e))||(e.exports=i)},function(e,t,n){var i;class l{constructor(e,t){this.startingX=0,this.modalToMove=e,this.modalBg=t}touchStart(e,t){t.startingX=e.touches[0].clientX}touchMove(e,t){let n=e.touches[0],i=t.startingX-n.clientX;Math.abs(i)<30||(t.modalToMove.style.left=-1*i+"px",t.modalBg.style.opacity=1-Math.abs(i)/screen.width)}touchEnd(e,t,n){let i=this.startingX-e.changedTouches[0].clientX,l=screen.width/2;Math.abs(i)<l?(t.modalToMove.style.left=0,t.modalBg.style.opacity="1"):(this.modalToMove.style.transition="all .3s",t.modalToMove.style.left=i>0?"-100%":"100%",setTimeout(n,300))}listen(e,t){e.addEventListener("touchstart",e=>this.touchStart(e,this)),e.addEventListener("touchmove",e=>this.touchMove(e,this)),e.addEventListener("touchend",e=>this.touchEnd(e,this,t))}}void 0===(i=function(e,t,n){n.exports=l}.call(t,n,t,e))||(e.exports=i)},function(e,t,n){var i;class l{createModal(e){let t=document.createElement("div");t.className="view-modal-bg";let n=document.createElement("div");return n.className="view-modal",t.appendChild(n),t.addEventListener("click",function(t){let n=document.querySelector(".view-modal-bg");t.target===n&&e()}),t}createStartImg(){let e=document.createElement("img");return e.className="search-img",e.src="./images/search_img.jpg",e.alt="YouTube Viewer",e}createSearchBar(e){let t=document.createElement("div");t.className="form-stripe-active";let n=document.createElement("div");n.className="search-form";let i=document.createElement("input");i.type="text",i.name="search",i.className="search-input",i.autocomplete="off",i.addEventListener("keyup",function(t){t.preventDefault(),13===t.keyCode&&e()});let l=document.createElement("button");l.className="search-button",l.addEventListener("click",e);let a=document.createElement("i");return a.className="fas fa-search",l.appendChild(a),n.appendChild(i),n.appendChild(l),t.appendChild(n),t}createResultArea(){let e=document.createElement("ul");e.className="result-list";let t=document.createElement("div");return t.className="result-box",t.appendChild(e),t}createSpinnerBar(){let e=document.createElement("div");e.className="indicator";let t=document.createElement("i");return t.className="fas fa-spinner loader",e.appendChild(t),e.style.display="none",e}}void 0===(i=function(e,t,n){n.exports=l}.call(t,n,t,e))||(e.exports=i)},function(e,t,n){var i;let l=n(0);class a{constructor(e){let t=JSON.parse(e);this.currentSnippet=t.items[0].snippet,this.currentStats=t.items[0].statistics,this.currentDetails=t.items[0].contentDetails,this.videoId=t.items[0].id}buildVidLi(){let e=document.createElement("li");return e.className="clipLi",e.setAttribute("data-vidid",this.videoId),e}buildThumbnail(){let e=document.createElement("img");return e.setAttribute("src",this.currentSnippet.thumbnails.medium.url),e}buildClipTitle(){let e=document.createElement("div");return e.innerText=this.currentSnippet.title,e.className="clip-title",e}buildDuration(){let e=document.createElement("div");return e.innerText=(new l).YTDurationToSeconds(this.currentDetails.duration),e.className="time",e}buildChannelTitle(){let e=document.createElement("div");return e.innerText=this.currentSnippet.channelTitle,e.className="channel-title",e}buildViewsNum(){let e=document.createElement("div");return e.innerText=new Intl.NumberFormat("ru-RU").format(this.currentStats.viewCount)+" views",e.className="view-num",e}buildPublishDate(){let e=document.createElement("div");return e.innerText=(new l).formatTimeReverse(new Date(this.currentSnippet.publishedAt)),e.className+=" publishing-date",e}}void 0===(i=function(e,t,n){n.exports=a}.call(t,n,t,e))||(e.exports=i)},function(e,t,n){var i;let l=n(0);class a{constructor(e){let t=JSON.parse(e);this.currentSnippet=t.items[0].snippet,this.currentStats=t.items[0].statistics,this.currentDetails=t.items[0].contentDetails,this.videoId=t.items[0].id}buildCloseButton(e){let t=document.createElement("i");return t.className="fas fa-times close-button",t.addEventListener("click",e),t}buildWrapper(){let e=document.createElement("iframe");e.setAttribute("src","https://www.youtube.com/embed/"+this.videoId),e.setAttribute("allowfullscreen","");let t=document.createElement("div");return t.className="frame-wrapper",t.appendChild(e),t}buildRatingBlock(){let e=document.createElement("div"),t=document.createElement("i");t.className="fas fa-thumbs-up rate-icon";let n=document.createElement("i");n.className="fas fa-thumbs-down rate-icon";let i=document.createElement("div"),l=parseInt(this.currentStats.likeCount);i.innerText=new Intl.NumberFormat("ru-RU").format(l);let a=document.createElement("div"),r=parseInt(this.currentStats.dislikeCount);return a.innerText=new Intl.NumberFormat("ru-RU").format(r),e.className="rating-block",e.appendChild(t),e.appendChild(i),e.appendChild(n),e.appendChild(a),e}buildRatingStripe(){let e=document.createElement("div");e.className="rating-stripe";let t=document.createElement("div");return t.innerText=new Intl.NumberFormat("ru-RU").format(this.currentStats.viewCount)+" views",t.className+=" modal-view-num",e.appendChild(t),e.appendChild(this.buildRatingBlock()),e}buildThumbsStripe(){let e=document.createElement("div");e.className="thumbs-up-stripe";let t=parseInt(this.currentStats.likeCount),n=parseInt(this.currentStats.dislikeCount),i=document.createElement("div");i.className="negative-bar";let l=document.createElement("div");return l.className="like-bar",l.style.width=100*t/(t+n)+"%",i.appendChild(l),e.appendChild(i),e}buildInfo(){let e=document.createElement("div");e.innerText=this.currentSnippet.title,e.className="modal-clip-title";let t=document.createElement("div");t.innerText=this.currentSnippet.channelTitle,t.className="modal-channel-title";let n=document.createElement("div"),i=(new l).formatTimeReverse(new Date(this.currentSnippet.publishedAt));n.innerText="Опубликовано: "+i,n.className+=" modal-publishing-date";let a=document.createElement("div");a.innerText=this.currentSnippet.description,a.className="modal-description";let r=document.createElement("div");return r.className="modal-info",r.appendChild(e),r.appendChild(this.buildRatingStripe()),r.appendChild(this.buildThumbsStripe()),r.appendChild(document.createElement("hr")),r.appendChild(t),r.appendChild(n),r.appendChild(a),r}}void 0===(i=function(e,t,n){n.exports=a}.call(t,n,t,e))||(e.exports=i)},function(e,t,n){let i=n(4),l=n(3),a=n(2),r=n(1),s="AIzaSyBcnPNRvfHK64FizFn6WLX95i65sIurUP8",d="https://www.googleapis.com/youtube/v3",o=null,c="",u=!1;function m(){document.querySelector("body").style["overflow-y"]="auto";let e=document.querySelector(".view-modal-bg"),t=e.querySelector(".view-modal");t.style.left="0",t.innerHTML="",e.style.display="none"}function p(){let e=this.getAttribute("data-vidid");document.querySelector("body").style["overflow-y"]="hidden";let t=document.querySelector(".view-modal-bg"),n=t.querySelector(".view-modal");n.innerHTML="";let l=new XMLHttpRequest;l.open("GET",d+"/videos?id="+e+"&part=snippet,statistics&key="+s,!0),l.send(),l.onreadystatechange=function(){if(4==this.readyState)if(200!=l.status)n.innerText="Failed to download.";else{let e=new i(l.responseText);n.appendChild(e.buildCloseButton(m)),n.appendChild(e.buildWrapper()),n.appendChild(e.buildInfo()),t.style.opacity="1",t.style.display="block"}}}function h(e){return new Promise(function(t,n){let i=new XMLHttpRequest;i.open("GET",d+"/videos?id="+e+"&part=snippet,statistics,contentDetails&key="+s,!0),i.send(),i.onload=function(){if(200!=i.status)n("");else{let e=new l(i.responseText),n=e.buildVidLi();n.appendChild(e.buildThumbnail()),n.appendChild(e.buildClipTitle()),n.appendChild(e.buildDuration()),n.appendChild(e.buildChannelTitle()),n.appendChild(e.buildViewsNum()),n.appendChild(e.buildPublishDate()),t(n)}}})}function v(){let e=document.querySelector(".result-list"),t=new XMLHttpRequest;o?t.open("GET",d+"/search?q="+c+"&part=id&maxResults=20&order=viewCount&type=video&key="+s+"&pageToken="+o,!0):t.open("GET",d+"/search?q="+c+"&part=id&maxResults=20&order=viewCount&type=video&key="+s,!0),t.send(),t.onreadystatechange=function(){if(4==this.readyState)if(200!=t.status)e.innerText="Failed to download.";else{let t=JSON.parse(this.responseText);o=t.nextPageToken;for(let n=0;n<t.items.length;n++)h(t.items[n].id.videoId).then(t=>{e.appendChild(t),t.addEventListener("click",p)})}}}function f(){let e=document.querySelector("body").offsetHeight;window.pageYOffset+window.innerHeight>=e&&v()}function b(){o=null,u||(document.querySelector(".form-stripe-active").style["box-shadow"]="-1px 1px 10px 0px rgba(0,0,0,0.29)",document.querySelector(".form-stripe-active").style.position="fixed",document.querySelector(".search-img").remove(),document.querySelector("html").style.height="auto",document.querySelector(".indicator").style.display="block",u=!0),document.querySelector(".result-list").innerHTML="",c=document.querySelector(".search-input").value,v(),window.addEventListener("scroll",f)}window.addEventListener("load",function(){let e=document.querySelector("body"),t=new a,n=t.createModal(m),i=n.querySelector(".view-modal");new r(i,n).listen(n,m),e.appendChild(n),e.appendChild(t.createStartImg()),e.appendChild(t.createSearchBar(b)),e.appendChild(t.createResultArea()),e.appendChild(t.createSpinnerBar())})}]);