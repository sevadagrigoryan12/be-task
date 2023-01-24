// import seq, { Sequelize } from 'sequelize';

// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './database.sqlite3'
// });

// class Profile extends seq.Model {}
// Profile.init(
//   {
//     firstName: {
//       type: seq.STRING,
//       allowNull: false
//     },
//     lastName: {
//       type: seq.STRING,
//       allowNull: false
//     },
//     profession: {
//       type: seq.STRING,
//       allowNull: false
//     },
//     balance:{
//       type:seq.DECIMAL(12,2)
//     },
//     type: {
//       type: seq.ENUM('client', 'contractor')
//     }
//   },
//   {
//     sequelize,
//     modelName: 'Profile'
//   }
// );

// class Contract extends seq.Model {}
// Contract.init(
//   {
//     terms: {
//       type: seq.TEXT,
//       allowNull: false
//     },
//     status:{
//       type: seq.ENUM('new','in_progress','terminated')
//     }
//   },
//   {
//     sequelize,
//     modelName: 'Contract'
//   }
// );

// class Job extends seq.Model {}
// Job.init(
//   {
//     description: {
//       type: seq.TEXT,
//       allowNull: false
//     },
//     price:{
//       type: seq.DECIMAL(12,2),
//       allowNull: false
//     },
//     paid: {
//       type: seq.BOOLEAN,
//       defaultValue:false
//     },
//     paymentDate:{
//       type: seq.DATE
//     }
//   },
//   {
//     sequelize,
//     modelName: 'Job'
//   }
// );

// Profile.hasMany(Contract, {as :'Contractor',foreignKey:'ContractorId'})
// Contract.belongsTo(Profile, {as: 'Contractor'})
// Profile.hasMany(Contract, {as : 'Client', foreignKey:'ClientId'})
// Contract.belongsTo(Profile, {as: 'Client'})
// Contract.hasMany(Job)
// Job.belongsTo(Contract)

// module.exports = {
//   sequelize,
//   Profile,
//   Contract,
//   Job
// };
