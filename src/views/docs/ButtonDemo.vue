<template>
  <div>
    <Button
      @click="handleClick"
      size="small"
    >啊啊</Button>
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