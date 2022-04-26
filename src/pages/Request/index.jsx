import { FormTitle } from '../../components/FormTitle';
import {Classroom} from "../../components/Classroom"
import {FormItemLabel} from "../../components/FormItemLabel";
import {FormItemValue} from "../../components/FormItemValue";
import {CommonText} from "../../components/CommonText";
import {CommonButton} from "../../components/Buttons/Common";
import {WarningButton} from "../../components/Buttons/Warning";
import { SuccessfulButton } from '../../components/Buttons/Successful';
import "./styles.css"

export const Request = () => {
    return <div className={'request-content'}>
    <div className={'request-title'}>
        <FormTitle name={'Reserva de Aula(s):'}/>
        <Classroom name={'651'} />
        <Classroom name={'652'} />
    </div>

    <div className={'request-items'}>
        <div className={'request-item-inputs'}>
            <div className={'request-item-inputs-left'}>
                <div className={'request-item-inputs-left-flex'}>
                    <FormItemLabel label={'Docente'}/>
                    <FormItemValue value={'Esteban Quito R.'}/>
                    <FormItemValue value={'Esteban Quito R.'}/>
                </div>

                <div className={'request-item-inputs-left-flex'}>
                    <FormItemLabel label={'Lugar'}/>
                    <FormItemValue value={'Edificio Nuevo'}/>
                </div>

                <div className={'request-item-inputs-left-flex'}>
                    <FormItemLabel label={'Capacidad'}/>
                    <FormItemValue value={'150 Estudiantes'}/>
                </div>
                <div className={'request-item-inputs-left-flex'}>
                    <div className={'request-item-inputs-left-flex'}>
                        <FormItemLabel label={'Horario'}/>
                        <FormItemValue value={'14:15 - 15:45'}/>
                    </div>
                    <div className={'request-item-inputs-left-flex'}>
                        <FormItemLabel label={'Fecha'}/>
                        <FormItemValue value={'20/05/2022'}/>
                    </div>
                </div>
            </div>
            <div className={'request-divider'} />
            <div className={'request-item-inputs-right'}>
                <div className={'request-item-inputs-left-flex'}>
                        <FormItemLabel label={'Materia'}/>
                        <FormItemValue value={'Calculo 1'}/>
                        <FormItemValue value={'Calculo 2'}/>
                </div>

                <div className={'request-item-inputs-left-flex'}>
                    <FormItemLabel label={'Grupo (s)'}/>
                    <FormItemValue value={'1'}/>
                    <FormItemValue value={'3'}/>
                    <FormItemValue value={'4'}/>
                </div>
                <div className={'request-item-inputs-left-flex'}>
                        <FormItemLabel label={'Motivo'}/>
                        <FormItemValue value={'examen'}/>
                </div>

                <div className={'request-item-inputs-left-flex'}>
                    <div className={'request-item-inputs-left-flex'}>
                        <FormItemLabel label={'Conflicto con aulas:'}/>
                        <WarningButton title={'651'} />
                    </div>

                    <div className={'request-item-inputs-left-flex'}>
                        <FormItemLabel label={'Sugerencia de aulas:'}/>
                        <SuccessfulButton title={'653A'} />
                    </div>
                </div>
            </div>
        </div>
        <div className={'request-submit-container'}>
            <div className={'request-submit-description'}>
                <CommonText>Al confirmar se reservaran las aulas sin conflictos y se el enviara la sugerencia de nuevas aulas al docente</CommonText>
            </div>
            <div className={'request-submit-buttons'}>
                <CommonButton title={'Confirmar Reserva'} />
                <WarningButton title={'Rechazar Reserva'} />
            </div>
        </div>

    </div>
</div>

}
