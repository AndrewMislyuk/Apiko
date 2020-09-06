<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__logo">
        <img src="@/assets/images/logo-white.svg" alt="logo" />
      </div>
      <button class="header__burger">
        <img src="@/assets/images/burger.svg" alt="burger" />
      </button>
      <div class="header__control">
        <router-link to="/create" class="header__sell">+ Add</router-link>
        <router-link to="/login" class="header__login">Login</router-link>
        <img
          src="@/assets/images/heart-white.svg"
          alt="heart"
          class="header__icon"
        />
      </div>
    </div>
    <nav class="navbar">
      <div class="navbar__item">
        <input type="text" id="search" placeholder="Search products by name" />
        <img src="@/assets/images/search.svg" alt="loop" />
      </div>
      <div class="navbar__item">
        <input type="text" id="location" placeholder="Location" />
        <img src="@/assets/images/location.svg" alt="location" />
      </div>
      <button type="button" class="navbar__button">Search</button>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: absolute;
  background: linear-gradient(180deg, #090810 0%, #171236 100%);
  top: 0;
  left: 0;
  right: 0;
  height: 166px;

  .header__burger {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    margin-right: 15px;
    display: none;
  }
  .header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 26px 160px 0 144px;

    .header__control {
      max-width: 300px;
      width: 100%;
      display: flex;
      align-items: center;

      .header__sell {
        display: block;
        text-align: center;
        text-decoration: none;
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
        color: #fff;
        text-transform: uppercase;
      }
    }
  }
  .navbar {
    max-width: 855px;
    width: 100%;
    margin: 30px auto 0;
    display: flex;

    .navbar__item {
      position: relative;

      &:nth-child(1) {
        max-width: 467px;
        width: 100%;
        margin-right: 7px;
        img {
          position: absolute;
          top: 17px;
          left: 20px;
        }
        input {
          max-width: 467px;
          width: 100%;
          padding: 0 0 0 50px;
          box-sizing: border-box;
          background: #ffffff;
          border-radius: 4px;
          outline: none;
          border: none;
          height: 50px;
          font-size: 15px;
          line-height: 31px;

          &::placeholder {
            color: rgba(123, 123, 123, 0.776523);
          }
        }
      }
      &:nth-child(2) {
        max-width: 198px;
        width: 100%;
        margin-right: 7px;

        img {
          position: absolute;
          top: 17px;
          left: 15px;
        }
        input {
          max-width: 198px;
          width: 100%;
          background: #ffffff;
          box-sizing: border-box;
          padding: 0 0 0 38px;
          border-radius: 4px;
          outline: none;
          border: none;
          height: 50px;
          font-size: 15px;
          line-height: 31px;

          &::placeholder {
            color: rgba(123, 123, 123, 0.776523);
          }
        }
      }
    }
    .navbar__button {
      height: 50px;
      max-width: 176px;
      width: 100%;
      font-size: 14px;
      line-height: 31px;
      text-transform: uppercase;
      color: #ffffff;
      background: #3e3961;
      border-radius: 4px;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
}
@media (max-width: 1024px) {
  .header__inner {
    padding: 26px 50px 0 90px !important;
  }
}
@media (max-width: 768px) {
  .header__inner {
    padding: 26px 0 0 25px !important;
  }
  .navbar {
    max-width: 700px !important;
    width: 100%;
    margin: 30px auto 0;
    display: flex;

    .navbar__item {
      &:nth-child(1) {
        max-width: 400px !important;
        input {
          max-width: 400px !important;
        }
      }
      &:nth-child(2) {
        max-width: 170px !important;
        input {
          max-width: 170px !important;
        }
      }
    }
    .navbar__button {
      height: 50px;
      max-width: 150px;
    }
  }
}
@media (max-width: 425px) {
  .header {
    height: 100px !important;

    .header__burger {
      display: block;
    }
    .header__control {
      display: none !important;
    }
    .navbar {
      display: none !important;
    }
  }
}
</style>
