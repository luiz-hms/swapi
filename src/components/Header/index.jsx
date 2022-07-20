import React from 'react';
import * as S from './styles';

import { Link} from "react-router-dom";
export const Header = () => {
  return(
    <S.Container>
      <S.Area>
    <h1>STAR WARS</h1>
    <header>
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/films">Filmes</Link>
        </li>
      </ul>
    </header>
      </S.Area>
    </S.Container>
  )
}