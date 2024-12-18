import previewImg from '../images/preview-img.png'

const Preview = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[1100px] md:min-h-[900px] text-center bg-[url('./images/preview-bg.png')] bg-no-repeat bg-[length:100%_1100px] md:bg-[length:100%_900px] lg:px-5 px-12" id="preview">
            <button className="con-btn bg-white bg-opacity-5" type="button">
                PREVIEW
            </button>
            <h2 className='w-full max-w-[600px] text-white text-medium-text font-medium my-5'>
                Social Feeds is a <a className='underline' href='./'>Figma design template,</a> and everyone can ue Figma!
            </h2>
            <img 
                src={previewImg}   
                alt="preview" 
                className='w-[1000px]'
            />
            <p className='text-white text-opacity-60 w-full max-w-[600px] py-5 leading-7'>
                Like the demo above, you can use Social Feeds with ease, just need to duplicate the template design you want, design the content and export!
            </p>
        </div>
    )
}

export default Preview;