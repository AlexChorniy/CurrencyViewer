import { useEffect, useState } from 'react'
import { uuid } from './utils/helpers';
import {
  Wrapper,
  Container,
  Title,
  Main,
  Header,
  Base,
  List,
  ListItem,
  ItemKey,
  ItemValue,
  Img,
} from './StyledApp';
import apiRequests from './api/api';
import loader from './assets/loader.gif';

function App() {
  const [store, setStore] = useState({ pending: true, base: '', rates: [] });
  useEffect(function effect() {
    apiRequests()
      .then((res) => {
        setStore({ ...store, base: res?.base, rates: Object.entries(res?.rates), pending: false });
      });
  }, [store]);

  const listItems = store?.rates.map((item) =>
    <ListItem key={uuid()}>
      <ItemKey>
        {item[0]}
      </ItemKey>
      <ItemValue>
        {
          +item[1].toFixed(5)
        }
      </ItemValue>
    </ListItem>);
  return (
    <Wrapper>
      <Container>
        {
          store?.pending &&
          <Img
            position="absolute"
            left="50%"
            top="50%"
            height="30px"
            width="30px"
            src={loader}
          />
        }
        <Header>
          <Title>
            Currency
          </Title>
          <Base>
            {store?.base || 'please wait a moment...'}
          </Base>
        </Header>
        <Main>
          <List>
            {listItems}
          </List>
        </Main>
      </Container>
    </Wrapper>
  );
}

export default App;
