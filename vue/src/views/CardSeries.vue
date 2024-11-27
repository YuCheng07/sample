<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCardSeriesStore } from "@/stores/card-series";
import { useDeckMakeStore } from "@/stores/deck-make";

const cardSeriesStore = useCardSeriesStore();

const { currentSeriesData, serieslastReleaseTime, seriesCode, seriesCardList } = storeToRefs(cardSeriesStore);
const getLastViewSeries = cardSeriesStore.getLastViewSeries

const deckMakeStore = useDeckMakeStore();

const { selectedCards, countDeck, editType } = storeToRefs(deckMakeStore);
const clearSelectedCards = deckMakeStore.clearSelectedCards;
const getLastDeckEdit = deckMakeStore.getLastDeckEdit;
const removeCard = deckMakeStore.removeCard;
const changeTypeToAdd = deckMakeStore.changeTypeToAdd;
const changeTypeToDelete = deckMakeStore.changeTypeToDelete;
const checkTypeAndRunFunction = deckMakeStore.checkTypeAndRunFunction

  const currentSidebar = ref('');
  const sidebarFilterWidth = ref(490);
  const sidebarDeckWidth = ref(490);
  const extraOffset = ref(262);
  const isLargeScreen = ref(window.innerWidth > 1200);
  const view = ref('card-sheet');
  const currentMain = ref(null);
  const filters = ref([
    { name: '常用', checked: false, icon: 'fa-solid fa-star' },
    { name: '關鍵字', checked: false, icon: 'fa-solid fa-magnifying-glass', delButton: true },
    { name: '排序', checked: false, icon: 'fa-solid fa-sliders', delButton: true },
    { name: '類型', checked: false, icon: 'fa-solid fa-filter', checkButton: true },
    { name: '等級', checked: false, icon: 'fa-solid fa-filter', checkButton: true },
    { name: '顏色', checked: false, icon: 'fa-solid fa-filter', checkButton: true },
    { name: '費用', checked: false, icon: 'fa-solid fa-filter', checkButton: true },
    { name: '魂傷', checked: false, icon: 'fa-solid fa-filter', checkButton: true },
    { name: '攻擊力', checked: false, icon: 'fa-solid fa-filter', checkButton: true },
    { name: '稀有度', checked: false, icon: 'fa-solid fa-filter', checkButton: true },
    { name: '判定', checked: false, icon: 'fa-solid fa-filter', checkButton: true },
    { name: '特徵', checked: false, icon: 'fa-solid fa-filter', checkButton: true },
    { name: '商品', checked: false, icon: 'fa-solid fa-filter', checkButton: true }
  ]);
  
  
  const sidebarMarginLeft = computed(() => {
    if (!isLargeScreen.value) return 0;
    if (currentSidebar.value === 'open-filter') {
      return sidebarFilterWidth.value - extraOffset.value;
    } else if (currentSidebar.value === 'open-deck') {
      return sidebarDeckWidth.value - extraOffset.value;
    }
    return 0;
  });
  
  
  function toggleSidebar(sidebar) {
    currentSidebar.value = currentSidebar.value === sidebar ? '' : sidebar;
  }
  
  function toggleFilter(value) {
    if (!isLargeScreen.value) {
      currentSidebar.value = '';
    }
    currentMain.value = currentMain.value === value ? null : value;
  }
  
  function MenuFilter(index) {
    filters.value[index].checked = !filters.value[index].checked;
  }
  
  function closeSidebar() {
    currentSidebar.value = '';
    currentMain.value = '';
  }
  
  function updateScreenSize() {
    isLargeScreen.value = window.innerWidth > 1200;
    if (!isLargeScreen.value) {
      closeSidebar();
    } else {
      currentMain.value = '';
    }
  }
  
  // Lifecycle hooks
  onMounted(async() => {
    window.addEventListener('resize', updateScreenSize);
    await getLastViewSeries();
    getLastDeckEdit();
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateScreenSize);
  });
