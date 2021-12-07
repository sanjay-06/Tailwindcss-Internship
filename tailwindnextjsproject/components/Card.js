const Card = ({author,title,desc,urlimg,publishedAt}) => {
    return(
    <div class="ml-3 mt-3 max-w-sm w-full lg:max-w-full lg:flex">
        <img src={urlimg} class="h-48 w-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" alt={title} />
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
                <div class="text-gray-900 font-bold text-xl mb-2">{title}</div>
                <p class="text-gray-700 text-base">{desc}</p>
            </div>
            <div class="flex items-center">
                <div class="text-sm">
                    <p class="text-gray-900 leading-none">{author}</p>
                    <p class="text-gray-600">{publishedAt}</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Card
