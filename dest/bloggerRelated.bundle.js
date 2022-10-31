/*!
* blogger.relatedPost 0.1.2
* https://github.com/Karasu-themes/bloggerRelatedPost
*
* Copyright © 2022 MarceloTLD
* 
* Released under the MIT License
*-----------------------------------------------*/
var bloggerRelated=function(){"use strict";return class{constructor(t){this.home=t.urlBloggerPage??window.location.protocol+"//"+window.location.hostname,this.maxPosts=t.maxPosts??4,this.queries=t.queries??"",this.template="",this.nodeId=t.nodeAppend??"bloggerRelated-append",this.labels=t.labels??[],this.node=document.getElementById(this.nodeId)??!1,this.config=t,this.init()}defaultTemplate(){return'<div class="default-card text-left"><picture class="mb-2 block"><a href="{url}" class="block"><img src="{thumbnail}" class="rounded"></a></picture><h2 class="text-lg font-bold text-slate-700">{title}</h2><div class="mb-2"><a class="text-xs font-semibold opacity-75" href="{authorUri}">{authorName}</a> - <time class="text-xs font-semibold opacity-75" datetime="{datePostIso8601}">{datePost}</ti></div><p class="text-slate-500 text-sm mb-2">{summary}</p><a href="{url}" class="bg-indigo-500 text-white hover:bg-indigo-700 text-xs uppercase duration-150 py-2 px-2 font-semibold rounded inline-block">More details</a></div>'}setTemplate(t){this.template=t}getTemplate(){return this.template||this.defaultTemplate()}#t(){let t=document.createElement("script"),e="";if(e+=`${this.home}/feeds/posts/default?alt=json-in-script&callback=bloggerRelatedPost&max-results=${this.maxPosts}`,this.labels.length){e+="&q=label:";for(let t=0;t<this.labels.length;t++)e+='"'+this.labels[t]+'"'+(t===this.labels.length-1?"":"|")}return t.src=e,t}#e(){return new Promise((t=>{const e=this.#t();document.body.appendChild(e),window.bloggerRelatedPost=e=>{t(e.feed.entry??!1)}}))}#s(t,e){function s(t){let e=t,s="";for(var o=0;o<e.length;o++)"alternate"==e[o].rel&&(s=e[o].href);return s}const o=t.content?t.content.$t:t.summary.$t;return{id:(i=t.id.$t,i.match(/post-\d{1,}/g)[0].replace("post-","")),title:t.title?t.title.$t:"No title",thumbnail:t.media$thumbnail?t.media$thumbnail.url.replace(/s\B\d{2,4}(-?w\d{2,4})?-c/,e.resimg?e.resimg:"s200"):function(t){let s=document.createElement("div");s.innerHTML=t;let o=s.querySelector("img");return console.log(o),o?o.getAttribute("src"):e.dftImg||"#noImageFounded"}(o),label:t.category?t.category.map((t=>t.term)):"",link:s(t.link),url:s(t.link),content:o,summary:function(t){const s=t.replace(/<[^>]*>?/g,"");return s.length>e.summaryLength?s.substr(0,e.summaryLength)+"...":s}(o),datePost:new Date(t.published.$t).toLocaleDateString(),postUpdate:new Date(t.updated.$t).toLocaleDateString(),datePostIso8601:t.published.$t,authorName:t.name?t.name.$t:"Unknown",authorUri:t.uri?t.uri.$t:"#noProfileUrl"};var i}#o(t,e){return e.replace(/\{\w+\}/g,(e=>{let s=e.replace(/{|}/g,"");return t[s]}))}init(){this.node?this.#e().then((t=>{const e=this.node;e.innerHTML="";const s=t.filter((t=>{const e=t.id.$t.split("post-")[1];return this.config.currentId!=e}));console.log(t),s.forEach((t=>{const s=this.#s(t,this.config);this.config.itemHook&&"function"==typeof this.config.itemHook?e.innerHTML+=this.config.itemHook(s):e.innerHTML+=this.#o(s,this.getTemplate())})),this.config.wrapperHook&&"function"==typeof this.config.wrapperHook&&this.config.wrapperHook(e)})):console.warn(`Warning: The node element is not found, please check if node "${this.nodeId}" exist in your html document.`)}}}();
