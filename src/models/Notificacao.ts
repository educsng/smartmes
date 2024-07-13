import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database';

interface NotificacaoAttributes {
  id: number;
  data_envio: Date;
  mensagem: string;
  ativoId: number;
  ordemManutencaoId: number;
  responsavelId: number;
}

interface NotificacaoCreationAttributes extends Optional<NotificacaoAttributes, 'id'> {}

class Notificacao extends Model<NotificacaoAttributes, NotificacaoCreationAttributes> implements NotificacaoAttributes {
  public id!: number;
  public data_envio!: Date;
  public mensagem!: string;
  public ativoId!: number;
  public ordemManutencaoId!: number;
  public responsavelId!: number;
}

Notificacao.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    data_envio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    mensagem: {
      type: new DataTypes.STRING(256),
      allowNull: false,
    },
    ativoId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    ordemManutencaoId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    responsavelId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: 'notificacoes',
    sequelize,
  }
);

export default Notificacao;
