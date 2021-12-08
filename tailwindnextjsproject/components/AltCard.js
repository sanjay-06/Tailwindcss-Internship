const AltCard = ({img,title,exe,body}) => {
    
    return(
        <div className="max-w-lg justify-center rounded overflow-hidden shadow-lg my-2">
            <img className="w-full" src={img} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-grey-darker text-base">
                {body}
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{exe}</span>
            </div>
        </div>
    )
}
export default AltCard