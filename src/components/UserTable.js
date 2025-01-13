import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_USERS } from '../graphql/queries';
import { useAuth } from '../utils/auth';

const UserTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuth();
  const { loading, error, data } = useQuery(SEARCH_USERS, {
    variables: { searchTerm },
    fetchPolicy: 'network-only'
  });

  // Danish date formatter
  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('da-DK', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch (error) {
      return 'Ugyldig dato';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        Fejl: {error.message}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Brugere</h1>
        {user?.role === 'admin' && (
          <a
            href="/admin"
            className="bg-slate-800/80 backdrop-blur-sm text-white px-6 py-2.5 rounded-full hover:bg-slate-700/80 transition-all duration-300 hover:scale-105"
          >
            Admin panel
          </a>
        )}
      </div>
      
      <div className="mb-4 w-1/3">
        <input
          type="text"
          placeholder="Søg efter brugere..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
        />
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Medlemsnr.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Navn
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Telefon
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Adresse
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rolle
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Oprettet
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.username}  {/* We'll need to change this field name in the backend */}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.phoneNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {user.role === 'admin' ? 'Administrator' : 'Bruger'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatDate(user.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;