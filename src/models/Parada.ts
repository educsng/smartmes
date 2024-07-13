import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database';

interface ParadaAttributes {
  id: number;
  inicio: Date;
  fim: Date;
  descricao: string;
  motivo: string;
  itemId: number;
  loteId: number;
  ordemProducaoId: number;
  ativoId: number;
  dispositivoIoTId: number;
  sensorId: number;
}

interface ParadaCreationAttributes extends Optional<ParadaAttributes, 'id'> {}

class Parada extends Model<ParadaAttributes, ParadaCreationAttributes> implements ParadaAttributes {
  public id!: number;
  public inicio!: Date;
  public fim!: Date;
  public descricao!: string;
  public motivo!: string;
  public itemId!: number;
  public loteId!: number;
  public ordemProducaoId!: number;
  public ativoId!: number;
  public dispositivoIoTId!: number;
  public sensorId!: number;
}

Parada.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fim: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    descricao: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    motivo: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    itemId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    loteId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    ordemProducaoId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    ativoId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    dispositivoIoTId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    sensorId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: 'paradas',
    sequelize,
  }
);

export default Parada;
