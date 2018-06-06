import config from 'config'
import { pinFormation } from './utilities'

const { url, credentials } = config
const {
  customerId, loginId, pin, password,
} = credentials

const globalConfiguration = {
  url,
  customerId,
  loginId,
  ...pinFormation({ stringConcat: 'pin', arraySplit: pin }),
  ...pinFormation({ stringConcat: 'pass', arraySplit: password}),
}
export default globalConfiguration
