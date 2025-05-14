var S=t=>{throw TypeError(t)};var R=(t,e,s)=>e.has(t)||S("Cannot "+s);var r=(t,e,s)=>(R(t,e,"read from private field"),s?s.call(t):e.get(t)),u=(t,e,s)=>e.has(t)?S("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),l=(t,e,s,c)=>(R(t,e,"write to private field"),c?c.call(t,s):e.set(t,s),s);import{a as O,S as T,i as p}from"./assets/vendor-C9vNCoLC.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();var v,w,g,n,d,m;class M{constructor(){u(this,v,"https://pixabay.com/api/");u(this,w,"50190409-57f653f3b13017a76580224dc");u(this,g,"");u(this,n,1);u(this,d,15);u(this,m,1)}async getImagesByQuery(){try{const e=await O.get(r(this,v),{params:{q:r(this,g),key:r(this,w),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:r(this,d),page:r(this,n)}});return this.calculateTotalPages(e.data.totalHits),e.data}catch(e){return e}}calculateTotalPages(e){this.totalPages=Math.max(1,Math.ceil(e/r(this,d)))}set query(e){l(this,g,e)}set page(e){l(this,n,e)}set totalPages(e){l(this,m,e)}get query(){return r(this,g)}get page(){return r(this,n)}get per_page(){return r(this,d)}get totalPages(){return r(this,m)}nextPage(){return l(this,n,r(this,n)+1)}reset(){l(this,g,""),l(this,n,1),l(this,m,1)}}v=new WeakMap,w=new WeakMap,g=new WeakMap,n=new WeakMap,d=new WeakMap,m=new WeakMap;const E=new T(".js-gallery .image-link",{captionsData:"alt",captionDelay:250}),x=document.querySelector(".js-gallery");function B(t){const e=t.map(({tags:s,largeImageURL:c,webformatURL:a,likes:i,views:h,comments:A,downloads:I})=>`<li class="gallery-item js-gallery-item">
                <div>
                  <a href="${c}" class="image-link">
                    <img
                      src="${a}"
                      alt="${s}"
                      class="gallery-image"
                    />
                  </a>
                </div>
                <div>
                  <ul class="image-info">
                    <li class="info-item">
                      <p class="info-value-tittle">Likes</p>
                      <p class="info-value" data-likes>${i}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Views</p>
                      <p class="info-value" data-views>${h}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Comments</p>
                      <p class="info-value" data-comments>${A}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Downloads</p>
                      <p class="info-value" data-downloads>${I}</p>
                    </li>
                  </ul>
                </div>
              </li>`).join("");x.insertAdjacentHTML("beforeend",e)}function L(){x.innerHTML=""}function q(t){t.classList.remove("hidden")}function b(t){t.classList.add("hidden")}const o=new M,$=document.querySelector(".js-form"),y=document.querySelector(".js-loader"),P=document.querySelector("#load-more-button");$.addEventListener("submit",_);P.addEventListener("click",C);async function _(t){if(t.preventDefault(),o.reset(),o.query=t.target.elements["search-text"].value.trim(),!o.query){p.warning({position:"topRight",message:"Please enter the correct query!"}),f(),L();return}L(),q(y);try{const e=await o.getImagesByQuery();if(!e.hits.length){p.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),f(),L();return}B(e.hits),f(),E.refresh();const s=document.querySelectorAll(".gallery-item:not(.show)");j(s)}catch(e){p.error({position:"topRight",message:`ERROR: ${e}`})}finally{b(y),$.reset()}}async function C(){q(y);try{o.nextPage();const t=await o.getImagesByQuery();o.page>=o.totalPages&&(f(),p.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),B(t.hits);const e=document.querySelectorAll(".gallery-item:not(.show)");j(e),k(),f(),E.refresh()}catch(t){p.error({position:"topRight",message:`ERROR: ${t}`})}finally{b(y)}}function f(){o.page<o.totalPages?q(P):b(P)}function k(){const t=document.querySelector(".js-gallery-item");if(t){const e=t.getBoundingClientRect().height;window.scrollBy({top:e*3+22,behavior:"smooth"})}}function j(t){t.forEach((e,s)=>{setTimeout(()=>{e.classList.add("show")},s*150)})}
//# sourceMappingURL=index.js.map
