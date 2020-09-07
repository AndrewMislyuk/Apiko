<template>
  <section class="content">
    <div class="content__filter">
      <div class="category">
        <img src="@/assets/images/grid.svg" alt="grid" class="category__icon" />
        <img
          src="@/assets/images/arrow.svg"
          alt="arrow"
          class="category__arrow"
        />
        <p
          @click="areCategoryVisible = !areCategoryVisible"
          class="category__title"
        >
          {{ selectedCategory }}
        </p>
        <div class="category__body" v-if="areCategoryVisible">
          <p
            v-for="categ in category"
            :key="categ.value"
            @click="selectCategory(categ)"
          >
            {{ categ.title }}
          </p>
        </div>
      </div>
      <div class="from__price">
        <p
          @click="areFromPriceVisible = !areFromPriceVisible"
          class="from__title"
        >
          {{ selectFromPrice }}
        </p>
        <div class="from__body" v-if="areFromPriceVisible">
          <p
            v-for="categ in fromPrice"
            :key="categ.value"
            @click="fromPriceSelect(categ)"
          >
            {{ categ.title }}
          </p>
        </div>
        <div class="content__arrow"></div>
      </div>
      <div class="from__price">
        <p @click="areToPriceVisible = !areToPriceVisible" class="from__title">
          {{ selectToPrice }}
        </p>
        <div class="from__body" v-if="areToPriceVisible">
          <p
            v-for="categ in toPrice"
            :key="categ.value"
            @click="toPriceSelect(categ)"
          >
            {{ categ.title }}
          </p>
        </div>
      </div>
    </div>
    <div class="content__cards">
      <div class="card" v-for="card in cards" :key="card.id">
        <div class="card__image">
          <img :src="require('../assets/images/' + card.image)" alt="picture" />
          <button class="card__like"></button>
        </div>
        <div class="card__title">{{ card.title }}</div>
        <div class="card__price">{{ card.price }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectFromPrice: "Price from (USD)",
      selectToPrice: "Price to (USD)",
      selectedCategory: "Choose Category",
      areToPriceVisible: false,
      areFromPriceVisible: false,
      areCategoryVisible: false,
      toPrice: [{ title: "Price to (UAH)", value: 1 }],
      fromPrice: [{ title: "Price from (UAH)", value: 1 }],
      category: [{ title: "First Category", value: 1 }],
      cards: [
        { id: 1, image: "img1.png", title: "item name", price: "$575.09" },
        { id: 2, image: "img2.png", title: "item name", price: "$518.54" },
        { id: 3, image: "img3.png", title: "item name", price: "$185.3" },
        { id: 4, image: "img4.png", title: "item name", price: "$984.05" },
        { id: 5, image: "img5.png", title: "item name", price: "$263.08" },
        { id: 6, image: "img6.png", title: "item name", price: "$682.29" },
        { id: 7, image: "img7.png", title: "item name", price: "$190.67" },
        { id: 8, image: "img8.png", title: "item name", price: "$275.02" },
        { id: 9, image: "img9.png", title: "item name", price: "$155.54" },
        { id: 10, image: "img10.png", title: "item name", price: "$677.22" },
        { id: 11, image: "img11.png", title: "item name", price: "$219.43" },
        { id: 12, image: "img12.png", title: "item name", price: "$346.96" },
      ],
    };
  },
  methods: {
    selectCategory(categ) {
      this.selectedCategory = categ.title;
      this.areCategoryVisible = false;
    },
    toPriceSelect(categ) {
      this.selectToPrice = categ.title;
      this.areToPriceVisible = false;
    },
    fromPriceSelect(categ) {
      this.selectFromPrice = categ.title;
      this.areFromPriceVisible = false;
    },
    hideSelect() {
      this.areCategoryVisible = false;
      this.areFromPriceVisible = false;
      this.areToPriceVisible = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style lang="scss" scoped>
.from__price {
  margin-left: 23px;
  position: relative;
  max-width: 143px;
  width: 100%;

  .content__arrow {
    position: absolute;
    top: 30px;
    right: -18px;
    height: 1px;
    width: 12px;
    background-color: #dedee0;
  }
  .from__title {
    background: #f9fafb;
    border: 1px solid #dedee0;
    box-sizing: border-box;
    padding: 8px 0 0 9px;
    border-radius: 5px;
    cursor: pointer;
    height: 35px;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.35px;
    color: #505050;
  }
  .from__body {
    background: #f9fafb;
    border: 1px solid #dedee0;
    box-sizing: border-box;
    position: absolute;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.35px;
    padding: 0 0 0 10px;
    color: #505050;
    top: 45px;
    right: 0;
    z-index: 1000;
    width: 143px;
    height: 40px;
    cursor: pointer;

    &:hover {
      background: rgb(194, 192, 192);
    }
  }
}
.category {
  position: relative;
  max-width: 285px;
  width: 100%;
  padding: 12px 0 12px 11px;

  .category__icon {
    position: absolute;
    top: 21px;
    left: 22px;
  }
  .category__arrow {
    position: absolute;
    top: 25px;
    right: 15px;
  }
  .category__title {
    background: #f9fafb;
    border: 1px solid #dedee0;
    box-sizing: border-box;
    padding: 8px 0 0 39px;
    border-radius: 5px;
    cursor: pointer;
    height: 35px;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.35px;
    color: #505050;
  }
  .category__body {
    background: #f9fafb;
    border: 1px solid #dedee0;
    box-sizing: border-box;
    position: absolute;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.35px;
    padding: 10px 0 0 30px;
    color: #505050;
    top: 45px;
    right: 0;
    z-index: 1000;
    width: 285px;
    height: 40px;
    cursor: pointer;

    &:hover {
      background: rgb(194, 192, 192);
    }
  }
}
.category p {
  margin: 0;
}
.content {
  width: 100%;

  .content__filter {
    display: flex;
    align-items: center;
    width: 100%;
    height: 59px;
    background: #ffffff;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.217111);
    border-radius: 4px;
    margin-bottom: 18px;
  }
  .content__cards {
    width: 100%;
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .card {
      max-width: 209px;
      width: 100%;
      height: 212px;
      background: #ffffff;
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      box-shadow: 0px 4px 14px rgba(121, 121, 121, 0.0527344);
      border-radius: 4px;
      margin-bottom: 13px;
      margin-left: 2px;

      .card__image {
        position: relative;
        height: 148px;

        .card__like {
          display: block;
          position: absolute;
          bottom: -15px;
          right: 10px;
          border: none;
          outline: none;
          cursor: pointer;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.163407);
          background: #ffffff url("../assets/images/heart-like.svg") center
            no-repeat;
          transition: background 0.1s linear;

          &:hover {
            background: #ffffff url("../assets/images/heart-like-love.svg")
              center no-repeat;
          }
        }
      }
      .card__image img {
        display: block;
        margin: 3px auto;
      }
      .card__title {
        margin: 6px 7px 0 12px;
        font-size: 15px;
        line-height: 17px;
        color: #373738;
      }
      .card__price {
        font-size: 18px;
        line-height: 21px;
        color: #101010;
        font-weight: bold;
        margin: 6px 7px 0 12px;
      }
    }
  }
}
@media (max-width: 812px) {
  .content__filter {
    width: 94% !important;
    margin: 0 auto;
  }
  .content__cards {
    grid-template-columns: repeat(3, 1fr) !important;
    margin-bottom: 250px;

    .card {
      margin-left: 28px !important;
    }
  }
}
@media (max-width: 768px) {
  .content__cards {
    .card {
      margin-left: 21px !important;
    }
  }
}
@media (max-width: 425px) {
  .card {
    max-width: 310px !important;

    .card__image img {
      width: 300px !important;
      height: 148px !important;
    }
  }
  .content__filter {
    height: 140px !important;
    flex-wrap: wrap;

    .category {
      max-width: 335px;
      width: 100%;
      padding: 12px 0 6px 0;
      margin: 10px auto 0 !important;

      .category__body {
        width: 335px !important;
      }
      .category__icon {
        left: 14px !important;
      }
    }
    .from__price {
      margin: 0 auto !important;

      .content__arrow {
        right: -30px !important;
      }
    }
  }
  .content__cards {
    grid-template-columns: repeat(1, 1fr) !important;
    margin-bottom: 2100px;

    .card {
      margin: 0 auto 15px !important;
    }
  }
}
@media (max-width: 375px) {
  .category {
    max-width: 314px !important;
    width: 100%;
    padding: 12px 0 6px 0;
    margin: 10px auto 0 !important;

    .category__body {
      max-width: 314px !important;
    }
  }
}
@media (max-width: 320px) {
  .card {
    max-width: 290px !important;

    .card__image img {
      width: 280px !important;
    }
  }
  .category {
    max-width: 272px !important;
    width: 100%;
    padding: 12px 0 6px 0;
    margin: 10px auto 0 !important;

    .category__body {
      max-width: 272px !important;
    }
  }
  .from__price {
    margin: 0 auto !important;
    margin-left: 23px;
    position: relative;
    max-width: 130px;
    .from__body {
      width: 130px;
    }
    .content__arrow {
      display: none;
    }
  }
}
</style>
