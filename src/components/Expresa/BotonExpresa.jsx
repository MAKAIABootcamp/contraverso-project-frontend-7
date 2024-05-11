import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  
`;

function BotonExpresa({ children, onClick, ...rest }) {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
}

export default BotonExpresa;
