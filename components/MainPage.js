import React from 'react';
import Header from './Header';

const MainPage = React.createClass({
  render: function () {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    )
}
});

export default MainPage;
// <Header />
// <PostsFeed />
