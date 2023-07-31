import { AbstractControl, ValidationErrors } from '@angular/forms';

export const contactNoSpacesValidator = (
    control: AbstractControl
): ValidationErrors | null => {
    const value = '' + control.value;
    if (/\s/.test(value)) {
        return { contactNoSpacesValidator: true };
    }

    return null;
};

export const contactEmailValidator = (
    control: AbstractControl
): ValidationErrors | null => {
    const value = '' + control.value;
    if (!value.endsWith("@boolean.co.uk")) {
        return { contactEmailValidator: true };
    }

    return null;
};