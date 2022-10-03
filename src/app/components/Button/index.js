import React, { Component } from "react";
import styled from "styled-components";
import colors from "../../themes/Colors";

export default class ButtonComponent extends Component {
  render() {
    const { text, icon } = this.props;
    return (
      <Container>
        {icon && <ImageContent src={icon} />}
        <Text>{text}</Text>
      </Container>
    );
  }
}

const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 320px;
  background: linear-gradient(
      to right,
      ${colors.primaryLightPurple},
      ${colors.primaryPink}
    )
    left;
  border: 0px;
  border-radius: 10px;
`;
const Text = styled.p`
  color: white;
  font-size: 20px;
`;
const ImageContent = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
