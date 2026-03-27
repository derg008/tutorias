import LogoutController from './LogoutController'
import RegisterStudentController from './RegisterStudentController'
const Auth = {
    LogoutController: Object.assign(LogoutController, LogoutController),
RegisterStudentController: Object.assign(RegisterStudentController, RegisterStudentController),
}

export default Auth