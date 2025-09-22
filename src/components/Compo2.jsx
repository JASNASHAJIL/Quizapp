import React, { useContext, useState } from "react";
import { UserContext } from "./Usecontext";

export default function Compo2() {
  const { users = [] } = useContext(UserContext); 
  const [searchInput, setSearchInput] = useState(""); 
  const [search, setSearch] = useState(""); 


  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(search.toLowerCase()) ||
      user.email?.toLowerCase().includes(search.toLowerCase()) ||
      user.mobile?.toLowerCase().includes(search.toLowerCase())
  );

  const styles = {
    table: { width: "100%", borderCollapse: "collapse", marginTop: "20px", backgroundColor: "white" },
    thtd: { border: "1px solid #ddd", padding: "10px", textAlign: "left" },
    th: { border: "1px solid #ddd", padding: "10px", textAlign: "left", backgroundColor: "black", color: "white" },
    input: { padding: "8px", width: "200px", marginRight: "10px", border: "1px solid #ccc", borderRadius: "4px" },
    button: { padding: "8px 15px", backgroundColor: "black", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginRight: "5px" },
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Search box + buttons */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={searchInput}
          placeholder="Search..."
          onChange={(e) => setSearchInput(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={() => setSearch(searchInput)} // apply the search term
          style={styles.button}
        >
          Search
        </button>
        <button
          onClick={() => {
            setSearchInput("");
            setSearch("");
          }}
          style={styles.button}
        >
          Clear
        </button>
      </div>

      {/* Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>No</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length ? (
            filteredUsers.map((user, index) => (
              <tr key={user.id || index}>
                <td style={styles.thtd}>{index + 1}</td>
                <td style={styles.thtd}>{user.name}</td>
                <td style={styles.thtd}>{user.email}</td>
                <td style={styles.thtd}>{user.mobile}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ ...styles.thtd, textAlign: "center" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
