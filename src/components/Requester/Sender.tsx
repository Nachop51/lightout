import { useRequests } from '../../stores/requests'
import { LightoutRequest } from '../../types.d'
import { Tabs, TabsContent, TabsPanel, TabsPanelButton } from '../ui/Tabs'
import HandleSend from './HandleSend'

const Sender = () => {
  const currentReq = useRequests(s => s.selectedRequest) as LightoutRequest

  return (
    <section className='[grid-area:sender]'>
      <HandleSend request={currentReq} />

      <Tabs defaultTab='headers' className='mt-2'>
        <TabsPanel className='tabs-default'>
          <TabsPanelButton value='params'>
            Params
          </TabsPanelButton>
          <TabsPanelButton value='headers'>
            Headers
          </TabsPanelButton>
          <TabsPanelButton value='body'>
            Body
          </TabsPanelButton>
          <TabsPanelButton value='cookies'>
            Cookies
          </TabsPanelButton>
        </TabsPanel>

        <TabsContent value='params' className='tabs-body-default'>
          <h2 className='text-xl'>params</h2>
        </TabsContent>
        <TabsContent value='headers'>
          <h2 className='text-xl'>headers</h2>
        </TabsContent>
        <TabsContent value='body'>
          <h2 className='text-xl'>body</h2>
        </TabsContent>
        <TabsContent value='cookies'>
          <h2 className='text-xl'>cookies</h2>
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default Sender
