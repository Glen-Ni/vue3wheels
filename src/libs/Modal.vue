<template>
  <div class="hao-modal-overlay"></div>
  <div class="hao-modal-wrapper">
    <div class="hao-modal">
      <header>
        标题
        <div class="hao-modal-close"></div>
      </header>
      <main>
        <p>内容aaaaaaaaaaaaa</p>
        <p>内容aaaaaaaaaaaaa</p>
      </main>
      <footer>
        <Button level="primary">确定</Button>
        <Button>取消</Button>
      </footer>
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  name: "Modal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Button,
  },
};
</script>
<style lang="scss">
$border-color: #d9d9d9;
.hao-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: fade_out($color: #000000, $amount: 0.5);
}
.hao-modal-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 11;
  transform: translateX(-50%);
  transform: translateY(-50%);
}
.hao-modal {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 10px fade-out($color: #000000, $amount: 0.5);
  min-width: 16em;
  >header {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $border-color;
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }

  }
}
</style>