'use client'
import React from 'react';
import dados from '../../../data/recipes.json';
import { useRouter } from '@/node_modules/next/navigation';



console.log(dados);


const RecipesPage = () => {
      const router = useRouter();

    return (
        <main className="p-4">
            <div>
              <div className="flex justify-between items-center mb-8">
                <button 
              onClick={() => router.back()} 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Voltar
            </button>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {dados.map((recipe) => (
                  <li 
                    key={recipe.id} 
                    className="border p-4 rounded shadow hover:shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    <img 
                      src={recipe.image} 
                      alt={recipe.name} 
                      className="w-full h-48 object-cover mb-4 rounded" 
                      onError={(e) => e.target.style.display = 'none'} 
                    />
                    <p className="text-lg font-semibold">{recipe.name}</p>
                  </li>
                ))}
              </ul>
            </div>
        </main>
      );
  };

export default RecipesPage;