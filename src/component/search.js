export default function Search({ recipes, searchTerm, sortOrder }){
    const filteredRecipes = recipes
    .filter((recipe) => 
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.name.localeCompare(b.name);
      if (sortOrder === 'desc') return b.name.localeCompare(a.name);
      return 0;
    });
    return(
        <div>
            <ul>
                {filteredRecipes.map((recipe)=>(
                    <li key={recipe.id}></li>
                ))}
            </ul>
        </div>
    )
}