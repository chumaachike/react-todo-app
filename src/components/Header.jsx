import React from 'react';

const Header = () =>{
  const headerStyle = {
    fontSize: "6rem",
    fontWeight: "600",
    marginBottom: "2rem",
    lineHeight: "1em",
    color: "#ececec",
    textTransform: "lowercase",
    textAlign: "center",
  }
  return (
    <header>
      <h1
       style={headerStyle}
      >Todos</h1>
    </header>
  )
}

export default Header