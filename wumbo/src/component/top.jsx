import logo from '../images/W.png'
import topImage from '../images/top-images.png'
import { useState } from 'react'

const Top = ({ ul, button }) => {
    const handleClick = id => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    const handleClick2 = (name) => {
        if (name === 'Download Now') {
            alert('Download Now clicked!');
        } else {
            alert('See in Action clicked!');
        }
    }

    return (
        <div className="top-background" id='top'>
            <Navbar onLinkClick={handleClick} ul={ul}/>
            <Hambuger />
            <div className='flex flex-row lg:flex-col justify-between lg:mx-5 mx-12'>
                <TopLeft onBtnClick={handleClick2} button={button}/>
                <TopRight />
            </div>
        </div>
    )
}

const Navbar = ({ onLinkClick, ul }) => {
    return (
        <header className='flex items-center justify-between h-28 lg:mx-6 mx-12'>
            <div className='flex items-center cursor-pointer'>
                <div className='flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full'>
                    <img 
                        src={logo}
                        alt='Wumbo logo'
                        className='w-5'
                    />
                </div>
                <p className='mx-3 text-dark-blue font-semibold'>Wumbo</p>
            </div>
            <ul className='flex gap-20 lg:hidden'>
                {ul.map((li, index) => (
                    <li 
                        key={index}
                        className='font-medium duration-500 text-text-color hover:cursor-pointer hover:text-dark-blue'
                        id={li.id}
                        onClick={() => onLinkClick(li.id)}
                    >
                        <a href={li.id}>
                            {li.name}
                        </a>
                    </li>
                ))}
            </ul>
            <button type='button' className='button block lg:hidden'>Download</button>
        </header>
    )
}

const Hambuger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => { setIsOpen(!isOpen); };

    return (
        <button className="hidden lg:flex flex-col items-end justify-center py-3 px-2 rounded-lg absolute top-8 right-6 space-y-1.5 bg-text-color" onClick={toggleMenu} >
            <span className={`block w-7 h-0.5 bg-black transition-all duration-300 ${isOpen ? "translate-y-1.5 rotate-45" : ""}`}>
            </span>
            <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}>
            </span> 
            <span className={`block w-7 h-0.5 bg- transition-all duration-300 ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`}>
            </span> 
        </button>
    ) 
}

const TopLeft = ({ onBtnClick, button }) => {
    return (
        <div className='flex flex-col lg:items-center py-16 w-1/2 lg:w-full lg:text-center'>
            <h1 className='text-large-text text-dark-blue max-w-full w-[650px] leading-snug'>Beautiful Design For <a className='font-medium underline' href='./'>Social Media</a> Content</h1>
            <p className='text-text-color max-w-full w-[550px] py-8 leading-8'>Figma social media content templates for branding, marketing, insight and more. Free for personal and commercail use!</p>
            <div>
                {button.map((btn, index) => (
                    <button 
                        className='buttons inline-flex items-center mb-7 rounded' type='button'
                        key={index} 
                        style={{ background: btn.bg, color: btn.color }}
                        onClick={onBtnClick}
                    >
                        <img 
                            src={btn.images}
                            alt={btn.name}
                            className='w-5'
                        />
                        {btn.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

const TopRight = () => {
    return (
        <div className='w-1/2 flex relative'>
            <img 
                src={topImage}
                alt='Top-left-images'
                className='lg:hidden block w-[500px] h-[500px] absolute top-[-0.5rem] right-[-2.3rem]'
            />
        </div>
    )
}

export default Top;
