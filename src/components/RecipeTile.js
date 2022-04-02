import "./RecipeTile.css"

const RecipeTile = ({title,url}) => {
    return (
        <div className="recipeTile">
        <img className="recipeTitle__img" src={url} alt="recipe_img" />
            <p className="recipeTitle__name">{title}</p>
        </div>
    )
}

export default RecipeTile
