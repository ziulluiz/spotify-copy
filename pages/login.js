import React from 'react'
import { getProviders, signIn } from "next-auth/react";

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  )
}

export default Login

export async function getServeSideProps(){
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}
