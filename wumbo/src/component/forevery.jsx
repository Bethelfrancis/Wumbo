

const ForEveryone = ({ items }) => {
    return (
        <div className='for-background' id='for-everyone'>
            <ForHead />
            <div className='flex flex-wrap items-center justify-center w-full gap-24'>
                <ForContent items={items}/>
            </div>
        </div>
    )
}

const ForHead = () => {
    return (
        <h2 className='max-w-full w-[450px] text-center text-dark-blue text-medium-text font-medium'>
            Figma Social Feeds is designed for everyone. Use for whatever you want, it's completely free!
        </h2>
    )
}

const ForContent = ({ items }) => {
    return (
        <>
            {items.map((item, index) => (
                <div className='flex flex-col items-start justify-center w-96 h-[380px] bg-inherit hover:bg-dark-blue group px-10  rounded-xl transition duration-1000 shadow-2xl cursor-pointer' key={index}>
                    <img src={item.image} alt={item.title} className='p-4 bg-dark-blue group-hover:bg-white group-hover:bg-opacity-10 rounded' />
                    <h3 className='text-semi-text text-dark-blue group-hover:text-white py-5 font-medium'>{item.title}</h3>
                    <p className='text-blue-text group-hover:text-white group-hover:text-opacity-75 font-light leading-7'>{item.description}</p>
                </div>
            ))}
        </>
    )
}

export default ForEveryone;