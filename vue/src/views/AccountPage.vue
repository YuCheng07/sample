<template>
<div class="bg-black overflow-hidden root-container">
    <header class="md:mt-2 md:mr-2 header-bg md:rounded-t-2xl h-16 z-10">
        <nav class="header-container">
            <button class="flex-none p-1 rounded-full bg-black/50 text-white default-transition hover:bg-zinc-800/50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                </svg>
            </button>
            <button class="arrow-right hidden md:block flex-none p-1 rounded-full bg-black/50 text-white default-transition hover:bg-zinc-800/50 disabled:opacity-30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                </svg>
            </button>
            <div class="w-full min-w-0 text-lg md:text-2xl font-bold text-white">
                <!-- <div data-v-57e635bc="" class="flex items-center gap-4"> -->
                    <h2 class="truncate text-2xl font-bold">帳號管理</h2>
                <!-- </div> -->
            </div>
            <div class="icons">
                <button class="setting">
                    <svg data-v-a275ce9f="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>
                    <p class="setting-txt">偏好設定</p>
                </button>
                <button class="update">
                    <svg data-v-a275ce9f="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg>
                    <p class="update-txt">重新整理</p>
                </button>
                <button class="logout">
                    <svg data-v-a275ce9f="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"></path></svg>
                    <p class="logout-txt">登出</p>
                </button>
            </div>
            <div class="notice z-10">
                <input type="checkbox" id="notice-jump">
                <label for="notice-jump" class="inline-flex items-center p-1 rounded-full default-transition text-center hover:bg-zinc-800/50 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path></svg>
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
            <div class="login-btn rounded-full bg-black/50 text-white items-center gap-1 default-transition hover:bg-zinc-800/50">
                <div class="p-1 rounded-full flex flex-col items-center gap-1">
                    <div class="rounded-full size-6 flex-none bg-black/70">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="m-1 text-zinc-200">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
                        </svg>
                    </div>
                </div>
                <span class="text-sm flex-none max-w-[8rem] truncate">登入</span>
                <div class="p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 flex-none">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                    </svg>
                </div>
            </div>
        </nav>
    </header>
    <nav class="sidebar-container">
        <a href="https://bottleneko.app/" class="sidebar-head">
            <img src="../img/bottleneko-icon.png" alt="" class="icon">
            <img src="../img/bottleneko-icon-text.png" alt="" class="icon-text">
            <h1 class="hidden">BottleNeko</h1>
        </a>
        <ul class="sidebar-menu">
            <li>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" data-slot="icon" class="flex-none w-7 h-7" stroke="#a1a1a1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                    </svg>                        
                    <h2>首頁</h2>
                </a>
            </li>
            <li>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="#a1a1aa" fill="none" viewBox="0 0 24 24" stroke-width="1.5" aria-hidden="true" data-slot="icon" class="flex-none w-7 h-7">
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
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="#a1a1aa" fill="none" viewBox="0 0 24 24" stroke-width="1.5"aria-hidden="true" data-slot="icon" class="flex-none w-7 h-7">
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
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="#a1a1aa" fill="none" viewBox="0 0 24 24" stroke-width="1.5" aria-hidden="true" data-slot="icon" class="flex-none w-7 h-7">
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
    </nav>
    <div class="background"></div>
    
    <main class="main-grid">
        <div class="account-info">
            <div class="account-info-inside">
                <button class="download">
                    <svg data-v-0dfbc946="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-20 w-20"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"></path></svg>
                </button>
                <div class="account-info-right-area">
                    <div class="e-mail">
                        <svg data-v-0dfbc946="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 md:size-6 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path></svg>
                        <p>meowmeow123@gmail.com</p>
                    </div>
                    <div class="edit">
                        <h1>林小貓</h1>
                        <button>
                            <svg data-v-0dfbc946="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path></svg>                        
                        </button>
                    </div>
                    <div class="card-and-article">
                        <div class="card">
                            <svg data-v-0dfbc946="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 md:size-6 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"></path></svg>
                            <a href="">
                                共有x副牌組
                            </a>
                        </div>
                        <div class="article">
                            <svg data-v-0dfbc946="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 md:size-6 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"></path></svg>
                            <a href="">
                                共有2篇文章
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main">
                <div class="main-inside scroll-smooth">
                    <section class="main-card-area">
                        <h2 class="main-card-area-h2">
                            <a href="">我的牌組</a>
                        </h2>
                        <span>一共有 6 結果</span>
                        <section class="show-card">
                            <a href="#" class="url transition-colors">
                                <div>
                                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                                </div>
                                <div class="card-text">
                                    <div class="flex">
                                        <svg data-v-6e6279af="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4 flex-none"><path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd"></path></svg>                                
                                        <p class="color-a1">90MXW</p>
                                    </div>
                                    <p class="font-size20 color-white padding-bottom" >牌組 90MXW</p>
                                    <p class="color-a1">2023-12-08</p>
                                </div>
                            </a>
                            <a href="#" class="url transition-colors">
                                    <div>
                                        <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                                    </div>
                                    <div class="card-text">
                                        <div class="flex">
                                            <svg data-v-6e6279af="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4 flex-none"><path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd"></path></svg>                                
                                            <p class="color-a1">90MXW</p>
                                        </div>
                                        <p class="font-size20 color-white padding-bottom" >牌組 90MXW</p>
                                        <p class="color-a1">2023-12-08</p>
                                    </div>
                            </a>
                            <a href="#" class="url transition-colors">
                                <div>
                                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                                </div>
                                <div class="card-text">
                                    <div class="flex">
                                        <svg data-v-6e6279af="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4 flex-none"><path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd"></path></svg>                                
                                        <p class="color-a1">90MXW</p>
                                    </div>
                                    <p class="font-size20 color-white padding-bottom" >牌組 90MXW</p>
                                    <p class="color-a1">2023-12-08</p>
                                </div>
                            </a>
                            <a href="#" class="url transition-colors">
                                <div>
                                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                                </div>
                                <div class="card-text">
                                    <div class="flex">
                                        <svg data-v-6e6279af="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4 flex-none"><path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd"></path></svg>                                
                                        <p class="color-a1">90MXW</p>
                                    </div>
                                    <p class="font-size20 color-white padding-bottom" >牌組 90MXW</p>
                                    <p class="color-a1">2023-12-08</p>
                                </div>
                            </a>
                            <a href="#" class="url transition-colors">
                                <div>
                                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                                </div>
                                <div class="card-text">
                                    <div class="flex">
                                        <svg data-v-6e6279af="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4 flex-none"><path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd"></path></svg>                                
                                        <p class="color-a1">90MXW</p>
                                    </div>
                                    <p class="font-size20 color-white padding-bottom" >牌組 90MXW</p>
                                    <p class="color-a1">2023-12-08</p>
                                </div>
                            </a>
                            <a href="#" class="url transition-colors">
                                <div>
                                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                                </div>
                                <div class="card-text">
                                    <div class="flex">
                                        <svg data-v-6e6279af="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4 flex-none"><path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd"></path></svg>                                
                                        <p class="color-a1">90MXW</p>
                                    </div>
                                    <p class="font-size20 color-white padding-bottom" >牌組 90MXW</p>
                                    <p class="color-a1">2023-12-08</p>
                                </div>
                            </a>
                            <a href="#" class="url transition-colors">
                                <div class="read-more-area">
                                    <div class="read-more">
                                        <span class="animation-ping"></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[3rem] w-[3rem] stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"></path></svg>
                                    </div>
                                    <span>閱讀更多</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="mx-auto size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg>                    
                                </div>
                            </a>
                        </section>
                    </section>
                    <section class="main-article-area">
                        <h2 class="main-article-area-h2">
                            <a href="">我的文章</a>
                        </h2>
                        <span>一共有 2 結果</span>
                        <section class="show-card">
                            <a href="#" class="url transition-colors">
                                <div>
                                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                                </div>
                                <div class="card-text">
                                    <div class="flex">
                                        <svg data-v-6e6279af="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4 flex-none"><path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd"></path></svg>                                
                                        <p class="color-a1">90MXW</p>
                                    </div>
                                    <p class="font-size20 color-white padding-bottom" >牌組 90MXW</p>
                                    <p class="color-a1">2023-12-08</p>
                                </div>
                            </a>
                            <a href="#" class="url transition-colors">
                                    <div>
                                        <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                                    </div>
                                    <div class="card-text">
                                        <div class="flex">
                                            <svg data-v-6e6279af="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4 flex-none"><path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd"></path></svg>                                
                                            <p class="color-a1">90MXW</p>
                                        </div>
                                        <p class="font-size20 color-white padding-bottom" >牌組 90MXW</p>
                                        <p class="color-a1">2023-12-08</p>
                                    </div>
                            </a>
                            <a href="#" class="url transition-colors">
                                <div>
                                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                                </div>
                                <div class="card-text">
                                    <div class="flex">
                                        <svg data-v-6e6279af="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4 flex-none"><path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd"></path></svg>                                
                                        <p class="color-a1">90MXW</p>
                                    </div>
                                    <p class="font-size20 color-white padding-bottom" >牌組 90MXW</p>
                                    <p class="color-a1">2023-12-08</p>
                                </div>
                            </a>
                            <a href="#" class="url transition-colors">
                                <div>
                                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                                </div>
                                <div class="card-text">
                                    <div class="flex">
                                        <svg data-v-6e6279af="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4 flex-none"><path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd"></path></svg>                                
                                        <p class="color-a1">90MXW</p>
                                    </div>
                                    <p class="font-size20 color-white padding-bottom" >牌組 90MXW</p>
                                    <p class="color-a1">2023-12-08</p>
                                </div>
                            </a>
                            <a href="#" class="url transition-colors">
                                <div>
                                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                                </div>
                                <div class="card-text">
                                    <div class="flex">
                                        <svg data-v-6e6279af="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4 flex-none"><path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd"></path></svg>                                
                                        <p class="color-a1">90MXW</p>
                                    </div>
                                    <p class="font-size20 color-white padding-bottom" >牌組 90MXW</p>
                                    <p class="color-a1">2023-12-08</p>
                                </div>
                            </a>
                            <a href="#" class="url transition-colors">
                                <div>
                                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                                </div>
                                <div class="card-text">
                                    <div class="flex">
                                        <svg data-v-6e6279af="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4 flex-none"><path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd"></path></svg>                                
                                        <p class="color-a1">90MXW</p>
                                    </div>
                                    <p class="font-size20 color-white padding-bottom" >牌組 90MXW</p>
                                    <p class="color-a1">2023-12-08</p>
                                </div>
                            </a>
                            <a href="#" class="url transition-colors">
                                <div class="read-more-area">
                                    <div class="read-more">
                                        <span class="animation-ping"></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[3rem] w-[3rem] stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"></path></svg>
                                    </div>
                                    <span>閱讀更多</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="mx-auto size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg>                    
                                </div>
                            </a>
                        </section>
                    </section>
                    <section class="main-setting-area">
                        <h2>設定 </h2>
                        <span>根據喜好設定，只有您看的到</span>
                        <div class="main-setting-bar">
                            <button>
                                <svg data-v-0dfbc946="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-6 flex-none text-yellow-500"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"></path></svg>
                                <span>輸入英雄代碼</span>
                            </button>
                            <button>
                                <svg data-v-0dfbc946="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>
                                <span>偏好設定</span>
                            </button>
                            <button>
                                <svg data-v-0dfbc946="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"></path></svg>
                                <span>登出</span>
                            </button>
                            <button>
                                <svg data-v-0dfbc946="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg>
                                <span>重新整理</span>
                            </button>
                            <button>
                                <svg data-v-0dfbc946="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"></path></svg>
                                <span>管理封鎖名單</span>
                            </button>
                            <button>
                                <svg data-v-0dfbc946="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                                <span>刪除帳號</span>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
            <footer>
                <div class="work-shop-footer">
                    <div class="work-shop-footer-flexbox">
                        <div class="work-shop-footer-flexbox-left">
                        <ul class="work-shop-footer-flexbox-left-item">
                            <li class="work-shop-footer-flexbox-left-item-title">
                            簡介
                            </li>
                            <li class="work-shop-footer-flexbox-left-item-link">
                            <a href="https://bottleneko.app/about" target="_blank" 
                            class="work-shop-footer-flexbox-left-item-link-text">
                                關於我們
                            </a> 
                            <a href="https://bottleneko.app/contact" target="_blank"
                            class="work-shop-footer-flexbox-left-item-link-text">
                                與我聯絡
                            </a> 
                            <a href="https://ws-tcg.com/" target="_blank"
                            class="work-shop-footer-flexbox-left-item-link-text">
                                Weiβ Schwarz
                            </a> 
                            <a href="https://jasonxddd.notion.site/V2-56de4919639442f4af617ef3cb0b89fc" target="_blank"
                            class="work-shop-footer-flexbox-left-item-link-text">
                                V2新版介紹
                            </a> 
                            </li>
                        </ul>
                        <ul class="work-shop-footer-flexbox-left-item">
                            <li class="work-shop-footer-flexbox-left-item-title">
                                資源
                            </li>
                            <li class="work-shop-footer-flexbox-left-item-link">
                                <a href="https://decklog.bushiroad.com/" target="_blank"
                                class="work-shop-footer-flexbox-left-item-link-text">      
                                Bushi DeckLog
                                </a> 
                                <a href="https://ws-tcg.com/rules/deck_rule/" target="_blank"
                                class="work-shop-footer-flexbox-left-item-link-text">
                                Bushi DeckLog EN
                                </a> 
                                <a href="https://yuyu-tei.jp/" target="_blank"
                                class="work-shop-footer-flexbox-left-item-link-text">
                                遊々亭價格
                                </a> 
                                <a href="https://ws-tcg.com/rules/" target="_blank"
                                class="work-shop-footer-flexbox-left-item-link-text">
                                基本規則
                                </a> 
                                <a href="https://ws-tcg.com/rules/deck_rule/" target="_blank"
                                class="work-shop-footer-flexbox-left-item-link-text">           
                                禁卡表
                                </a> 
                            </li>
                            </ul>
                            <ul class="work-shop-footer-flexbox-left-item">
                            <li class="work-shop-footer-flexbox-left-item-title">
                                常用連結
                            </li>
                            <li class="work-shop-footer-flexbox-left-item-link">
                                <a href="https://bottleneko.app/qa" target="_blank"
                                class="work-shop-footer-flexbox-left-item-link-text">
                                卡片問答集
                                </a> 
                                <a href="login" 
                                class="work-shop-footer-flexbox-left-item-link-text">
                                我的專業
                                </a> 
                                <a href="login"
                                class="work-shop-footer-flexbox-left-item-link-text">
                                偏好設定
                                </a> 
                                <a href="login"
                                class="work-shop-footer-flexbox-left-item-link-text">
                                登出帳號
                                </a>
                                <a href="#" style="color: red;" target="_blank"
                                class="work-shop-footer-flexbox-left-item-link-text">
                                英雄榜
                                </a> 
                            </li>
                            </ul>  
                        </div>
                        <div class="work-shop-footer-flexbox-right">
                        <div class="work-shop-footer-flexbox-right-group">
                            <a class="work-shop-footer-flexbox-right-item" href="#">
                            <span class="work-shop-footer-flexbox-right-item-icon">
                                <i class="fa-solid fa-gift"></i>
                            </span>
                            <span class="work-shop-footer-flexbox-right-item-text"
                                >用一杯咖啡讓工程師罐罐休息一下</span>
                            </a>
                            <div class="work-shop-footer-flexbox-right-icon-list">
                            <a href="https://play.google.com/store/apps/details?id=app.bottleneko.twa&pli=1" target="_blank">
                                <i class="fa-brands fa-google-play"></i>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=app.bottleneko.twa&pli=1" target="_blank">
                                <i class="fa-brands fa-apple"></i>
                            </a>
                            <a href="https://www.facebook.com/BottleNeko" target="_blank">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://discord.com/invite/GKuxTzpB2A" target="_blank">
                                <i class="fa-brands fa-discord"></i>
                            </a>
                            <a href="#">
                                <i class="fa-solid fa-envelope"></i>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <hr class="work-shop-footer-hr" />
                    <div class="work-shop-footer-copyright">
                        <ul class="work-shop-footer-copyright-left">
                        <li class="work-shop-footer-copyright-left-item">
                            <a href="https://bottleneko.app/policy" target="_blank">
                                隱私權政策 
                            </a>
                        </li>
                        <li class="work-shop-footer-copyright-left-item">
                            <a href="https://bottleneko.app/eula" target="_blank">
                                服務條款
                            </a>
                        </li>
                        <li class="work-shop-footer-copyright-left-item">
                            <a href="https://bottleneko.app/contact" target="_blank">
                                商業合作
                            </a>
                        </li>
                        </ul>
                        <div class="work-shop-footer-copyright-right">
                            <span>卡片資料來源 Weiβ Schwarz.</span>
                            <span>Copyright @ 2023 BottleNeko</span>
                        </div>
                    </div>
                    </div>
            </footer>
        </div>
    </main>
