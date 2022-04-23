<template>
  <transition
    name="toggle-slide"
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave"
  >
    <div v-if="state.show" :class="{ open: state.show }">
      <RoundJourney
        v-for="(journey, index) in journeys"
        :journey="journey"
        :journeyId="index"
        :tickets="tickets"
        :key="index"
      />
      <!-- 発券期限等 -->
      <div class="flex items-center h-70 fz-s bdc-light-gray">
        <div
          class="bg-e8e8e8 flex justify-center w-190 items-center h-70 bd-1 bdc-light-gray rounded-leftbottom-4 box-border"
        >
          <span class="font-bold">発券期限：</span>
          {{ ticketingDate }}
        </div>
        <div
          class="bg-pale-gray p-16 flex justify-between items-center h-70 flex-grow bdt-1 bdb-1 bdr-1 bdc-light-gray rounded-rightbottom-4"
        >
          <div class="lh-100">
            <span class="txt-textBlue fz-s mr-8">
              <i class="fas fa-search-plus txt-textBlue fz-s"></i>
              <span>変更・払戻し</span>
            </span>
            <span class="txt-textBlue fz-s" @click="openModal">
              <i class="fas fa-search-plus txt-textBlue fz-s"></i>
              <span>航空券詳細・運賃ルール</span>
            </span>
          </div>
          <!-- ボタン -->
          <div class="font-bold">
            <button class="w-148 bd-1 td-n txt-green ptb-12 fz-s lh-100 rounded-full bdc-green bd-1 mr-8">
              <i class="fas fa-heart color-lightGreen"></i>
              比較リストへ追加
            </button>
            <button class="w-148 bd-n td-n txt-white bg-green ptb-12 plr-24 lh-100 fz-s rounded-full mr-8">
              <i class="fas fa-calculator color-lightGreen"></i>
              見積りに追加
            </button>
            <button
              class="w-130 td-n bd-n txt-white bg-2d3ca0 ptb-12 lh-100 fz-s rounded-full"
              @click="transitToRuleConfirmation"
            >
              <span class="mr-8">予約へ進む</span>
              <i class="fas fa-chevron-right txt-white"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
  
<script lang="ts">

export default defineComponent({
  setup(props, { emit }) {

    const toggleShow = () => (state.show = !state.show)
    const beforeEnter = (el) => {
      el.style.height = '0'
    }
    const enter = (el) => {
      el.style.height = el.scrollHeight + 'px'
    }
    const beforeLeave = (el) => {
      el.style.height = el.scrollHeight + 'px'
    }
    const leave = (el) => {
      el.style.height = '0'
    }

    return {
      toggleShow,
      beforeEnter,
      enter,
      beforeLeave,
      leave,
    }
  },
})
</script>
