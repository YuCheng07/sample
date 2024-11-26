// 添加start section動畫

const heroMemberMainContainer = document.querySelector(
  ".hero-member-main-content-container"
);

let startSectionHeight = 0;

const startSection = document.querySelector(".hero-member-main-start-section");

const startSectionBgImg = document.querySelector(
  ".hero-member-main-start-section-bg-img"
);

const startSectionContent = document.querySelector(
  ".hero-member-main-start-section-content"
);

const startSectionContentIcon = document.querySelector(
  ".hero-member-main-start-section-content-icon"
);

let functionSectionAnimetionClass = false;
heroMemberMainContainer.addEventListener("scroll", (e) => {
  // e.stopPropagation();
  // console.log(e.target);

  // console.log(e.target.scrollTop);
  // console.log(startSection.offsetTop);
  startSectionHeight = startSection.offsetHeight;

  if (e.target.scrollTop > 0 && functionSectionAnimetionClass == false) {
    startSection.classList.add("hero-member-main-start-section-animation");
    startSectionBgImg.classList.add(
      "hero-member-main-start-section-bg-img-animation"
    );

    startSectionContent.classList.add(
      "hero-member-main-start-section-content-animation"
    );
    startSectionContentIcon.classList.add(
      "hero-member-main-start-section-content-icon-animation"
    );
    functionSectionAnimetionClass = true;
  } else if (
    e.target.scrollTop < startSectionHeight / 2 &&
    functionSectionAnimetionClass == true
  ) {
    startSection.classList.remove("hero-member-main-start-section-animation");
    startSectionBgImg.classList.remove(
      "hero-member-main-start-section-bg-img-animation"
    );
    startSectionContent.classList.remove(
      "hero-member-main-start-section-content-animation"
    );
    startSectionContentIcon.classList.remove(
      "hero-member-main-start-section-content-icon-animation"
    );
    functionSectionAnimetionClass = false;
  }
});

// 添加ad artist section動畫

let adArtistSectionHeight = 0;

const adArtistSection = document.querySelector(
  ".hero-member-main-ad-artist-section"
);

const adArtistSectionBgImg = document.querySelector(
  ".hero-member-main-ad-artist-section-bg-img"
);

const adArtistSectionContent = document.querySelector(
  ".hero-member-main-ad-artist-section-content"
);

const adArtistSectionContentIcon = document.querySelector(
  ".hero-member-main-ad-artist-section-content-icon"
);

let adArtistSectionAnimetionClass = false;
heroMemberMainContainer.addEventListener("scroll", (e) => {
  // e.stopPropagation();
  // console.log(e.target);

  // console.log(e.target.scrollTop);
  // console.log(adArtistSection.offsetTop);
  adArtistSectionHeight = adArtistSection.offsetHeight;

  if (e.target.scrollTop > 2222 && adArtistSectionAnimetionClass == false) {
    adArtistSection.classList.add(
      "hero-member-main-ad-artist-section-animation"
    );
    adArtistSectionBgImg.classList.add(
      "hero-member-main-ad-artist-section-bg-img-animation"
    );

    adArtistSectionContent.classList.add(
      "hero-member-main-ad-artist-section-content-animation"
    );
    adArtistSectionContentIcon.classList.add(
      "hero-member-main-ad-artist-section-content-icon-animation"
    );
    adArtistSectionAnimetionClass = true;
  } else if (
    e.target.scrollTop < adArtistSectionHeight + 2222 &&
    adArtistSectionAnimetionClass == true
  ) {
    adArtistSection.classList.remove(
      "hero-member-main-ad-artist-section-animation"
    );
    adArtistSectionBgImg.classList.remove(
      "hero-member-main-ad-artist-section-bg-img-animation"
    );
    adArtistSectionContent.classList.remove(
      "hero-member-main-ad-artist-section-content-animation"
    );
    adArtistSectionContentIcon.classList.remove(
      "hero-member-main-ad-artist-section-content-icon-animation"
    );
    adArtistSectionAnimetionClass = false;
  }
});

// 添加ad artist section動畫

let storesPartnersSectionHeight = 0;

const storesPartnersSection = document.querySelector(
  ".hero-member-main-stores-partners-section"
);

const storesPartnersSectionBgImg = document.querySelector(
  ".hero-member-main-stores-partners-section-bg-img"
);

const storesPartnersSectionContent = document.querySelector(
  ".hero-member-main-stores-partners-section-content"
);

