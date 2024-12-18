import feaOne from '../images/fea-one.png'
import feaTwo from '../images/fea-two.png'

const Features = ({ featureOne, featureTwo }) => {
    return (
        <div className='flex flex-col lg:items-center justify-between min-h-[1300px] lg:mx-5 mx-12 mt-32 lg:mt-0' id='features'>
            <FirstFeatures featureOne={featureOne}/>
            <SecondFeatures featureTwo={featureTwo}/>
        </div>
    )
}

const FirstFeatures = ({ featureOne }) => {
    return (
        <div className="flex lg:flex-col justify-between">
            <div className='w-1/2 lg:w-full py-28'>
                <h2 className='w-full max-w-[600px] lg:text-center text-dark-blue text-medium-text font-medium'>
                    There are <a className='underline' href="./">80+ Pre-Designed</a> Templates Ready to Use
                </h2>
                <p className='text-text-color  w-full max-w-[600px] py-5 leading-7'>
                    Many design choices make it free for you to make a different design every time you post. There are 80+ designs with 10+ different layouts. Each layout has several designs with the same theme, just need to focus on the content!
                </p>
                <ul>
                    {featureOne.map((li, index) => (
                        <li key={index} className='w-full max-w-[570px] list-disc ml-4 text-dark-blue leading-7' >
                            <span className='text-button-color mr-1'>{li.title}</span>
                            {li.description}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='w-1/2 lg:w-full flex'>
                <img 
                    className='max-w-[650px] w-full max-h-[650px] h-full mr-0'
                    src={feaOne} 
                    alt="feature img description" 
                />
            </div>
        </div>
    )
}

const SecondFeatures = ({ featureTwo }) => {
    return (
        <div className="flex lg:flex-col-reverse justify-between mb-24">
            <div className='w-1/2 lg:w-full flex'>
                <img 
                    className='max-w-[650px] w-full max-h-[650px] h-full mr-0'
                    src={feaTwo} 
                    alt="feature img description" 
                />
            </div>
            <div className='w-1/2 lg:w-full py-28'>
                <h2 className='w-full max-w-[600px] lg:text-center text-dark-blue text-medium-text font-medium'>
                    Design Templates Are Highly Customizable, <a className='underline' href='./'>it's easy to use!</a>
                </h2>
                <p className='text-text-color w-full max-w-[600px] py-5 leading-7'>
                    All design templates are ready to use, meaning you only need to focus on content or if necessary, adjust some properties such as color, font, font size and other properties to match your brand.
                </p>
                <ul>
                    {featureTwo.map((li, index) => (
                        <li key={index} className='w-full max-w-[570px] list-disc ml-4 text-dark-blue leading-7'>
                            <span className='text-button-color mr-1'>{li.title}</span>
                            {li.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Features;