const mongoose = require('mongoose');
const expect = require('chai').expect;

  const userDAO = require(process.cwd() + '/server/api/auth/dao/user-dao');
  const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('userDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    userDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
