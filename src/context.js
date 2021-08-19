import React, { useState, useEffect, useContext } from 'react' 
import { useCallback } from 'react'

const url ='https://www.themealdb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [recipes, setRecipes] = useState([])
    const [searchTerm, setSearchTerm] = useState('a')

    const fetchMeals = useCallback ( async () => {
        try {
            const response = await fetch (`${url}${searchTerm}`)
            const data = await response.json()
            console.log(data);
            const {meals} = data
            if (meals) {
                const newRecipes = meals.map((item) =>{
                    const {
                        idMeal, 
                        strMeal,
                        strMealThumb,
                        strCategory,
                        strArea
                    } = item 

                    return {
                        id: idMeal,
                        name: strMeal,
                        image: strMealThumb,
                        category: strCategory,
                        origin: strArea
                    }
                })
                setRecipes(newRecipes)
            } else {
                setRecipes([])
            }
        } catch (error) {
            console.log(error)
        }
    }, [searchTerm])

    useEffect(() => {
        fetchMeals()
    }, [searchTerm, fetchMeals])
    
    return (
        <AppContext.Provider
        value={{recipes, searchTerm, setSearchTerm}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}
    
