import React from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button) ({
  borderColor: '#FFB549',
  color: '#FFB549',
  fontWeight: 600,
  marginBottom: '8px',
  '&:hover': {
  borderColor: '#FFB549',
    backgroundColor: '#FFB549',
    color: '#fff'
  }
})

const Answer = (props) => {
  return (
    <CustomButton variant="outlined" onClick={() => props.select(props.content, props.nextId)}>
      {props.content}
    </CustomButton>
  )
}

export default Answer