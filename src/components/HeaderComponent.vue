<template>
    <header class="header">
        <div class="logo">
                <img src="../assets/mars-logo.24e25048.png" alt="">
            </div>

            <div class="header-right">
                <div v-bind:class="'circle'"></div>
                <p>Bekzod Mirzaaliyev</p>
                <a href="#" class="logout"><img src="../assets/logout.png" alt=""></a>
            </div>
        </header>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 85px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999;
    font-size: 20px;
    background: #fff;
}

.logo img {
    width: 146px;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 10px;
}

.circle {
    width: 30px;
    height: 30px;
    background-color: #E3391B;
    border-radius: 50%;
}

.header a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

.logout {
    padding-left: 30px;
}
</style>