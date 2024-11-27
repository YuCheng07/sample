import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCardSeriesStore = defineStore("card-series", () => {
  const currentSeriesData = ref("");
  const serieslastReleaseTime = ref("");
  const seriesCode = ref("");
  const seriesCardList = ref([]);
  const lastViewSeriesId = ref(null);

  // リコリス測試用資料
  const seriesTestData = ref("");

  // 獲取指定系列資訊;
  const getCurrentSeries = async (seriesId = 1559042) => {
    try {
      const res = await axios.get("/api/series");
      // console.log(res.data);
      res.data.find((series) => {
        if (series.id === seriesId) {
          currentSeriesData.value = series;
        }
      });
      //   console.log(currentSeriesData.value.sellAt);
      if (currentSeriesData.value.sellAt == undefined) {
        getCardSeriesCompleteInfo();
      } else {
        serieslastReleaseTime.value =
          currentSeriesData.value.sellAt[
            currentSeriesData.value.sellAt.length - 1
          ];
        seriesCode.value = currentSeriesData.value.code.join(",");
      }
    } catch (err) {
      console.log(err, "系列獲取失敗");
    }
  };

  // 獲取指定系列所有卡牌資訊;
  const getSeriesCards = async (seriesId = 1559042) => {
    try {
      const res = await axios.get(`/api/card/${seriesId}`);
        // console.log(res.data);
      res.data.forEach((card) => {
        if (card.type === "キャラ") {
          card.typeTranslate = "角色";
        } else if (card.type === "イベント") {
          card.typeTranslate = "事件";
        } else if (card.type === "クライマックス") {
          card.typeTranslate = "名場";
        }
      });
      seriesCardList.value = res.data;
    } catch (err) {
      console.log(err);
    }
  };

  // 獲取指定系列的完整卡牌資訊，把getCurrentSeries、getSeriesCards放在一起調用
  const getCardSeriesCompleteInfo = async (seriesId) => {
      await getCurrentSeries(seriesId);
      await getSeriesCards(seriesId);
  };

  // 拿取測試用資料
  const getTestSeriesData = async () => {
    try {
      const res = await axios.get("/api/series");
      //   console.log(res.data);
      res.data.find((series) => {
        if (series.id === 1559042) {
          seriesTestData.value = series;
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const saveLastViewSeries = () => {
    if (currentSeriesData.value || seriesCardList.value) {
      localStorage.setItem("lastViewSeriesId", currentSeriesData.value.id);
      lastViewSeriesId.value = currentSeriesData.value.id;
    }
  };

  const getLastViewSeries = async () => {
    if (currentSeriesData.value == "" || seriesCardList.value == "") {
      lastViewSeriesId.value = localStorage.getItem("lastViewSeriesId");
      if (lastViewSeriesId.value) {
        // console.log("開始重新獲取");
        await getCardSeriesCompleteInfo(lastViewSeriesId.value);
      }
    }
  };

  return {
    currentSeriesData,
    serieslastReleaseTime,
    seriesCode,
    seriesCardList,
    seriesTestData,
    getTestSeriesData,
    getCardSeriesCompleteInfo,
    saveLastViewSeries,
    getLastViewSeries,
    lastViewSeriesId
  };
});