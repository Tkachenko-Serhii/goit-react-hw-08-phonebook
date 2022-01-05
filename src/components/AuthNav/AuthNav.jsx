import React from "react";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div>
      <NavLink to='/signup' className='link'>
        Registration
      </NavLink>
      <NavLink to='/login' className='link'>
        Login
      </NavLink>
    </div>
  );
}
