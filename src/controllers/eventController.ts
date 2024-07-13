import { Request, Response } from 'express';
import { Parada, OrdemManutencao, Notificacao, Tecnico, Ativo } from '../models/index';
import pipedriveService from '../services/pipedriveService';

interface TipoParada { descricao:string, motivo:string, itemId:number, loteId:number, ordemProducaoId:number, ativoId:number, dispositivoIoTId:number, sensorId:number }

export const createEvent = async (req: Request, res: Response) => {
  try {
    const { descricao, motivo, itemId, loteId, ordemProducaoId, ativoId, dispositivoIoTId, sensorId } = req.body as TipoParada;

    const parada = await Parada.create({ descricao, motivo, itemId, loteId, ordemProducaoId, ativoId, dispositivoIoTId, sensorId });

    const tecnico = await Tecnico.findOne(); // Simplificação: pega o primeiro técnico disponível
    const ordemManutencao = await OrdemManutencao.create({ data_criacao: new Date(), status: 'Pendente', eventoId: parada.id, tecnicoId: tecnico!.id });

    const ativo = await Ativo.findByPk(ativoId);
    const notificacao = await Notificacao.create({ 
        data_envio: new Date(),
        mensagem: `Parada detectada: ${descricao}. Ordem de Manutenção ID: ${ordemManutencao.id}`, 
        ativoId,
        ordemManutencaoId: ordemManutencao.id, 
        responsavelId: ativo!.responsavelId 
    });

    await pipedriveService.createDeal({ title: `Parada de Máquina: ${descricao}`, value: 1000, currency: 'USD' });

    res.status(201).json({ parada, ordemManutencao, notificacao });
  } catch (error) {
    if (error instanceof Error) {
        res.status(500).json({ error: error.message });
    } else {
        res.status(500).json({ message: 'Unknown error occurred' });
    }
}
};
