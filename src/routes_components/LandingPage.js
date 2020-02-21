import React, { Component } from 'react'


export default class LandingPage extends Component {
  render() {
    return (
      <section className='LandingPage'>
      <h3>Hello!</h3>
      <p>Bobapedia is a collection of bubble (or boba) tea recipes. The Classic page is where you'll find the "top" 15 bubble teas. Clicking on one will direct you to the recipe to make that tea. The Creation page is where you can make your own tea recipe as well as view other teas made by other users. You can also update or delete the teas you have made. However, you must have an account to view or use this page. Please use the register tab to make an account. If for some reason that does not work, you may log in with dunder mifflin's account.</p>
      <p>User Name: dunder</p>
      <p>Password: mifflin</p> 
      </section>
    )
  }
}