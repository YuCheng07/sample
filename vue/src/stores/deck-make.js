import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useDeckMakeStore = defineStore("deck-make", ()=>{

    const deck = ref([]);

    const addCard = (seriesId, cardId) => {
        const card = {
            cardId: 
        }
    }



    return {

    }
})