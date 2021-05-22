import styeld from 'styled-components';

function App() {
  return (
    <AppStyled>
      <h1>Portf</h1>
    </AppStyled>
  );
}

const AppStyled = styeld.div`
    background-color: red;
`;
export default App;
