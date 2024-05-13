// App.js

import React, { useState, useEffect } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Grid, IconButton, InputAdornment } from "@mui/material";
import UserProfileCard from "./components/UserProfileCard ";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [userData, setUserData] = useState([]);
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => setUserData(data));

    fetch("http://localhost:3001/navItems")
      .then((response) => response.json())
      .then((data) => setNavItems(data));
  }, []);

  const filteredUserData = userData.filter((user) =>
    user.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <Box className="main">
      <div className="container">
        <h2 className="heading">Users</h2>
        <Box className="navbar">
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="search-input"
            placeholder="Search users"
            value={searchInput}
            onChange={handleSearchInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <ul className="nav">
            {navItems.map((item) => (
              <li key={item.id} className={`nav-item ${item.active ? "active" : ""}`}>
                {item.label}
              </li>
            ))}
          </ul>
        </Box>
      </div>
      <Box className="cards-section">
        <Grid container spacing={3}>
          {filteredUserData.map((user, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={4}
              justifyContent={"center"}
            >
              <UserProfileCard
                name={user.name}
                description={user.description}
                imageSrc={user.imageSrc}
                items={user.items}
                className="user-card"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
