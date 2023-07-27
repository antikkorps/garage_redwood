import { Link, routes } from '@redwoodjs/router'

import Equipments from 'src/components/Equipment/Equipments'

export const QUERY = gql`
  query FindEquipments {
    equipments {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No equipments yet. '}
      <Link to={routes.newEquipment()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ equipments }) => {
  return <Equipments equipments={equipments} />
}
