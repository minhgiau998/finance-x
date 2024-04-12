<template>
  <div class="flex flex-col justify-center py-20 overflow-hidden bg-hero">
    <div class="px-[30px] 2xl:px-96">
      <div class="text-primary text-xl font-semibold">Our Services</div>
      <div class="mt-4 flex flex-col lg:flex-row justify-between lg:items-center">
        <div class="text-primary text-6xl lg:text-7xl font-bold font-satoshi leading-[72px] w-full lg:w-1/2 2xl:w-2/3">Global businesses love FinanceX</div>
        <div class="flex flex-row space-x-5 mt-5 lg:mt-0">
          <BaseButton
            color="outline"
            class="w-14 h-14 flex items-center justify-center border-primary border-solid rounded-full"
            @click="slidePrev"
          >
            <i class="fa-solid fa-angle-left fa-lg"></i>
          </BaseButton>
          <BaseButton
            color="outline"
            class="w-14 h-14 flex items-center justify-center border-primary border-solid rounded-full"
            @click="slideNext"
          >
            <i class="fa-solid fa-angle-right fa-lg"></i>
          </BaseButton>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <client-only>
        <swiper ref="homeFeedback" class="swiper" :options="swiperOptions">
          <swiper-slide v-for="(item, index) in 10" :key="index">
            <HomeFeedbackCard></HomeFeedbackCard>
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          '640': {
            slidesPerView: 1,
            spaceBetween: 40
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 60
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 80
          },
        },
      },
    }
  },
  methods: {
    slidePrev() {
      this.$refs.homeFeedback.$swiper.slidePrev()
    },
    slideNext() {
      this.$refs.homeFeedback.$swiper.slideNext()
    },
  },
}
</script>

<style scoped>
.bg-hero {
  background: url('~assets/images/background-feedback.png') no-repeat center center
    fixed;
  background-size: cover;
  background-color: var(--success-color);
}
</style>
