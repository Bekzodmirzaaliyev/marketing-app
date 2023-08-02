<template>
  <section class="socialmedia">
    <h1>Social Media</h1>
    <div class="social-cards">
      <div class="social-card">
        <div class="social-heading">
          <img src="../../../assets/instagram.png" alt="" />
          <p>Instagram</p>
        </div>
        <div class="social-icons">
          <div class="icon">
            <img src="../../../assets/followers.png" alt="" />
            <p>24,648</p>
          </div>
          <div class="icon">
            <img src="../../../assets/like.png" alt="" />
            <p>786</p>
          </div>
          <div class="icon">
            <img src="../../../assets/following.png" alt="" />
            <p>786</p>
          </div>
        </div>
      </div>
      <div class="social-card">
        <div class="social-heading">
          <img src="../../../assets/telegram.png" alt="" />
          <p>Telegram</p>
        </div>
        <div class="social-icons">
          <div class="icon">
            <img src="../../../assets/followers.png" alt="" />
            <p>24,648</p>
          </div>
          <div class="icon">
            <img src="../../../assets/comments.png" alt="" />
            <p>786</p>
          </div>
          <div class="icon">
            <img src="../../../assets/following.png" alt="" />
            <p>786</p>
          </div>
        </div>
      </div>
      <div class="social-card">
        <div class="social-heading">
          <img src="../../../assets/bot.png" alt="" />
          <p>Telegram Bot</p>
        </div>
        <div class="social-icons">
          <div class="icon">
            <img src="../../../assets/followers.png" alt="" />
            <p>24,648</p>
          </div>
          <div class="icon">
            <img src="../../../assets/views.png" alt="" />
            <p>786</p>
          </div>
          <div class="icon">
            <img src="../../../assets/following.png" alt="" />
            <p>786</p>
          </div>
        </div>
      </div>
    </div>
    <div class="calendar">
      <VCalendar class="calendar-v" transparent borderless />
    </div>
  </section>
</template>

<script setup>
// import { ref } from 'vue';
</script>

<style>
.socialmedia {
  background-color: #17233b;
  color: #fff;
  width: 100%;
  padding: 28px 38px;
  border-radius: 20px;
}

.socialmedia h1 {
  font-size: 30px;
  font-family: Inter;
  font-weight: 500;
}

.social-cards {
  margin-right: 41px;
}

.social-card {
  margin-bottom: 60px;
}
.social-heading {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 30px 0;
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-family: Inter;
  font-weight: 300;
}

.calendar-v {
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
}

.calendar-v .vc-arrow {
  display: none;
}
</style>