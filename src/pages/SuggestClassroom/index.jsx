import './styles.css'
import garbageIcon from '../../assets/svg/redGarbageIcom.svg'
import {CommonText} from "../../components/CommonText";
import {BoldText} from "../../components/BoldText";
import {ColoredTag} from "../../components/ColoredTag";
import {CommonButton} from "../../components/Buttons/Common";
import {AddButton} from "../../components/Buttons/AddButton";
import {Classroom} from "../../components/Classroom";
import {SuccessfulButton} from "../../components/Buttons/Successful";
import {WhiteButton} from "../../components/Buttons/WhiteButton";
import {BackButton} from "../../components/Buttons/BackButton";
import {useNavigate} from "react-router-dom";

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


export const SuggestClassroom = () => {
  const navigate = useNavigate()
  const goToReservar = () => {
    navigate("/reservar", { replace: true });
  };
    return<div>
        <div className={'pending-title'}>
            <div>
                Sugerencia de Aulas:
            </div>
        </div>
        <BackButton title={"Atras"} onClick={goToReservar} />
        <div className={'table-header'}>
            <div className={'table-suggest-Aula'} >
                <BoldText white={true}>Aula</BoldText>
            </div>
            <div className={'table-suggest-Cantidad'}>
                <BoldText white={true}>Capacidad</BoldText>
            </div>
            <div className={'table-suggest-Horario'}>
                <BoldText white={true}>Horario</BoldText>
            </div>
            <div className={'table-suggest-Fecha'}>
                <BoldText white={true}>Fecha</BoldText>
            </div>
            <div className={'table-suggest-Lugar'}>
                <BoldText white={true}>Lugar</BoldText>
            </div>
            <div className={'table-suggest-Estado'}>
                <BoldText white={true}>Estado</BoldText>
            </div>
            <div className={'table-suggest-vacio'}>
                <BoldText white={true}></BoldText>
            </div>
        </div>
        {data.map((item, index)  => <div className={'table-suggest-item'}>
            <div className={'table-suggest-Aula'} >
                <ColoredTag >Auditorio</ColoredTag>
            </div>
            <div className={'table-suggest-Cantidad'}>
                <ColoredTag >{item.quantity} estudiantes</ColoredTag>
            </div>
            <div className={'table-suggest-Horario'}>
                <ColoredTag>{item.time}</ColoredTag>
            </div>
            <div className={'table-suggest-Fecha'}>
                <ColoredTag>{item.date}</ColoredTag>
            </div>
            <div className={'table-suggest-Lugar'}>
                <ColoredTag>Nuevo Pdft</ColoredTag>
            </div>
            <div className={'table-suggest-Estado'}>
                <ColoredTag state={'1'}>Disponible</ColoredTag>
            </div>
            <div className={'table-suggest-vacio'}>
                <AddButton title={'Añadir'}/>
            </div>
            </div>)}
        <div className={'table-suggest-footer'}>
            <div className={'table-suggest-footer-items'} >
                <BoldText>Aulas Seleccionadas: </BoldText>
                <Classroom name={'653 B'} icon={garbageIcon}/>
                <Classroom name={'TAMEC 2'} icon={garbageIcon}/>

            <div className={'table-suggest-footer-items'} >
                <BoldText>Capacidad seleccionada Total: </BoldText>
                <ColoredTag>0 Estudiantes</ColoredTag>
            </div>

            </div>
            <div className={'table-suggest-footer-items'}>

                <WhiteButton title={'Retroceder'} onClick={goToReservar}/>
                <CommonButton title={'Confirmar reserva'} />

            </div>
        </div>
    </div>
}
