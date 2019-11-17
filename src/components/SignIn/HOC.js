import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useMachine } from '@xstate/react'
import { FirebaseContext } from '@components/Firebase'
import signInMachine from './machineConfig'

const HOC = () => {
  const firebase = useContext(FirebaseContext)
  const history = useHistory()

  const signInUser = userLogin => {
    return new Promise((resolve, reject) => {
      firebase
        .doSignInWithEmailAndPassword(userLogin.email, userLogin.password)
        .then(() => {
          resolve()
        })
        .catch(error => reject(error))
    })
  }

  const [current, send] = useMachine(
    signInMachine.withContext({
      email: '',
      error: null,
      history,
      isInvalid: true,
      password: '',
      signInUser,
    })
  )

  return {
    current,
    send,
  }
}

export default HOC
