import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database';

interface AtivoAttributes {
  id: number;
  nome: string;
  tipo: string;
  responsavelId: number;
}

interface AtivoCreationAttributes extends Optional<AtivoAttributes, 'id'> {}

class Ativo extends Model<AtivoAttributes, AtivoCreationAttributes> implements AtivoAttributes {
  public id!: number;
  public nome!: string;
  public tipo!: string;
  public responsavelId!: number;
}

Ativo.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    tipo: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    responsavelId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: 'ativos',
    sequelize,
  }
);

export default Ativo;
