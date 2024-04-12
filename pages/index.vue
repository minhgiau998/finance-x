<template>
  <div>
    <fade-transition>
      <div>
        <HomeHero></HomeHero>
        <HomePartner></HomePartner>
        <HomeService></HomeService>
        <HomeMap></HomeMap>
        <HomeTransaction></HomeTransaction>
        <HomeFeedback></HomeFeedback>
        <HomeContact></HomeContact>
      </div>
    </fade-transition>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'main',
}
</script>