const storesPartnersSectionContentIcon = document.querySelector(
  ".hero-member-main-stores-partners-section-content-icon"
);

let storesPartnersSectionAnimetionClass = false;
heroMemberMainContainer.addEventListener("scroll", (e) => {
  // e.stopPropagation();
  // console.log(e.target);

  // console.log(storesPartnersSection.offsetTop);
  storesPartnersSectionHeight = storesPartnersSection.offsetHeight;

  if (
    e.target.scrollTop > 3993 &&
    storesPartnersSectionAnimetionClass == false
  ) {
    storesPartnersSection.classList.add(
      "hero-member-main-stores-partners-section-animation"
    );
    storesPartnersSectionBgImg.classList.add(
      "hero-member-main-stores-partners-section-bg-img-animation"
    );

    storesPartnersSectionContent.classList.add(
      "hero-member-main-stores-partners-section-content-animation"
    );
    storesPartnersSectionContentIcon.classList.add(
      "hero-member-main-stores-partners-section-content-icon-animation"
    );
    storesPartnersSectionAnimetionClass = true;
  } else if (
    e.target.scrollTop < storesPartnersSectionHeight + 3993 &&
    storesPartnersSectionAnimetionClass == true
  ) {
    storesPartnersSection.classList.remove(
      "hero-member-main-stores-partners-section-animation"
    );
    storesPartnersSectionBgImg.classList.remove(
      "hero-member-main-stores-partners-section-bg-img-animation"
    );
    storesPartnersSectionContent.classList.remove(
      "hero-member-main-stores-partners-section-content-animation"
    );
    storesPartnersSectionContentIcon.classList.remove(
      "hero-member-main-stores-partners-section-content-icon-animation"
    );
    storesPartnersSectionAnimetionClass = false;
  }
});

// card price

const cardPriceItem = document.querySelector("#function-item-card-price");

const cardPriceItemDescriptionBox = document.querySelector(
  "#function-item-card-price .hero-member-main-function-section-content-item-description-box"
);
const cardPriceItemDescriptionBoxCloseBtn = document.querySelector(
  "#function-item-card-price .hero-member-main-function-section-content-item-description-box-innerbox-close-btn"
);

cardPriceItem.addEventListener("click", () => {
  cardPriceItemDescriptionBox.classList.remove("hidden-info");
});

cardPriceItemDescriptionBox.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);

  cardPriceItemDescriptionBox.classList.add("hidden-info");
});

cardPriceItemDescriptionBoxCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  cardPriceItemDescriptionBox.classList.add("hidden-info");
});

// card cover

const cardCoverItem = document.querySelector("#function-item-card-cover");

const cardCoverItemDescriptionBox = document.querySelector(
  "#function-item-card-cover .hero-member-main-function-section-content-item-description-box"
);
const cardCoverItemDescriptionBoxCloseBtn = document.querySelector(
  "#function-item-card-cover .hero-member-main-function-section-content-item-description-box-innerbox-close-btn"
);

cardCoverItem.addEventListener("click", () => {
  cardCoverItemDescriptionBox.classList.remove("hidden-info");
});

cardCoverItemDescriptionBoxCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  cardCoverItemDescriptionBox.classList.add("hidden-info");
});

cardCoverItemDescriptionBox.addEventListener("click", (e) => {
  e.stopPropagation();
  cardCoverItemDescriptionBox.classList.add("hidden-info");
});

// deck chart

const deckChartItem = document.querySelector("#function-item-deck-chart");

const deckChartItemDescriptionBox = document.querySelector(
  "#function-item-deck-chart .hero-member-main-function-section-content-item-description-box"
);
const deckChartItemDescriptionBoxCloseBtn = document.querySelector(
  "#function-item-deck-chart .hero-member-main-function-section-content-item-description-box-innerbox-close-btn"
);

deckChartItem.addEventListener("click", () => {
  deckChartItemDescriptionBox.classList.remove("hidden-info");
});

deckChartItemDescriptionBoxCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  deckChartItemDescriptionBox.classList.add("hidden-info");
});

deckChartItemDescriptionBox.addEventListener("click", (e) => {
  e.stopPropagation();
  deckChartItemDescriptionBox.classList.add("hidden-info");
});

// switch version

const switchVersionItem = document.querySelector(
  "#function-item-switch-version"
);

const switchVersionItemDescriptionBox = document.querySelector(
  "#function-item-switch-version .hero-member-main-function-section-content-item-description-box"
);
const switchVersionItemDescriptionBoxCloseBtn = document.querySelector(
  "#function-item-switch-version .hero-member-main-function-section-content-item-description-box-innerbox-close-btn"
);

