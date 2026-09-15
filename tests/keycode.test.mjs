import test from 'node:test';
import assert from 'node:assert/strict';
import { puzzleFor, score } from '../src/lib/keycode.ts';

test('feedback distinguishes exact, misplaced, and absent notes', () => {
  assert.deepEqual(score([0, 4, 9, 10], [0, 7, 4, 9]), ['exact', 'present', 'present', 'absent']);
  assert.deepEqual(score([0, 7, 4, 9], [0, 7, 4, 9]), Array(4).fill('exact'));
});

test('daily puzzles are deterministic and contain four distinct chromatic notes', () => {
  for (let day = 0; day < 365; day++) {
    const date = new Date(Date.UTC(2026, 0, 1 + day)).toISOString().slice(0, 10);
    const notes = puzzleFor(date);
    assert.equal(notes.length, 4);
    assert.equal(new Set(notes).size, 4);
    assert(notes.every(note => Number.isInteger(note) && note >= 0 && note < 12));
    assert.deepEqual(notes, puzzleFor(date));
  }
});

test('published launch puzzle stays stable', () => {
  assert.deepEqual(puzzleFor('2026-09-15'), [1, 11, 4, 2]);
});
