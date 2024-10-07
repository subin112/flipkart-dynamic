document.addEventListener("DOMContentLoaded", () => {
  fetch("index.json")
    .then((res) => res.json())
    .then((data) => {
      const blueContainer = document.querySelector(".blueContainer");
      const blueContainerIn = document.querySelector(".blueContainerInside");
      data.header.forEach((item) => {
        const blueContainerInside = document.createElement("div");
        blueContainerInside.className = "insideBlue";
        blueContainerInside.innerHTML = ` 
       <img src="${item.imgflip}" alt="" class="flip" style="background-color: #2874f0;">            <div class="second">
                <a  class="secondfirst" href="">${item.explore}</a>
                <span>${item.plus}</span>
                <img src="${item.plusimg}" alt="" class="yellowimg">
             </div>
        </div>`;
        blueContainerIn.appendChild(blueContainerInside);

        const blueinside = document.createElement("div");
        blueinside.className = "blueinput";
        const input = document.createElement("form");
        input.innerText = "";
        blueinside.innerHTML = ` <input id="inputBlue" class="inputBlue"><img src="${item.searchicon}" alt=""></input>
`;
        input.appendChild(blueinside);
        blueContainerIn.appendChild(input);

const containerdown = document.querySelector('.containerdown')
const inner = data.inner
containerdown.innerHTML = `<div class="fullinner">
<div class="leftmobile">
  <img src="${inner.imgleft}" alt="" class="imgdown">
  <img src="${inner.imgf}" alt="" class="imgup">
  <span>mobile</span>
</div>
<div class="rightmobile">
  <img src="${inner.imgg}" alt="">
  <img src="${inner.imgx}" alt="">
  <span>${inner.imgLogin}</span>
</div>
</div>`
blueContainer.appendChild(containerdown)


        const searchInput = document.getElementById("inputBlue");
        searchInput.addEventListener("click", function () {
          const searchTrm = this.value.toLowerCase();
          const filteredProducts = data.Main.mainHeader.mobileGrid.filter(
            (item) => item.mobilename.toLowerCase().includes(searchTrm)
          );
          products(filteredProducts);
        });

        const firstLogin = document.createElement("div");
        firstLogin.className = "Login";
        firstLogin.innerHTML = "<p>Login</>";
        blueContainerIn.appendChild(firstLogin);

        const seller = document.createElement("div");
        seller.className = "seller";
        seller.innerHTML = `<div class="bcseller">${item.seller}</div>
<div class="more">${item.more}
<img src="${item.arrowDown}" alt="">
</div>
<div class="cart">
<img src="${item.cartimg}" alt="">
${item.cart}
</div>
`;
        blueContainerIn.appendChild(seller);

        const invisible = document.createElement("div");
        invisible.className = "invisible2";
        blueContainerIn.appendChild(invisible);

        blueContainer.appendChild(blueContainerIn);
      });

      const white = document.querySelector(".whitesection");

      data.whiteLI.forEach((item) => {
        const inside = document.createElement("div");
        inside.className = "small";
        const spaninside = document.createElement("span");
        spaninside.innerHTML = `${item}`;
        inside.appendChild(spaninside);
        white.appendChild(inside);
        const rightSide = document.createElement("div");
        rightSide.className = "floop";
        rightSide.innerHTML = `<img src="${data.imgarrow}" alt="">`;
        inside.appendChild(rightSide);
      });


      
      const whiteafter = document.querySelector('.afterwhite')
      const rig = data.inner
      whiteafter.innerHTML = `<div class="afterFull">
<div class="sort">
  <img src="${rig.sort}" alt="">
  <span>Sort</span>
</div>
<div class="line"></div>
<div class="filterop">
  <img src="${rig.filter}" alt="">
  <span>Filter</span>
</div>

</div>`

const sortClick = document.querySelector('.sort')
sortClick.addEventListener('click',()=>{
   if(window.innerWidth < 800){
const rightContent = document.querySelector('.mobileright')
      const hoverdown = document.querySelector('.bottom')  
      
      if (
            hoverdown.style.display === "none" ||
            hoverdown.style.display === ""
          ) {
            hoverdown.style.display = "block";
            rightContent.classList.add('active')
             
          } else {
            hoverdown.style.display = "none";
            
         }
         whiteafter.appendChild(hoverdown)
         rightContent.classList.remove('active')

      }
      })



      const filterdrop = document.querySelector('.filterop')
filterdrop.addEventListener('click',()=>{


    if(window.innerWidth < 800){
const rightContent = document.querySelector('.mobileright')
      const sidebar= document.querySelector('.sidebar')  
      
      if (
            sidebar.style.display === "none" ||
            sidebar.style.display === ""
          ) {
            sidebar.style.display = "block";
            rightContent.classList.add('active')
             
          } else {
            sidebar.style.display = "none";
            
         }
         whiteafter.appendChild(sidebar)
         rightContent.classList.remove('active')

      }
})

      
      const sidebar = document.querySelector(".sidebar");

      const sidebarInfil = document.querySelector(".filter");
      sidebarInfil.innerHTML = `<span>${data.leftFilters.filtr}`;

      const categorie = document.querySelector(".catergory");
      const catergorytxt = document.createElement("div");
      catergorytxt.className = "category-txt";
      catergorytxt.innerHTML = `<span>${data.leftFilters.cat}</span>`;
      categorie.appendChild(catergorytxt);

      const categorie1 = document.createElement("div");
      categorie1.className = "cat1";
      categorie1.innerHTML = ` <img src="${data.leftFilters.Mobileimg}" alt=""> <a>${data.leftFilters.access}</a>`;
      categorie.appendChild(categorie1);

      const mobile = document.createElement("div");
      mobile.className = "mob";
      mobile.innerHTML = `<span>${data.leftFilters.mobiletxt}</span>`;
      categorie.appendChild(mobile);

      const price = document.querySelector(".price-range");
      const pricetxt = document.querySelector(".price-span");
      pricetxt.innerHTML = data.leftFilters.pricetxt;

      const rangeTop = document.querySelector(".range-top");
      const rangeTopDiv = document.createElement("div");
      rangeTopDiv.className = "range-top";
      rangeTop.appendChild(rangeTopDiv);

      const Lrange = document.getElementById("left-range");
      const LrangeDiv = document.createElement("div");
      LrangeDiv.className = "round";
      Lrange.appendChild(LrangeDiv);

      const midrange = document.querySelector(".mid-range");
      const midrangeDiv = document.createElement("div");
      midrangeDiv.className = "mid-line";
      midrange.appendChild(midrangeDiv);

      const rRange = document.getElementById("right-range");
      const rRangeDiv = document.createElement("div");
      rRangeDiv.className = "round";
      rRange.appendChild(rRangeDiv);

      const minMax = document.querySelector(".min-max");
      const min = document.createElement("div");
      min.className = "min";
      const minselect = document.createElement("select");
      data.leftFilters.min.forEach((min) => {
        const select = document.createElement("option");
        select.innerHTML = min;
        minselect.appendChild(select);
      });
      min.appendChild(minselect);
      minMax.appendChild(min);

      const toText = document.createElement("div");
      toText.className = "to-text";
      toText.innerHTML = data.leftFilters.to;
      minMax.appendChild(toText);

      const max = document.createElement("div");
      max.className = "max";

      const maxselect = document.createElement("select");
      data.leftFilters.max.forEach((max) => {
        const maxoption = document.createElement("option");
        maxoption.innerHTML = max;
        maxselect.appendChild(maxoption);
      });
      max.appendChild(maxselect);
      minMax.appendChild(max);

      const brandmain = document.querySelector(".brand");

      const brandtxt = document.createElement("div");
      brandtxt.className = "branddiv";
      brandtxt.innerHTML = `<span>${data.leftFilters.brand}</span> <img src="${data.leftFilters.brandicon}">`;
      brandmain.appendChild(brandtxt);

      const brandcount = document.createElement("div");
      brandcount.className = "search-full";

      const brandSearch = document.createElement("div");
      brandSearch.className = "search-content";
      const searchDiv = document.createElement("div");
      searchDiv.className = `search-div`;
      searchDiv.innerHTML = `<img src="${data.leftFilters.searchicon}">
    <input type="text"  class="brand-input"  placeholder="${data.leftFilters.brandInput}">`;
      brandSearch.appendChild(searchDiv);
      brandcount.appendChild(brandSearch);
      brandmain.appendChild(brandcount);

      const brandimage = document.querySelector(".branddiv img");
      brandtxt.addEventListener("click", () => {
        if (
          brandcount.style.display === "none" ||
          brandcount.style.display === ""
        ) {
          brandcount.style.display = "block";
          brandimage.classList.add("active") || brandimage.classList.add("");
        } else {
          brandcount.style.display = "none";
          brandimage.classList.remove("active");
        }
      });

      const boxContent = document.createElement("div");
      boxContent.className = "box-content";

      data.leftFilters.brandarray.forEach((array) => {
        const checkItem = document.createElement("div");
        checkItem.innerHTML = `<label> <input type="checkbox" name="brand" class="checkbox" value="${array}"><div class="checkwrite">${array}</div></label>`;
        boxContent.appendChild(checkItem);
      });
      brandcount.appendChild(boxContent);

      // -------------------------------        Filter function
      function filterfunc() {
        const selectedBrands = Array.from(
          document.querySelectorAll(".checkbox")
        )
          .filter((checkbox) => checkbox.checked)
          .map((checkbox) => checkbox.value.toLowerCase());

        if (selectedBrands.length === 0) {
          products(data.Main.mainHeader.mobileGrid);
        } else {
          const filteredProducts = data.Main.mainHeader.mobileGrid.filter(
            (product) => {
              return selectedBrands.includes(product.id.toLowerCase());
            }
          );
          products(filteredProducts);
        }
      }

      document.querySelectorAll(".checkbox").forEach((box) => {
        box.addEventListener("change", filterfunc);
      });

      function products(productItem, page = 1, perPage = 10) {
        const rightContent = document.querySelector(".mobileright");
        rightContent.innerHTML = "";

        const start = (page - 1) * perPage;
        const end = start + perPage;
        const paginatedItem = productItem.slice(start, end);

        paginatedItem.forEach((item) => {
          const mobilewrap = document.createElement("div");
          mobilewrap.className = "mobile-wrapper";

          const card = document.createElement("div");
          card.className = "inpadding";
          card.innerHTML = `<img src="${item.img}" alt="Mobile Image">`;
          mobilewrap.appendChild(card);

          const roll = document.createElement("div");
          roll.className = "roll";
          roll.innerHTML = `<input type="checkbox"> <span>${item.boxtxt}</span>`;
          card.appendChild(roll);

          const like = document.createElement("div");
          like.className = "likeimg";
          like.innerHTML = `<i class="fa fa-heart"></i>`;
          mobilewrap.appendChild(like);

          const apple = document.createElement("div");
          apple.className = "apple-first";

          const apply = document.createElement("div");
          apply.className = "apply";
          apply.innerHTML = `
          <div class="fool">
            <span class="roll">${item.mobilename}</span>
            <div class="down">
              <div class="green">
                <span class="rate">${item.rate}</span>
                <img src="${item.rateimg}" alt="Rating">
              </div>
              <div class="stick">${item.ratenum}</div>
            </div>
          </div>`;
          apple.appendChild(apply);

          const ulSpeci = document.createElement("ul");
          ulSpeci.className = "ulsp";
          item.speci.forEach((spec) => {
            const liSpeci = document.createElement("li");
            liSpeci.innerHTML = spec;
            ulSpeci.appendChild(liSpeci);
          });
          apple.appendChild(ulSpeci);

          mobilewrap.appendChild(apple);

          const rupees = document.createElement("div");
          rupees.className = "rupees";

          const paisa = document.createElement("div");
          paisa.className = "paise";
          paisa.innerHTML = `
          <div class="ruler">
            <div class="rip">${item.price}</div>
            <img src="${item.flipimg}" alt="">
          </div>
          <div class="secondruler">
            <div class="og">
              <span>${item.ogprice}</span>
              <div class="off">${item.percentage}</div>
            </div>
            <div class="free">${item.status}</div>
            <div class="discount"><span>${item.offer}</span></div>
            <div class="upto">upto <strong>${item.exchange}</strong> off on Exchange</div>
          </div>`;
          rupees.appendChild(paisa);

          mobilewrap.appendChild(rupees);
          rightContent.appendChild(mobilewrap);

if(window.innerWidth < 800){
apple.appendChild(paisa)
}else{
   
}

        });
        addPagination(productItem.length, page, perPage);
      }

      products(data.Main.mainHeader.mobileGrid);

      const lastpage = document.querySelector(".pages-next");
      lastpage.innerHTML = `<span>${data.Main.bottomBtn.btnSpan}</span>`;

      function addPagination(totalItems, currentPage, perPage) {
        const paginatedfunc = document.querySelector(".looking");

        if (!document.querySelector(".pagination")) {
          const pagcontnt = document.createElement("div");
          pagcontnt.className = "pagination";
          paginatedfunc.appendChild(pagcontnt);
        }

        const totalpg = Math.ceil(totalItems / perPage);
        let tPagination = "";

        if (currentPage > 1) {
          tPagination += `<a href="#" data-page="${
            currentPage - 1
          }">Previous</a>`;
        }

        for (let i = 1; i <= totalpg; i++) {
          tPagination += `<a href="#" data-page="${i}" class="${
            i === currentPage ? "active" : ""
          }">${i}</a>`;
        }

        if (currentPage < totalpg) {
          tPagination += `<a href="#" data-page="${currentPage + 1}">Next</a>`;
        }

        document.querySelector(".pagination").innerHTML = tPagination;

        document.querySelectorAll(".pagination a").forEach((link) => {
          link.addEventListener("click", (event) => {
            event.preventDefault();
            const page = parseInt(event.target.getAttribute("data-page"), 10);
            products(data.Main.mainHeader.mobileGrid, page);

            document.querySelectorAll(".pagination a").forEach((link) => {
              if (link === event.target) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });
          });
        });
      }

      const flipoImgcontent = document.createElement("div");
      flipoImgcontent.className = "flipcontent";
      flipoImgcontent.innerHTML = " ";

      const flipImg = document.createElement("div");
      flipImg.className = "flipimg-img";
      flipImg.innerHTML = ` <input type ="checkbox"> <img src="${data.leftFilters.flipimg}" alt="">`;
      flipoImgcontent.appendChild(flipImg);
      const flipspan = document.createElement("div");
      flipspan.className = "flipspan";
      flipspan.innerHTML = "<div class=Q>?</div>";
      flipoImgcontent.appendChild(flipspan);
      sidebar.appendChild(flipoImgcontent);

      const sidesection = document.createElement("div");
      sidesection.className = "side-section";
      data.leftFilters.secondbar.forEach((item) => {
        const section = document.createElement("div");
        section.className = "rating";
        section.id = "display";
        const sechead = document.createElement("div");
        sechead.className = "sec-head";
        sechead.innerHTML = `<span>${item.section}</span><img class="drop-img" src="${item.brandicon}">`;
        section.appendChild(sechead);

        const dropdownImg = document.querySelectorAll(".drop-img");
        console.log(dropdownImg);
        sechead.addEventListener("click", () => {
          secDropdown.style.display === "block";
          if (
            secDropdown.style.display === "none" ||
            secDropdown.style.display === ""
          ) {
            secDropdown.style.display = "block";
            dropdownImg.classList.add("up") || dropdownImg.classList.add("");
          } else {
            secDropdown.style.display = "none";
            dropdownImg.classList.remove("up");
          }
        });

        const secDropdown = document.createElement("div");
        secDropdown.className = "sec-dropdown";
        item.selected.forEach((check) => {
          const checkDiv = document.createElement("div");
          checkDiv.className = "checkDiv";
          const checkInput = document.createElement("input");
          checkInput.type = "checkbox";
          checkDiv.appendChild(checkInput);

          const checklab = document.createElement("label");
          checklab.innerHTML = check;
          checkDiv.appendChild(checklab);
          secDropdown.appendChild(checkDiv);
          section.appendChild(secDropdown);
          sidesection.appendChild(section);
        });
      });

      sidebar.appendChild(sidesection);

      const Mainer = document.querySelector(".rightmain-top");
      const topMain = document.createElement("div");
      topMain.className = "top-count";

      data.Main.mainHeader.headerTop.forEach((item) => {
        const topItem = document.createElement("div");
        topItem.className = "topitem";
        topItem.innerHTML = `<a>${item.txt}</a>   <img src="${item.img}">`;
        topMain.appendChild(topItem);
        console.log(topMain);
      });
      Mainer.appendChild(topMain);

      // ---------------    middle
      const middle = document.createElement("div");
      middle.className = "middler";
      middle.innerHTML = data.Main.mainHeader.mainHead;
      Mainer.appendChild(middle);

      // -------------------   bottom
      const bottom = document.createElement("div");
      bottom.className = "bottom";

      data.Main.mainHeader.headFilter.forEach((head) => {
        const bottomHead = document.createElement("div");
        bottomHead.className = "botHead";
        bottomHead.innerText = head.name;
        bottomHead.id = head.id;
        bottom.appendChild(bottomHead);

        bottomHead.addEventListener("click", () => {
          document
            .querySelectorAll(".botHead")
            .forEach((e) => e.classList.remove("active"));
          bottomHead.classList.add("active");
        });
      });
      Mainer.appendChild(bottom);

      const footer = document.querySelector(".footer-class");
      const footerClass = document.createElement("div");
      footerClass.className = "back";

      data.Main.footer.contact.forEach((footer) => {
        const footerDIv = document.createElement("div");
        footerDIv.className = "contact";

        const firtper = document.createElement("div");
        firtper.className = "fperson";
        firtper.innerHTML = footer.tophead;
        footerDIv.appendChild(firtper);

        footer.footergrid.forEach((grider) => {
          const liPer = document.createElement("li");
          liPer.innerHTML = grider;
          footerDIv.appendChild(liPer);
        });
        footerClass.appendChild(footerDIv);
      });
      footer.appendChild(footerClass);

      // --------------    low price
      const lowHigh = document.getElementById("filter4");
      lowHigh.addEventListener("click", ()=> {
        const aray = data.Main.mainHeader.mobileGrid;
        const sorted = aray.sort(
          (a , b) => parseFloat(a.price) - parseFloat(b.price)
        );
        products(aray,sorted);
      });

      // --------------  hight to low
      const hightoLow = document.getElementById("filter5");
      hightoLow.addEventListener("click",  ()=> {
        const arrayI = data.Main.mainHeader.mobileGrid;
        const sortedH = arrayI.sort(
          (a , b) => parseFloat(b.price) - parseFloat(a.price)
        );
       
        products(arrayI,sortedH);
      });

      const last = document.querySelector(".footer-bottom");

      const final = document.createElement("div");
      final.className = "final";

      data.Main.footer.last.forEach((el) => {
        const finalbox = document.createElement("div");
        finalbox.className = "boxfinal";
        finalbox.innerHTML = `<img src="${el.img}" alt=""> <div>${el.txt}</div> `;
        final.appendChild(finalbox);
      });
      last.appendChild(final);

      const allIn = data.Main.footer;
      const copy = document.createElement("div");
      copy.className = "copy";
      copy.innerHTML = `${allIn.rolex} <span>${allIn.span}</span>`;
      final.appendChild(copy);

      const lastarary = document.createElement("div");
      lastarary.className = "lastimg";
      lastarary.innerHTML = `<img src="${allIn.imgL}" alt="">`;
      final.appendChild(lastarary);
    });
});
