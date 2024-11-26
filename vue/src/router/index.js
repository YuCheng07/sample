import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CardInfo from "../views/CardInfo.vue";
import WorkShopView from "@/views/WorkShopView.vue";
import HeroMemberView from "@/views/HeroMemberView.vue";
import OfficialProductList from "@/views/OfficialProductList.vue";
import CardListbySeries from "@/views/Card List by Series.vue";
import MainPage from "@/views/MainPage.vue";
import AccountPage from "@/views/AccountPage.vue";
import DailyCard from "../views/DailyCard.vue";
import Faq from "../views/Faq.vue";
import FaqInfo from "../views/FaqInfo.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import LoginHomePageView from "@/views/LoginHomepage.vue";
import CardSeries from "@/views/CardSeries.vue";
import Carddeck from "../views/Carddeck.vue";
import AddArticle from "../views/AddArticle.vue";
import Social from "../views/Social.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/card-info",
      name: "card-info",
      component: CardInfo,
    },
    {
      path: "/work-shop",
      name: "work-shop",
      component: WorkShopView,
    },
    {
      path: "/hero-member",
      name: "hero-member",
      component: HeroMemberView,
    },
    {

      path: "/OfficialProductList",
      name: "OfficialProductList",
      component: OfficialProductList,
    },
    {
      path: "/Card-List-by-Series",
      name: "CardListbySeries",
      component: CardListbySeries,
    },
    {
      path: '/daily-card',
      name: 'daily-info',
      component: DailyCard
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/faq-info',
      name: 'faq-info',
      component: FaqInfo
    },
    {
      path: "/main-page",
      name: "main-page",
      component: MainPage,
    },
    {
      path: "/account-page",
      name: "account-page",
      component: AccountPage,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: "/login-homepage",
      name: "login-homepage",
      component: LoginHomePageView,
    },
    {
      path: "/card-series",
      name: "card-series",
      component: CardSeries
    },
    {
      path: "/carddeck",
      name: "carddeck",
      component: Carddeck
    },
    {
      path: "/add-article",
      name: "add-article",
      component: AddArticle
    },
    {
      path: "/social",
      name: "social",
      component: Social
    },
  ],
});

export default router;
