<template>
  <header-component />
  <main class="main">
    <sidebar-component />
    <section class="board">
      <div class="wrapper">
        <div class="wrapper-left">
          <bot-component @marsBotDetail="getClickedEvent('botDetails')" @marsBotAdd="getClickedEvent('bot-add')"/>
          <div class="bottom">
            <products-component @addProduct="getClickedEvent('add-product')"/>
            <news-component @addNewsComponent="getClickedEvent('bot-add')"/>
          </div>
        </div>
        <div class="wrapper-right">
          <div class="heading">
              <label for="branch">Branch</label>
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
          </div>
          <!-- <social-component /> -->
          <component :is="activeComponent + '-component'" @marsBot="getClickedEvent('social')" /> 
        </div>
      </div>
    </section>
    
  </main>
</template>

<script>
export default {
  data() {
    return {
      activeBranch: 2,
      allBranches: [
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
      ],
      activeComponent: 'social'
    };
  },
  methods: {
    getClickedEvent(val) {
      this.activeComponent = val
    }
  }
};
</script>

<style>
.main {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  margin-top: 105px;
}

.board {
  margin-left: 84px;
  padding: 30px 55px;
  width: 100%;
}

.wrapper {
  display: flex;
  justify-content: center;
  gap: 3%;
}

/* .wrapper-left {
  width: 60%; 
} */

.heading {
  padding-bottom: 42px;

}

.el-select-dropdown__item {
  font-family: 'Gilroy', sans-serif;
}
.wrapper-left {
  width: 100%;
  max-width: 70%;
}
.el-input__wrapper {
  outline: none !important;
  padding: unset !important;
  
}

.el-input__inner {
  max-width: 80px !important;
  max-height: 19px;
  padding: 15px 0 !important;
  width: 100%;
  margin: 0 0 0 13px !important;
}

.el-input__inner::placeholder {
  font-weight: 500 !important;
  font-family: "Gilroy", sans-serif;
}


.el-select__icon {
  color: #E3391B !important;
  width: 5px;
  height: 10px;
  font-weight: 700;
}

.heading label {
  color: #17233b;
  font-size: 20px;
  font-weight: 700;
  margin-right: 4px;
  border-right: 1px #E3391B solid;
  padding: 0 10px;
}

.heading .el-input__wrapper {
  box-shadow: none;
}

.heading .el-input__wrapper:hover {
  box-shadow: none;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 72px;
  margin-top: 20px;
}
</style>