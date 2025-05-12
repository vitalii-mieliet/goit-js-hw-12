import{a as y,S as q,i as l}from"./assets/vendor-C9vNCoLC.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();y.defaults.baseURL="https://pixabay.com/api/";async function h(t,i){try{return(await y("",{params:{q:t,key:"50190409-57f653f3b13017a76580224dc",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:i}})).data}catch(o){return o}}const v=new q(".js-gallery .image-link",{captionsData:"alt",captionDelay:250}),L=document.querySelector(".js-gallery");function b(t){const i=t.map(({tags:o,largeImageURL:n,webformatURL:e,likes:r,views:s,comments:w,downloads:R})=>`<li class="gallery-item js-gallery-item">
                <div>
                  <a href="${n}" class="image-link">
                    <img
                      src="${e}"
                      alt="${o}"
                      class="gallery-image"
                    />
                  </a>
                </div>
                <div>
                  <ul class="image-info">
                    <li class="info-item">
                      <p class="info-value-tittle">Likes</p>
                      <p class="info-value" data-likes>${r}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Views</p>
                      <p class="info-value" data-views>${s}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Comments</p>
                      <p class="info-value" data-comments>${w}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Downloads</p>
                      <p class="info-value" data-downloads>${R}</p>
                    </li>
                  </ul>
                </div>
              </li>`).join("");L.insertAdjacentHTML("beforeend",i)}function g(){L.innerHTML=""}function m(t){t.classList.remove("hidden")}function u(t){t.classList.add("hidden")}const p=document.querySelector(".js-form"),d=document.querySelector(".js-loader"),f=document.querySelector("#load-more-button");let c="",a=1;p.addEventListener("submit",S);f.addEventListener("click",E);async function S(t){if(t.preventDefault(),c=t.target.elements["search-text"].value.trim(),c===""){l.warning({position:"topRight",message:"Please enter the correct query!"});return}u(f),g(),m(d);try{const i=await h(c,a);if(i.hits.length===0){l.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),g();return}i.totalHits>15&&m(f),b(i.hits),v.refresh()}catch(i){l.error({position:"topRight",message:`ERROR: ${i}`})}finally{u(d),p.reset()}}async function E(){m(d);try{a+=1;const t=await h(c,a);a*15>=t.totalHits&&(a=1,u(f),l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),b(t.hits);const o=document.querySelector(".js-gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*3+50,behavior:"smooth"}),v.refresh()}catch(t){l.error({position:"topRight",message:`ERROR: ${t}`})}finally{u(d),p.reset()}}
//# sourceMappingURL=index.js.map
