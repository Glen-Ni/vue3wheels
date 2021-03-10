<template>
  <div>
    <Button>按钮</Button>
    <Button type="button">按钮</Button>
    <Button type="link">按钮</Button>
    <Button type="text">按钮</Button>
  </div>
</template>
<script lang="ts">
import Button from "../../libs/Button.vue";
export default {
  name: "ButtonDemo",
  components: {
    Button,
  },
  setup() {
    const handleClick = () => {
      console.log("hi");
    };
    return { handleClick };
  },
};
</script>