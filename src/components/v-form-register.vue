<template>
  <div>
    <form class="form">
      <span class="form__title">Register</span>
      <div class="form__input__item">
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="Example@gmail.com" />
      </div>
      <div class="form__input__item">
        <label for="name">Full name</label>
        <input type="text" id="name" placeholder="Tony Stark" />
      </div>
      <div class="form__input__item">
        <label for="password1">Password</label>
        <input type="text" id="password1" />
        <button type="button" class="form__image">
          <img src="@/assets/images/eye.svg" alt="eye" />
        </button>
      </div>
      <div class="form__input__item">
        <label for="password2">Password again</label>
        <input type="text" id="password2" />
        <button type="button" class="form__image">
          <img src="@/assets/images/eye.svg" alt="eye" />
        </button>
      </div>
      <button type="submit" class="form__submit btn--margin">Register</button>
    </form>
    <div class="message">
      <div class="message__title">
        I already have an account,
        <router-link to="/login" class="message__link">
          LOG IN
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  max-width: 425px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 42px #0000001c;
  border-radius: 7px;
  box-sizing: border-box;
  padding: 25px 0 21px;
  text-align: center;

  .form__title {
    display: inline-block;
    font-size: 22px;
    line-height: 25px;
    color: #282828;
    margin-bottom: 17px;
  }
  .form__input__item {
    max-width: 377px;
    width: 100%;
    text-align: left;
    margin: 15px auto 0;
    position: relative;

    .form__image {
      position: absolute;
      top: 40px;
      right: 19px;
      display: block;
      border: none;
      outline: none;
      cursor: pointer;
      background: none;
    }
    input {
      height: 58px;
      max-width: 377px;
      width: 100%;
      display: block;
      background: #f9fafb;
      border: 1px solid #dedee0;
      box-sizing: border-box;
      border-radius: 5px;
      outline: none;
      font-size: 16px;
      line-height: 18px;
      letter-spacing: 0.4px;
      padding: 0 45px 0 13px;

      &::placeholder {
        color: rgba(102, 102, 102, 0.466455);
      }
    }
    label {
      display: block;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #303030;
      margin-bottom: 4px;
    }
  }
  .form__submit {
    background: #349a89;
    border-radius: 5px;
    height: 58px;
    max-width: 377px;
    width: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.4px;
    color: #ffffff;
    cursor: pointer;

    &.btn--margin {
      margin-top: 32px;
    }
  }
}
.message {
  margin-top: 21px;
  background: #ffffff;
  box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
  border-radius: 7px;
  max-width: 425px;
  width: 100%;
  height: 76px;
  box-sizing: border-box;
  padding: 30px 92px;

  .message__title {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #2a2a2a;
  }
  .message__link {
    color: #349a89;
    text-decoration: none;
    text-transform: uppercase;
  }
}
@media (max-width: 425px) {
  .message {
    padding: 30px 75px !important;
  }
}
@media (max-width: 375px) {
  .message {
    padding: 30px 60px !important;
  }
  .form__submit {
    max-width: 340px !important;
  }
  .form__input__item {
    max-width: 340px !important;

    input {
      max-width: 340px !important;
    }
  }
}
@media (max-width: 320px) {
  .message {
    padding: 30px 35px !important;
  }
  .form__submit {
    max-width: 280px !important;
  }
  .form__input__item {
    max-width: 280px !important;

    input {
      max-width: 280px !important;
    }
  }
}
</style>
