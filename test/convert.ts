import test from 'ava'
import { convert } from '../src'
import {
  ERR_INVALID_STR_CHARS,
  ERR_INVALID_STR_HASH,
  ERR_INVALID_STR_LEN,
} from '../src/errors'

// Hex Hash Character Test
test('throws for "00ffee"', t => {
  t.throws(() => convert('00ffee'), ERR_INVALID_STR_HASH.message)
})

// #region Length Tests
test('does not throw for valid lengths (3, 6, 8)', t => {
  t.notThrows(() => convert('#fff'))
  t.notThrows(() => convert('#ffffff'))
  t.notThrows(() => convert('#ffffffff'))
})

test('throws for invalid lengths', t => {
  t.throws(() => convert('#f'), ERR_INVALID_STR_LEN.message)
  t.throws(() => convert('#ff'), ERR_INVALID_STR_LEN.message)
  t.throws(() => convert('#ffff'), ERR_INVALID_STR_LEN.message)
  t.throws(() => convert('#fffff'), ERR_INVALID_STR_LEN.message)
  t.throws(() => convert('#fffffff'), ERR_INVALID_STR_LEN.message)
  t.throws(() => convert('#fffffffff'), ERR_INVALID_STR_LEN.message)
  t.throws(() => convert('#ffffffffffff'), ERR_INVALID_STR_LEN.message)
  t.throws(() => convert('#ffffffffffffffffffff'), ERR_INVALID_STR_LEN.message)
})
// #endregion

// #region Content Tests
test('throws when invalid hex characters are passed', t => {
  t.throws(() => convert('#xyz'), ERR_INVALID_STR_CHARS.message)
  t.throws(() => convert('#xxyyzz'), ERR_INVALID_STR_CHARS.message)
  t.throws(() => convert('#xxyyzzww'), ERR_INVALID_STR_CHARS.message)
})

test('throws when a mix of valid and invalid hex characters are passed', t => {
  t.throws(() => convert('#f0y'), ERR_INVALID_STR_CHARS.message)
  t.throws(() => convert('#fe7y0z'), ERR_INVALID_STR_CHARS.message)
  t.throws(() => convert('#fe7y0zah'), ERR_INVALID_STR_CHARS.message)
})

test('does not throw when valid hex characters are passed', t => {
  t.notThrows(() => convert('#fe0'))
  t.notThrows(() => convert('#f1e203'))
  t.notThrows(() => convert('#f1e203d4'))
})
// #endregion

// #region Return Value Tests
test('converts short form hex codes', t => {
  const input = '#f0e'
  const expected = 0x20ee00ff

  t.notThrows(() => convert(input))
  const result = convert(input)
  t.is(result, expected)
})

test('converts normal form hex codes', t => {
  const input = '#f102e3'
  const expected = 0x20e302f1

  t.notThrows(() => convert(input))
  const result = convert(input)
  t.is(result, expected)
})

test('converts long form hex codes', t => {
  const input = '#f102e344'
  const expected = 0x44e302f1

  t.notThrows(() => convert(input))
  const result = convert(input)
  t.is(result, expected)
})
// #endregion
