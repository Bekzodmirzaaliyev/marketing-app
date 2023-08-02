<template>
  <section class="add-component">
    <div class="view-card">
      <div class="img-upload">
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
      </div>
      <p class="p-name">Product name</p>
      <div class="coins">
        <img src="../../../assets/coin.svg" alt="" />
        <p>Coins</p>
      </div>
      <p class="p-ostatok">Остаток</p>
    </div>
    <form action="">
      <label for="nomi">Maxsulot Nomi</label>
      <input type="text" placeholder="Nomi" />
      <label for="qiymat">Qiymati</label>
      <input type="text" placeholder="Qiymati" />
      <label for="soni">Maxsulot Soni</label>
      <input type="text" placeholder="Soni">
      <label for="filial">Filiali</label>
      <el-select
        v-model="activeBranch"
        class="m-2"
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
    </form>
    <div class="add-product-footer">
      <el-switch
        v-model="value2"
        class="ml-2"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
      />

      <button>Add</button>
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

    return {
      handleAvatarSuccess,
      beforeAvatarUpload,
      value,
      allBranches,
      Plus,
      doneBtnClick,
    };
  },
};
</script>

<style>
.add-component {
  max-width: 100%;
  color: #000;
  width: 400px;
  border-radius: 20px;
  border: 0.2px #a5a9bc solid;
  padding: 15px 23px;
}

.view-card {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 22px 50px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}

.img-upload {
  width: 202px;
  height: 154px;
  border: 0.2px #a5a9bc solid;
  margin: 0 auto;
  border-radius: 10px;
  border: 0.5px #c6cad3 solid;
}

.p-name {
  color: #a59c9c;
  font-size: 20px;
  font-family: Gilroy;
  font-weight: 600;
  margin-top: 21px;
}

.coins {
  display: flex;
  align-items: center;
  color: #a59c9c;
  padding-bottom: 12px;
}

.p-ostatok {
  color: #a59c9c;
  font-size: 14px;
  font-family: Gilroy;
  font-weight: 400;
}

form {
  display: flex;
  flex-direction: column;
  padding-top: 34px;
}

form label {
  font-size: 16px;
  font-family: Inter;
  font-weight: 600;
}

form input {
  padding: 6px 20px;
  border: 0.2px #c6cad3 solid;
  border-radius: 6px;
  outline: none;
  color: #d9d9d9;
}

form label,
input {
  margin: 5px 10px 5px;
}

form .el-select {
  margin: 5px 10px;
}

.add-product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
}

.el-upload {
  max-height: 150px !important;
}

.add-product-footer button {
  border: none;
  padding: 2px 24px;
  border-radius: 8px;
  cursor: pointer;
  border: 0.25px #E3391B solid;
  background-color: #fff;
  font-size: 16px;
  font-family: Gilroy;
  font-weight: 400;
}

.bot-add-btns .cancel {
  margin-right: 10px;
}

.form .el-input__wrapper {
  background-color: #f8f8f8;
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
  background-size: 76px;
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

.bot-add-footer .block {
  width: 30px;
}
</style>