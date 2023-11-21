
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';
import Letter from './Letter';

const FloatingLetters = () => {
  const randomPosition = () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });

  const getSlowerFactor = () => Math.random() * 0.7; // Adjust the multiplier as needed for a slower effect

  const numLetters = 20; // Adjust the number of letters as needed

  const letters = Array.from({ length: numLetters }, (_, index) => (
    <MouseParallaxChild
      key={index}
      factorX={getSlowerFactor()} // Adjusted for a slower effect
      factorY={getSlowerFactor()} // Adjusted for a slower effect
      style={{
        transform: `translate(${randomPosition().x}px, ${randomPosition().y}px)`,
      }}
    >
      <Letter />
    </MouseParallaxChild>
  ));

  return (
    <MouseParallaxContainer 
        containerStyle={{ width: '100%', height: 'calc(100vh)', position: 'fixed' }} 
        globalFactorX={0.5} globalFactorY={0.5}
        resetOnLeave
    >
      {letters}
    </MouseParallaxContainer>
  );
};

export default FloatingLetters;