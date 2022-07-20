import React,{useState, useEffect} from 'react';
import {CardFilms} from '../../components/CardFilms';
import api from '../../services/api';
import { Loading } from '../../components/Loading/Loading';
import * as S from './styles';

export const Films = () => {
  const [results, setResults] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    async function getItems() {
      setLoad(true);
      try {
        setResults([]);
        const response = await api.get("/films");
        setResults(response.data.results);
        setLoad(false);
        console.log(response.data.results);
      } catch (error) {
        alert("Ocorreu um erro ao buscar os items" + error);
      }
    }
    getItems();
  }, []);
  {
    if(load === true){
    return(
      <S.ContainerLoad>
          <Loading/>
      </S.ContainerLoad>
    )
  }else {

    return(
     <>
        <S.TitlePage>Informações de filmes</S.TitlePage>
          <S.Container>
            {results.map((item, index) => {
              return (
                <CardFilms
                key={index}
                title={item.title}
                director={item.director}
                producer={item.producer}
                />
                );
              })}
          </S.Container>
      </>
      
    )
  }
}
}