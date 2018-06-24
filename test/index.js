const chai = require('chai');

const expect = chai.expect;

const { Enumerator } = require('../src/index');

describe('lib/types', () => {
  describe('Enumerator', () => {
    describe('#constructor(array, options = {})', () => {
      context(`([ 'one', 'two', 'three' ], nothing)`, () => {
        const enumerator = new Enumerator([ 'one', 'two', 'three' ]);
        it('- should construct a new Enumerator instance', done => {
          expect(enumerator instanceof Enumerator).to.be.true
          done();
        });
        it(`- instance's case sensitivity should have been defaulted to false`, done => {
          expect(enumerator._caseSensitive).to.be.false;
          expect(enumerator._caseSensitive).to.eq(false);
          done();
        });
        it(`- should have getter properties correlating to the passed in array values and instance's case sensitivity`, done => {
          expect(enumerator).to.haveOwnPropertyDescriptor('ONE', 'ONE');
          expect(enumerator).to.haveOwnPropertyDescriptor('TWO', 'TWO');
          expect(enumerator).to.haveOwnPropertyDescriptor('THREE', 'THREE');
          done();
        });
        it(`- should have enumerations array property housing enumeration key: value pair references for the Enumerator Instance`, done => {
          expect(enumerator).to.have.property('enumerations');
          expect(enumerator.enumerations instanceof Array).to.be.true;
          expect(enumerator.enumerations instanceof Array).to.eq(true);
          expect(enumerator.enumerations.length).to.eq(3);
          expect(enumerator.enumerations[0]).to.have.property('key', 'ONE');
          expect(enumerator.enumerations[0]).to.have.property('value', 'ONE');
          expect(enumerator.enumerations[1]).to.have.property('key', 'TWO');
          expect(enumerator.enumerations[1]).to.have.property('value', 'TWO');
          expect(enumerator.enumerations[2]).to.have.property('key', 'THREE');
          expect(enumerator.enumerations[2]).to.have.property('value', 'THREE');
          done();
        });
        describe('#validValue(value)', () => {
          context(`('ONE')`, () => {
            it('- should return true', done => {
              const result = enumerator.validValue('ONE');
              expect(enumerator.validValue('ONE')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('one')`, () => {
            it('- should return true due to no case sensitivity enforcement by this Enumerator instance', done => {
              const result = enumerator.validValue('one');
              expect(enumerator.validValue('one')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('TWO')`, () => {
            it('- should return true', done => {
              const result = enumerator.validValue('TWO');
              expect(enumerator.validValue('TWO')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('Two')`, () => {
            it('- should return true due to no case sensitivity enforcement by this Enumerator instance', done => {
              const result = enumerator.validValue('Two');
              expect(enumerator.validValue('Two')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('THREE')`, () => {
            it('- should return true', done => {
              const result = enumerator.validValue('THREE');
              expect(enumerator.validValue('THREE')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('tHrEe')`, () => {
            it('- should return true due to no case sensitivity enforcement by this Enumerator instance', done => {
              const result = enumerator.validValue('tHrEe');
              expect(enumerator.validValue('tHrEe')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
        });
        describe('#enumerationKeys()', () => {
          context(`()`, () => {
            it(`- should return array of all the enumeration's keys that are used to retrieve the Enumeration instance's values`, done => {
              const result = enumerator.enumerationKeys();
              expect(result instanceof Array).to.be.true;
              expect(result instanceof Array).to.eq(true);
              expect(result.length).to.eq(3);
              expect(result[0]).to.eq('ONE');
              expect(result[1]).to.eq('TWO');
              expect(result[2]).to.eq('THREE');
              done();
            });
          });
        });
        describe('#enumerationValues()', () => {
          context(`()`, () => {
            it(`- should return array of all the enumeration's values`, done => {
              const result = enumerator.enumerationValues();
              expect(result instanceof Array).to.be.true;
              expect(result instanceof Array).to.eq(true);
              expect(result.length).to.eq(3);
              expect(result[0]).to.eq('ONE');
              expect(result[1]).to.eq('TWO');
              expect(result[2]).to.eq('THREE');
              done();
            });
          });
        });
      });
      context(`([ 'one', 'two', 'three' ], {})`, () => {
        const enumerator = new Enumerator([ 'one', 'two', 'three' ], {});
        it('- should construct a new Enumerator instance', done => {
          expect(enumerator instanceof Enumerator).to.be.true
          done();
        });
        it(`- instance's case sensitivity should have been defaulted to false`, done => {
          expect(enumerator._caseSensitive).to.be.false;
          expect(enumerator._caseSensitive).to.eq(false);
          done();
        });
        it(`- should have getter properties correlating to the passed in array values and instance's case sensitivity`, done => {
          expect(enumerator).to.haveOwnPropertyDescriptor('ONE', 'ONE');
          expect(enumerator).to.haveOwnPropertyDescriptor('TWO', 'TWO');
          expect(enumerator).to.haveOwnPropertyDescriptor('THREE', 'THREE');
          done();
        });
        it(`- should have enumerations array property housing enumeration key: value pair references for the Enumerator Instance`, done => {
          expect(enumerator).to.have.property('enumerations');
          expect(enumerator.enumerations instanceof Array).to.be.true;
          expect(enumerator.enumerations instanceof Array).to.eq(true);
          expect(enumerator.enumerations.length).to.eq(3);
          expect(enumerator.enumerations[0]).to.have.property('key', 'ONE');
          expect(enumerator.enumerations[0]).to.have.property('value', 'ONE');
          expect(enumerator.enumerations[1]).to.have.property('key', 'TWO');
          expect(enumerator.enumerations[1]).to.have.property('value', 'TWO');
          expect(enumerator.enumerations[2]).to.have.property('key', 'THREE');
          expect(enumerator.enumerations[2]).to.have.property('value', 'THREE');
          done();
        });
        describe('#validValue(value)', () => {
          context(`('ONE')`, () => {
            it('- should return true', done => {
              const result = enumerator.validValue('ONE');
              expect(enumerator.validValue('ONE')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('one')`, () => {
            it('- should return true due to no case sensitivity enforcement by this Enumerator instance', done => {
              const result = enumerator.validValue('one');
              expect(enumerator.validValue('one')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('TWO')`, () => {
            it('- should return true', done => {
              const result = enumerator.validValue('TWO');
              expect(enumerator.validValue('TWO')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('Two')`, () => {
            it('- should return true due to no case sensitivity enforcement by this Enumerator instance', done => {
              const result = enumerator.validValue('Two');
              expect(enumerator.validValue('Two')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('THREE')`, () => {
            it('- should return true', done => {
              const result = enumerator.validValue('THREE');
              expect(enumerator.validValue('THREE')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('tHrEe')`, () => {
            it('- should return true due to no case sensitivity enforcement by this Enumerator instance', done => {
              const result = enumerator.validValue('tHrEe');
              expect(enumerator.validValue('tHrEe')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
        });
        describe('#enumerationKeys()', () => {
          context(`()`, () => {
            it(`- should return array of all the enumeration's keys that are used to retrieve the Enumeration instance's values`, done => {
              const result = enumerator.enumerationKeys();
              expect(result instanceof Array).to.be.true;
              expect(result instanceof Array).to.eq(true);
              expect(result.length).to.eq(3);
              expect(result[0]).to.eq('ONE');
              expect(result[1]).to.eq('TWO');
              expect(result[2]).to.eq('THREE');
              done();
            });
          });
        });
        describe('#enumerationValues()', () => {
          context(`()`, () => {
            it(`- should return array of all the enumeration's values`, done => {
              const result = enumerator.enumerationValues();
              expect(result instanceof Array).to.be.true;
              expect(result instanceof Array).to.eq(true);
              expect(result.length).to.eq(3);
              expect(result[0]).to.eq('ONE');
              expect(result[1]).to.eq('TWO');
              expect(result[2]).to.eq('THREE');
              done();
            });
          });
        });
      });
      context(`([ 'one', 'two', 'three' ], { caseSensitive: false })`, () => {
        const enumerator = new Enumerator([ 'one', 'two', 'three' ], { caseSensitive: false });
        it('- should construct a new Enumerator instance', done => {
          expect(enumerator instanceof Enumerator).to.be.true
          done();
        });
        it(`- instance's case sensitivity should have been defaulted to false`, done => {
          expect(enumerator._caseSensitive).to.be.false;
          expect(enumerator._caseSensitive).to.eq(false);
          done();
        });
        it(`- should have getter properties correlating to the passed in array values and instance's case sensitivity`, done => {
          expect(enumerator).to.haveOwnPropertyDescriptor('ONE', 'ONE');
          expect(enumerator).to.haveOwnPropertyDescriptor('TWO', 'TWO');
          expect(enumerator).to.haveOwnPropertyDescriptor('THREE', 'THREE');
          done();
        });
        it(`- should have enumerations array property housing enumeration key: value pair references for the Enumerator Instance`, done => {
          expect(enumerator).to.have.property('enumerations');
          expect(enumerator.enumerations instanceof Array).to.be.true;
          expect(enumerator.enumerations instanceof Array).to.eq(true);
          expect(enumerator.enumerations.length).to.eq(3);
          expect(enumerator.enumerations[0]).to.have.property('key', 'ONE');
          expect(enumerator.enumerations[0]).to.have.property('value', 'ONE');
          expect(enumerator.enumerations[1]).to.have.property('key', 'TWO');
          expect(enumerator.enumerations[1]).to.have.property('value', 'TWO');
          expect(enumerator.enumerations[2]).to.have.property('key', 'THREE');
          expect(enumerator.enumerations[2]).to.have.property('value', 'THREE');
          done();
        });
        describe('#validValue(value)', () => {
          context(`('ONE')`, () => {
            it('- should return true', done => {
              const result = enumerator.validValue('ONE');
              expect(enumerator.validValue('ONE')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('one')`, () => {
            it('- should return true due to no case sensitivity enforcement by this Enumerator instance', done => {
              const result = enumerator.validValue('one');
              expect(enumerator.validValue('one')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('TWO')`, () => {
            it('- should return true', done => {
              const result = enumerator.validValue('TWO');
              expect(enumerator.validValue('TWO')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('Two')`, () => {
            it('- should return true due to no case sensitivity enforcement by this Enumerator instance', done => {
              const result = enumerator.validValue('Two');
              expect(enumerator.validValue('Two')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('THREE')`, () => {
            it('- should return true', done => {
              const result = enumerator.validValue('THREE');
              expect(enumerator.validValue('THREE')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('tHrEe')`, () => {
            it('- should return true due to no case sensitivity enforcement by this Enumerator instance', done => {
              const result = enumerator.validValue('tHrEe');
              expect(enumerator.validValue('tHrEe')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
        });
        describe('#enumerationKeys()', () => {
          context(`()`, () => {
            it(`- should return array of all the enumeration's keys that are used to retrieve the Enumeration instance's values`, done => {
              const result = enumerator.enumerationKeys();
              expect(result instanceof Array).to.be.true;
              expect(result instanceof Array).to.eq(true);
              expect(result.length).to.eq(3);
              expect(result[0]).to.eq('ONE');
              expect(result[1]).to.eq('TWO');
              expect(result[2]).to.eq('THREE');
              done();
            });
          });
        });
        describe('#enumerationValues()', () => {
          context(`()`, () => {
            it(`- should return array of all the enumeration's values`, done => {
              const result = enumerator.enumerationValues();
              expect(result instanceof Array).to.be.true;
              expect(result instanceof Array).to.eq(true);
              expect(result.length).to.eq(3);
              expect(result[0]).to.eq('ONE');
              expect(result[1]).to.eq('TWO');
              expect(result[2]).to.eq('THREE');
              done();
            });
          });
        });
      });
      context(`([ 'one', 'tWo', 'THREE' ], { caseSensitive: true })`, () => {
        const enumerator = new Enumerator([ 'one', 'tWo', 'THREE' ], { caseSensitive: true });
        it('- should construct a new Enumerator instance', done => {
          expect(enumerator instanceof Enumerator).to.be.true
          done();
        });
        it(`- instance's case sensitivity should have been defaulted to true`, done => {
          expect(enumerator._caseSensitive).to.be.true;
          expect(enumerator._caseSensitive).to.eq(true);
          done();
        });
        it(`- should have getter properties correlating to the passed in array values and instance's case sensitivity`, done => {
          expect(enumerator).to.haveOwnPropertyDescriptor('ONE', 'one');
          expect(enumerator).to.haveOwnPropertyDescriptor('TWO', 'tWo');
          expect(enumerator).to.haveOwnPropertyDescriptor('THREE', 'THREE');
          done();
        });
        it(`- should have enumerations array property housing enumeration key: value pair references for the Enumerator Instance`, done => {
          expect(enumerator).to.have.property('enumerations');
          expect(enumerator.enumerations instanceof Array).to.be.true;
          expect(enumerator.enumerations instanceof Array).to.eq(true);
          expect(enumerator.enumerations.length).to.eq(3);
          expect(enumerator.enumerations[0]).to.have.property('key', 'ONE');
          expect(enumerator.enumerations[0]).to.have.property('value', 'one');
          expect(enumerator.enumerations[1]).to.have.property('key', 'TWO');
          expect(enumerator.enumerations[1]).to.have.property('value', 'tWo');
          expect(enumerator.enumerations[2]).to.have.property('key', 'THREE');
          expect(enumerator.enumerations[2]).to.have.property('value', 'THREE');
          done();
        });
        describe('#validValue(value)', () => {
          context(`('ONE')`, () => {
            it('- should return false due to the case sensitivity enforcement by this Enumerator instance', done => {
              const result = enumerator.validValue('ONE');
              expect(enumerator.validValue('ONE')).to.eq(false);
              expect(result).to.be.false;
              expect(result).to.eq(false);
              done();
            });
          });
          context(`('one')`, () => {
            it('- should return true due to the case sensitivity enforcement by this Enumerator instance', done => {
              const result = enumerator.validValue('one');
              expect(enumerator.validValue('one')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('TWO')`, () => {
            it('- should return false due to the case sensitivity enforcement by this Enumerator instance', done => {
              const result = enumerator.validValue('TWO');
              expect(enumerator.validValue('TWO')).to.eq(false);
              expect(result).to.be.false;
              expect(result).to.eq(false);
              done();
            });
          });
          context(`('tWo')`, () => {
            it('- should return true due to the case sensitivity enforcement by this Enumerator instance', done => {
              const result = enumerator.validValue('tWo');
              expect(enumerator.validValue('tWo')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
          context(`('tHrEe')`, () => {
            it('- should return false due to the case sensitivity enforcement by this Enumerator instance', done => {
              const result = enumerator.validValue('tHrEe');
              expect(enumerator.validValue('tHrEe')).to.eq(false);
              expect(result).to.be.false;
              expect(result).to.eq(false);
              done();
            });
          });
          context(`('THREE')`, () => {
            it('- should return true due to the case sensitivity enforcement by this Enumerator instance', done => {
              const result = enumerator.validValue('THREE');
              expect(enumerator.validValue('THREE')).to.eq(true);
              expect(result).to.be.true;
              expect(result).to.eq(true);
              done();
            });
          });
        });
        describe('#enumerationKeys()', () => {
          context(`()`, () => {
            it(`- should return array of all the enumeration's keys that are used to retrieve the Enumeration instance's values`, done => {
              const result = enumerator.enumerationKeys();
              expect(result instanceof Array).to.be.true;
              expect(result instanceof Array).to.eq(true);
              expect(result.length).to.eq(3);
              expect(result[0]).to.eq('ONE');
              expect(result[1]).to.eq('TWO');
              expect(result[2]).to.eq('THREE');
              done();
            });
          });
        });
        describe('#enumerationValues()', () => {
          context(`()`, () => {
            it(`- should return array of all the enumeration's values`, done => {
              const result = enumerator.enumerationValues();
              expect(result instanceof Array).to.be.true;
              expect(result instanceof Array).to.eq(true);
              expect(result.length).to.eq(3);
              expect(result[0]).to.eq('one');
              expect(result[1]).to.eq('tWo');
              expect(result[2]).to.eq('THREE');
              done();
            });
          });
        });
      });
    });
  });
});