import React from 'react';

function ContentText(props) {

  const {children} = props;

  return (
    <div>
      <p>
        {children}
      </p>
    </div>
  );
}

export default ContentText;