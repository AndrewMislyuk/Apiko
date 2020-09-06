<template>
  <div>
    <form class="form">
      <span class="form__title">Login</span>
      <div class="form__input__item">
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="Example@gmail.com" />
      </div>
      <div class="form__input__item">
        <label for="password">Password</label>
        <input type="text" id="password" />
        <button type="button" class="form__image">
          <img src="@/assets/images/eye.svg" alt="eye" />
        </button>
      </div>
      <router-link to="/" class="form__reset__password">
        Don’t remember password?
      </router-link>
      <button type="submit" class="form__submit">Continue</button>
    </form>
    <div class="message">
      <div class="message__title">
        I have no account,
        <router-link to="/register" class="message__link">
          REGISTER NOW
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
  .form__reset__password {
    display: block;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.4px;
    color: #8c8c8c;
    text-decoration: none;
    margin: 5px 23px 16px 220px;
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
  .form__reset__password {
    margin: 5px 23px 16px 200px !important;
  }
  .message {
    padding: 30px 80px;
  }
}
@media (max-width: 414px) {
  .message {
    padding: 30px 75px;
  }
}
@media (max-width: 375px) {
  .form__reset__password {
    margin: 5px 23px 16px 150px !important;
  }
  .message {
    padding: 30px 55px;
  }
  .form__input__item {
    max-width: 340px !important;
    input {
      max-width: 340px !important;
    }
  }
  .form__submit {
    max-width: 340px !important;
  }
}
@media (max-width: 320px) {
  .form__reset__password {
    margin: 5px 23px 16px 99px !important;
  }
  .message {
    padding: 30px;
  }
  .form__input__item {
    max-width: 280px !important;
    input {
      max-width: 280px !important;
    }
  }
  .form__submit {
    max-width: 280px !important;
  }
}
</style>
