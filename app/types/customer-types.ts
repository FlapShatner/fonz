export type MarketingState = 'INVALID' | 'NOT_SUBSCRIBED' | 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'PENDING' | 'REDACTED'

export type EmailAddress = {
 emailAddress: string
 marketingState: MarketingState
}

export type Customer = {
 emailAddress: EmailAddress
 displayName: string
}
