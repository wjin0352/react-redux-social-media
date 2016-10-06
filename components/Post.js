import React from 'react';

const Post = () => {
  return (
    <container className='post-container'>
      <div className='post-div'>
        <p>Open hello-react.html in a web browser and type your name into the text field. Notice that React is only changing the time string in the UI — any input you put in the text field remains, even though you haven't written any code to manage this behavior. React figures it out for you and does the right thing.

        The way we are able to figure this out is that React does not manipulate the DOM unless it needs to. It uses a fast, internal mock DOM to perform diffs and computes the most efficient DOM mutation for you.

        The inputs to this component are called props — short for "properties". They're passed as attributes in JSX syntax. You should think of these as immutable within the component, that is, never write to this.props.
        </p>
      </div>
    </container>
  )
}

export default Post;
