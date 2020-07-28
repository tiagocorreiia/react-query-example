import React from 'react'
import { useQuery } from 'react-query'
import Planet from '../Planet'

const fetchPlanets = async () => {
  const res = await fetch('http://swapi.dev/api/planets/')
  return res.json()
}

function Planets() {
  const { isLoading, error, data } = useQuery('planet', fetchPlanets)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error data</div>

  return (
    <div>
      <h2>Planets</h2>
      {data.results.map((planet) => (
        <Planet key={planet.name} planet={planet} />
      ))}
    </div>
  )
}

export default Planets
