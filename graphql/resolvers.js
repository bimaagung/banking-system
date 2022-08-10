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

const Mutation = {
  createCustomer: async (root, { name, telp, address, email, password }) => {
    try {
      const create_customer = await Customer.create({
        name,
        telp,
        address,
        email,
        password,
      });

      return 'Succes create customer';
    } catch (error) {
      console.log(error);
    }
  },
  updateCustomer: async (
    _,
    { idCustomer, name, telp, address, email, password },
  ) => {
    try {
      await Customer.update(
        {
          name,
          telp,
          address,
          email,
          password,
        },
        { where: { idCustomer } },
      );

      return 'Succes update customer';
    } catch (error) {
      console.log(error);
    }
  },
  deleteCustomer: async (_, { idCustomer }) => {
    try {
      await Customer.destroy({ where: { idCustomer } });

      return 'Succes delete customer';
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = { Query, Mutation };
