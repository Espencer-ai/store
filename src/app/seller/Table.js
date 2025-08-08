export default function Table({ columns, data, onDetailsClick }) {
  return (
    <table className="min-w-full bg-white shadow rounded overflow-hidden">
      <thead className="bg-blue-100 text-gray-700 text-left">
        <tr>
          {columns.map((col) => (
            <th key={col} className="px-4 py-3 border-b">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="hover:bg-blue-50 transition">
            <td className="px-4 py-2 border-b">{row.id}</td>
            <td className="px-4 py-2 border-b">{row.name}</td>
            <td className="px-4 py-2 border-b">{row.status}</td>
            <td className="px-4 py-2 border-b">
              <button
                onClick={() => onDetailsClick(row)}
                className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm"
              >
                Details
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