switchVersionItem.addEventListener("click", () => {
  switchVersionItemDescriptionBox.classList.remove("hidden-info");
});

switchVersionItemDescriptionBoxCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  switchVersionItemDescriptionBox.classList.add("hidden-info");
});

switchVersionItemDescriptionBox.addEventListener("click", (e) => {
  e.stopPropagation();
  switchVersionItemDescriptionBox.classList.add("hidden-info");
});

// quick note

const quickNoteItem = document.querySelector("#function-item-quick-note");

const quickNoteItemDescriptionBox = document.querySelector(
  "#function-item-quick-note .hero-member-main-function-section-content-item-description-box"
);
const quickNoteItemDescriptionBoxCloseBtn = document.querySelector(
  "#function-item-quick-note .hero-member-main-function-section-content-item-description-box-innerbox-close-btn"
);

quickNoteItem.addEventListener("click", () => {
  quickNoteItemDescriptionBox.classList.remove("hidden-info");
});

quickNoteItemDescriptionBoxCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  quickNoteItemDescriptionBox.classList.add("hidden-info");
});

// price top10

const priceTop10Item = document.querySelector("#function-item-price-top10");

const priceTop10ItemDescriptionBox = document.querySelector(
  "#function-item-price-top10 .hero-member-main-function-section-content-item-description-box"
);
const priceTop10ItemDescriptionBoxCloseBtn = document.querySelector(
  "#function-item-price-top10 .hero-member-main-function-section-content-item-description-box-innerbox-close-btn"
);

priceTop10Item.addEventListener("click", () => {
  priceTop10ItemDescriptionBox.classList.remove("hidden-info");
});

priceTop10ItemDescriptionBoxCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  priceTop10ItemDescriptionBox.classList.add("hidden-info");
});

priceTop10ItemDescriptionBox.addEventListener("click", (e) => {
  e.stopPropagation();
  priceTop10ItemDescriptionBox.classList.add("hidden-info");
});

// function區域 左右按鈕功能

//  獲取左、右按鈕及function區域
const functionSectionLeftBtn = document.querySelector(
  ".hero-member-main-function-section-controlbar-left-btn"
);

const functionSectionRightBtn = document.querySelector(
  ".hero-member-main-function-section-controlbar-right-btn"
);

const functionSectionContent = document.querySelector(
  ".hero-member-main-function-section-content"
);

const functionSectionContentLastItem = document.querySelector(
  ".hero-member-main-function-section-content-last-item"
);

// 計時器關閉重開功能 未完成X

// functionSectionContent.addEventListener("mouseover", (e) => {
//   closeScrollMoveInterval(scrollMoveInterval);
// });

// functionSectionContent.addEventListener("mouseout", (e) => {
//       reStartScrollMoveInterval(scrollMoveInterval, functionSectionContent);
// });

// 更改按鈕樣式

functionSectionContent.addEventListener("scroll", () => {
  // console.log("在滾動");
  // console.log(functionSectionContent.scrollLeft);

  if (functionSectionContent.scrollLeft == 0) {
    functionSectionLeftBtn.classList.add(
      "hero-member-main-function-section-controlbar-left-btn-disabled"
    );
  } else {
    if(functionSectionContent.scrollLeft == functionSectionContent.scrollWidth - functionSectionContent.clientWidth){
      functionSectionRightBtn.classList.add(
        "hero-member-main-function-section-controlbar-right-btn-disabled"
      );
    }else{
      functionSectionRightBtn.classList.add(
        "hero-member-main-function-section-controlbar-right-btn"
      );
      functionSectionRightBtn.classList.remove(
        "hero-member-main-function-section-controlbar-right-btn-disabled"
      );
    }
    functionSectionLeftBtn.classList.add(
      "hero-member-main-function-section-controlbar-left-btn"
    );
    functionSectionLeftBtn.classList.remove(
      "hero-member-main-function-section-controlbar-left-btn-disabled"
    );
  }
});

// 監聽左按鈕

functionSectionLeftBtn.addEventListener("click", () => {
  if (window.innerWidth < 1200) {
    functionSectionContent.scrollTo({
      left: functionSectionContent.scrollLeft - 340,
      behavior: "smooth",
    });
  } else {
    functionSectionContent.scrollTo({
      left: functionSectionContent.scrollLeft - 452,
      behavior: "smooth",
    });
  }
});

// 監聽右按鈕

