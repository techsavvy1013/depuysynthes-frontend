import { contactSupport } from '@/api/support.api'

export default {
  state: {
    status: '', // '', 'SUCCESS', 'FAIL'
    supportDetail: {
      reason: '',
      subject: '',
      body: '',
      picture: '',
    }
  },
  getters: {
    getDetail(state) {
      return state.supportDetail;
    },
    getStatus(state) {
      return state.status;
    },
  },
  mutations: {
    setDetail(state, payload) {
      state.supportDetail.reason = payload.reason;
      state.supportDetail.subject = payload.subject;
      state.supportDetail.body = payload.body;
      state.supportDetail.picture = payload.picture;
    },
    setStatus(state, payload) {
      state.status = payload;
      console.log(state);
    }
  },
  actions: {
    async contactSupport({commit}, payload){
      contactSupport(payload).then(() => {
      });
      commit('setStatus', 'FAIL');
    },
  },
}
