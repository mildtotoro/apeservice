import React from 'react';
import MenuBar from './MenuBar';

export default  function Layout(props) {
    return (
      <div>
        <MenuBar></MenuBar>
        {props.children}
      </div>
    );
}