</div>
</template>

<style scoped>
@import '@/assets/base.css';

.root-container {
    display: grid;
    grid-template-areas:
        "sidebar navbar navbar"
        "sidebar main-view main-view"
        "sidebar card-view card-view"
        "sidebar footer footer";
    grid-template-columns: 270px 1fr;
    grid-template-rows: 4rem 1fr;
    height: 100vh;
}

.default-transition {
    transition-duration: .3s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
}

.sidebar-container {
    width: 270px;
    height: 100%;
    display: flex;
    flex-direction: column;
    grid-area: sidebar;
    min-height: 0;
    padding: 1rem;
}

.icon{
    width: 40px;
    height: 40px;
}

.icon-text{
    width: 85px;
    height: 35px;
}

.sidebar-menu{
    margin-top: 20px;
}

.sidebar-head {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
}

.sidebar-menu > li{
    display: flex;
    align-items: center;
    width: 238px;
    height: 40px;
    margin-bottom: 5px;
    cursor: pointer; 
}

.sidebar-menu > .md-menu {
    display: none;
}

.sidebar-menu li h2{
    color: #a1a1aa; 
    font-weight: 700;
    font-size: 16px;
}

.sidebar-menu a {
    display: flex;
    align-items: center; 
    text-decoration: none;
    color: #a1a1aa;
    gap: 10px;
}

