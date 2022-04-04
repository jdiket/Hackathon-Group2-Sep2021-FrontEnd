import styled from 'styled-components'

export const AboutPage = () => {
  return (
    <AboutPageStyled>
      <h1> About </h1>
      <p>Dog Days is an online service to help connect people looking to adopt a dog with available dogs in their area.  Through the website users have the ability to register accounts, set preferences, and search through dogs up for adoption with a simple web interface.  Their choices can be easily indexed to compare availability, look at further information, and even schedule a playdate!</p>
      <p>This site was developed to help people on their dog search journey.  Through research we found that one of the most difficult parts of adopting a dog is knowing what dogs are out there and getting to spend time with them to see if a person and the dog are compatible.  It is our belief that giving a potential adopter the opportunity to spend time with an animal before making a decision would dramatically decrease the rate of people having adoption regrets and returning animals.  By simplifying the process of scheduling for both the adopter and the adoption service we can take away one of the biggest stress points within the adoption process.</p>
      <p>The journey to create this project started with the question, "What is the hardest part about adopting a dog?"  After asking people this quesion we ended up with two answers: where to go to find dogs that are available to adopt, and getting the chance to meet and spend time with the dog in a friendly environment before making a decision.  To solve these problems we set out to build a service that could bring adoption services and adopters together.  By aggregating the information on available dogs and providing the ability to request a playdate, we can assist both parties involved in making this process easier.  For the adoption services we provide a simple interface with unique features that creates predictability in their workflow, and for adopters we provide a one-stop-shop to maximize their options and give a unique feature that previously was difficult to accomplish.</p>
      <p>In addition to user research, we analyzed the competitive landscape to identify gaps in the adoption services industry. No other competitor sites offered a way to reserve playdates with the potential adoptee dogs. We also drew design inspiration from comparative services such as dating and vacation rental apps. From there we created an MVP low-fidelity prototype and tested it with users before creating a design system and iterating to high-fidelity. We communicated and collaborated across design and development teams to ensure that the product solved for user needs while remaining technologically feasible.</p>
    </AboutPageStyled>
  );
}

const AboutPageStyled = styled.div`
  min-height: calc(100vh - 7.6rem);
  background: url('../../images/landing-page-image.svg');
  background-size: cover;
  & h1 {
    margin: 2rem 0;
  }
  & p {
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
`;