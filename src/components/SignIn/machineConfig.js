import { assign, Machine } from 'xstate'
// import * as ROUTES from '@constants/routes'

export default Machine(
  {
    id: 'signIn',
    initial: 'ready',
    states: {
      ready: {
        on: {
          EDIT: 'editing',
          SUBMIT: 'submitting',
        },
      },
      editing: {
        on: {
          CHANGE: {
            actions: ['assignValue', 'checkIsValid'],
          },
          BLUR: 'ready',
          SUBMIT: 'submitting',
        },
      },
      submitting: {
        invoke: {
          src: 'userSignIn',
          onDone: {
            target: 'success',
          },
          onError: {
            target: 'ready',
            actions: 'assignError',
          },
        },
      },
      success: {
        type: 'final',
        // onEntry: 'routeOnSuccess',
      },
    },
  },
  {
    actions: {
      checkIsValid: assign(context => ({
        isInvalid: context.password === '' || context.email === '',
      })),
      assignValue: assign((_ctx, { event }) => ({
        [event.target.name]: event.target.value,
      })),
      assignError: assign((_ctx, response) => ({ error: response.data })),
      routeOnSuccess: ctx => ctx.history.push(ROUTES.HOME),
    },
    services: {
      userSignIn: (ctx, { event }) => {
        event.preventDefault()
        return ctx.signInUser({ email: ctx.email, password: ctx.password })
      },
    },
  }
)
