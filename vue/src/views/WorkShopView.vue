<script setup>
// import PageControl from '@/components/PageControl.vue'
import MainFooter from '@/components/MainFooter.vue'
import Sidebar from '@/components/work-shop/SideBar.vue'
import PageControl from '@/components/work-shop/PageControl.vue';
import router from '@/router'

const workShopData = [
  {
    imgUrl: 'https://bottleneko.app/images/workshop/daily.png',
    title: '每日卡',
    icon: 'fa-solid fa-book-open',
  },
  {
    imgUrl: 'https://bottleneko.app/images/workshop/official.png',
    title: '官方商品',
    icon: 'fa-solid fa-book-open',
  },
  {
    imgUrl: 'https://bottleneko.app/images/workshop/qa.png',
    title: '卡片問答集',
    icon: 'fa-solid fa-book-open',
  },
  {
    imgUrl: 'https://bottleneko.app/images/workshop/find.png',
    title: '尋找牌組',
    icon: 'fa-solid fa-cube',
  },
  {
    imgUrl: 'https://bottleneko.app/images/workshop/report.png',
    title: '匯出牌組',
    icon: 'fa-solid fa-cube',
  },
]



</script>

<template>
  <div class="work-shop-page-container">
    <Sidebar />
    <div class="work-shop-main-content-container">
      <header class="work-shop-header">
        <PageControl />
      </header>
      <main class="work-shop-main">
        <div class="user-nav">
          <a href="#" class="user-info-box">
            <div class="user-info-box-left-icon">
              <i class="fa-regular fa-user"></i>
            </div>
            <div href="#" class="user-info-box-left-login-content">
              <div class="user-info-box-left-login-title">登入帳號</div>
              <div class="user-info-box-left-login-text">前往登入</div>
            </div>
            <div class="user-info-box-right">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </a>
          <router-link to="/" class="hero-member-box">
            <div class="hero-member-box-left-icon">
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="hero-member-box-left-login-content">
              <div class="hero-member-box-left-login-title">英雄榜</div>
              <div class="hero-member-box-left-login-text">加入並成為專屬會員</div>
            </div>
            <div class="hero-member-box-right">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </router-link>
        </div>
        <div class="work-shop-title">
          <h2>工作坊</h2>
          <p>找到你要的工具，發掘更多玩法。</p>
        </div>
        <div class="work-shop-group">
          <a href="#" class="work-shop-outer" v-for="i in workShopData">
            <div class="work-shop-item">
              <img :src="i.imgUrl" alt="" />
              <div class="work-shop-item-content">
                <div class="work-shop-item-content-icon">
                  <i :class="i.icon"></i>
                </div>
                <span>{{ i.title }}</span>
              </div>
            </div>
          </a>
        </div>
        <div class="banner">
          <h2>如果你有任何酷點子</h2>
          <p>歡迎來找我！工程師XX會努力實現他</p>
        </div>
      </main>
      <footer class="work-shop-footer">
        <MainFooter />
      </footer>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.work-shop-page-container {
  background-color: black;
  max-width: 100%;
  max-height: 100vh;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
}

.work-shop-main-content-container {
  width: 100%;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  color: white;
  border-radius: 16px;
  background-color: #121212;
  overflow: auto;
}

.work-shop-header {
  width: 100%;
  box-sizing: border-box;
}

.work-shop-main {
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
}

.user-nav {
  max-width: 100%;
  display: flex;
  gap: 24px;
}

.user-info-box {
  width: 280px;
  background-image: linear-gradient(to right top, #036ea4, #06b3d2);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  box-sizing: border-box;
}

.user-info-box-left-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #02455b;
  text-align: center;
  line-height: 80px;
  font-size: 50px;
  color: white;
}

.user-info-box-left-login-title {
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: white;
}

.user-info-box-left-login-text {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  opacity: 0.7;
  color: white;
}

.user-info-box-right {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #35b9d5;
  border-radius: 50%;
  font-size: 30px;
  color: white;
}

.hero-member-box {
  width: 328px;
  border-radius: 12px;
  padding: 16px;
  background-image: linear-gradient(to right top, #98480e, #e7af08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  box-sizing: border-box;
}

.hero-member-box-left-icon {
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 65px;
  color: #f59e0b;
}

.hero-member-box-left-login-title {
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: white;
}

.hero-member-box-left-login-text {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  opacity: 0.7;
  color: white;
}

.hero-member-box-right {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #dfaf30;
  border-radius: 50%;
  font-size: 30px;
  color: white;
}

.work-shop-title {
  width: 100%;
  padding: 24px 0px 8px;
}

.work-shop-title h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
}

.work-shop-title p {
  font-size: 14px;
  line-height: 20px;
  color: #81a19c;
}

.work-shop-group {
  width: 100%;
  padding: 16px 0px 24px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}

.work-shop-outer {
  width: 100%;
  border-radius: 12px;
  color: #d4d4d8;
  overflow: hidden;
}

.work-shop-outer:hover .work-shop-item{
  cursor: pointer;
  transform: scale(1.05);
  color: white;
  transition: all 0.2s ease-in-out;
}

.work-shop-item {
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.2s ease-in-out;
}

.work-shop-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background-image: linear-gradient(to bottom, transparent, #000);
  z-index: 2;
  opacity: 0.5;
}

/* .work-shop-item:hover {
  cursor: pointer;
  transform: scale(1.05);
  color: white;
  transition: all 0.2s ease-in-out;
} */

.work-shop-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.work-shop-item-content {
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 2;
}

.work-shop-item-content-icon {
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  font-size: 20px;
}

.work-shop-item-content span {
  font-size: 20px;
  font-weight: 700;
}

.banner {
  width: 800px;
  height: 160px;
  margin: 0 auto 16px;
  border-radius: 12px;
  background-image: linear-gradient(to right top, #6366f1, #10b980);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.banner h2 {
  font-size: 36px;
  font-weight: 700;
  line-height: 40px;
}

.banner p {
  font-size: 18px;
  line-height: 28px;
  color: rgb(229, 231, 235);
}
</style>
<style src="@/assets/css/work-shop/work-shop-rwd.css" scoped></style>