.sidebar-menu li:hover a h2{
    color: white; 
}

.sidebar-menu li:hover a svg {
    stroke: white; 
}

.translate-btn{
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 10px;
    border: none;
    background: linear-gradient(45deg, #a855f7, #ec4899); 
    color: white;
    margin-top: 20px;
    cursor: pointer;
    position: relative;
}

.translate-btn::after{
    content: "";
    position: absolute;
    border-top: 1px solid #3f3f46;
    top: 50px;
    left: 0;
    right: 0;
    width: 100%;
}

header {
    width: calc(100% - 270px - 0.5rem);
    position: fixed;
    top: 0;
    right: 0;
    background-color: #2eb8e9;
}

.header-container {
    grid-area: navbar;
    height: 100%;
    padding: 1rem 1.5rem;
    display: flex;
    gap: .5rem;
    align-items: center;
    position: relative;
    z-index: 1;
}

.notice{
    position: relative;
}

.notice-icon{
    width: 24px;
    height: 24px;
    margin-right: 20px;
    cursor: pointer;
    border-radius: 50%; 
    padding: 6px;
    background-color: transparent; 
    transition: background-color 0.3s ease, opacity 0.3s ease;
}

.notice-icon:hover {
    background-color: #2a2727; 
    opacity: 0.8;
}

.notice-grid-up h2{
    color: white;
    font-weight: bolder;
    font-size: 24px;
}

.notice-grid{
    display: grid;
    grid-template-columns: 352px;
    grid-template-rows: 64px 416px;
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translateX(-70%);
    opacity: 0;
    height: 0;
    transition: opacity 0.3s ease, height 0.3s ease, transform 0.3s ease;
    z-index: 999;
}

#notice-jump:checked ~ .notice-grid{
    opacity: 1;
    height: 480px;
}

