const {expect} = require('chai');
const {ethers} = require('hardhat');

describe('Counter',() =>  {
    let counter

    beforeEach(async () => {
        const Counter = await ethers.getContractFactory('Counter')
        counter = await Counter.deploy('My Counter', 1)
    })

    describe ('Deployment', () => {    

  it('sets the initial count', async () => {
    expect(await counter.count()).to.equal(1)
  })
  })

  it('sets the initial name', async () => {
       expect(await counter.name()).to.equal('My Counter')

  })

describe ('counting' , () => {
    let transaction

    it('reads the count from the "count" public variable', async () => {
        expect(await counter.count()).to.equal(1)

    })
    it('reads the count from the getCount() function', async () => {
        expect(await counter.getCount()).to.equal(1)
    })

    it ('increments the count', async () => {
        await counter.increment()
        expect(await counter.count()).to.equal(2)
    })

    it ('decrements the count', async () => {
        await counter.decrement()
        expect(await counter.count()).to.equal(0)

        await expect (counter.decrement()).to.be.reverted

                 
    it('updates the name', async () => {
        await counter.setName('New Name')
        await expect(transaction).to.changeName(counter, 'name', 'New Name')
    })
    })
})
})