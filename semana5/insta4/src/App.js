import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />  
        <Post
          nomeUsuario={'thiaguinho'}
          fotoUsuario={'https://stcotvfoco.com.br/2021/07/thiaguinho--1024x682.jpg'}
          fotoPost={'https://picsum.photos/200/150?a=2'}
        />

        <Post
          nomeUsuario={'maisinha'}
          fotoUsuario={'https://s2.glbimg.com/vSUhYzI-f591extb9ItknZBs95c=/620x520/e.glbimg.com/og/ed/f/original/2020/08/13/maisa-tiktoker.jpg'}
          fotoPost={'https://picsum.photos/200/150?a=3'}
        />


      </MainContainer>
    );
  }
}

export default App;
