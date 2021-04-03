<template>
  <section>
    <h2>示例一</h2>
    <div class="inner-block">
      <Button @click="showModal">Modal</Button>
      <Modal
        v-model:visible="visible"
        :closeOnClickOverlay="true"
        :success="f1"
        :cancel="f2"
      ></Modal>
    </div>
  </section>
</template>
<script>
import Modal from "../../libs/Modal.vue";
import Button from "../../libs/Button.vue";
import { ref } from "vue";
export default {
  name: "ModalDemo",
  components: {
    Modal,
    Button,
  },
  setup() {
    const visible = ref(false);
    const showModal = () => {
      visible.value = true;
    };
    const closeModal = () => {
      visible = false;
    };
    const f1 = () => {
      console.log("ok clicked", "retrun false don't close modal");
      return false;
    };
    const f2 = () => {
      console.log("cancel clicked", "close modal");
    };
    return {
      visible,
      showModal,
      closeModal,
      f1,
      f2,
    };
  },
};
</script>