// modal action creators
  export const getModalData = (video) => ({
    type: 'CREATE_MODAL',
    video
  })

  export const openModal = () => ({
    type: 'OPEN_MODAL',
    show: true
  })

  export const closeModal = () => ({
    type: 'CLOSE_MODAL',
    show: false
  })
