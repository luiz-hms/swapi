import React from 'react';
import * as S from './styles'
import Lottie from 'react-lottie';
import loadingFile from '../../assets/lottieAnimation/loadAnimation.json'

/* componente criado com a biblioteca lottie que faz as
 animação de um arquivo no formato json*/
export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: loadingFile,
  }
  return (
    <S.Container>
      <Lottie 
        options={defaultOptions}
        height={400}
        width={400}
      />
      <h4>CARREGANDO...</h4>
    </S.Container>
  )
}