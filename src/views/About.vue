<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button
      type="button"
      class="btn btn-secondary"
      data-toggle="tooltip"
      data-placement="top"
      title="Tooltip on top"
    >
      Tooltip on top
    </button>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "About",
  props: {
    msg: String,
  },
  mounted() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  },
};
</script>