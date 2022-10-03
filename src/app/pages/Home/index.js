import React, { Component } from "react";
import { ilMain, icFireworks } from "../../assets";
import colors from "../../themes/Colors";
import styled from "styled-components";
import { ButtonComponent } from "../../components/";

export default class Home extends Component {
  render() {
    return (
      <>
        <Container>
          <ImageContainer>
            <ImageContent src={ilMain} />
          </ImageContainer>
          <ContentContainer>
            <TextContainer>
              <Text>Imagine if</Text>
              <TextGradient>Snapchat </TextGradient>
              <Text>Had events.</Text>
              <TextSubtitle>
                Easily host and share events with your friends across any social
                media.
              </TextSubtitle>
            </TextContainer>
            <ButtonComponent icon={icFireworks} text={"Create my event"} />
          </ContentContainer>
        </Container>
      </>
    );
  }
}
const Container = styled.div`
  background: ${colors.secondaryPurpleLight};
  display: flex;
  flex-direction: row;
`;
const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: auto;
  row-gap: 0px;
`;
const ImageContainer = styled.div`
  flex: 1;
  text-align: center;
  margin: auto;
`;
const ImageContent = styled.img`
  width: 440px;
  height: 775px;
`;

const TextContainer = styled.div`
  height: 264;
  width: 574;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: auto;
`;
const Text = styled.h1`
  font-size: 64;
  font-weight: bold;
  color: ${colors.primaryDarkBlue};
`;
const TextGradient = styled.h1`
  font-size: 64;
  color: ${colors.primaryLightPurple};
`;
const TextSubtitle = styled.p`
  font-size: 24;
  color: ${colors.neutral6};
  text-shadow: 1px 1px ${colors.neutral1};
`;
