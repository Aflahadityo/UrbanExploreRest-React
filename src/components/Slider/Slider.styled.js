import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

export const Caption = styled.div`
  position: absolute;
  bottom: 10%;
  left: 10%;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.i`
  margin-right: 10px;
`;
