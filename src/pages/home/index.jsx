/* eslint-disable no-lone-blocks */
import React,{useState, useEffect} from 'react';
import {Card} from '../../components/Card';
import api from '../../services/api';
import { Loading } from '../../components/Loading/Loading';
// * importa todos os estilos do arquivos styles
import * as S from './styles';

export const Home = () => {
  const [results, setResults] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    async function getItems() {
      setLoad(true);
      try {
        setResults([]);
        const response = await api.get("/people");
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
    /*verifica se está sendo feita a requisição na api e caso true,
     renderisa o componente de loading*/
    if(load === true){
    return(
      <S.ContainerLoad>
          <Loading/>
      </S.ContainerLoad>
    )
  }else {

    return(
     <>
        <S.TitlePage>Informações de personagens</S.TitlePage>
          <S.Container>
            {results.map((item, index) => {
            return (
              <Card
              key={index}
              name={item.name}
              birth={item.birth_year}
              gender={item.gender}
              />
              );
            })}
          </S.Container>
      </>
      
    )
  }
}
}