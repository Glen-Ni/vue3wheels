<template>
  <div>
    <section>
      <h2>示例一</h2>
      <div class="inner-block">
        <Button>按钮</Button>
        <Button type="button">普通按钮</Button>
        <Button type="link">link按钮</Button>
        <Button type="text">text按钮</Button>
      </div>
    </section>
    <section>
      <h2>示例二</h2>
      <div class="inner-block">
        <Button size="big">大大大</Button>
        <Button size="normal">中中中</Button>
        <Button size="small">小小小</Button>
      </div>
      <div class="inner-block">
        <Button size="big" type="link">大大大</Button>
        <Button size="normal" type="link">中中中</Button>
        <Button size="small" type="link">小小小</Button>
      </div>
      <div class="inner-block">
        <Button size="big" type="text">大大大</Button>
        <Button size="normal" type="text">中中中</Button>
        <Button size="small" type="text">小小小</Button>
      </div>
    </section>
    <section>
      <h2>示例三</h2>
      <div  class="inner-block">
        <Button level="primary">主要按钮</Button>
        <Button>普通按钮</Button>
        <Button level="danger">危险按钮</Button>
      </div>
      <div  class="inner-block">
        <Button type="link" level="primary">主要链接按钮</Button>
        <Button type="link">普通链接按钮</Button>
        <Button type="link" level="danger">危险链接按钮</Button>
      </div>
      <div  class="inner-block">
        <Button type="text" level="primary">主要文字按钮</Button>
        <Button type="text">普通文字按钮</Button>
        <Button type="text" level="danger">危险文字按钮</Button>
      </div>
    </section>
    <section>
      <h2>示例四</h2>
      <div  class="inner-block">
        <Button type="button" disabled>普通按钮disabled</Button>
        <Button type="link" disabled>link按钮disabled</Button>
        <Button type="text" disabled>text按钮disabled</Button>
      </div>
    </section>
    <section>
      <h2>示例五</h2>
      <div  class="inner-block">
        <Button type="button" loading>加载中...</Button>
      </div>
    </section>
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