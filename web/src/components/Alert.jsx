import React from 'react';
import styled from 'styled-components';

const Alert = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export default styled(Alert)`
  box-sizing: border-box;
  padding: 1em 1em 1.2rem;
  border-radius: 8px;
  background: hsla(211, 96%, 90%, 0.5);

  h2 {
    margin-top: 0;
  }

  ul {
    margin: 0;
    padding-left: 1rem;
    li ~ li {
      padding-top: 0.4rem;
    }
  }
`;
