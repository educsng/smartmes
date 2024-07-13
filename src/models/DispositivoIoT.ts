import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database';

interface DispositivoIoTAttributes {
  id: number;
  nome: string;
  tipo: string;
  ativoId: number;
}

interface DispositivoIoTCreationAttributes extends Optional<DispositivoIoTAttributes, 'id'> {}

class DispositivoIoT extends Model<DispositivoIoTAttributes, DispositivoIoTCreationAttributes> implements DispositivoIoTAttributes {
  public id!: number;
  public nome!: string;
  public tipo!: string;
  public ativoId!: number;
}

DispositivoIoT.init(
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
    ativoId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: 'dispositivos_iot',
    sequelize,
  }
);

export default DispositivoIoT;
