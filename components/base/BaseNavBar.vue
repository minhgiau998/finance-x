<template>
  <nav
    class="fixed z-20 w-full"
    :class="{
      'bg-transparent': view.atTopOfPage,
      'bg-primary transition duration-500 ease shadow': !view.atTopOfPage,
      'bg-primary': !isOpened,
    }"
  >
    <!-- Base Navigation Bar For Mobile -->
    <div class="block lg:hidden">
      <div
        class="flex flex-row items-center justify-between border-solid border-b-1 p-[30px] border-mercury"
        :class="{
          'top-at-page transition duration-500 ease': !view.atTopOfPage,
        }"
      >
        <a class="text-2xl font-bold break-words text-secondary font-satoshi" href="/">
          FinanceX
        </a>
        <button @click="open">
          <div class="hamburger" :class="['hamburger', active]">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </button>
      </div>
      <fade-transition>
        <div
          v-if="isOpened"
          id="menu"
          class="flex flex-col py-5 space-y-5 font-normal transition duration-500 border-solid px-[30px] text-base text-secondary text-opacity-70 border-b-1 border-mercury ease bg-primary"
        >
          <nuxt-link v-for="menu in menus" :key="menu.title" :to="menu.link">
            {{ menu.title }}
          </nuxt-link>
        </div>
      </fade-transition>
    </div>
    <!-- Base Navigation Bar For Desktop -->
    <div class="hidden border-solid lg:block border-mercury border-b-1">
      <div
        class="flex flex-row items-center justify-between mx-auto my-0 px-96 py-[30px] max-w-9xl"
        :class="{
          'top-at-page transition duration-500 ease': !view.atTopOfPage,
        }"
      >
        <a class="text-2xl font-bold break-words text-secondary font-satoshi" href="/">
          FinanceX
        </a>
        <div
          class="flex flex-row items-center text-base font-normal text-secondary space-x-14 text-opacity-70"
        >
          <nuxt-link
            v-for="menu in menus"
            :key="menu.title"
            class="link"
            :to="menu.link"
          >
            {{ menu.title }}
          </nuxt-link>
        </div>
        <div class="flex flex-row items-center space-x-[15px]">
          <div
            class="p-2 transition duration-500 bg-transparent rounded-full shadow-xl hover:bg-primary ease"
          >
            <base-button color="transparent" @click="handleFacebook">
              Sign Up
              <img src="~assets/svg/arrow-right-white.svg" class="ml-3">
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpened: false,
      menus: [
        {
          title: 'Why FinanceX',
          link: '/about',
        },
        {
          title: 'Features',
          link: '/features',
        },
        {
          title: 'Update',
          link: '/update',
        },
        {
          title: 'Blog',
          link: '/blog',
        },
      ],
      view: {
        atTopOfPage: true,
      },
    }
  },
  computed: {
    active() {
      return this.isOpened ? 'active' : ''
    },
  },
  watch: {
    $route(to, from) {
      this.isOpened = false
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    open() {
      this.isOpened = !this.isOpened
    },
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false
      } else if (!this.view.atTopOfPage) {
        // user is at top of page
        this.view.atTopOfPage = true
      }
    },
    handleFacebook() {
      window.open('https://www.facebook.com/lopvocoffee', '_blank')
    },
    handleTiktok() {
      window.open('https://www.tiktok.com/@lopvocoffee', '_blank')
    },
  },
}
</script>

<style scoped>
.hamburger {
  display: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: var(--light-color);
}

@media only screen and (max-width: 1024px) {
  .hamburger {
    display: block;
    cursor: pointer;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}

.slide-enter-active {
  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-leave-active {
  -webkit-animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@-webkit-keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 0;
  }
}

@keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 0;
  }
}

.link {
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.link:hover {
  color: var(--secondary-color);
  transition: 0.3s;
}

.top-at-page {
  padding: 15px 30px;

  @media (min-width: 1024px) {
    padding: 15px 24rem;
  }
}

.shadow {
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;
}
</style>
