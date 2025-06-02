
<template>
  <div class="service box-border shadower">
    <div class="icon">
      <i :class="'fas fa-' + service.icon"></i>
    </div>
    <h5>{{service.title}}</h5>
    <p>{{service.text}}</p>
  </div>
</template>

<script>
export default {
  name: "ServiceComponent",
  props: ["service"]
};
</script>