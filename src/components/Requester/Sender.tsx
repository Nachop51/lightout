import { useRequests } from '../../stores/requests'
import { LightoutRequest } from '../../types.d'
import HandleSend from './HandleSend'

const Sender = () => {
  const currentReq = useRequests(s => s.selectedRequest) as LightoutRequest

  return (
    <section>
      <HandleSend request={currentReq} />
    </section>
  )
}

export default Sender
