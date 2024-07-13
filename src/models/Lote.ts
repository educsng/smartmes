import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database';

interface LoteAttributes {
  id: number;
  quantidade: number;
  data_producao: Date;
  ordemProducaoId: number;
}

interface LoteCreationAttributes extends Optional<LoteAttributes, 'id'> {}

class Lote extends Model<LoteAttributes, LoteCreationAttributes> implements LoteAttributes {
  public id!: number;
  public quantidade!: number;
  public data_producao!: Date;
  public ordemProducaoId!: number;
}

Lote.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    quantidade: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    data_producao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ordemProducaoId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: 'lotes',
    sequelize,
  }
);

export default Lote;
