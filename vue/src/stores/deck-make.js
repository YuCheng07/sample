import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import Swal from 'sweetalert2'

export const useDeckMakeStore = defineStore("deck-make", () => {
  const selectedCards = ref([]);
  const editType = ref("CHECK_INFO");
  const showCardPrice = ref(false);
  const sortedDeck = ref([]);
  const sortedTitle = ref([]);
  const sortStatus = ref("TYPE");

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
    switchSortMode();
  };

  // 根據卡牌在製作牌組內的位置，移除所選卡牌
  const removeCard = (card) => {
    console.log("開始移除卡牌");
    const cardIndex = selectedCards.value.findIndex(
      (item) => item.id === card.id
    );
    console.log(card.id);
    console.log(cardIndex);
    console.log(selectedCards.value[cardIndex]);

    selectedCards.value.splice(cardIndex, 1);
    saveLastDeckEdit();
    // switchSortMode();
  };

  // 清空製作牌組內的卡牌和重置最後編輯狀態
  const clearSelectedCards = () => {
    console.log("開始清理卡牌製作");
    selectedCards.value = [];
    localStorage.removeItem("deckEdit");
    switchSortMode();
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

  const checkTypeAndRunFunction = (card, cardIndex, deckIndex) => {
    if (editType.value === "CHECK_INFO") {
      console.log("查看卡片資訊");
      console.log(
        "卡片資訊:" + card,
        "卡片索引值:" + cardIndex,
        "牌組索引值:" + deckIndex
      );
    } else if (editType.value === "ADD_CARD") {
      addCard(card);
      switchSortMode();
    } else if (editType.value === "DELETE_CARD") {
      removeCard(card);
      switchSortMode();
    }
  };

  const switchSortMode = () => {
    sortedTitle.value = [];
    sortedDeck.value = [];
    if (sortStatus.value === "TYPE") {
      // 獲取所有卡牌的類型
      const typeArr = [];
      // console.log(selectedCards.value);

      selectedCards.value.forEach((card) => {
        if (typeArr.length <= 0) {
          typeArr.push(card.typeTranslate);
        }
        const ishave = typeArr.find((type) => type === card.typeTranslate);
        if (ishave === undefined) {
          typeArr.push(card.typeTranslate);
          // console.log(card.typeTranslate);
        }
      });
      sortedTitle.value = typeArr;

      // 獲取每種類型的卡牌
      typeArr.forEach((type) => {
        const cardArr = [];
        selectedCards.value.forEach((card) => {
          if (card.typeTranslate === type) {
            cardArr.push(card);
          }
        });
        sortedDeck.value.push(cardArr);
      });
    } else if (sortStatus.value === "COLOR") {
      const typeArr = [];
      // console.log(selectedCards.value);

      selectedCards.value.forEach((card) => {
        if (typeArr.length <= 0) {
          typeArr.push(card.color);
        }
        const ishave = typeArr.find((color) => color === card.color);
        if (ishave === undefined) {
          typeArr.push(card.color);
          // console.log(card.color);
        }
      });
      sortedTitle.value = typeArr;

      // 獲取每種類型的卡牌
      typeArr.forEach((color) => {
        const cardArr = [];
        selectedCards.value.forEach((card) => {
          if (card.color === color) {
            cardArr.push(card);
          }
        });
        sortedDeck.value.push(cardArr);
      });
    } else if (sortStatus.value === "LEVEL") {
      const typeArr = [];
      // console.log(selectedCards.value);

      selectedCards.value.forEach((card) => {
        if (typeArr.length <= 0) {
          typeArr.push(card.level);
        }
        const ishave = typeArr.find((level) => level === card.level);
        if (ishave === undefined) {
          typeArr.push(card.level);
          // console.log(card.level);
        }
      });
      sortedTitle.value = typeArr;

      // 獲取每種類型的卡牌
      typeArr.forEach((level) => {
        const cardArr = [];
        selectedCards.value.forEach((card) => {
          if (card.level === level) {
            cardArr.push(card);
          }
        });
        sortedDeck.value.push(cardArr);
      });

    } else if (sortStatus.value === "RARE") {
      const typeArr = [];
      // console.log(selectedCards.value);

      selectedCards.value.forEach((card) => {
        if (typeArr.length <= 0) {
          typeArr.push(card.rare);
        }
        const ishave = typeArr.find((rare) => rare === card.rare);
        if (ishave === undefined) {
          typeArr.push(card.rare);
          // console.log(card.rare);
        }
      });
      sortedTitle.value = typeArr;

      // 獲取每種類型的卡牌
      typeArr.forEach((rare) => {
        const cardArr = [];
        selectedCards.value.forEach((card) => {
          if (card.rare === rare) {
            cardArr.push(card);
          }
        });
        sortedDeck.value.push(cardArr);
      });
    } else if (sortStatus.value === "PRODUCT") {
      const typeArr = [];
      // console.log(selectedCards.value);

      selectedCards.value.forEach((card) => {
        if (typeArr.length <= 0) {
          typeArr.push(card.productName);
        }
        const ishave = typeArr.find((productName) => productName === card.productName);
        if (ishave === undefined) {
          typeArr.push(card.productName);
          // console.log(card.productName);
        }
      });
      sortedTitle.value = typeArr;

      // 獲取每種類型的卡牌
      typeArr.forEach((productName) => {
        const cardArr = [];
        selectedCards.value.forEach((card) => {
          if (card.productName === productName) {
            cardArr.push(card);
          }
        });
        sortedDeck.value.push(cardArr);
      });
    }
    // console.log(sortedDeck.value);
  };

  // 選擇要切換的類型
  const handleSwitchBtnClick = (switchType) => {
    sortStatus.value = switchType;
    switchSortMode();
  }

  // 傳送給後端存入資料庫
  const sendDeckToDatabase = async(deckData) => {
    const userToken = localStorage.getItem('token');
    const res = await axios.post('http://localhost:3000/api/add-deck', 
      { userToken, deckData });
    console.log(res.data);
    return res
  }

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
    showCardPrice,
    sortedDeck,
    sortedTitle,
    sortStatus,
    switchSortMode,
    handleSwitchBtnClick,
    sendDeckToDatabase
  };
});