</script>
<template>
<div class="bg-black overflow-hidden root-container">
    
    <nav class="sidebar-container">

      <div class="sidebar" :class="{ hidden: currentMain === 'open-filter' }">
        <a href="https://bottleneko.app/" class="sidebar-head">
          <img src="../img/bottleneko-icon.png" alt="" class="icon">
          <img src="../img/bottleneko-icon-text.png" alt="" class="icon-text">
          <h1 class="hidden">BottleNeko</h1>
        </a>
        <ul class="sidebar-menu" >
            <li>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                    </svg>                        
                    <h2>首頁</h2>
                </a>
            </li>
            <li>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="#a1a1aa" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  aria-hidden="true" data-slot="icon" class="flex-none w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"></path>
                    </svg>                        
                    <h2>系列卡表</h2>
                </a>
            </li>
            <li>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="#a1a1aa" fill="none" viewBox="0 0 24 24" stroke-width="1.5" aria-hidden="true" data-slot="icon" class="flex-none w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"></path>
                    </svg>                        
                    <h2>我的牌組</h2>
                </a>
            </li>
            <li>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="#a1a1aa" fill="none" viewBox="0 0 24 24" stroke-width="1.5" aria-hidden="true" data-slot="icon" class="flex-none w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"></path>
                    </svg>                        
                    <h2>社群</h2>
                </a>
            </li>
            <li>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="#a1a1aa" fill="none" viewBox="0 0 24 24" stroke-width="1.5" aria-hidden="true" data-slot="icon" class="flex-none w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"></path>
                    </svg>                        
                    <h2>工作坊</h2>
                </a>
            </li>
            <li  class="md-menu">
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="#a1a1aa" fill="none" viewBox="0 0 24 24" stroke-width="1.5" aria-hidden="true" data-slot="icon" class="flex-none w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path>
                    </svg>                        
                    <h2>通知</h2>
                </a>
            </li>
            <li class="md-menu">
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="#a1a1aa" fill="none" viewBox="0 0 24 24" stroke-width="1.5"aria-hidden="true" data-slot="icon" class="flex-none w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
                    </svg>                        
                    <h2>登入</h2>
                </a>
            </li>
        </ul>
        <button class="translate-btn mt-4 -ml-2 pl-2 w-full h-10 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="flex-none w-7 h-7">
                <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z"></path>
            </svg>
            <h2>原文翻譯</h2>
        </button>
      </div>

      <section v-show="currentSidebar === 'open-filter'" class="sidebar-filter">
        <header class="sidebar-filter-header">
          <div class = "flex-col">
            <p>卡片篩選</p>
            <p>0 篩選、0 排序、關鍵字 : ""</p>
          </div>
          <div>
            <button class="icon del-btn"><i class="fa-solid fa-trash"></i></button>
            <button class="icon open-btn"><i class="fa-solid fa-chevron-down"></i></button>
            <button @click="closeSidebar" class="icon xmark-btn"><i class="fa-solid fa-xmark"></i></button>
          </div>
        </header>
        
        <div class="sidebar-filter-content">
          <div class="whole-menu" v-for="(filter, index) in filters" :key="index">
            <div class="menu" @click="MenuFilter(index)">
              <i :class="[filter.icon]"></i>
              <p>{{ filter.name }}</p>
              <button class="icon del" v-if="filter.delButton" >
                <i class="fa-solid fa-trash"></i>
              </button>
              <button class="icon check" v-if="filter.checkButton" >
                <i class="fa-regular fa-circle-check"></i>
              </button>
              <button class="open">
                <i class="fa fa-chevron-down" :style="{ transform: filter.checked ? 'rotate(180deg)' : '' }"></i>
              </button>
            </div>
            <div class="menu-inner" v-show="filter.checked">
              <div v-if="filter.name === '常用'">
                <span>"+" 按鈕可以儲存當下篩選內容，長按儲存篩選可以進行刪除。</span>
                <button class="plus-btn-used"><i class="fa-solid fa-plus"></i></button>
              </div>
              <div v-else-if="filter.name === '關鍵字'">
                <span>可輸入 "空白" 來複合搜尋，"AND/OR" 可以進行切換。
                  <br>當前搜尋內容： ""
                </span>
                <div class="input-keyword">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16"aria-hidden="true" data-slot="icon" class="flex-none size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg>
                  <input class="w-full p-0 bg-transparent border-transparent focus:ring-0 placeholder:text-zinc-500 focus:outline-none" type="text" placeholder="關鍵字搜尋">
                  <div>
                    <button><span>AND</span></button>
                    <!-- <button><span>OR</span></button> -->
                    <button class="plus-btn"><i class="fa-solid fa-plus"></i></button>
                  </div>
                </div>
                <span class="keyword-below">"+" 按鈕可以儲存關鍵字，長按儲存關鍵字可以進行刪除。
                  <br>無資料
                  <p>新增預設關鍵字</p>
                </span>
              </div>
              <div v-else-if="filter.name === '排序'">
                <div class="menu-inner-slider-btn">
                  <button><div class="slider-btn"></div>等級 <i class="fa-solid fa-arrow-up"></i></button>
                  <button><div class="slider-btn"></div>顏色 <i class="fa-solid fa-arrow-up"></i></button>
                  <button><div class="slider-btn"></div>價格 <i class="fa-solid fa-arrow-up"></i></button>
                </div>
              </div>
              <div v-else-if="filter.name === '類型'">
                <div class="menu-inner-btn">
                  <button>角色</button>
                  <button>事件</button>
                  <button>名場</button>
                </div>
              </div>
              <div v-else-if="filter.name === '等級'">
                <div class="menu-inner-btn">
                  <button>0</button>
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                </div>
              </div>
              <div v-else-if="filter.name === '顏色'">
                <div class="menu-inner-btn">
                  <button>黃色</button>
                  <button>紅色</button>
                  <button>藍色</button>
                </div>
              </div>
              <div v-else-if="filter.name === '費用'">
                <div class="menu-inner-btn">
                  <button>0</button>
                  <button>1</button>
                  <button>2</button>
                </div>
              </div>
              <div v-else-if="filter.name === '魂傷'">
                <div class="menu-inner-btn">
                  <button>0</button>
                  <button>1</button>
                  <button>2</button>
                </div>
              </div>
              <div v-else-if="filter.name === '攻擊力'">
                <div class="menu-inner-btn">
                  <button>0</button>
                  <button>500</button>
                  <button>1000</button>
                  <button>1500</button>
                  <button>2000</button>
                  <button>2500</button>
                  <button>3000</button>
                  <button>3500</button>
                  <button>4000</button>
                  <button>4500</button>
                  <button>5000</button>
                  <button>5500</button>
                  <button>6000</button>
                  <button>6500</button>
                  <button>7000</button>
                  <button>7500</button>
                  <button>8000</button>
                  <button>8500</button>
                  <button>9000</button>
                  <button>9500</button>
                  <button>10000</button>
                  <button>10500</button>
                  <button>11000</button>
                </div>
              </div>
              <div v-else-if="filter.name === '稀有度'">
                <div class="menu-inner-btn">
                  <button>RR</button>
                  <button>SSP</button>
                  <button>LRR</button>
                  <button>R</button>
                  <button>SR</button>
                  <button>OFR</button>
                  <button>U</button>
                  <button>C</button>
                  <button>CR</button>
                  <button>RRR</button>
                  <button>CC</button>
                  <button>PR</button>
                  <button>TD</button>
                  <button>SP</button>
                  <button>N</button>
                  <button>LRP</button>
                  <button>SIR</button>
                </div>
              </div>
              <div v-else-if="filter.name === '判定'">
                <div class="menu-inner-btn">
                  <button>無</button>
                  <button>魂</button>
                  <button>箭頭</button>
                  <button>木門</button>
                  <button>開機</button>
                  <button>城門</button>
                  <button>雙魂</button>
                </div>
              </div>
              <div v-else-if="filter.name === '特徵'">
                <div class="menu-inner-char-btn">
                  <button>リコリコ</button>
                  <button>メガネ</button>
                  <button>ネット</button>
                  <button>武器</button>
                  <button>-</button>
                  <button>テロリスト</button>
                  <button>アラン機関</button>
                  <button>DA</button>
                  <button>特徴なし</button>
                </div>
              </div>
              <div v-else-if="filter.name === '商品'">
                <div class="menu-inner-product-btn">
                  <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24" aria-hidden="true" data-slot="icon" class="size-5 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>リコリス・リコイル</button>
                  <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24" aria-hidden="true" data-slot="icon" class="size-5 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>PRカード【Wサイド】</button>
                  <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24" aria-hidden="true" data-slot="icon" class="size-5 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>[TD]リコリス・リコイル</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <footer class="sidebar-filter-footer">
          <button><span>Apply</span></button>
        </footer>
      </section>
      
      <section v-show="currentSidebar === 'open-deck'" class="sidebar-deck">
        <header class="sidebar-header">
          <div>
            <p>牌組製作</p>
            <p>已選擇 {{ selectedCards.length }} 張卡片，總價 ¥{{ countDeck }}</p>
          </div>
          <div>
            <button class="icon del-btn" @click="clearSelectedCards" ><i class="fa-solid fa-trash"></i></button>
            <button @click="closeSidebar" class="icon xmark-btn"><i class="fa-solid fa-xmark"></i></button>
          </div>
        </header>
    
          <div class="sidebar-deck-choice">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>
              類型
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>
              顏色
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>
              等級
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>
              稀有度
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>
              商品
            </button>
          </div>
          <div class="sidebar-deck-control">
            <button class="cash"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24" aria-hidden="true" data-slot="icon" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"></path></svg></button>
            <span class="divder font-mono flex-none text-zinc-500/50"> | </span>
            <button class="plus" @click="changeTypeToAdd" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24" aria-hidden="true" data-slot="icon" class=""><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg></button>
            <button class="minus" @click="changeTypeToDelete"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24" aria-hidden="true" data-slot="icon" class=""><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"></path></svg></button>
          </div>
          <div class="card-content">
            <h3>角色 - 5</h3>
            <div class="card-choiced">
              <div class="row">
                <div class="col-choice" v-for="(card, index) in selectedCards" :key="index" @click="checkTypeAndRunFunction(card, index)" >
                  <div class="card-image">
                    <img src="https://jasonxddd.me:7001/imgproxy/4nZhC0JVu4aRvo6ml6VI37hURt9V19vRRN5Wo54yrqU/g:no/el:1/bG9jYWw6Ly8vL0xSQ19XMTA1XzAwMS5wbmc.png">
                  </div>
                  {{ card.title }}
                </div>
              </div>
            </div>
            <h3>名場 - 6</h3>
            <div class="card-choiced">
              <div class="row">
                <div class="col-choice">
                  <div class="card-image">
                    <img src="https://jasonxddd.me:7001/imgproxy/JKq9V6OPDBK-LXk3Ylj4q8RTxEbGWoG_i_2FqogzsyM/rt:fill/w:0/h:0/g:no/el:1/f:png/bG9jYWw6Ly8vL0xSQ19XMTA1XzAyOVIucG5n.png">
                  </div>
                </div>
                <div class="col-choice">
                  <div class="card-image">
                    <img src="https://jasonxddd.me:7001/imgproxy/JKq9V6OPDBK-LXk3Ylj4q8RTxEbGWoG_i_2FqogzsyM/rt:fill/w:0/h:0/g:no/el:1/f:png/bG9jYWw6Ly8vL0xSQ19XMTA1XzAyOVIucG5n.png">
                  </div>
                </div>
                <div class="col-choice">
                  <div class="card-image">
                    <img src="https://jasonxddd.me:7001/imgproxy/JKq9V6OPDBK-LXk3Ylj4q8RTxEbGWoG_i_2FqogzsyM/rt:fill/w:0/h:0/g:no/el:1/f:png/bG9jYWw6Ly8vL0xSQ19XMTA1XzAyOVIucG5n.png">
                  </div>
                </div>
                <div class="col-choice">
                  <div class="card-image">
                    <img src="https://jasonxddd.me:7001/imgproxy/JKq9V6OPDBK-LXk3Ylj4q8RTxEbGWoG_i_2FqogzsyM/rt:fill/w:0/h:0/g:no/el:1/f:png/bG9jYWw6Ly8vL0xSQ19XMTA1XzAyOVIucG5n.png">
                  </div>
                </div>
                <div class="col-choice">
                  <div class="card-image">
                    <img src="https://jasonxddd.me:7001/imgproxy/JKq9V6OPDBK-LXk3Ylj4q8RTxEbGWoG_i_2FqogzsyM/rt:fill/w:0/h:0/g:no/el:1/f:png/bG9jYWw6Ly8vL0xSQ19XMTA1XzAyOVIucG5n.png">
                  </div>
                </div>
                <div class="col-choice">
                  <div class="card-image">
                    <img src="https://jasonxddd.me:7001/imgproxy/JKq9V6OPDBK-LXk3Ylj4q8RTxEbGWoG_i_2FqogzsyM/rt:fill/w:0/h:0/g:no/el:1/f:png/bG9jYWw6Ly8vL0xSQ19XMTA1XzAyOVIucG5n.png">
                  </div>
                </div>
              </div>
            </div>
          </div>
    
    
        <footer class="sidebar-footer">
          <button class="sidebar-footer-active">
            <span>下一步<svg data-v-49703284="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg></span>
          </button>
        </footer>
      </section>
    </nav>


    <div class="main" :style="{ marginLeft: sidebarMarginLeft + 'px' }">
      <div class="main-info">  
        <header class="main-info-header">
          <button data-v-3e737e76="" class="flex-none p-1 rounded-full bg-black/50 text-white default-transition hover:bg-zinc-800/50">
            <svg data-v-3e737e76="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
            </svg>
          </button>
          <button data-v-3e737e76="" class="hidden md:block flex-none p-1 rounded-full bg-black/50 text-white default-transition hover:bg-zinc-800/50 disabled:opacity-30" disabled="">
            <svg data-v-3e737e76="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </button>
          <div data-v-3e737e76="" class="w-full min-w-0 text-lg md:text-2xl font-bold text-white">
            <!-- <div data-v-57e635bc="" class="flex items-center gap-4"> -->
                <h2 class="truncate text-2xl font-bold">リコリス・リコイル</h2>
            <!-- </div> -->
          </div>
          <div class="notice z-10">
            <input type="checkbox" id="notice-jump">
            <label for="notice-jump" class="inline-flex items-center p-1 rounded-full default-transition text-center hover:bg-zinc-800/50 text-white">
                <svg data-v-3e737e76="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path></svg>
            </label>
            <div class="notice-grid z-10">
                <div class="notice-grid-up">
                    <h2>通知(0)</h2>
                </div>
                <div class="notice-grid-down">
                    <img src="https://bottleneko.app/images/status/empty.png" alt="no-data">
                    <h2>沒東西</h2>
                    <p>你只有一無所有的時候，才能全身心地投入機會。 - 拿破崙·波拿巴</p>
                </div>
            </div>
          </div>
          <div data-v-3e737e76="" class="login-btn rounded-full bg-black/50 text-white items-center gap-1 default-transition hover:bg-zinc-800/50">
            <div data-v-3e737e76="" class="p-1 rounded-full flex flex-col items-center gap-1">
                <div class="rounded-full size-6 flex-none bg-black/70">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="m-1 text-zinc-200">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
                    </svg>
                </div>
            </div>
            <span data-v-3e737e76="" class="text-sm flex-none max-w-[8rem] truncate">登入</span>
            <div data-v-3e737e76="" class="p-1 rounded-full">
                <svg data-v-3e737e76="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 flex-none">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
            </div>
          </div>
        </header>
        <button @click="toggleSidebar('open-filter')" class="toggle-filter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#155E75" aria-hidden="true" data-slot="icon" ><path fill-rule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z" clip-rule="evenodd"></path></svg>
        </button>
        <button @click="toggleSidebar('open-deck')" class="toggle-deck">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C3D7D5" aria-hidden="true" data-slot="icon" ><path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z"></path><path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z"></path>
          </svg>
        </button>
        <section class="info-container">
          <img src="https://jasonxddd.me:9000/series-cover/rikoriko.jpg">
          <div flex-col class="inner-info-container">
            <span><i class="fa-regular fa-clone"></i> {{ seriesCode }}</span>
            <h1>{{ currentSeriesData.name }}</h1>
            <div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentcolor" width="20" height="20" class="icon-scale size-5 md:size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"></path></svg><span>最新發布{{ serieslastReleaseTime }}</span>
              </div>
              <div>
                <i class="fa-regular fa-clone"></i><span>總數{{ seriesCardList.length }}張</span>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16" aria-hidden="true" data-slot="icon" class="icon-scale size-5 md:size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"></path></svg><span>篩選出208張</span>
              </div>
            </div>
          </div>
        </section>
        
        <section class="info-container-filter">
          <div class="card-control">
            <p>請在<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16" aria-hidden="true" data-slot="icon" class="icon-scale size-5 md:size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"></path></svg>新增常用篩選</p>
            <div>
              <button @click="toggleFilter('open-filter')" class="toggle-inner-filter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="white" stroke-width="2" aria-hidden="true" data-slot="icon" class="size-6"><path fill-rule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z" clip-rule="evenodd"></path></svg>
              </button>
              <button @click="view = 'card-sheet'" :class="{ active: view === 'card-sheet' }" class="icon-control change-sheet"><svg data-v-21a99d2b="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"></path></svg></button>
              <button @click="view = 'card-info'" :class="{ active: view === 'card-info' }" class="icon-control change-info"><svg data-v-21a99d2b="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"></path></svg></button>
            </div>
          </div>
          <div v-if="view === 'card-sheet'" class="card-sheet">
            <div class="row">
              <div class="col-Sheet" v-for="(card, index) in seriesCardList" :key="card.id" @click="deckMakeStore.addCard(card)">
                <div class="card-image">
                  <img src="https://jasonxddd.me:7001/imgproxy/4nZhC0JVu4aRvo6ml6VI37hURt9V19vRRN5Wo54yrqU/g:no/el:1/bG9jYWw6Ly8vL0xSQ19XMTA1XzAwMS5wbmc.png">
                  <div>
                    <p>{{ card.id }}</p>
                    <h3>{{ card.title }}</h3>
                  </div>
                  <button data-v-69cfbdbc="" class="group-hover:bg-zinc-800 group-hover:shadow group-hover:shadow-zinc-800/50 flex-none rounded-full p-1 shadow-xl will-change-[background,shadow] transition-all"><svg data-v-69cfbdbc="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-7 text-white stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"></path></svg></button>
                </div>
              </div>
            </div>
          </div>
    
          <div v-if="view === 'card-info'" class="card-info">
            <div class="row">
              <div class="col-Info" v-for="(card, index) in seriesCardList" :key="card.id">
                <div class="card-info-image">
                  <img src="https://jasonxddd.me:7001/imgproxy/4nZhC0JVu4aRvo6ml6VI37hURt9V19vRRN5Wo54yrqU/g:no/el:1/bG9jYWw6Ly8vL0xSQ19XMTA1XzAwMS5wbmc.png">
                  <div class="card-inner-info">
                    <div class="card-inner-info-header">
                      <p>{{ card.id }}</p>
                      <p>{{ card.rare }}</p>
                    </div>
                    <h3>{{ card.title }}</h3>
                    <div class="details">
                      <div><span>類型</span>{{ card.typeTranslate }}</div>
                      <div><span>魂傷</span>{{ card.soul }}</div>
                      <div><span>等級</span>{{ card.level }}</div>
                      <div><span>攻擊</span>{{ card.attack }}</div>
                      <div><span>費用</span>{{ card.cost }}</div>
                    </div>
                    <div class="price-download">
                      <p>${{ card.price.number }}</p>
                      <button><svg data-v-69cfbdbc="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-7 text-white stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"></path></svg></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section v-show="currentMain === 'open-filter'" class="sidebar-filter">
        <header class="sidebar-filter-header">
          <div>
            <p>卡片篩選</p>
            <p>0 篩選、0 排序、關鍵字 : ""</p>
          </div>
          <div>
            <button class="icon del-btn"><i class="fa-solid fa-trash"></i></button>
            <button class="icon open-btn"><i class="fa-solid fa-chevron-down"></i></button>
            <button @click="closeSidebar" class="icon xmark-btn"><i class="fa-solid fa-xmark"></i></button>
          </div>
        </header>
      
        <div class="sidebar-filter-content">
          <div class="whole-menu" v-for="(filter, index) in filters" :key="index">
            <div class="menu" @click="MenuFilter(index)">
              <i :class="[filter.icon]"></i>
              <p>{{ filter.name }}</p>
              <button class="icon del" v-if="filter.delButton" >
                <i class="fa-solid fa-trash"></i>
              </button>
              <button class="icon check" v-if="filter.checkButton" >
                <i class="fa-regular fa-circle-check"></i>
              </button>
              <button class="open">
                <i class="fa fa-chevron-down" :style="{ transform: filter.checked ? 'rotate(180deg)' : '' }"></i>
              </button>
            </div>
            <div class="menu-inner" v-show="filter.checked">
              <div v-if="filter.name === '常用'">
                <span>"+" 按鈕可以儲存當下篩選內容，長按儲存篩選可以進行刪除。</span>
                <button class="plus-btn-used"><i class="fa-solid fa-plus"></i></button>
              </div>
              <div v-else-if="filter.name === '關鍵字'">
                <span>可輸入 "空白" 來複合搜尋，"AND/OR" 可以進行切換。
                  <br>當前搜尋內容： ""
                </span>
                <div class="input-keyword">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16"aria-hidden="true" data-slot="icon" class="flex-none size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg>
                  <input class="w-full p-0 bg-transparent border-transparent focus:ring-0 placeholder:text-zinc-500 focus:outline-none" type="text" placeholder="關鍵字搜尋">
                  <div>
                    <button><span>AND</span></button>
                    <!-- <button><span>OR</span></button> -->
                    <button class="plus-btn"><i class="fa-solid fa-plus"></i></button>
                  </div>
                </div>
                <span class="keyword-below">"+" 按鈕可以儲存關鍵字，長按儲存關鍵字可以進行刪除。
                  <br>無資料
                  <p>新增預設關鍵字</p>
                </span>
              </div>
              <div v-else-if="filter.name === '排序'">
                <div class="menu-inner-slider-btn">
                  <button><div class="slider-btn"></div>等級 <i class="fa-solid fa-arrow-up"></i></button>
                  <button><div class="slider-btn"></div>顏色 <i class="fa-solid fa-arrow-up"></i></button>
                  <button><div class="slider-btn"></div>價格 <i class="fa-solid fa-arrow-up"></i></button>
                </div>
              </div>
              <div v-else-if="filter.name === '類型'">
                <div class="menu-inner-btn">
                  <button>角色</button>
                  <button>事件</button>
                  <button>名場</button>
                </div>
              </div>
              <div v-else-if="filter.name === '等級'">
                <div class="menu-inner-btn">
                  <button>0</button>
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                </div>
              </div>
              <div v-else-if="filter.name === '顏色'">
                <div class="menu-inner-btn">
                  <button>黃色</button>
                  <button>紅色</button>
                  <button>藍色</button>
                </div>
              </div>
              <div v-else-if="filter.name === '費用'">
                <div class="menu-inner-btn">
                  <button>0</button>
                  <button>1</button>
                  <button>2</button>
                </div>
              </div>
              <div v-else-if="filter.name === '魂傷'">
                <div class="menu-inner-btn">
                  <button>0</button>
                  <button>1</button>
                  <button>2</button>
                </div>
              </div>
              <div v-else-if="filter.name === '攻擊力'">
                <div class="menu-inner-btn">
                  <button>0</button>
                  <button>500</button>
                  <button>1000</button>
                  <button>1500</button>
                  <button>2000</button>
                  <button>2500</button>
                  <button>3000</button>
                  <button>3500</button>
                  <button>4000</button>
                  <button>4500</button>
                  <button>5000</button>
                  <button>5500</button>
                  <button>6000</button>
                  <button>6500</button>
                  <button>7000</button>
                  <button>7500</button>
                  <button>8000</button>
                  <button>8500</button>
                  <button>9000</button>
                  <button>9500</button>
                  <button>10000</button>
                  <button>10500</button>
                  <button>11000</button>
                </div>
              </div>
              <div v-else-if="filter.name === '稀有度'">
                <div class="menu-inner-btn">
                  <button>RR</button>
                  <button>SSP</button>
                  <button>LRR</button>
                  <button>R</button>
                  <button>SR</button>
                  <button>OFR</button>
                  <button>U</button>
                  <button>C</button>
                  <button>CR</button>
                  <button>RRR</button>
                  <button>CC</button>
                  <button>PR</button>
                  <button>TD</button>
                  <button>SP</button>
                  <button>N</button>
                  <button>LRP</button>
                  <button>SIR</button>
                </div>
              </div>
              <div v-else-if="filter.name === '判定'">
                <div class="menu-inner-btn">
                  <button>無</button>
                  <button>魂</button>
                  <button>箭頭</button>
                  <button>木門</button>
                  <button>開機</button>
                  <button>城門</button>
                  <button>雙魂</button>
                </div>
              </div>
              <div v-else-if="filter.name === '特徵'">
                <div class="menu-inner-btn">
                  <button>リコリコ</button>
                  <button>メガネ</button>
                  <button>ネット</button>
                  <button>武器</button>
                  <button>-</button>
                  <button>テロリスト</button>
                  <button>アラン機関</button>
                  <button>DA</button>
                  <button>特徴なし</button>
                </div>
              </div>
              <div v-else-if="filter.name === '商品'">
                <div class="menu-inner-product-btn">
                  <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24" aria-hidden="true" data-slot="icon" class="size-5 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>リコリス・リコイル</button>
                  <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24" aria-hidden="true" data-slot="icon" class="size-5 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>PRカード【Wサイド】</button>
                  <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24" aria-hidden="true" data-slot="icon" class="size-5 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>[TD]リコリス・リコイル</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <footer class="sidebar-filter-footer">
          <button><span>Apply</span></button>
        </footer>
      </section>
    </div>

</div>
</template>
<style src="@/assets/base.css" scoped></style>
<style src="@/assets/css/card-series/main-content.css" scoped></style>
<style src="@/assets/css/card-series/homeside.css" scoped></style>
<style src="@/assets/css/card-series/sidebar-filter.css" scoped></style>
<style src="@/assets/css/card-series/sidebar-deck.css" scoped></style>