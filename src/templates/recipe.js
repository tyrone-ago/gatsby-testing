import React from 'react'

 const recipeTemplate = ({data}) => {
  return (
    <div>
      <h1>{data.recipes.title}</h1>
      <div>
          {for i = data.recipes.instructions.length
          {
            {data.recipes.ingredients[i]}
          }
          }
      
      </div>
      <p>{data.recipes.instructions}</p>
    </div>
  )
}
export default recipeTemplate

export const query = graphql`
  query RecipeTemplate($slug: String!) {
    recipes(fields: { slug: { eq: $slug } }) {
      title
      ingredients
      instructions
      relationships {
        category {
          name
        }
      }
    }
  }
`