#notice-jump{
    display: none;
}

.notice-grid-up{
    grid-area: 1/1/2/2;
    background-color: #27272a;
    padding: 24px 16px 8px 16px;
    border-radius: 10px 10px 0px 0px;
}

.notice-grid-down {
    grid-area: 2/1/3/2;
    background-color: #1f1f22;    
    border-radius: 0px 0px 10px 10px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.notice-grid-down img{
    width: 240px;
    height: 240px;
    margin-bottom: 30px;
}

.notice-grid-down h2{
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
    color: #f4f4f5
}

.notice-grid-down p {
    color: rgb(161 161 170);
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
    line-height: 20px;
}

.login-btn{
    display: flex;
    align-items: center;
    /* justify-content: space-between;
    width: 96px;
    height: 32px;
    border: none;
    border-radius: 20px;
    background-color: #111010;
    cursor: pointer; */
}

.login-btn > p{
    color: white;
    font-size: 16px;
}

.login-btn:hover{
    background-color: #2a2727;
}

.background {
    height: calc(100vh - 1rem);
    width: calc(100% - .5rem);
    border-radius: 1rem;
    background-color: rgb(18, 18, 18);
    margin: 0.5rem 0.5rem 0.5rem 0;
}


.content {
    overflow: auto;
}

.scrollbar {
    &::-webkit-scrollbar {
        height: 0;
        width: 0;
    }
}

.main-container {
    min-height: 340px;
    position: relative;
    z-index: 1;
}

.grid-container {
    margin-top: 1rem;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(5, minmax(0, 1fr));
}

.card {
    cursor: pointer;
}

.icons{
    display: flex;
    gap: 1rem;
}

.setting,
.update,
.logout{
    border: none;
    position: relative;
    border-radius: 50%; 
    padding: 6px;
}

.setting:hover,
.update:hover,
.logout:hover{
    background-color: rgba(0, 0, 0, .5);
    opacity: 0.8;
}

.setting svg,
.update svg{
    width: 24px;
    height: 24px;
    stroke: white;
}

.logout svg{
    width: 24px;
    height: 24px;
    stroke: red;
}

.setting-txt,
.update-txt,
.logout-txt {
    position: absolute;
    top: 50px;
    background-color: rgba(0, 0, 0, .5);
    color: white;
    width: 40px;
    line-height: 25px;
    border-radius: 10px;
    padding: 3px;
    text-align: center;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.setting:hover .setting-txt,
.update:hover .update-txt,
.logout:hover .logout-txt {
    opacity: 1;
}

.main-grid {
    background-color: #121212;
    padding-bottom: 2rem;
    margin-right: 0.5rem;
    overflow: auto;
    grid-area: main-view;
}

.account-info{
    background-color: rgb(50, 201, 255);

}

.account-info-inside{
    display: flex;
    flex-direction: row;
    gap: 2rem;
    position: relative;
    top: 64px;
}

.account-info-right-area{
    gap:.5rem;
    display: flex;
    flex-direction: column;
    margin-top: auto;
}

.download{
    width: 240px;
    height: 240px;
    border: none;
    border-radius: 100%;
    margin-left: 24px;
    background-color: #fff;
    position: relative;
}

.download svg{
    width: 80px;
    height: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);

}

.e-mail{
    display: flex;
    align-items: center;
    gap: .25rem;
}

.e-mail svg{
    width: 24px;
    height: 24px;
    stroke: white;
    
}

.e-mail p{
    font-size: .875rem;
    line-height: 1.25rem;
    color: white;
}

.edit{
    display: flex;
    align-items: center;
    gap: .25rem;
}

.edit h1{
    font-size: 4.5rem;
    line-height: 1;
    font-weight: 900;
    color: white;
}

.edit button{
    width: 28px;
    height: 28px;
    padding: .25rem;
    border: none;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, .1);
}

