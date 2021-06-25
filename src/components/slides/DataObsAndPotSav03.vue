<template>
  <section class="h-full">
    <!-- content div header-->
    <div class="flex flex-col h-full">
      <slideHeader
        title="Data observations & Potential Savings Opportunities"
        :sav-number="3"
        class="ml-16"
        name="SAV"
        icon="sav"
      />
      <!-- content body -->
      <div class="px-8 mb-6 ml-8 mr-8 text-left desc flex-4">
        <p class="text-2xl">
          Vendor spend comparison based on over 400+ customer spend analyses and SKU level invoice data for 1300 hospitals as reported by <span class="text-black underline">Decision Resource Group (2019)</span>
        </p>
      </div>

      <div
        class="left-text"
      >
        <p>
          See the benefits of standardizing to a Simplified Portfolio
        </p>
      </div>
      <div
        class="right-top-text"
      >
        <p>
          Compare national pricing trends among vendors
        </p>
      </div>

      <div
        class="right-bottom-text"
      >
        <p>
          Uncover possible
          hidden procedure expenses
        </p>
      </div>

      <div
        class="right-bottom-circle"
      >
        <p class="circle-text">
          Procedural Efficiency
        </p>
        <div class="img-sav img-3" />
      </div>

      <div
        class="right-top-circle"
      >
        <p class="circle-text">
          National Pricing Trends
        </p>
        <div class="img-sav img-2" />
      </div>

      <div class="left-middle-circle">
        <p class="circle-text">
          Simplified Portfolio
        </p>
        <div class="img-sav img-1" />
      </div>

      <div class=" gr justify-items-center" />
      <slideFooter
        class="mb-2 ml-8"
        :show-third-party-trade-mark="true"
      />
    </div>
  </section>
</template>

<script>
import slideFooter from "@/components/slides/slideFooter.vue";
import slideHeader from "@/components/slides/slideHeader.vue";

export default {
  components: { slideFooter, slideHeader },
};
</script>

<style scoped>

  .title {
    color: #212121;
  }

.desc {
  color: #63666a;
}
.second-footer p {
  color: #7f7f7f;
}

.circle {
  height: 200px;
  width: 200px;
}

.left-text{
    position: absolute;
    top: 55%;
    left: 7%;
    font-size: 1.3rem;
    width: 15.3rem;
    color: white;
}

.right-top-text{
    position: absolute;
    top: 30%;
    right: 10%;
    font-size: 1.3rem;
    width: 15.3rem;
    color: white;
}

.right-bottom-text{
position: absolute;
    top: 77%;
    right: 9%;
    font-size: 1.3rem;
    width: 15.3rem;
    color: white;
}

.right-bottom-circle{
      position: absolute;
    top: 70%;
    right: 32%;
}

.right-top-circle{
    position: absolute;
    top: 27%;
    right: 34.5%;
}

.left-middle-circle{
  position: absolute;
    top: 51%;
    left: 29%;
}

.circle-text{
              font-size: 1rem;
    width: 9rem;
    color: black;
    font-weight:bold;
}

.img-1{
  background: url('@/assets/images/slides/saving/sav3-01.png') no-repeat center center;
}
.img-2{
  background: url('@/assets/images/slides/saving/sav3-02.png') no-repeat center center;
}
.img-3{
  background: url('@/assets/images/slides/saving/sav3-03.png') no-repeat center center;
}
.img-sav{
  height:6rem;
  width:9rem;
    background-size: contain;
  background-position: top;
}

.gr {
  height:100%;
  background: url('@/assets/images/slides/saving/sav3.svg') no-repeat center center;
  background-size: contain;
  background-position: top;
}

.ot {
  @apply font-semibold text-lg leading-5 rounded-md  px-6 py-2 w-full h-20;
  background-color: #c8102e;
  color: white;
}

</style>
