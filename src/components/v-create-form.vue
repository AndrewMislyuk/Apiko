<template>
  <form class="form">
    <span class="form__title">Add product</span>
    <div class="form__input__item">
      <label for="title">Title <span>*</span></label>
      <input
        type="text"
        id="title"
        placeholder="For example: Iron man suit"
        required
      />
    </div>
    <div class="form__input__item">
      <label for="location">Location <span>*</span></label>
      <input
        type="text"
        id="location"
        placeholder="For example: Los Angeles, CA"
        required
      />
    </div>
    <div class="form__input__item">
      <label for="description">Description</label>
      <textarea
        id="description"
        placeholder="For example: Iron man suit"
      ></textarea>
    </div>
    <div class="form__input__item">
      <label for="photos"
        >Photos
        <div class="form__load-photo"></div>
      </label>
      <input type="text" class="form__fake-photo" readonly />
      <input type="file" id="photos" class="form__photo" />
    </div>
    <div class="form__input__item">
      <label for="price" class="label--price">Price</label>
      <input
        type="text"
        id="price"
        placeholder="For example: Los Angeles, CA"
      />
    </div>
    <button type="submit" class="form__submit">Submit</button>
  </form>
</template>

<style lang="scss" scoped>
.form {
  height: 874px;
  max-width: 1136px;
  width: 100%;
  margin: 111px auto 95px;
  background: #ffffff;
  box-shadow: 0px 2px 42px #0000001c;
  border-radius: 7px;
  text-align: center;

  .form__title {
    display: inline-block;
    font-size: 22px;
    line-height: 25px;
    color: #282828;
    margin: 36px 0 17px;
  }
  .form__input__item {
    max-width: 664px;
    width: 100%;
    text-align: left;
    margin: 24px auto 0;
    position: relative;

    .form__load-photo {
      background: #e4e4e4;
      border-radius: 4px;
      height: 92px;
      width: 92px;
      cursor: pointer;
      position: relative;
      margin: 25px 0 0 16px;
      z-index: 1000;

      &::after {
        content: "";
        position: absolute;
        top: 46px;
        left: 28px;
        height: 4px;
        width: 38px;
        background: #349a89;
        border-radius: 4px;
        transform: rotate(-90deg);
      }
      &::before {
        content: "";
        position: absolute;
        top: 46px;
        left: 28px;
        height: 4px;
        width: 38px;
        background: #349a89;
        border-radius: 4px;
      }
    }
    .form__photo {
      display: none;
    }
    .form__fake-photo {
      cursor: default;
      height: 124px;
      position: absolute;
      bottom: -15px;
      z-index: 1;
    }
    input {
      height: 58px;
      max-width: 664px;
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
      padding: 0 79px 0 22px;

      &::placeholder {
        color: rgba(102, 102, 102, 0.466455);
      }
    }
    textarea {
      height: 183px;
      max-width: 664px;
      width: 100%;
      display: block;
      background: #f9fafb;
      border: 1px solid #dedee0;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 19px 79px 0 22px;
      outline: none;
      resize: none;
      font-size: 16px;
      line-height: 18px;
      letter-spacing: 0.4px;
      &::placeholder {
        color: rgba(102, 102, 102, 0.466455);
      }
    }
    .label--price {
      padding-top: 12px;
    }
    label {
      display: block;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #303030;
      margin-bottom: 4px;
      span {
        color: red;
      }
    }
  }
  .form__submit {
    background: #349a89;
    border-radius: 5px;
    height: 58px;
    max-width: 377px;
    width: 100%;
    margin-top: 25px;
    border: none;
    outline: none;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.4px;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
  }
}
@media (max-width: 425px) {
  .form__input__item {
    max-width: 375px !important;

    input {
      max-width: 375px !important;
    }
    textarea {
      max-width: 375px !important;
    }
  }
}
@media (max-width: 375px) {
  .form__input__item {
    max-width: 340px !important;

    input {
      max-width: 340px !important;
    }
    textarea {
      max-width: 340px !important;
      padding: 19px 50px 0 22px !important;
    }
  }
  .form__submit {
    max-width: 340px !important;
  }
}
@media (max-width: 320px) {
  .form__input__item {
    max-width: 280px !important;

    input {
      max-width: 280px !important;
      padding: 2px 5px 0 22px !important;
    }
    textarea {
      max-width: 280px !important;
      padding: 19px 5px 0 22px !important;
    }
  }
  .form__submit {
    max-width: 280px !important;
  }
}
</style>
