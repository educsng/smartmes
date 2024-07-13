import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database';

interface ItemDoLoteAttributes {
  id: number;
  descricao: string;
  quantidade: number;
  loteId: number;
}

interface ItemDoLoteCreationAttributes extends Optional<ItemDoLoteAttributes, 'id'> {}

class ItemDoLote extends Model<ItemDoLoteAttributes, ItemDoLoteCreationAttributes> implements ItemDoLoteAttributes {
  public id!: number;
  public descricao!: string;
  public quantidade!: number;
  public loteId!: number;
}

ItemDoLote.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    descricao: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    quantidade: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    loteId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: 'itens_do_lote',
    sequelize,
  }
);

export default ItemDoLote;
