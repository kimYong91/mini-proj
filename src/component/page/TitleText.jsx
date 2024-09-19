import React from 'react';

function TitleText(props) {

  const {children} = props;

  return (
    <p>
      {children}
    </p>
  );
}

export default TitleText;