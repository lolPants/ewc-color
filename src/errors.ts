export const ERR_INVALID_STR_HASH = new Error(
  'Invalid hex string!\nHex string must begin with a # character.'
)

export const ERR_INVALID_STR_CHARS = new Error(
  'Invalid hex string!\nHex string must only contain valid hex characters.'
)

export const ERR_INVALID_STR_LEN = new Error(
  'Invalid hex string!\nHex code must be 3, 6, or 8 characters longs.'
)
