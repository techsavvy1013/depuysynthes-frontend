export default {
  state: {
    customSlides: [],
    newCustomSlide: {
      title: "",
      subTitle: "",
      position: 1,
      image1: "",
      image2: "",
      image3: ""
    }
  },
  getters: {
    allCustomSlides(state) {
      return state.customSlides;
    },
    customSlide(state) {
      return state.newCustomSlide;
    }
  },
  mutations: {
    setCustomSlide(state, newCustomSlide) {
      state.newCustomSlide.title = newCustomSlide.title
      state.newCustomSlide.subTitle = newCustomSlide.subTitle
      state.newCustomSlide.position = state.customSlides.length + 1
      state.newCustomSlide.image1 = newCustomSlide.image1;
      state.newCustomSlide.image2 = newCustomSlide.image2;
      state.newCustomSlide.image3 = newCustomSlide.image3;
    },
    saveCustomSlide(state) {
      state.customSlides.push(state.newCustomSlide);
    }
  },
}
