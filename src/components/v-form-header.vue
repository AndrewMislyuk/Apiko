<template>
  <header class="header">
    <div class="header__logo">
      <img src="@/assets/images/logo.svg" alt="logo" />
    </div>
    <div class="header__control">
      <button type="button" class="header__sell">Sell</button>
      <router-link to="/login" class="header__login">Login</router-link>
      <img src="@/assets/images/heart.svg" alt="heart" class="header__icon" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 159px 8px 97px;

  .header__control {
    max-width: 300px;
    width: 100%;
    display: flex;
    align-items: center;

    .header__sell {
      text-transform: uppercase;
      font-size: 14px;
      line-height: 31px;
      color: #fff;
      border: none;
      outline: none;
      height: 31px;
      width: 100%;
      cursor: pointer;
      max-width: 131px;
      background: #349a89;
      border-radius: 4px;
      margin-right: 30px;
    }
    .header__login {
      text-decoration: none;
      font-size: 12px;
      line-height: 40px;
      letter-spacing: 1px;
      margin-right: 40px;
      color: #2b2b2b;
      text-transform: uppercase;
    }
  }
}
@media (max-width: 1024px) {
  .header {
    padding: 18px 25px 8px 50px !important;
  }
}
@media (max-width: 1024px) {
  .header {
    padding: 18px 10px 8px 50px !important;
  }
}
@media (max-width: 425px) {
  .header {
    padding: 18px 10px 8px 25px !important;

    .header__control {
      display: none !important;
    }
  }
}
</style>
