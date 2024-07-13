import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database';

interface TecnicoAttributes {
  id: number;
  nome: string;
  especialidade: string;
}

interface TecnicoCreationAttributes extends Optional<TecnicoAttributes, 'id'> {}

class Tecnico extends Model<TecnicoAttributes, TecnicoCreationAttributes> implements TecnicoAttributes {
  public id!: number;
  public nome!: string;
  public especialidade!: string;
}

Tecnico.init(
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
    especialidade: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'tecnicos',
    sequelize,
  }
);

export default Tecnico;
