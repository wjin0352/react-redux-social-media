export function video (video) {
  return {
    type: 'VIDEO',
    video
  }
};

export function post (post) {
  return {
    type: 'POST',
    post
  }
};

export function register (userInfo) {
  return {
    type: 'REGISTER_USER',
    userInfo
  }
}
