import Auth from './Auth'
import DashboardController from './DashboardController'
import TutoriaController from './TutoriaController'
import TutoriaCalendarController from './TutoriaCalendarController'
import Settings from './Settings'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
DashboardController: Object.assign(DashboardController, DashboardController),
TutoriaController: Object.assign(TutoriaController, TutoriaController),
TutoriaCalendarController: Object.assign(TutoriaCalendarController, TutoriaCalendarController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers