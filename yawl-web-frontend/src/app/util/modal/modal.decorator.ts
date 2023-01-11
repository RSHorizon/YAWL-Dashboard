
import { ModalContainer } from './modal-container';


export function Modal() {
    return function (target: { prototype: any; }) {
        Object.assign(target.prototype,  ModalContainer.prototype);
    };
}
