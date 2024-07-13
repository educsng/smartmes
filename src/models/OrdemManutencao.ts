import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database';

interface OrdemManutencaoAttributes {
  id: number;
  data_criacao: Date;
  status: string;
  eventoId: number;
  tecnicoId: number;
}

interface OrdemManutencaoCreationAttributes extends Optional<OrdemManutencaoAttributes, 'id'> {}

class OrdemManutencao extends Model<OrdemManutencaoAttributes, OrdemManutencaoCreationAttributes> implements OrdemManutencaoAttributes {
  public id!: number;
  public data_criacao!: Date;
  public status!: string;
  public eventoId!: number;
  public tecnicoId!: number;
}

OrdemManutencao.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    data_criacao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: new DataTypes.STRING(64),
      allowNull: false,
    },
    eventoId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    tecnicoId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: 'ordens_manutencao',
    sequelize,
  }
);

export default OrdemManutencao;
