module.exports = (sequelize, DataTypes) => {
  const Feature = sequelize.define('Feature', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    elapsed: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
      classMethods: {
        associate: (models) => {
          Feature.hasMany(models.FeatureItem, {
            foreignKey: 'featureId',
            as: 'featureItems',
          });
        },
      },
    });
  return Feature;
};