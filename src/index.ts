import { INVALID_STR_CHARS, INVALID_STR_HASH, INVALID_STR_LEN } from './errors'

/**
 * Convert a hex string to an ABGR number
 * @param hex Hex String
 */
export const convert = (hex: string) => {
  if (!hex.startsWith('#')) {
    throw INVALID_STR_HASH
  }

  const stripped = hex.replace(/^#(.+)/, '$1')
  const validRX = /[^0-9a-f]/g
  if (stripped.length !== stripped.replace(validRX, '').length) {
    throw INVALID_STR_CHARS
  }

  if (
    !(stripped.length === 3 || stripped.length === 6 || stripped.length === 8)
  ) {
    throw INVALID_STR_LEN
  }

  const tuple =
    stripped.length === 3
      ? stripped.split(/(.{1})/).filter(x => x)
      : stripped.split(/(.{2})/).filter(x => x)

  type RGBA = [string, string, string, string]
  const rgba: (input: string[]) => RGBA = input => {
    const [w, x, y, z] = input

    const double = (color: string) =>
      color.length === 1 ? color.repeat(2) : color

    const r = double(w)
    const g = double(x)
    const b = double(y)
    const a = z === undefined ? '20' : double(z)

    return [r, g, b, a]
  }

  const ABGR = [...rgba(tuple)].reverse()
  return parseInt(ABGR.join(''), 16)
}
