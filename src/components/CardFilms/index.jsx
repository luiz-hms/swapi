import React from 'react';

import * as S from './styles';

export const CardFilms = ({title, director, producer}) => {
  return(
    <S.Container>
      <h2>
        {`título: ${title}`}
      </h2>
      <h3>
        {`diretor: ${director}`}
      </h3>
      <h3>
        {`produtor: ${producer}`}
      </h3>
    </S.Container>
  )
}