functionSectionRightBtn.addEventListener("click", () => {
  if (window.innerWidth < 1200) {
    functionSectionContent.scrollTo({
      left: functionSectionContent.scrollLeft + 340,
      behavior: "smooth",
    });
  } else {
    functionSectionContent.scrollTo({
      left: functionSectionContent.scrollLeft + 452,
      behavior: "smooth",
    });
  }
  // console.log(functionSectionContent.scrollLeft);
});

// 自動輪播
// console.log(functionSectionContentLastItem.offsetLeft);

let firstStart = true;

let scrollMoveInterval = setInterval(() => {
  // 判斷滾動條到底
  if (
    functionSectionContent.scrollLeft + functionSectionContent.clientWidth >=
    functionSectionContent.scrollWidth
  ) {
    functionSectionContent.scrollTo({
      left: -functionSectionContent.scrollLeft,
      behavior: "smooth",
    });
    firstStart = true;
  } else {
    if (firstStart == true) {
      if (window.innerWidth < 1200) {
        functionSectionContent.scrollTo({
          left: functionSectionContent.scrollLeft + 340,
          behavior: "smooth",
        });

        firstStart = false;
      } else {
        functionSectionContent.scrollTo({
          left: functionSectionContent.scrollLeft + 456,
          behavior: "smooth",
        });
        firstStart = false;
        // console.log(window.innerWidth);
      }
    } else if (firstStart == false) {
      if (window.innerWidth < 1200) {
        functionSectionContent.scrollTo({
          left: functionSectionContent.scrollLeft + 340,
          behavior: "smooth",
        });
      } else {
        functionSectionContent.scrollTo({
          left: functionSectionContent.scrollLeft + 452,
          behavior: "smooth",
        });
      }
    }
  }
  // console.log("總寬度：" + functionSectionContent.scrollWidth);
  // console.log("目前往左位移：" + functionSectionContent.scrollLeft);
  // console.log("可視寬度：" + functionSectionContent.clientWidth);
  // console.log("左位移＋可視寬度" + (functionSectionContent.scrollLeft + functionSectionContent.clientWidth));
}, 3000);

// 關閉計時器

function closeScrollMoveInterval(interval) {
  clearInterval(interval);
  console.log("計時器關閉");
}

// 重開計時器
function reStartScrollMoveInterval(interval, scrollMoveElement) {
  console.log("計時器重開");

  interval = setInterval(() => {
    // 判斷滾動條到底
    if (
      scrollMoveElement.scrollLeft + scrollMoveElement.clientWidth >=
      scrollMoveElement.scrollWidth
    ) {
      scrollMoveElement.scrollTo({
        left: -scrollMoveElement.scrollLeft,
        behavior: "smooth",
      });
      firstStart = true;
    } else {
      if (firstStart == true) {
        if (window.innerWidth < 1200) {
          scrollMoveElement.scrollTo({
            left: scrollMoveElement.scrollLeft + 340,
            behavior: "smooth",
          });
          firstStart = false;
        } else {
          scrollMoveElement.scrollTo({
            left: scrollMoveElement.scrollLeft + 456,
            behavior: "smooth",
          });
          firstStart = false;
          // console.log(window.innerWidth);
        }
      } else if (firstStart == false) {
        if (window.innerWidth < 1200) {
          scrollMoveElement.scrollTo({
            left: scrollMoveElement.scrollLeft + 340,
            behavior: "smooth",
          });
        } else {
          scrollMoveElement.scrollTo({
            left: scrollMoveElement.scrollLeft + 452,
            behavior: "smooth",
          });
        }
      }
    }
  }, 3000);
}

// function區域 拖動功能 未完成X

// 滑鼠按下
let isDragging = false;

// 初始位置
let startX = 0;

// 滾動條離容器左邊的距離
let scrollLeft = 0;

functionSectionContent.addEventListener("mousedown", (e) => {
  isDragging = true;

  // 初始位置 = 滑鼠按下的位置
  startX = e.offsetX;
});

functionSectionContent.addEventListener("mousemove", (e) => {
  if (isDragging) {
    // 移動距離 = 滑鼠移動的位置 - 初始位置
    let offsetX = e.offsetX - startX;
    console.log(offsetX, "移動距離");

    // functionSectionContent.scrollLeft = scrollLeft - offsetX;
    // console.log(functionSectionContent.scrollLeft, "目前位置");
  }
});

functionSectionContent.addEventListener("mouseup", () => {
  isDragging = false;
});

// sponsors creators區域 左右按鈕功能

