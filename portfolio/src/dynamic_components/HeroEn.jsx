import '../components/style/Hero.css'
import { TypeAnimation } from 'react-type-animation';

export default function HeroEN(){ 
    return (
    <div className='Animation-Container md:pl-[25%]'>
        <h1 className="Hero-H1"> Hi,</h1> 
        <h1 className="Hero-H2"> my name is Kauan and I am a...</h1> 
        <div>
            <h1 className="Animation-Text"> 
            <TypeAnimation
            sequence={[
                'Frontend Developer',
                1000,
                'Backend Developer',
                1000,
                'Game Developer',
                1000
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
                />
            </h1> 
        </div>
        
    </div>
    )
}
