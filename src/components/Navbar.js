// client/src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-slate-200 transition-colors">
              Hjem
            </Link>
            <Link to="/formal" className="text-white hover:text-slate-200 transition-colors">
              Formål
            </Link>
            <Link to="/om-os" className="text-white hover:text-slate-200 transition-colors">
              Om os
            </Link>
            <Link to="/medlem" className="text-white hover:text-slate-200 transition-colors">
              Medlem
            </Link>
            <Link to="/book-os" className="text-white hover:text-slate-200 transition-colors">
              Book os
            </Link>
            <Link to="/presse" className="text-white hover:text-slate-200 transition-colors">
              Presse
            </Link>
            <Link to="/kontakt" className="text-white hover:text-slate-200 transition-colors">
              Kontakt
            </Link>
            
            {isAuthenticated && (
              <>
                <Link to="/users" className="text-white hover:text-slate-200 transition-colors">
                  Users
                </Link>
                {user?.role === 'admin' && (
                  <Link to="/admin" className="text-white hover:text-slate-200 transition-colors">
                    Admin
                  </Link>
                )}
              </>
            )}
            
            {!isAuthenticated ? (
              <Link 
                to="/login" 
                className="bg-slate-800/80 backdrop-blur-sm text-white px-6 py-2.5 rounded-full hover:bg-slate-700/80 transition-all duration-300 hover:scale-105"
              >
                Log ind
              </Link>
            ) : (
              <button
                onClick={() => {
                  logout();
                  navigate('/');
                }}
                className="bg-slate-800/80 backdrop-blur-sm text-white px-6 py-2.5 rounded-full hover:bg-slate-700/80 transition-all duration-300 hover:scale-105"
              >
                Log ud
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;