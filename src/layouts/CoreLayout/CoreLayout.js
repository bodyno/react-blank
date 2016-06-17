import React from 'react'
import Header from '../../components/Header'

export default CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div>
      {children}
    </div>
  </div>
)
