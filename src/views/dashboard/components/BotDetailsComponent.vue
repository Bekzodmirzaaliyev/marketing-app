<template>
  <section class="bot-details">
    <img src="../../../assets/botDetail.png" alt="" />
    <p>
      😋 «Mars IT School»da mazali ziyofat! 🍕 Kelayotgan yakshanba 23-iyul kuni
      barcha o'quvchilarimizni «Pizza time» ziyofatiga taklif qilib qolamiz. 😉
      Dam olish kuningizni mazali pitsa bilan o'tkazing. 📆 O'tkazilish kuni:
      23-iyul/yakshanba ⏰ Vaqti: 11:00 📍 Manzil: Tinchlik filiali
      @Mars_tinchlik) 👉🏻Joylar soni cheklangan 👏🏻Eventga yozilishga ulgurib
      qoling «Mars IT School» — bu kelajak! 📞 78-777-77-57
    </p>

    <div class="bot-details-btns">
      <button class="cancel">Cancel</button>
      <button class="done" @click="doneBtnClick()">Done</button>
      <button class="send">Send</button>
      <div class="block">
        <label class="custom-label" for="datePicker" @click="openDatePicker">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
              stroke="#E3391B"
              stroke-width="1"
              stroke-linecap="round"
            />
          </svg>
        </label>

        <el-date-picker
          v-model="value1"
          type="datetime"
          id="datePicker"
          :default-value="new Date()"
          style="width: 0; height: 0"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  emits: ["marsBot"],
  setup(_, { emit }) {
    const doneBtnClick = () => {
      emit("marsBot");
    };
    return {
      doneBtnClick,
    };
  },
};
</script>
<style>
.bot-details {
  max-width: 100%;
  color: #000;
  width: 400px;
  padding: 28px 38px;
  border-radius: 20px;
  border: 0.2px #a5a9bc solid;
}

.bot-details img {
  width: 100%;
}

.bot-details p {
  width: 285px;
}

.bot-details-btns {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;

}

.bot-details button {
  padding: 7px 0;
  border: none;
  border-radius: 8px;
  text-align: center;
  font-size: 12px;
  font-family: Gilroy;
  font-weight: 400;
  min-width: 65px;
}

.cancel {
  background-color: #e3391b;
  color: #fff;
}

.done {
  background-color: #d9d9d9;
  color: #17233b;
}

.send {
  background-color: #17233b;
  color: #fff;
}

.bot-details .block {
  width: 100%;
  position: relative;
  overflow: hidden;
  width: 24px;
  height: 24px;
  margin-left: 20px;
}

.bot-details .block label {
  position: absolute;
  top: 50%;
  transform: translate(-0%, -50%);
}
</style>