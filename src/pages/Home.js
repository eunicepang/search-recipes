import React from 'react'
import SearchForm from '../components/SearchForm'
import RecipeList from '../components/RecipeList'

export default function Home() {
    return (
        <main>
            <SearchForm />
            <RecipeList />
        </main>
    );
}