//  獲取左、右按鈕及function區域
const sponsorsCreatorsSectionLeftBtn = document.querySelector(
  ".hero-member-main-sponsors-creators-section-controlbar-left-btn"
);

const sponsorsCreatorsSectionRightBtn = document.querySelector(
  ".hero-member-main-sponsors-creators-section-controlbar-right-btn"
);

const sponsorsCreatorsSectionContent = document.querySelector(
  ".hero-member-main-sponsors-creators-section-content"
);

// 更改按鈕樣式

sponsorsCreatorsSectionContent.addEventListener("scroll", () => {
  // console.log("在滾動");
  // console.log(sponsorsCreatorsSectionContent.scrollLeft);

  if (sponsorsCreatorsSectionContent.scrollLeft == 0) {
    sponsorsCreatorsSectionLeftBtn.classList.add(
      "hero-member-main-sponsors-creators-section-controlbar-left-btn-disabled"
    );
  } else {
    if(sponsorsCreatorsSectionContent.scrollLeft == sponsorsCreatorsSectionContent.scrollWidth - sponsorsCreatorsSectionContent.clientWidth){
      sponsorsCreatorsSectionRightBtn.classList.add(
        "hero-member-main-sponsors-creators-section-controlbar-right-btn-disabled"
      );
    }else{
      sponsorsCreatorsSectionRightBtn.classList.add(
        "hero-member-main-sponsors-creators-section-controlbar-right-btn"
      );
      sponsorsCreatorsSectionRightBtn.classList.remove(
        "hero-member-main-sponsors-creators-section-controlbar-right-btn-disabled"
      );
    }
    sponsorsCreatorsSectionLeftBtn.classList.add(
      "hero-member-main-sponsors-creators-section-controlbar-left-btn"
    );
    sponsorsCreatorsSectionLeftBtn.classList.remove(
      "hero-member-main-sponsors-creators-section-controlbar-left-btn-disabled"
    );
  }
});

// 監聽左按鈕

sponsorsCreatorsSectionLeftBtn.addEventListener("click", () => {
  if (window.innerWidth < 1200) {
    sponsorsCreatorsSectionContent.scrollTo({
      left: sponsorsCreatorsSectionContent.scrollLeft - 340,
      behavior: "smooth",
    });
  } else {
    sponsorsCreatorsSectionContent.scrollTo({
      left: sponsorsCreatorsSectionContent.scrollLeft - 452,
      behavior: "smooth",
    });
  }
});

// 監聽右按鈕

sponsorsCreatorsSectionRightBtn.addEventListener("click", () => {
  if (window.innerWidth < 1200) {
    sponsorsCreatorsSectionContent.scrollTo({
      left: sponsorsCreatorsSectionContent.scrollLeft + 340,
      behavior: "smooth",
    });
  } else {
    sponsorsCreatorsSectionContent.scrollTo({
      left: sponsorsCreatorsSectionContent.scrollLeft + 452,
      behavior: "smooth",
    });
  }
});

// 自動輪播
let sponsorsCreatorsFirstStart = true;
let sponsorsCreatorsScrollMoveInterval = setInterval(() => {
  // 判斷滾動條到底
  if (
    sponsorsCreatorsSectionContent.scrollLeft +
      sponsorsCreatorsSectionContent.clientWidth >=
    sponsorsCreatorsSectionContent.scrollWidth
  ) {
    sponsorsCreatorsSectionContent.scrollTo({
      left: -sponsorsCreatorsSectionContent.scrollLeft,
      behavior: "smooth",
    });
    sponsorsCreatorsFirstStart = true;
  } else {
    if (sponsorsCreatorsFirstStart == true) {
      if (window.innerWidth < 1200) {
        sponsorsCreatorsSectionContent.scrollTo({
          left: sponsorsCreatorsSectionContent.scrollLeft + 340,
          behavior: "smooth",
        });
        sponsorsCreatorsFirstStart = false;
      } else {
        sponsorsCreatorsSectionContent.scrollTo({
          left: sponsorsCreatorsSectionContent.scrollLeft + 456,
          behavior: "smooth",
        });
        sponsorsCreatorsFirstStart = false;
        // console.log(window.innerWidth);
      }
    } else if (sponsorsCreatorsFirstStart == false) {
      if (window.innerWidth < 1200) {
        sponsorsCreatorsSectionContent.scrollTo({
          left: sponsorsCreatorsSectionContent.scrollLeft + 340,
          behavior: "smooth",
        });
      } else {
        sponsorsCreatorsSectionContent.scrollTo({
          left: sponsorsCreatorsSectionContent.scrollLeft + 452,
          behavior: "smooth",
        });
      }
    }
  }
}, 3000);

