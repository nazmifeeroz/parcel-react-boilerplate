import React from 'react'
import useHOC from './HOC'

const SignInPage = () => (
  <div>
    <h1>Sign in</h1>
    <SignInForm />
  </div>
)

const SignInForm = () => {
  const { current, send } = useHOC()
  return (
    <form onSubmit={event => send('SUBMIT', { event })}>
      <input
        name="email"
        value={current.context.email}
        onChange={event => send('CHANGE', { event })}
        type="text"
        placeholder="Email Address"
        onFocus={() => send('EDIT')}
        onBlur={() => send('BLUR')}
      />
      <input
        name="password"
        value={current.context.password}
        onChange={event => send('CHANGE', { event })}
        type="password"
        placeholder="Password"
        onFocus={() => send('EDIT')}
        onBlur={() => send('BLUR')}
      />
      <button disabled={current.context.isInvalid} type="submit">
        Sign In
      </button>

      {current.context.error && <p>{current.context.error.message}</p>}
    </form>
  )
}

export default SignInPage

export { SignInForm }
