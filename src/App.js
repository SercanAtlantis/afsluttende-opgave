import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';
import { AuthProvider } from './utils/auth';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import UserTable from './components/UserTable';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import FormalPage from './components/FormalPage';
import OmOsPage from './components/OmOsPage';
import MedlemPage from './components/MedlemPage';
import BookOsPage from './components/BookOsPage';
import PressePage from './components/PressePage';
import KontaktPage from './components/KontaktPage';


function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/formal" element={<FormalPage />} />
              <Route path="/Om-os" element={<OmOsPage />} />
              <Route path="/medlem" element={<MedlemPage />} />
              <Route path="/book-os" element={<BookOsPage />} />
              <Route path="/presse" element={<PressePage />} />
              <Route path="/kontakt" element={<KontaktPage />} />
              <Route 
                path="/users" 
                element={
                  <PrivateRoute>
                    <UserTable />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/admin" 
                element={
                  <PrivateRoute requireAdmin>
                    <AdminDashboard />
                  </PrivateRoute>
                } 
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;