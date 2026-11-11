import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateDominantStyles, generateCustomProfileFromSelections } from './aiRecommender';
import { catalogProducts } from '../data/mockData';

test('calculateDominantStyles properly identifies the most frequent category', () => {
  // Pick 2 executivo and 1 jovem
  const selected = [catalogProducts[0], catalogProducts[1], catalogProducts[3]];
  const result = calculateDominantStyles(selected);

  assert.equal(result.primary, 'executivo');
  assert.equal(result.secondary, 'jovem');
  assert.equal(result.distribution.executivo, 2);
  assert.equal(result.distribution.jovem, 1);
  assert.equal(result.distribution.casual, 0);
});

test('generateCustomProfileFromSelections creates profile 05 with personalized copy', () => {
  const selected = [catalogProducts[3], catalogProducts[4], catalogProducts[5]]; // all jovem
  const profile = generateCustomProfileFromSelections(selected, 'Prof. Marcos');

  assert.equal(profile.isCustomGenerated, true);
  assert.equal(profile.dominantStyle, 'jovem');
  assert.ok(profile.title.includes('Perfil 05:'));
  assert.equal(profile.personaName, 'Prof. Marcos');
  assert.ok(profile.emailMarketing.subject.includes('Prof. Marcos'));
  assert.ok(profile.emailMarketing.body.length > 30);
  assert.ok(profile.socialMediaPost.caption.length > 20);
  assert.equal(profile.recommendedProducts.length >= 3, true);
});
