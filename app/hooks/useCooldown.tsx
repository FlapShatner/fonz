import { useAtom } from 'jotai'
import { cdMetaAtom } from '../state/atoms'
import { getTimeLeft, getHoursAndMinutes, addToArray } from '../utils'

export function useCooldown() {
 const [cdMeta, setCdMeta] = useAtom(cdMetaAtom)
 const { genCount, genTimes, isCd } = cdMeta

 //  console.log(cdMeta)
 const checkCooldown = () => {
  let cdMessage = { cd: false, message: '' }
  const timeLeft = getTimeLeft(genTimes[0])
  const { hours, minutes } = getHoursAndMinutes(timeLeft)
  if (Number(timeLeft) <= 0) {
   setCdMeta({ ...cdMeta, isCd: false, genTimes: addToArray(genTimes, Date.now()), genCount: 1 })
  }
  if (isCd) {
   console.log('On Cooldown')
   cdMessage = {
    cd: true,
    message: 'You have reached the limit of 8 generations per day. You may generate more designs in ' + hours + ' hours and ' + minutes + ' minutes.',
   }
   return cdMessage
  }
  if (genCount >= 7) {
   setCdMeta({ ...cdMeta, isCd: true, genTimes: addToArray(genTimes, Date.now()), genCount: genCount + 1 })
   cdMessage = { cd: false, message: '' }
   return cdMessage
  }
  if (genCount < 7) {
   setCdMeta({ ...cdMeta, genTimes: addToArray(genTimes, Date.now()), genCount: genCount + 1 })
   cdMessage = { cd: false, message: '' }
   return cdMessage
  }
  return cdMessage
 }

 return { checkCooldown }
}
