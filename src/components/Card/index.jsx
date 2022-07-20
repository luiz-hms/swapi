import React from 'react';

import * as S from './styles';

export const Card = ({name, birth, gender}) => {
 let  gen = gender;
  if(gender === 'n/a'){
    gen = 'não informado';
  }
  return(
    <S.Container>
      <h2>
        {`Nome: ${name}`}
      </h2>
      <h3>
        {`Nascimento: ${birth}`}
      </h3>
      <h3>
        {`Gênero: ${gen}`}
      </h3>
    </S.Container>
  )
}