import garbageIcon from '../../assets/svg/redGarbageIcom.svg'
import {Classroom} from "../../components/Classroom"
import {FormItemLabel} from "../../components/FormItemLabel";
import "./styles.css"
import {FormItemValue} from "../../components/FormItemValue";
import {CommonText} from "../../components/CommonText";
import {CommonButton} from "../../components/Buttons/Common";
import {WarningButton} from "../../components/Buttons/Warning";
export const Home = () => {
    return<div className={'form-content'}>
        <div className={'form-title'}>
            <div>
                Reserva de Aula(s):
            </div>
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
                            <FormItemValue value={'150 Estudiantes'}/>
                        </div>
                        <div className={'form-item-inputs-left-flex'}>
                            <FormItemLabel label={'Fecha'}/>
                            <FormItemValue value={'150 Estudiantes'}/>
                        </div>
                    </div>
                    <div className={'form-item-inputs-left-flex'}>
                        <FormItemLabel label={'Motivo'}/>
                        <FormItemValue value={'150 Estudiantes'}/>
                    </div>
                </div>
                <div className={'form-divider'} />
                <div className={'form-item-inputs-right'}>
                    <div className={'form-item-inputs-left-flex'}>
                        <FormItemLabel label={'Docente'}/>
                        <FormItemValue value={'Esteban Quito R.'}/>
                    </div>
                </div>
            </div>
            <div className={'form-submit-container'}>
                <div className={'form-submit-description'}>
                    <CommonText>Luego de enviar su reserva, usted recibirá un mensaje de confirmación en un lapso de 24 horas en caso su solicitud sea aceptada, o rechazada por el administrador.</CommonText>
                </div>
                <div className={'form-submit-buttons'}>
                    <CommonButton title={'Enviar Reserva'} />
                    <WarningButton title={'Cancelar Reserva'} />
                </div>
            </div>

        </div>
    </div>
}
