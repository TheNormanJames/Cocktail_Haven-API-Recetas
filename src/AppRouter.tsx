import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPages from './views/IndexPages';
import FavoritesPage from './views/FavoritesPage';
import Layout from './layouts/Layout';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPages />} index />
          <Route path="/Favoritos" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
