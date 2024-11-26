<script setup>
import MainFooter from "@/components/MainFooter.vue";
import PageControl from "@/components/work-shop/PageControl.vue";
import SideBar from "@/components/work-shop/SideBar.vue";
import { onMounted, ref } from "vue";

onMounted(() => {
    import("@/assets/js/hero-member/hero-member-animation.js")
})

</script>

<template>
    <div class="hero-member-page-container">
        <SideBar />
        <div class="hero-member-main-content-container">
          <header class="hero-member-header">
            <PageControl />
          </header>
          <main class="hero-member-main">
            <section class="hero-member-main-start-section">
              <div class="hero-member-main-start-section-bg-img"></div>
              <div class="hero-member-main-start-section-content">
                <div class="hero-member-main-start-section-content-icon">
                  <i class="fa-solid fa-star"></i>
                </div>
                <h1 class="hero-member-main-start-section-content-title">英雄榜</h1>
                <p class="hero-member-main-start-section-content-text">成為專屬會員，解鎖更多功能</p>
                <button class="hero-member-main-start-section-content-btn">立即成為英雄</button>
              </div>
            </section>
            <section class="hero-member-main-function-section">
              <div class="hero-member-main-function-section-controlbar">
                <h2 class="hero-member-main-function-section-controlbar-title">專屬您的功能</h2>
                <button class="hero-member-main-function-section-controlbar-left-btn hero-member-main-function-section-controlbar-left-btn-disabled">
                  <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  class="hero-member-main-function-section-controlbar-right-btn"
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
              </div>
              <div class="hero-member-main-function-section-content"  >
                <div class="hero-member-main-function-section-content-item" id="function-item-card-price">
                  <img src="@/assets/img/hero-member/card-price.png" alt="" />
                  <div class="hero-member-main-function-section-content-item-info">
                    <p>洞見漲跌</p>
                    <h3 class="hero-member-main-function-section-content-item-title">卡片價格趨勢</h3>
                  </div>
                  <button class="hero-member-main-function-section-content-item-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                  <div class="hero-member-main-function-section-content-item-description-box  hidden-info" id="hero-member-main-function-section-content-item-description-box">
                    <div class="hero-member-main-function-section-content-item-description-box-innerbox-wrapper" >
                      <div class="hero-member-main-function-section-content-item-description-box-innerbox">                        
                        <div class="hero-member-main-function-section-content-item-description-box-innerbox-close-btn-wrapper">                          
                            <button class="hero-member-main-function-section-content-item-description-box-innerbox-close-btn" id="hero-member-main-function-section-content-item-description-box-innerbox-close-btn">
                              <i class="fa-solid fa-xmark"></i>
                            </button>                          
                        </div>                        
                        <span>洞見漲跌</span>
                        <h2>卡片價格趨勢</h2>
                        <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox">
                          <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-text">
                            <p>洞悉價格。一覽卡片的漲跌脈動，發現價格的變化趨勢，讓你在交易中更有把握。
                              點擊卡片詳細，在下方新增了卡價漲跌的圖表，瀏覽近兩週的卡片價格趨勢。</p>
                          </div>
                          <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-img" id="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-img">
                            <img src="@/assets/img/hero-member/card-price-gif.gif" alt="" >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hero-member-main-function-section-content-item" id="function-item-card-cover">
                  <img src="@/assets/img/hero-member/card-cover.png" alt="" />
                  <div class="hero-member-main-function-section-content-item-info">
                    <p>精美亮麗</p>
                    <h3 class="hero-member-main-function-section-content-item-title">卡片圖片特效</h3>
                  </div>
                  <button class="hero-member-main-function-section-content-item-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                  <div class="hero-member-main-function-section-content-item-description-box  hidden-info" id="hero-member-main-function-section-content-item-description-box">
                    <div class="hero-member-main-function-section-content-item-description-box-innerbox-wrapper" >
                      <div class="hero-member-main-function-section-content-item-description-box-innerbox">                        
                        <div class="hero-member-main-function-section-content-item-description-box-innerbox-close-btn-wrapper">                          
                            <button class="hero-member-main-function-section-content-item-description-box-innerbox-close-btn" id="hero-member-main-function-section-content-item-description-box-innerbox-close-btn">
                              <i class="fa-solid fa-xmark"></i>
                            </button>                          
                        </div>                        
                        <span>精美亮麗</span>
                        <h2>卡片圖片特效</h2>
                        <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox">
                          <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-text">
                            <p>與眾不同。稀有就該不一樣。絢麗的特效讓你的牌組閃閃發光。
                              在偏好設定，可以開啟 "卡片圖片特效"，您的所有卡片會自動帶入特效。</p>
                          </div>
                          <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-img" id="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-img">
                            <img src="@/assets/img/hero-member/card-cover-gif.gif" alt="" >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hero-member-main-function-section-content-item" id="function-item-deck-chart">
                  <img src="@/assets/img/hero-member/deck-chart.png" alt="" />
                  <div class="hero-member-main-function-section-content-item-info">
                    <p>分析，一目瞭然</p>
                    <h3 class="hero-member-main-function-section-content-item-title">排組分佈圖</h3>
                  </div>
                  <button class="hero-member-main-function-section-content-item-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                  <div class="hero-member-main-function-section-content-item-description-box  hidden-info" id="hero-member-main-function-section-content-item-description-box">
                    <div class="hero-member-main-function-section-content-item-description-box-innerbox-wrapper" >
                      <div class="hero-member-main-function-section-content-item-description-box-innerbox">                        
                        <div class="hero-member-main-function-section-content-item-description-box-innerbox-close-btn-wrapper">                          
                            <button class="hero-member-main-function-section-content-item-description-box-innerbox-close-btn" id="hero-member-main-function-section-content-item-description-box-innerbox-close-btn">
                              <i class="fa-solid fa-xmark"></i>
                            </button>                          
                        </div>                        
                        <span>分析，一目瞭然</span>
                        <h2>牌組分佈圖</h2>
                        <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox">
                          <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-text">
                            <p>圖表顯示。一眼就能夠知道這副牌的分佈情況，讓你更了解牌組的特性。
                              在任何牌組頁面，會自動呈現牌組分佈圖，依據等級與各種顏色張數的分佈。</p>
                          </div>
                          <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-img" id="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-img">
                            <img src="@/assets/img/hero-member/deck-chart-gif.gif" alt="" >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hero-member-main-function-section-content-item" id="function-item-switch-version">
                  <img src="@/assets/img/hero-member/switch-version.png" alt="" />
                  <div class="hero-member-main-function-section-content-item-info">
                    <p>一鍵更新、快速好用</p>
                    <h3 class="hero-member-main-function-section-content-item-title">切換卡片版本</h3>
                  </div>
                  <button class="hero-member-main-function-section-content-item-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                  <div class="hero-member-main-function-section-content-item-description-box  hidden-info" id="hero-member-main-function-section-content-item-description-box">
                    <div class="hero-member-main-function-section-content-item-description-box-innerbox-wrapper" >
                      <div class="hero-member-main-function-section-content-item-description-box-innerbox">                        
                        <div class="hero-member-main-function-section-content-item-description-box-innerbox-close-btn-wrapper">                          
                            <button class="hero-member-main-function-section-content-item-description-box-innerbox-close-btn" id="hero-member-main-function-section-content-item-description-box-innerbox-close-btn">
                              <i class="fa-solid fa-xmark"></i>
                            </button>                          
                        </div>                        
                        <span>一鍵更新、快速好用</span>
                        <h2>切換卡片版本</h2>
                        <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox">
                          <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-text">
                            <p>還在煩惱如何一張張找出卡片版本？一鍵按鈕讓你換然一新。
                              在編輯牌組時，會額外新增切換版本的按鍵，上方可以一次全牌組切換，而每張卡下方也可以單獨切換。</p>
                          </div>
                          <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-img" id="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-img">
                            <img src="@/assets/img/hero-member/switch-version-gif.gif" alt="" >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hero-member-main-function-section-content-item" id="function-item-quick-note">
                  <img src="@/assets/img/hero-member/quick-note.png" alt="" />
                  <div class="hero-member-main-function-section-content-item-info">
                    <p>大小事不遺忘</p>
                    <h3 class="hero-member-main-function-section-content-item-title">快速筆記</h3>
                  </div>
                  <button class="hero-member-main-function-section-content-item-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                  <div class="hero-member-main-function-section-content-item-description-box  hidden-info" id="hero-member-main-function-section-content-item-description-box">
                    <div class="hero-member-main-function-section-content-item-description-box-innerbox-wrapper" >
                      <div class="hero-member-main-function-section-content-item-description-box-innerbox">                        
                        <div class="hero-member-main-function-section-content-item-description-box-innerbox-close-btn-wrapper">                          
                            <button class="hero-member-main-function-section-content-item-description-box-innerbox-close-btn" id="hero-member-main-function-section-content-item-description-box-innerbox-close-btn">
                              <i class="fa-solid fa-xmark"></i>
                            </button>                          
                        </div>                        
                        <span>大小事不遺忘</span>
                        <h2>快速筆記</h2>
                        <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox">
                          <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-text">
                            <p>缺牌？改牌？怕忘記？快速紀錄當下的想法，隨時隨地不忘記。
                              在自己的牌組頁面，新增快速筆記的區塊，可以讓你在自己的牌組標記卡片，並且可以新增多組的筆記。</p>
                          </div>
                          <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-img" id="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-img">
                            <img src="@/assets/img/hero-member/quick-note-gif.gif" alt="" >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hero-member-main-function-section-content-item" id="function-item-price-top10">
                  <img src="@/assets/img/hero-member/price-top10.png" alt="" />
                  <div class="hero-member-main-function-section-content-item-info">
                    <p>掌握最新價格變動</p>
                    <h3 class="hero-member-main-function-section-content-item-title">卡價指標</h3>
                  </div>
                  <button class="hero-member-main-function-section-content-item-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                  <div class="hero-member-main-function-section-content-item-description-box  hidden-info" id="hero-member-main-function-section-content-item-description-box">
                    <div class="hero-member-main-function-section-content-item-description-box-innerbox-wrapper" >
                      <div class="hero-member-main-function-section-content-item-description-box-innerbox">                        
                        <div class="hero-member-main-function-section-content-item-description-box-innerbox-close-btn-wrapper">                          
                            <button class="hero-member-main-function-section-content-item-description-box-innerbox-close-btn" id="hero-member-main-function-section-content-item-description-box-innerbox-close-btn">
                              <i class="fa-solid fa-xmark"></i>
                            </button>                          
                        </div>                        
                        <span>掌握最新價格變動</span>
                        <h2>卡價指標</h2>
                        <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox">
                          <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-text">
                            <p>你知道目前最貴的牌組有哪些嗎？你知道漲跌最多的卡片是哪張嗎？
                              在首頁新增了卡價指標的區塊，會透過貓罐子強大的算力，分析現在的價格排行、價格漲跌、比例漲跌等資訊。</p>
                          </div>
                          <div class="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-img" id="hero-member-main-function-section-content-item-description-box-innerbox-gifbox-img">
                            <img src="@/assets/img/hero-member/price-top10-gif.gif" alt="" >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hero-member-main-function-section-content-last-item">
                  <img src="@/assets/img/hero-member/update.png" alt="" />
                  <div class="hero-member-main-function-section-content-last-item-info">
                    <p>持續變好</p>
                    <h3 class="hero-member-main-function-section-content-last-item-title">
                      更多功能持續更新
                    </h3>
                  </div>
                  <button class="hero-member-main-function-section-content-last-item-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
            </div>
            </section>
            <section class="hero-member-main-member-type-section">
              <div class="hero-member-main-member-type-section-topbar">
                <h2 class="hero-member-main-member-type-section-topbar-title">探索適合您的用戶</h2>
              </div>
              <div class="hero-member-main-member-type-section-content">
                <a href="#" class="hero-member-main-member-type-section-content-item-outer">
                  <div class="hero-member-main-member-type-section-content-item">
                    <h3 class="hero-member-main-member-type-section-content-item-title">
                      英雄會員(新開幕)
                    </h3>
                    <p class="hero-member-main-member-type-section-content-item-description">$12 USD/月</p>
                    <hr class="hero-member-main-member-type-section-content-item-line"></hr>
                    <ul class="hero-member-main-member-type-section-content-item-list">
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>包含登入會員所有功能</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>無廣告</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>我的牌組 (無限制)</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>專屬進階功能</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>最新更新資訊</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>最新更新資訊</span>
                      </li>
                    </ul>
                    <div class="hero-member-main-member-type-section-content-item-btn">
                      <button>立即前往 Patreon</button>
                    </div>
                  </div>
                </a>
                <a href="#" class="hero-member-main-member-type-section-content-item-outer">
                  <div class="hero-member-main-member-type-section-content-item">
                    <h3 class="hero-member-main-member-type-section-content-item-title">
                      登入會員
                    </h3>
                    <p class="hero-member-main-member-type-section-content-item-description">已登入帳號</p>
                    <div class="hero-member-main-member-type-section-content-item-line"></div>
                    <ul class="hero-member-main-member-type-section-content-item-list">
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>檢索卡片</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>編輯牌組</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>我的牌組 (50副限制)</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>發布文章</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>社群</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>工作坊</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>我的頁面</span>
                      </li>
                    </ul>
                    <div class="hero-member-main-member-type-section-content-item-btn">
                      <button>前往註冊帳號</button>
                    </div>
                  </div>
                </a>
                <div class="hero-member-main-member-type-section-content-item-outer">
                  <div class="hero-member-main-member-type-section-content-item">
                    <h3 class="hero-member-main-member-type-section-content-item-title">
                      一般用戶
                    </h3>
                    <p class="hero-member-main-member-type-section-content-item-description">尚未登入</p>
                    <div class="hero-member-main-member-type-section-content-item-line"></div>
                    <ul class="hero-member-main-member-type-section-content-item-list">
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>檢索卡片</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>社群瀏覽</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>工作坊</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section class="hero-member-main-ad-artist-section">
              <div class="hero-member-main-ad-artist-section-bg-img"></div>
              <div class="hero-member-main-ad-artist-section-content">
                <div class="hero-member-main-ad-artist-section-content-icon">
                  <i class="fa-solid fa-star"></i>
                </div>
                <h1 class="hero-member-main-ad-artist-section-content-title">廣告與創作者</h1>
                <p class="hero-member-main-ad-artist-section-content-text">投放您的內容，展現您的創意</p>
              </div>
            </section>
            <section class="hero-member-main-sponsors-creators-section">
              <div class="hero-member-main-sponsors-creators-section-controlbar">
                <h2 class="hero-member-main-sponsors-creators-section-controlbar-title">散播你的內容</h2>
                <button class="hero-member-main-sponsors-creators-section-controlbar-left-btn">
                  <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  class="hero-member-main-sponsors-creators-section-controlbar-right-btn"
                  
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
              </div>
              <div class="hero-member-main-sponsors-creators-section-content">
                <div class="hero-member-main-sponsors-creators-section-content-item">
                  <img src="@/assets/img/hero-member/social-ad.png" alt="" />
                  <div class="hero-member-main-sponsors-creators-section-content-item-info">
                    <p>每一頁都有您的內容</p>
                    <h3 class="hero-member-main-sponsors-creators-section-content-item-title">社群廣告文章</h3>
                  </div>
                  <button class="hero-member-main-sponsors-creators-section-content-item-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
                <div class="hero-member-main-sponsors-creators-section-content-item">
                  <img src="@/assets/img/hero-member/home-ad.png" alt="" />
                  <div class="hero-member-main-sponsors-creators-section-content-item-info">
                    <p>第一眼就是你</p>
                    <h3 class="hero-member-main-sponsors-creators-section-content-item-title">首頁廣告區塊</h3>
                  </div>
                  <button class="hero-member-main-sponsors-creators-section-content-item-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
                <div class="hero-member-main-sponsors-creators-section-content-item">
                  <img src="@/assets/img/hero-member/creator-page.png" alt="" />
                  <div class="hero-member-main-sponsors-creators-section-content-item-info">
                    <p>經營自己、展現價值</p>
                    <h3 class="hero-member-main-sponsors-creators-section-content-item-title">創作者專頁</h3>
                  </div>
                  <button class="hero-member-main-sponsors-creators-section-content-item-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
                <div class="hero-member-main-sponsors-creators-section-content-item">
                  <img src="@/assets/img/hero-member/home-topic.png" alt="" />
                  <div class="hero-member-main-sponsors-creators-section-content-item-info">
                    <p>活動開跑！快來參加</p>
                    <h3 class="hero-member-main-sponsors-creators-section-content-item-title">首頁主題投放</h3>
                  </div>
                  <button class="hero-member-main-sponsors-creators-section-content-item-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
                <div class="hero-member-main-sponsors-creators-section-content-item">
                  <img src="@/assets/img/hero-member/hot-video.png" alt="" />
                  <div class="hero-member-main-sponsors-creators-section-content-item-info">
                    <p>YouTube 頻道推廣</p>
                    <h3 class="hero-member-main-sponsors-creators-section-content-item-title">發燒影片</h3>
                  </div>
                  <button class="hero-member-main-sponsors-creators-section-content-item-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </section>
            <section class="hero-member-main-fanpage-section">
              <div class="hero-member-main-fanpage-section-topbar">
                <h2 class="hero-member-main-fanpage-section-topbar-title">與我聯繫</h2>
              </div>
              <div class="hero-member-main-fanpage-section-content">
                <i class="fa-regular fa-bell"></i>
                <span>功能實踐中！先行搶先體驗，歡迎與我聯繫！</span>
                <a href="#">前往貓罐子粉專</a h>
              </div>
            </section>
            <section class="hero-member-main-stores-partners-section">
              <div class="hero-member-main-stores-partners-section-bg-img"></div>
              <div class="hero-member-main-stores-partners-section-content">
                <div class="hero-member-main-stores-partners-section-content-icon">
                  <i class="fa-solid fa-star"></i>
                </div>
                <h1 class="hero-member-main-stores-partners-section-content-title">廣告與創作者</h1>
                <p class="hero-member-main-stores-partners-section-content-text">投放您的內容，展現您的創意</p>
              </div>
            </section>
            <section class="hero-member-main-stores-about-section">
              <div class="hero-member-main-stores-about-section-controlbar">
                <h2 class="hero-member-main-stores-about-section-controlbar-title">店家功能</h2>
                <button class="hero-member-main-stores-about-section-controlbar-left-btn">
                  <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  class="hero-member-main-stores-about-section-controlbar-right-btn"
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
              </div>
              <div class="hero-member-main-stores-about-section-content">
                <div class="hero-member-main-stores-about-section-content-item">
                  <img src="@/assets/img/hero-member/ready.png" alt="" />
                  <div class="hero-member-main-stores-about-section-content-item-info">
                    <p>您的附近有店家</p>
                    <h3 class="hero-member-main-stores-about-section-content-item-title">連結店家</h3>
                  </div>
                  <button class="hero-member-main-stores-about-section-content-item-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
                <div class="hero-member-main-stores-about-section-content-item">
                  <img src="@/assets/img/hero-member/ready.png" alt="" />
                  <div class="hero-member-main-stores-about-section-content-item-info">
                    <p>注意！賽事即將開始</p>
                    <h3 class="hero-member-main-stores-about-section-content-item-title">賽事資訊</h3>
                  </div>
                  <button class="hero-member-main-stores-about-section-content-item-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
                <div class="hero-member-main-stores-about-section-content-item">
                  <img src="@/assets/img/hero-member/ready.png" alt="" />
                  <div class="hero-member-main-stores-about-section-content-item-info">
                    <p>看到直接買</p>
                    <h3 class="hero-member-main-stores-about-section-content-item-title">購買連結</h3>
                  </div>
                  <button class="hero-member-main-stores-about-section-content-item-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
                <div class="hero-member-main-stores-about-section-content-item">
                  <img src="@/assets/img/hero-member/ready.png" alt="" />
                  <div class="hero-member-main-stores-about-section-content-item-info">
                    <p>B2B 與我商談</p>
                    <h3 class="hero-member-main-stores-about-section-content-item-title">與我聯絡</h3>
                  </div>
                  <button class="hero-member-main-stores-about-section-content-item-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </section>
          </main>
          <footer class="hero-member-footer">
            <MainFooter />
          </footer>
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/css/hero-member/hero-member.css";
@import "@/assets/css/hero-member/hero-member-rwd.css";
</style>