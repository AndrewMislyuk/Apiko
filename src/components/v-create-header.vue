<template>
  <header class="header">
    <div class="header__logo">
      <img src="@/assets/images/logo-white.svg" alt="logo" />
    </div>
    <button class="header__burger">
      <img src="@/assets/images/burger.svg" alt="burger" />
    </button>
    <div class="header__control">
      <button type="button" class="header__profile">TS</button>
      <img
        src="@/assets/images/heart-white.svg"
        alt="heart"
        class="header__icon"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 77px;
  box-sizing: border-box;
  background: linear-gradient(180deg, #090810 0%, #171236 100%);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 160px 17px 144px;

  .header__burger {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    margin-right: 15px;
    display: none;
  }
  .header__control {
    display: flex;
    align-items: center;

    .header__profile {
      margin-right: 37px;
      background-color: #f1c40f;
      border: none;
      cursor: pointer;
      outline: none;
      font-size: 14px;
      line-height: 40px;
      letter-spacing: 1px;
      text-transform: uppercase;
      border-radius: 50%;
      padding: 0 10px;
      color: rgba(19, 15, 2, 0.72);
    }
  }
}
@media (max-width: 768px) {
  .header {
    padding: 18px 40px 8px 50px !important;
  }
}
@media (max-width: 425px) {
  .header {
    padding: 18px 10px 8px 20px !important;
  }
  .header__burger {
    display: block !important;
  }
  .header__control {
    display: none !important;
  }
}
</style>
