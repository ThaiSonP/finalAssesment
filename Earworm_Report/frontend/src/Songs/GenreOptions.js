import React from 'react'

export const GenreOptions = (props)=>{
  const {genres} = props
  console.log(genres)

    const MakeOptions = genres.map(el=>{
      return(
        <option key={el.id} value ={el.id}>
          {el.genre_name}
        </option>
      )
    })


  return(
    <>
      {MakeOptions}
    </>
  )

}
export default GenreOptions
