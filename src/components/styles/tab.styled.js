import * as React from 'react';
import Tab from '@mui/material/Tab';
import { alpha, styled } from '@mui/material/styles';

const TabStyled = styled(Tab)(({ theme }) => ({
textTransform:"none",
fontFamily:"Ubuntu"
}));

export default function StyledCustomization() {
  return <TabStyled defaultValue={30} />;
}
