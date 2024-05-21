import { useEffect } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { WS_URL } from '../lib/ws'
import { useAtom } from 'jotai'
import { wsIdAtom, wsMessageAtom, generatedAtom, promptHistoryAtom } from '../state/atoms'

export function useWS() {
 const [wsId, setWsId] = useAtom(wsIdAtom)
 const [wsMessage, setWsMessage] = useAtom(wsMessageAtom)
 const [, setGenerated] = useAtom(generatedAtom)
 const [, setPromptHistory] = useAtom(promptHistoryAtom)
 const { sendJsonMessage, sendMessage, lastJsonMessage, readyState } = useWebSocket(WS_URL, {
  share: true,
  shouldReconnect: () => true,
 })

 const connectionStatus = {
  [ReadyState.CONNECTING]: 'Connecting',
  [ReadyState.OPEN]: 'Open',
  [ReadyState.CLOSING]: 'Closing',
  [ReadyState.CLOSED]: 'Closed',
  [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
 }[readyState]

 useEffect(() => {
  if (readyState === 1) {
   console.log('connected')
  }
 }, [readyState])

 type WsMessage = {
  event: string
  data: any
  id: string
 }

 useEffect(() => {
  if (lastJsonMessage) {
   if ((lastJsonMessage as WsMessage).event === 'id') {
    console.log('id:', (lastJsonMessage as WsMessage).id)
    setWsId((lastJsonMessage as WsMessage).id)
   }
   if ((lastJsonMessage as WsMessage).event === 'generate') {
    const { event, data, id } = lastJsonMessage as WsMessage
    setGenerated(data)
    setPromptHistory((prev) => [...prev, data])
    console.log('generate data:', data)
   }
  }
 }, [lastJsonMessage])

 const clearWsMessage = () => {
  setWsMessage({ event: '', data: '', id: '' })
 }

 useEffect(() => {
  if (wsMessage.event === '') return
  if (connectionStatus === 'Open') {
   switch (wsMessage.event) {
    case 'generate':
     console.log('sending generate')
     sendMessage(JSON.stringify({ event: 'generate', data: wsMessage, id: wsId }))
     clearWsMessage()
     break
    case 'variations':
     console.log('sending variations')
     sendMessage(JSON.stringify({ event: 'variations', data: wsMessage, id: wsId }))
     clearWsMessage()
     break
    case 'upscale':
     console.log('sending upscale')
     sendMessage(JSON.stringify({ event: 'upscale', data: wsMessage, id: wsId }))
     clearWsMessage()
     break
    default:
     console.log('Uncaught event:', wsMessage.event)
   }
   return
  } else {
   console.log('not connected')
  }
 }, [wsMessage])
}
