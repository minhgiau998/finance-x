<template>
  <div class="bg-primary">
    <div class="flex items-center justify-center pt-40 overflow-hidden 2xl:px-96 px-[30px]">
      <div class="flex flex-col w-full max-w-full lg:flex-row lg:space-x-20 space-x-0 justify-center items-center">
        <div class="w-full lg:w-1/3">
          <div v-scroll-reveal="{ origin: 'left', distance: '60px', delay: 300 }" class="text-success text-xl font-semibold">Benefits</div>
          <div v-scroll-reveal="{ origin: 'left', distance: '60px', delay: 400 }" class="mt-3">
            <span class="text-5xl font-bold text-white leading-[60px] font-satoshi">We have many users all over the </span>
            <span class="text-5xl font-bold text-success leading-[60px] font-satoshi">world</span>
          </div>
          <div v-scroll-reveal="{ origin: 'left', distance: '60px', delay: 500 }" class="mt-10 text-white text-opacity-70 text-lg font-normal leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</div>
          <div class="mt-10 flex flex-row justify-between">
            <div class="h-[62px] relative">
              <div>
                <countTo :start-val="0" :end-val="10" class="text-white text-[28px] font-black font-satoshi leading-7 -mr-2"></countTo>
                <span class="text-white text-[28px] font-black font-satoshi leading-7">M</span>
                <span class="text-success text-[28px] font-black font-satoshi leading-7">+</span>
              </div>
              <div class="text-success text-sm font-normal leading-[14px] mt-4">User active</div>
            </div>
            <div class="h-[62px] relative">
              <div>
                <countTo :start-val="0" :end-val="30" class="text-white text-[28px] font-black font-satoshi leading-7"></countTo>
                <span class="text-success text-[28px] font-black font-satoshi leading-7">+</span>
              </div>
              <div class="text-success text-sm font-normal font-['Rubik'] leading-[14px] mt-4">Country</div>
            </div>
            <div class="h-[62px] relative">
              <div>
                <span class="text-white text-[28px] font-black font-satoshi leading-7">$</span>
                <countTo :start-val="0" :end-val="50" class="text-white text-[28px] font-black font-satoshi leading-7 -mr-2 -ml-1"></countTo>
                <span class="text-white text-[28px] font-black font-satoshi leading-7">M</span>
                <span class="text-success text-[28px] font-black font-satoshi leading-7">+</span>
              </div>
              <div class="text-success text-sm font-normal font-['Rubik'] leading-[14px] mt-4">Transaction</div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-2/3 lg:px-0 mt-20 lg:mt-0 flex flex-col lg:flex-row">
          <img v-scroll-reveal="{ origin: 'right', distance: '60px', delay: 600 }" src="~assets/svg/map.svg" class="w-full" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';

export default {
  components: {
    countTo
  },
}
</script>

<style lang="scss" scoped>

</style>
