import Ativo from './Ativo';
import OrdemProducao from './OrdemProducao';
import Parada from './Parada';
import Lote from './Lote';
import ItemDoLote from './ItemDoLote';
import DispositivoIoT from './DispositivoIoT';
import Sensor from './Sensor';
import OrdemManutencao from './OrdemManutencao';
import Tecnico from './Tecnico';
import Notificacao from './Notificacao';

Ativo.hasMany(DispositivoIoT, { foreignKey: 'ativoId' });
DispositivoIoT.belongsTo(Ativo, { foreignKey: 'ativoId' });

DispositivoIoT.hasMany(Sensor, { foreignKey: 'dispositivoIoTId' });
Sensor.belongsTo(DispositivoIoT, { foreignKey: 'dispositivoIoTId' });

OrdemProducao.hasMany(Lote, { foreignKey: 'ordemProducaoId' });
Lote.belongsTo(OrdemProducao, { foreignKey: 'ordemProducaoId' });

Lote.hasMany(ItemDoLote, { foreignKey: 'loteId' });
ItemDoLote.belongsTo(Lote, { foreignKey: 'loteId' });

Parada.belongsTo(ItemDoLote, { foreignKey: 'itemId' });
Parada.belongsTo(Lote, { foreignKey: 'loteId' });
Parada.belongsTo(OrdemProducao, { foreignKey: 'ordemProducaoId' });
Parada.belongsTo(Ativo, { foreignKey: 'ativoId' });
Parada.belongsTo(DispositivoIoT, { foreignKey: 'dispositivoIoTId' });
Parada.belongsTo(Sensor, { foreignKey: 'sensorId' });

OrdemManutencao.belongsTo(Parada, { foreignKey: 'eventoId' });
OrdemManutencao.belongsTo(Tecnico, { foreignKey: 'tecnicoId' });

Notificacao.belongsTo(Ativo, { foreignKey: 'ativoId' });
Notificacao.belongsTo(OrdemManutencao, { foreignKey: 'ordemManutencaoId' });
Notificacao.belongsTo(Tecnico, { foreignKey: 'responsavelId' });

export {
  Ativo,
  OrdemProducao,
  Parada,
  Lote,
  ItemDoLote,
  DispositivoIoT,
  Sensor,
  OrdemManutencao,
  Tecnico,
  Notificacao
};
