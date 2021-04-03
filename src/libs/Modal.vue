<template>
  <template v-if="visible">
    <div class="hao-modal-overlay" @click="onClickOverlay"></div>
    <div class="hao-modal-wrapper">
      <div class="hao-modal">
        <header>
          {{title}}
          <div class="hao-modal-close" @click="close"></div>
        </header>
        <main>
          <slot/>
        </main>
        <footer>
          <Button level="primary" @click="onSuccess">确定</Button>
          <Button @click="onCancel">取消</Button>
        </footer>
      </div>
    </div>
  </template>
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
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    success: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
    title: {
      type: String,
      default: '提示'
    }
  },
  components: {
    Button,
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const onClickOverlay = () => {
      const { closeOnClickOverlay } = props;
      if (!closeOnClickOverlay) return;
      context.emit("update:visible", false);
    };
    const onSuccess = () => {
      if (props.success?.() !== false) {
        close();
      }
    };
    const onCancel = () => {
      // if (props.cancel?.() !== false) {
      //   close();
      // }
      context.emit('cancel')
      close();
    };
    return {
      close,
      onClickOverlay,
      onSuccess,
      onCancel
    };
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
  transform: translate(-50%, -50%);
}
.hao-modal {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 10px fade-out($color: #000000, $amount: 0.5);
  min-width: 16em;
  > header {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $border-color;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
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
      content: "";
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