.edit svg{
    width: 20px;
    height: 20px;
    stroke: white;
}

.card-and-article{
    display: flex;
    gap: 1rem;
}

.card{
    display: flex;
    gap: .25rem;
    align-items: center;
}

.card svg{
    width: 20px;
    height: 20px;
    stroke: white;
}

.card a{
    color: white;
    font-size: 16px;
    text-decoration: none;
    text-underline-offset: 5px;
    text-decoration-thickness: 2px;
    text-decoration-line: underline;
    letter-spacing: 1px;
}

.article{
    display: flex;
    gap: .25rem;
    align-items: center;
}

.article a {
    color: white;
    font-size: 16px;
    text-underline-offset: 5px;
    text-decoration-thickness: 2px;
    text-decoration-line: underline;
    letter-spacing: 1px;
}

.article svg{
    width: 24px;
    height: 24px;
    stroke: white;
}

.main {
    background:
    linear-gradient(rgba(50, 201, 255, 0.44) 100px, transparent 500px),
    #1f1f22;    
    padding: 0px 24px;
    grid-area: card-view;
    margin-top: 100px;
}

.main-inside{
    display: flex;
    flex-direction: column;
}

.main-card-area-h2 a,
.main-article-area-h2 a,
.main-setting-area h2{
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.75rem;
    padding-bottom: .5rem;
    padding-top: 1.5rem;
    color: white;
    text-decoration: none;
    display: block;
}

