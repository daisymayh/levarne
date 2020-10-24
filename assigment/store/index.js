export const state = () => ({
  messages: []
})

export const mutations = {
  addMessage(state, newMessage) {
    state.messages.push({
      newMessage
    })
  },
}

export const actions = {
}
