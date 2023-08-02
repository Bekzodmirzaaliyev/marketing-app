<template>
  <section class="botAdd">
    <el-upload
      class="avatar-uploader"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
    <form class="form">
      <label for="mavzu">Mavzu:</label>
      <input type="text" placeholder="Nomi" />
      <label for="">Filial:</label>
      <el-select
        v-model="activeBranch"
        class=""
        placeholder="Select"
        size="large"
      >
        <el-option
          v-for="item in allBranches"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <label for="message">Text</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Ma'lumot"
      ></textarea>
    </form>

    <div class="bot-add-footer">
      <div class="bot-add-btns">
        <button class="cancel">Cancel</button>
        <button class="done" @click="doneBtnClick()">Done</button>
      </div>
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
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";

export default {
    emits: ["marsBot"],
  setup(_, { emit }) {
    const imageUrl = ref("");
    const value = ref("");

    const doneBtnClick = () => {
      emit("marsBot");
    };

    const handleAvatarSuccess = (response, uploadFile) => {
      imageUrl.value = URL.createObjectURL(uploadFile.raw);
    };
    const beforeAvatarUpload = (rawFile) => {
      if (rawFile.type !== "image/jpeg") {
        ElMessage.error("Avatar picture must be JPG format!");
        return false;
      } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error("Avatar picture size can not exceed 2MB!");
        return false;
      }
      return true;
    };

    const allBranches = [
      {
        label: "Tinchlik",
        value: 1,
      },
      {
        label: "Yunusobod",
        value: 2,
      },
      {
        label: "Qutbiniso",
        value: 3,
      },
      {
        label: "Parlament",
        value: 4,
      },
    ];

    return { handleAvatarSuccess, beforeAvatarUpload, value, allBranches, Plus, doneBtnClick };
  },
};
</script>

<style>
.botAdd {
  max-width: 100%;
  color: #000;
  width: 400px;
  border-radius: 20px;
  border: 0.2px #a5a9bc solid;
}

.form {
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  padding: 20px;
}

.form label {
  font-size: 16px;
  font-family: Inter;
  font-weight: 600;
}

.form input {
  margin: unset;
  border-radius: 6px;
  outline: none;
  color: #D9D9D9;
}


.form textarea {
  border: 1px solid #a5a9bc;
  background: transparent;
  outline: none;
  padding: 10px;
  border-radius: 5px;
}

.bot-add-footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f8f8f8;
    padding: 14px 18px;
}

.bot-add-btns button {
  border: none;
  padding: 7px 23px;
  border-radius: 8px;
  cursor: pointer;
}

.bot-add-btns .cancel {
  margin-right: 10px;
}

.form .el-input__wrapper {
  background-color: #f8f8f8;
  justify-content: space-between;
  padding: 0 10px !important;
}

.el-input-inner {
  border: none;
  background: transparent;
}

.avatar-uploader .el-upload {
  border: none;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../../assets/add-photo.png");
  background-repeat: no-repeat;
  background-position: center;
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  height: 242px;
  text-align: center;
}


.botAdd .block {
  width: 100%;
  position: relative;
  overflow: hidden;
  width: 24px;
  height: 24px;
  margin-left: 20px;
}

.botAdd .block label {
  position: absolute;
  top: 50%;
  transform: translate(-0%, -50%);
}
</style>