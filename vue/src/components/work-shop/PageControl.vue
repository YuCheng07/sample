<script setup></script>

<template>
  <div class="page-control-container">
    <div class="page-control">
      <div class="page-control-left">
        <button class="page-control-up-btn">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="page-control-down-btn">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
      </div>
      <div class="page-control-right">
        <button class="page-control-message-btn">
          <i class="fa-regular fa-bell"></i>
        </button>
        <div class="page-control-status-btn">
          <div class="page-control-status-btn-user-icon">
            <i class="fa-regular fa-user"></i>
          </div>
          <span class="page-control-status-btn-text">登入</span>
          <div class="page-control-status-btn-arrow-icon">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="page-control-space"></div>
</template>

<style>
.page-control-container {
  width: 100%;
  position: relative;
  padding: 0 24px;
  box-sizing: border-box;
}

.page-control {
  width: calc(100% - 326px);
  padding: 16px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
  z-index: 100;
  /* background-color: black; */
}

.page-control-left {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.page-control-up-btn {
  width: 32px;
  height: 32px;
  color: white;
  border: none;
  border-radius: 50%;
  margin-right: 10px;
  background-color: rgb(9, 9, 9, 0.8);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;
}

.page-control-up-btn:hover {
  cursor: pointer;
  background-color: rgba(40, 40, 40, 0.6);
  transition: background-color 0.2s ease-in-out;
}

.page-control-down-btn {
  width: 32px;
  height: 32px;
  color: white;
  border: none;
  border-radius: 50%;
  margin-right: 10px;
  background-color: rgb(9, 9, 9, 0.8);
  font-size: 18px;
  transform: rotateZ(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;
}

.page-control-down-btn:hover {
  cursor: pointer;
  background-color: rgba(40, 40, 40, 0.6);
  transition: background-color 0.2s ease-in-out;
}

.page-control-right {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.page-control-message-btn {
  width: 32px;
  height: 32px;
  color: white;
  border: none;
  border-radius: 50%;
  margin-right: 10px;
  background-color: transparent;
  font-size: 18px;
  box-sizing: border-box;
  transition: background-color 0.2s ease-in-out;
}

.page-control-message-btn:hover {
  cursor: pointer;
  background-color: rgb(18, 18, 18, 0.5);
  transition: background-color 0.2s ease-in-out;
}

.page-control-status-btn {
  max-width: 500px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 92px;
  background-color: rgb(9, 9, 9, 0.8);
  box-sizing: border-box;
  padding: 0 4px;
  transition: background-color 0.2s ease-in-out;
}

.page-control-status-btn:hover {
  background-color: rgba(40, 40, 40, 0.6);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.page-control-status-btn-user-icon {
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  font-size: 14px;
  background-color: black;
  border-radius: 50%;
  color: white;
}

.page-control-status-btn-text {
  min-width: 24px;
  text-align: center;
  font-size: 14px;
  color: white;
}

.page-control-status-btn-arrow-icon {
  width: 24px;
  height: 24px;
  transform: rotateZ(-90deg);
  text-align: center;
  line-height: 24px;
  font-size: 12px;
  color: white;
}

.page-control-space {
  width: 100%;
  height: 64px;
}
</style>

<style src="@/assets/css/work-shop/page-control-rwd.css" scoped></style>
