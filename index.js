import{a as u,S as p,i as l}from"./assets/vendor-C9vNCoLC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();u.defaults.baseURL="https://pixabay.com/api/";function g(s){return u("",{params:{q:s,key:"50190409-57f653f3b13017a76580224dc",image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>t)}const h=new p(".js-gallery .image-link",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".js-gallery");function y(s){d.innerHTML=s.map(({tags:t,largeImageURL:a,webformatURL:r,likes:e,views:i,comments:o,downloads:m})=>`<li class="gallery-item">
                <div>
                  <a href="${a}" class="image-link">
                    <img
                      src="${r}"
                      alt="${t}"
                      class="gallery-image"
                    />
                  </a>
                </div>
                <div>
                  <ul class="image-info">
                    <li class="info-item">
                      <p class="info-value-tittle">Likes</p>
                      <p class="info-value" data-likes>${e}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Views</p>
                      <p class="info-value" data-views>${i}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Comments</p>
                      <p class="info-value" data-comments>${o}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Downloads</p>
                      <p class="info-value" data-downloads>${m}</p>
                    </li>
                  </ul>
                </div>
              </li>`).join("")}function n(){d.innerHTML=""}function v(s){s.classList.remove("hidden")}function L(s){s.classList.add("hidden")}const f=document.querySelector(".js-form"),c=document.querySelector(".js-loader");f.addEventListener("submit",b);function b(s){s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(t===""){l.warning({position:"topRight",message:"Please enter the correct query!"});return}n(),v(c),g(t).then(a=>{if(a.hits.length===0){l.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n();return}y(a.hits),w(),h.refresh()}).catch(a=>{console.log(a),l.error({position:"topRight",message:`ERROR: ${a}`})}).finally(()=>{L(c),f.reset()})}function w(){document.querySelectorAll(".gallery-item").forEach((t,a)=>{setTimeout(()=>{t.classList.add("show")},a*100)})}
//# sourceMappingURL=index.js.map
