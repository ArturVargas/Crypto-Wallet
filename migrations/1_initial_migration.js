const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  await tokenMock.mint(
    '0xdE6d60082468BF3504915dfDe5365810B112381A',
    '1000000000000000000000'
  )
};