// sponsors creators區域 左右按鈕功能

//  獲取左、右按鈕及function區域
const storesAboutSectionLeftBtn = document.querySelector(
  ".hero-member-main-stores-about-section-controlbar-left-btn"
);

const storesAboutSectionRightBtn = document.querySelector(
  ".hero-member-main-stores-about-section-controlbar-right-btn"
);

const storesAboutSectionContent = document.querySelector(
  ".hero-member-main-stores-about-section-content"
);

// console.log(storesAboutSectionContent);
//   storesAboutSectionContent.scrollLeft = 200;
// console.log(storesAboutSectionContent.offsetLeft);

// 更改按鈕樣式

storesAboutSectionContent.addEventListener("scroll", () => {
  // console.log("在滾動");
  // console.log(storesAboutSectionContent.scrollLeft);

  if (storesAboutSectionContent.scrollLeft == 0) {
    storesAboutSectionLeftBtn.classList.add(
      "hero-member-main-stores-about-section-controlbar-left-btn-disabled"
    );
  } else {
    if(storesAboutSectionContent.scrollLeft == storesAboutSectionContent.scrollWidth - storesAboutSectionContent.clientWidth){
      storesAboutSectionRightBtn.classList.add(
        "hero-member-main-stores-about-section-controlbar-right-btn-disabled"
      );
    }else{
      storesAboutSectionRightBtn.classList.add(
        "hero-member-main-stores-about-section-controlbar-right-btn"
      );
      storesAboutSectionRightBtn.classList.remove(
        "hero-member-main-stores-about-section-controlbar-right-btn-disabled"
      );
    }
    storesAboutSectionLeftBtn.classList.add(
      "hero-member-main-stores-about-section-controlbar-left-btn"
    );
    storesAboutSectionLeftBtn.classList.remove(
      "hero-member-main-stores-about-section-controlbar-left-btn-disabled"
    );
  }
});

// 監聽左按鈕

storesAboutSectionLeftBtn.addEventListener("click", () => {
  if (window.innerWidth < 1200) {
    storesAboutSectionContent.scrollTo({
      left: storesAboutSectionContent.scrollLeft - 340,
      behavior: "smooth",
    });
  } else {
    storesAboutSectionContent.scrollTo({
      left: storesAboutSectionContent.scrollLeft - 452,
      behavior: "smooth",
    });
  }
});

// 監聽右按鈕

storesAboutSectionRightBtn.addEventListener("click", () => {
  if (window.innerWidth < 1200) {
    storesAboutSectionContent.scrollTo({
      left: storesAboutSectionContent.scrollLeft + 340,
      behavior: "smooth",
    });
  } else {
    storesAboutSectionContent.scrollTo({
      left: storesAboutSectionContent.scrollLeft + 452,
      behavior: "smooth",
    });
  }
});

// 自動輪播
let storesAboutFirstStart = true;
let storesAboutScrollMoveInterval = setInterval(() => {
  // 判斷滾動條到底
  if (
    storesAboutSectionContent.scrollLeft +
      storesAboutSectionContent.clientWidth >=
    storesAboutSectionContent.scrollWidth
  ) {
    storesAboutSectionContent.scrollTo({
      left: -storesAboutSectionContent.scrollLeft,
      behavior: "smooth",
    });
    storesAboutFirstStart = true;
  } else {
    if (storesAboutFirstStart == true) {
      if (window.innerWidth < 1200) {
        storesAboutSectionContent.scrollTo({
          left: storesAboutSectionContent.scrollLeft + 340,
          behavior: "smooth",
        });
        storesAboutFirstStart = false;
      } else {
        storesAboutSectionContent.scrollTo({
          left: storesAboutSectionContent.scrollLeft + 456,
          behavior: "smooth",
        });
        storesAboutFirstStart = false;
        // console.log(window.innerWidth);
      }
    } else if (storesAboutFirstStart == false) {
      if (window.innerWidth < 1200) {
        storesAboutSectionContent.scrollTo({
          left: storesAboutSectionContent.scrollLeft + 340,
          behavior: "smooth",
        });
      } else {
        storesAboutSectionContent.scrollTo({
          left: storesAboutSectionContent.scrollLeft + 452,
          behavior: "smooth",
        });
      }
    }
  }
}, 3000);