.main-card-area span,
.main-article-area span,
.main-setting-area span{
    display: block;
    font-size: .75rem;
    font-weight: 400;
    line-height: 1rem;
    color: rgb(161 161 170);
    text-decoration: none;
}

.main-setting-bar{
    display: flex;
    flex-direction: column;
}

.main-setting-bar button{
    display: flex;
    width: 41.67%;
    padding: 1rem;
    border-radius: .75rem;
    margin-top: 1rem;
    background-color: rgb(24 24 27);
    border: none;
    gap: .5rem;
    align-items: center;
    cursor: pointer;
}

.main-setting-bar svg{
    width: 24px;
    height: 24px;
}

.main-setting-bar button:nth-child(-n+5) svg{
    stroke: white;
}

.main-setting-bar button:first-child svg{
    stroke: #eab308;
    fill: #eab308;
}

.main-setting-bar button:last-child svg{
    stroke: red;
}

.main-setting-bar button:nth-child(-n+5) span{
    color: white;
    font-size: 16px;
}

.main-setting-bar button:last-child span{
    color: red;
    font-size: 16px;
}

.main-setting-bar button:hover{
    background-color: #2f2f35;
}

.main-setting-bar button:last-child{
    margin-bottom: 2rem;
}

.show-card {
    display: flex;
    gap: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    /* flex-wrap: wrap; */
    scrollbar-width: none;
}

