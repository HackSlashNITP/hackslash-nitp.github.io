import styled from "styled-components";
import Image from "next/image";
import cupImg from "@/assets/home/CupImg.svg";
import member from "@/assets/home/members.svg";
import code from "@/assets/home/List.svg";
import proj from "@/assets/home/Guarantee.svg";

export default function Home3(props) {
  return (
    <Container id={props.id}>
      <Image src={cupImg} alt="Cup Img" width={800} height={600} />
      <Text>
        <Heading>
          <p>At HackSlash</p> <h1>We Have Done Some Great Stuffs.</h1>
        </Heading>
        <p>
        Since its inception, HackSlash is growing every year. We have created projects for various social causes. In our quest to enhance the coding culture in our campus, we have managed to organize Hackathons which saw students from different colleges of India. We have also conducted workshops, and sessions that covered domains like open source contribution, graphic designing, coding, and development.
        </p>
        <Ul>
          <Li>
            <div width={60} height={60}><Image src={member} alt="Icon" width={60} height={60} /></div>
            <span>80+</span>
            <p>Memebers</p>
          </Li>
          <Li>
            <div width={60} height={60}><Image src={code} alt="Icon" width={60} height={60} /></div>
            <span>50000+</span>
            <p>Lines of Code</p>
          </Li>
          <Li>
            <div width={60} height={60}><Image src={proj} alt="Icon" width={60} height={60} /></div>
            <span>500+</span>
            <p>Projects</p>
          </Li>
        </Ul>
      </Text>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: url("/home/Homepage_3.svg") center center/cover;
  display: flex;
  align-items: center;
  color: white;

  @media (max-width: 768px) {
  height: 100vh;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 50px;

  &>div{
    width: 80%;
    padding: 0;
  }
}
`

const Text = styled.div`
  width: 50%;
  padding-right: 15%;

  & > p {
    text-align: justify;
    font-size: 15px;
  }
`
const Heading = styled.span`
  width: 100%;
  display: flex;
  font-size: 20px;
  flex-direction: column;

  & > p {
    color: #49ddac;
  }
  
  & > span {
    font-size: 34px;
    font-weight: 400;
  }
`

var Ul = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`

var Li = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 16px;

  & > span{
    color: #49DDAC;
  }
`
