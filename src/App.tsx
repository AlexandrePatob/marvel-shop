
import { useEffect } from 'react';
import { Advertsment } from './components/Advertsment';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ImageList } from './components/ImageList';
import { SearchBar } from './components/SearchBar';
import { SearchProvider } from './contexts/SearchContext';
import { GlobalStyle } from './styles/global';

function App() {

  return (
    <div className="App" >
      <SearchProvider>
        <Header />

        <SearchBar />

        <ImageList />
      </SearchProvider>

      <Footer />

      <GlobalStyle />
    </div >
  );
}

export default App;
