<template>
  <div class="border-solid border-[1px] border-[#2E2E2E] h-[454px] w-full lg:w-[352px] py-14 px-10 home-service-card relative">
    <img src="~assets/svg/line.svg" alt="">
    <div class="mt-8 text-2xl font-medium text-white font-satoshi">Checking accounts</div>
    <div class="mt-8 text-base font-normal leading-normal text-white text-opacity-70 mb-[53px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
    </div>
    <BaseButton class="w-[53px] h-[53px] absolute bottom-[56px] right-[40px] text-primary bg-light cursor-pointer">
      <img src="~assets/svg/arrow-top-right.svg">
    </BaseButton>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.home-service-card:hover {
  cursor: pointer;
  background-color: #2E2E2E;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}

.home-service-card:hover button {
  background-color: var(--success-color);
}
</style>
