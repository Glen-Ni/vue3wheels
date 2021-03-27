<template>
  <section>
    <h2>示例一</h2>
    <div class="inner-block">
      <Button @click="showModal">Modal</Button>
      <Modal :visible="visible"></Modal>
    </div>
  </section>
</template>
<script>
import Modal from "../../libs/Modal.vue";
import Button from "../../libs/Button.vue";
import { ref } from 'vue';
export default {
  name: "ModalDemo",
  components: {
    Modal,
    Button,
  },
  setup(){
    const visible = ref(false)
    const showModal = !visible;
    return {showModal}
  }
};
</script>