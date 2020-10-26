export const state = () => ({
  messages: [],
  someData: []
})

export const mutations = {
  addMessage(state, newMessage) {
    state.messages.push({
      newMessage
    })
  },

  setEchoResponse(state, formData) {
    state.someData = formData
  }
}

export const actions = {
  async echo ({ commit }, formData) {
    let options = {
      url: "https://d5gryl2o0g.execute-api.eu-west-1.amazonaws.com/development/echo",
      method: "POST",
      headers: {
        "x-api-key": "ASmtRu6k869JnsmYBVoGNahuoGYKAibXonGicDg5"
      },
      data: formData
    }
    let response = await this.$axios(options);
    commit('setEchoResponse', response.data);
  }
}
