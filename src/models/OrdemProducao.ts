import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database';

interface OrdemProducaoAttributes {
  id: number;
  data_inicio: Date;
  data_fim: Date;
}

interface OrdemProducaoCreationAttributes extends Optional<OrdemProducaoAttributes, 'id'> {}

class OrdemProducao extends Model<OrdemProducaoAttributes, OrdemProducaoCreationAttributes> implements OrdemProducaoAttributes {
  public id!: number;
  public data_inicio!: Date;
  public data_fim!: Date;
}

OrdemProducao.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    data_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    data_fim: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'ordem_producao',
    sequelize,
  }
);

export default OrdemProducao;
