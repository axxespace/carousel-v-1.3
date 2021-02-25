import React from 'react';

// File of content
function Content(props) {
  const contentProps = props;
  return (
    <>
      {contentProps.SHADESOFBLUE.map(
        (elem) => (
          <div
            ref={contentProps.componentWidth}
            style={{ backgroundColor: elem[1] }}
            className="colorPage"
            key={elem[0]}
          >
            <h1>{elem[0]}</h1>
          </div>
        ),
      )}
    </>
  );
}

export default Content;
