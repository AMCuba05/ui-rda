import garbageIcon from '../../assets/svg/redGarbageIcom.svg'
import { FormTitle } from '../../components/FormTitle';
import {Classroom} from "../../components/Classroom"
import {FormItemLabel} from "../../components/FormItemLabel";
import {FormItemValue} from "../../components/FormItemValue";
import {CommonText} from "../../components/CommonText";
import {CommonButton} from "../../components/Buttons/Common";
import {WarningButton} from "../../components/Buttons/Warning";
import { FormItemValueDynamic } from '../../components/FormItemValueDynamic';
import { FormItemValueAutoComplete } from '../../components/FormItemValueAutoComplete';
import { FormItemDatePicker } from '../../components/FormItemDatePicker';
import { ModalSuccess } from '../../components/ModalSuccess/indes';
import { useState } from 'react';

import "./styles.css"

export const Book = () => {

    const [teachers, setTeachers] = useState([])
    const [assignments, setAssignments] = useState([])
    const [groups, setGroups] = useState([])
    const [date,setDate] = useState()


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    return <div className={'form-content'}>
        <div className={'form-title'}>
            <FormTitle name={'Reserva de Aula(s):'}/>
            <Classroom name={'692B'} icon={garbageIcon}/>
        </div>

        <div className={'form-items'}>
            <div className={'form-item-inputs'}>
                <div className={'form-item-inputs-left'}>
                    <div className={'form-item-inputs-left-flex'}>
                        <FormItemLabel label={'Docente'}/>
                        <FormItemValue value={'Esteban Quito R.'}/>
                    </div>

                    <div className={'form-item-inputs-left-flex'}>
                        <FormItemLabel label={'Lugar'}/>
                        <FormItemValue value={'Edificio Nuevo'}/>
                    </div>

                    <div className={'form-item-inputs-left-flex'}>
                        <FormItemLabel label={'Capacidad'}/>
                        <FormItemValue value={'150 Estudiantes'}/>
                    </div>
                    <div className={'form-item-inputs-left-flex'}>
                        <div className={'form-item-inputs-left-flex'}>
                            <FormItemLabel label={'Horario'}/>
                            <FormItemValueDynamic options={['6:45 - 8:15', '8:15 - 9:45', '9:45 - 11:15',
                                '11:15 - 12:45', '12:45 - 14:15', '14:15 - 15:45', '15:45 - 17:15', '17:15 - 18:45',
                                '18:45 - 20:15', '20:15 - 21:45']}/>
                        </div>
                        <div className={'form-item-inputs-left-flex'}>
                            <FormItemLabel label={'Fecha'}/>
                            <FormItemDatePicker/>
                        </div>
                    </div>
                    <div className={'form-item-inputs-left-flex'}>
                        <FormItemLabel label={'Motivo'}/>
                        <FormItemValueDynamic options={['Examen', 'Clase', 'Laboratorio']}/>
                    </div>
                </div>
                <div className={'form-divider'} />
                <div className={'form-item-inputs-right'}>
                    <div className={'form-item-inputs-left-flex'}>
                        <FormItemLabel label={'Añadir Docentes'}/>
                        <FormItemValueAutoComplete items={teachers} setItems={setTeachers} docentOptions={['Leticia Blanco', 'Americo Fiorilio', 'Yony Montaño']}/>
                    </div>

                    <div className={'form-item-inputs-left-flex'}>
                        <FormItemLabel label={'Materia'}/>
                        <FormItemValueAutoComplete items={assignments} setItems={setAssignments} docentOptions={['Introduccion a la programación', 'Sistemas 1', 'Sistemas 2']}/>
                    </div>

                    <div className={'form-item-inputs-left-flex'}>
                        <FormItemLabel label={'Grupo'}/>
                        <FormItemValueAutoComplete items={groups} setItems={setGroups} docentOptions={['1','4','5']}/>
                    </div>
                </div>
            </div>
            <div className={'form-submit-container'}>
                <div className={'form-submit-description'}>
                    <CommonText>Luego de enviar su reserva, usted recibirá un mensaje de confirmación en un lapso de 24 horas en caso su solicitud sea aceptada, o rechazada por el administrador.</CommonText>
                </div>
                <div className={'form-submit-buttons'}>
                    <div onClick={handleOpen}>
                        <CommonButton title={'Enviar Reserva'}  />
                        <ModalSuccess openModel={open}/>
                    </div>
                    <div>
                        <WarningButton title={'Cancelar Reserva'} />
                    </div>
                </div>
            </div>

        </div>
    </div>
}
