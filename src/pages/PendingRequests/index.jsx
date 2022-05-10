import './styles.css'
import {CommonText} from "../../components/CommonText";
import {BoldText} from "../../components/BoldText";
import {ColoredTag} from "../../components/ColoredTag";
import {CommonButton} from "../../components/Buttons/Common";

const data = [
    {
        names: ['Emery Septimus', 'Cooper Lipshutz'],
        classrooms: [{id: '651', state: 'free'}, {id: '651', state: 'reserved'}],
        quantity: 50,
        time: '9:45 - 11:15',
        date: '24/05/2022',
        reason: 'Clases',
    },
    {
        names: ['Emery Septimus', 'Cooper Lipshutz'],
        classrooms: [{id: '651', state: 'free'}, {id: '653', state: 'pending'}],
        quantity: 50,
        time: '9:45 - 11:15',
        date: '24/05/2022',
        reason: 'Clases',
    },
    {
        names: ['Emery Septimus', 'Cooper Lipshutz', 'Esteban Quito'],
        classrooms: [ {id: '653', state: 'pending'}, {id: '651', state: 'reserved'}],
        quantity: 50,
        time: '9:45 - 11:15',
        date: '24/05/2022',
        reason: 'Clases',
    },
    {
        names: ['Emery Septimus', 'Cooper Lipshutz'],
        classrooms: [{id: '651', state: 'free'}, {id: '653', state: 'pending'}, {id: '651', state: 'reserved'}],
        quantity: 50,
        time: '9:45 - 11:15',
        date: '24/05/2022',
        reason: 'Clases',
    },
    {
        names: ['Emery Septimus', 'Cooper Lipshutz'],
        classrooms: [{id: 'Auditorio', state: 'free'}, {id: '653A', state: 'free'}, {id: '651', state: 'reserved'}],
        quantity: 50,
        time: '9:45 - 11:15',
        date: '24/05/2022',
        reason: 'Clases',
    },
    {
        names: ['Emery Septimus', 'Cooper Lipshutz'],
        classrooms: [{id: '651', state: 'free'}, {id: '653', state: 'pending'}, {id: '651', state: 'reserved'}],
        quantity: 50,
        time: '9:45 - 11:15',
        date: '24/05/2022',
        reason: 'Clases',
    },
    {
        names: ['Emery Septimus', 'Cooper Lipshutz'],
        classrooms: [{id: '651', state: 'free'}, {id: '653', state: 'pending'}, {id: '651', state: 'reserved'}],
        quantity: 50,
        time: '9:45 - 11:15',
        date: '24/05/2022',
        reason: 'Clases',
    },
    {
        names: ['Emery Septimus', 'Cooper Lipshutz'],
        classrooms: [{id: '651', state: 'free'}, {id: '653', state: 'pending'}, {id: '651', state: 'reserved'}],
        quantity: 50,
        time: '9:45 - 11:15',
        date: '24/05/2022',
        reason: 'Clases',
    },
    {
        names: ['Emery Septimus', 'Cooper Lipshutz'],
        classrooms: [{id: '651', state: 'free'}, {id: '653', state: 'pending'}, {id: '651', state: 'reserved'}],
        quantity: 50,
        time: '9:45 - 11:15',
        date: '24/05/2022',
        reason: 'Clases',
    },
    {
        names: ['Emery Septimus', 'Cooper Lipshutz'],
        classrooms: [{id: '651', state: 'free'}, {id: '653', state: 'pending'}, {id: '651', state: 'reserved'}],
        quantity: 50,
        time: '9:45 - 11:15',
        date: '24/05/2022',
        reason: 'Clases',
    },
]


export const PendingRequests = () => {
    return<div>
        <div className={'pending-title'}>
            <div>
                Lista de Solicitudes Pendientes
            </div>
            <CommonText>Del día 21 de abril al 30 de mayo de 2022</CommonText>
        </div>
        <div className={'table-header'}>
            <div className={'table-N'} >
                <BoldText white={true}>N°</BoldText>
            </div>
            <div className={'table-Docente'}>
                <BoldText white={true}>Docente(s)</BoldText>
            </div>
            <div className={'table-Aula'}>
                <BoldText white={true}>Aula</BoldText>
            </div>
            <div className={'table-Cantidad'}>
                <BoldText white={true}>Cantidad</BoldText>
            </div>
            <div className={'table-Horario'}>
                <BoldText white={true}>Horario</BoldText>
            </div>
            <div className={'table-Fecha'}>
                <BoldText white={true}>Fecha</BoldText>
            </div>
            <div className={'table-Motivo'}>
                <BoldText white={true}>Motivo</BoldText>
            </div>
            <div className={'table-Respuesta'}>
                <BoldText white={true}>Respuesta</BoldText>
            </div>
        </div>
        {data.map((item, index)  => <div className={'table-item'}>
            <div className={'table-N'} >
                <BoldText >{index + 1}</BoldText>
            </div>
            <div className={'table-Docente'}>
                {item.names.map( (name, index) => index === 0 ?  <BoldText >{name}</BoldText> : <CommonText >{name}</CommonText>)}
            </div>
            <div className={'table-Aula'}>
                {item.classrooms.map( (classroom, index) => <ColoredTag >{classroom.id}</ColoredTag>)}
            </div>
            <div className={'table-Cantidad'}>
                <ColoredTag>{item.quantity} est.</ColoredTag>
            </div>
            <div className={'table-Horario'}>
                <ColoredTag>{item.time}</ColoredTag>
            </div>
            <div className={'table-Fecha'}>
                <ColoredTag>{item.date}</ColoredTag>
            </div>
            <div className={'table-Motivo'}>
                <ColoredTag>{item.reason}</ColoredTag>
            </div>
            <div className={'table-Respuesta'}>
                <CommonButton title={'Ver más ...'}/>
            </div>
            </div>)}
    </div>
}
