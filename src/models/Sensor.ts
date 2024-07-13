import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database';

interface SensorAttributes {
  id: number;
  tipo: string;
  valor: number;
  unidade: string;
  dispositivoIoTId: number;
}

interface SensorCreationAttributes extends Optional<SensorAttributes, 'id'> {}

class Sensor extends Model<SensorAttributes, SensorCreationAttributes> implements SensorAttributes {
  public id!: number;
  public tipo!: string;
  public valor!: number;
  public unidade!: string;
  public dispositivoIoTId!: number;
}

Sensor.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    unidade: {
      type: new DataTypes.STRING(64),
      allowNull: false,
    },
    dispositivoIoTId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: 'sensores',
    sequelize,
  }
);

export default Sensor;
