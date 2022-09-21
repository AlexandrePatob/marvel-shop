import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ComicList } from './components/ComicList';
import { SearchBar } from './components/SearchBar';
import { SearchProvider } from './contexts/SearchContext';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Header />

        <SearchBar />

        <ComicList />
      </SearchProvider>

      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
