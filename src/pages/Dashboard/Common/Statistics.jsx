
// import GuestStatistics from '../../../components/Dashboard/Statistics/Guest/GuestStatistics'
// import HostStatistics from '../../../components/Dashboard/Statistics/Host/HostStatistics'

import AdminStatistics from "../../../components/Dashboard/Statistics/AdminStatistics"
import useRole from "../../../hooks/useRole"

const Statistics = () => {
  const [role] = useRole()
  console.log(role)
  return (
    <div>
      
      {/* {role === 'guest' && <GuestStatistics />}
      {role === 'host' && <HostStatistics />}*/}
      {role === 'admin' && <AdminStatistics />}
    </div>
  )
}

export default Statistics