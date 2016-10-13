This is a express/react blog application with the ability to create posts and have other users comment on the posts.  There is user login and registration.

- use mongoose populate
- ids in mongo is indexed so you want to search or do any operations using the built in ID in MONGO.  essential for performance.

http://legitsoft.org/HypermediawithNode.js.pdf

mock the app UI diagram

determine all pages you will have

design backend completely before coding
  - design model for database
  - design API
    - how to build as efficient API as possible.  (serving data in most efficient way)




User story:

UNREGISTERED USERS:
As a user I can go to home page and see many blogs.

As a user I can search for blog posts.

As a user I can register an account.

As a user I can comment on a blog post.

As a user I can like a blog post.

As a user I can like a comment.

As a user I can see other users posts and videos.

REGISTERED USER:
As a registered user I can create a blog post.

As a registered user I can delete a blog post.

As a registered user I can edit a blog post.

As a registered user I can add video links.

As a registered user I can have a collection of video links.

As a registered user I can play my videos on a html player.

As a registered user I can delete videos.

As a registered user I can edit video links.

As a registered user I can delete my account.

As a registered user I can edit my account.


===========================================================================

    Ideas on making server side requests and then client side redux calls.  Just make a dispatch call to an action creator on client side in your event handler.  Your component should be clean.  write the logic in your actions.  where it will return a function so redux thunk will process that.

    Then you make your fetch call in the action creator.  Which you will handle the success and errors.  If successful then you will in the example below return data in json format to use, and then dispatch another action creator to send that json data to the proper reducer to update the redux store in the next .then() call.  The .catch() will handle the error by dispatching a error handling action creator.

    For your `doActionError` I recommend that you have some kind of `error` property in your store.  `doActionError()` will update that property with an error.  You will have an `Error` React component that is connected to that error store property and will only display if it's not `null`

      install redux-thunk. any time an action requires a server call, you make three action creators:
     1) doActionAsync()
     2) doActionSuccess()
     3) doActionFail()

     handleSubmit() {
     this.props.dispatch(actions.submitRegistrationAsync());
     }

     `doActionAsync` is a thunk.  most action creators return an object with `type`.  a thunk returns a function that has a `dispatch` as first parameter:

     redux-thunk is middleware that is constantly watching what you dispatch.  if you dispatch a regular action -- i.e. an action that returns an object with a `type` property, then it ignores it.  if you dispatch (dispatch is available in the argument) an action that returns a function, then redux-thunk kicks in.  it invokes the function, sending in the store's dispatch method

     ```const doActionAsync = () => {
       return (dispatch) => {
         return fetch('something')
           .then(data => data.json())    // converts data to json
           .then(data => dispatch(doActionSuccess(data))
           .catch(err => dispatch(doActionError(err));
       };
     };

     const submitRegistrationAsync = function(){
       something
     };
     export { submitRegistrationAsync };
