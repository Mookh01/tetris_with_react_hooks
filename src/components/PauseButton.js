import React from 'react';
import { StyledPauseButton } from './styles/StyledPauseButton';

const PauseButton =({ callback }) => (
<StyledPauseButton onClick={callback} >Pause Game</StyledPauseButton>
)
export default PauseButton;