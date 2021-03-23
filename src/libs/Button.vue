<template>
  <button class="hao-button" :class="classNames" :disabled="disabled">
    <span v-if="loading" class="hao-loading"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { type, size, level } = props;
    const classNames = computed(() => ({
      [`hao-type-${type}`]: type,
      [`hao-size-${size}`]: size,
      [`hao-level-${level}`]: level,
    }));
    return { classNames };
  },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$red: #ff4d4f;
$grey: grey;
$radius: 4px;
.hao-button {
  height: $h;
  padding: 0 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: $color;
  cursor: pointer;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out($color: black, $amount: 0.95);
  transition: all 0.4s;
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  & + & {
    margin-left: 8px;
  }
}
.hao-button {
  &.hao-type-link {
    border-color: transparent;
    text-decoration: underline;
    background: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.hao-type-text {
    border: none;
    background: transparent;
    box-shadow: none;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.hao-size-small {
    font-size: 12px;
    height: 24px;
  }
  &.hao-size-big {
    font-size: 24px;
    height: 40px;
  }
  &.hao-level-primary {
    color: #fff;
    background: #1890ff;
    &:hover,
    &:focus {
      background: lighten($blue, 10%);
      color: #fff;
    }
    &.hao-type-link {
      color: #000;
      background: transparent;
    }
    &.hao-type-text {
      color: #000;
      background: transparent;
      &:hover,
      &:focus {
        background: darken(white, 5%);
      }
    }
  }
  &.hao-level-danger {
    color: #fff;
    background: $red;
    &:hover,
    &:focus {
      background: lighten($red, 10%);
      color: #fff;
    }
    &.hao-type-link {
      color: $red;
      background: transparent;
      &:focus {
        color: lighten($color: $red, $amount: 20%);
      }
    }
    &.hao-type-text {
      color: $red;
      background: transparent;
      &:hover,
      &:focus {
        background: darken(white, 5%);
        color: lighten($color: $red, $amount: 20%);
      }
    }
  }
}
.hao-button {
  &.hao-type-button {
    &[disabled] {
      color: $grey;
      background: #ccc;
      cursor: not-allowed;
    }
  }
  &.hao-type-link,
  &.hao-type-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
    &:hover {
      background: transparent;
    }
  }
}
.hao-button {
  .hao-loading {
    display: inline-block;
    margin-right: 4px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border-style: solid;
    border-width: 4px;
    border-color: $blue $blue $blue transparent;
    animation: hao-spin 1s infinite linear;
    @keyframes hao-spin {
      0%{transform: rotate(0deg);}
      100%{transform: rotate(360deg);}
    }
  }
}
</style>