.show-card a {
    display: block;
    width: calc(50% - 2rem);
}
    
.flex{
    display: flex;
    align-items: center;
    gap: .25rem;
}

.flex svg{
    fill: #a1a1aa;;

}

.card-text{
    margin-top: 1rem;
}

.padding-bottom{
    padding-bottom: 5px;
}
    
.h2-padding{
    padding-top:30px ;
    padding-bottom: 10px;
}
    
.color-white{
    color: white;
}

.color-a1{
    color: #a1a1aa;
    font-size: .875rem;
    line-height: 1.25rem;
}

.url{
    padding: 1rem;
    display: inline-block;
    background-color: #18181b;
    border-radius: .75rem;
    box-sizing: border-box;
}

.url img{
    border-radius: 10%;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.icon-size{
    height: 1rem;
    width: 1rem;
    align-self: center;
}

a {
    text-decoration:none ;
}

.aa a:hover{
    background-color: #27272a;
}

.font-size20{
    font-size: 1rem;
    line-height: 1.5rem;
}

.read-more-area{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 1.5rem;
}

.read-more{
    border-radius: 100%;
    background-image: linear-gradient(to right, #06b6d4, #3b82f6);
    width: 6rem;
    height: 6rem;
    position: relative;
    margin-top: 1rem;
}

.read-more svg{
    width: 3rem;
    height: 3rem;
    stroke: white;
    stroke-width: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.read-more-area > svg{
    width: 24px;
    height: 24px;
    stroke: white;
}

.read-more-area > span{
    color: white;
}

.url:last-child{
    background-color: rgba(24, 24, 27, .3);
}

.scroll-smooth{
    scroll-behavior: smooth;
}

.work-shop-footer {
    max-width: 100%;
    padding: 80px 32px 64px;
    box-sizing: border-box;
    background-color: #121212;
}

.work-shop-footer-flexbox {
    width: 100%;
    display: flex;
}

.work-shop-footer-flexbox-left {
    width: 100%;
    display: flex;
    gap: 1rem;
}

.work-shop-footer-flexbox-left-item {
    list-style: none;
    margin-top: 16px;
    width: 160px;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.work-shop-footer-flexbox-left-item-title {
    width: 100%;
    color: white;
    line-height: 24px;
}

.work-shop-footer-flexbox-left-item-link {
    width: 100%;
    line-height: 24px;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.work-shop-footer-flexbox-left-item-link-text {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    color: #6d6d76;
}

.work-shop-footer-flexbox-left-item-link-text:hover {
    color: white;
}

.work-shop-footer-flexbox-right {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
}

.work-shop-footer-flexbox-right-group {
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.work-shop-footer-flexbox-right-item {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    color: #d4d4d8;
    text-decoration: none;
}

.work-shop-footer-flexbox-right-item:hover span {
    cursor: pointer;
    color: white;
}

.work-shop-footer-flexbox-right-item-icon {
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    color: #d4d4d8;
    font-size: 20px;
}

.work-shop-footer-flexbox-right-item-text {
    color: #d4d4d8;
    font-size: 20px;
    line-height: 28px;
}

.work-shop-footer-flexbox-right-icon-list {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
}

.work-shop-footer-flexbox-right-icon-list a {
    display: inline-block;
    width: 40px;
    height: 40px;
    color: white;
    font-size: 24px;
    border-radius: 50%;
    background-color: #3f3f46;
    text-align: center;
    line-height: 40px;
}

.work-shop-footer-flexbox-right-icon-list a:hover {
    background-color: #5b5b64;
}

.work-shop-footer-hr {
    border: none;
    border-top: 1px solid #3f3f46;
    margin: 16px 0px;
}

.work-shop-footer-copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.work-shop-footer-copyright-left {
    display: flex;
    gap: 1rem;
    list-style: none;
}

.work-shop-footer-copyright-left-item {
    width: 100%;
    text-wrap: nowrap;
}

.work-shop-footer-copyright-left-item a {
    text-decoration: none;
    color: #6d6d76;
    width: 100%;
}

.work-shop-footer-copyright-left-item a:hover {
    color: white;
    cursor: pointer;
}

.work-shop-footer-copyright-right {
    color: #6d6d76;
    font-size: 14px;
}

.work-shop-footer-copyright-right span {
    line-height: 20px;
}

.text-color-red {
    color: #941816;
}

.text-color-red:hover {
    color: red;
}

@media screen and (width < 1200px) {
    .root-container {
        display: grid;
        grid-template-areas:
            "navbar"
            "main-view";
        grid-template-columns: 1fr;
        grid-template-rows: 4rem 1fr;
        height: 100vh;
    }

    header {
        width: 100%;
        position: fixed;
        top: 0;
        right: 0;
        background-color: #2eb8e9;
    }

    .arrow-right{
        display: none;
    }

    .notice {
        display: none;
    }

    .login-btn {
        display: none;
    }

    .update{
        display: none;
    }

    .logout{
        display: none;
    }

    .sidebar-container {
        width: 100%;
        max-height: 65.5px;
        position: fixed;
        bottom: 0;
        z-index: 999;
        display: unset;
        padding: 0;
    }
    
    .sidebar-container::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: -32px;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, #000, rgba(0, 0, 0, 0.9), transparent);
    }
    
    .sidebar-head {
        display: none;
    }

    .sidebar-menu {
        display: flex;
        width: 100%;
        margin: 0px;
        top: 2.5rem;
    }

    .sidebar-menu > li {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }

    .sidebar-menu > .md-menu {
        display: block;
    }

    .sidebar-menu li h2 {
        font-size: 5px;
    }

    .sidebar-menu a {
        width: 100%;
        height: 100%;
        flex-direction: column;
        gap: .25rem;
        justify-content: space-between;
        padding: 8px 12px 12px;
        box-sizing: border-box;
    }

    .translate-btn {
        display: none;
    }

    .translate-btn + p {
        display: none;
    }

    .background {
        display: none;
    }

    .content-container {
        border-radius: 0;
    }

    .account-info-inside{
        flex-direction: column;
        align-items: center;
    }

    .show-card{
        overflow: scroll;
    }

    .main-setting-bar button{
        display: flex;
        width: 100%;
        padding: 1rem;
        border-radius: .75rem;
        margin-top: 1rem;
        background-color: rgb(24 24 27);
        border: none;
        gap: .5rem;
        align-items: center;
        cursor: pointer;
    }    

    .work-shop-footer-flexbox {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .work-shop-footer{
        padding: 5rem 2rem 11rem;
        padding-left: -16px;
        padding-right: -16px;
    }

    .work-shop-footer-flexbox-left {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .work-shop-footer-flexbox-left-item{
        width: 100%;
    }

    .work-shop-footer-flexbox-left-item-link{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    } 
    
    .work-shop-footer-flexbox-right{
        justify-content: center;
        margin-top: 40px;
    }

    .work-shop-footer-flexbox-right-item-text{
        font-size: 16px;
    }

    .work-shop-footer-flexbox-right-group{
        margin-top: 1rem;
    }

    .work-shop-footer-flexbox-right-icon-list{
        justify-content: center;
    }

    .work-shop-footer-copyright{
        flex-direction: column;
        gap: .5rem;
    }

    .work-shop-footer-copyright-right{
        display: flex;
        flex-direction: column;
    }

    .main-grid {
        margin-right: 0;
    }
}

@media screen and (width < 1200px){
    .md\:mt-2 {
        margin-top: 0;
    }

    .md\:mr-2 {
        margin-right: 0;
    }

}
</style>