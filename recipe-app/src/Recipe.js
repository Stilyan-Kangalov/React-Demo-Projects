const Resipes = ({title, calories, image, ingredients}) => {
    return(
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src={image} alt={title} />
                </div>
        <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{calories.toFixed(2) + ' cal'}</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</a>
            <p className="mt-2 text-gray-500 description">
                {ingredients.map(ingredient => (
                    <span>{ingredient.text + ' * '}</span>
                ))}
            </p><span>Read more...</span>
            </div>
        </div>
        </div>
    );
}

export default Resipes;