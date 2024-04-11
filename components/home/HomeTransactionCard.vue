<template>
  <div class="border-solid border-[1px] border-[#2E2E2E] lg:w-[390px] w-full py-14 px-10 home-transaction-card relative">
    <div class="w-[53px] h-[53px] bg-white flex justify-center items-center icon">
      <img :src="require(`~/assets/svg/${icon}.svg`)" alt=""/>
    </div>
    <div class="mt-6 text-2xl font-medium text-white font-satoshi">{{ title }}</div>
    <div class="mt-6 text-base font-normal leading-normal text-white text-opacity-70">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
    </div>
    <BaseButton color="transparent" class="mt-6">
      <div class="text-white text-base font-bold font-satoshi">Learn more</div>
      <img src="~assets/svg/arrow-right-white.svg" class="ml-3">
    </BaseButton>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
}
</script>

<style scoped>
.home-transaction-card:hover {
  cursor: pointer;
  background-color: #2E2E2E;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}

.home-transaction-card:hover .icon {
  background-color: var(--success-color);
}
</style>
