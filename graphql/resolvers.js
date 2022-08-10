const { Customer } = require('./../models');

const Query = {
  getAllCustomer: async () => {
    try {
      const customers = await Customer.findAll();
      return customers;
    } catch (error) {
      console.log(error);
    }
  },
  getCustomerById: async (root, { idCustomer }) => {
    try {
      const customers_by_id = await Customer.findOne({ where: { idCustomer } });
      return customers_by_id;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = { Query };
