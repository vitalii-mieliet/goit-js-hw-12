var b=t=>{throw TypeError(t)};var S=(t,e,a)=>e.has(t)||b("Cannot "+a);var r=(t,e,a)=>(S(t,e,"read from private field"),a?a.call(t):e.get(t)),c=(t,e,a)=>e.has(t)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),u=(t,e,a,l)=>(S(t,e,"write to private field"),l?l.call(t,a):e.set(t,a),a);import{a as T,S as I,i as h}from"./assets/vendor-C9vNCoLC.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();var v,w,g,n,d,p;class M{constructor(){c(this,v,"https://pixabay.com/api/");c(this,w,"50190409-57f653f3b13017a76580224dc");c(this,g,"");c(this,n,1);c(this,d,15);c(this,p,1)}async getImagesByQuery(){try{const e=await T.get(r(this,v),{params:{q:r(this,g),key:r(this,w),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:r(this,d),page:r(this,n)}});return this.calculateTotalPages(e.data.totalHits),e.data}catch(e){return e}}calculateTotalPages(e){this.totalPages=Math.max(1,Math.ceil(e/r(this,d)))}set query(e){u(this,g,e)}set page(e){u(this,n,e)}set totalPages(e){u(this,p,e)}get query(){return r(this,g)}get page(){return r(this,n)}get per_page(){return r(this,d)}get totalPages(){return r(this,p)}nextPage(){return u(this,n,r(this,n)+1)}resetPage(){u(this,n,1)}}v=new WeakMap,w=new WeakMap,g=new WeakMap,n=new WeakMap,d=new WeakMap,p=new WeakMap;const E=new I(".js-gallery .image-link",{captionsData:"alt",captionDelay:250}),x=document.querySelector(".js-gallery");function B(t){const e=t.map(({tags:a,largeImageURL:l,webformatURL:s,likes:i,views:m,comments:A,downloads:O})=>`<li class="gallery-item js-gallery-item">
                <div>
                  <a href="${l}" class="image-link">
                    <img
                      src="${s}"
                      alt="${a}"
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
                      <p class="info-value" data-views>${m}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Comments</p>
                      <p class="info-value" data-comments>${A}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Downloads</p>
                      <p class="info-value" data-downloads>${O}</p>
                    </li>
                  </ul>
                </div>
              </li>`).join("");x.insertAdjacentHTML("beforeend",e)}function R(){x.innerHTML=""}function L(t){t.classList.remove("hidden")}function q(t){t.classList.add("hidden")}const o=new M,$=document.querySelector(".js-form"),f=document.querySelector(".js-loader"),P=document.querySelector("#load-more-button");$.addEventListener("submit",_);P.addEventListener("click",C);async function _(t){if(t.preventDefault(),o.resetPage(),o.query=t.target.elements["search-text"].value.trim(),!o.query){h.warning({position:"topRight",message:"Please enter the correct query!"});return}R(),L(f);try{const e=await o.getImagesByQuery();if(!e.hits.length){h.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),y(),R();return}B(e.hits);const a=document.querySelectorAll(".gallery-item:not(.show)");j(a),y(),E.refresh()}catch(e){h.error({position:"topRight",message:`ERROR: ${e}`})}finally{q(f),$.reset()}}async function C(){L(f);try{o.nextPage();const t=await o.getImagesByQuery();o.page>=o.totalPages&&(y(),h.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),B(t.hits);const e=document.querySelectorAll(".gallery-item:not(.show)");j(e),k(),y(),E.refresh()}catch(t){h.error({position:"topRight",message:`ERROR: ${t}`})}finally{q(f)}}function y(){o.page<o.totalPages?L(P):q(P)}function k(){const t=document.querySelector(".js-gallery-item");if(t){const e=t.getBoundingClientRect().height;window.scrollBy({top:e*3+22,behavior:"smooth"})}}function j(t){t.forEach((e,a)=>{setTimeout(()=>{e.classList.add("show")},a*100)})}
//# sourceMappingURL=index.js.map
