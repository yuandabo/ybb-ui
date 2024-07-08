<!-- docs/demo/button/demo1.vue -->
<script setup lang="ts">
// import { ref, reactive } from 'vue';
import {
  Button,
} from '@monitor/vue-ui';

</script>

<template>
  <div>
    <div class="btns">
      <Button>Button</Button>
      <Button type="primary">
        Button
      </Button>
      <Button type="success">
        Button
      </Button>
      <Button type="danger">
        Button
      </Button>
      <Button type="warning">
        Button
      </Button>
      <Button type="info">
        Button
      </Button>
    </div>
    <!-- <ConfigProvider
      class="btns"
      :theme-vars="secondLineThemeVars"
    >
      <Button plain>
        Button
      </Button>
      <Button
        type="primary"
        plain
      >
        Button
      </Button>
      <Button
        type="success"
        plain
      >
        Button
      </Button>
      <Button
        type="danger"
        plain
      >
        Button
      </Button>
      <Button
        type="warning"
        plain
      >
        Button
      </Button>
      <Button
        type="info"
        plain
      >
        Button
      </Button>
    </ConfigProvider> -->
    <div class="btns">
      <Button disabled>
        Button
      </Button>
      <Button
        type="primary"
        disabled
      >
        Button
      </Button>
      <Button
        type="success"
        disabled
      >
        Button
      </Button>
      <Button
        type="danger"
        disabled
      >
        Button
      </Button>
      <Button
        type="warning"
        disabled
      >
        Button
      </Button>
      <Button
        type="info"
        disabled
      >
        Button
      </Button>
    </div>
    <!-- <div class="btns">
      <Button @click="switchGlobalTheme">
        切换全局主题，当前：{{ currentGlobalTheme }}
      </Button>
      <Button @click="switchSecondLineTheme">
        切换第二行主题1，当前：{{ currentSecondLineTheme }}
      </Button>
    </div>
    <div>
      <i class="i-op-alert inline-block text-100px c-primary" />
      <i class="i-op-alert-marked inline-block text-60px c-success" />
    </div>
    <Input /> -->
  </div>
</template>

<style lang="scss" scoped>
.btns {
  :deep(.op-button) {
    margin-bottom: 10px;

    &:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>
