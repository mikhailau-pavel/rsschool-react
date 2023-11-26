import React from "react";
import MovieResult from "./MovieResult/MovieResult";
import TopBar from './TopBar/TopBar'

export default function Layout({ children }) {
    return (
      <div style={{display: 'flex'}}>
        <div style={{flex: 1, alignItems: 'center', padding: '20px', margin: '0 auto'}}>
        <TopBar/>
        <MovieResult/>
        </div>
 
        <main style={{maxWidth: '350px'}}>{children}</main>
      </div>
    )
  }