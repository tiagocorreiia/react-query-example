import React from 'react'
import { useQuery } from 'react-query'
import Person from '../Person'

const fetchPeople = async () => {
  const res = await fetch('http://swapi.dev/api/people/')
  return res.json()
}

function People() {
  const { isLoading, error, data } = useQuery('people', fetchPeople)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error data</div>

  return (
    <div>
      <h2>People</h2>
      {data.results.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  )
}

export default People
