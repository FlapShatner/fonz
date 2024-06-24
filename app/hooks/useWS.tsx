import { useEffect } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { WS_URL } from '../lib/ws'
import { useAtom } from 'jotai'
import useModOptions from './useModOptions'
import {
 wsIdAtom,
 wsMessageAtom,
 generatedAtom,
 promptHistoryAtom,
 statusAtom,
 isLoadingAtom,
 selectedImageAtom,
 selectedImageDefault,
 isUpscalingAtom,
 upscaleAndAddAtom,
 upscaleAndDownloadAtom,
} from '../state/atoms'

export function useWS() {
 const [wsId, setWsId] = useAtom(wsIdAtom)
 const [wsMessage, setWsMessage] = useAtom(wsMessageAtom)
 const [, setGenerated] = useAtom(generatedAtom)
 const [, setPromptHistory] = useAtom(promptHistoryAtom)
 const [, setStatus] = useAtom(statusAtom)
 const [, setIsLoading] = useAtom(isLoadingAtom)
 const [, setSelectedImage] = useAtom(selectedImageAtom)
 const [, setIsUpscaling] = useAtom(isUpscalingAtom)
 const [upscaleAndAdd, setUpscaleAndAdd] = useAtom(upscaleAndAddAtom)
 const [upscaleAndDownload, setUpscaleAndDownload] = useAtom(upscaleAndDownloadAtom)
 const { sendJsonMessage, sendMessage, lastJsonMessage, readyState } = useWebSocket(WS_URL, {
  share: true,
  shouldReconnect: () => true,
 })

 const modOptions = useModOptions()

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
   const { id, data, event } = lastJsonMessage as WsMessage
   if (event === 'id') {
    console.log('id:', id as string)
    setWsId(id as string)
   }
   if (event === 'status') {
    setStatus(data)
    console.log('status:', data)
   }
   if (event === 'generate' || event === 'variations') {
    setGenerated(data)
    setSelectedImage(selectedImageDefault)
    setIsLoading(false)
    setStatus('0%')
    setPromptHistory((prev) => [data, ...prev])
    console.log(event, ' data:', data)
   }
   if (event === 'upscale') {
    setGenerated(data)
    setSelectedImage(data)
    setIsUpscaling(false)
    setIsLoading(false)
    setStatus('0%')
    setPromptHistory((prev) => [data, ...prev])
    console.log(event, ' data:', data)
    if (upscaleAndAdd.cart) {
     const addCartData = {
      up: true,
      imageUrl: data.imgData.url,
      publicId: data.imgData.publicId,
      productId: data.productId,
      wi: upscaleAndAdd.wi,
     }
     modOptions.purchase.addToCart(addCartData)
     setUpscaleAndAdd({ cart: false, wi: false })
    }
    if (upscaleAndDownload) {
     const downloadData = {
      up: true,
      imageUrl: data.imgData.url,
      publicId: data.imgData.publicId,
     }
     const up = true
     modOptions.download.download(up, data.imgData.url, data.caption)
     setUpscaleAndDownload(false)
    }
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
     setIsLoading(true)
     console.log('sending generate')
     sendMessage(JSON.stringify({ event: 'generate', data: wsMessage, id: wsId }))
     clearWsMessage()
     break
    case 'variations':
     setIsLoading(true)
     console.log('sending variations')
     sendMessage(JSON.stringify(wsMessage))
     clearWsMessage()
     break
    case 'upscale':
     console.log('sending upscale')
     setIsLoading(true)
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
