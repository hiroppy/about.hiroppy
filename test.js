'use strict';

const test = require('tape');
const me = require('.');

test('should return me', (t) => {
  t.plan(6);

  t.is(me.name, 'Yuta Hiroto');
  t.is(me.site, 'http://about-hiroppy.com/');
  t.is(me.mail, 'hello@about-hiroppy.com');
  t.is(me.color, '#3498db');
  t.is(me.company, 'dwango');
  t.deepLooseEqual(me.sns, {
    twitter: 'about_hiroppy',
    github: 'abouthiroppy',
    facebook: 'abouthiroppy',
    instagram: 'about_hiroppy'
  });
});
