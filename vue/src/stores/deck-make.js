import { ref, computed } from "vue";
import { defineStore } from "pinia";
// import axios from "axios";

export const useDeckMakeStore = defineStore("deck-make", () => {
  const selectedCards = ref([]);
  const editType = ref("CHECK_INFO");

  // 新增所選卡牌到製作牌組
  const addCard = (selectedCardData) => {
    if (selectedCards.value === null) {
      selectedCards.value = [];
    }
    const card = selectedCardData;
    // console.log(card);
    selectedCards.value.push(card);
    console.log(selectedCards.value);
    saveLastDeckEdit();
  };

  // 根據卡牌在製作牌組內的位置，移除所選卡牌
  const removeCard = (cardIndex) => {
    selectedCards.value.splice(cardIndex, 1);
    saveLastDeckEdit();
  };

  // 清空製作牌組內的卡牌和重置最後編輯狀態
  const clearSelectedCards = () => {
    console.log("開始清理卡牌製作");
    selectedCards.value = [];
    localStorage.removeItem("deckEdit");
  };

  // 存取最後製作牌組的編輯狀態
  const saveLastDeckEdit = () => {
    console.log("存取至localstorage");
    localStorage.setItem("deckEdit", JSON.stringify(selectedCards.value));
  };

  // 獲取最後製作牌組的編輯狀態
  const getLastDeckEdit = () => {
    const lastDeckEditData = localStorage.getItem("deckEdit");
    if (lastDeckEditData) {
      selectedCards.value = JSON.parse(lastDeckEditData);
    }
  };

  // 計算製作牌組內所有卡牌的總價
  const countDeck = computed(() => {
    return selectedCards.value.reduce((total, card) => {
      //   console.log(total, card.price.number);
      return total + card.price.number;
    }, 0);
  });

  //   切換到增加卡片編輯狀態
  const changeTypeToAdd = () => {
    if (editType.value === "DELETE_CARD") {
      editType.value = "ADD_CARD";
    } else if (editType.value === "ADD_CARD") {
      editType.value = "CHECK_INFO";
    } else if (editType.value === "CHECK_INFO") {
      editType.value = "ADD_CARD";
    }
  };

  //   切換到刪除卡片編輯狀態
  const changeTypeToDelete = () => {
    if (editType.value === "DELETE_CARD") {
      editType.value = "CHECK_INFO";
    } else if (editType.value === "ADD_CARD") {
      editType.value = "DELETE_CARD";
    } else if (editType.value === "CHECK_INFO") {
      editType.value = "DELETE_CARD";
    }
  };

  const checkTypeAndRunFunction = (card, cardIndex) => {
    if (editType.value === "CHECK_INFO") {
      console.log("查看卡片資訊");
      console.log(card, cardIndex);
      
    } else if (editType.value === "ADD_CARD") {
      addCard(card);
    } else if (editType.value === "DELETE_CARD") {
      removeCard(cardIndex);
    }
  };

  return {
    addCard,
    removeCard,
    checkTypeAndRunFunction,
    selectedCards,
    getLastDeckEdit,
    clearSelectedCards,
    countDeck,
    editType,
    changeTypeToAdd,
    changeTypeToDelete,
  };
});
