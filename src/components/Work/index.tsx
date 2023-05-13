import React from 'react';

import { ChakraProvider, Spacer } from '@chakra-ui/react';

import * as S from './styles';

function Work() {
  return (
    <>
      <S.WorkContainer id="Work">
        <ChakraProvider>
          <S.Container>
            <S.Title as="b">WORK</S.Title>
            <S.WorkDescription>
              In the world of startup and work, I also have my fair share of
              experience. In these opportunities, I got to apply my skills and
              even got better at them or learned new ones.
            </S.WorkDescription>
          </S.Container>
          <br />
          <S.TypeContainer>
            <S.TypeTitle>Research Experience</S.TypeTitle>
            <S.InnerContainer>
              <S.Row>
                <S.WorkplaceTitle as="b">
                  AI and Cloud Computing Conference 2022
                </S.WorkplaceTitle>
                <S.Subtitle as="b">Osaka, Japan</S.Subtitle>
              </S.Row>
              <S.Row>
                <S.Subtitle>Researcher</S.Subtitle>
                <S.Subtitle>Oct 2021 - Nov 2021</S.Subtitle>
              </S.Row>
              <S.SubtitleClickable
                href="https://dl.acm.org/doi/10.1145/3582099.3582118"
                rel="noopener noreferrer"
                target="_blank"
              >
                Read here
              </S.SubtitleClickable>
            </S.InnerContainer>
          </S.TypeContainer>
          <br />
          <S.TypeContainer>
            <S.TypeTitle>Competition Experience</S.TypeTitle>
            <S.InnerContainer>
              <S.Row>
                <S.WorkplaceTitle as="b">
                  FWD Springboard Student Challenge
                </S.WorkplaceTitle>
                <S.Subtitle as="b">International</S.Subtitle>
              </S.Row>
              <S.Row>
                <S.Subtitle>Team Lead, Developer, & Pitcher</S.Subtitle>
                <S.Subtitle>Oct 2021 - Nov 2021</S.Subtitle>
              </S.Row>
              <br />
              <S.Row>
                <S.WorkplaceTitle as="b">Kumu HAQathon</S.WorkplaceTitle>
                <S.Subtitle as="b">Philippines</S.Subtitle>
              </S.Row>
              <S.Row>
                <S.Subtitle>Team Lead, Developer, & Pitcher</S.Subtitle>
                <S.Subtitle>Sept 2021 - Oct 2021</S.Subtitle>
              </S.Row>
            </S.InnerContainer>
          </S.TypeContainer>
          <br />
          <S.TypeContainer>
            <S.TypeTitle>Work Experience</S.TypeTitle>
            <S.InnerContainer>
              <S.Row>
                <S.WorkplaceTitle as="b">Awesome OS</S.WorkplaceTitle>
                <S.Subtitle as="b">Davao, Philippines</S.Subtitle>
              </S.Row>
              <S.Row>
                <S.Subtitle>Software Engineer, Internship</S.Subtitle>
                <S.Subtitle>Feb 2023 - May 2023</S.Subtitle>
              </S.Row>
              <br />
              <S.Row>
                <S.WorkplaceTitle as="b">WhyNotResults</S.WorkplaceTitle>
                <S.Subtitle as="b">Phoenix, Arizona, United States</S.Subtitle>
              </S.Row>
              <S.Row>
                <S.Subtitle>Web Developer, Part-time</S.Subtitle>
                <S.Subtitle>Nov 2022 - Feb 2023</S.Subtitle>
              </S.Row>
              <br />
              <S.Row>
                <S.WorkplaceTitle as="b">Symph</S.WorkplaceTitle>
                <S.Subtitle as="b">Cebu, Philippines</S.Subtitle>
              </S.Row>
              <S.Row>
                <S.Subtitle>Software Engineer, Internship</S.Subtitle>
                <S.Subtitle>Jun 2022 - Oct 2022</S.Subtitle>
              </S.Row>
              <br />
              <S.Row>
                <S.WorkplaceTitle as="b">CAWIL.AI </S.WorkplaceTitle>
                <S.Subtitle as="b">Manila, Philippines</S.Subtitle>
              </S.Row>
              <S.Row>
                <S.Subtitle>Software Engineer, Internship</S.Subtitle>
                <S.Subtitle>Feb 2022 - May 2022</S.Subtitle>
              </S.Row>
              <br />
              <S.Row>
                <S.WorkplaceTitle as="b">
                  Google Developer Student Clubs UIC
                </S.WorkplaceTitle>
                <S.Subtitle as="b">Davao, Philippines</S.Subtitle>
              </S.Row>
              <S.Row>
                <S.Subtitle>Core Officer</S.Subtitle>
                <S.Subtitle>Aug 2022 - May 2023</S.Subtitle>
              </S.Row>
              <S.Row>
                <S.Subtitle>Chief Operations Officer</S.Subtitle>
                <S.Subtitle>Apr 2021 - Aug 2022</S.Subtitle>
              </S.Row>
              <S.Row>
                <S.Subtitle>Chief Executive Officer</S.Subtitle>
                <S.Subtitle>Jul 2020 - Apr 2021</S.Subtitle>
              </S.Row>
              <br />
            </S.InnerContainer>
          </S.TypeContainer>
        </ChakraProvider>
      </S.WorkContainer>
    </>
  );
}

export default Work;
