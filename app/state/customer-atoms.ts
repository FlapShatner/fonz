import { atom } from 'jotai'
import { Customer } from '../types/customer-types'

export const customerAtom = atom<Customer | undefined>(undefined)
