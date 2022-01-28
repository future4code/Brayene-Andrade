import * as S from './styled'
import { useState } from 'react'
import SearchInput from '../SearchInput'
import { useEffect } from 'react/cjs/react.development';


const BASE_URL =`https://api.themoviedb.org/3`
const Header = () => {
  const [info, setInfo] = useState ({})
  const [text, setText] = useState('')


  useEffect(() => {
    if (text) {
      fetch(`${BASE_URL}/search/movie?api_key={api_key}&query=${text}`)
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
        })
    }
  }, [text])



  return (
    <S.Header>
      <h1> Find your movie </h1>
        <SearchInput 
        value={text} 
        onChange={(search) => setText (search)} 
       placeholder = "Type your survey here "
      />
    

    </S.Header>

  );
};


export default Header;
