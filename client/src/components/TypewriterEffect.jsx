import { TypeAnimation } from 'react-type-animation';

const TypewriterEffect = () => {
    return (
        <div className=' z-10 p-5 rounded-lg' style={{ backdropFilter: 'blur(1px)' }}>
            <TypeAnimation
                sequence={['Enhance Typing Accuracy', 2000, 'Improve Typing Speed', 2000, 'Ready?', 1000, 'Get Typing...', 1000]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
                className='typewriter'
            />
        </div>
    )
};

export default TypewriterEffect;